export default {
  global: {
    Name: 'Planteamiento de alternativas para el reúso de aguas lluvias',
    Description:
      'Este componente desarrolla el análisis del Índice de Precipitación Estandarizado (IPE), los sistemas de aprovechamiento de aguas lluvias y las relaciones entre almacenamiento, rendimiento y fiabilidad. Integra capacidad, volumen, configuraciones de uso, métricas de desempeño y curvas SRY para interpretar el comportamiento del sistema y sustentar alternativas de reúso bajo diferentes condiciones de precipitación y demanda.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Índice de Precipitación Estandarizado (IPE)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fundamentos, escalas e interpretación del IPE',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tema 2',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tema 3',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Almacenamiento',
      significado:
        'Proceso mediante el cual el agua captada se conserva temporalmente en un depósito para su uso posterior. Permite regular las diferencias temporales entre la oferta de precipitación y la demanda.',
    },
    {
      termino: 'Aprovechamiento de aguas lluvias',
      significado:
        'conjunto de acciones y elementos destinados a captar, conducir, almacenar y, cuando corresponda, tratar y utilizar el agua proveniente de la precipitación para determinados usos.',
    },
    {
      termino: 'Área de captación',
      significado:
        'superficie sobre la cual incide la precipitación y desde la cual el agua puede recolectarse y conducirse hacia un sistema de aprovechamiento. Su magnitud influye en el volumen de entrada al sistema.',
    },
    {
      termino: 'Balance de almacenamiento',
      significado:
        'representación del comportamiento temporal del agua almacenada mediante la relación entre almacenamiento inicial, entradas, suministro, pérdidas y reboses. Permite determinar el volumen disponible al final de cada periodo.',
    },
    {
      termino: 'Capacidad de almacenamiento',
      significado:
        'volumen máximo de agua que puede contener un sistema de almacenamiento. Constituye una variable de diseño que debe analizarse junto con la precipitación y la demanda.',
    },
    {
      termino: 'Curva SRY',
      significado:
        'representación gráfica de la relación entre almacenamiento, rendimiento y fiabilidad, utilizada para analizar el desempeño del sistema ante diferentes capacidades de almacenamiento y niveles de suministro.',
    },
    {
      termino: 'Demanda de agua',
      significado:
        'cantidad de agua requerida por un usuario, una actividad o un conjunto de usuarios durante un periodo determinado. Su magnitud y distribución temporal influyen en el desempeño del sistema.',
    },
    {
      termino: 'Fiabilidad',
      significado:
        'medida de desempeño que expresa la capacidad del sistema para cumplir la condición de servicio establecida durante el periodo de análisis.',
    },
    {
      termino: 'Índice de Precipitación Estandarizado (IPE)',
      significado:
        'indicador que permite determinar qué tan anómala es la precipitación acumulada respecto a su comportamiento histórico. Los valores negativos representan condiciones secas y los positivos condiciones húmedas.',
    },
    {
      termino: 'Modelo SRY',
      significado:
        'modelo de análisis que relaciona <em>storage</em> (almacenamiento), <em>reliability</em> (fiabilidad) y <em>yield</em> (rendimiento) para evaluar el comportamiento de los sistemas de aprovechamiento de aguas lluvias.',
    },
    {
      termino: 'Precipitación',
      significado:
        'agua proveniente de la atmósfera que alcanza la superficie terrestre. Constituye la principal variable de entrada para el análisis del IPE y de los sistemas de aprovechamiento de aguas lluvias.',
    },
    {
      termino: 'Rendimiento',
      significado:
        'cantidad o nivel de suministro que el sistema pretende proporcionar para satisfacer una demanda durante un periodo determinado. Es una de las variables fundamentales del modelo SRY.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'capacidad de un sistema para recuperarse después de experimentar una condición de falla y retornar a una condición satisfactoria de funcionamiento.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'medida de la severidad de las consecuencias derivadas de las fallas de un sistema. Permite valorar la magnitud o impacto de los déficits cuando estos ocurren.',
    },
    {
      termino: 'Volumen almacenado',
      significado:
        'cantidad de agua presente en el sistema de almacenamiento en un momento determinado. Es una variable dinámica que depende de las entradas, el suministro, las pérdidas y los reboses.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chapa, F., Krauss, M., & Hack, J. (2020). A multi-parameter method to quantify the potential of roof rainwater harvesting at regional levels in areas with limited rainfall data. Resources, Conservation and Recycling, 161, 104959.',
      link: '',
    },
    {
      referencia:
        'Copernicus European Drought Observatory. (2025). Standardized precipitation index (SPI): EDO and GDO indicator factsheet. European Union, Joint Research Centre.',
      link: '',
    },
    {
      referencia:
        'García-Ávila, F., Guanoquiza-Suárez, M., Guzmán-Galarza, J., Cabello-Torres, R., & Valdiviezo-Gonzales, L. (2023). Rainwater harvesting and storage systems for domestic supply: An overview of research for water scarcity management in rural areas. Results in Engineering, 18, 101153.',
      link: '',
    },
    {
      referencia:
        'Hanson, L. S., Vogel, R. M., Kirshen, P., & Shanahan, P. (2009). Generalized storage-reliability-yield equations for rainwater harvesting systems. In World Environmental and Water Resources Congress 2009: Great Rivers (pp. 1–10). American Society of Civil Engineers.',
      link: '',
    },
    {
      referencia:
        'Hashimoto, T., Stedinger, J. R., & Loucks, D. P. (1982). Reliability, resiliency, and vulnerability criteria for water resource system performance evaluation. Water Resources Research, 18(1), 14–20.',
      link: '',
    },
    {
      referencia:
        'Khan, A., Park, Y., Park, J., & Kim, R. (2022). Assessment of rainwater harvesting facilities tank size based on a daily water balance model: The case of Korea. Sustainability, 14(23), 15556.',
      link: '',
    },
    {
      referencia:
        'McKee, T. B., Doesken, N. J., & Kleist, J. (1993). The relationship of drought frequency and duration to time scales. In Proceedings of the Eighth Conference on Applied Climatology (pp. 179–184). American Meteorological Society.',
      link: '',
    },
    {
      referencia:
        'Seo, Y., Choi, N.-J., & Park, D. (2012). Effect of connecting rain barrels on the storage size reduction. Hydrological Processes, 26(23), 3538–3551.',
      link: '',
    },
    {
      referencia:
        'World Meteorological Organization. (2012). Standardized precipitation index user guide (WMO-No. 1090).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Guillermo Vega Ortega',
          cargo: 'Experto temática',
          centro:
            'Centro para el Desarrollo Agroecológico – Regional Atlántico',
        },
        {
          nombre: 'Margarita Inés Viloria Villegas',
          cargo: 'Experta temática',
          centro: 'Centro Biotecnológico del Caribe – Regional Cesar',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
