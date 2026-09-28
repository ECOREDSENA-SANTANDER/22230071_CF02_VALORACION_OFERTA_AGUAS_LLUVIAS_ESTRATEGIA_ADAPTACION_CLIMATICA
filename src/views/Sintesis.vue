<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 En este componente se abordó la valoración de alternativas para el reúso de aguas lluvias a partir del análisis integrado de la precipitación, el almacenamiento y el desempeño del sistema. Inicialmente, se desarrolló el Índice de Precipitación Estandarizado (IPE) como herramienta para interpretar condiciones secas y húmedas en diferentes escalas temporales y comprender su proceso de cálculo. Posteriormente, se analizaron los sistemas de aprovechamiento de aguas lluvias, sus principales componentes, la capacidad de almacenamiento, el balance de entradas y salidas, el volumen disponible y las diferentes configuraciones de almacenamiento y uso. 
    p.mb-5 Asimismo, se estudiaron las métricas de desempeño propuestas por Hashimoto et al. (1982) —fiabilidad, resiliencia y vulnerabilidad— para evaluar la frecuencia, recuperación y severidad de las fallas. Finalmente, se integraron estos elementos mediante el modelo de Almacenamiento–Rendimiento–Fiabilidad (SRY) y sus curvas, las cuales permiten relacionar la capacidad de almacenamiento, el rendimiento esperado y la fiabilidad del sistema para comparar alternativas y apoyar la toma de decisiones sobre el aprovechamiento de aguas lluvias.

    .row.justify-content-center
      .col-lg-11.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa mental de alternativas para el reúso de aguas lluvias con tres ejes: IPE, sistemas de aprovechamiento y modelo SRY.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
