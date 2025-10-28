const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const menu = document.getElementById("menu");
const gameContainer = document.getElementById("game-container");
const scoreElement = document.getElementById("score");
const highscoreElement = document.getElementById("highscore");
const difficultySelect = document.getElementById("difficulty");
const eatSound = document.getElementById("eatSound");
const gameOverSound = document.getElementById("gameOverSound");

const box = 20;
const canvasSize = 500;
let snake, food, direction, score, highscore, gameLoop;

// Cargar récord
highscore = localStorage.getItem("highscore") || 0;
highscoreElement.textContent = highscore;

// Función para iniciar el juego
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
document.addEventListener("keydown", changeDirection);

function startGame() {
  menu.classList.add("hidden");
  gameContainer.classList.remove("hidden");

  score = 0;
  direction = null;
  snake = [{ x: 10 * box, y: 10 * box }];
  food = randomFood();

  scoreElement.textContent = score;

  if (gameLoop) clearInterval(gameLoop);
  const speed = parseInt(difficultySelect.value);
  gameLoop = setInterval(draw, speed);
}

// Generar comida aleatoria
function randomFood() {
  return {
    x: Math.floor(Math.random() * (canvasSize / box)) * box,
    y: Math.floor(Math.random() * (canvasSize / box)) * box,
  };
}

function changeDirection(event) {
  const key = event.key;
  if (key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  if (key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  if (key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  if (key === "ArrowDown" && direction !== "UP") direction = "DOWN";
}

// Dibuja el juego en cada frame
function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.85)";
  ctx.fillRect(0, 0, canvasSize, canvasSize);

  // Dibuja la comida con efecto glow
  ctx.shadowColor = "#ff0044";
  ctx.shadowBlur = 15;
  ctx.fillStyle = "#ff0044";
  ctx.fillRect(food.x, food.y, box, box);
  ctx.shadowBlur = 0;

  // Dibuja la serpiente
  for (let i = 0; i < snake.length; i++) {
    const gradient = ctx.createLinearGradient(0, 0, 500, 500);
    gradient.addColorStop(0, "#00ff88");
    gradient.addColorStop(1, "#00cc66");
    ctx.fillStyle = i === 0 ? gradient : "#00aa55";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
    ctx.strokeStyle = "#000";
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  // Movimiento
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === "LEFT") snakeX -= box;
  if (direction === "UP") snakeY -= box;
  if (direction === "RIGHT") snakeX += box;
  if (direction === "DOWN") snakeY += box;