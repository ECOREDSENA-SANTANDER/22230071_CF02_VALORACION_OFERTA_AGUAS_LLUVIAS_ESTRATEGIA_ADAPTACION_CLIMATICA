<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png')
      .col-lg-7
        p.mb-3 La disponibilidad de agua lluvia no depende únicamente de cuánto llueve, sino también de cuándo ocurre la precipitación, cómo se almacena y de qué manera se relaciona con las necesidades de uso. Comprender esta interacción permite reconocer que un mismo volumen de lluvia puede generar respuestas diferentes según las condiciones del sistema y la demanda existente.
        .bg1.p-4.mb-0
          p.mb-3 En este componente formativo se abordarán herramientas y criterios que permiten analizar esas relaciones y sustentar alternativas de reúso de aguas lluvias. Este conocimiento resulta relevante para interpretar el comportamiento de los sistemas de aprovechamiento y apoyar decisiones orientadas a un uso más eficiente y sostenible del recurso hídrico.
          p.mb-0 El recorrido iniciará con el Índice de Precipitación Estandarizado (IPE), continuará con el análisis de los sistemas de aprovechamiento, su almacenamiento y desempeño, y culminará con el modelo de Almacenamiento–Rendimiento–Fiabilidad (SRY). Estos elementos se integrarán para comprender cómo la precipitación, la capacidad de almacenamiento, el rendimiento esperado y la fiabilidad influyen en el comportamiento del sistema.
    
    p.mb-5 Al finalizar, el aprendiz contará con una base técnica para comparar condiciones de funcionamiento y reconocer alternativas de reúso de aguas lluvias acordes con las características de precipitación y demanda del contexto analizado.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
