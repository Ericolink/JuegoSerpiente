Fecha: 2025-10-28

Ramas involucradas: conflictos

Archivos afectados: script.js

Causa: Cambios concurrentes en la estructura del sonido principal del juego dentro del archivo script.js.

Resolución (paso a paso):

Bryan tomó la rama local conflictos y realizó git pull desde esa misma rama hacia main.

Se detectaron conflictos en index.html en las secciones songList.insertAdjacentHTML('beforeend', `<li>%{songName}</li>`).

El equipo acordó mantener el nuevo diseño del sonido principal del juego propuesto por Bryan (con una manera mas eficas para agregarlo) y conservar los ajustes de Eric (manteniendo el sonido principal original que el agrego).

Se resolvieron manualmente los conflictos, verificando que los elementos conservaran sus respectivos id y clases.

Se probó el juego en el navegador, confirmando que el sonido principal funcionara correctamente.

Se realizó el commit con el mensaje fix: Se agregó una versión nueva del elemento <li> y proceso del conflicto.

Se cerró el Pull Request.

Lecciones aprendidas: Antes de modificar el mismo archivo HTML, coordinar en Slack qué secciones cambiará cada integrante y documentar los componentes del DOM compartidos para evitar conflictos en etiquetas y atributos.