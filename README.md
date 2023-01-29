# scrap.funimation.com

Scrap del site funimation.com. Más de 830 títulos.

## Aplicación

Puedes ir directamente a la aplicación de búsqueda a:

 - [https://allnulled.github.io/scrap.funimation.com](https://allnulled.github.io/scrap.funimation.com/index.html)

## Explicación

Este scrap está basado en las peticiones `AJAX` del site. Los pasos a seguir (finales, no intermedios) han sido: 

  - Cargar en pantalla todos los títulos posibles.
  - Descargar el fichero `.HAR` (un JSON con las peticiones `AJAX` que ha hecho el navegador) con todas las peticiones.
  - Depurar y unificar los datos interesantes del `.HAR`.

La unificación de estos datos lo hace el script en [`./scripts/script.network.extraction.js`](#), y se terminan teniendo en [`./app/responses.all.js`](#) para que la aplicación en [`./app/app.calo`](#) pueda tomarlos y empaquetarlos en un mismo HTML todo, que finalmente es expuesto en [`./docs/index.html`](#), la aplicación.


