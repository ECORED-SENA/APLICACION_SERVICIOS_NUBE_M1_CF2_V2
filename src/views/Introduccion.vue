<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    //figure.mb-4(data-aos="fade-down")
      img(src='@/assets/curso/temas/img1.jpg' alt="")
    
    p(data-aos="fade") A través de este material, se tratan con detalle los pasos que se deben seguir en el proceso de recolección de datos, el uso de técnicas y los instrumentos para tal fin.
    p.mb-4(data-aos="fade") Para comenzar, lo invitamos a ver el siguiente video:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-9NsuoSa_Ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        
      figcaption Video. La fase de elicitación de requisitos

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
