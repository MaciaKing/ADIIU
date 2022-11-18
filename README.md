# ADIIU
En este repositorio se encontrarán las practica que se han realizado para la assignatura 'Aplicaions Distribuides i Interficies D'usuari' de la Universidadde las Islas Baleares. Se encontrarán 3 proyectos diferentes divididos en carpeteas.

## Proyecto 1

Este es un proyecto simple donde se toca el front-end y back-end para mostrar una aplicación web donde se muestren gráficos de datos. 

### Tecnologías usadas

- Para la parte del front se ha utilizado una plantilla de bootstrap que nos permite utilizar diferentes estilos y conseguir que la aplicación web sea web-responsive; además de funcionalidades propias de JS para la presentación de la página y el diseño de su contenido, que también hace uso de la librería Highcharts para presentar gráficos de datos fácilmente.

- La parte del Backend ha sido desarollada con PHP utilizando la distribución de XAMPP, que también se ha empleado para crear la base de datos de la que la práctica hace uso para representar los gráficos. 

### Distribución

- En la carpeta "DB Creation" se encontrará el código mySQL para la creación de una base de datos, que está compuesta simplemente por una tabla.
- En "css" el código css utilizado para los estilos de la página.
- En "js" el código JavaScript para interactuar con el backend "PHP" y presentar los datos en elcódigo html.
- En "lib" las librería empleadas para el correcto funcionamiento del código JavaScript.
- En "PHP" todo el código referente a la comunicación con la base de datos y laextracción de los mismos mediante queries mySQL.
- En "scss" se ubica código css proveniente de la plantilla bootstrap empleada.

### Dependiencias

- Se requiere el uso de XAMPP como emulador de base de datos y distribución de PHP.

### Modo de uso

Para hacer funcionar este proyecto es necesario mover todo el proyecto en el directorio "htdocs" de XAMPP. A su vez es necesario que se cree una base de datos, que en este ejemplo se encuentran unos cuantos inserts en el fichero "People.sql" ubicado en a carpeta "DB Creation". Una vez completados todos estos aspectos, basta con abrir con un navegador el fichero "index.html" de la carpeta "Practica1" para visualizar la aplicación web, de manera que en el navegador quede indexando "localhost/ADIIU/Practica1/index.html"


