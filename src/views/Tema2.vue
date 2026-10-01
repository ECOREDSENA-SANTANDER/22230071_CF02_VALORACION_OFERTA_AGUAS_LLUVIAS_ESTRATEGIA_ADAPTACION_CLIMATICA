<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas de aprovechamiento de agua lluvia

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema2/1.png')
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2
            img.img-t(src='@/assets/curso/tema2/2.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 Los sistemas de aprovechamiento de las aguas lluvias permiten captar la precipitación y almacenarla temporalmente para su uso posterior. En general, estos sistemas integran áreas de captación, conducción y almacenamiento, aunque pueden incorporar elementos adicionales de filtración, separación de primeras lluvias, tratamiento, bombeo y distribución, según el uso previsto (García-Ávila et al., 2023).
        p.mb-0 En un sistema de almacenamiento, el agua entra principalmente como precipitación captada, permanece temporalmente almacenada y posteriormente sale por consumo, distribución, pérdidas, evaporación o rebose. Por ello, el tanque no debe analizarse de manera aislada, sino como parte de un equilibrio dinámico entre oferta y demanda.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 2. 
          |  Componentes de un sistema de aprovechamiento de aguas lluvias
        img.img-t.img-a(src='@/assets/curso/tema2/3.svg', alt='Secuencia de ocho componentes: captación, canaletas, conducción, primeras lluvias, almacenamiento, tratamiento, distribución y uso.')
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-0
          p.mb-0 El sistema funciona de manera integrada: la lluvia se capta, se transporta, se almacena, se trata y se distribuye para su uso eficiente y seguro.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Capacidad y métricas de desempeño de Hashimoto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
        img.img-t(src='@/assets/curso/tema2/4.png')
      .col-lg-7(data-aos="fade-left")
        .bg222.mb-0.p-4.cen
          p.mb-4.mx-lg-4.text-white El desempeño de un sistema de almacenamiento de aguas lluvias depende de la interacción entre la capacidad de almacenamiento, la precipitación disponible y la demanda de agua. Para evaluar técnicamente este desempeño es necesario diferenciar entre una variable de diseño, como la capacidad del tanque, y los indicadores que permiten determinar qué tan bien responde el sistema ante condiciones variables de oferta y demanda.
          p.mb-0.mx-lg-4.text-white En este contexto, la capacidad de almacenamiento representa el volumen máximo de agua que puede contener el sistema, mientras que la fiabilidad, la resiliencia y la vulnerabilidad permiten evaluar distintas dimensiones de su comportamiento. Hashimoto et al. (1982) plantearon estos tres criterios para determinar, respectivamente, qué tan probable es que un sistema falle, qué tan rápidamente se recupera tras una falla y qué tan severas son las consecuencias de dicha falla.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Capacidad de almacenamiento

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema2/5.png')
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2
            img.img-t(src='@/assets/curso/tema2/6.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 La capacidad de almacenamiento es el volumen máximo de agua que el sistema puede contener bajo las condiciones de diseño. Se expresa normalmente en litros o metros cúbicos. Sin embargo, una mayor capacidad no implica necesariamente un mejor desempeño. Un tanque sobredimensionado puede tener una baja utilización, mientras que uno demasiado pequeño puede provocar reboses frecuentes y déficits. Por ello, la capacidad debe analizarse junto con la precipitación, la demanda y el nivel de servicio esperado (Khan et al., 2022).
        p.mb-4 La capacidad de almacenamiento (S#[sub max]) es el volumen máximo que puede contener el tanque o depósito. Se expresa normalmente en litros (L) o metros cúbicos (m#[sup 3]).
        p.mb-0 En un modelo de balance temporal, el almacenamiento del periodo t puede representarse mediante:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg6.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-3
              img.img-t.img-a(src='@/assets/curso/tema2/7.svg')
            .col-lg-4
              h3.mb-3.text-white Ecuación 3
              .formula1
                p.mb-0 S#[sub t] = min[S#[sub max'] S#[sub t-1] + Q#[sub t] - Y#[sub t] - O#[sub t]]
            .col-lg-5.text-white
              p.mb-0 donde:
              p.mb-0 S#[sub t]: volumen almacenado al final del periodo t.
              p.mb-0 S#[sub t-1]: volumen almacenado al inicio del periodo.
              p.mb-0 Q#[sub t]: volumen de agua que ingresa al sistema.
              p.mb-0 Y#[sub t]: volumen utilizado o suministrado.
              p.mb-0 O#[sub t]: pérdidas o salidas del sistema.
              p.mb-0 S#[sub max]: capacidad máxima del tanque.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg7.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-3
              img.img-t.img-a(src='@/assets/curso/tema2/8.svg')
            .col-lg-4
              h3.mb-3 Ecuación 4
              .formula1
                p.mb-0 0 ≤ S#[sub t] ≤ S#[sub max]
            .col-lg-5
              p.mb-0 La capacidad constituye, por tanto, una variable de diseño que puede modificarse para analizar distintas alternativas. Por ejemplo, pueden evaluarse capacidades de 1, 2, 5, 10 y 20 m#[sup 3] y observar cómo cambia el desempeño del sistema.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Ejemplo de comportamiento de la capacidad de almacenamiento

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema2/9.png')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Capacidad del tanque")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 Supóngase un tanque con una capacidad máxima de:
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-7
                    .formula2
                      p.mb-0 S#[sub max] = 10 m#[sup 3]
          .tarjeta.color-a.p-4(titulo="Condiciones del periodo")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 Si al inicio del periodo hay 6 m#[sup 3] almacenados, ingresan 7 m#[sup 3], la demanda es de 3 m#[sup 3] y no se presentan otras pérdidas o salidas:
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-7
                    .formula2
                      p.mb-0 S#[sub t] = 6 + 7 - 3 = 10 m#[sup 3]
          .tarjeta.color-a.p-4(titulo="Capacidad máxima")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 El tanque alcanza su capacidad máxima de almacenamiento: 10 m#[sup 3]
          .tarjeta.color-a.p-4(titulo="Rebose")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Si el tanque permanece lleno y posteriormente ingresan otros 4 m#[sup 3] sin que se produzcan salidas, este volumen no puede almacenarse y se genera un rebose de 4 m#[sup 3].
          .tarjeta.color-a.p-4(titulo="Interpretación")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Cuando el tanque alcanza su capacidad máxima, el volumen de agua que ingresa posteriormente y no puede almacenarse se pierde por rebosamiento.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Métricas de desempeño de Hashimoto

    p.mb-5 La evaluación de un sistema de almacenamiento de aguas lluvias no debe limitarse a determinar el volumen del tanque ni la cantidad de agua que puede almacenar. La capacidad constituye una variable de diseño que condiciona el comportamiento del sistema, pero para conocer su desempeño es necesario analizar qué ocurre cuando la oferta de agua no alcanza para satisfacer la demanda. En este sentido, el desempeño puede estudiarse a través de tres dimensiones complementarias: fiabilidad, resiliencia y vulnerabilidad, propuestas por Hashimoto et al. (1982) como criterios para evaluar el comportamiento de los sistemas de recursos hídricos.

    .sub.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema2/su.svg')")
      h4.mb-0 Las tres dimensiones del desempeño del sistema de reúso de aguas lluvias
    
    p.mb-5 Estas métricas evalúan el desempeño del sistema de almacenamiento de aguas lluvias a partir del balance entre la oferta (precipitación captada y almacenada) y la demanda.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0
          .row.justify-content-center.align-items-center(titulo="Capacidad de almacenamiento")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 La capacidad de almacenamiento (S#[sub max]) representa el volumen máximo que puede contener el tanque, expresado normalmente en litros (L) o metros cúbicos (m#[sup 3]). 
                  p.mb-0 Es una variable de diseño, no una métrica de desempeño. Define el potencial del sistema, pero no permite por sí sola evaluar su desempeño.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema2/10.png')
          .row.justify-content-center.align-items-center(titulo="Balance del sistema")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 Para cada periodo t, el comportamiento del almacenamiento puede representarse mediante:
                  .row.justify-content.mb-4
                    .col-lg-7
                      .formula2
                        p.mb-0 S#[sub t] = min [S#[sub max'] S#[sub t-1] + Q#[sub t] - Y#[sub t] - O#[sub t]]
                  p.mb-4 donde:
                  p.mb-0 St: almacenamiento al final del periodo t.
                  p.mb-0 S#[sub t-1]: almacenamiento al inicio del periodo t.
                  p.mb-0 Q#[sub t]: volumen que ingresa al sistema.
                  p.mb-0 Y#[sub t]: volumen suministrado o utilizado.
                  p.mb-0 O#[sub t]: pérdidas o salidas del sistema.
                  p.mb-0 S#[sub max]: capacidad máxima del tanque.
                .col-lg-6.col-md-8.col-10.bi
                  img(src='@/assets/curso/tema2/11.png').mb-4
                  p.mb-0 Existe una condición de falla cuando:
                  .row.justify-content-center.align-items-center.mb-2
                    .col-lg-4
                      h4.mb-0 Ecuación 5
                    .col-lg-8
                      .formula2
                        p.mb-0 Y#[sub t] < D#[sub t]
                  p.mb-0 donde D_t corresponde a la demanda del periodo t.
          .row.justify-content-center.align-items-center(titulo="Fiabilidad")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-0 #[b Pregunta:] ¿cuántas veces falla el sistema?
                  p.mb-4 La fiabilidad representa la probabilidad de que el sistema satisfaga la demanda en un periodo determinado y permite medir la frecuencia de falla.
                  p.mb-4 Puede calcularse como:
                  h4.mb-4 Ecuación 6
                  .row.justify-content.align-items-center.mb-2
                    .col-lg-7
                      .formula2
                        math.recta(display="block")
                          mrow
                            mi R
                            mo =
                            mfrac
                              msub
                                mi N
                                mi s
                              mi N
                            mo =
                            mn 1
                            mo -
                            mfrac
                              msub
                                mi N
                                mi f
                              mi N
                .col-lg-6.col-md-8.col-10.bi
                  img(src='@/assets/curso/tema2/12.png').mb-4
                  p.mb-0 donde:
                  p.mb-0 N#[sub s]: número de periodos satisfactorios.
                  p.mb-0 Nf: número de periodos de falla.
                  p.mb-4 N: número total de periodos evaluados.
                  p.mb-0 Interpretación: 0 ≤ R ≤ 1. Cuanto más cercano a 1 sea el valor, el sistema falla menos veces y presenta mayor fiabilidad.
          .row.justify-content-center.align-items-center(titulo="Resiliencia")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-0 #[b Pregunta:] ¿qué tan rápido se recupera el sistema?
                  p.mb-4 La resiliencia representa la probabilidad de que el sistema pase de un estado de falla a un estado satisfactorio en el siguiente periodo. Permite medir la velocidad de recuperación.
                  p.mb-4 Puede expresarse como:
                  h4.mb-4 Ecuación 7
                  .row.justify-content.align-items-center.mb-2
                    .col-lg-7
                      .formula2
                        math.recta(display="block")
                          mrow
                            mi Res
                            mo =
                            mi P
                            mo(stretchy="false") (
                            msub
                              mi S
                              mrow
                                mi t
                                mo +
                                mn 1
                            mo(stretchy="false") |
                            msub
                              mi F
                              mi t
                            mo(stretchy="false") )
                            mo =
                            mfrac
                              msub
                                mi N
                                mi FS
                              msub
                                mi N
                                mi F
                  p.mb-0 donde:
                  p.mb-0 F#[sub t]: estado de falla del sistema en el periodo t.
                  p.mb-0 S#[sub t+1]: estado satisfactorio del sistema en el periodo siguiente, t+1.
                  p.mb-0 N#[sub FS]: número de transiciones de un estado de falla a un estado satisfactorio.
                  p.mb-0 N#[sub F]: número de periodos en estado de falla desde los cuales se evalúa la recuperación.
                .col-lg-6.col-md-8.col-10.bi
                  img(src='@/assets/curso/tema2/13.png').mb-4
                  p.mb-4 También puede relacionarse con la duración media de las fallas:
                  h4.mb-4 Ecuación 8
                  .row.justify-content.align-items-center.mb-2
                    .col-lg-7
                      .formula2
                        math.recta(display="block")
                          mrow
                            mi(mathvariant="italic") Res
                            mo =
                            mfrac
                              mn 1
                              msub
                                mover(accent="true")
                                  mi D
                                  mo ¯
                                mi f
                  p.mb-0 donde:
                  p.mb-0 Res: resiliencia.
                  p.mb-0
                    math.recta
                      msub
                        mover(accent="true")
                          mi D
                          mo ¯
                        mi f
                    | : duración media de los eventos de falla.
                  p.mb-0 Interpretación: una mayor resiliencia representa recuperaciones más rápidas. Cuando se utiliza la duración media de las fallas, fallas de menor duración indican mayor capacidad de recuperación.
          .row.justify-content-center.align-items-center(titulo="Vulnerabilidad")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-0 #[b Pregunta:] ¿qué tan grave es la falla del sistema?
                  p.mb-4 La vulnerabilidad representa la magnitud o severidad del déficit cuando el sistema falla y permite medir las consecuencias de dicha falla.
                  p.mb-4 El déficit de un periodo puede expresarse como:
                  h4.mb-4 Ecuación 9
                  .row.justify-content.align-items-center.mb-2
                    .col-lg-7
                      .formula2
                        math.recta(display="block")
                          mrow
                            msubsup
                              mi D
                              mi t
                              mi f
                            mo =
                            msub
                              mi D
                              mi t
                            mo -
                            msub
                              mi Y
                              mi t
                  p.mb-0 donde:
                  p.mb-0
                    math.recta
                      msubsup
                        mi D
                        mi t
                        mi f
                    | : déficit de suministro en el periodo t.
                  p.mb-0 D#[sub t]: demanda requerida en el periodo t.
                  p.mb-4 Y#[sub t]: volumen efectivamente suministrado en el periodo t.
                  p.mb-4 y el déficit acumulado durante un evento de falla como:
                  h4.mb-4 Ecuación 10
                  .row.justify-content.align-items-center.mb-2
                    .col-lg-7
                      .formula2
                        math.recta(display="block")
                          mrow
                            msub
                              mi D
                              mrow
                                mi f
                                mo .
                                mi j
                            mo =
                            munderover
                              mo ∑
                              mrow
                                mi t
                                mo =
                                mn 1
                              mi k
                            mo(stretchy="false") (
                            msub
                              mi D
                              mi t
                            mo -
                            msub
                              mi Y
                              mi t
                            mo(stretchy="false") )
                .col-lg-6.col-md-8.col-10.bi
                  img(src='@/assets/curso/tema2/14.png').mb-4
                  p.mb-0 donde:
                  p.mb-0 D#[sub f.j]: déficit acumulado durante el evento de falla j.
                  p.mb-4 k: número de periodos consecutivos durante los cuales ocurre el evento de falla.
                  p.mb-4 Una medida de vulnerabilidad puede calcularse mediante:
                  h4.mb-4 Ecuación 11
                  .row.justify-content.align-items-center.mb-2
                    .col-lg-7
                      .formula2
                        math.recta(display="block")
                          mrow
                            mi V
                            mo =
                            mfrac
                              mn 1
                              mi M
                            munderover
                              mo ∑
                              mrow
                                mi j
                                mo =
                                mn 1
                              mi M
                            msub
                              mi D
                              mrow
                                mi f
                                mo .
                                mi j
                  p.mb-0 donde:
                  p.mb-0 V: vulnerabilidad.
                  p.mb-4 M: número de eventos de falla.
                  p.mb-0 #[b Interpretación:] cuanto menor sea la vulnerabilidad, menor será la gravedad o magnitud del déficit asociado a las fallas.
          .row.justify-content-center.align-items-center(titulo="Idea clave")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 Un buen desempeño se presenta cuando el sistema falla pocas veces (alta fiabilidad), se recupera rápidamente (alta resiliencia) y, cuando falla, las consecuencias son limitadas (baja vulnerabilidad).
                  p.mb-0 La fiabilidad permite establecer con qué frecuencia el sistema cumple la condición de servicio definida; la resiliencia permite analizar qué tan rápidamente el sistema se recupera tras entrar en un estado de falla; y la vulnerabilidad permite determinar la magnitud o severidad de las consecuencias asociadas a dicha falla. Estas tres métricas no miden lo mismo: un sistema puede presentar pocas fallas, pero cuando ocurren, estas pueden ser prolongadas o generar déficits importantes.
                .col-lg-6.col-md-8.col-10.bi
                  img(src='@/assets/curso/tema2/15.png')
              .bg1.p-4
                p.mb-0 Por ello, el análisis conjunto de estas dimensiones proporciona una visión más completa del comportamiento del sistema ante la variabilidad de la precipitación y de la demanda. La capacidad determina cuánto puede almacenar el sistema; la fiabilidad, con qué frecuencia cumple; la resiliencia, qué tan rápidamente se recupera; y la vulnerabilidad, qué tan grave es la falla cuando ocurre. Esta relación será fundamental para analizar posteriormente diferentes capacidades de almacenamiento y construir las curvas de almacenamiento, rendimiento y fiabilidad (SRY).

    .sub.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema2/su.svg')")
      h4.mb-0 Fiabilidad

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/16.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 La fiabilidad indica la probabilidad de que el sistema permanezca en una condición satisfactoria durante el periodo de análisis. Hashimoto et al. (1982) la definen como la probabilidad de que el estado del sistema pertenezca al conjunto de estados satisfactorios.

    p.mb-5 Para un sistema de aprovechamiento de aguas lluvias, se puede definir una condición satisfactoria como aquella en la que:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        h4.mb-4 Ecuación 12
        .row.justify-content.align-items-center.mb-2
          .col-lg-7
            .formula1
              p.mb-0 Y#[sub t] ≥ D#[sub t]
        p.mb-0 donde:
        p.mb-0 Y#[sub t]: volumen efectivamente suministrado.
        p.mb-4 D#[sub t]: demanda requerida.
        p.mb-4 Cuando:
        .row.justify-content.align-items-center.mb-2
          .col-lg-7
            .formula1
              p.mb-0 Y#[sub t] < D#[sub t]
        p.mb-0 se considera que existe una falla o un estado insatisfactorio.
      .col-lg-6
        .bg1.p-4
          p.mb-4 Una forma sencilla de calcular la fiabilidad de ocurrencia es:
          .row.justify-content-center.align-items-center.mb-2
            .col-lg-7
              .formula1
                math.recta(display="block")
                  mrow
                    mi R
                    mo =
                    mfrac
                      msub
                        mi N
                        mi s
                      mi N
          p.mb-0 donde:
          p.mb-0 R: fiabilidad.
          p.mb-0 N#[sub s]: número de periodos satisfactorios.
          p.mb-4 N: número total de periodos evaluados.
          p.mb-0 También puede expresarse como:
          .row.justify-content-center.align-items-center.mb-2
            .col-lg-7
              .formula1
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
          p.mb-0 donde N#[sub f] es el número de periodos de falla.
      .col-lg-3
        p.mb-4 #[b Ejemplo]
        p.mb-4 Si se analizan 120 meses y en 12 meses el sistema no logra satisfacer la demanda:
        .row.justify-content.align-items-center.mb-2
          .col-lg-10
            .formula1
              math.recta(display="block")
                mrow
                  mi R
                  mo =
                  mn 1
                  mo -
                  mfrac
                    msub
                      mi 12
                    mi 120
        .row.justify-content.align-items-center.mb-2
          .col-lg-10
            .formula1
              p.mb-0 R= 0,90 = 90 %
        p.mb-0 Esto significa que el sistema fue capaz de satisfacer la condición de servicio establecida durante el 90 % de los periodos evaluados.

    .sub.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema2/su.svg')")
      h4.mb-0 Resiliencia

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
        img.img-t(src='@/assets/curso/tema2/17.png')
      .col-lg-7(data-aos="fade-left")
        .bg2222.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-4(src='@/assets/curso/tema2/18.svg')
          p.mb-4.mx-lg-4.text-white La resiliencia es la capacidad del sistema para recuperarse tras una condición de falla. Hashimoto et al. (1982) la relacionan con la rapidez con que un sistema vuelve a una condición satisfactoria tras una falla.
          p.mb-0.mx-lg-4.text-white En un sistema de almacenamiento de aguas lluvias, por ejemplo, una falla puede presentarse cuando el volumen almacenado no alcanza a satisfacer la demanda establecida. Un sistema resiliente será aquel que pueda regresar relativamente rápido a condiciones satisfactorias después de un periodo de déficit.

    p.mb-0 La resiliencia responde a una pregunta diferente:
    p.mb-0 #[b Una vez que el sistema falla, ¿qué tan rápido logra recuperarse y volver a una condición satisfactoria?]
    p.mb-5 Hashimoto et al. (1982) definieron la resiliencia como la probabilidad de que el sistema pase de un estado insatisfactorio a uno satisfactorio en el siguiente periodo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        p.mb-4 Matemáticamente:
        h4.mb-4 Ecuación 13
        .row.justify-content.align-items-center.mb-2
          .col-lg-10
            .formula1
              p.mb-0 Res = P(X#[sub t+1] ∈ S │ X#[sub t] ∈ F)
        p.mb-0 donde:
        p.mb-0 S: estado satisfactorio.
        p.mb-0 F: estado de falla.
        p.mb-4 X#[sub t]: estado del sistema en el periodo t.
        p.mb-4 En términos de una serie temporal, puede estimarse como:
        .row.justify-content.align-items-center.mb-2
          .col-lg-10
            .formula1
              math.recta(display="block")
                mrow
                  mi Res
                  mo =
                  mfrac
                    msub
                      mi N
                      mi FS
                    msub
                      mi N
                      mi F
        p.mb-0 donde:
        p.mb-0 N#[sub FS]: número de transiciones de falla → satisfactorio.
      .col-lg-6
        .bg1.p-4
          p.mb-4 N#[sub F]: número de periodos en estado de falla desde los cuales se evalúa la recuperación.
          p.mb-4 Otra forma ampliamente utilizada relaciona la resiliencia con la duración media de las fallas:
          .row.justify-content.align-items-center.mb-2
            .col-lg-7
              .formula1
                math.recta(display="block")
                  mrow
                    mi(mathvariant="italic") Res
                    mo =
                    mfrac
                      mn 1
                      msub
                        mover(accent="true")
                          mi D
                          mo ¯
                        mi f
          p.mb-0 #[b Ejemplo]
          p.mb-4 Supóngase que durante una simulación se presentan cuatro eventos de falla:
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12
              .tabla-a.tabla-peq.tabla1
                table
                  thead
                    tr
                      th Evento
                      th Duración de la falla
                  tbody
                    tr.bgw
                      td 1
                      td 2 meses
                    tr.bgw
                      td 2
                      td 1 mes
                    tr.bgw
                      td 3
                      td 3 meses
                    tr.bgw
                      td 4
                      td 2 meses
      .col-lg-3
        p.mb-4 La duración media es:
        .row.justify-content.align-items-center.mb-2
          .col-lg-10
            .formula1
              math.recta(display="block")
                mrow
                  msub
                    mover(accent="true")
                      mi D
                      mo ¯
                    mi f
                  mo =
                  mfrac
                    mrow
                      mn 2
                      mo +
                      mn 1
                      mo +
                      mn 3
                      mo +
                      mn 2
                    mn 4
                  mo =
                  mn 2
                  mtext &nbsp;meses
        p.mb-4 Por tanto:
        .row.justify-content.align-items-center.mb-2
          .col-lg-10
            .formula1
              math.recta(display="block")
                mrow
                  mi Res
                  mo =
                  mfrac
                    mn 1
                    mn 2
                  mo =
                  mn 0.50
        p.mb-0 El valor debe interpretarse de acuerdo con la formulación y unidad utilizadas; lo importante para el aprendiz es comprender que las fallas de menor duración representan una mayor capacidad de recuperación.

    .sub.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema2/su.svg')")
      h4.mb-0 Vulnerabilidad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema2/19.png')
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2
            img.img-t(src='@/assets/curso/tema2/20.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 La vulnerabilidad se refiere a la gravedad de las consecuencias asociadas a las fallas del sistema. Hashimoto et al. (1982) distinguen así tres dimensiones complementarias del desempeño: fiabilidad, relacionada con la frecuencia de las fallas; resiliencia, relacionada con la recuperación; y vulnerabilidad, relacionada con la magnitud o severidad de las consecuencias de la falla.
        p.mb-0 La vulnerabilidad responde a una tercera pregunta:
        p.mb-0 #[b Cuando el sistema falla, ¿qué tan grave es la falla?]
        p.mb-0 Por tanto, dos sistemas pueden tener exactamente la misma fiabilidad y, sin embargo, presentar vulnerabilidades distintas. Hashimoto et al. (1982) conceptualizan la vulnerabilidad como una medida de la magnitud o severidad de las consecuencias de las fallas.

    p.mb-5 En un sistema de almacenamiento de aguas lluvias, una forma práctica de expresarla consiste en analizar el déficit de suministro:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content.align-items-center.mb-0
          .col-lg-7
            .formula1
              math.recta(display="block")
                mrow
                  msubsup
                    mi D
                    mi t
                    mi f
                  mo =
                  msub
                    mi D
                    mi t
                  mo -
                  msub
                    mi Y
                    mi t
        p.mb-0 cuando:
        .row.justify-content.align-items-center.mb-0
          .col-lg-7
            .formula1
              p.mb-0 Y#[sub t] < D#[sub t]
        p.mb-0 El déficit acumulado durante un evento de falla puede calcularse como:
        .row.justify-content.align-items-center.mb-2
          .col-lg-7
            .formula1
              math.recta(display="block")
                mrow
                  msub
                    mi D
                    mrow
                      mi f
                      mo .
                      mi j
                  mo =
                  munderover
                    mo ∑
                    mrow
                      mi t
                      mo =
                      mn 1
                    mi k
                  mo(stretchy="false") (
                  msub
                    mi D
                    mi t
                  mo -
                  msub
                    mi Y
                    mi t
                  mo(stretchy="false") )
        p.mb-0 donde k corresponde al número de periodos consecutivos durante los cuales ocurre el evento de falla.
        p.mb-0 Una medida de vulnerabilidad puede entonces expresarse como el déficit promedio de los eventos de falla:
        .row.justify-content.align-items-center.mb-0
          .col-lg-7
            .formula1
              math.recta(display="block")
                mrow
                  mi V
                  mo =
                  mfrac
                    mn 1
                    mi M
                  munderover
                    mo ∑
                    mrow
                      mi j
                      mo =
                      mn 1
                    mi M
                  msub
                    mi D
                    mrow
                      mi f
                      mo .
                      mi j
        p.mb-0 donde:
        p.mb-0 V: vulnerabilidad.
        p.mb-0 M: número de eventos de falla.
        p.mb-3 D#[sub f.j]: déficit acumulado durante el evento de falla j.
        p.mb-0 También existen formulaciones que emplean la magnitud máxima del déficit como indicador de vulnerabilidad. La elección depende del criterio de evaluación adoptado para el sistema.
      .col-lg-5
        .bg1.p-4
          p.mb-0 #[b Ejemplo]
          p.mb-2 Supóngase que se presentan tres eventos de falla:
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-12
              .tabla-a.tabla-peq.tabla1
                table
                  thead
                    tr
                      th Evento
                      th déficit acumulado
                  tbody
                    tr.bgw
                      td 1
                      td 2 m#[sup 3]
                    tr.bgw
                      td 2
                      td 5 m#[sup 3]
                    tr.bgw
                      td 3
                      td 3 m#[sup 3]
          p.mb-0 Entonces:
          .row.justify-content.align-items-center.mb-0
            .col-lg-10
              .formula1
                math(display="block")
                  mrow
                    mi V
                    mo =
                    mfrac
                      mrow
                        mn 2
                        mo +
                        mn 5
                        mo +
                        mn 3
                      mn 3
          .row.justify-content.align-items-center.mb-0
            .col-lg-10
              .formula1
                math(display="block")
                  mrow
                    mi V
                    mo =
                    mn 3,33
                    mtext &nbsp;
                    mi m
                    msup
                      mi m
                      mn 3
          p.mb-4 Esto significa que el déficit promedio asociado a los eventos de falla fue de 3,33 m³.
          p.mb-0 Si se utiliza como criterio la máxima magnitud:
          .row.justify-content.align-items-center.mb-0
            .col-lg-10
              .formula1
                p.mb-0 V#[sub max] = 5 m#[sup 3]
          p.mb-0 Por ello, la definición de vulnerabilidad utilizada debe explicitarse para evitar la mezcla de indicadores diferentes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .cajon.color-primario.p-4.mb-0
          p.mb-0 Una vez analizadas individualmente la fiabilidad, la resiliencia y la vulnerabilidad, es necesario reconocer cómo estas métricas se relacionan con la capacidad de almacenamiento, el balance de entradas y salidas y el estado que presenta el sistema en cada periodo. El siguiente recurso integra estos conceptos mediante una misma situación de análisis.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 ¿Cómo se relacionan los cuatro conceptos?

    p.mb-5 La capacidad del sistema influye en su comportamiento, pero el desempeño se evalúa con tres métricas complementarias: fiabilidad, resiliencia y vulnerabilidad.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        ImagenInfograficaB.color-acento-botones.mb-0
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/21.svg')
          div(x="12.4%" y="6.8%" tooltip="Comparación de los cuatro conceptos" numero="")
            h4.mb-4 Comparación de los cuatro conceptos
            p.mb-0 #[b 1. Capacidad]
            p.mb-0 #[b Pregunta:] ¿cuánta agua puede almacenar?
            p.mb-0 #[b ¿Cómo se determina?]
            p.mb-0 S#[sub max]: capacidad máxima del tanque o volumen.
            p.mb-4 #[b Interpretación:] variable de diseño. No es un indicador de desempeño.
            .br.mb-4
            p.mb-0 #[b 2. Fiabilidad]
            p.mb-0 #[b Pregunta:] ¿con qué frecuencia satisface la demanda?
            p.mb-0 #[b ¿Cómo se calcula?]
            .row.justify-content.align-items-center.mb-2
              .col-lg-10
                .formula3
                  math.recta(display="block")
                    mrow
                      mi R
                      mo =
                      mn 1
                      mtext &nbsp;
                      mfrac
                        msub
                          mi N
                          mi f
                        mi N
            p.mb-4 #[b Interpretación:] mayor es mejor. Valores cercanos a 1 indican que el sistema falla pocas veces.
            .br.mb-4
            p.mb-0 #[b 3. Resiliencia]
            p.mb-0 #[b Pregunta:] ¿qué tan rápido se recupera después de fallar?
            p.mb-0 ¿Cómo se calcula?
            .row.justify-content.align-items-center.mb-2
              .col-lg-5
                .formula3
                  p.mb-0 Res = P(S#[sub t+1] │ F#[sub t])
              .col-lg-1
                p.mb-0 o
              .col-lg-5
                .formula3
                  math.recta(display="block")
                    mrow
                      mi(mathvariant="italic") Res
                      mo =
                      mfrac
                        mn 1
                        msub
                          mover(accent="true")
                            mi D
                            mo ¯
                          mi f
            p.mb-0
              math.recta
                msub
                  mover(accent="true")
                    mi D
                    mo ¯
                  mi f
              |  corresponde a la duración media de los eventos de falla.
            p.mb-4 Interpretación: mayor es mejor. Valores altos indican recuperaciones más rápidas y fallas de menor duración.
            .br.mb-4
            p.mb-0 #[b 4. Vulnerabilidad]
            p.mb-0 #[b Pregunta:] ¿qué tan grave es la falla?
            p.mb-0 Puede analizarse mediante el déficit promedio:
            .row.justify-content.align-items-center.mb-2
              .col-lg-4
                .formula3
                  math.recta(display="block")
                    mrow
                      mi V
                      mo =
                      mfrac
                        mn 1
                        mi M
                      munderover
                        mo ∑
                        mrow
                          mi j
                          mo =
                          mn 1
                        mi M
                      msub
                        mi D
                        mrow
                          mi f
                          mo .
                          mi j
              .col-lg-3
                p.mb-0 o mediante la máxima magnitud:
              .col-lg-4
                .formula3
                  p.mb-0 V#[sub max] = max (D#[sub f.j])
            p.mb-0 #[b Interpretación:] menor es mejor. Valores bajos indican impactos menos severos cuando el sistema falla.
          div(x="69%" y="5.5%" tooltip="Relación entre los cuatro conceptos" numero="")
            h4.mb-4 Relación entre los cuatro conceptos
            p.mb-0 #[b 1. Capacidad del tanque]
            p.mb-4 La capacidad de almacenamiento  (S#[sub max]) define el volumen máximo que puede almacenar el sistema.
            .br.mb-4
            p.mb-0 #[b 2. Balance de entradas y salidas]
            p.mb-0 En cada periodo se calcula:
            .row.justify-content.align-items-center.mb-3
              .col-lg-7
                .formula3
                  p.mb-0 S#[sub t] = min [S#[sub max'] S#[sub t-1] + Q#[sub t] - Y#[sub t] - O#[sub t]]
            .br.mb-4
            p.mb-0 #[b 3. Estado del sistema]
            p.mb-0 El resultado permite establecer si el sistema se encuentra en:
            .row.justify-content.align-items-center.mb-3
              .col-lg-5
                .formula3
                  p.mb-0 Y#[sub t] ≥ D#[sub t]
              .col-lg-5
                .formula3
                  p.mb-0 Y#[sub t]< D#[sub t]
            .br.mb-4
            p.mb-0 #[b 4. Evaluación del desempeño]
            p.mb-0 A partir de la serie de estados del sistema se calculan:
            p.mb-0 #[b Fiabilidad:] ¿con qué frecuencia satisface la demanda?
            p.mb-0 #[b Resiliencia:] ¿qué tan rápido se recupera después de fallar?
            p.mb-4 #[b Vulnerabilidad:] ¿qué tan grave es la falla?
            p.mb-0 #[b Mensaje clave]
            p.mb-4 La capacidad afecta las entradas, el balance y el estado del sistema; a partir de ese comportamiento se calculan las métricas que permiten evaluar su desempeño.
            p.mb-0 #[b Advertencia]
            p.mb-0 La capacidad no debe confundirse con un indicador de desempeño: tanques con la misma capacidad pueden presentar comportamientos muy diferentes en términos de fiabilidad, resiliencia y vulnerabilidad.
          div(x="88%" y="67.3%" tooltip="Ejemplo integrador" numero="")
            h4.mb-4 Ejemplo integrador
            p.mb-0 #[b Datos del sistema]
            p.mb-0 Capacidad del tanque (S#[sub max']): #[b 10 m#[sup 3].]
            p.mb-0 Periodo de simulación: #[b 120 meses.]
            p.mb-0 Periodos con falla (Nf ): #[b 12.]
            p.mb-0 Número de eventos de falla (M): #[b 4.]
            p.mb-0 Duraciones de los eventos: #[b 2, 1, 3 y 2 meses.]
            p.mb-4 Déficits acumulados por evento: #[b 2, 5, 3 y 4 m#[sup 3].]
            .br.mb-4
            p.mb-0 #[b 1. Cálculo de fiabilidad]
            .row.justify-content.align-items-center.mb-3
              .col-lg-5
                .formula3
                  math.recta(display="block")
                    mrow
                      mi R
                      mo =
                      mn 1
                      mtext &nbsp;
                      mn -
                      mtext &nbsp;
                      mfrac
                        msub
                          mi 12
                        mi 120
              .col-lg-5
                .formula3
                  p.mb-0 R = 0,90
            p.mb-0 Fiabilidad = 90 %.
            p.mb-4 El sistema satisface la demanda el 90 % del tiempo analizado.
            .br.mb-4
            p.mb-0 #[b 2. Cálculo de resiliencia]
            .row.justify-content.align-items-center.mb-0
              .col-lg-6
                .formula3
                  math.recta(display="block")
                    mrow
                      msub
                        mover(accent="true")
                          mi D
                          mo ¯
                        mi f
                      mo =
                      mfrac
                        mrow
                          mn 2
                          mo +
                          mn 1
                          mo +
                          mn 3
                          mo +
                          mn 2
                        mn 4
                      mo =
                      mn 2
                      mtext &nbsp;meses
              .col-lg-6
                .formula3
                  math.recta(display="block")
                    mrow
                      mi Res
                      mo =
                      mfrac
                        mn 1
                        mn 2
                      mo =
                      mn 0.50
            p.mb-0 #[b Resiliencia = 0,50.]
            p.mb-4 Con esta formulación, la duración media de las fallas es de 2 meses y la resiliencia obtenida es de 0,50.
            .br.mb-4
            p.mb-0 #[b 3. Cálculo de vulnerabilidad]
            .row.justify-content.align-items-center.mb-0
              .col-lg-6
                .formula3
                  math.recta(display="block")
                    mrow
                      msub
                        mover(accent="true")
                          mi V
                      mo =
                      mfrac
                        mrow
                          mn 2
                          mo +
                          mn 5
                          mo +
                          mn 3
                          mo +
                          mn 4
                        mn 4
              .col-lg-6
                .formula3
                  p.mb-0 V = 3,5 m#[sup 3]
            p.mb-0 #[b Vulnerabilidad promedio = 3,5 m#[sup 3] por evento de falla.]
            p.mb-0 Este es el impacto medio cuando el sistema falla.
          div(x="10.5%" y="66.3%" tooltip="Resultado del ejemplo" numero="")
            h4.mb-4 Resultado del ejemplo
            p.mb-0 Con una capacidad de #[b 10 m#[sup 3],] el sistema presenta:
            p.mb-0 #[b Fiabilidad:] 90 %.
            p.mb-0 #[b Resiliencia:] 0,50.
            p.mb-4 #[b Vulnerabilidad promedio:] 3,5 m#[sup 3] por evento de falla.
            p.mb-0 #[b Idea clave]
            p.mb-0 No basta con conocer el tamaño del tanque. Para evaluar realmente el desempeño es necesario analizar qué ocurre con el sistema a lo largo de toda la serie temporal.
    
    p.mb-0 El análisis conjunto de la capacidad de almacenamiento, la fiabilidad, la resiliencia y la vulnerabilidad permite reconocer que el desempeño del sistema no depende únicamente del tamaño del tanque. También está relacionado con el comportamiento de las entradas y salidas, la ocurrencia de fallas, la capacidad de recuperación y la magnitud de los déficits. Estos elementos constituyen la base para analizar posteriormente la relación entre almacenamiento, rendimiento y fiabilidad.

    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Tipos de sistemas de almacenamiento de aguas lluvias

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 Los sistemas de almacenamiento pueden clasificarse según diversos criterios. Para este componente conviene evitar una clasificación excesivamente constructiva y concentrarse en las características que afectan el desempeño hidráulico.
        .bg5.p-4
          p.mb-4.mx-lg-2.mt-lg-2 #[b Según su ubicación:]
          ul.lista-ul.mb-0.mx-lg-2
            li.d-flex.mb-3
              i.fas.fa-che.gt2
              p.mb-0 #[b Almacenamiento superficial:] el tanque se encuentra sobre el terreno, lo que facilita la inspección, el mantenimiento y el acceso. 
            li.d-flex.mb-3.ps-lg-1
              i.fas.fa-che.gt2
              p.mb-0 #[b Almacenamiento enterrado:] el tanque se ubica bajo el nivel del terreno, lo que puede favorecer el aprovechamiento del espacio disponible, aunque conlleva mayores requerimientos constructivos y de mantenimiento. 
            li.d-flex.mb-2
              i.fas.fa-che.gt2
              p.mb-0 #[b Almacenamiento integrado:] el depósito forma parte de la estructura o infraestructura en la que se realiza la captación. 
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/22.png')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
        img.img-t(src='@/assets/curso/tema2/23.png')
      .col-lg-7(data-aos="fade-left")
        .bg2222.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-4.mt-lg-2(src='@/assets/curso/tema2/24.svg')
          p.mb-4.mx-lg-4.text-white #[b Según su configuración de almacenamiento:]
          ul.lista-ul.mb-4.mx-lg-4.text-white 
            li.d-flex.mb-0
              i.fas.fa-drop.gt3
              p.mb-0 #[b Sistema individual:] una superficie de captación alimenta un almacenamiento asociado a un usuario. 
            li.d-flex.mb-0
              i.fas.fa-drop.gt3
              p.mb-0 #[b Sistema compartido:] varias unidades de captación o usuarios utilizan un sistema de almacenamiento común o interconectado. 
            li.d-flex.mb-0
              i.fas.fa-drop.gt3
              p.mb-0 #[b Sistema modular:] el almacenamiento se conforma por unidades que pueden adicionarse o combinarse para ampliar progresivamente la capacidad del sistema.
          p.mb-0.mb-lg-2.mx-lg-4.text-white Los estudios de Seo et al. (2012) muestran que la conexión de depósitos puede modificar el almacenamiento requerido, especialmente cuando existen diferencias en los patrones de demanda entre los usuarios.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/25.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 #[b Según el material:] pueden encontrarse tanques construidos en concreto, plástico, metal u otros materiales compatibles con las condiciones del proyecto. En la revisión de García-Ávila et al. (2023), el concreto figura entre los materiales más utilizados para cisternas en los estudios analizados.
            br 
            br 
            p.mb-0 Las configuraciones de almacenamiento determinan cómo se almacenará, operará, se mantendrá y se pondrá a disposición de los usuarios el agua captada. La selección de una configuración no depende únicamente del volumen requerido, sino también de las condiciones físicas del sitio, el espacio disponible, las características del suelo, la demanda de agua, las posibilidades de mantenimiento y la necesidad de ampliar o compartir el sistema. Por esta razón, una misma capacidad de almacenamiento puede implementarse mediante diferentes configuraciones, cada una con ventajas y restricciones particulares.

    p.mb-5 Para el análisis de sistemas de aprovechamiento de aguas lluvias, es importante distinguir entre dónde se ubica el almacenamiento (superficial, enterrado o integrado) y cómo se organiza su uso y su ampliación (individual, compartido o modular). Esta diferenciación permite que el aprendiz no interprete las configuraciones como alternativas exclusivamente constructivas, sino como decisiones que inciden en la operación y el desempeño del sistema. La configuración seleccionada deberá relacionarse posteriormente con variables como la capacidad de almacenamiento, la demanda, el rendimiento y la fiabilidad del sistema.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Comparación de configuraciones de almacenamiento de aguas lluvias
        .tabla-a.tab2.mb-0
          table
            thead
              tr
                th Configuración
                th Característica principal
                th Ventaja principal
                th Aspecto técnico a evaluar
                th Criterio de selección
            tbody
              tr.bgr
                td.text-center Superficial
                td Tanque ubicado sobre el nivel del terreno.
                td Facilita la inspección, limpieza y mantenimiento.
                td Espacio disponible, exposición ambiental y estabilidad del tanque.
                td Cuando existe área disponible y se requiere fácil acceso.
              tr
                td.text-center Enterrada
                td Tanque instalado bajo el nivel del terreno.
                td Permite aprovechar el espacio superficial.
                td Acceso para mantenimiento, condiciones del suelo, nivel freático y cargas sobre el tanque.
                td Cuando el espacio superficial es limitado y las condiciones constructivas lo permiten.
              tr.bgr
                td.text-center Individual
                td Sistema destinado a una vivienda, establecimiento o usuario.
                td Operación y gestión relativamente sencillas.
                td Variabilidad de la demanda, volumen requerido y disponibilidad de captación.
                td Cuando la demanda y el área de captación están asociadas a un único usuario.
              tr
                td.text-center Compartida
                td Sistema que atiende a varios usuarios o unidades.
                td Permite distribuir el agua almacenada y aprovechar economías de escala.
                td Coordinación entre usuarios, distribución, demanda conjunta y reglas de operación.
                td Cuando existe demanda conjunta y capacidad para gestionar el recurso compartido.
              tr.bgr
                td.text-center Modular
                td Sistema conformado por unidades que pueden adicionarse o combinarse.
                td Permite ampliar progresivamente la capacidad.
                td Interconexión, operación, mantenimiento y compatibilidad entre módulos.
                td Cuando se prevé crecimiento de la demanda o ampliación progresiva del sistema.
          figcaption Nota. La configuración seleccionada debe analizarse en conjunto con la capacidad de almacenamiento, la demanda, las condiciones del sitio, la operación y el mantenimiento del sistema.


    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Volumen, configuraciones de uso y rendimientos

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Volumen

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema2/26.png')
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2
            img.img-t(src='@/assets/curso/tema2/27.svg')
          .col-lg-10.ps-lg-0
            p.mb-0.my-lg-2 El volumen de almacenamiento es la cantidad de agua que el sistema puede contener. Para su análisis deben diferenciarse al menos tres conceptos:
        ul.lista-ul.mb-4
          li.d-flex.mb-0
            i.fas.fa-che.gt4
            p.mb-0 #[b Volumen de diseño:] capacidad máxima prevista para el sistema.
          li.d-flex.mb-0
            i.fas.fa-che.gt4
            p.mb-0 #[b Volumen almacenado:] cantidad de agua presente en el tanque en un momento determinado.
          li.d-flex.mb-0
            i.fas.fa-che.gt4
            p.mb-0 #[b Volumen suministrado o rendimiento:] cantidad de agua que el sistema entrega para satisfacer una demanda durante un periodo determinado.
        p.mb-0 Los modelos de balance hídrico utilizados en sistemas de aprovechamiento de aguas lluvias consideran variables como la precipitación, el área de captación, el coeficiente de escorrentía, el almacenamiento, la demanda, el suministro y el rebose (Chapa et al., 2020).
    
    p.mb-4 Una representación conceptual del balance puede expresarse como:

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8
        .bg8.p-4.mb-0 
          h3.mb-3 Ecuación 14
          .row.justify-content.align-items-center.mb-0
            .col-lg-5
              .formula1
                p.mb-0 S#[sub t] = S#[sub t-1] + Q#[sub t] - Y#[sub t] - O#[sub t]
          p.mb-0 donde:
          p.mb-0 S#[sub t]: almacenamiento al final del periodo.
          p.mb-0 S#[sub t-1]: almacenamiento inicial.
          p.mb-0 Q#[sub t]: volumen de entrada.
          p.mb-0 Y#[sub t]: volumen suministrado.
          p.mb-0 O#[sub t]: pérdidas o salidas del sistema, incluido el rebose.
      .col-lg-4
        img(src='@/assets/curso/tema2/28.png')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/29.png')
      .col-lg-7
        .row
          .col-lg-6.col-md-9.col-12.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
            img.img-t(src='@/assets/curso/tema2/30.svg')
          .col-lg-6(data-aos="fade-left")
            .bg3.mb-0.p-4
              p.mb-0 El modelo debe respetar el límite físico:
            .bg4.mb-0.p-4
              .row.justify-content.align-items-center.mb-0
                .col-lg-7
                  .formula1
                    p.mb-0 0 ≤ S#[sub t] ≤ S#[sub max]
              p.mb-0 Este balance permite representar cómo cambia el volumen almacenado de un periodo a otro en función del agua que ingresa al sistema y de los volúmenes que salen de este. Para facilitar la comprensión de estos flujos, se presenta el siguiente recurso.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Balance de agua en un tanque de almacenamiento

    p.mb-5 El balance de agua representa los principales flujos que ingresan, permanecen temporalmente almacenados y salen de un sistema de aprovechamiento de aguas lluvias. La relación entre estos elementos determina el comportamiento del tanque y la cantidad de agua disponible para su uso.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        ImagenInfograficaB.color-acento-botones.mb-0
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/31.svg')
          div(x="2%" y="3.5%" tooltip="Precipitación" numero="")
            h4.mb-4 Precipitación
            p.mb-0 Agua que cae sobre la superficie de captación.
            p.mb-0 La precipitación constituye el origen del agua que posteriormente puede ser captada y conducida hacia el sistema de almacenamiento.
          div(x="28%" y="3.5%" tooltip="Captación" numero="")
            h4.mb-4 Captación
            p.mb-0 Superficie que recolecta el agua de lluvia.
            p.mb-0 El área de captación recibe la precipitación y permite dirigir el agua hacia los elementos de conducción del sistema.
          div(x="52.7%" y="3.5%" tooltip="Entrada" numero="")
            h4.mb-4 Entrada
            p.mb-0 Conducción que transporta el agua hasta el tanque.
            p.mb-0 El agua captada es conducida hacia el sistema de almacenamiento y constituye el volumen de entrada del periodo.
          div(x="78%" y="3.5%" tooltip="Tanque" numero="")
            h4.mb-4 Tanque
            p.mb-0 Elemento en el que el agua permanece temporalmente almacenada.
            p.mb-0 El volumen contenido en el tanque puede aumentar o disminuir de un periodo a otro de acuerdo con las entradas y salidas del sistema. El almacenamiento no puede superar la capacidad máxima definida para el tanque.
          div(x="2.2%" y="52.7%" tooltip="Suministro" numero="")
            h4.mb-4 Suministro
            p.mb-0 Agua disponible para uso.
            p.mb-4 Corresponde al volumen que el sistema puede entregar para satisfacer una necesidad determinada.
            h4.mb-4 Demanda
            p.mb-0 Requerimiento de agua de los usuarios.
            p.mb-0 La relación entre el volumen suministrado y la demanda permite determinar si el sistema logra satisfacer la condición de servicio establecida.
          div(x="28%" y="52.7%" tooltip="Rebose" numero="")
            h4.mb-4 Rebose
            p.mb-0 Excedente de agua que sale cuando el tanque alcanza su capacidad máxima.
            p.mb-0 Cuando el almacenamiento ha llegado a su límite y continúa ingresando agua, el volumen que no puede almacenarse sale del sistema mediante rebose.
          div(x="52.7%" y="52.7%" tooltip="Pérdidas" numero="")
            h4.mb-4 Pérdidas
            p.mb-0 Volúmenes de agua que pueden salir del sistema por infiltración, evaporación o fugas.
            p.mb-0 Estas pérdidas reducen la cantidad de agua que permanece disponible para almacenamiento y posterior suministro.
          div(x="75%" y="52.7%" tooltip="Balance general" numero="")
            h4.mb-4 Balance general
            p.mb-0 El comportamiento del sistema depende de la relación entre el agua que ingresa, el volumen que permanece almacenado y las diferentes salidas.
            p.mb-0 De manera conceptual, el cambio en el almacenamiento puede entenderse como:
            p.mb-0 #[b Cambio en el almacenamiento = entrada − (suministro + rebose + pérdidas).]
            p.mb-0 Por ello, el volumen almacenado no permanece constante, sino que cambia de acuerdo con las condiciones de cada periodo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .cajon.color-acento-botones.p-4.mb-0
          h4.mb-3 Idea clave
          p.mb-0 El tanque no debe analizarse de manera aislada. Su comportamiento depende del equilibrio entre el agua que ingresa, la capacidad disponible para almacenarla y los volúmenes que salen del sistema por suministro, rebose o pérdidas.

    p.mb-5 Comprender este balance permite diferenciar la capacidad máxima del tanque del volumen que realmente permanece almacenado y del volumen que puede suministrarse durante un periodo determinado. Además, permite reconocer que el rendimiento del sistema no depende únicamente de la cantidad de agua disponible, sino también de la forma en que se presenta y se distribuye la demanda.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Configuraciones de uso

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema2/32.png')
      .col-lg-7
        .row.justify-content-center.align-items.mb-3
          .col-lg-2
            img.img-t(src='@/assets/curso/tema2/33.svg')
          .col-lg-10.ps-lg-0
            p.mb-0.my-lg-2 El rendimiento de un sistema no depende solamente de cuánto llueve ni de cuánto puede almacenar el tanque. También depende de para qué se utiliza el agua y de cuándo se presenta la demanda.
        p.mb-3 La literatura muestra que los sistemas de aprovechamiento pueden destinar el agua de lluvia a usos como la descarga de sanitarios, el riego, el lavado de vehículos, la limpieza y otros usos no potables, según las condiciones del sistema y los requerimientos de calidad (Khan et al., 2022).
        p.mb-3 Para el análisis del componente pueden distinguirse:
        ul.lista-ul.mb-0
          li.d-flex.mb-0
            i.fas.fa-che.gt4
            p.mb-0 #[b Uso único:] el agua almacenada se destina a una sola demanda. 
          li.d-flex.mb-0
            i.fas.fa-che.gt4
            p.mb-0 #[b Uso múltiple:] el mismo almacenamiento satisface distintas demandas. 
          li.d-flex.mb-0
            i.fas.fa-che.gt4
            p.mb-0 #[b Uso prioritario:] cuando el volumen disponible es limitado, se establece un orden de atención de las demandas. 
          li.d-flex.mb-0
            i.fas.fa-che.gt4
            p.mb-0 #[b Uso estacional:] la demanda varía según el periodo del año, la actividad o la condición de operación. 
          li.d-flex.mb-0
            i.fas.fa-che.gt4
            p.mb-0 #[b Uso compartido:] el almacenamiento es utilizado por varios usuarios.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/34.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 Esto es importante porque dos sistemas con la misma precipitación y capacidad de almacenamiento pueden presentar rendimientos distintos si sus patrones de demanda difieren. Khan et al. (2022) encontraron que el desempeño de un sistema de aprovechamiento está condicionado por la precipitación, el área de captación, el tamaño del tanque y el patrón de demanda.
            br 
            br 
            p.mb-0 La configuración de uso define cómo se distribuye el agua almacenada entre las demandas que debe satisfacer el sistema. Esta decisión tiene una incidencia directa sobre el balance de agua, ya que una misma cantidad almacenada puede generar resultados diferentes según si existe una única demanda, varias demandas, una jerarquía de usos o una demanda que cambia a lo largo del año. Por esta razón, la configuración de uso debe establecerse antes de evaluar el rendimiento del sistema.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema2/35.png')
      .col-lg-7
        p.mb-4 En una configuración única, el análisis se centra en determinar si el volumen disponible permite satisfacer una demanda específica. Cuando existen múltiples demandas, el modelo debe considerar cómo se distribuye el agua disponible entre los distintos usos. Si además se establece una prioridad, el orden de atención se convierte en una regla operativa que puede modificar los déficits individuales de cada demanda.
        p.mb-4 Por su parte, una configuración estacional incorpora la variabilidad temporal de la demanda. Esto resulta especialmente relevante en sistemas de aprovechamiento de aguas lluvias, porque la demanda puede no coincidir temporalmente con los periodos de mayor precipitación. Finalmente, en una configuración compartida, varios usuarios dependen del mismo almacenamiento, por lo que la capacidad requerida y el desempeño del sistema deben analizarse considerando la demanda conjunta y las reglas con las que se distribuye el recurso
        .cajon.color-acento-botones.p-4.mb-0
          p.mb-0.mx-lg-3.mt-lg-2.mb-lg-2 La configuración de uso no solo modifica la cantidad de agua demandada, sino que también determina cuándo, para quién y bajo qué reglas se utiliza el agua almacenada. Por ello, puede modificar el rendimiento, la fiabilidad, la resiliencia y la vulnerabilidad del sistema.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Configuración de uso y efecto sobre el sistema
        .tabla-a.tab3.mb-0
          table
            thead
              tr
                th Configuración de uso
                th Característica
                th Implicación en el sistema
                th Aspecto a evaluar
            tbody
              tr.bgr
                td.text-center Única
                td Una demanda asociada al sistema.
                td Simplifica el balance entre oferta y demanda.
                td Volumen requerido y cumplimiento de la demanda.
              tr
                td.text-center Múltiple
                td Dos o más demandas atendidas por el mismo sistema.
                td Incrementa la complejidad de la asignación del agua almacenada.
                td Demanda total, distribución y competencia entre usos.
              tr.bgr
                td.text-center Prioritaria
                td Las demandas se atienden según un orden establecido.
                td La asignación del agua puede generar diferentes niveles de servicio entre usos.
                td Jerarquía de usos y déficit de cada demanda.
              tr
                td.text-center Estacional
                td La demanda varía según el periodo del año.
                td Modifica temporalmente la relación entre oferta, almacenamiento y demanda.
                td Variación mensual o estacional de la demanda.
              tr.bgr
                td.text-center Compartida
                td El almacenamiento es utilizado por varios usuarios.
                td Requiere considerar conjuntamente las demandas y las reglas de distribución.
                td Demanda conjunta, reglas de asignación y capacidad requerida.
        figcaption Nota. La configuración de uso determina cuándo, para quién y bajo qué reglas se utiliza el agua almacenada, y puede modificar el desempeño del sistema.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
