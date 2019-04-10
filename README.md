# Secretos de dos

![indexpage](/src/images/index.PNG)

En un mundo donde todo se vuelve digital la privacidad es algo que se va perdiendo. _¿Podré enviar un mensaje y que sólo pueda entenderlo quien yo quiera?_ Con la aplicación web "_Secretos de dos_" damos a las parejas con esta necesidad la solución que buscan. Ya sea que busquemos enviar un mensaje oculto o recibir uno que ya esté oculto y necesitemos decodificarlo, el usuario podrá elegir un **número clave** que hará **único** cada mensaje.

### ¿Cómo se usa?

Para acceder a esta aplicación web puedes entrar [en este link](https://alelulu.github.io/SCL009-Cipher/src/index.html).

Instrucciones de uso:
- Ingresar nombres (el del usuario y el de su pareja) y apretar botón "Entrar"
- Elegir la acción a realizar (Apretando el botón "Codificar" o el botón "Decodificar")

  Codificando:
  - Escribir el mensaje.
  - Elegir el número clave.
  - Apretar el botón "Codificar".
  - Usar el mensaje como el usuario lo estime conveniente.
  - Apretar el botón "Volver al menú" si se desea.

  Decodificando:
  - Pegar o escribir el mensaje que viene cifrado.
  - Elegir el número clave con el que fue cifrado el mensaje.
  - Apretar el botón de "Decodificar".
  - Usar el mensaje como el usuario lo estime conveniente.
  - Apretar el botón "Volver al menú" si se desea.

### ¿A quién va dirigida?

**Principales usuarios:**
Los usuarios objetivos de esta aplicación son personas hispanohablantes con pareja y acceso a internet.

**Objetivos del usuario:**
Poder escribir mensajes ocultos a sus parejas de forma segura.

**Cómo resuelvo el problema:**
La problemática del usuario se soluciona de las siguientes maneras.
- El usuario podrá elegir un "número clave" haciendo que cada mensaje sea diferente a otro. Dentro de las instrucciones se le da un ejemplo al usuario sobre qué número clave podría escoger. 
- El usuario podrá usar el texto cifrado para enviarlo a su pareja y nadie más podrá codificarlo sin conocer la clave que utilizó.
- Si el usuario recibe el mensaje cifrado de su pareja podrá descifrarlo conociendo el número clave que usó.

### ¿Cómo planifiqué todo el proceso de la aplicación?

Utilizando *Trello* pude estructurar todas las tareas que debía realizar. Además logré organizar mejor mi tiempo y priorizar las tareas que debía cumplir primero.

- Para revisar mi proceso puedes acceder entrando [en este link](https://trello.com/b/EMCDH4kv/cipher).

### ¿Cómo pensé en el user?

**En el proceso de entender sus necesidades:**
- La aplicación, al estar destinada a usuarios que tengan pareja, está diseñada desde su inicio para hacerla personalizable. Al preguntar por el nombre del usuario y el de su pareja y luego usarlos en las diferentes páginas, logra que el usuario sienta que está hecha sólo para ellos dos. 
- Al estar destinada a personas hispanohablantes la aplicación permite codificar y decodificar letras mayúsculas, minúsculas, tildes y números.
- Es intuitiva con indicaciones simples que le ayudarán al usuario a orientarse dentro de la aplicación.
- En la página de "codificar" el texto parte estando oculto, haciendo que se sienta seguro al escribir algo que no quiere que el resto sepa. Además tiene la opción de mostrar dicho mensaje si el usuario lo desea con un botón junto a su texto.

**En el proceso de diseño visual:**
- Primero creé un **prototipo de baja fidelidad** (sketch en papel) de cómo se debería ver mi aplicación y la mostré a usuarios objetivos para recibir su feedback. También les fui preguntando cómo se sentían y si esta aplicación podría resolver la problemática planteada.
![sketch](/src/images/test1.png)
- Luego de crear el diseño básico de la aplicación web y tenerla funcional realicé tests de usuario con el **prototipo de alta fidelidad** para conocer cómo mi usuario objetivo se iba a desenvolver en ella; si entendía las instrucciones, si los botones eran adecuados y útiles, si los colores contrastaban, si se sentía satisfecho con que el texto que codificaba estuviera oculto desde un principio, entre otras cosas. Gracias a estos tests pude mejorar parte de la redacción en las instrucciones.

  Primero fui haciendo tests a mis compañeras de Laboratoria que cumplían las características de mi público objetivo:
![sketch](/src/images/tests.png)
 [Mira la grabación 1 aquí 🎥](https://www.youtube.com/watch?v=IJ98kL8lDFA) [Mira la graabación 2 aquí 🎥](https://www.youtube.com/watch?v=5s30p0Okork)

  

  Luego realicé tests finales donde los usuarios debían utilizar la aplicación en su totalidad:
 ![sketch](/src/images/test-a.png) 

  [Mira el video de una usuaria probando la aplicación aquí 🎥](https://drive.google.com/file/d/1imckJv-UZUpc1irJoGBOUzur24pOjYxX/view)

- Diseño de la página:

  1.- Fondo: Opté por utilizar una imagen de fondo que se adaptara al orden de mi página (centrada) y que tuviera color blanco de fondo para que los textos y los botones pudieran contrastar con ella. 
   
   2.- Fonts: Para mi título principal utilicé una font que se adaptara a la personalidad "romántica" de mi aplicación. Elegí una fuente Serif para esta tarea. Para los títulos, párrafos y botones utilicé una sans-serif, que resultara fácil de leer para el usuario. 
  
   3.- Paleta de colores: Rojo porque, según la psicología del color, representa el amor. Gris claro de la imagen de fondo encajó ya que podía contrastar con el rojo, Gris oscuro en los textos porque es un color "amigable" a la hora de leer desde una pantalla.