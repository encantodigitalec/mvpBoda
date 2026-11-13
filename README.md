# Plantilla maestra de invitaciones de boda

Proyecto estático en HTML, CSS y JavaScript nativo. No requiere Node.js,
paquetes ni backend. Conserva esta carpeta como plantilla maestra y prepara
cada invitación en una copia independiente; no personalices la maestra para
un cliente.

## Estructura

- `index.html`: estructura de la invitación y orden de carga de estilos y scripts.
- `config/wedding.js`: nombres, fecha, textos, lugares, mapa, WhatsApp, regalos,
  etiquetas de interfaz, música y rutas de fotografías.
- `config/wedding.example.js`: ejemplo ficticio de la estructura de datos;
  sirve como referencia y no se carga en la invitación.
- `config/theme.js`: tipografías y colores del tema.
- `config/sections.js`: visibilidad de secciones (`true` o `false`).
- `css/`: variables, estilos base, componentes, secciones y reglas móviles.
- `js/`: comportamiento separado por función; `app.js` aplica la configuración.
- `assets/images`, `assets/icons`, `assets/audio`: recursos de la invitación.
- `docs/`: planes del MVP y mejoras.

Las tres fotografías narrativas se sirven en WebP de 1024 × 1536; sus PNG
originales se conservan como fuentes. Las imágenes se cargan de forma diferida y
el audio no se descarga hasta que el invitado inicia la música.

## Crear una invitación de cliente

1. Copia la carpeta completa `plantillaBaseBoda` a una carpeta nueva con el
   nombre del cliente. Esa copia será el proyecto independiente. Mantén intacta
   la carpeta maestra.
2. En `config/wedding.js`, reemplaza todos los datos de ejemplo. Completa los
   nombres; fecha y hora; textos; ceremonia y recepción; coordenadas y nivel de
   zoom del mapa; teléfono de WhatsApp con código de país y sin `+`; datos de
   regalos; música e imágenes. Los textos cortos de botones y etiquetas se
   editan en `labels`.
3. La fecha `date.iso` debe incluir zona horaria, por ejemplo
   `2027-05-15T17:00:00-05:00`. Actualiza también `weekday`, `display` y
   `shortDisplay`, que son textos independientes.
4. Sustituye las fotografías y la música en `assets/`. Puedes conservar los
   nombres de archivo existentes; si los cambias, actualiza las rutas en
   `config/wedding.js`. Mantén las rutas relativas a la carpeta del proyecto.
5. Cambia colores y nombres de tipografías en `config/theme.js`. Las fuentes
   configuradas actualmente se descargan de Google Fonts; para otras fuentes,
   asegúrate de que estén disponibles en la página o agrega los archivos con
   licencia adecuada y sus reglas `@font-face` en CSS.
6. En `config/sections.js`, establece cada sección en `false` para ocultarla o
   en `true` para mostrarla.

Los objetos de configuración deben conservar sus claves y estructura. Los
textos, recursos, colores y secciones se cambian ahí; para añadir una sección o
un campo nuevo sí hace falta ajustar la estructura o la lógica correspondiente.
`config/wedding.example.js` contiene valores ficticios y campos opcionales vacíos.
Si un campo no aplica, déjalo vacío: sin coordenadas se oculta el mapa, sin un
teléfono válido se ocultan RSVP y WhatsApp, y sin fecha válida no se genera el
contador ni el enlace de calendario. Sin archivo de música se oculta su control;
los datos bancarios vacíos se omiten.

### Campos requeridos y opcionales

| Campo | Requisito y formato |
| --- | --- |
| `couple.firstName`, `couple.secondName` | Requeridos para una invitación lista para el cliente; si faltan, se muestra “Nombre”. |
| `date.iso` | Requerido para cuenta regresiva y calendario. Usa fecha ISO 8601 con zona horaria, por ejemplo `2030-06-15T16:00:00-05:00`. |
| `date.weekday`, `date.display`, `date.shortDisplay` | Textos de presentación; actualízalos junto con `date.iso`. |
| `rsvp.whatsappPhone` | Opcional; número internacional de 8 a 15 dígitos, con código de país y sin `+`. Si no es válido, se oculta RSVP. |
| `map.latitude`, `map.longitude` | Opcionales; coordenadas numéricas. Sin ambas, se oculta el botón y no se carga el mapa. |
| `music.source` | Opcional; ruta relativa al archivo. Si está vacío, se oculta el control. `volume` va de `0` a `1`; `loop` es booleano. |
| `gifts.bank`, `gifts.accountHolder`, `gifts.account` | Opcionales; cada fila vacía se omite. Sin texto de regalos ni datos bancarios, se oculta la sección. |
| `images.story`, `images.memory`, `images.closing`, `images.brand` | Opcionales; usa rutas relativas. Si falta una foto se oculta su sección; si falta la marca se oculta su imagen. |
| `labels`, `theme`, `sections` | Opcionales; etiquetas usan textos por defecto, tema conserva variables CSS base y secciones se muestran salvo las marcadas `false`. |

## Revisar antes de publicar

Abre el `index.html` de la copia en un navegador moderno. Revisa la invitación
en móvil y escritorio y comprueba:

- Sobre y nombres, fecha, cuenta regresiva y textos.
- Fotografías, música (iniciar, pausar y reanudar) y secciones elegidas.
- Ubicación, enlace de Google Maps, confirmación de WhatsApp y calendario.
- Enlaces y recursos cargados sin errores; fecha, teléfono y coordenadas correctos.

La música requiere que el invitado abra el sobre y los navegadores necesitan una
acción del usuario para reproducir audio. Google Fonts, Maps, WhatsApp y
Calendar requieren conexión a internet. Repite la revisión en la URL publicada,
porque la vista local no confirma el despliegue.

## Publicar la copia con GitHub Pages

Publica cada invitación desde su propio repositorio. En la cuenta de GitHub,
crea un repositorio para la copia, sube el contenido completo de esta carpeta y
confirma que `index.html` quede en la raíz de la rama que se publicará. En el
repositorio, abre **Settings > Pages**; en **Build and deployment**, elige
**Deploy from a branch**, selecciona la rama y la carpeta raíz (`/(root)`) y
guarda. Cuando GitHub termine el despliegue, visita la URL que aparece en esa
misma página y completa la revisión previa.

La visibilidad de repositorios compatibles con Pages depende del plan de GitHub
y de la cuenta u organización. Revisa las opciones disponibles antes de subir
datos personales. La guía oficial de [creación de un sitio con GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
y la de [selección de la fuente de publicación](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
detallan los pasos vigentes. Los enlaces relativos del proyecto funcionan bajo
la ruta del repositorio.

## Funciones y servicios externos

- Sobre, animaciones, cuenta regresiva, música, galería, mapa, calendario y
  confirmación por WhatsApp se ejecutan en el navegador.
- Las fotografías de historia se pueden ampliar; el visor admite teclado,
  botones de navegación y gesto horizontal táctil.
- El mapa se carga al abrir su modal usando las coordenadas de configuración.
- WhatsApp abre un mensaje preparado; el invitado lo envía desde WhatsApp. La
  página no recopila respuestas.
- El enlace de calendario abre Google Calendar con la hora del evento, cuatro
  horas estimadas de duración y el lugar de recepción.
- La cuenta regresiva se actualiza cada segundo. Si la fecha es inválida muestra
  que falta configurarla; si ya pasó, oculta el contador y muestra que el evento
  ya se celebró. Actualiza fecha y hora antes de publicar.
