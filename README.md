# scrap.funimation.com

Scrap del site funimation.com. Más de 830 títulos.

## Aplicación

Puedes ir directamente a la aplicación de búsqueda a:

 - [https://allnulled.github.io/scrap.funimation.com](https://allnulled.github.io/scrap.funimation.com/index.html)

## Explicación

Este scrap está basado en el `DOM` de una de las páginas del site. Los pasos a seguir para reproducirlo son: 

  - Navegar dentro del site hasta la página de "Todos los títulos".
  - Cargar en pantalla todos los títulos posibles.
  - Aplicar el script de *scripts/scrap.general.js* vía consola del navegador.
  - Copiar y pegar el JSON imprimido por consola en *datos/scrap.general.json*.
  - Ejecutar el script *scripts/script.to-excel.js* con node.js vía consola del sistema operativo.
  
Este último paso debería generar el csv en *datos/funimation.com.csv*.