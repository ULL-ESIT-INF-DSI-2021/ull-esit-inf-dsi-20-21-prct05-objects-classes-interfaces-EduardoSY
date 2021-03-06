# Práctica 5 - Objetos, clases e interfaces
* Elaborado por Eduardo Da Silva Yanes

## 1. Introducción
En esta quinta práctica nos vamos a centrar en el uso de objetos, clases, interfaces. Vamos a tratar una cantidad menor de ejercicios pero algo más complejos. Para el desarrollo
de la tarea continuaremos haciendo uso de la metodología TDD así como de la generación de documentación gracias a Typedoc. Como puntos nuevos a tratar, podemos tratar de manera 
opcional cómo usar el debugger de VSCode para Typescript así como comenzar a familiarizarnos con [los principios SOLID de Typescript](https://samueleresca.net/solid-principles-using-typescript/)

## 2. Pasos previos
Antes de comenzar con el desarrollo de código fuente vamos a generar nuestra estructura de trabajo. En este caso será algo diferente. En lugar de tener simplemente un directorio **/src** donde almacenamos los diferentes ejercicios, vamos a hacer un directorio por cada ejercicio. Siempre que trabajemos con clases se recomienda crear un directorio independiente para cada ejercicio y, dentro de ese directorio, un fichero independiente para cada clase.
El resto será completamente igual.

## 3. Desarrollo de la práctica

**[Acceso a la documentación generada con Typedoc](./docum/index.html)**

**[Acceso al directorio de código fuente](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-EduardoSY/blob/master/src)**

**[Acceso al directorio de pruebas unitarias](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-EduardoSY/blob/master/tests)**

Para tener el planteamiento completo de los ejercicios puede acceder al [Guión práctica 5](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/).

### EJERCICIO 1 - Pokedex

[Acceso a la documentación generada con Typedoc](./docum/index.html)

- **Clase Pokemon**

  [Acceso al código de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-EduardoSY/blob/master/src/ejercicio-1/pokemon.ts)

  [Acceso a las pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-EduardoSY/blob/master/tests/ejercicio-1-tests/pokemon.spec.ts)

  Vamos a diseñar una clase para representar a los pokemon. Cada pokemon tiene una serie de atributos como son el nombre, el peso y altura, el tipo y sus 4 características básicas: ataque, defensa, velocidad y salud.

  Entonces, vamos a implementar cada una de estas carácterísticas como atributos privados de la clase. Además, vamos a implementar una variable que denominaremos **hpCombate** donde iremos almacenando la salud actual del pokemon durante el combate, es decir, los puntos de salud restantes después de cada ataque enemigo.

  En cuanto a funciones tenemos:
    - Getters
    - `showData()` Esta funcion muestra el nombre el pokemon, su tipo, su ataque, defensa y salud máxima.
    ```typescript
    showData() {
    console.log("Pokemon -> " + this.getName() + " Tipo: " +
    this.getType() + " Atk. " + this.getAttack() + " Def. " +
    this.getDef() + " HP. " + this.getMaxHP());
    }
    ```
    
  Con esta clase hecha ya podemos representar cualquier pokemon que queramos.

- **Clase Combat**

  [Acceso al código de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-EduardoSY/blob/master/src/ejercicio-1/combat.ts)

  [Acceso a las pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-EduardoSY/blob/master/tests/ejercicio-1-tests/combat.spec.ts)

  Ahora es turno de la clase **Combat**. La idea de esta clase es represenatar un combate entre dos pokemon por lo que, como es de esperar, debemos darle dos pokemon con los que luchar.
  Además de almacenar los dos pokemon del combate en la clase, vamos a almacenar un 3 atributo: un array de dos elementos donde guardaremos el daño que realiza cada pokemon en base al tipo de cada uno y la efectividad. Estos valores los obtenemos gracias a la funcion `calculoCombate`:
  ```typescript
  calculoCombate(tipo1: string, tipo2: string,
      ataque: number, defensa: number): number {
    let efectividad: number = 0; // Variable de efectividad del ataque
    if (tipo1 === tipo2) {
      efectividad = 0.5;
    } else if (tipo1 === 'Fuego') {
      switch (tipo2) {
        case 'Hierba':
          efectividad = 2;
          break;
        case 'Electrico':
          efectividad = 1;
          break;
        case 'Agua':
          efectividad = 0.5;
          break;
      }
    } else if (tipo1 === 'Agua') {
      switch (tipo2) {
        case ('Hierba'):
        case ('Electrico'):
          efectividad = 0.5;
          break;
        case 'Fuego':
          efectividad = 2;
          break;
      }
    } else if (tipo1 === 'Electrico') {
      switch (tipo2) {
        case ('Fuego'):
        case ('Hierba)'):
          efectividad = 1;
          break;
        case 'Agua':
          efectividad = 2;
          break;
      }
    } else {
      switch (tipo2) {
        case 'Electrico':
          efectividad = 1;
          break;
        case 'Agua':
          efectividad = 2;
          break;
        case 'Fuego':
          efectividad = 0.5;
          break;
      }
    }

    let damage: number = 50 * (ataque/defensa) * efectividad;
    return parseFloat(damage.toFixed(2));
  }
  ```

  Con todo lo establecido anteriormente podemos empezar el combate. En esta simulación **siempre** atacará primero el pokemon que esté como primer parámetro. La velocidad no va a influir en este contexto.

  Mientras alguno de los dos pokemon esté vivo iremos realizando ataques por turno. Por cada ataque vamos a indicar quién ataca a quién y con cuanto daño. Además mostraremos la vida actual de cada combatiente.

  Cuando acabe el combate se mostrará y retornará el ganador.

  Todo el combate se realiza gracias a la funcion `combatir()`:
  ```typescript

    combatir(): Pokemon {
    this.datos[0] = this.calculoCombate(this.poke1.getType(),
        this.poke2.getType(), this.poke1.getAttack(), this.poke2.getDef());
    this.datos[1] = this.calculoCombate(this.poke2.getType(),
        this.poke1.getType(), this.poke2.getAttack(), this.poke1.getDef());
    let iterator: number = 1;
    console.log("\n## COMBATE POKEMON ##\n" +
    this.poke1.getName() + " - VS - " + this.poke2.getName());
    while ((this.poke1.hpCombate > 0) && (this.poke2.hpCombate > 0)) {
      console.log("\n -[ Ronda " + iterator + " ]-");
      if ((iterator % 2) == 0) {
        console.log(this.poke2.getName() + " inflinje -" + this.datos[1] +
        " a " + this.poke1.getName());
        this.poke1.hpCombate -= this.datos[1];
      } else {
        console.log(this.poke1.getName() + " inflinje -" + this.datos[0] +
        " a " + this.poke2.getName());
        this.poke2.hpCombate -= this.datos[0];
      }
      iterator++;
      console.log(this.poke1.getName() + " [HP: " +
      +(this.poke1.hpCombate).toFixed(2) + "] VS " +
      this.poke2.getName() + " [HP: " +
      +(this.poke2.hpCombate).toFixed(2) + "]");
    }
    console.log("\n -> GANADOR: " +
    (this.poke1.hpCombate <= 0?this.poke2.getName() : this.poke1.getName()));

    if (this.poke1.hpCombate <= 0) {
      return this.poke2;
    } else {
      return this.poke1;
    }
  }
  ```

- **Clase Pokedex**

  [Acceso al código de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-EduardoSY/blob/master/src/ejercicio-1/pokedex.ts)

  [Acceso a las pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-EduardoSY/blob/master/tests/ejercicio-1-tests/pokedex.spec.ts)

  Esta clase va a albergar distintos Pokemon en una base de datos. Esta base de datos será un array de Pokemon.

  Dentro de esta clase tenemos algunas funciones para interactuar con la base de datos:
  - `addPokemon(pokemon)`: Funcion para añadir pokemon a la pokedex
  ```typescript
  public addPokemon(pokemon: Pokemon) {
    this.datosPokemon.push(pokemon);
  }
  ```
  - `delPokemon(pokemon)`: Funcion para eliminar a un pokemon de la pokedex.
  ```typescript
  public delPokemon(pokemon: Pokemon) {
    let pos: number = -1;
    this.datosPokemon.forEach((iter) => {
      if (iter === pokemon) {
        pos = this.datosPokemon.indexOf(iter);
      }
    });
    if (pos == -1) {
      console.log('Imposible eliminar. Pokemon no encontrado');
    } else {
      this.datosPokemon.splice(pos, 1);
    }
  };
  ```
  - `buscarPokemon`: Funcion para realizar una búsqueda en la pokedex. 
  ```typescript
    public buscarPokemon(pokemon: Pokemon) {
    let pos: number = -1;
    this.datosPokemon.forEach((iter) => {
      if (iter === pokemon) {
        pos = this.datosPokemon.indexOf(iter);
      }
    });
    if (pos == -1) {
      return null;
    } else {
      return this.datosPokemon[pos];
    }
  }
  ```

### EJERCICIO 2 - Gestor bibliográfico

- **Clase Articulo**

  [Acceso al código de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-EduardoSY/blob/master/src/ejercicio-2/articulo.ts)

  [Acceso a las pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-EduardoSY/blob/master/tests/ejercicio-2-tests/articulo.spec.ts)

  Esta clase la creamos con el objetivo de poder representar cada Articulo de una manera independiente.

  Como atributos tendremos la información relativa al artículo. En este caso serán todos atributos privatos. Tenemos uno para el título, un array para los autores, un array para sus correspondientes correos de contacto, un array para las palabras clave, un resumen del articulo, la fecha, editorial y cantidad de citas.

  Tenemos la función `apasinDoi()`. El objetivo de esta función es transformar la información que tenemos almacenada sobre el artículo a una referencia en formato APA. 
  Un ejemplo de formato APA sería el siguiente:

  ```
  Sillick, T. J. y Schutte, N. S. (2006). Emotional intelligence and self-esteem mediate between perceived early parental
  love and adult happiness. E-Journal of Applied Psychology, 2(2), 28-48
  ```

  Entonces, a partir de ese ejemplo, planteamos nuestro código. Lo primero es mostrar a los autores, mostrando primero su apellido y luego la inicial de su nombre. Hacemos esto con todos los autores. A continuación debemos mostrar la fecha de publicación entre paréntesis, seguido del título y la editorial (o revista que lo publica).
  
  ```typescript
  public apasinDOI(): string {
    let resultado: string = '';
    for (let i = 0; i < this.getAutor().length; i++) {
      let autorAux: string[] = this.getAutor()[i].split(" ");
      resultado += autorAux[1] + ", " + autorAux[0][0] + ". ";
      if (i < this.getAutor().length - 1) {
        resultado += "y ";
      }
    }

    resultado += "(" + this.getFecha() + "). ";
    resultado += this.getTitulo() + ". ";
    resultado += this.getEditorial() + ".";
    return resultado;
  }
  ```

  El resto de funciones son simplemente **getters** usados para acceder a los atributos de la clase.

- **Clase Gestor**

  [Acceso al código de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-EduardoSY/blob/master/src/ejercicio-2/gestor.ts)

  [Acceso a las pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-EduardoSY/blob/master/tests/ejercicio-2-tests/gestor.spec.ts)

  Esta clase será como una librería de referencias. Por tanto, para almacenar cada uno de los artículos vamos a crear un array de artículos denominado **listaArtículos**.

  Para manipular esta base de datos tenemos las siguientes funciones:

  - `imprimirTabla()` se encarga de mostrar toda la información de la lista de artículos en forma de tabla.
  ```typescript
   public imprimirTabla() {
    console.table(this.listaArticulos);
  }
  ```

  - `busqueda(clave)` se encarga de realizar una búsqueda entre los diferentes artículos buscando aquellos cuyas palabras clave coincidan con la que nosotros le hemos pasado.
    Todos los artículos que coinciden se van guardando en un array de artículos que posteriormente serán devueltos.

    Cabe destacar que esta función no está completa debido a que, en el ejercicio, se nos pedía que, además de buscar, debía poder filtrar por fecha, nombre, etc. Esta última parte de filtrar no la he podido implementar.
  ```typescript
   public busqueda(clave: string): Articulo[] {
    let resultado: Articulo[] = [];
    for (let articulo of this.listaArticulos) {
      for (let key of articulo.getClaves()) {
        if (key === clave) {
          resultado.push(articulo);
          break;
        }
      }
    }
    return resultado;
  }
  ```

  - `exportarAPA(clave)` busca los articulos que tienen como keyword a la clave que hemos pasado como parámetro. Para hacer esta búsqueda hacemos uso de la función explicada previamente.

  Una vez hemos obtenido todas las coincidencias vamos generando un array de string donde almacenamos cada una de las citas en formato APA.
  ```typescript
  public exportarAPA(clave: string): string[] {
    let resultBusqueda: Articulo[] = this.busqueda(clave);
    let resultExport: string[] = [];
    for ( let element of resultBusqueda) {
      resultExport.push(element.apasinDOI());
    }
    return resultExport;
  }
  ```


### EJERCICIO 3 - Medios de transporte

  [Acceso al código del ejercicio](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-EduardoSY/blob/master/src/ejercicio-3)

  [Acceso a las pruebas del ejercicio](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-EduardoSY/blob/master/tests/ejercicio-3-tests)

- **Interface Movable**

  Tal y como nos pide el ejercicio, debemos representar una interfaz denominada Movable. Esta interfaz contiene os atributos que, a mi criterio, son necesarios para cualquier tipo de vehículo.

  Estos son: nombre del vehículo (por ejemplo, una marca), numero de ruedas, velocidad a la que circula y capacidad de transporte que tiene.
  ```typescript
  export interface Movable {
  nombre: string;
  nRuedas: number;
  velocidad: number;
  capacidad: number;
  }
  ```

- **Clases Coche, Moto, Bicicleta, Patin, Peaton, Tren**

  Todas estas clases son iguales. Todas extienden la interfaz Movable. Además, todas tienen sus getters para poder acceder a los atributos de cada una.

  Aquí un ejemplo con la clase coche:
  ```typescript
  import {Movable} from './movable';
  export class Coche implements Movable {
    constructor(public nombre: string, public nRuedas: number,
      public velocidad: number, public capacidad: number) {
    }
    public getNombre() {
      return this.nombre;
    }
    public getCapacidad() {
      return this.capacidad;
    }
    public getVelocidad() {
      return this.velocidad;
    }
    ...
    ...
    Resto de getters
    ...
    ...
  };
  ```

- **Clase Street**

  Esta clase es la que representará a la calle. Para nuestro caso vamos a definir que la calle necesita:
  - Nombre de la calle
  - Localización de la calle
  - Cantidad de vehículos que circulan de cada tipo
    Para este punto hemos creado un array por cada tipo de vehículo que hemos definido anteriormente. De esta manera, cuando creemos un objeto Street, debemos definir cuantos objeto de cada tipo de vehículo hay en ese momento. Si está vacio entendemos que no hay ningún vehículo de ese tipo en ese momento.
    
    La implementación por arrays nos permite saber cuantos vehículos de cada tipo hay de manera sencilla. Así mismo, cuando tengamos que ordenar por velocidad será mucho más sencillo ya que ordenamos cada categoría de manera independiente.

  Dentro de esta clase tenemos las siguientes funciones:

  - `infoCalle` El objetivo de esta función es mostrar cómo está la situación en la calle. Nos muestra cuántos vehículos de cada tipo están circulando por la calle en forma de tabla.
  ```typescript
    public infoCalle() {
    console.log("Vehiculos circulando en " + this.calle +
    " Direccion: " + this.direccion);
    console.log("-> CANTIDAD MOTOS = " + this.nMoto.length);
    console.table(this.nMoto);
    console.log("-> CANTIDAD COCHES = " + this.nCoche.length);
    console.table(this.nCoche);
    ...
    ...
    ...
    }
  ```

  - `addVehiculo(vehiculo)` Esta funcion nos permite agregar un vehículo a la calle. Como recordamos, dentro de la calle tenemos distintos tipos de vehículos que son almacenados en arrays.

  Una vez hemos recibido el vehículo averiguamos qué tipo es, es decir, si es un coche, una moto, etc. Para ello hacemos uso de **instanceof**. Entonces, dependiendo del tipo hacemos un push al array correspondiente.
  ```typescript
  public addVehiculo(vehiculo: Moto|Coche|Bicicleta|Patin|Peaton|Tren) {
    if (vehiculo instanceof Moto) {
      this.nMoto.push(vehiculo);
    } else if (vehiculo instanceof Coche) {
      this.nCoche.push(vehiculo);
    } else if (vehiculo instanceof Bicicleta) {
      this.nBici.push(vehiculo);
    } else if (vehiculo instanceof Patin) {
      this.nPatin.push(vehiculo);
    } else if (vehiculo instanceof Peaton) {
      this.nPeaton.push(vehiculo);
    } else {
      this.nTren.push(vehiculo);
    }
  }
  ```

  - `delVehiculo(vehiculo)` Esta funcion hace lo contrario a la anterior. En lugar de añadir un vehiculo lo que hace es eliminarlo.
  El procedimiento es el mismo. Averiguamos su tipo para saber en qué lista está alojado. Una vez lo sabemos hacemos uso de **splice**. A esta función le pasamos la posición del elemento a borrar y la cantidad a borrar a partir de el. En este caso solo queremos borrar uno asi que pondremos un uno. 

  La posición la sacamos gracias a **indexOf**

  Entonces el comando queda algo así en la caso de una moto.

  ```typescript
  this.nMoto.splice(this.nMoto.indexOf(vehiculo), 1);
  ```

  Esta sería la funcioń completa:
  ```typescript
  public delVehiculo(vehiculo: Moto|Coche|Bicicleta|Patin|Peaton|Tren) {
    if (vehiculo instanceof Moto) {
      this.nMoto.splice(this.nMoto.indexOf(vehiculo), 1);
    } else if (vehiculo instanceof Coche) {
      this.nCoche.splice(this.nCoche.indexOf(vehiculo), 1);
    } else if (vehiculo instanceof Bicicleta) {
      this.nBici.splice(this.nBici.indexOf(vehiculo), 1);
    } else if (vehiculo instanceof Patin) {
      this.nPatin.splice(this.nPatin.indexOf(vehiculo), 1);
    } else if (vehiculo instanceof Peaton) {
      this.nPeaton.splice(this.nPeaton.indexOf(vehiculo), 1);
    } else {
      this.nTren.splice(this.nTren.indexOf(vehiculo), 1);
    }
  }
  ```

  - `ordenarVelocidad()`: Esta última función nos permite ordenar cada array de vehículos en base a la velocidad a la que circulan. Serán ordenados de menor a mayor velocidad.

    Para ordenar haremos uso de la función sort junto a una función que le pasamos como parámetro.

    Así ordenariamos las motos:

    ```typescript
    this.nMoto.sort(function(a, b) {
          return a.getVelocidad() - b.getVelocidad();
        });
    ```
    Sort funciona de la siguiente manera. Le pasamos una función con los elementos a comparar. En este caso es a y b. Ahora hacemos la resta entre el atributo que estamos comparando, es decir, la velocidad.
    Si el resultado es **menor que 0**, a se situa antes que b. Si el **resultado es 0 no hay ninguna modificación**. Si resulta que la resta da un **resultado mayor que 0** se coloca **b antes que a**.

    Repetimos este proceso con cada uno de los arrays.

    ```typescript
    public ordenarVelocidad() {
    this.nMoto.sort(function(a, b) {
      return a.getVelocidad() - b.getVelocidad();
    });
    this.nCoche.sort(function(a, b) {
      return a.getVelocidad() - b.getVelocidad();
    });
    this.nBici.sort(function(a, b) {
      return a.getVelocidad() - b.getVelocidad();
    });
    this.nPatin.sort(function(a, b) {
      return a.getVelocidad() - b.getVelocidad();
    });
    this.nPeaton.sort(function(a, b) {
      return a.getVelocidad() - b.getVelocidad();
    });
    this.nTren.sort(function(a, b) {
      return a.getVelocidad() - b.getVelocidad();
    });
    console.log("\nVehiculos ordenador por VELOCIDAD\n---");
  }
  ```

## 4. Conclusión
Ya poco a poco vamos notando cómo la complejidad de las prácticas aumenta. Aunque ciertamente no es nada excesivamente complicado, algunos aspectos se me \"atragantaron\". Esto lo he podido notar en la correción presencial ya que, aunque el ejercicio no fue en absoluto dificil, tuve algunos problemas al inicio del ejercicio. Por ello me he dado cuenta de que debo profundizar más en los conceptos de TDD. 

Además, cabe destacar que este tipo de ejercicios, con planteamientos tan amenos y dinámicos hace que la realización de las prácticas sea mucho más llevadera.

## 5. Referencias
- [Guión práctica 5](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/): Guión de la práctica .
- [Guía para crear un proyecto](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html): Guía del profesor para crear un proyecto.
- [Tutorial de instalación y configuracion Typedoc (Solo alumnos ULL)](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view): Tutorial creado por el profesor sobre cómo instalar, configurar y utilizar Typedoc.
- [Tutorial de instalación y configuración de Mocha y Chai en un proyecto TS (Solo alumnos ULL)](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view): Tutorial creado por el profesor sobre cómo instalar, configurar y utilizar Mocha y Chai.
- [Apuntes sobre objetos, clases e interfaces](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-objects-classes-interfaces.html): Apuntes creados por el profesor sobre objetos, clases e interfaces.
- [Guia de Typedoc](https://typedoc.org/guides/installation/): Guia oficial de Typedoc
- [Guía de estilo APA](https://biblioguias.uam.es/citar/estilo_apa): Guía sobre los distintos estilos APA
- [Formas de eliminar elementos de un array](https://love2dev.com/blog/javascript-remove-from-array/): Explicación de distintas formas de eliminar un elemento de un array.
- [Cómo ordenar un array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort): Explicación de cómo funciona la función sort acompañada de ejemplos.
