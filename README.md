# gestor_de_habitaciones

Gestor de ocupación de habitaciones

Requisitos
Construir una herramienta de optimización de la ocupación de habitaciones para uno de nuestros clientes hoteleros. Nuestro cliente tiene un
cierto número de habitaciones libres cada noche, así como los huéspedes potenciales que le gustaría reservar
una habitación para esa noche.
Nuestro cliente hotelero tiene dos categorías diferentes de habitaciones: Premium y Economy. Nuestro
hoteles quieren que sus clientes estén satisfechos: no reservarán a un cliente dispuesto a pagar
100 euros o más por la noche en una habitación Economy. Pero sí reservarán a clientes que pagan menos
clientes que pagan menos en habitaciones Premium si estas habitaciones están vacías y todas las habitaciones Economy están ocupadas por clientes que pagan menos.
se llenarán de clientes que paguen poco.

Los clientes que paguen más por debajo de 100 euros tendrán
preferencia para la "mejora".

Los clientes siempre tienen un precio específico que están
que están dispuestos a pagar por la noche.


Por favor, cree una pequeña aplicación que proporcione una interfaz para que los hoteles introduzcan el número de
número de habitaciones Premium y Economy que están disponibles para la noche y que les diga
inmediatamente cuántas habitaciones de cada categoría estarán ocupadas y cuánto dinero
y cuánto dinero ganarán en total. Los huéspedes potenciales están representados por una serie de números que es
su disposición a pagar por la noche. Estos datos no tienen que formar parte de la interfaz de usuario.
Requisitos para una solución válida:
- Seguimiento del progreso a través de Git commits
- README.md mínimo que explique cómo ejecutar el proyecto
- Tests/TDD (al menos utilizar los especificados anteriormente)
- Un algoritmo que funcione implementado en JavaScript ES6 (TypeScript está bien)
- Uso de React para la UI
- Gestión de estados usando React Context Api, Redux, o RxJS
- Estructura y formato de código limpios
- Nombres bien pensados de variables y funciones
- Buscar una alta calidad de código en lugar de la integridad si se siente la presión del tiempo
Es bueno tenerlo:
- Buen diseño/formateo de la interfaz de usuario
- Cualquier otra cosa que quiera añadir

No es necesario que hagas todas las partes del reto a la perfección. Sobre todo trata de mostrar tus
puntos fuertes. Y si te sientes incapaz de terminar el proyecto a tiempo o no puedes cumplir alguno de los
requisitos por la razón que sea, por favor, háznoslo saber antes de empezar a trabajar para que podamos
para que podamos encontrar otra solución.
Utiliza el siguiente archivo json sin procesar como datos de prueba para posibles clientes(guests) en tus pruebas. Incluya el archivo
descargado en el proyecto o consígalo y analícelo desde el Github directamente:
- https://gist.github.com/lwhiteley/b01cf0964e19704df06fccf44d0c3c4d
Los resultados de las pruebas deberían ser los siguientes

Prueba 1
- Habitaciones gratuitas Premium: 3 Habitaciones gratuitas Economy: 3
- Uso Premium: 3 (738 euros) Uso Economy: 3 (167 euros)

Prueba 2
- Habitaciones Premium gratuitas: 7 Habitaciones Economy gratuitas: 5
- Utilización Premium: 6 (1054 euros) Utilización Economy: 4 (189 euros)

Prueba 3
- Habitaciones Premium gratuitas: 2 Habitaciones Economy gratuitas: 7
- Utilización Premium: 2 (583 euros) Utilización Economy: 4 (189 euros)
Prueba 4
- Habitaciones Premium gratuitas: 7 Habitaciones Economy gratuitas: 1
- Utilización Premium: 7 (1153 euros) Utilización Economy: 1 (45 euros)




Modelo Habitaciones
+--- Tipos Premium y Economy
Modelo Huespedes
+--- Tipo Rico Pobre
Modelo Reservar

Condiciones
+--- condicion Rico Huesped  con mas de 100 --> Premium , 100% ---> Economy
+--- condicion Pobre Huesped menos de 100 --> Economy, 100%, ---> Premium
+--- condicion de mejora Cliente pobre

Modelo Categorias Premium Economi


GUI Graphical User Interface
Habitaciones por noche?
[x] Premium
[x] Economicas
======

Ganancias:
Economy Ganancias  ____
Premium Ganancias  ____
Dinero Ganar Total ____

Ocupacion:
Premium Ocupadas   ____
Economy Ocupadas   ____


Prueba 1
246 x Hab Prem
55.66 x Hab Eco

Prueba 2
175 x Hab Prem
47.25 x Hab Eco

Prueba 3
291.5 x Hab Prem
47.25 x Hab Eco

Prueba 4
164.71 x Hab Prem
45 x Hab Eco


Premium
2  291.5
3  246
6  175
7  164.71

Econo
1  45
3  55.66
4  47.25





invitados.json
[
  23,
  45,
  155,
  374,
  22,
  99,
  100,
  101,
  115,
  209
]

Clientes:
23, 45, 22, 99
1    2     3   4    5    6
155, 374, 100, 101, 115, 209

Prueba 1
3 P 3 E = 374, 209, 155 = 738
           99, 45,  23 = 167

