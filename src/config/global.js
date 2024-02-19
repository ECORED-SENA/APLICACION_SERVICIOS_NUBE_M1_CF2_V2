export default {
  global: {
    componenteFormativo: 'La fase de elicitación de requisitos',
    descripcionCurso:
      'La recolección de datos se refiere al uso de una gran diversidad de técnicas y herramientas que pueden ser utilizadas por el analista para desarrollar los sistemas de información, que pueden ser la entrevista, la encuesta, el cuestionario, la observación, las sesiones en grupo, la visita a instalaciones, entre otros. Cada técnica de recolección de información posee diferentes instrumentos o herramientas para ser llevadas a cabo con profesionalismo y confiabilidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
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
        titulo: 'Elicitación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Planeación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas e instrumentos para elicitar requisitos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Herramientas para captura de requisitos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Herramientas de modelado',
            hash: 't_1_4',
          },
        ],
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Entradas, herramientas y salidas.',
      referencia:
        'Todopmp. (2019). <em>PMBOK 6 - 49. Procesos y entradas en forma de tarjetas</em>. https://todopmp.com/cards',
      tipo: 'Página web',
      link: 'https://todopmp.com/cards/',
    },
    {
      tema: 'Matriz stakeholders',
      referencia:
        'EDAP - Project Business School (2016). <em>Identificar interesados</em>. [Video]. YouTube. https://www.youtube.com/watch?v=aUkTxgaajBo',
      tipo: 'Video 1',
      link: 'https://www.youtube.com/watch?v=aUkTxgaajBo',
    },
    {
      tema: 'Matriz stakeholders',
      referencia:
        'Virtual Training Lteam (2016). <em>Partes interesadas Stakeholders</em>. [Video]. YouTube. https://www.youtube.com/watch?v=9AtaIAZEu0c',
      tipo: 'Video 2',
      link: 'https://www.youtube.com/watch?v=9AtaIAZEu0c',
    },
    {
      tema: 'Matriz stakeholders',
      referencia:
        'Calle, M. (2016). <em>Análisis de interesados matriz poder interés</em>. [Video]. YouTube. https://www.youtube.com/watch?v=hDZ0uu0H1wc',
      tipo: 'Video 3',
      link: 'https://www.youtube.com/watch?v=hDZ0uu0H1wc',
    },
    {
      tema: 'Ejemplos de entrevistas',
      referencia:
        'Jibaro X. (s.f.). <em>Tipos de preguntas en una encuesta</em>. [Video]. YouTube. https://www.youtube.com/watch?v=mwnQuUi9014',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mwnQuUi9014',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo de vida <em>software</em>',
      significado:
        'se refiere a la aplicación de metodologías para el desarrollo del sistema <em>software</em> (AECC, 1986).',
    },
    {
      termino: 'Método',
      significado:
        'indica cómo construir técnicamente el <em>software</em>. Se incluyen técnicas de modelado y otras técnicas descriptivas.',
    },
    {
      termino: 'Metodología',
      significado: 'colección de métodos para resolver un tipo de problemas.',
    },
    {
      termino: 'Ágil',
      significado:
        'comprende un conjunto de tareas o acciones que se utilizan para producir y mantener productos, así como para lograr los objetivos del proceso. La actividad incluye los procedimientos, estándares, políticas y objetivos para crear y modificar un conjunto de productos de trabajo.',
    },
    {
      termino: 'Requerimiento',
      significado:
        'el requerimiento se refiere a la petición que se hace de algo que se solicita.',
    },
    {
      termino: 'Requisito',
      significado:
        'es la condición que debe cumplir algo, en general el requisito cumple con lo que se requiere con el requerimiento.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'individuo u organización que comparte, reclama o le interesa un sistema o le compete una característica que satisface sus necesidades y expectativas (ISO 29148).',
    },
  ],
  referencias: [
    {
      referencia:
        'Baar, B. (2006). <em>Using Stakeholder Analysis in Software Project Management</em>. Universidad de Amsterdam.',
    },
    {
      referencia:
        'Braude, J. (2003). <em>Ingeniería de software, una perspectiva orientada a objetos</em>. Alfaomega.',
    },
    {
      referencia:
        'Cohen, L. (2011). <em>Métodos de investigación educativa</em>. La Muralla.',
    },
    {
      referencia:
        'Cohn, M. (2004). <em>User Stories Applied for Agile Software Development</em>. Pearson Education, Inc.',
    },
    {
      referencia:
        'Cox, K., Niazi, M., y Verner, J. (2009). Empirical study of Sommerville and Sawyer’s requirements engineering practices. <em>IET Software</em>, 3(5), 339.',
      link: 'https://doi.org/10.1049/iet-sen.2008.0076',
    },
    {
      referencia:
        'Curso de interacción persona-ordenador. (2021). <em>Storyboarding</em>',
      link: 'https://mpiua.invid.udl.cat/storyboarding',
    },
    {
      referencia:
        'Denscombe, M. (2010). <em>The Good Research Guide</em>. McGraw-Hill Education.',
    },
    {
      referencia:
        'Dornyei, Z. (2010). <em>Questionnaires in Second Language Research: Construction, Administration, and Processing</em>. Routledge.',
    },
    {
      referencia:
        'Durán, A., Bernárdez, B., Ruiz, A. y Toro, M. (1999). <em>A Requirements Elicitatio Approach Based in Templates and Patterns</em>.',
      link:
        'https://www.researchgate.net/publication/2890318_A_Requirements_Elicitation_Approach_Based_in_Templates_and_Patterns',
    },
    {
      referencia:
        'Gause, C., & Weinberg, G. M. (1989). <em>Exploring Requirements: Quality Before Design</em>. Dorset House.',
    },
    {
      referencia:
        'Granollers, T., Lorés, J., y Perdrix F. (2002). <em>Prototipado</em>. Capítulo 5: modelo de proceso de la ingeniería de la usabilidad y de la accesibilidad.',
    },
    {
      referencia:
        'Gutiérrez, J. (s.f.). <em>Diagramas UML de casos de uso y de requisitos</em>.',
      link:
        'http://www.lsi.us.es/~javierj/cursos_ficheros/metricaUML/CasosUsoUML.pdf',
    },
    {
      referencia:
        'Hernández, S., Fernández C., y Baptista L. (2006). <em>Metodología de la investigación</em>. McGraw Hill.',
    },
    {
      referencia:
        'Herrera J., Lizka J. (2003). <em>Ingeniería de requerimientos, ingeniería de software</em>.',
      link: 'http://www.monografias.com/trabajos6/resof/resof.shtml',
    },
    {
      referencia:
        'La oficina de proyectos de informática (2012). <em>PMOinformatica.com</em>.',
      link:
        'http://www.pmoinformatica.com/2012/10/plantillas-scrum-historias-de-usuario.html',
    },
    {
      referencia:
        'Piattini M., Calvo-Manzano J., Cervera J., y Fernández, L. (2004). <em>Análisis y diseño de aplicaciones informáticas de gestión. Una perspectiva de ingeniería de software</em>. Alfaomega-Rama.',
    },
    {
      referencia:
        'Sommerville, I. (2011). <em>Ingeniería de software</em>. Pearson Educación.',
    },
    {
      referencia:
        'Ventura, M. T. (2002). <em>La ingeniería de requerimientos como factor clave para el éxito de los proyectos de desarrollo de software</em>.',
      link: 'http://132.248.9.195/ppt2002/0307178/Index.html',
    },
    {
      referencia:
        'Wessinger, K., (2012) Project Stakeholder Management. <em>Engineering Management Journal</em>, 14(84), 19-24.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Henry Eduardo Bastidas Paruma',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'Peter Emerson Pinchao Solis',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta temática',
          centro:
            'Regional Cauca - Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'Oscar Absalón Guevara',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Bogotá - Centro de gestión industrial',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Bogotá - Centro de gestión industrial',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Evaluador instruccional',
          centro:
            'Regional Distrito Capital - Centro para la industria y la comunicación gráfica',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Evaluadora instruccional',
          centro:
            'Regional Distrito Capital - Centro para la industria y la comunicación gráfica',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisión metodológica y pedagógica',
          centro:
            'Regional Distrito Capital - Centro para la industria y la comunicación gráfica',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Regional Tolima - Centro de comercio y servicios',
        },
        {
          nombre: 'Camilo Andrés Villamizar Lizcano',
          cargo: 'Diseño web y Producción Audiovisual',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseño web y Producción Audiovisual',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseño web y Producción Audiovisual',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Diseño web y Producción Audiovisual',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Wilson Andres Arenales Cáceres',
          cargo: 'Diseño web y Producción Audiovisual',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseño web y Producción Audiovisual',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrollo Front-End',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Desarrollo Front-End',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Revisor de contenido',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollo Front-End',
          centro: 'Regional Tolima - Centro de comercio y servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación de recursos',
          centro: 'Regional Tolima - Centro de comercio y servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
