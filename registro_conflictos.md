Fecha: 2025-10-28

Ramas involucradas: interfaz-juego

Archivos afectados: index.html

Causa: Cambios concurrentes en la estructura del menú principal y en la interfaz del HUD dentro del archivo index.html.

Resolución (paso a paso):

Bryam tomó la rama local y realizó git pull desde develop.

Se detectaron conflictos en index.html en las secciones <div id="menu"> y <div id="hud">.

El equipo acordó mantener el nuevo diseño del menú propuesto por Bryan (con selector de dificultad y botones actualizados) y conservar los ajustes de Diego en el HUD (botones de Menú y Reiniciar).

Se resolvieron manualmente los conflictos, verificando que los elementos del DOM conservaran sus respectivos id y clases.

Se probó el juego en el navegador, confirmando que los botones y sonidos funcionaran correctamente.

Se realizó el commit con el mensaje fix: merge index.html UI conflict resolved y se subió a develop.

Se cerró el Pull Request.

Lecciones aprendidas: Antes de modificar el mismo archivo HTML, coordinar en Slack qué secciones cambiará cada integrante y documentar los componentes del DOM compartidos para evitar conflictos en etiquetas y atributos.