<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 Con el diagrama de actividades se termina la descripción de las tres técnicas usadas para la especificación y el análisis de requisitos, como se pudo analizar cada una de las técnicas nos brinda características para lograr representar gráficamente y de una forma clara, los requisitos que un usuario necesita poder cumplir satisfactoriamente con las solicitudes de los clientes y usuarios, por otro lado se pueden usar todas las técnicas en una especificación y análisis de requisitos si se ve la necesidad.
    p.mb-4 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-12.mb-5
        .p-4(style="background-color: #F6F6F6;border-radius: 15px;")
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general del componente formativo, que enuncia las temáticas desarrolladas en el mismo y destaca aspectos clave estudiados. Tema central: elicitación de requisitos. Temas integradores: planeación, técnicas e instrumentos, herramientas para captura de requisitos y herramienta de modelado.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
