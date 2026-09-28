<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Planteamiento de alternativas para el reúso de aguas lluvias.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación de los conceptos relacionados con el IPE, los sistemas de aprovechamiento de aguas lluvias, la capacidad y el balance de almacenamiento, las configuraciones de uso, las métricas de desempeño y el modelo SRY para comparar alternativas de reúso de aguas lluvias.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Una estación presenta IPE-1 = −1,4; IPE-3 = −0,8; IPE-6 = −1,6 e IPE-12 = −2,1. ¿Cuál es la interpretación correcta?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Existe una condición seca uniforme en todas las escalas temporales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Hay una condición moderadamente seca a un mes, cercana a la normalidad a tres meses, severamente seca a seis meses y extremadamente seca a doce meses.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Existe una condición húmeda persistente porque todos los valores están cercanos a cero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El IPE-12 no puede interpretarse porque el IPE solo analiza periodos mensuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Un tanque tiene una capacidad máxima de 10 m³. Al comienzo del periodo contiene 6 m³, recibe 7 m³ y suministra 3 m³ para atender la demanda. Si no se presentan otras pérdidas, ¿cuál es el volumen almacenado al final del periodo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tanque queda vacío después de atender la demanda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El sistema almacena indefinidamente todo el volumen disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El tanque queda con 10 m³ almacenados y alcanza su capacidad máxima.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La capacidad máxima deja de ser relevante porque existe precipitación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Si se desea conocer qué tan rápido se recupera un sistema después de una falla, ¿qué métrica debe analizarse principalmente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fiabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resiliencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Vulnerabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Dos sistemas tienen la misma precipitación, área de captación y capacidad, pero uno atiende una sola demanda y el otro varias. ¿Por qué pueden presentar rendimientos diferentes?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque la precipitación cambia automáticamente cuando aumentan los usos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque la configuración de uso determina cómo se distribuye el agua almacenada entre las demandas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque la capacidad del tanque desaparece cuando existen varias demandas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque el rendimiento depende únicamente del material del tanque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál opción representa correctamente los tres componentes del modelo SRY?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Superficie, rendimiento y yacimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenamiento, rendimiento y fiabilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Suministro, reúso y yacimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sequía, rendimiento y yacimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué conjunto reúne condiciones necesarias para calcular adecuadamente el IPE?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Serie histórica extensa, revisión de continuidad y consistencia, escala temporal definida y ajuste a una distribución de probabilidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Datos exclusivamente de temperatura y un promedio anual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Únicamente una serie corta de precipitación y el valor máximo registrado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo información de humedad relativa y temperatura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál conjunto reúne componentes que pueden formar parte de un sistema de aprovechamiento de aguas lluvias?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Área de captación, canaletas, conducción y almacenamiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente un tanque, sin conexión con la captación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo precipitación y demanda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente tratamiento y distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuáles son las tres dimensiones de desempeño propuestas por Hashimoto et al. (1982)?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fiabilidad, resiliencia y vulnerabilidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Precipitación, capacidad y volumen.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Captación, conducción y almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rendimiento, rebose y pérdidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál afirmación diferencia correctamente el almacenamiento superficial del almacenamiento enterrado?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El almacenamiento superficial se ubica bajo el terreno y el enterrado sobre el terreno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El almacenamiento superficial se ubica sobre el terreno y facilita el acceso; el enterrado se ubica bajo el terreno y puede aprovechar mejor el espacio superficial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Ambos tipos se diferencian únicamente por el material del tanque.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El almacenamiento enterrado no requiere mantenimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál opción reúne configuraciones de uso contempladas en el componente?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Única, múltiple, prioritaria, estacional y compartida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Superficial, enterrada, metálica y plástica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Potable, industrial, subterránea y atmosférica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Histórica, proyectada, diaria y anual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál afirmación describe correctamente el uso de distintas escalas temporales del IPE?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Todas las escalas representan exactamente el mismo periodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las escalas cortas reflejan condiciones recientes y las escalas mayores permiten analizar acumulación y persistencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El IPE solo puede calcularse a doce meses.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las escalas temporales no influyen en la interpretación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál afirmación sobre la capacidad de almacenamiento es correcta?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una mayor capacidad siempre garantiza un mejor desempeño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La capacidad debe analizarse junto con la precipitación, la demanda y el nivel de servicio esperado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un tanque sobredimensionado siempre aprovecha toda el agua captada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La capacidad no influye en el rebose ni en los déficits.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál opción diferencia correctamente fiabilidad, resiliencia y vulnerabilidad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fiabilidad: recuperación; resiliencia: severidad; vulnerabilidad: capacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fiabilidad: cumplimiento; resiliencia: recuperación; vulnerabilidad: severidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Las tres métricas representan exactamente la misma dimensión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las tres métricas miden únicamente el tamaño del tanque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la diferencia entre volumen de diseño y volumen almacenado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son exactamente el mismo concepto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El volumen de diseño es la capacidad máxima prevista y el volumen almacenado es el agua presente en un momento determinado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El volumen almacenado siempre es mayor que el volumen de diseño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El volumen de diseño corresponde únicamente al agua suministrada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Si un sistema se evalúa durante 100 periodos y presenta 15 periodos de falla, ¿cuál es su fiabilidad?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '15 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '85 %.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '100 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '115 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Cuál relación entre las escalas del IPE es correcta?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'IPE-1: 12 meses; IPE-3: 6 meses; IPE-6: 3 meses; IPE-12: 1 mes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'IPE-1: 1 mes; IPE-3: 3 meses; IPE-6: 6 meses; IPE-12: 12 meses.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'IPE-1: 1 año; IPE-3: 3 años; IPE-6: 6 años; IPE-12: 12 años.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Todas las escalas representan un mes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Un sistema falla pocas veces, pero cuando falla presenta déficits de gran magnitud. ¿Cuál interpretación es correcta?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presenta alta fiabilidad y alta vulnerabilidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Presenta baja fiabilidad y baja vulnerabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presenta alta resiliencia y baja vulnerabilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presenta baja fiabilidad y alta resiliencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Si se prevé que la demanda aumente con el tiempo y se desea ampliar progresivamente la capacidad de almacenamiento mediante unidades adicionales, ¿qué configuración resulta más adecuada?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenamiento superficial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenamiento enterrado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistema individual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema modular.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Si se desea mantener la misma fiabilidad y aumentar el rendimiento esperado del sistema, ¿qué ocurre generalmente con la capacidad de almacenamiento requerida?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Disminuye, porque un mayor rendimiento requiere menos almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permanece igual, porque el rendimiento no influye en la capacidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aumenta, porque se requiere mayor capacidad para alcanzar la misma fiabilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Desaparece la necesidad de almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál secuencia resume mejor la construcción de una curva SRY?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir el color del tanque, elegir un material y graficar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Preparar la precipitación, definir demanda y capacidades, ejecutar el balance, identificar fallas, calcular fiabilidad y graficar (S, R).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Calcular primero la curva y luego definir la precipitación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Definir una sola capacidad y omitir el balance de almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
