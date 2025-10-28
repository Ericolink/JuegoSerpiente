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