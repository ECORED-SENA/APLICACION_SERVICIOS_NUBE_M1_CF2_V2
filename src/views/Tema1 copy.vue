<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Elicitación de requisitos
    p.mb-4 El propósito de la elicitación de requerimientos es ganar conocimientos relevantes del problema, que se utilizarán para producir una especificación formal del software necesario para resolverlo.
    .row.mb-5.align-items-center
      .col-lg-7
        .bloque-texto-b.p-4
          .bloque-texto-b__texto.h2.mb-0 Un problema puede ser definido como la diferencia entre las cosas como se perciben y las cosas como se desean
          br
          p(style="position: relative;") -(Gause y Weinberg 1989)
      .col-lg-5.mt-4.mt-lg-0
        p Aquí se ve la importancia que tiene una buena comunicación entre desarrolladores y clientes; de esta comunicación con el cliente depende que sus necesidades queden claras. Además, al final de la fase de análisis de requerimientos, el analista podría llegar a tener un conocimiento extenso en el dominio del problema.
    p.mb-4 La elicitación de requisitos es la actividad que se considera como el primer paso en un proceso de ingeniería de requisitos; su significado hace referencia a la puesta en marcha de técnicas que sirven para recopilar conocimiento o información y los objetivos de esta fase de elicitación, son:
    .list.align-items-star
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Conocer el dominio del problema para poder comunicarse con clientes y usuarios y entender sus necesidades.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Conocer el sistema actual (manual o informatizado) y sus aspectos positivos y negativos.
    .list.align-items-star.mt-2.mb-5
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Identificar las necesidades, tanto explícitas como implícitas, de clientes y usuarios y sus expectativas sobre el sistema a desarrollar.
    #t_1_1
    .titulo-segundo.pt-5
      .h4 1.1. Planeación
    p.mb-5 La planeación busca definir las tareas a realizar para elegir y planificar las técnicas a emplear durante la actividad de elicitación de la fase de ingeniería de requisitos del desarrollo de software. En la siguiente tabla se presenta una relación de estas tareas y sus correspondientes procesos.
    .tabla-a
      table
        caption Tabla 1/ Tareas para elicitación de requisitos.
        thead
          tr
            th.table1 Tareas
            th.table1 Proceso
        tbody
          tr
            td #[b A.] Identificar las fuentes.
            td Lista de fuentes de requerimientos.
          tr
            td #[b B.] Identificar interesados del producto.
            td Categorías de los interesados (stakeholder).
          tr
            td #[b C.] Matriz stakeholders (Describir necesidades y criterios de éxito).
            td Perfil de stakeholder.
          tr
            td #[b D.] Revisar técnicas.
            td Identificar combinaciones de técnicas entrevistas, grupos focales, encuestas, prototipos.
          tr
            td #[b E.] Captura de interesados.
            td Plan de captura de interesados.
    p.mb-5.mt-3  #[b Nota:] tomado de Durán y Bernárdez (2001)
    p.mb-5 A continuación, se describen los procesos relacionados con las tareas para elicitación de requisitos:
    .row.align-items-start.mb-4
      .col-lg-6
        h5 #[span.txt-color A.] Identificar las fuentes de requerimientos.
        p Existe un conjunto de fuentes de requisitos en cada proyecto de desarrollo de software, así, usuarios y expertos abastecen de información detallada acerca del problema y necesidades del usuario. Los procesos y sistemas existentes representan, también, fuentes de requisitos; además, la documentación existente como manuales, formularios y reportes, incluso especificaciones de requisitos anteriores, puede proveer información útil acerca de la organización y su entorno.
      .col-lg-6.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/img2.png', style="max-width: 80%; margin: auto;")
    p.mb-4 En el proceso de esta actividad se identifican:
    .list.align-items-star
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Interesados relevantes.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Documentación que se puede usar como fuente de información de los requerimientos.
    .list.align-items-star.mt-2.mb-4
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Fuentes de información externas.
    p.mb-4 Las fuentes de requerimientos incluyen los propietarios del problema, los stakeholders, documentos y otros sistemas (Pearson, 2002). En ese sentido, los requerimientos pueden obtenerse en diversas fuentes que pueden clasificarse en gente (people), productos o documentos, pero cualquiera sea la fuente de esos requerimientos deben ser chequeados con los stakeholders.
    p.mb-4 Estas fuentes de requerimientos, se pueden clasificar en:
    .hr1
    .row.align-items-center
      .col-2
        figure
          img(src='@/assets/curso/img1.svg', style="max-width: 50%; margin: auto;")
      .col-10
        h4 Fuentes primarias
        p Aportan material de primera mano (es protagonista o testigo de los hechos), estas fuentes contienen información original, que ha sido publicada por primera vez y que no ha sido filtrada, interpretada o evaluada por nadie más.
    .hr2
    .row.align-items-center
      .col-2
        figure
          img(src='@/assets/curso/img2.svg', style="max-width: 50%; margin: auto;")
      .col-10
        h4 Fuentes secundarias
        p Toman y reproducen la información que le aportó una fuente primaria. Son las que contienen información primaria, sintetizada y reorganizada y están especialmente diseñadas para facilitar y maximizar el acceso a las fuentes primarias o a sus contenidos. Parten de datos preelaborados, como pueden ser datos obtenidos de anuarios estadísticos, internet, medios de comunicación, bases de datos procesadas con otros fines, artículos y documentos relacionados con un tema, libros, tesis, informes oficiales, etc.
    .hr2
    .row.align-items-center
      .col-2
        figure
          img(src='@/assets/curso/img3.svg', style="max-width: 50%; margin: auto;")
      .col-10
        h4 Fuentes terciarias
        p Son guías físicas o virtuales que contienen información sobre las fuentes secundarias. Forman parte de la colección de referencia de una biblioteca; facilitan el control y acceso a toda la gama de repertorios de referencia, como las guías de obras de referencia, o a un solo tipo, como las bibliografías.
    .hr3.mb-4
    p.mb-4 Por otra parte, las fuentes de información, pueden ser orales, escritas o de otro tipo, dependiendo de cómo se transmitan los datos. A continuación, se pueden revisar algunos ejemplos de fuentes de información.
    figure.mb-5
      img(src='@/assets/curso/img3.png', style="max-width: 100%; margin: auto;")
    .row.align-items-start.mb-4.pt-5
      .col-lg-6
        h5 #[span.txt-color B.] Identificar interesados del producto.
        p.mb-4 Uno de los primeros pasos en el proceso es el análisis e identificación de todas las personas relevantes que tienen un grado de interés en el proyecto. #[b Los interesados (stakeholders), son los individuos y organizaciones que están relacionados activamente en un proyecto de software]; tienen influencia directa o indirecta sobre los requisitos, o sus intereses se ven afectados por el proyecto (Baar, 2006, Ventura, 2002).
        p En resumen, son grupos o individuos que están interesados en el producto de software que se está desarrollando y necesitarán estar informados acerca del progreso, conflictos, cambios y prioridades del proceso de desarrollo del producto.
      .col-lg-6.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/img4.png', style="max-width: 80%; margin: auto;")
    p.mb-4 Los stakeholders se dividen en dos grupos:
    .hr1
    .row.align-items-center
      .col-2
        figure
          img(src='@/assets/curso/img4.svg', style="max-width: 50%; margin: auto;")
      .col-10
        h4 Primarios
        p Son aquellas personas indispensables para el correcto funcionamiento de la organización, y tienen una relación económica directa con la empresa. Estos pueden ser sus socios, clientes y accionistas
    .hr2
    .row.align-items-center
      .col-2
        figure
          img(src='@/assets/curso/img5.svg', style="max-width: 50%; margin: auto;")
      .col-10
        h4 Secundarios
        p Son los entes que no participan directamente de la compañía, pero también son afectados por sus resultados. En este círculo se encuentran los competidores, el mercado y las personas en general.
    .hr2.mb-5
    p.mb-4 A continuación, se listan roles más generales de las personas involucradas con sus términos similares, aunque cabe resaltar que existen leves diferencias entre ellos (Sommerville y Sawyer, 2005)
    .list.align-items-star
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Líder de proyecto / Administrador de proyecto / Gerente de proyecto.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Analista / Ingeniero de requisitos.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Ingeniero de sistemas / Arquitecto.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Programador / Desarrollador / Ingeniero de software.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Probador / Asegurador de la calidad.
    .list.align-items-star.mt-2.mb-4
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Administrador de bases de datos.
    p.mb-5 En la siguiente tabla se presentan los principales roles involucrados en el proceso de ingeniería de requisitos, así como las actividades en las que tienen mayor participación.
    .tabla-a
      table
        caption Tabla 2/ Roles involucrados en la ingeniería de requisitos.
        thead
          tr
            th.table1(style="width: 260px") ROL
            th.table1 Descripción
        tbody
          tr
            td #[b Cliente]
            td Representa a la persona u organización que solicita la creación de un sistema a un área de desarrollo y quien lo paga. Es con quien se negocia el tiempo, costo y alcance del proyecto. Pueden o no ser usuarios del sistema.
          tr
            td #[b Usuario]
            td Son las personas que interactuarán con el sistema. Proporcionan información fundamental para el éxito del proyecto, ya que conocen y conviven con los procesos diarios.
          tr
            td #[b Líder de proyecto]
            td Por parte del equipo de desarrollo, es el representante ante el cliente. Es la persona responsable de completar el proyecto exitosamente con los recursos dados.
          tr
            td #[b Analista]
            td Su labor se enfoca en la ingeniería de requisitos, los identifica, analiza, modela y documenta. Además, establece contacto directo con los usuarios y utiliza diversas técnicas de comunicación y de recopilación de información para lograr su objetivo.
          tr
            td #[b Programador]
            td Con base en los requisitos recibidos de parte de los ingenieros de requisitos, el programador realiza la codificación para producir el sistema deseado.
          tr
            td #[b Asegurador de la calidad]
            td Garantiza el cumplimiento del proceso y de los estándares del producto. Enfocado en los requisitos, los verifica y valida para imprimir la calidad desde las primeras etapas del desarrollo. Paralelamente, prepara planes de prueba para esos requisitos del sistema.
          tr
            td #[b Arquitecto]
            td Es el responsable del diseño de alto nivel y es clave a la hora de precisar los atributos de calidad del producto.
    p.mb-5.mt-3  #[b Nota:] tomado de Ventura (2002)
    p.mb-4 Algunas de las técnicas que se pueden emplear para llevar a cabo la labor de análisis de los stakeholders incluyen entrevistas con los expertos, lluvia de ideas en grupo y lista de chequeo. Se espera que este grupo de personas identifiquen y caractericen a los stakeholders objetivamente, por tal motivo es recomendable involucrar a personas de diferentes contextos (Karisen, 2002 citado en Wessinger, 2012).
    .row.align-items-start.mb-5.pt-5
      .col-lg-6
        h5 #[span.txt-color C.] Matriz de stakeholders.
        p.mb-4 La utilización de esta #[b herramienta de análisis permite clasificar a los involucrados en el proyecto según sus niveles de interés y poder sobre él], lo que facilita la priorización de los stakeholders más importantes para desarrollar las estrategias de gestión correspondientes.
      .col-lg-6.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/img5.png', style="max-width: 80%; margin: auto;")
    h5 Importancia de la matriz de stakeholders en los proyectos de desarrollo.
    p.mb-5 En los proyectos de desarrollo, la gestión de los stakeholders es de suma importancia para alcanzar el éxito de los proyectos, ya que el proceso de identificación de los involucrados y la definición de sus niveles de interés e influencia en el proyecto, marcarán el punto de partida para desarrollar estrategias que posibilitan obtener el apoyo requerido para alcanzar los objetivos por los que el proyecto es emprendido. Es por ello, que la matriz de stakeholders es una herramienta indispensable desde el comienzo del proyecto mismo, ya que proveerá de la información necesaria para gestionar, adecuadamente, las expectativas de los involucrados a lo largo del proyecto, maximizando las influencias positivas y mitigando los impactos negativos potenciales derivados de estos. Además, dado el carácter social de los proyectos de desarrollo, involucrar a la sociedad civil no debe ser solo un ejercicio de comunicación unidireccional sino una oportunidad para lograr su apoyo al proyecto.
    h5 Proceso de armado de la matriz de stakeholders.
    p.mb-5 Para desarrollar la matriz de stakeholders es necesario identificar las entradas necesarias que proveerán la información con la que el líder y el equipo de proyecto trabajarán para desarrollar la matriz misma. Tales entradas pueden ser el acta de constitución de proyecto, documentos de adquisición, activos de los procesos y factores ambientales de la organización.
    figure.mb-5
      img(src='@/assets/curso/img6.png', style="max-width: 100%; margin: auto;")
      figcaption Figura 2 / Entradas, herramientas y técnicas, salidas.
    .row.mb-4
      .col-lg-6
        a.anexo.mb-4(href="https://todopmp.com/cards/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Anexo.] Para profundizar en detalle, se invita a consultar la Guía PMBOK 6 - 49 procesos, entradas, herramientas y salidas, como material complementario.
    h5 Descripción de los componentes de la matriz de stakeholders.
    p.mb-4 A continuación, se presenta el concepto de cada uno de los componentes que estructuran la matriz de stakeholders.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Stakeholder")
        .col-12
          p Es el nombre con el que se identifica al stakeholder.
      div(titulo="Tipo")
        .row
          .col-12
            p Identifica si el stakeholder desempeña un rol interno o externo al proyecto mismo. Los stakeholders pueden ser internos, como el personal de las unidades ejecutoras, el personal administrativo o ejecutivo de la organización, el personal de las entidades financiadoras con alto nivel de poder e influencia en el proyecto y sus recursos; o externos como los beneficiarios del proyecto, las instituciones del sector o las organizaciones de la sociedad civil, quienes serán de un modo u otro impactados por los resultados del proyecto.
      div(titulo="Objetivo o resultados")
        .row
          .col-12
            p En este campo se enlistan los objetivos o resultados en los que el stakeholder muestra interés o en aquellos en los que puede influir positiva o negativamente con sus acciones. Esta información puede ser suministrada por el acta de constitución de proyectos, la estructura de la organización, la estructura de desglose de trabajo, los diferentes planes que conforman el proyecto, entrevistas a los mismos interesados, etc.
      div(titulo="Acciones posibles con impacto positivo / negativo")
        .row
          .col-12
            p Son las acciones que puede emprender el stakeholder y que pueden influir, negativa o positivamente, en los objetivos del proyecto en los que muestra su interés o en aquellos en los que puede influir debido a su jerarquía, estatus, recursos de los que dispone, entre otros.
      div(titulo="Estrategias")
        .row
          .col-12
            p Es un listado de acciones que se pueden emprender para obtener el apoyo necesario o evitar obstáculos por parte de los stakeholders durante la ejecución y conclusión del proyecto. Las estrategias se desarrollan considerando el tipo de stakeholder, los objetivos en los que está interesado, el nivel de interés y poder que puede ejercer en el proyecto (figura 1) y las acciones posibles que podría emprender para afectar tanto positiva como negativamente al proyecto.
      div(titulo="Conclusiones")
        .row
          .col-12
            p Es la síntesis sobre puntos clave a considerar para gestionar de manera efectiva las expectativas de los stakeholders. Las conclusiones se obtienen de relacionar, analizar y sintetizar toda la información vertida en la matriz de stakeholders.
    h5 Categorización de stakeholders y estrategias de gestión de las expectativas.
    p.mb-4 Como ya se había mencionado anteriormente, la matriz de stakholders es una herramienta muy útil que permite clasificar a los involucrados en el proyecto según sus niveles de interés e influencia, priorizando a los más importantes y desarrollando así las estrategias correspondientes para gestionar sus expectativas. De la misma manera, su clasificación puede cambiar durante la vida del proyecto. Así, aquellos que fueron inicialmente identificados con un alto nivel de influencia en el proyecto, pueden ser reclasificados a un nivel más bajo durante otras etapas de la vida del proyecto.
    p.mb-4 La categorización de los stakeholders se lleva a cabo una vez que la información sobre éstos esté completa. Para ello se puede utilizar una matriz de 2x2 en la que se pueda graficar el grado de poder e interés que tiene el involucrado en el proyecto, coadyuvando así a clasificar a cada stakeholder dentro del grupo para el cual se definen diferentes estrategias (figura 2).
    figure
      img(src='@/assets/curso/img7.png', style="max-width: 100%; margin: auto;")
      figcaption Figura 2 / Ejemplo de matriz interés vs. influencia.
    p.mt-3.mb-5 #[b Nota: ]tomado de Gardnet et al. (1986)
    #t_1_2
    .titulo-segundo.pt-5
      .h4 1.2   Técnicas e instrumentos para elicitar requisitos
    p.mb-4 Hay una variedad de técnicas propuestas para ingeniería de requerimientos (Herrera, 2003. p. 12), por lo que es primordial resaltar que estas técnicas pueden ser aplicables a las distintas fases del proceso de la ingeniería de requerimientos (IR), teniendo en cuenta las características propias del proyecto en particular que se esté desarrollándose para aprovechar al máximo su utilidad.
    p.mb-5 A continuación, se presentará una serie de técnicas destinadas a facilitar la elicitación correcta y efectiva de los requisitos dentro de un proceso de desarrollo.
    h5 1.2.1. Entrevista.
    .row.mb-5
      .col-lg-8
        .bloque-texto-b.p-4
          .bloque-texto-b__texto.h3.mb-0 La entrevista es una forma de recoger información de otra persona a través de una comunicación interpersonal que se lleva a cabo por medio de una conversación estructurada.
          br
          p(style="position: relative;") - (Braude, 2003)
    p.mb-5 En las entrevistas se pueden identificar tres fases: preparación, realización y análisis (Piattini et al. 1996), como se puede observar en el siguiente gráfico.
    TabsB
      .py-4.py-md-5(titulo="Preparación" :icono="require('@/assets/curso/img6.svg')")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 1. Preparación
            p.mb-4 El entrevistador debe documentarse e investigar la situación de la organización, analizando los documentos de la empresa disponible.
            .list.align-items-star
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Se debe intentar minimizar el número de entrevistados, considerando las entrevistas de cortesía.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Analizar el perfil de los entrevistados.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Definir el objetivo y el contenido de la entrevista.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Planificar el lugar y la hora en la que se va a desarrollar la entrevista (es conveniente realizarla en un lugar confortable).
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Algunos proponen enviar previamente el entrevistado un cuestionario y un pequeño documento de introducción al proyecto de desarrollo.
          .col-md-6
            figure
              img(src='@/assets/curso/img8.png', style="max-width: 80%; margin: auto;")
      .py-4.py-md-5(titulo="Realización" :icono="require('@/assets/curso/img7.svg')")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 2. Realización
            p.mb-4 Dentro de la realización de las entrevistas se distinguen tres etapas, tal como se expone en Piattini et al. (1996):
            .list.align-items-start.pl-4
              .list__item
                .list__item__bulletNumber
                  span a.
              .list__txt
                p.mb-0.mt-2 #[b Apertura:] presentarse e informar al entrevistado sobre la razón de la entrevista.
            .list.align-items-start.mt-2.pl-4.mb-4
              .list__item
                .list__item__bulletNumber
                  span b.
              .list__txt
                p.mb-0.mt-2 #[b Desarrollo:] cumplir las reglas del protocolo, hay que llegar a un acuerdo sobre cómo se va a registrar la información obtenida.
            p Durante esta fase se pueden emplear distintas técnicas:
          .col-md-6
            figure
              img(src='@/assets/curso/img9.png', style="max-width: 80%; margin: auto;")
        .row.p-4.bg-color1.mt-4
          .col-12
            .list.align-items-star
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 #[b Preguntas abiertas:] también denominadas de libre contexto (Gause y Weinberg, 1989), estas preguntas no pueden  responderse con un #[b "sí"] o un #[b "no"], permiten una mayor comunicación y evitan la sensación de interrogatorio. Por  ejemplo, #[b "¿Qué se hace para registrar un pedido?"], #[b "Dígame qué se debe hacer cuando un cliente pide una factura"] o #[b “¿Cómo se rellena un recibo?"].
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 #[b Utilizar palabras apropiadas:] se deben evitar tecnicismos que no conozca el entrevistado y palabras o frases que  puedan perturbar emocionalmente la comunicación (Goleman 1996, Goleman 1999).
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 #[b Mostrar interés en todo momento:] es fundamental cuidar la comunicación no verbal (Davis, 1985) durante la entrevista:  tono de voz, movimiento, expresión facial.
        .list.align-items-start.pl-4.mt-4
          .list__item
            .list__item__bulletNumber
              span c.
          .list__txt
            p.mb-0.mt-2 #[b Terminación:] se termina recapitulando la entrevista agradeciendo el esfuerzo y dejando abierta la posibilidad de volver a contactar para aclarar conceptos o bien citándole para otra entrevista.
      .py-4.py-md-5(titulo="Análisis" :icono="require('@/assets/curso/img8.svg')")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 3. Análisis
            p.mb-4 Consiste en leer las notas, pasarlas en limpio, reorganizar la información, contrastarlas con otras entrevistas o fuentes de información, evaluar cómo ha ido la entrevista.
            p En estas entrevistas, el equipo de la ingeniería de requerimientos hace preguntas sobre el sistema que utilizan y sobre el sistema a desarrollar. Los requerimientos provienen de las respuestas a estas preguntas.
          .col-md-6
            figure
              img(src='@/assets/curso/img10.png', style="max-width: 80%; margin: auto;")
    p.my-5.pt-5 Las entrevistas se pueden clasificar fundamentalmente, en:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Entrevista estructurada")
        .col-12
          p.mb-4 Las preguntas en esta entrevista se deciden, previamente, de acuerdo con el detalle de información requerida.
          .list.align-items-star.mt-2
            .list__item
              .list__item__icon
                img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
            .list__txt
              p.mt-2 Recoge de forma sistemática y precisa la mayor información sobre los aspectos que quiere explorar.
          .list.align-items-star.mt-2
            .list__item
              .list__item__icon
                img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
            .list__txt
              p.mt-2 Las preguntas son prefijadas y definidas, las respuestas son esperadas e incluso se le dan al entrevistado en forma de varias opciones.
          .list.align-items-star.mt-2
            .list__item
              .list__item__icon
                img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
            .list__txt
              p.mt-2 Las etapas son planificadas.
          .list.align-items-star.mt-2
            .list__item
              .list__item__icon
                img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
            .list__txt
              p.mt-2 La interpretación de las respuestas se realiza de acuerdo con unos criterios establecidos.
          .row.mt-5
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo1.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[b Anexo.] Entrevista estructurada.
      div(titulo="Entrevista semiestructurada")
        .row
          .col-12
            p.mb-4 Esta presenta un grado mayor de flexibilidad que la estructurada, debido a que parten de preguntas planeadas, que pueden ajustarse a los entrevistados. Su ventaja es la posibilidad de adaptarse a los sujetos con enormes posibilidades para motivar al interlocutor, aclarar términos, identificar ambigüedades y reducir formalismos.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Las preguntas, desarrollo e interpretación se planifican previamente, pero con un cierto grado de libertad de acción para abordar temas que pueden surgir durante la misma.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Se suele utilizar un protocolo para facilitar al entrevistador seguir un modelo preestablecido.

      div(titulo="Entrevista no estructurada")
        .row
          .col-12
            p.mb-4 Las entrevistas no estructuradas suelen describirse como conversaciones mantenidas con un propósito en mente.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 No se estructura ni planifica previamente.
            .list.align-items-star.mt-2.mb-4
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Es la más ágil y la que proporciona más información en general, pero requiere un cierto dominio por parte del entrevistador.
            p.mb-4 En el material complementario se pueden revisar ejemplo de entrevistas.
    h5 1.2.2. Encuesta.
    .row.mb-5
      .col-lg-7
        .bloque-texto-b.p-4
          .bloque-texto-b__texto.h3.mb-0 Los cuestionarios son herramientas ampliamente utilizadas para recoger datos de sondeos y pueden ser administradas sin la presencia del investigador
          br
          p(style="position: relative;") - (Cohen, 2011, p. 377).
      .col-lg-5.mt-4.mt-lg-0
        p Pueden variar en cuanto a propósito, diseño y apariencia, y consisten en listas de preguntas escritas. Los individuos participantes en la investigación suelen leer los mismos listados de preguntas, por lo que esto permite consistencia y precisión al analizar las respuestas, además de facilitar el proceso. Una de las ventajas más destacadas de los cuestionarios es que simplifican el proceso de la obtención de datos, preguntando directamente a los individuos participantes para obtener datos de forma rápida y directa y se pueden aplicar a un gran número de sujetos.
    p.mb-4 Los datos que se obtienen a través de los cuestionarios suelen estar clasificados en dos categorías: hechos y opiniones (Denscombe, 2010, p. 156). La información relacionada con los hechos no requiere el juicio o la actitud personal de los sujetos participantes, pero la información obtenida a través de las opiniones implica creencias, puntos de vista y preferencias de los sujetos participantes.
    .row
      .col-6.p-4.bg-color2
        figure
          img(src='@/assets/curso/img9.svg', style="max-width: 20%; margin: auto;")
        h5.text-center.my-4 Tipos de preguntas
        p La distinción más general entre los tipos de preguntas de los #[b cuestionarios, además de hechos y opiniones, es la de preguntas abiertas y cerradas]; las preguntas abiertas son aquellas en las que no se especifica ninguna respuesta para elegir y se deja abierta a la elección del participante para que escriba en ella. Las preguntas cerradas son las que ofrecen ya unas respuestas predeterminadas para su elección.
      .col-6.p-4.bg-color3
        figure
          img(src='@/assets/curso/img10.svg', style="max-width: 11%; margin: auto;")
        h5.text-center.my-4 Tipos de respuestas
        p Las respuestas de escala son las más comunes en los cuestionarios de investigación ya que implican al participante en una valoración o evaluación de las respuestas objetivo por medio de varias opciones en las que tienen que marcar dentro de una escala la importancia de cada una. Esa escala de valoración indica diferentes grados en una categoría y puede ser de diversa naturaleza; por ejemplo, puede valorar una categoría indicando si es #[b “bueno”] o #[b “malo”], #[b “frecuente”] o #[b “infrecuente”], #[b “importante”] o #[b “poco importante”] o también pueden valorar opiniones: #[b “completamente de acuerdo”] o #[b “en desacuerdo”]. El número de opciones más común es el de cinco, por ser un número impar, ya que existe una tendencia generalizada a seleccionar la opción intermedia (Dornyei, 2010).
    .row.my-5
      .col-lg-6
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=mwnQuUi9014" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Anexo.] Tipos de preguntas.
    h5 1.2.3. Observación.
    p.mb-4 Esta permite la obtención de datos para emprender una investigación de tipo cualitativo, no desde el punto de vista de lo que los sujetos dicen, sino que es la evidencia directa de lo que ve y percibe el investigador en un escenario de primera mano (Denscombe, 2010).
    p.mb-4 Por su parte, Selltiz (citado por Hernández, Fernández y Baptista, 2006, p. 229), al referirse a la observación, recomienda que para que esta se convierta en una técnica como tal, debe cumplir con cuatro condiciones:
    .list.align-items-start.pl-4
      .list__item
        .list__item__bulletNumber
          span 1.
      .list__txt
        p.mb-0.mt-2 Debe servir a un objeto formulado de investigación.
    .list.align-items-start.mt-2.pl-4
      .list__item
        .list__item__bulletNumber
          span 2.
      .list__txt
        p.mb-0.mt-2 Debe de ser planificada sistemáticamente.
    .list.align-items-start.mt-2.pl-4
      .list__item
        .list__item__bulletNumber
          span 3.
      .list__txt
        p.mb-0.mt-2 Debe estar controlada y relacionada con proposiciones generales.
    .list.align-items-start.mt-2.pl-4.mb-5
      .list__item
        .list__item__bulletNumber
          span 4.
      .list__txt
        p.mb-0.mt-2 Debe ser sujeta a comprobaciones y controles de validez y fiabilidad.
    p.mb-4 De acuerdo con lo anterior, se puede asumir que la observación:
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Tiene la característica de seguir normas, reglas y procedimientos.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Permite a los sujetos y objetos establecer relaciones de manera directa.
    figure.my-5
      img(src='@/assets/curso/img11.png', style="max-width: 100%; margin: auto;")
    p.mb-4 Para el caso de obtención de requerimientos del software la observación nos sirve para estudiar el entorno de trabajo de los usuarios, clientes e interesados de proyecto (stakeholders) y para documentar la situación actual de procesos de negocio.
    p En la siguiente figura, se pueden revisar los tipos de observación.
    figure.my-5
      img(src='@/assets/curso/img12.png', style="max-width: 100%; margin: auto;")
      figcaption Figura 3 / Tipos de observación.
    p.mb-4 Ahora bien, para llevar a cabo la observación, el observador puede utilizar como instrumento #[b la guía de observación], la cual le permite situarse de manera sistemática en aquello que realmente es objeto de estudio para la investigación; también es el medio que conduce la recolección y obtención de datos e información de un hecho o fenómeno.
    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h2.mb-0 Tamayo (2004) define a la guía de observación como:
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p Un formato en el cual se pueden recolectar los datos en sistemática y se pueden registrar en forma uniforme, su utilidad consiste en ofrecer una revisión clara y objetiva de los hechos, agrupa los datos según necesidades específicas, se hace respondiendo a la estructura de las variables o elementos del problema (p. 172).
    p.mb-4 Para elaborar la guía de observación se ha de diseñar el contenido de la observación; el cual debe incluir por lo menos los siguientes aspectos:
    .list.align-items-start.pl-4
      .list__item
        .list__item__bulletNumber
          span 1.
      .list__txt
        p.mb-0.mt-2 Datos y características de los sujetos a evaluar.
    .list.align-items-start.mt-2.pl-4
      .list__item
        .list__item__bulletNumber
          span 2.
      .list__txt
        p.mb-0.mt-2 Propósitos de la observación o de las observaciones a realizar.
    .list.align-items-start.mt-2.pl-4
      .list__item
        .list__item__bulletNumber
          span 3.
      .list__txt
        p.mb-0.mt-2 Temporalidad de la observación.
    .row.my-5
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo2.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Anexo.] Ficha de observación.
    h5 1.2.4. Sesiones grupales.
    .row.align-items-center.mb-5
      .col-lg-6
        p.mb-4 Es un proceso por el cual se llevan a cabo reuniones en grupo altamente estructuradas que convocan, en una misma sala, a los usuarios de un sistema, los propietarios del sistema y a los analistas durante un amplio periodo de tiempo. Los objetivos de esta técnica son esencialmente los mismos que los de las entrevistas, con la salvedad de necesitar más analistas para llevarlos a cabo. 
        p Dentro de las sesiones de trabajo en grupo se encuentran técnicas como la #[b lluvia de ideas, las sesiones JAD y el método Delphi].
      .col-lg-6.mt-4.mt-lg-4
        figure
          img(src='@/assets/curso/img13.png', style="max-width: 70%; margin: auto;")
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Lluvia de ideas").align-items-center
        .col-2
          figure
            img(src='@/assets/curso/img11.svg', style="max-width: 70%; margin: auto;")
        .col-10
          p También denominada tormenta de ideas o incluso brainstorming. Faickney (1939) investigó sobre diferentes maneras de generar creatividad. Se percató de que la mejor manera de ser creativo en una empresa es a través de la interacción y el trabajo en equipo; todos juntos podían dar sus opiniones y sugerencias sobre un tema determinado. Creó de esta manera la lluvia de ideas.
      div(titulo="Sesiones JAD (Joint Application Design)")
        .row.align-items-center
          .col-2
            figure
              img(src='@/assets/curso/img12.svg', style="max-width: 70%; margin: auto;")
          .col-10
            p.mb-4 Es un proceso usado para reunir requerimientos en el desarrollo de nuevos sistemas de información para una compañía. #[b El proceso JAD consiste en un taller donde los trabajadores del conocimiento y los especialistas en tecnologías de información se reúnen], algunas veces durante varios días, para definir y revisar los requerimientos de negocio para el sistema. Los asistentes incluyen oficiales de administración de alto nivel, quienes se aseguran de que el producto provea los reportes y la información requerida al final, esto actúa como #[b “un proceso de administración”] que permite que los departamentos de servicios de información corporativa trabajen más eficientemente con los usuarios en un marco de tiempo más reducido. 
            p A través de los talleres JAD, los trabajadores del conocimiento y los especialistas en tecnologías de información pueden resolver cualquier dificultad o diferencias entre las posturas referentes al nuevo sistema de información. #[b El taller sigue una detallada agenda para lograr garantizar que todas las incertidumbres entre los grupos sean cubiertas y para ayudar a prevenir cualquier falla en la comunicación], estas fallas de comunicación pueden provocar repercusiones mucho más serias si no se identifican a tiempo. Al final, este proceso resultará en un nuevo Sistema de Información viable y orientado tanto a diseñadores como a usuarios.
      div(titulo="Método Delphi")
        .row.align-items-center
          .col-2
            figure
              img(src='@/assets/curso/img13.svg', style="max-width: 70%; margin: auto;")
          .col-10
            .mb-4 Es un #[b método de estructuración de un proceso de comunicación grupal] que consiste en la selección de un grupo de expertos a los que se les pregunta su opinión frente a ciertas temáticas.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 #[b Fase uno.] Formulación del problema: se define el campo de investigación.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 #[b Fase dos.] Elección de expertos: el experto se elige según su preparación y su capacidad de proyección.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 #[b Fase tres.] Elaboración de cuestionarios: las preguntas deben hacerse de acuerdo con la temática que se quiere obtener.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 #[b Fase cuatro.] Desarrollo y explotación de resultados: el cuestionario se entrega a los expertos para ser contestado por ellos.
    #t_1_3
    .titulo-segundo.pt-5
      .h4 1.3. Herramientas para captura de requisitos
    p.mb-5 Existen varias herramientas para la captura de requisitos potenciales de un nuevo sistema o una actualización de software, a continuación, se explican las más utilizadas:
    h5 1.3.1. Diagrama de casos de uso.
    p.mb-4 Al momento de desarrollar un proyecto se debe pensar en cuáles serán las principales funcionalidades que el software debe permitir llevar a cabo y quiénes serán los que podrán ejecutar dichas funcionalidades. #[b La identificación de estos elementos se puede visualizar de manera efectiva a través de la elaboración de diagramas de casos de uso]; estos diagramas, que son elaborados durante las etapas iniciales de un proyecto, se convierten en referente para cada una de las etapas siguientes del desarrollo del proyecto.
    p.mb-5 Componentes. En los diagramas de casos de uso, se observan los siguientes componentes.
    h5 Actor
    p.mb-4 se representa mediante un “hombre de palo”. Este se emplea para indicar el tipo de usuario del sistema que podrá ejecutar alguna función.
    figure.my-5
      img(src='@/assets/curso/img14.png', style="max-width: 100%; margin: auto;")
    h5 Caso de uso
    p.mb-4 se representa mediante un óvalo e indica una función que el sistema debe proveer.
    figure.my-5
      img(src='@/assets/curso/img15.png', style="max-width: 25%; margin: auto;")
    p.mb-4 Para ejemplificar un proceso se puede emplear un verbo conjugado en infinitivo y que represente la función a realizar (administrar, gestionar, registrar, entre otros). A continuación, se presenta un ejemplo, en el cual se presenta un diagrama de casos de uso de la sistematización de un centro médico.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Administrar datos pacientes.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Administrar datos tratamientos.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Gestionar citas.
    .list.align-items-star.mt-2.mb-5
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Generar reportes.
    h5 Representación gráfica
    figure.my-5
      img(src='@/assets/curso/img16.png', style="max-width: 100%; margin: auto;")
      figcaption Figura 7 / Caso de uso centro médico.
    h5 Identificación de casos de uso
    p.mb-5 En el ejemplo anterior se observan los casos de uso identificados en el sistema, es decir, las funcionalidades que el sistema va a proveer (administrar datos pacientes, administrar datos tratamientos, gestionar citas, generar reportes).
    h5 Identificación de actores
    p.mb-5 Los actores son los usuarios que podrán ejecutar los casos de uso, en el ejemplo anterior, se identificaron dos actores (médico y empleado).
    h5 Documentación
    p.mb-5 La técnica de casos de uso requiere además de construir el diagrama de casos de uso, la descripción de estos. Esta descripción permite detallar el flujo de eventos que se da entre el Sistema y el Actor para llevar a cabo el caso de uso. A continuación, se presenta el formato diligenciado de acuerdo con el ejemplo del centro médico.
    .tarjeta.tarjeta.bg-color4.p-4.p-md-5.mb-5.shadow
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/img14.svg")
        .col-md.col-lg-6
          .h2 Documentación caso de uso
          p.mb-4 A continuación, se presenta el formato diligenciado de acuerdo con el ejemplo del centro médico.
          a.boton.boton--b(:href="obtenerLink('/downloads/Anexo4.pdf')" target="_blank" type="application/pdf")
            span(style="color: #000") Descargar
            i(style="color: #000").fas.fa-file-download
          p.mt-3.mb-4 #[b Nota: ]tomado de Gutierrez (s.f.)
    h5 1.3.2. Historias de usuario.
    p.mb-4 Las historias de usuario son utilizadas en los métodos agiles para la especificación de requisitos, son una descripción breve de una funcionalidad software tal y como la percibe el usuario (Cohn, 2004).
    p.mb-5 El formato para las historias de usuario Scrum se basan en una regla de tres palabras:
    .row.justify-content-center.mb-5
      .col-10.col-lg-8
        figure
          img(src='@/assets/curso/img17.png', style="max-width: 100%; margin: auto;")
          figcaption Figura 8 /Regla de tres palabras.
        p.mt-3.mb-4 #[b Nota: ]tomado de Martin (s.f.)
    p.mb-4 Así, el #[b &lt;rol&gt;] que se escoja que va a utilizar la aplicación software, requiere de una #[b &lt;Acción&gt;] / #[b &lt;evento&gt;] que ocurra, porque se desea cubrir una #[b &lt;funcionalidad&gt;]. Corto y conciso, directo y claro.
    p.mb-5 En las siguientes figuras se presentan ejemplos de historias de usuario.
    .row.justify-content-center.mb-5
      .col-10.col-lg-8
        figure
          img(src='@/assets/curso/img18.png', style="max-width: 100%; margin: auto;")
          figcaption Figura 9 /Ejemplos historias de usuario.
          p.mt-3.mb-4 #[b Nota: ]tomado de fatto www.fattocs.com <a href="http://i.ytimg.com/vi/Zi9E1aUO_1U/hqdefault.jpg" target="_blanck">http://i.ytimg.com/vi/Zi9E1aUO_1U/hqdefault.jpg</a>
    h5 Conversación para explicar mejor la historia de usuario
    p.mb-4 Como se mencionó anteriormente, las historias de usuario son una frase sencilla y concisa, sin embargo, eso no impide que se pueda abrir un diálogo (conversación) entre todos los miembros del equipo. De hecho, esta conversación se debe llevar a cabo para explicar mejor la propia historia de usuario y conseguir objetivos como:
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Detallar a mayor nivel como se realizará la solución.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Clarificar aspectos de valor, funcionamiento y técnicos.
    .list.align-items-star.mt-2.mb-4
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-2 Resolver las dudas que aparezcan.
    p.mb-5 Estas conversaciones llevarán a alcanzar acuerdos sobre los distintos puntos tratados, que quedarán reflejados en los criterios de aceptación y que permitirán validar cuando una historia de usuario está terminada.
    h5 Confirmación de los criterios de aceptación
    p.mb-4 Los criterios de aceptación, es decir, la confirmación. Se trata de criterios claros y específicos que todo el equipo debe comprender y que permitirán avaluar en el futuro si la implementación que se está desarrollando o las pruebas que se realicen están terminadas.
    p.mb-5 A continuación, un ejemplo de una historia de usuario usando plantilla.
    .tabla-a.mb-5 
      table
        caption Figura 10 / Ejemplos de historias de usuario.
        thead
          tr
            th.table1(colspan='5') Enunciado de la historia
            th.table1(colspan='3') Proceso
        tbody
          tr
            td.table2 Identificador (ID) de la historia
            td.table2 Rol
            td.table2 características / Funcionalidad
            td.table2 Razón / Resultado
            td.table2 Número (#) de escenario
            td.table2 Criterio de aceptación (Titulo)
            td.table2 Contexto
            td.table2 Evento
          tr
            td
            td
            td
            td
            td
            td
            td
            td
          tr
            td.table3
            td.table3
            td.table3
            td.table3
            td.table3
            td.table3
            td.table3
            td.table3
          tr
            td
            td
            td
            td
            td
            td
            td
            td
          tr
            td.table3
            td.table3
            td.table3
            td.table3
            td.table3
            td.table3
            td.table3
            td.table3
          tr
            td
            td
            td
            td
            td
            td
            td
            td
          tr
            td.table3
            td.table3
            td.table3
            td.table3
            td.table3
            td.table3
            td.table3
            td.table3
    .row.mb-5
      .col-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo3.xls')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p.mb-3 #[b Anexo.] Revisar el anexo Plantilla de Historias de Usuario, para analizar su estructura.
            p #[b Nota: ] Tomado de la oficina de proyectos de informática. (2012)
    h5 1.3.3. Storyboard.
    figure.my-5
      img(src='@/assets/curso/img20.png', style="max-width: 100%; margin: auto;")
    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h2.mb-0 ¿Qué es un Storyboard?
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p Los #[i storyboards] son un tipo de prototipos muy utilizados, #[b consiste básicamente en ir mostrando en una secuencia de imágenes un proceso, acción o ejercicio que se puede realizar en el sistema una vez terminado], las imágenes van mostrando la evolución del sistema conforme el usuario interactúa con el sistema.
    p.mb-4 Con esta técnica se pretende crear diferentes vistas del sistema en las primeras etapas de su implementación de la manera más rápida y barata posible [SUT02].
    p.mb-4 Una forma muy común de ejemplificar los storyboards es con las revistas de cómics, ya que van mostrando una secuencia de imágenes en cuadros con un orden establecido que permiten entender la línea de la historia contada. La técnica storyboard permite generar modelos o esquemas visuales como esbozos de interfaces gráficas de usuario (GUI).
    p.mb-4 A continuación, se detallan las principales características de los storyboards:
    .row.align-items-center.mb-4
      .col-lg-6
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Se preserva el punto de vista del proceso del negocio.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Se puede validar un escenario.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Se pueden validar escenarios integradores logrando una visión global.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Son más fáciles de comprender por el usuario.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 No genera falsas expectativas.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 El usuario sigue trabajando con herramientas conocidas.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Son fáciles de mantener o adaptar a los cambios.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Permiten incorporar modificaciones durante la validación.
      .col-lg-6.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/img21.png', style="max-width: 60%; margin: auto;")
    p.mb-5 Las dos figuras siguientes muestran el ejemplo de un storyboard que representa un escenario de situación de vendedores de una empresa para explicar el cambio que sufrirá el trabajo, el primero representa la situación actual y el segundo como quedará con la implantación del sistema.
    .row.align-items-start.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/img22.jpg', style="max-width: 100%; margin: auto;")
          figcaption Figura 11 /Escenario representado en formato de storyboard que representa una situación típica tal y como se realiza actualmente.
        p.mt-3 #[b Nota: ]Tomado de Granollers, Lorés y Perdrix (2002)
      .col-lg-6.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/img23.jpg', style="max-width: 100%; margin: auto;")
          figcaption Figura 12 /Escenario representado en formato de storyboard que representa la misma situación anterior tal como quedará con la implementación del sistema.
        p.mt-3 #[b Nota: ]Tomado de Granollers, Lorés y Perdrix (2002)
    #t_1_4
    .titulo-segundo.pt-5
      .h4 1.4. Herramientas de modelado
    .bloque-texto-a.p-4.p-md-5.my-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h2.mb-0 Estas herramientas permiten crear un "simulacro" del sistema.
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p.mb-4 Las herramientas de modelado de sistemas informáticos se emplean para la creación de modelos de sistemas que ya existen o que se desarrollarán; estas herramientas permiten crear un #[b "simulacro"] del sistema, a bajo coste y riesgo mínimo. #[b A bajo costo porque, es un conjunto de gráficos y textos que representan el sistema].
            p El Lenguaje Unificado de Modelado (UML, por sus siglas en inglés, Unified Modeling Language) #[b es el lenguaje de modelado de sistemas de software más conocido y utilizado en la actualidad]; UML es un lenguaje gráfico que permite especificar, modelar, construir y documentar los elementos que forman un sistema software.
    p.mb-4 De otra parte, las herramientas CASE son un conjunto de programas y procesos “guiados”, que ayudan a los analistas, desarrolladores, ingenieros de software y diseñadores en una o todas las etapas que comprende un ciclo de vida, con el objetivo de facilitar el desarrollo de software. El objetivo general de estas herramientas es acelerar el proceso para el que han sido diseñadas, es decir, para automatizar o apoyar una o más fases del ciclo de vida del desarrollo de sistemas. CASE proporciona un conjunto de herramientas semiautomatizadas y automatizadas que están creando una nueva cultura de ingeniería en muchas empresas. Las herramientas CASE se diseñaron para aumentar la productividad en el desarrollo de software y reducir su costo.
    p.mb-4 Existen muchas herramientas para modelado tanto en libres como con derechos comerciales; a renglón seguido se listan las herramientas CASE más utilizadas:
    .row.mb-4
      .col-6
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 ER win.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 ArgoUML.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Easy Case.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Oracle Designer.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Power Designer.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 System Architect.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 SNAP.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Gliffy (https://www.gliffy.com/).
      .col-6
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 MagicDraw.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Lucidchart.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Papyrus Uml.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Modelio.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 StarUml.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Dia.
        .list.align-items-star.mt-2
          .list__item
            .list__item__icon
              img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
          .list__txt
            p.mt-2 Mono Uml.
    p.mb-4 A continuación, se realizará una descripción del top 5 de las más utilizadas.
    TabsC
      .py-3.py-md-4(titulo="Gliffy")
        .row
          .col-12
            p.mb-4 La aplicación en línea Gliffy es una herramienta de diagramas UML basada en la nube. Apareció por primera vez en 2006 y se trata de una herramienta de modelado que crea todo tipo de diagramas, tales como diagramas de flujo, diagramas de Venn y, por supuesto, diagramas UML. La herramienta en línea fue escrita en HTML5 y es bastante popular gracias a su rapidez de reacción. Es de anotar que antes de que Gliffy pasara por la fase beta en 2007, la empresa homónima cooperó con el grupo de software australiano Atlassian. Ya en 2006, su software de colaboración Confluence integró un plugin de Gliffy y, más tarde, el equipo de Gliffy desarrolló un plugin para Jira. Google Workspace y Drive de Google también integran esta herramienta UML.
            figure
              img(src='@/assets/curso/img24.png', style="max-width: 100%; margin: auto;")
              figcaption Figura 13 /Herramienta Gliffy.
            p.mt-3 #[b Nota: ]Tomado de <a href="https://www.gliffy.com/" target="_blank">https://www.gliffy.com/</a>
      .py-3.py-md-4(titulo="ArgoUML")
        .row
          .col-12
            p.mb-4 Ha sido durante mucho tiempo una de las herramientas UML gratuitas de código abierto más populares para el escritorio y aunque ya no se mantiene, muchos modeladores continúan usando el programa para tareas más pequeñas. Su software es multiplataforma, cuyo el requisito mínimo es Java 5 ArgoUML soporta todos los tipos de diagramas de la versión 1.4 de UML y perfiles UML. El programa también ofrece algunas formas decorativas que no forman parte del estándar UML.
            p.mb-4 Además, aunque esta herramienta UML está disponible como descarga gratuita, ArgoUML #[b soporta una amplia gama de lenguajes de programación] cuyo código puede generarse a partir de un diagrama. La 	ingeniería inversa también es posible para Java, C++, PHP, C# y SQL. El programa reconoce otros idiomas como Delphi o Ruby cuando los agrega como extensiones a la carpeta de archivos ArgoULM.
            figure
              img(src='@/assets/curso/img25.png', style="max-width: 100%; margin: auto;")
              figcaption Figura 14 /Herramienta de modelado ArgoUML.
            p.mt-3 #[b Nota: ]Tomado de <a href="https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/las-mejores-herramientas-uml/" target="_blank">https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/las-mejores-herramientas-uml/</a>
      .py-3.py-md-4(titulo="MagicDraw")
        .row
          .col-12
            p.mb-4 Esta aplicación de escritorio destaca por su diseño moderno y claro, así como por su variedad de funciones y la facilidad de su uso. Esta herramienta de diagramas UML ofrece además SysML, representación gráfica de procesos de negocio con BPMN #[i (Business Process Model and Notation)] y el marco de arquitectura UPDM #[i (United Profile for DoDAF/MODAF)].
            p.mb-4 MagicDraw también ofrece lenguaje de especificación OCL #[i (Object Constraint Language)], y XMI, que 	puede usar para exportar diagramas a otros programas sin pérdidas de información.
            figure
              img(src='@/assets/curso/img26.png', style="max-width: 100%; margin: auto;")
              figcaption Figura 15 /Herramienta de modelado MagicDraw.
            p.mt-3 #[b Nota: ]Tomado de <a href="http://www.magicdraw.com" target="_blank">http://www.magicdraw.com</a>
      .py-3.py-md-4(titulo="StarUML")
        .row
          .col-12
            p.mb-4 Es una herramienta para el modelamiento de software basado en los estándares UML #[i (Unified Modeling Language)] y MDA #[i (Model Driven Arquitecture)].
            p.mb-4 Da soporte completo al diseño UML mediante el uso de:
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Diagrama de casos de uso.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Diagrama de clase.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Diagrama de secuencia.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Diagrama de colaboración.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Diagrama de estados.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Diagrama de actividad.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Diagrama de componentes.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Diagrama de despliegue.
            .list.align-items-star.mt-2.mb-4
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-2 Diagrama de composición estructural (UML 2.0).
            figure
              img(src='@/assets/curso/img27.png', style="max-width: 100%; margin: auto;")
              figcaption Figura 16 /Herramienta de modelado StarUML.
            p.mt-3 #[b Nota: ]Tomado de <a href="https://staruml.io/" target="_blank">https://staruml.io/</a>
      .py-3.py-md-4(titulo="Lucidchart")
        .row
          .col-12
            p.mb-4 Herramienta para hacer diagramas UML #[i online] que permite comprender las complejidades en el código de forma más rápida y sencilla, pues automatiza el proceso de generación de un diagrama de clases. Simplemente elabora y personaliza los diagramas de secuencia en línea a partir del texto. Al ingresar el marcado en el diálogo emergente, Lucidchart generará automáticamente un diagrama de secuencia que cumple el estándar de PlantUML.
            figure
              img(src='@/assets/curso/img28.png', style="max-width: 100%; margin: auto;")
              figcaption Figura 17 /Herramienta de modelado Lucidchart.
            p.mt-3 #[b Nota: ]Tomado de <a href="https://www.lucidchart.com/" target="_blank">https://www.lucidchart.com/</a>

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
