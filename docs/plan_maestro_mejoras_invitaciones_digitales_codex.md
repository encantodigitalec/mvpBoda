# Plan maestro de mejoras — Invitaciones Digitales (MVP)

**Documento de trabajo para Codex.** Lee el documento completo y trabaja una fase a la vez. El objetivo es convertir la invitación existente en una plantilla profesional, reutilizable y fácil de personalizar, generando una copia independiente por cliente.

## Instrucciones generales para Codex

1. Inspecciona el repositorio antes de modificarlo. No supongas que una función o archivo existe: compruébalo.
2. La fase 2 (arquitectura) ya fue implementada por el usuario. Audítala, pero no la reconstruyas si cumple los objetivos.
3. Conserva el diseño y las funcionalidades existentes, salvo que la fase autorizada indique expresamente lo contrario.
4. No elimines código, estilos, recursos ni dependencias sin comprobar sus usos estáticos y dinámicos.
5. No agregues frameworks, backend, bases de datos, servicios externos o dependencias sin justificar su necesidad y pedir aprobación.
6. No publiques, borres ni modifiques repositorios remotos ni realices acciones irreversibles sin autorización.
7. Antes de cambios importantes, recomienda crear un commit o respaldo de Git.
8. No inventes pruebas. Indica qué ejecutaste, qué pasó, qué falló y qué no pudiste comprobar.
9. Si una decisión de este plan no encaja con el proyecto real, explica el conflicto y propone la alternativa más sencilla.
10. Al terminar cada fase, informa archivos modificados, cambios, pruebas, pendientes y decisiones que requieren aprobación.

**Flujo por fase:** inspeccionar → informar estado → proponer cambios → obtener aprobación cuando corresponda → implementar → probar → documentar. No marques una fase como terminada si quedan criterios sin verificar.

---

## 1. Contexto y objetivo

La primera plantilla comercial de referencia será una invitación de matrimonio. La invitación actual puede incluir, según lo que realmente esté implementado:

- Secciones informativas y presentación de los novios.
- Fecha y hora.
- Ubicación y enlace a Google Maps.
- Música de fondo y controles de reproducción.
- Recordatorios.
- Confirmación de asistencia.
- Fotografías y galerías.
- Versiones corta y larga.

Más adelante, el sistema podrá adaptarse a cumpleaños, quinceañeras, baby showers, graduaciones y otros eventos.

**Resultado buscado:** crear una invitación nueva copiando la plantilla, editando los datos, reemplazando los recursos, ajustando el tema y las secciones, probando y publicando. No reconstruir el HTML, CSS y JavaScript para cada pedido.

## 2. Decisiones de arquitectura aprobadas

### Copia independiente por cliente

- Cada cliente tendrá una copia independiente.
- Cada copia tendrá sus propios datos y recursos multimedia.
- Cada invitación podrá publicarse independientemente.
- Los cambios de un cliente no deben afectar a otros.
- La plantilla maestra permanecerá separada y protegida.
- No se personalizará ni publicará accidentalmente la plantilla maestra.

### Tecnologías previstas

HTML, CSS y JavaScript nativo, con GitHub Pages para publicación estática. Respeta la tecnología real del repositorio; no migres por preferencia personal.

### Recursos

Cada invitación tendrá recursos propios y rutas compatibles con el alojamiento estático. La estructura exacta debe respetar la arquitectura ya implementada. Ejemplo orientativo:

```text
invitacion-cliente/
├── index.html
├── styles.css
├── script.js
├── config/
│   └── invitation-data.js
└── assets/
    ├── fotos/
    ├── musica/
    └── imagenes/
```

No dupliques archivos ni carpetas innecesariamente si la estructura actual ya resuelve estas responsabilidades.

## 3. Estado de referencia

| Fase | Actividad | Estado conocido |
|---|---|---|
| 1 | Auditoría y diagnóstico | Realizada |
| 2 | Arquitectura del proyecto | Implementada y aprobada por el usuario |
| 3 | Limpieza y optimización | Realizada; validación en Chrome completada |
| 4 | Sistema de personalización | Pendiente |
| 5 | Mejoras visuales y diseño premium | Pendiente |
| 6 | Mejoras funcionales e interactividad | Pendiente |
| 7 | Rendimiento y compatibilidad | Pendiente |
| 8 | Preparación comercial y producción | Pendiente |

Este estado es una referencia conversacional, no una certificación técnica. Comprueba el repositorio antes de actualizarlo. No repitas las fases 1 y 2 si sus resultados ya existen y son correctos.

---

# Fases de ejecución

## Fase 1 — Auditoría y diagnóstico

**Estado de referencia: realizada.** Verifica brevemente que la documentación existente refleje el proyecto actual.

### Objetivos y actividades

- Revisar carpetas y archivos.
- Identificar el punto de entrada y cómo se carga HTML, CSS y JavaScript.
- Identificar secciones y funcionalidades existentes.
- Localizar datos particulares escritos directamente en el código.
- Localizar imágenes, música, fuentes y otros recursos.
- Detectar dependencias, formularios, APIs y servicios externos.
- Revisar rutas y compatibilidad con GitHub Pages.
- Identificar problemas, duplicaciones y riesgos.

### Entregable

Diagnóstico con estructura, funciones comprobadas, problemas y recomendaciones.

### Aceptación

Las responsabilidades y funcionalidades están identificadas y existe una referencia para comparar cambios posteriores.

## Fase 2 — Arquitectura del proyecto

**Estado de referencia: implementada por el usuario.** No reconstruir; auditar y conservar lo que ya cumple.

### Responsabilidades conceptuales

1. **Plantilla maestra:** estructura y comportamiento general sin datos particulares.
2. **Contenido/configuración:** nombres, fechas, textos, direcciones, enlaces y opciones del evento.
3. **Temas y estilos:** colores, tipografías, fondos y variantes visuales.
4. **Secciones:** bloques que puedan configurarse para mostrarse u ocultarse.
5. **Funcionalidades:** música, mapas, cuenta regresiva, confirmación y recordatorios.
6. **Assets:** fotografías, imágenes, fuentes y música.

### Aceptación

- Las responsabilidades están organizadas y son comprensibles.
- La plantilla maestra está separada de los datos del cliente.
- Se respeta la copia independiente por cliente.
- La estructura funciona con las tecnologías y el alojamiento previstos.
- La documentación explica dónde vive cada responsabilidad.

No hagas una segunda refactorización arquitectónica si estos criterios ya están satisfechos.

## Fase 3 — Limpieza y optimización del código

**Estado: realizada.** Validación local completada con Node.js y Chrome DevTools.

Validación de cierre: scripts JavaScript sin errores de sintaxis; carga de la invitación y recursos comprobada; consola sin errores; sobre, música y modal de Google Maps comprobados; vista móvil (390 × 844) y escritorio (1366 × 900) sin desbordamiento horizontal. Se comparó visualmente con `indexr.html` en escritorio y móvil; como esa versión conserva rutas `/img` y `/audio` que ya no existen, la comparación en navegador reutilizó temporalmente los recursos actuales sin modificar el archivo de referencia. La comparación permitió restaurar la clase `.ampersand` al generar los nombres en `js/app.js` y ajustar el umbral de aparición de la galería en `js/gallery.js` para que la foto inicial también aparezca en móvil. Se corrigió además la solicitud 404 del favicon enlazando el icono de anillos existente en `index.html`. La fecha del 24 de agosto de 2026 se muestra como lunes, día correcto; `indexr.html` decía sábado.

### CSS

- Identificar selectores sin uso, reglas duplicadas, sobrescritas o redundantes.
- Conservar estados, pseudoelementos, animaciones, media queries y clases aplicadas dinámicamente.
- Revisar estilos activados desde JavaScript.

### JavaScript

- Identificar variables, funciones, eventos e importaciones sin uso.
- Detectar código duplicado o inalcanzable.
- Comprobar referencias indirectas, selectores dinámicos y eventos delegados.
- Conservar funciones invocadas desde HTML u otros módulos.

### HTML y recursos

- Identificar elementos obsoletos sin uso.
- Revisar imágenes, fuentes, audio y otros recursos aparentemente huérfanos.
- Verificar rutas antes de retirar archivos.
- Revisar dependencias antes de desinstalarlas.

### Pruebas y aceptación

- La página carga sin errores nuevos.
- No hay errores nuevos en consola.
- Comparación visual con la versión anterior.
- Funcionan las secciones y controles principales.
- Se comprueba la vista móvil y escritorio.
- Las rutas y recursos siguen funcionando.
- Se retiró solo código cuya inutilidad se pudo comprobar.

No elimines elementos solo porque una búsqueda simple no encuentre referencias. Mantén respaldo o commit previo. No cambies el diseño ni la arquitectura durante esta fase.

## Fase 4 — Sistema de personalización

**Estado: completada.**

La plantilla centraliza datos del evento, tema y secciones. Los campos
opcionales vacíos se omiten sin generar enlaces inválidos ni bloquear la
página. Los nombres, fechas, textos y etiquetas se editan en la configuración;
`config/wedding.example.js` ofrece un ejemplo ficticio y documentado.

### Objetivo

Personalizar una invitación editando datos y recursos, no la estructura principal.

### Datos configurables a evaluar

- Nombres de los novios.
- Fecha y hora.
- Mensajes y textos.
- Dirección y enlace de Google Maps.
- Datos y enlace de confirmación.
- Fotografías y galerías.
- Archivo de música.
- Colores y tipografías.
- Secciones visibles u ocultas.
- Textos de botones y etiquetas.
- Otras opciones que ya existan en la invitación.

### Actividades

1. Localizar datos que aún estén escritos directamente en HTML o JavaScript.
2. Definir un único lugar claro para los datos editables.
3. Migrar los datos particulares a una configuración centralizada.
4. Separar valores visuales configurables mediante variables CSS o el mecanismo apropiado.
5. Definir cómo se habilitan y deshabilitan secciones.
6. Manejar datos faltantes sin romper la página.
7. Documentar campos, formatos y obligatoriedad.
8. Crear un ejemplo de configuración con datos ficticios.

### Aceptación

- Los datos se editan desde un lugar centralizado.
- No es necesario editar la estructura principal para cambiar contenido.
- Los recursos se pueden sustituir sin modificar la lógica general.
- Los campos opcionales se manejan correctamente.
- Las secciones configurables se muestran u ocultan.
- Se conserva el diseño y el comportamiento.

**Fuera de alcance:** no crear panel administrativo, CMS, base de datos ni editor visual salvo solicitud expresa.

## Fase 5 — Mejoras visuales y diseño premium

**Estado: completada.**

Se mantuvo la identidad botánica en verde y crema y se pulieron jerarquía,
espaciado, tarjetas, presentación de regalos y foco de botones en
`css/sections.css`. Se compararon capturas antes y después en escritorio y
móvil; el diseño conserva la lectura y composición móvil.

### Objetivo

Elevar la calidad visual sin perder la identidad de la invitación y permitir variantes reutilizables.

### Áreas a evaluar

- Portada o sobre de invitación.
- Jerarquía tipográfica y composición.
- Espaciado y paleta de colores.
- Fondos, texturas y fotografías.
- Galería.
- Botones y elementos interactivos.
- Transiciones y animaciones suaves.
- Coherencia entre secciones.
- Adaptación a pantallas pequeñas.

### Método

1. Auditar visualmente el diseño actual.
2. Detectar mejoras de mayor impacto.
3. Presentar propuestas antes de implementarlas.
4. Obtener aprobación del usuario para cambios visuales.
5. Implementar por bloques pequeños.
6. Comparar capturas antes y después en móvil y escritorio.

### Aceptación

- Diseño coherente y profesional.
- Lectura y navegación claras.
- Animaciones que no dificulten el uso.
- Experiencia móvil cuidada.
- Sin regresiones funcionales.
- Temas reutilizables para futuras invitaciones.

No reemplaces el diseño por uno nuevo sin autorización.

## Fase 6 — Mejoras funcionales e interactividad

**Estado: completada.**

Mejoras implementadas: estado accesible y manejo de errores de música;
mensaje para una fecha pasada o inválida; ocultamiento de controles cuando
faltan datos; validación de enlaces de WhatsApp y calendario; foco restaurado
al cerrar el mapa; visor de fotografías con botones, teclado y gesto táctil.
La comprobación local confirmó reproducción, pausa y reanudación del audio,
apertura/cierre del mapa y del visor, navegación de fotos, enlaces generados y
ausencia de excepciones JavaScript. También se comprobó la cuenta regresiva con
fecha futura, pasada e inválida. Google Maps, WhatsApp y Calendar siguen
requiriendo conexión; WhatsApp solo prepara el mensaje y no registra respuestas.

### Música

- Reproducción y pausa.
- Control visible para iniciar la música.
- Manejo de errores o archivo ausente.
- Comportamiento compatible con el navegador.

Los navegadores suelen bloquear la reproducción automática. No intentes eludir esa restricción; ofrece un control claro para que el visitante inicie la música.

### Cuenta regresiva y fecha

- Cálculo correcto del tiempo restante.
- Manejo de fecha y zona horaria.
- Estado apropiado cuando el evento ya pasó.

### Ubicación

- Enlace de Google Maps correcto.
- Apertura adecuada en móviles.
- Dirección visible y comprensible.

### Confirmación de asistencia (RSVP)

- Verificar el flujo actual.
- Confirmar que el enlace o formulario envía datos al destino previsto.
- Validar campos, mensajes y errores.
- No afirmar que se almacenan respuestas si no existe esa implementación.

### Recordatorios

- Comprobar el mecanismo existente.
- Verificar fecha, hora y enlace.
- Documentar limitaciones de calendarios o servicios externos.

### Galería y navegación

- Apertura y cierre de imágenes.
- Controles táctiles y de teclado cuando corresponda.
- Navegación clara.
- Estados accesibles y mensajes comprensibles.

### Aceptación

Cada función anunciada como disponible debe probarse o documentarse como dependiente de un servicio externo. No simules integraciones inexistentes.

## Fase 7 — Rendimiento y compatibilidad

**Estado: en curso.**

Las fotos principales ahora se sirven en WebP optimizado, se cargan de forma
diferida y reservan su proporción; el audio usa carga diferida. Se reforzaron
el contraste de etiquetas, el foco visible y la preferencia de movimiento
reducido. Falta completar la comprobación responsive, las rutas bajo una
subruta y la revisión de recursos en navegador.

### Actividades

- Optimizar dimensiones y formatos de imágenes.
- Evitar cargar recursos pesados antes de necesitarlos cuando sea apropiado.
- Revisar tamaño y carga de CSS y JavaScript.
- Optimizar audio sin degradar innecesariamente su calidad.
- Revisar fuentes externas y alternativas.
- Comprobar diseño responsive.
- Probar navegadores comunes.
- Verificar rutas relativas y subrutas de GitHub Pages.
- Revisar errores de red y consola.
- Comprobar accesibilidad básica: contraste, textos alternativos, controles y foco.

### Aceptación

- No hay errores críticos de carga.
- Los recursos se encuentran correctamente.
- Funciona en pantallas pequeñas y grandes.
- Las rutas funcionan en el entorno de publicación.
- Las optimizaciones no degradan la experiencia.

## Fase 8 — Preparación comercial y producción

**Estado: pendiente.**

### Objetivo

Establecer un procedimiento repetible para generar, probar y publicar una invitación independiente por cliente.

### Flujo de producción

1. Conservar la plantilla maestra como versión base.
2. Crear una copia independiente para el nuevo cliente.
3. Introducir los datos del evento.
4. Incorporar fotografías, música y demás recursos.
5. Seleccionar tema visual y secciones.
6. Probar la invitación completa.
7. Revisar enlaces, fecha, hora, música y confirmación.
8. Publicar la copia en GitHub Pages.
9. Verificar la URL pública desde un dispositivo móvil.
10. Entregar al cliente el enlace correspondiente.
11. Mantener organizada la copia para futuras correcciones.

### Organización

- Definir una convención de nombres para proyectos y repositorios.
- Mantener la plantilla maestra separada de los proyectos de clientes.
- Evitar compartir recursos privados entre clientes.
- Documentar cómo actualizar una invitación publicada.
- Mantener respaldo y control de versiones.

### Aceptación

- Se crea una invitación independiente siguiendo instrucciones.
- Los recursos de cada cliente están separados.
- La publicación no depende del equipo local.
- La URL pública funciona.
- Existe una lista de control para cada entrega.
- El proceso se puede repetir sin reconstruir la invitación.

---

## 4. Criterios globales de finalización del MVP

- [ ] Existe una plantilla maestra reutilizable y separada de las copias de clientes.
- [ ] La arquitectura está documentada y es mantenible.
- [ ] El código innecesario comprobado ha sido retirado.
- [ ] Los datos de cada evento se editan desde una configuración centralizada.
- [ ] Los temas visuales principales se pueden personalizar.
- [ ] Las secciones opcionales se pueden configurar.
- [ ] Los recursos multimedia de cada cliente están separados.
- [ ] Se puede generar una copia independiente para un cliente.
- [ ] Las funcionalidades anunciadas como operativas han sido verificadas.
- [ ] La invitación funciona en dispositivos móviles.
- [ ] La publicación en GitHub Pages está documentada y probada.
- [ ] Existe documentación para personalización, pruebas y publicación.
- [ ] Existe un procedimiento repetible para producir nuevas invitaciones.

## 5. Documentación del proyecto

Mantén o crea, según corresponda:

- `README.md`: descripción, instalación, prueba y publicación.
- `docs/PLAN_MAESTRO.md`: este plan y estado de cada fase.
- `docs/ARQUITECTURA.md`: estructura y responsabilidades.
- `docs/PERSONALIZACION.md`: campos configurables y cómo crear una invitación.
- `docs/PRUEBAS.md`: pruebas, resultados y pendientes.
- `docs/PRODUCCION_CLIENTES.md`: proceso para crear y publicar copias.

No dupliques documentación existente; actualízala y enlázala cuando sea conveniente.

## 6. Próxima acción para Codex

Antes de comenzar nuevas mejoras:

1. Lee el repositorio actual.
2. Confirma brevemente qué partes de las fases 1 y 2 están implementadas.
3. Revisa el estado de la limpieza de la fase 3 y el trabajo que está en curso.
4. No vuelvas a modificar la arquitectura si cumple lo aprobado.
5. Indica qué falta para dar por terminada la fase 3.
6. Presenta un plan breve para validar la limpieza, incluyendo pruebas visuales y funcionales.
7. Espera autorización del usuario antes de iniciar la fase 4.

**No empieces la fase 4 hasta que la fase 3 esté validada y el usuario la apruebe.**

---

## Principio rector

Construir una plantilla de invitación digital profesional, confiable y reutilizable. Cada cliente debe recibir una invitación independiente, personalizada y comprobada, mientras la plantilla maestra permanece protegida y lista para generar nuevos proyectos.
