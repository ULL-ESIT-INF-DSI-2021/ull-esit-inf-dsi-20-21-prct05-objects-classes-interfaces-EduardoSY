# Práctica 4 - Arrays, tuplas y enumerados
* Elaborado por Eduardo Da Silva Yanes

## 1. Introducción
En esta quinta práctica nos vamos a centrar en el uso de objetos, clases, interfaces. Vamos a tratar una cantidad menor de ejercicios pero algo más complejos. Para el desarrollo
de la tarea continuaremos haciendo uso de la metodología TDD así como de la generación de documentación gracias a Typedoc. Como puntos nuevos a tratar, podemos tratar de manera 
opcional cómo usar el debugger de VSCode para Typescript así como comenzar a familiarizarnos con [los principios SOLID de Typescript](https://samueleresca.net/solid-principles-using-typescript/)
## NOTA ACLARATORIA
En este informe no están los comentarios necesarios para generar documentación a partir del código fuente con Typedoc. Esto lo he hecho para así tener un informe menos extenso,
más limpio y con un código menos engorroso. Si quieres ver los comentarios utilizados para Typedoc puedes acceder al código fuente directamente gracias al enlace en cada apartado.

## 2. Pasos previos
Antes de comenzar con el desarrollo de código fuente vamos a generar nuestra estructura de trabajo. En este caso será algo diferente. En lugar de tener simplemente un directorio **/src** donde almacenamos los diferentes ejercicios, vamos a hacer un directorio por cada ejercicio. Siempre que trabajemos con clases se recomienda crear un directorio independiente para cada ejercicio y, dentro de ese directorio, un fichero independiente para cada clase.
El resto será completamente igual.

### EJERCICIO 1 - Pokedex

[Acceso a la documentación generada con Typedoc](./docum/index.html)

1. **Clase Pokemon**
[Acceso al código de la clase]()

Vamos a diseñar una clase para representar a los pokemon. Cada pokemon tiene una serie de atributos como son el nombre, el peso y altura, el tipo y sus 4 características básicas: ataque, defensa, velocidad y salud.

Entonces, vamos a implementar cada una de estas carácterísticas como atributos privados de la clase. Además, vamos a implementar una variable que denominaremos **hpCombate** donde iremos almacenando la salud actual del pokemon durante el combate, es decir, los puntos de salud restantes después de cada ataque enemigo.

Con esta clase hecha ya podemos representar cualquier pokemon que queramos.

2. **Clase Combat**
[Acceso al código de la clase]()

Ahora es turno de la clase **Combat**. La idea de esta clase es represenatar un combate entre dos pokemon por lo que, como es de esperar, debemos darle dos pokemon con los que luchar.
Además de almacenar los dos pokemon del combate en la clase, vamos a almacenar un 3 atributo: un array de dos elementos donde guardaremos el daño que realiza cada pokemon en base
al tipo de cada uno y la efectividad. Estos valores los obtenemos gracias a la funcion **calculoCombate**.

Con todo lo establecido anteriormente podemos empezar el combate. En esta simulación **siempre** atacará primero el pokemon que esté como primer parámetro. La velocidad no va a influir en este contexto.

Mientras alguno de los dos pokemon esté vivo iremos realizando ataques por turno. Por cada ataque vamos a indicar quién ataca a quién y con cuanto daño. Además mostraremos la vida actual de cada combatiente.

Cuando acabe el combate se mostrará y retornará el ganador.

3. **Clase Pokedex**
[Acceso al código de la clase]()

Esta clase va a albergar distintos Pokemon en una base de datos. Esta base de datos será un array de Pokemon.

Dentro de esta clase tenemos algunas funciones para interactuar con la base de datos. Tenemos una función para añadir un pokemon **addPokemon(pokemon)**, una funcion para eliminar un pokemon de la pokedex **delPokemon(pokemon)** y una funcion para realizar una búsqueda en la pokedex, **buscarPokemon**.

### EJERCICIO 2 - Gestor bibliográfico

1. **Clase Articulo**
[Acceso al código de la clase]()

Esta clase la creamos con el objetivo de poder representar cada Articulo de una manera independiente.

Como atributos tendremos la información relativa al artículo. En este caso serán todos atributos privatos. Tenemos uno para el título, un array para los autores, un array para sus correspondientes correos de contacto, un array para las palabras clave, un resumen del articulo, la fecha, editorial y cantidad de citas.

Tenemos la función **apasinDoi()**. El objetivo de esta función es transformar la información que tenemos almacenada sobre el artículo a una referencia en formato APA. 
Un ejemplo de formato APA sería el siguiente:
```
Sillick, T. J. y Schutte, N. S. (2006). Emotional intelligence and self-esteem mediate between perceived early parental
love and adult happiness. E-Journal of Applied Psychology, 2(2), 28-48
```

Entonces, a partir de ese ejemplo, planteamos nuestro código. Lo primero es mostrar a los autores, mostrando primero su apellido y luego la inicial de su nombre. Hacemos esto con todos los autores. A continuación debemos mostrar la fecha de publicación entre paréntesis, seguido del título y la editorial (o revista que lo publica).

El resto de funciones son simplemente **getters** usados para acceder a los atributos de la clase.

2. **Clase Gestor**

  [Acceso al código de la clase]()

  Esta clase será como una librería de referencias. Por tanto, para almacenar cada uno de los artículos vamos a crear un array de artículos denominado **listaArtículos**.

  Para manipular esta base de datos tenemos las siguientes funciones:

  `**imprimirTabla()**` se encarga de mostrar toda la información de la lista de artículos en forma de tabla.

  `**busqueda(clave)**` se encarga de realizar una búsqueda entre los diferentes artículos buscando aquellos cuyas palabras clave coincidan con la que nosotros le hemos pasado.
  Todos los artículos que coinciden se van guardando en un array de artículos que posteriormente serán devueltos.

  Cabe destacar que esta función no está completa debido a que, en el ejercicio, se nos pedía que, además de buscar, debía poder filtrar por fecha, nombre, etc. Esta última parte de filtrar no la he podido implementar.

  `**exportarAPA(clave)**` busca los articulos que tienen como keyword a la clave que hemos pasado como parámetro. Para hacer esta búsqueda hacemos uso de la función explicada previamente.

  Una vez hemos obtenido todas las coincidencias vamos generando un array de string donde almacenamos cada una de las citas en formato APA.

### EJERCICIO 3 - Medios de transporte

1. **Interface Movable**
Tal y como nos pide el ejercicio, debemos representar una interfaz denominada Movable. Esta interfaz contiene 
