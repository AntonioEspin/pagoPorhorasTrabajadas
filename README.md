# PAGO POR HORAS TRABAJADAS

Ejercicio implementado para calcular el pago que recibirá el trabajador por sus horas prestadas a la empresa, de la cual forma parte.

### DESCRIPCIÓN GENERAL DE LA SOLUCIÓN

Se usó un archivo .html y .js respectivamente, para separar la estructura de la lógica.

En el archivo .html se implementaron los inputs y los botones para ingresar información y manejar los eventos, con los cuales se obtendrán los resultados del ejercicio.

En el archivo .js obtenemos los elementos implementados en el archivo .html, para ser manipulados por medio de javascript. Principalmente hacemos uso de cuatro eventos, los cuales tienes sus funciones especificas para resolver el problema:

- addButton: Calcula e implementa el pago diario.
- removeButton: Elimina el ultimo valor ingresado.
- fullButton: Obtiene el valor total a pagar.
- newEmployee: Limpia los valores para calcular los datos del siguiente trabajador.

### EXPLICACIÓN DE LA ARQUITECTURA

Tomando en cuenta como se ejecuta el código. Primero declaramos las variables que se van a utilizar a lo largo del ejercicio, guardando en ellas los valores que manipularemos.

Después declaramos los eventos que darán interactividad al programa.

Y a continuación creamos las funciones que complementan a dichos eventos, los cuales fueron declarados para una mejor comprensión en la lectura del código.

### ENFOQUE Y METODOLOGÍA

La solución de este ejercicio está enfocado en la correcta manipulación del DOM y en llevar un orden estructurado para una mayor comprensión al momento de leer el código.
La metodología usada en su mayoría es con javascript moderno para evitar la sobreescritura (por tal razón no se usa la variable "var"), y se usa tambíen "arrow functions" ya que estas facilitan mucho a la hora de escribir código.

### CÓMO EJECUTAR EL PROGRAMA?

Para que puedas comprender mejor el ejercicio, clona este repositorio en tu lugar de trabajo.

`git clone git@github.com:AntonioEspin/pagoPorhorasTrabajadas.git`

Obtendrás todos los archivos y el código que usé para el proyecto.

Tendrás un archivo .txt con toda la información del trabajador con su respectivo calendario.

Este es el link al programa para que puedas comprobar que el ejercicio funciona:
[Pago por horas](https://antonioespin.github.io/pagoPorhorasTrabajadas/public/index.html "Pago por horas")

En el Programa:

1. Ingresa el nombre del empleado en la primera opción.

2. Usarás las siguientes abreviaciones para ingresar la información del día :

- MO: Monday
- TU: Tuesday
- WE: Wednesday
- TH: Thursday
- FR: Friday
- SA: Saturday
- SU: Sunday

3. Al seleccionar la hora de entrada y salida puedes escribirlo por medio de tu teclado o desplazarlo con el ratón.

4. Agrega todos los valores que tengas en el archivo .txt con el botón "add".

5. Si quieres eliminar un dato usa el botón "remove".

6. Cuando ya tengas todos los datos ingresados usa el botón "full payment" para obtener el valor total de las horas trabajadas.

7. Usa el botón "new employee" para ingresar los datos del siguiente trabajador.
