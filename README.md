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
