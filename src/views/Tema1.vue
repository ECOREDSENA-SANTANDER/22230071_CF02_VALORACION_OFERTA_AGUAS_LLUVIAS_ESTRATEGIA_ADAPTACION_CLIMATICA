<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Índice de Precipitación Estandarizado (IPE)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src='@/assets/curso/tema1/1.png')
    
    p.mb-0 El Índice de Precipitación Estandarizado (IPE) permite analizar el comportamiento de la precipitación respecto de sus condiciones históricas y reconocer anomalías en diferentes escalas temporales. Su aplicación facilita diferenciar condiciones húmedas y secas y valorar la persistencia de estas condiciones a lo largo del tiempo. 

    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Fundamentos, escalas e interpretación del IPE

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema1/2.png')
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2
            img.img-t(src='@/assets/curso/tema1/3.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 El Índice de Precipitación Estandarizado (IPE) es un indicador climático que permite determinar qué tan anómala es la precipitación acumulada en un periodo determinado respecto del comportamiento histórico de esa misma variable. El índice utiliza únicamente la precipitación como variable de entrada y transforma su distribución de probabilidad en una distribución normal estandarizada (World Meteorological Organization [WMO], 2012).
        p.mb-0 Una de las principales ventajas del IPE es su flexibilidad temporal. Puede calcularse para diferentes escalas de acumulación, por ejemplo, IPE-1, IPE-3, IPE-6, IPE-9, IPE-12 o IPE-24, donde el número indica la cantidad de meses acumulados. Las escalas cortas permiten identificar condiciones recientes de déficit o exceso de precipitación, mientras que las escalas más largas permiten reconocer señales persistentes relacionadas con las condiciones hidrológicas y el almacenamiento de agua (WMO, 2012).

    p.mb-5 El valor del IPE se expresa como una anomalía estandarizada. Un valor cercano a cero representa condiciones próximas al comportamiento histórico; los valores positivos indican condiciones más húmedas y los valores negativos, condiciones más secas. A medida que el valor se aleja de cero, aumenta la intensidad de la anomalía (WMO, 2012).

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Clasificación e interpretación del IPE
        .tabla-a.tab1
          table
            thead
              tr
                th Valor del IPE
                th Clasificación
                th Lectura
            tbody
              tr.bgr
                td.text-center ≥ 2,00
                td Extremadamente húmeda
                td Precipitación excepcionalmente por encima de lo normal
              tr
                td.text-center 1,50 a 1,99
                td Muy húmeda
                td Precipitación muy por encima de lo normal
              tr.bgr
                td.text-center 1,00 a 1,49
                td Moderadamente húmeda
                td Precipitación moderadamente por encima de lo normal
              tr
                td.text-center −0,99 a 0,99
                td Cercana a normal
                td Precipitación cercana al comportamiento histórico
              tr.bgr
                td.text-center −1,00 a −1,49
                td Moderadamente seca
                td Precipitación moderadamente por debajo de lo normal
              tr
                td.text-center −1,50 a −1,99
                td Severamente seca
                td Precipitación muy por debajo de lo normal
              tr.bgr
                td.text-center ≤ −2,00
                td Extremadamente seca
                td Precipitación excepcionalmente por debajo de lo normal
    
    p.mb-5 Esta clasificación corresponde a la propuesta de McKee et al. (1993) y fue recogida por la World Meteorological Organization (WMO, 2012) para la interpretación del IPE.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 1. 
          | Escala de interpretación del IPE
        img.img-t.img-a(src='@/assets/curso/tema1/4.svg', alt='Escala del IPE de ≤−2,00 a ≥2,00, desde sequía extrema hasta humedad extrema, con condiciones normales alrededor de cero.')
    
    p.mb-5 El IPE compara la precipitación acumulada en un periodo con la distribución histórica del mismo periodo. Valores negativos indican condiciones más secas que lo normal; valores positivos, más húmedas que lo normal.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
        img.img-t(src='@/assets/curso/tema1/5.png')
      .col-lg-7(data-aos="fade-left")
        .bg2.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-4(src='@/assets/curso/tema1/6.svg')
          p.mb-4.mx-lg-4.text-white La tabla permite consultar los intervalos de clasificación, mientras que la representación gráfica facilita reconocer la transición entre déficit de precipitación, condiciones normales y exceso de precipitación. En ambos casos, el valor obtenido debe relacionarse con la escala temporal para la cual fue calculado.
          p.mb-0.mx-lg-4.text-white La interpretación del IPE debe realizarse considerando simultáneamente el valor obtenido y la escala temporal empleada. Un IPE-1 negativo indica una condición reciente de precipitación inferior a la esperada, mientras que un IPE-12 negativo representa una señal acumulada de mayor duración (WMO, 2012). 

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/7.png')
      .col-lg-7
        .row.mb-3
          .col-lg-6.col-md-9.col-12.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
            img.img-t(src='@/assets/curso/tema1/8.svg')
          .col-lg-6(data-aos="fade-left")
            .bg3.mb-0.p-4
              h4.mb-0.mx-lg-4.mt-lg-3.mb-lg-3 Por ejemplo, si una estación presenta:
            .bg4.mb-0.p-4.cen
              ul.lista-ul.mb-0.mx-lg-4
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 IPE-1 = −1,4 
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 IPE-3 = −0,8 
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 IPE-6 = −1,6 
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 IPE-12 = −2,1 
        p.mb-0 No sería suficiente afirmar que existe “sequía”. La interpretación debe reconocer que existe una condición moderadamente seca a corto plazo, una condición cercana a la normal en tres meses, una condición severamente seca en seis meses y una condición extremadamente seca en doce meses.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema1/9.png')
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2
            img.img-t(src='@/assets/curso/tema1/10.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 Esta comparación permite identificar la persistencia temporal del déficit de precipitación, aspecto particularmente relevante al analizar posteriormente el comportamiento de los sistemas de almacenamiento. 
        p.mb-0 #[b La Organización Meteorológica Mundial (OMM)] establece que un evento de sequía se inicia cuando el valor del IPE alcanza −1,0 o menos y termina cuando vuelve a ser positivo. La duración y la magnitud del evento pueden analizarse a partir de la sucesión de valores negativos. Asimismo, la OMM relaciona las escalas cortas con las condiciones de humedad del suelo y las escalas largas con los caudales, el almacenamiento en embalses y las aguas subterráneas (WMO, 2012).

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Interpretación del IPE según la escala temporal

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0
          .row.justify-content-center.align-items-center(titulo="Condiciones recientes")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-0 Representa la precipitación acumulada durante un mes y permite identificar principalmente condiciones recientes. Un valor negativo indica que la precipitación se encuentra por debajo de lo esperado para ese periodo, pero no necesariamente representa una condición seca persistente o de larga duración (WMO, 2012).
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema1/11.png')
          .row.justify-content-center.align-items-center(titulo="Condiciones estacionales")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-0 Acumula la precipitación de tres meses y permite una lectura más integrada de las condiciones estacionales. Al considerar varios meses consecutivos, se reduce la influencia de una anomalía aislada y se permite identificar si un déficit o exceso de precipitación comienza a persistir a lo largo de una temporada. Esta característica hace que las escalas de varios meses resulten útiles para analizar la evolución temporal de las condiciones de humedad y sequedad (WMO, 2012).
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema1/12.png')
          .row.justify-content-center.align-items-center(titulo="Tendencias de corto a mediano plazo")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-0 Representa una acumulación de seis meses y permite analizar tendencias de corto a mediano plazo. A esta escala, la señal de precipitación acumulada comienza a integrar condiciones que pueden tener una mayor incidencia en las variables hidrológicas. La OMM señala que las escalas de varios meses pueden relacionarse con impactos en distintos componentes del ciclo hidrológico y, por ello, son complementarias de las escalas de corto plazo (WMO, 2012).
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema1/13.png')
          .row.justify-content-center.align-items-center(titulo="Persistencia interestacional")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-0 Permite analizar una condición acumulada durante nueve meses y reconocer si los déficits o excesos se mantienen a lo largo de varias estaciones consecutivas. Debe entenderse como una escala de análisis y no como una categoría independiente de sequía; su significado depende del comportamiento de la serie histórica y del contexto hidroclimático del área estudiada.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema1/14.png')
          .row.justify-content-center.align-items-center(titulo="Condiciones acumuladas de largo plazo")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-0 Acumula la precipitación de 12 meses y permite caracterizar las condiciones acumuladas a largo plazo. Esta escala tiene especial interés para analizar la persistencia de déficits de precipitación que pueden trascender el comportamiento de una estación específica. La OMM relaciona las escalas más largas del IPE con respuestas hidrológicas de mayor integración temporal, como las condiciones de caudal, el almacenamiento de agua y las aguas subterráneas (WMO, 2012).
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema1/15.png')
          .row.justify-content-center.align-items-center(titulo="Persistencia prolongada")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-0 Considera la precipitación acumulada durante veinticuatro meses y permite identificar la persistencia prolongada de condiciones anómalas. Esta escala integra información de varios ciclos anuales y puede resultar útil para reconocer déficits o excesos que se mantienen durante periodos extensos. Sin embargo, cuanto mayor es la escala temporal, más importante resulta interpretar el índice conjuntamente con otras variables hidrológicas y climáticas, evitando atribuir al IPE, por sí solo, efectos sobre la disponibilidad de agua.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema1/16.png')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 La escala temporal del IPE determina el periodo durante el cual se acumula la precipitación antes de compararla con su comportamiento histórico. Por esta razón, un mismo mes puede presentar valores diferentes de IPE según se analice a escalas de 1, 3, 6, 9, 12 o 24 meses. Esta capacidad de análisis multiescalar permite reconocer diferentes respuestas de los sistemas hidroclimáticos frente a déficits o excesos de precipitación (WMO, 2012).
        .bg5.p-4.p-lg-4
          p.mb-4.mx-lg-2 Las escalas temporales deben entenderse como una guía para seleccionar el periodo de análisis de acuerdo con la pregunta que se pretende responder y no como una clasificación rígida. Las escalas cortas reaccionan con mayor rapidez a cambios recientes en la precipitación, mientras que las escalas mayores integran condiciones acumuladas y permiten reconocer anomalías más persistentes. 
          p.mb-0.mx-lg-2 En el contexto de este componente, esta distinción es especialmente relevante porque posteriormente se analizará el comportamiento de sistemas de almacenamiento de aguas lluvias. Una condición negativa en IPE-1 puede representar un déficit reciente, mientras que valores persistentemente negativos en IPE-12 o IPE-24 pueden evidenciar condiciones acumuladas que deben considerarse al evaluar el almacenamiento. La escala seleccionada debe guardar relación tanto con el fenómeno analizado como con el tiempo de respuesta del sistema. 
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/17.png')



















</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
