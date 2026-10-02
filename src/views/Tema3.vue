<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Modelo de almacenamiento, rendimiento y fiabilidad

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-botones.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 El análisis del desempeño de un sistema de aprovechamiento de aguas lluvias requiere considerar conjuntamente la capacidad disponible para almacenar el agua, el nivel de suministro que se espera alcanzar y la capacidad del sistema para satisfacer la demanda. La relación entre estos elementos permite evaluar distintas condiciones de funcionamiento y sustentar decisiones sobre el almacenamiento requerido. 

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Concepto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/2.png')
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2.col-md-2.col-5.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/3.svg')
          .col-lg-10.col-md-10
            p.mb-0 El modelo de Almacenamiento–Rendimiento–Fiabilidad (#[em Storage–Reliability–Yield,] SRY) permite estudiar cómo se relacionan tres componentes fundamentales del sistema:
        ul.lista-ul.mb-4
          li.d-flex.mb-0
            i.fas.fa-che.gt4
            p.mb-0 #[b Almacenamiento:] volumen disponible. 
          li.d-flex.mb-0
            i.fas.fa-che.gt4
            p.mb-0 #[b Rendimiento:] cantidad o nivel de suministro que se pretende alcanzar. 
          li.d-flex.mb-0
            i.fas.fa-che.gt4
            p.mb-0 #[b Fiabilidad:] grado en que el sistema cumple con la condición de servicio establecida. 
        p.mb-0 Hanson et al. (2009) desarrollaron relaciones generalizadas de SRY para sistemas de aprovechamiento de aguas lluvias. Estudios posteriores han utilizado este enfoque, considerando el sistema de aprovechamiento como un sistema de almacenamiento a pequeña escala y relacionando el almacenamiento, la demanda, la fiabilidad y la precipitación (Seo et al., 2012). 

    p.mb-4 De manera conceptual, la relación puede expresarse como:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bg5.p-4
          p.mb-0.mx-lg-2 #[b Ecuación 15]
          .row.justify-content.align-items-center.mb-0.mx-lg-2
            .col-lg-4.col-md-8
              .formula2
                p.mb-0 S#[sub r] = f(X, R, P)
          p.mb-4.mx-lg-2 donde:
          p.mb-0.mx-lg-2 S#[sub r]: almacenamiento requerido.
          p.mb-0.mx-lg-2 X: demanda o rendimiento objetivo.
          p.mb-0.mx-lg-2 R: fiabilidad.
          p.mb-4.mx-lg-2 P: precipitación.
          p.mb-0.mx-lg-2 Seo et al. (2012) utilizan precisamente esta formulación para representar el tamaño del almacenamiento en función de la demanda, la fiabilidad y la precipitación.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/4.png')    

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Curvas SRY

    p.mb-5 A partir de la relación entre almacenamiento, rendimiento y fiabilidad, es posible representar gráficamente el comportamiento del sistema mediante las curvas SRY. Estas curvas permiten comparar diferentes condiciones de almacenamiento y suministro, y analizar cómo cambia la fiabilidad cuando varían la capacidad del sistema o el rendimiento esperado.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Definición de las curvas SRY

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
        img.img-t(src='@/assets/curso/tema3/5.png')
      .col-lg-7(data-aos="fade-left")
        .bg222.mb-0.p-4.cen
          p.mb-0.mx-lg-4.text-white Las curvas SRY representan gráficamente la relación entre el almacenamiento requerido, el rendimiento o la demanda y la fiabilidad del sistema.
          p.mb-4.mx-lg-4.text-white Su utilidad consiste en mostrar que no existe necesariamente una única capacidad óptima independiente de las condiciones de operación. Para una determinada demanda, aumentar la capacidad de almacenamiento puede incrementar la fiabilidad; sin embargo, la magnitud de ese incremento depende de la precipitación y del rendimiento objetivo (Seo et al., 2012). 
          p.mb-0.mx-lg-4.text-white La representación gráfica permite reconocer que diferentes niveles de rendimiento pueden requerir capacidades de almacenamiento distintas para alcanzar una misma fiabilidad. De esta manera, las curvas facilitan la interpretación conjunta de los tres elementos del modelo y sirven como apoyo para evaluar alternativas de almacenamiento.

    p.mb-5 Para ampliar la información sobre la relación entre la capacidad de almacenamiento, el rendimiento y la fiabilidad del sistema, consulte la siguiente infografía descargable en formato PDF. En ella se presentan las curvas SRY para diferentes niveles de rendimiento y se orienta su lectura para determinar la capacidad de almacenamiento requerida según la fiabilidad deseada.

    .tarjeta.color-primario.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema3/6.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-3 Descargar infografía: Curvas SRY
              p.mb-0 Para ampliar la información consulte la siguiente infografía descargable en formato PDF. 
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo1_Curvas_SRY.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Criterios para obtención de las curvas SRY

    p.mb-4 Para construir e interpretar una curva SRY es necesario definir previamente las condiciones y variables que intervienen en el análisis. Estos criterios permiten establecer la información de entrada, el nivel de demanda esperado, las capacidades que se evaluarán y la condición utilizada para determinar si el sistema cumple o falla.

    p.mb-5 Para ello, deben considerarse los siguientes aspectos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/7.png')
      .col-lg-7
        .bg9.mb-0.p-4
          p.mb-0 Para ello, deben considerarse los siguientes aspectos:
        .bg1.mb-0.p-4
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-che.gt4
              p.mb-0 #[b Serie de precipitación:] debe establecerse la serie histórica utilizada, su periodo, su resolución temporal y su fuente. 
            li.d-flex.mb-0
              i.fas.fa-che.gt4
              p.mb-0 #[b Escala temporal:] puede utilizarse información diaria o mensual. Los modelos de balance hídrico de sistemas de aprovechamiento han utilizado diferentes escalas y reglas de operación; la selección de la escala puede afectar los resultados (Seo et al., 2012; Chapa et al., 2020). 
            li.d-flex.mb-0
              i.fas.fa-che.gt4
              p.mb-0 #[b Área de captación:] define la superficie disponible para convertir la precipitación en volumen de entrada. 
            li.d-flex.mb-0
              i.fas.fa-che.gt4
              p.mb-0 #[b Demanda o rendimiento objetivo:] debe establecerse el volumen que se pretende suministrar y el patrón temporal. 
            li.d-flex.mb-0
              i.fas.fa-che.gt4
              p.mb-0 #[b Capacidad de almacenamiento:] se debe evaluar un rango de capacidades y no solo un volumen único. 
            li.d-flex.mb-0
              i.fas.fa-che.gt4
              p.mb-0 #[b Criterio de fiabilidad:] debe definirse qué se considera una condición de éxito o de falla.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bg5.p-4
          p.mb-0.mx-lg-2 En el enfoque utilizado por Seo et al. (2012), la fiabilidad puede calcularse como: 
          .row.justify-content.align-items-center.mb-1.mx-lg-3
            .col-lg-4.col-md-8
              .formula2
                math.recta(display="block")
                  mrow
                    mi R
                    mo =
                    mn 1
                    mo -
                    mfrac
                      msub
                        mi N
                        mi f
                      mi N
          p.mb-4.mx-lg-2 donde:
          p.mb-0.mx-lg-2 R: fiabilidad.
          p.mb-0.mx-lg-2 N#[sub f]: número de periodos de falla.
          p.mb-4.mx-lg-2 N: número total de periodos evaluados.
          p.mb-0.mx-lg-2 Estos criterios constituyen la base para ejecutar el balance del sistema y comparar su comportamiento frente a diferentes capacidades de almacenamiento y niveles de rendimiento.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/8.png')    

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Construcción de las curvas SRY

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/9.png')
      .col-lg-7
        .row
          .col-lg-6.col-md-9.col-12.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
            img.img-t(src='@/assets/curso/tema3/10.svg')
          .col-lg-6(data-aos="fade-left")
            .bg44.mb-0.p-lg-5.p-4.cen
              p.mb-0 Una vez definidos los criterios de análisis, la construcción de una curva SRY puede organizarse como un procedimiento secuencial en el que se relacionan los datos de precipitación, la demanda, la capacidad de almacenamiento, el balance hídrico y la fiabilidad obtenida. El procedimiento debe repetirse para diferentes capacidades hasta contar con la información necesaria para construir la curva.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Procedimiento general para evaluar el desempeño del sistema y construir una curva SRY

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/11.png')
      .col-lg-7
        LineaTiempoD.color-secundario.activo
          .row.justify-content-center.align-items-center.mb-0(numero="1" titulo="Preparar la serie de precipitación")
            .col-lg-12
              p.mb-0 Organizar la precipitación para todos los periodos del registro histórico.
              p.mb-0 La serie debe contener la información de precipitación correspondiente al periodo de análisis, con resolución diaria o mensual según la escala seleccionada.
          .row.justify-content-center.align-items-center.mb-0(numero="2" titulo="Definir la demanda")
            .col-lg-12
              p.mb-0 Establecer el rendimiento objetivo o la demanda del sistema.
              p.mb-0 La demanda puede corresponder a un volumen constante o presentar variaciones a lo largo del tiempo, según las condiciones definidas para el análisis.
          .row.justify-content-center.align-items-center.mb-0(numero="3" titulo="Definir diferentes capacidades")
            .col-lg-12
              p.mb-4 Seleccionar diferentes capacidades de almacenamiento para evaluar el comportamiento del sistema.
              p.mb-0 Por ejemplo:
              p.mb-4 #[b 1 m#[sup 3] → 2 m#[sup 3] → 3 m#[sup 3] → 5 m#[sup 3] → 10 m#[sup 3] → 15 m#[sup 3]]
              p.mb-0 Los valores reales dependerán del área de estudio y de las condiciones del sistema analizado.
          .row.justify-content-center.align-items-center.mb-0(numero="4" titulo="Ejecutar el balance de almacenamiento")
            .col-lg-12
              p.mb-0 Para cada periodo se calcula:
              p.mb-0 #[b Almacenamiento final = almacenamiento inicial + entrada − suministro − pérdidas − rebose]
              p.mb-0 Este balance permite determinar cómo cambia el volumen almacenado a medida que ingresan y salen volúmenes de agua del sistema.
          .row.justify-content-center.align-items-center.mb-0(numero="5" titulo="Identificar periodos de falla")
            .col-lg-12
              p.mb-0 Detectar los periodos en los que el sistema no logra satisfacer la condición de servicio establecida.
              p.mb-0 Una falla ocurre cuando el suministro disponible no permite satisfacer total o parcialmente la demanda definida.
          .row.justify-content-center.align-items-center.mb-0(numero="6" titulo="Calcular la fiabilidad")
            .col-lg-12
              p.mb-0 Calcular la fiabilidad como la proporción del tiempo en que el sistema satisface la demanda:
              .row.justify-content.align-items-center.mb-0
                .col-lg-4.col-md-8
                  .formula2
                    math.recta(display="block")
                      mrow
                        mi R
                        mo =
                        mn 1
                        mo -
                        mfrac
                          msub
                            mi N
                            mi f
                          mi N
              p.mb-0 donde:
              p.mb-0 R: fiabilidad.
              p.mb-0 N#[sub f]: número de periodos de falla.
              p.mb-0 N: número total de periodos evaluados.
          .row.justify-content-center.align-items-center.mb-0(numero="7" titulo="Repetir el procedimiento para otras capacidades")
            .col-lg-12
              p.mb-0 Cambiar el valor de la capacidad de almacenamiento y repetir los pasos anteriores.
              p.mb-0 #[b ¿Se evaluaron todas las capacidades planeadas?]
              p.mb-0 #[b No:] regresar al balance de almacenamiento y repetir el procedimiento con una nueva capacidad.
              p.mb-0 #[b Sí:] continuar con la construcción de la curva SRY.
          .row.justify-content-center.align-items-center.mb-0(numero="8" titulo="Construir la curva SRY")
            .col-lg-12
              p.mb-0 Representar gráficamente los pares de almacenamiento y fiabilidad #[b (S, R)] obtenidos para cada nivel de rendimiento.
              p.mb-0 La curva SRY relaciona la capacidad de almacenamiento con la fiabilidad del sistema para diferentes niveles de rendimiento. Esto permite identificar la capacidad mínima requerida para alcanzar el nivel de servicio deseado.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .cajon.color-acento-botones.p-4.mb-0
          h4.mb-3 Idea clave
          p.mb-0 La construcción de una curva SRY no se obtiene a partir de una única capacidad. Es necesario repetir el balance del sistema para diferentes capacidades de almacenamiento y comparar la fiabilidad alcanzada en cada caso.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Interpretación de las curvas SRY

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3/12.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 Una curva SRY permite responder preguntas como:
            br
            br
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-che.gt4
                p.mb-0 ¿Qué capacidad se requiere para alcanzar una fiabilidad determinada? 
              li.d-flex.mb-0
                i.fas.fa-che.gt4
                p.mb-0 ¿Qué fiabilidad puede obtenerse con una capacidad disponible? 
              li.d-flex.mb-0
                i.fas.fa-che.gt4
                p.mb-0 ¿Cómo cambia el desempeño al aumentar la demanda? 
              li.d-flex.mb-0
                i.fas.fa-che.gt4
                p.mb-0 ¿Qué ocurre cuando se incrementa el rendimiento esperado? 
              li.d-flex.mb-0
                i.fas.fa-che.gt4
                p.mb-0 ¿Existe un punto a partir del cual aumentar el almacenamiento genera mejoras marginales? 
            br
            p.mb-0 Los estudios de Seo et al. (2012) muestran que, para un rendimiento determinado, la fiabilidad aumenta con el almacenamiento, aunque la relación depende de la razón entre la demanda y la precipitación.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/13.png')
      .col-lg-7
        p.mb-4 Por tanto, la interpretación no debe limitarse a afirmar que “un tanque más grande es mejor”. El análisis debe identificar el equilibrio entre la capacidad, el nivel de servicio y las condiciones de precipitación.
        p.mb-4 Para facilitar esta interpretación, la curva puede analizarse a partir de diferentes zonas de comportamiento, que permiten reconocer cuándo el aumento de la capacidad genera mejoras importantes en la fiabilidad y cuándo dichas mejoras comienzan a ser marginales.
        p.mb-0 Para ampliar la información sobre la interpretación de las curvas SRY, consulte la siguiente infografía descargable en formato PDF. En ella se presentan las zonas de comportamiento de la curva y su utilidad para reconocer cómo cambia la fiabilidad a medida que aumenta la capacidad de almacenamiento, así como el momento en que las mejoras comienzan a ser marginales.

    .tarjeta.color-primario.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema3/6.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-3 Descargar infografía: Interpretación de una curva SRY
              p.mb-0 Para ampliar la información consulte la siguiente infografía descargable en formato PDF. 
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo2_interpretacion_de_una_curva_SRY.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Relación almacenamiento, rendimiento, fiabilidad

    p.mb-5 El almacenamiento, el rendimiento y la fiabilidad deben interpretarse como componentes de un mismo sistema, ya que el comportamiento de uno de ellos puede influir sobre los demás. En conjunto, permiten comprender cómo la disponibilidad de agua, la capacidad del sistema y el nivel de servicio esperado intervienen en su desempeño.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
        img.img-t(src='@/assets/curso/tema3/14.png')
      .col-lg-7(data-aos="fade-left")
        .bg222.mb-0.p-4.cen
          p.mb-4.mx-lg-2.text-white Los tres elementos se entienden de la siguiente manera:
          ul.lista-ul.mx-lg-2.text-white.mb-4
            li.d-flex.mb-0
              i.fas.fa-che.gt4
              p.mb-0 #[b Almacenamiento:] determina cuánto recurso puede conservarse entre eventos de precipitación. 
            li.d-flex.mb-0
              i.fas.fa-che.gt4
              p.mb-0 #[b Rendimiento:] representa el nivel de suministro que se pretende obtener del sistema. 
            li.d-flex.mb-0 
              i.fas.fa-che.gt4
              p.mb-0 #[b Fiabilidad:] indica con qué frecuencia el sistema cumple la condición de servicio definida. 
          p.mb-4.mx-lg-2.text-white La relación puede entenderse mediante una situación sencilla:
          p.mb-0.mx-lg-2.text-white #[b Si se mantienen constantes la precipitación y la demanda, aumentar el almacenamiento generalmente permite disponer de agua durante periodos secos más prolongados y, por tanto, puede aumentar la fiabilidad. Sin embargo, si simultáneamente aumenta la demanda o el rendimiento objetivo, el almacenamiento requerido también puede aumentar.]

    p.mb-4 Esta relación ha sido documentada en estudios sobre sistemas de aprovechamiento de las aguas lluvias mediante modelos de balance y curvas SRY (Seo et al., 2012; Chapa et al., 2020). Hashimoto et al. (1982) permiten complementar esta lectura al incorporar la resiliencia y la vulnerabilidad: dos sistemas podrían presentar una fiabilidad similar, pero diferir considerablemente en la duración de las fallas o en la magnitud de los déficits que experimentan.
    p.mb-5 Explore el siguiente pódcast y profundice en la relación entre almacenamiento, rendimiento y fiabilidad para comprender por qué una mayor capacidad no siempre garantiza un mejor desempeño del sistema.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema3/15.svg')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.color-primario.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="Pódcast: no basta con un tanque grande"
                :audio="require_src('@/assets/actividad/audio/end-game-success.mp3')"
              ).mb-0
                p.mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/16.png')
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2.col-md-2.col-5.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/17.svg')
          .col-lg-10.col-md-10
            p.mb-0 La relación integral entre estas variables permite reconocer que la evaluación del desempeño no depende de un único indicador. La precipitación determina la oferta disponible; el almacenamiento permite conservar parte de esa oferta; el rendimiento expresa el nivel de suministro alcanzado; y la fiabilidad, la resiliencia y la vulnerabilidad permiten valorar el comportamiento del sistema frente a las condiciones de servicio y de falla. 
        p.mb-0 Para ampliar la información sobre la relación entre las variables que intervienen en la evaluación del desempeño del sistema, consulte la siguiente infografía descargable en formato PDF. En ella se presenta de manera integrada la precipitación, la entrada al sistema, el almacenamiento, el rendimiento, la fiabilidad, las fallas, la resiliencia y la vulnerabilidad.

    .tarjeta.color-primario.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema3/6.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-3 Descargar infografía: Evaluación integral del desempeño del sistema
              p.mb-0 Para ampliar la información consulte la siguiente infografía descargable en formato PDF.  
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo3_evaluacion_integral_del_desempeno_del_sistema.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download
    
    p.mb-4 Para apoyar la aplicación de los conceptos desarrollados en este componente, se dispone de la Herramienta de cálculo para almacenamiento y curvas SRY. Este recurso permite explorar el comportamiento del sistema y consultar resultados asociados al balance de almacenamiento y a la relación entre almacenamiento, rendimiento y fiabilidad.

    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema3/6.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-3 Descargar herramienta de cálculo
              p.mb-0 Para ampliar la información consulte la siguiente documento.  
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_01_Herramienta_de_calculo_para_almacenamiento_y_curvas_SRY.xlsx')" target="_blank")
                span Descargar 
                i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
