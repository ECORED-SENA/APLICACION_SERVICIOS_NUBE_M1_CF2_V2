<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Elicitación de requisitos
    p.mb-4 El propósito de la elicitación de requerimientos es ganar conocimientos relevantes del problema, que se utilizarán para producir una especificación formal del software necesario para resolverlo.
    .row.mb-5.align-items-center
      .col-lg-7
        .bloque-texto-b.p-4.me-lg-5
          .bloque-texto-b__texto.h2.mb-0 Un problema puede ser definido como la diferencia entre las cosas como se perciben y las cosas como se desean
          br
          p(style="position: relative;") -(Gause y Weinberg 1989)
      .col-lg-5.mt-4.mt-lg-0
        p Aquí se ve la importancia que tiene una buena comunicación entre desarrolladores y clientes; de esta comunicación con el cliente depende que sus necesidades queden claras. Además, al final de la fase de análisis de requerimientos, el analista podría llegar a tener un conocimiento extenso en el dominio del problema.
    p.mb-4 La elicitación de requisitos es la actividad que se considera como el primer paso en un proceso de ingeniería de requisitos; su significado hace referencia a la puesta en marcha de técnicas que sirven para recopilar conocimiento o información y los objetivos de esta fase de elicitación, son:
    ul.lista-ul
      li
        i.fas.fa-angle-right
        | Conocer el dominio del problema para poder comunicarse con clientes y usuarios y entender sus necesidades.
      li
        i.fas.fa-angle-right
        | Conocer el sistema actual (manual o informatizado) y sus aspectos positivos y negativos.
      li
        i.fas.fa-angle-right
        | Identificar las necesidades, tanto explícitas como implícitas, de clientes y usuarios y sus expectativas sobre el sistema a desarrollar.
    .titulo-segundo.pt-5
      h2#t_1_1 1.1. Planeación
    p.mb-5 La planeación busca definir las tareas a realizar para elegir y planificar las técnicas a emplear durante la actividad de elicitación de la fase de ingeniería de requisitos del desarrollo de software. En la siguiente tabla se presenta una relación de estas tareas y sus correspondientes procesos.
    .tabla-a
      table
        caption Tabla 1/ Tareas para elicitación de requisitos.
        thead
          tr
            th.table1 Tareas
            th.table1 Proceso
        tbody
          tr
            td #[b A.] Identificar las fuentes.
            td Lista de fuentes de requerimientos.
          tr
            td #[b B.] Identificar interesados del producto.
            td Categorías de los interesados (stakeholder).
          tr
            td #[b C.] Matriz stakeholders (Describir necesidades y criterios de éxito).
            td Perfil de stakeholder.
          tr
            td #[b D.] Revisar técnicas.
            td Identificar combinaciones de técnicas entrevistas, grupos focales, encuestas, prototipos.
          tr
            td #[b E.] Captura de interesados.
            td Plan de captura de interesados.
    p.mb-5.mt-3  #[b Nota:] tomado de Durán y Bernárdez (2001)
    p.mb-5 A continuación, se describen los procesos relacionados con las tareas para elicitación de requisitos:
    .row.align-items-start.mb-4
      .col-lg-7
        h3 #[span.txt-color A.] Identificar las fuentes de requerimientos.
        p Existe un conjunto de fuentes de requisitos en cada proyecto de desarrollo de software, así, usuarios y expertos abastecen de información detallada acerca del problema y necesidades del usuario. Los procesos y sistemas existentes representan, también, fuentes de requisitos; además, la documentación existente como manuales, formularios y reportes, incluso especificaciones de requisitos anteriores, puede proveer información útil acerca de la organización y su entorno.
      .col-lg-5.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/img2.png', style="max-width: 80%; margin: auto;")
    p.mb-4 En el proceso de esta actividad se identifican:
    ul.lista-ul.mb-4
      li
        i.fas.fa-angle-right
        | Interesados relevantes.
      li
        i.fas.fa-angle-right
        | Documentación que se puede usar como fuente de información de los requerimientos.
      li
        i.fas.fa-angle-right
        | Fuentes de información externas.
    p.mb-4 Las fuentes de requerimientos incluyen los propietarios del problema, los stakeholders, documentos y otros sistemas (Pearson, 2002). En ese sentido, los requerimientos pueden obtenerse en diversas fuentes que pueden clasificarse en gente (people), productos o documentos, pero cualquiera sea la fuente de esos requerimientos deben ser chequeados con los stakeholders.
    p.mb-4 Estas fuentes de requerimientos, se pueden clasificar en:
    .hr1
    .row.align-items-center
      .col-2
        figure
          img(src='@/assets/curso/img1.svg', style="max-width: 50%; margin: auto;")
      .col-10
        h4 Fuentes primarias
        p Aportan material de primera mano (es protagonista o testigo de los hechos), estas fuentes contienen información original, que ha sido publicada por primera vez y que no ha sido filtrada, interpretada o evaluada por nadie más.
    .hr2
    .row.align-items-center
      .col-2
        figure
          img(src='@/assets/curso/img2.svg', style="max-width: 50%; margin: auto;")
      .col-10
        h4 Fuentes secundarias
        p Toman y reproducen la información que le aportó una fuente primaria. Son las que contienen información primaria, sintetizada y reorganizada y están especialmente diseñadas para facilitar y maximizar el acceso a las fuentes primarias o a sus contenidos. Parten de datos preelaborados, como pueden ser datos obtenidos de anuarios estadísticos, internet, medios de comunicación, bases de datos procesadas con otros fines, artículos y documentos relacionados con un tema, libros, tesis, informes oficiales, etc.
    .hr2
    .row.align-items-center
      .col-2
        figure
          img(src='@/assets/curso/img3.svg', style="max-width: 50%; margin: auto;")
      .col-10
        h4 Fuentes terciarias
        p Son guías físicas o virtuales que contienen información sobre las fuentes secundarias. Forman parte de la colección de referencia de una biblioteca; facilitan el control y acceso a toda la gama de repertorios de referencia, como las guías de obras de referencia, o a un solo tipo, como las bibliografías.
    .hr3.mb-4

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
