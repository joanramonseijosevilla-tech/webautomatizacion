// =============================
// SISTEMA DE IDIOMAS
// =============================
const translations = {
    es: {

        //Mensaje de éxito envío formulario
        title: "¡Solicitud Enviada!",
        message: (name) => `Gracias ${name}. Hemos recibido tu solicitud de diagnóstico gratuito.<br><strong>Te contactaremos en menos de 2 horas laborales.</strong>`,

        //Mensaje de error en el envío del formulario
        errorTitle: "Error de Conexión",
        errorMessage: "No pudimos enviar tu solicitud.<br>Por favor, inténtalo de nuevo o contáctanos directamente.",

        // Textos del Hero que faltan
        'stats-hours': '20h',
        'stats-hours-label': 'Promedio semanal ahorrado',
        'stats-errors': '95%',
        'stats-errors-label': 'Reducción de errores', 
        'stats-roi': '30',
        'stats-roi-label': 'Días para ver el ROI',

        // Menú Harburguesa
        'dmenu-mob-navegacionh':"Navegación",
        'dmenu-mob-serviciosh':'🔄 Servicios',
        'dmenu-mob-procesoh':'📋 Proceso',
        'dmenu-mob-casosh':'🏆 Casos de Éxito',
        'dmenu-mob-calculadorah':'💰 Calculadora ROI',
        'dmenu-mob-tarjetah':'📱 Tarjeta Visita',
        'dmenu-mob-calendarioh':'📅 Reservar Cita',
        'dmenu-mob-contactoh':'📞 Contacto',
        'dmenu-mob-aprendeh':'🎓 Aprende con Nosotros',
        'dmenu-mob-ejemplosh':'⚙️ Academia Práctica',
        'dmenu-mob-comprah':'🛒 Productos recomendados',


        // Secciones principales
        'services-title': 'Servicios especializados',
        'process-title': 'Proceso garantizado en 4 pasos',
        'cases-title': 'Casos de éxito reales',
        'calculator-title': '💰 Descubre cuánto dinero estás perdiendo',
        'contact-title': 'Obtén tu diagnóstico gratuito',
        'calendar-title': '📅 Reserva tu cita para el diagnóstico gratuito',

        //Academia Práctica
        'aptitulopagina':'Academia Práctica',
        'aptituloh2':'Bienvenido',
        'apparrafo1':'Aquí encontrarás <strong>vídeos prácticos</strong>, <strong>guías rápidas</strong> y <strong>plantillas descargables</strong>, <strong>siempre actualizadas</strong>. Todo el material crece cada mes para que tengas un espacio de referencia donde aprender de manera eficiente.',
        'apparrafo2':'Además, podrás hacer <strong>peticiones y consultas</strong>. Las peticiones más solicitadas serán desarrolladas y podrás pedir orientación sobre cualquier recurso de la página. “Si estás trabajando en tu propio proyecto, te guiaremos y aconsejaremos en lo que necesites, para que consigas hacerlo tú mismo con seguridad y confianza.”. 🚀',         
        'tapfeaturestitulo': '¿Qué encontrarás dentro?',
        'apfeaturesh3e1':'Vídeo paso a paso',
        'apfeaturespe1':'Explicaciones claras y directas con ejemplos reales.',
        'apfeaturesh3e2':'📂 Plantillas listas',
        'apfeaturespe2':'Automatizaciones que puedes descargar y usar al instante.',
        'apfeaturesh3e3':'📑 Guías rápidas',
        'apfeaturespe3':'Documentos prácticos para resolver dudas en minutos.',
        'apcomparativetitulo':'¿Y por qué no en YouTube?',
        'aptatableth1':'YouTube',
        'aptatableth2':'Academia práctica',
        'aptabletd1row1':'Vídeos sueltos y desordenados',
        'aptabletd2row1':'Contenido claro y bien organizado, fácil de seguir',
        'aptabletd1row2':'Muchos desactualizados',
        'aptabletd2row2':'Material siempre actualizado',
        'aptabletd1row3':'Sin plantillas preparadas',
        'aptabletd2row3':'Automatizaciones disponibles para descargar directamente',
        'aptabletd1row4':'Depender del algoritmo de YouTube',
        'aptabletd2row4':'Acceso directo, sin distracciones',
        'applanstitulo':'Tipos de suscripcción',
        'apfreesuscription':'Gratis',        
        'appaysuscription':'Subscripción',
        'applanprice': '<strong>5€/mes</strong> o <strong>40€/año</strong>',
        'applanul1li':'✅ 2 vídeos de prueba',
        'applanul2li':'✅ 1 plantilla para descargar',
        'apbtnfree':'Pruébalo gratis',
        'applan2ul1li':'🔥 Accede a todo el catálogo sin limitaciones',
        'applan2ul2li':'🔥 Nuevos recursos cada mes',
        'applan2ul3li':'🔥 Espacio privado para la comunidad',
        'apbtnpay':'Empieza ahora',
        'aphelpacademiah2':'¿Necesitas ayuda?',
        'aphelpacademia1p':'Además de los vídeos y recursos descargables, tendrás un espacio para <strong>consultar dudas y pedir orientación</strong>. Si una automatización necesita adaptarse a tu cuenta o proyecto, podrás preguntar y te guiaremos para que lo resuelvas tú mismo.',        
        'aphelpacademia2p':'<em>⚠️ Nota:</em> La ayuda es acompañamiento y orientación, no la realización completa de proyectos.',



        // Cursos
        'p2titulocursos': '¡ Aprende Con Nosotros !',
        'p2subtitulocursos': 'Páginas, cursos y enlaces útiles',
        'p2parrafocursos': 'En esta sección encontrarás páginas de interés pensadas para acercarte al mundo de la Inteligencia Artificial y de las automatizaciones en los procesos de las empresas. Aquí podrás aprender conceptos básicos, acceder a noticias relevantes y descubrir recursos de formación. Se trata de una página dinámica que irá creciendo poco a poco, incorporando nuevos contenidos y enlaces útiles, para que siempre estés al día de las últimas novedades y avances en este campo.',
        'cursos-ianinos-title': 'IA para niños',
        'cursos-ianinos-desc': 'Haz clic aquí y entra en una paginita hecha para niños, donde descubrirás de forma fácil qué es la inteligencia artificial. Son solo unas cuantas cositas para familiarizarte, y al final te espera un mini quiz divertido para poner a prueba lo que aprendiste.',
        'cursos-autproc-title': 'Automatización Procesos',
        'cursos-autproc-desc': 'Esta sección es una introducción sencilla a la automatización de procesos y la inteligencia artificial en la empresa. Está pensada para quienes quieren empezar a familiarizarse con estos temas, con explicaciones básicas y ejemplos claros. Al final encontrarás un pequeño quiz para poner a prueba lo aprendido.',

        // Servicios
        'service-automation-title': 'Automatización de procesos',
        'service-automation-desc': 'Conectamos tus herramientas (CRM, email, facturación, inventario) para que trabajen en sincronización automáticamente.',
        'service-automation-roi': 'ROI promedio: 400%',
        
        'service-marketing-title': 'Marketing automatizado',
        'service-marketing-desc': 'Secuencias de email, lead scoring, segmentación automática y nurturing de leads.',
        'service-marketing-roi': '+150% de leads calificados',
        
        'service-reports-title': 'Reportes inteligentes',
        'service-reports-desc': 'Dashboards automáticos que consolidan datos de múltiples fuentes para decisiones basadas en datos reales.',
        'service-reports-roi': 'Decisiones 5 veces más rápidas',

        'service-web-title': 'Realización de páginas web',
        'service-web-desc': 'Diseñamos y desarrollamos sitios web rápidos, seguros y adaptados a cualquier dispositivo, optimizados para atraer y convertir clientes.',
        'service-web-roi': 'Entregas en tiempo récord y listas para SEO',

        'service-ai-title': 'Inteligencia artificial',
        'service-ai-desc': 'Implementamos soluciones de IA que automatizan tareas, analizan datos y mejoran la toma de decisiones en tu negocio.',
        'service-ai-roi': 'Hasta un 60% más de eficiencia operativa',

        'service-school-title': 'Formación para empresas',
        'service-school-desc': 'Programas de capacitación personalizados para equipos, enfocados en tecnología, ventas y productividad.',
        'service-school-roi': 'Aprendizaje práctico con resultados inmediatos',

        // Proceso
        'step-1-title': 'Auditoría gratuita',
        'step-1-desc': 'Analizamos tus procesos actuales e identificamos oportunidades de automatización',
        'step-2-title': 'Propuesta personalizada', 
        'step-2-desc': 'Diseñamos la solución específica con ROI calculado y tiempos de implementación',
        'step-3-title': 'Implementación',
        'step-3-desc': 'Configuramos y probamos todas las automatizaciones sin interrumpir tu operación',
        'step-4-title': 'Soporte continuo',
        'step-4-desc': 'Monitoreo, optimización y capacitación de tu equipo para maximizar resultados',

        // Navegación
        'nav-servicios': 'Servicios',
        'nav-proceso': 'Proceso',
        'nav-casos': 'Casos de éxito',
        'nav-calculadora':"Calculadora ROI",
        'nav-tarjeta':"Tarjeta visita",
        'nav-calendario': 'Reservar cita',
        'nav-contacto': 'Contacto',
        'nav-aprende':'Aprende con nosotros',
        'nav-ejemplos':'Academia práctica',
        'nav-compra':'Productos recomendados',
        
        // Calendarios - Meses
        'month-0': 'Enero',
        'month-1': 'Febrero', 
        'month-2': 'Marzo',
        'month-3': 'Abril',
        'month-4': 'Mayo',
        'month-5': 'Junio',
        'month-6': 'Julio',
        'month-7': 'Agosto',
        'month-8': 'Septiembre',
        'month-9': 'Octubre',
        'month-10': 'Noviembre',
        'month-11': 'Diciembre',
        
        // Calendarios - Días
        'day-header-0': 'Lun',
        'day-header-1': 'Mar',
        'day-header-2': 'Mié',
        'day-header-3': 'Jue',
        'day-header-4': 'Vie',
        'day-header-5': 'Sáb',
        'day-header-6': 'Dom',

        // Calendario
        'calendar-subtitle': 'Selecciona el día y hora que mejor te convenga para tu consulta por videoconferencia',
        'calendar-modality': '📺 Modalidad: Videoconferencia (1 hora)',
        'calendar-schedule': '🕒 Horario: Lunes a viernes, 9:00-14:00 y 15:00-19:00',
        'calendar-timezone': '🌍 Zona horaria: España (Madrid)',
        'calendar-selected-date-title': 'Horarios para',
        
        
        // Chatbot
        'chatbot-title': 'Consultor en automatización',
        'chatbot-placeholder': 'Pregúntame sobre automatización...',
        'chatbot-send': 'Enviar',
        'quick-tiempo': '⏰ Tiempo ahorrado',
        'quick-costo': '💰 Costo/ROI', 
        'quick-procesos': '🔧 Qué automatizar',
        'quick-llamada': '📞 Llamada gratuita',
        'chatbot-welcome': '¡Hola! Soy {name}, especialista en automatización empresarial diseños de WEB y Formación. ¿En qué puedo ayudarte a optimizar tu negocio?',
        'consulting-analize':'Analizando tu consulta...',
        'errormessage2':'Disculpa, no pude procesar tu consulta. ¿Podrías intentar de nuevo?',
        
        // Botones rápidos - mensajes
        'quick-tiempo-msg': '¿Cuánto tiempo puedo ahorrar automatizando?',
        'quick-costo-msg': '¿Cuál es el costo de automatizar mis procesos?',
        'quick-procesos-msg': '¿Qué procesos puedo automatizar en mi empresa?',
        'quick-llamada-msg': 'Quiero programar una llamada gratuita',

        // Testimoniales
        'testimonial-1-text': '"Automatizamos el proceso de cotizaciones y seguimiento. Ahora generamos 3 veces más propuestas con el mismo equipo."',
        'testimonial-1-author': '— Elena Martínez, CEO TechSolutions',
        'testimonial-1-results': '✅ 15 horas semanales ahorradas\n✅ 200% más cotizaciones enviadas\n✅ ROI del 450% en 6 meses',

        'testimonial-2-text': '"La automatización de inventario y facturación eliminó errores y aceleró nuestro flujo de caja."',
        'testimonial-2-author': '— Carlos Ruiz, Director Comercial InnovaRetail',
        'testimonial-2-results': '✅ 0% errores en inventario\n✅ Facturación 24/7 automática\n✅ Flujo de caja mejorado 40%',

        // Productos Destacados

        'featuredTitle': "⭐ Productos destacados IA",

        'gadget1Tag': "IA wearable",
        'gadget1Title': "Gafas inteligentes con inteligencia artificial",
        'gadget1Text': "Gafas inteligentes con funciones de traducción en tiempo real, asistentes IA y control por voz. Un ejemplo interesante de cómo la inteligencia artificial empieza a integrarse en dispositivos cotidianos y experiencias manos libres.",

        'gadget2Tag': "IA wearable",
        'gadget2Title': "Auriculares inteligentes con traducción IA",
        'gadget2Text': "Auriculares con inteligencia artificial capaces de traducir conversaciones en tiempo real entre múltiples idiomas. Un ejemplo práctico de cómo la IA empieza a eliminar barreras de comunicación en viajes, reuniones y trabajo internacional.",

        'product3Tag': "Productividad",
        'product3Title': "Dispositivo de IA que graba, transcribe y resume automáticamente",
        'product3Text': "Graba reuniones, convierte el audio en texto y genera resúmenes automáticamente gracias a la inteligencia artificial. Una herramienta práctica para ahorrar tiempo, organizar ideas y no perder información importante.",

        'amazonButton': "Ver en Amazon",

        'featuredProductsMore': "Ver más productos",
        
        // Calculadora
        'calc-no-slots': 'No hay horarios disponibles para este día',
        'calc-select-day': '👆 Selecciona un día en el calendario para ver los horarios disponibles',
        'calc-title-pain': '💸 ESTÁS PERDIENDO:',
        'calc-title-gain': '🚀 CON AUTOMATIZACIÓN:',
        'calc-annual-savings': 'Ahorro anual:',
        'calc-roi-projected': 'ROI proyectado:',
        'calc-cta-button': '🎯 Quiero recuperar este dinero',
        'calc-hours-label': '⏰ Horas semanales en tareas repetitivas (por empleado):',
        'calc-cost-label': '💰 Costo por hora promedio (€):',
        'calc-employees-label': '👥 Empleados que realizan estas tareas:',
        
        // Formularios
        'loading-appointment': 'Procesando tu cita...',
        'appointment-confirmed': '¡Cita Confirmada!',
        'appointment-email-sent': 'Hemos enviado los detalles de tu cita a',
        'appointment-email-includes': 'Te llegará un email con:',
        'appointment-email-confirmation': '✅ Confirmación de fecha y hora',
        'appointment-email-link': '📺 Enlace para la videoconferencia', 
        'appointment-email-reminder': '📋 Recordatorio 24h antes',
        'appointment-email-cancel': '🔗 Opción para cancelar/reprogramar',
        'appointment-thanks': '👍 Perfecto, gracias',

        // Formulario de contacto
        'contact-name-label': 'Nombre completo *',
        'contact-email-label': 'Email empresarial *',
        'contact-phone-label':'Teléfono *',
        'contact-company-label': 'Empresa *',
        'contact-employees-label': 'Número de empleados',
        'contact-employees-selecciona':'Selecciona...',
        'contact-employees-1-10': '1-10 empleados',
        'contact-employees-11-50': '11-50 empleados', 
        'contact-employees-51-200': '51-200 empleados',
        'contact-employees-200+': 'Más de 200 empleados',
        'contact-form-type': 'Tipo de consulta',
        'contact-opction0':'Diagnóstico general de automatitzación',
        'contact-opction1':'Automatización de procesos específicos',
        'contact-opction2':'Márqueting automatizado',
        'contact-opction3':'Informes y paneles',
        'contact-opction4':'Integraciones entre herramientas',
        'contact-opction5':'Otros (especifica en los comentarios)',

        'contact-challenge-label': 'Principal desafío que quieres automatizar *',
        'contact-challenge-placeholder': 'Ej.: Gestión de leads, facturación, reportes, seguimiento de clientes...',
        'contact-response-time': '⏱️ Respuesta en menos de 2 horas laborales',

        
        // VCard
        'vcard-title': 'Nexautia.com - Mejoramos la productividad en tu negocio',
        'vcard-email': '📧 contacto@nexautia.com',
        'vcard-phone': '📱 +34 610 510 642',
        'vcard-website': '🌐 www.nexautia.com',
        'vcard-location': '📍 Barcelona, España',
        'vcard-download-text': '📱 Descargar contacto',
        'vcard-call-text': '📞 Llamar ahora',
        'vcard-email-text': '✉️ Enviar email',
        'vcard-downloaded': '📱 Contacto Descargado',
        'vcard-description': 'Se ha descargado el archivo de contacto (.vcf) en tu equipo.<br>Si tu sistema no puede abrirlo automáticamente, puedes usar estas alternativas:',
        'vcard-download-txt': '📄 Descargar como TXT',
        'vcard-copy-clipboard': '📋 Copiar al Portapapeles', 
        'vcard-understood': '✅ Entendido',
        'vcard-copied': '¡Datos copiados al portapapeles!',
        
        // Mensajes de éxito/error
        'form-sending': '⏳ Enviando...',
        'form-sent': '✅ ¡Enviado!',
        'form-error': '❌ Error, inténtalo de nuevo',
        'request-sent': '¡Solicitud Enviada!',
        'request-thanks': 'Gracias {name}. Hemos recibido tu solicitud de diagnóstico gratuito.<br><strong>Te contactaremos en menos de 2 horas laborales.</strong>',
        'connection-error': 'Error de Conexión',
        'connection-error-msg': 'No pudimos enviar tu solicitud.<br>Por favor, inténtalo de nuevo o contáctanos directamente.',
        
        // Analytics
        'analytics-title': '📊 ANALYTICS EN TIEMPO REAL',
        'analytics-version': 'Versión A/B:',
        'analytics-visitor': '👤 Visitante:',
        'analytics-cta-clicks': '🎯 Clics en CTAs:',
        'analytics-conversions': '📝 Conversiones:',
        'analytics-conversions-note': '(formularios enviados)',
        'analytics-time': '⏱️ Tiempo:',
        'analytics-heatmap': '🔥 Clics heatmap:',
        'analytics-vcard': '📱 vCard Descargas:',
        'analytics-switch-text': '🔄 Cambiar Versión A/B',
        'analytics-report-text': '📊 Ver Informe Detallado',
       
        'headline-a': 'Automatiza y Ahorra 20h/semana en Procesos Manuales',
        'headline-b': 'Elimina el 90% de Tareas Repetitivas en Tu Empresa',
        'subtitle-a': 'Transformamos empresas con automatizaciones inteligentes que eliminan tareas repetitivas, reducen errores y aumentan la productividad hasta un 300%.',
        'subtitle-b': 'Libera a tu equipo de trabajo manual con automatizaciones que funcionan 24/7. Reduce errores humanos y multiplica tu productividad sin contratar más personal.',
        'primary-cta-a': 'Diagnóstico Gratuito',
        'primary-cta-b': 'Análisis Gratuito',
        'secondary-cta-a': 'Ver Casos de Éxito',
        'secondary-cta-b': 'Ejemplos Reales',
        'form-cta-a': 'Solicitar Diagnóstico Gratuito',
        'form-cta-b': 'Quiero Mi Análisis Gratis',
        'calc-annual-loss': 'al año',
        'calc-field-hours': 'horas/empleado',
        'calc-field-cost': '€/hora',
        'calc-field-employees-singular': 'empleado',
        'calc-field-employees-plural': 'empleados',
        'calc-validation-hours': 'Por favor, ingresa las horas semanales',
        'calc-validation-cost': 'Por favor, ingresa el coste por hora',
        'calc-validation-employees': 'Por favor, ingresa el número de empleados',

         // Footer
        'footer-text1': '© 2025 Nexautia. Transformando empresas con automatización inteligente.',
        'footer-text2': 'Creado con ❤️ por Nexautia para el traspaso de conocimiento',
        'footer-text3': '¡Sigue explorando el increíble mundo de la automatización de empresas y la Inteligencia Artificial!',
        'footer-text4': 'Este proyecto arranca con una base de recursos y cada mes añadiremos nuevos contenidos prácticos y actualizados. La idea es construir <strong>un espacio potente y útil</strong> para quienes quieran aprender a automatizar de verdad. 🙌',

        // Analytics faltantes
        'analytics-cta-note': '💡 CTAs = Todos los botones importantes',
        'analytics-conversions-detail': '💡 Conversiones = Solo formularios enviados',       
        
        // Calculadora faltantes
        'calc-annual-savings-label': 'Ahorro anual:',        
        
        // Calendario faltantes
        'calendar-Button-Prev':'Anterior',
        'calendar-Button-Next':'Siguiente',
        'calendar-title-select': 'Selecciona un día',
        'calendar-select-day': 'Selecciona un día en el calendario para ver horarios disponibles',
        'calendar-processing': 'Procesando tu cita...',
        
        // Formulario de cita faltantes
        'appointment-summary-title':'📝Datos para la cita',
        'appointment-summary-subtitle':'📅 Resumen de tu cita',
        'appointment-summary-date':'Fecha:',
        'appointment-summary-time':'Hora:',
        'appointment-summary-duration':'Duración:',
        'appointment-summary-1h':'1 hora',
        'appointment-summary-mode':'Modalidad:',
        'appointment-summary-videoconference':'Videoconferencia',
        'appointment-form-name': 'Nombre completo',
        'appointment-form-email': 'Email',
        'appointment-form-phone': 'Teléfono',
        'appointment-form-company': 'Empresa',
        'appointment-form-employees': 'Número de empleados',
        'appointment-employees0':'Selecciona...',
        'appointment-employees1':'1-10 empleados',
        'appointment-employees2':'11-50 empleados',
        'appointment-employees3':'51-200 empleados',
        'appointment-employees4':'Más de 200 empleados',
        'appointment-form-type': 'Tipo de consulta',
        'appointment-opction0':'Diagnóstico general de automatización',
        'appointment-opction1':'Automatización de procesos específicos',
        'appointment-opction2':'Márqueting automatizado',
        'appointment-opction3':'Informes y paneles',
        'appointment-opction4':'Integraciones entre Herramientas',
        'appointment-opction5':'Otros (especifica en comentarios)',
        
        'appointment-form-details': 'Describe brevemente tu situación o necesidad',
        'appointment-form-placeholder':'Ej.: Necesito automatizar el proceso de seguimiento de leads desde el CRM hasta el márqueting por correo electrónico...',
        'appointment-form-confirm': '✅ Confirmar',
        'appointment-form-cancel': '❌ Cancelar',
    
    },
    
    ca: {

        //Mensaje de éxito envío formulario        
        title: "Sol·licitud Enviada!",
        message: (name) => `Gràcies ${name}. Hem rebut la teva sol·licitud de diagnòstic gratuït.<br><strong>Et contactarem en menys de 2 hores laborals.</strong>`,

       //Mensaje de error en el envío del formulario
       errorTitle: "Error de Connexió",
       errorMessage: "No vam poder enviar la teva sol·licitud.<br>Si us plau, torna-ho a intentar o contacta'ns directament.",

        // Textos del Hero que faltan
        'stats-hours': '20h',
        'stats-hours-label': 'Promig setmanal estalviat',
        'stats-errors': '95%',
        'stats-errors-label': 'Reducció d\'errors',
        'stats-roi': '30', 
        'stats-roi-label': 'Dies per veure el ROI',

       // Menú Harburguesa
       'dmenu-mob-navegacionh':"Navegació",
       'dmenu-mob-serviciosh':'🔄 Serveis',
       'dmenu-mob-procesoh':'📋 Processos',
       'dmenu-mob-casosh':'🏆 Casos d\'Èxit',
       'dmenu-mob-calculadorah':'💰 Calculadora ROI',
       'dmenu-mob-tarjetah':'📱 Targeta Visita',
       'dmenu-mob-calendarioh':'📅 Reservar Cita',
       'dmenu-mob-contactoh':'📞 Contacte',
       'dmenu-mob-aprendeh':'🎓 Aprèn amb nosaltres',
       'dmenu-mob-ejemplosh':'⚙️ Acadèmia práctica',
       'dmenu-mob-comprah':'🛒 Productes recomenats',

        // Secciones principales
        'services-title': 'Serveis especialitzats',
        'process-title': 'Procés garantit en 4 passos',
        'cases-title': 'Casos d\'èxit reals',
        'calculator-title': '💰 Descobreix quant diners estàs perdent',
        'contact-title': 'Obtingues el teu diagnòstic gratuït',
        'calendar-title': '📅 Reserva la teva cita per al diagnòstic gratuït',

        //Academia Práctica
        'aptitulopagina':'Acadèmia Pràctica',
        'aptituloh2':'Benvinguts',
        'apparrafo1':'Aquí hi trobaràs <strong>vídeos pràctics</strong>, <strong>guies ràpides</strong> i <strong>plantilles descarregables</strong>, <strong>sempre actualitzades</strong>. Tot el material creix cada mes perquè tinguis un espai de referència on aprendre de manera eficient.',
        'apparrafo2':'A més, podràs fer <strong>peticions i consultes</strong>. Les peticions més sol·licitades seran desenvolupades i podràs demanar orientació sobre qualsevol recurs de la pàgina. “Si estàs treballant en el teu propi projecte, et guiarem i t’aconsellarem en allò que necessitis, perquè aconsegueixis fer-ho tu mateix amb seguretat i confiança.” 🚀',
        'tapfeaturestitulo': 'Què hi trobaràs dins?',
        'apfeaturesh3e1':'Vídeo pas a pas',
        'apfeaturespe1':'Explicacions senzilles i directes amb exemples reals.',
        'apfeaturesh3e2':'📂 Plantilles llestes',
        'apfeaturespe2':'Automatitzacions per descarregar i començar a usar de seguida.',
        'apfeaturesh3e3':'📑 Guies ràpides',
        'apfeaturespe3':'Documents pràctics per aclarir dubtes en qüestió de minuts.',
        'apcomparativetitulo':'I per què no a YouTube?',
        'aptatableth1':'YouTube',
        'aptatableth2':'Acadèmia pràctica',
        'aptabletd1row1':'Vídeos aïllats i sense ordre',
        'aptabletd2row1':'Contingut clar i ben organitzat, fàcil de seguir',
        'aptabletd1row2':'Molts desactualitzats',
        'aptabletd2row2':'Material que es manté sempre actualitzat',
        'aptabletd1row3':'Sense plantilles preparades',
        'aptabletd2row3':'Automatitzacions disponibles per descarregar directament',
        'aptabletd1row4':'Dependre de l\’algoritme de YouTube',
        'aptabletd2row4':'Accés directe, sense distraccions',
        'applanstitulo':'Tipus de subscripció',
        'apfreesuscription':'Gratis',
        'appaysuscription':'Subscripció',
        'applanprice':'<strong>5 €/mes</strong> o <strong>40 €/any</strong>',
        'applanul1li':'✅ 2 vídeos de prova',
        'applanul2li':'✅ 1 plantilla per descarregar',
        'apbtnfree':'Prova-ho gratis',
        'applan2ul1li':'🔥 Accedeix a tot el catàleg sense limitacions',
        'applan2ul2li':'🔥 Recursos nous cada mes',
        'applan2ul3li':'🔥 Espai privat per a la comunitat',
        'apbtnpay':'Comença ara',
        'aphelpacademiah2':'Necessites ajuda?',
        'aphelpacademia1p':'A més dels vídeos i recursos descarregables, disposaràs d\’un espai on <strong>resoldre dubtes i demanar orientació</strong>. Si una automatització s’ha d’adaptar al teu compte o projecte, podràs preguntar i t’acompanyarem perquè ho puguis resoldre tu mateix.',
        'aphelpacademia2p':'<em>⚠️ Nota:</em> L\’ajuda és acompanyament i orientació, no la realització completa de projectes.',


        // Cursos
        'p2titulocursos': '¡ Aprèn Amb Nosaltres !',
        'p2subtitulocursos': 'Pàgines, cursos i enllaços útils',
        'p2parrafocursos': 'En aquesta secció hi trobaràs pàgines d’interès pensades per acostar-te al món de la Intel·ligència Artificial i de l’automatització dels processos a les empreses. Aquí podràs aprendre conceptes bàsics, accedir a notícies rellevants i descobrir recursos de formació. Es tracta d’una pàgina dinàmica que anirà creixent a poc a poc, incorporant nous continguts i enllaços útils, perquè sempre estiguis al dia de les últimes novetats i avenços en aquest camp.',
        'cursos-ianinos-title': 'IA per a nens',
        'cursos-ianinos-desc': 'Fes clic aquí i entra en una pagineta feta per a nens, on descobriràs de manera fàcil què és la intel·ligència artificial. Són només unes quantes cosetes per familiaritzar-te, i al final t’espera un mini qüestionari divertit per posar a prova el que has après.',
        'cursos-autproc-title': 'Automatització de processos',
        'cursos-autproc-desc': 'Aquesta secció és una introducció senzilla a l’automatització de processos i la intel·ligència artificial en l’empresa. Està pensada per a aquells que volen començar a familiaritzar-se amb aquests temes, amb explicacions bàsiques i exemples clars. Al final trobaràs un petit qüestionari per posar a prova el que has après.',

        // Servicios
        'service-automation-title': 'Automatització de processos',
        'service-automation-desc': 'Connectem les teves eines (CRM, correu electrònic, facturació, inventari) perquè treballin en sincronització automàticament.',
        'service-automation-roi': 'ROI mitjà: 400%',
        
        'service-marketing-title': 'Màrqueting automatitzat',
        'service-marketing-desc': 'Seqüències de correu electrònic, lead scoring, segmentació automàtica i nurturing de clients potencials.',
        'service-marketing-roi': '+150% de leads qualificats',
        
        'service-reports-title': 'Informes intel·ligents',
        'service-reports-desc': 'Panells automàtics que consoliden dades de múltiples fonts per a decisions basades en dades reals.',
        'service-reports-roi': 'Decisions 5 vegades més ràpides',

        'service-web-title': 'Realització de pàgines web',
        'service-web-desc': 'Dissenyem i desenvolupem llocs web ràpids, segurs i adaptats a qualsevol dispositiu, optimitzats per atreure i convertir clients',
        'service-web-roi': 'Lliuraments en temps rècord i llestos per a SEO',

        'service-ai-title': 'Intel·ligència artificial',
        'service-ai-desc': 'Implementem solucions d\’IA que automatitzen tasques, analitzen dades i milloren la presa de decisions al teu negoci.',
        'service-ai-roi': 'Fins a un 60% més d\’eficiència operativa',

        'service-school-title': 'Formació per a empreses',
        'service-school-desc': 'Programes de capacitació personalitzats per a equips, enfocats en tecnologia, vendes i productivitat.',
        'service-school-roi': 'Aprenentatge pràctic amb resultats immediats',

        // Proceso
        'step-1-title': 'Auditoria gratuïta',
        'step-1-desc': 'Analitzem els teus processos actuals i identifiquem oportunitats d\'automatització',
        'step-2-title': 'Proposta personalitzada',
        'step-2-desc': 'Dissenyem la solució específica amb ROI calculat i terminis d\'implementació', 
        'step-3-title': 'Implementació',
        'step-3-desc': 'Configurem i provem totes les automatitzacions sense interrompre la teva operació',
        'step-4-title': 'Suport continu',
        'step-4-desc': 'Monitorització, optimització i formació del teu equip per maximitzar resultats',

        // Testimoniales
        'testimonial-1-text': '"Automatitzem el procés de pressupostos i seguiment. Ara generem 3 vegades més propostes amb el mateix equip."',
        'testimonial-1-author': '— Elena Martínez, CEO TechSolutions',
        'testimonial-1-results': '✅ 15 hores setmanals estalviades\n✅ 200% més pressupostos enviats\n✅ ROI del 450% en 6 mesos',

        'testimonial-2-text': '"L\'automatització d\'inventari i facturació va eliminar errors i va accelerar el nostre flux de caixa."',
        'testimonial-2-author': '— Carlos Ruiz, Director Comercial InnovaRetail', 
        'testimonial-2-results': '✅ 0% d\'errors en inventari\n✅ Facturació 24/7 automàtica\n✅ Flux de caixa millorat un 40%',

        // Productes Destacats

        'featuredTitle': "⭐ Productes destacats IA",

        'gadget1Tag': "IA wearable",
        'gadget1Title': "Ulleres intel·ligents amb intel·ligència artificial",
        'gadget1Text': "Ulleres intel·ligents amb funcions de traducció en temps real, assistents IA i control per veu. Un exemple interessant de com la intel·ligència artificial comença a integrar-se en dispositius quotidians i experiències mans lliures.",

        'gadget2Tag': "IA wearable",
        'gadget2Title': "Auriculars intel·ligents amb traducció IA",
        'gadget2Text': "Auriculars amb intel·ligència artificial capaços de traduir converses en temps real entre múltiples idiomes. Un exemple pràctic de com la IA comença a eliminar barreres de comunicació en viatges, reunions i treball internacional.",

        'product3Tag': "Productivitat",
        'product3Title': "Dispositiu d'IA que grava, transcriu i resumeix automàticament",
        'product3Text': "Grava reunions, converteix l'àudio en text i genera resums automàticament gràcies a la intel·ligència artificial. Una eina pràctica per estalviar temps, organitzar idees i no perdre informació important.",

        'amazonButton': "Veure a Amazon",

        'featuredProductsMore': "Veure més productes",

        // Calculadora
        'calc-title-pain': '💸 ESTÀS PERDENT:',
        'calc-title-gain': '🚀 AMB AUTOMATITZACIÓ:',
        'calc-annual-savings-label': 'Estalvi anual:',
        'calc-annual-savings': 'Estalvi anual:',
        'calc-roi-projected': 'ROI projectat:',
        'calc-cta-button': '🎯 Vull recuperar aquests diners',
        'calc-hours-label': '⏰ Hores setmanals en tasques repetitives (per empleat):',
        'calc-cost-label': '💰 Cost per hora mitjà (€):',
        'calc-employees-label': '👥 Empleats que realitzan aquestes tasques:',

        // Formulario de contacto
        'contact-name-label': 'Nom complet *',
        'contact-email-label': 'Correu electrònic empresarial *',
        'contact-phone-label':'Telèfon *',
        'contact-company-label': 'Empresa *',
        'contact-employees-label': 'Nombre d\'empleats',
        'contact-employees-selecciona':'Selecciona...',
        'contact-employees-1-10': '1-10 empleats',
        'contact-employees-11-50': '11-50 empleats',
        'contact-employees-51-200': '51-200 empleats',
        'contact-employees-200+': 'Més de 200 empleats',

        'contact-form-type': 'Tipus de consulta',
        'contact-opction0':'Diagnòstic general d\'automatització',
        'contact-opction1':'Automatització de processos específics',
        'contact-opction2':'Màrqueting automatitzat',
        'contact-opction3':'Informes i panells',
        'contact-opction4':'Integracions entre eines',
        'contact-opction5':'Altres (especifica als comentaris)',

        'contact-challenge-label': 'Repte principal que vols automatitzar *',
        'contact-challenge-placeholder': 'Ex.: Gestió de leads, facturació, informes, seguiment de clients...',
        'contact-response-time': '⏱️ Resposta en menys de 2 hores laborals',
        'appointment-summary-title':'📝Dades per la cita',
        'appointment-summary-subtitle':'📅 Resum de la teva cita',
        'appointment-summary-date':'Data:',
        'appointment-summary-time':'Hora:',
        'appointment-summary-duration':'Duració:',
        'appointment-summary-1h':'1 hora',
        'appointment-summary-mode':'Modalitat:',
        'appointment-summary-videoconference':'Videoconferència',
        'appointment-form-name': 'Nom complet',
        'appointment-form-email': 'Correu electrònic',
        'appointment-form-phone': 'Telèfon',
        'appointment-form-company': 'Empresa',
        'appointment-form-employees': 'Nombre d\'empleats',
        'appointment-employees0':'Selecciona...',
        'appointment-employees1':'1-10 empleats',
        'appointment-employees2':'11-50 empleats',
        'appointment-employees3':'51-200 empleats',
        'appointment-employees4':'Més de 200 empleats',
        'appointment-form-type': 'Tipus de consulta',
        'appointment-opction0':'Diagnòstic general d\'automatització',
        'appointment-opction1':'Automatització de processos específics',
        'appointment-opction2':'Màrqueting automatitzat',
        'appointment-opction3':'Informes i panells',
        'appointment-opction4':'Integracions entre eines',
        'appointment-opction5':'Altres (especifica als comentaris)',
        'appointment-form-details': 'Descriu breument la teva situació o necessitat',
        'appointment-form-placeholder':'Ex.: Necessito automatitzar el procés de seguiment dels leads des del CRM fins al màrqueting per correu electrònic...',
        'appointment-form-confirm': '✅ Confirmar',
        'appointment-form-cancel': '❌ Cancel·lar',
    

        // Calendario
        'calendar-Button-Prev':'Anterior',
        'calendar-Button-Next':'Següent',
        'calendar-title-select': 'Selecciona un dia',
        'calendar-processing':'Processant la teva cita',
        'calendar-selected-date-title': 'Horaris per a',
        'calendar-subtitle': 'Selecciona el dia i l\'hora que més t\'agradi per a la teva consulta per videoconferència',
        'calendar-modality': '📺 Modalitat: Videoconferència (1 hora)',
        'calendar-schedule': '🕒 Horari: Dilluns a divendres, 9:00-14:00 i 15:00-19:00',
        'calendar-timezone': '🌍 Zona horària: España (Madrid)',

        // vCard
        'vcard-title': 'Nexautia.com - Millorem la productivitat en el teu negoci',
        'vcard-email': '📧 contacto@nexautia.com',
        'vcard-phone': '📱 +34 610 510 642',
        'vcard-website': '🌐 www.nexautia.com',
        'vcard-location': '📍 Barcelona, Espanya',
        'vcard-download-text': '📱 Descarregar contacte',
        'vcard-call-text': '📞 Trucar ara',
        'vcard-email-text': '✉️ Enviar correu electrònic',

        // Footer
        'footer-text1': '© 2025 Nexautia. Transformant empreses amb automatització intel·ligent.',
        'footer-text2': 'Creat amb ❤️ per Nexautia per al traspàs de coneixement',
        'footer-text3': 'Segueix explorant l’increïble món de l’automatització d’empreses i la Intel·ligència Artificial!',
        'footer-text4': 'El projecte arrenca amb una base de recursos i cada mes incorporarem nous continguts pràctics i actualitzats. L’objectiu és crear <strong>un espai potent i útil</strong> per a tots els que vulguin aprendre a automatitzar de manera efectiva. 🙌',


        // Navegación  
        'nav-servicios': 'Serveis',
        'nav-proceso': 'Procés',
        'nav-casos': 'Casos d\'èxit',
        'nav-calculadora':"Calculadora ROI",
        'nav-tarjeta':"Targeta visita",
        'nav-calendario': 'Reservar cita',
        'nav-contacto': 'Contacte',
        'nav-aprende':'Aprèn amb nosaltres',
        'nav-ejemplos':'Acadèmia pràctica',
        'nav-compra':'Productes recomanats',
        
        // Calendarios - Meses
        'month-0': 'Gener',
        'month-1': 'Febrer',
        'month-2': 'Març', 
        'month-3': 'Abril',
        'month-4': 'Maig',
        'month-5': 'Juny',
        'month-6': 'Juliol',
        'month-7': 'Agost',
        'month-8': 'Setembre',
        'month-9': 'Octubre',
        'month-10': 'Novembre',
        'month-11': 'Desembre',
        
        // Calendarios - Días
        'day-header-0': 'Dil',
        'day-header-1': 'Dim',
        'day-header-2': 'Dic',
        'day-header-3': 'Dij',
        'day-header-4': 'Div',
        'day-header-5': 'Dis',
        'day-header-6': 'Diu',
        
        // Chatbot
        'chatbot-title': 'Consultor en automatització',
        'chatbot-placeholder': 'Pregunta\'m sobre automatització...',
        'chatbot-send': 'Enviar',
        'quick-tiempo': '⏰ Temps estalviat',
        'quick-costo': '💰 Cost/ROI',
        'quick-procesos': '🔧 Què automatitzar', 
        'quick-llamada': '📞 Trucada gratuïta',
        'chatbot-welcome': 'Hola! Sóc {name}, especialista en automatització empresarial. En què et puc ajudar a optimitzar el teu negoci?',
        'consulting-analize':'Analitzant la teva consulta...',
        'errormessage2':'Disculpa, no he pogut processar la teva consulta. Podries intentar-ho de nou?',

        
        // Botones rápidos - mensajes
        'quick-tiempo-msg': 'Quant de temps puc estalviar automatitzant?',
        'quick-costo-msg': 'Quin és el cost d\'automatitzar els meus processos?',
        'quick-procesos-msg': 'Quins processos puc automatitzar a la meva empresa?',
        'quick-llamada-msg': 'Vull programar una trucada gratuïta',
        
        // Calculadora
        'calc-no-slots': 'No hi ha horaris disponibles per aquest dia',
        'calc-select-day': '👆 Selecciona un dia al calendari per veure els horaris disponibles',
        
        // Formularios
        'loading-appointment': 'Processant la teva cita...',
        'appointment-confirmed': 'Cita Confirmada!',
        'appointment-email-sent': 'Hem enviat els detalls de la teva cita a',
        'appointment-email-includes': 'Te llegará un email amb:',
        'appointment-email-confirmation': '✅ Confirmació de data i hora',
        'appointment-email-link': '📺 Enllaç per a la videoconferència',
        'appointment-email-reminder': '📋 Recordatori 24 h abans',
        'appointment-form-select':'Diagnòstic general d automatización',
        'appointment-email-cancel': '🔗 Opció per cancel·lar/reprogramar',
        'appointment-thanks': '👍 Perfecte, gràcies',
        
        // VCard 
        'vcard-downloaded': '📱 Contacte Descarregat',
        'vcard-description': 'S\'ha descarregat l\'arxiu de contacte (.vcf) al teu equip.<br>Si el teu sistema no pot obrir-lo automàticament, pots usar aquestes alternatives:',
        'vcard-download-txt': '📄 Descarregar com TXT',
        'vcard-copy-clipboard': '📋 Copiar al Portapapers',
        'vcard-understood': '✅ Entès',
        'vcard-copied': 'Dades copiades al portapapers!',
        
        // Mensajes de éxito/error
        'form-sending': '⏳ Enviant...',
        'form-sent': '✅ Enviat!',
        'form-error': '❌ Error, torna-ho a intentar',
        'request-sent': 'Sol·licitud Enviada!',
        'request-thanks': 'Gràcies {name}. Hem rebut la teva sol·licitud de diagnòstic gratuït.<br><strong>Et contactarem en menys de 2 hores laborals.</strong>',
        'connection-error': 'Error de Connexió', 
        'connection-error-msg': 'No hem pogut enviar la teva sol·licitud.<br>Si us plau, torna-ho a intentar o contacta\'ns directament.',
        
        // Analytics
        'analytics-title': '📊 ANALYTICS EN TEMPS REAL',
        'analytics-version': 'Versió A/B:',
        'analytics-visitor': '👤 Visitant:',
        'analytics-cta-clicks': '🎯 Clics en CTAs:',
        'analytics-conversions': '📝 Conversions:',
        'analytics-conversions-note': '(formularis enviats)',
        'analytics-time': '⏱️ Temps:',
        'analytics-heatmap': '🔥 Clics heatmap:',
        'analytics-vcard': '📱 vCard Descàrregues:',
        'analytics-switch-text': '🔄 Canviar Versió A/B',
        'analytics-report-text': '📊 Veure Informe Detallat',
        'analytics-cta-note': '💡 CTAs = Tots els botons importants',
        'analytics-conversions-detail': '💡 Conversions = Només formularis enviats',  
        'headline-a': 'Automatitza i Estalvia 20h/setmana en Processos Manuals',
        'headline-b': 'Elimina el 90% de Tasques Repetitives a la Teva Empresa',
        'subtitle-a': 'Transformem empreses amb automatitzacions intel·ligents que eliminen tasques repetitives, redueixen errors i augmenten la productivitat fins a un 300%.',
        'subtitle-b': 'Allibera el teu equip del treball manual amb automatitzacions que funcionen 24/7. Redueix errors humans i multiplica la teva productivitat sense contractar més personal.',
        'primary-cta-a': 'Diagnòstic Gratuït',
        'primary-cta-b': 'Anàlisi Gratuït',
        'secondary-cta-a': 'Veure Casos d\'Èxit',
        'secondary-cta-b': 'Exemples Reals',
        'form-cta-a': 'Sol·licitar Diagnòstic Gratuït',
        'form-cta-b': 'Vull la Meva Anàlisi Gratis',
        'calc-annual-loss': 'a l\'any',
        'calc-field-hours': 'hores/empleat',
        'calc-field-cost': '€/hora',
        'calc-field-employees-singular': 'empleat',
        'calc-field-employees-plural': 'empleats',
        'calc-validation-hours': 'Si us plau, introdueix les hores setmanals',
        'calc-validation-cost': 'Si us plau, introdueix el cost per hora',
        'calc-validation-employees': 'Si us plau, introdueix el nombre d\'empleats'
    },
    
    en: {

        //Mensaje de éxito de formulario enviado
        title: "Request Sent!",
        message: (name) => `Thank you ${name}. We've received your free diagnosis request.<br><strong>We'll contact you within 2 business hours.</strong>`,

        //Mensaje de error en el envío del formulario
        errorTitle: "Connection Error",
        errorMessage: "We couldn't send your request.<br>Please try again or contact us directly.",
        
        // Textos del Hero que faltan
        'stats-hours': '20h',
        'stats-hours-label': 'Weekly average saved',
        'stats-errors': '95%',
        'stats-errors-label': 'Error reduction',
        'stats-roi': '30',
        'stats-roi-label': 'Days to see ROI',

        // Menú Harburguesa

        'dmenu-mob-navegacionh':"Navigation",
        'dmenu-mob-serviciosh':'🔄 Services',
        'dmenu-mob-procesoh':'📋 Process',
        'dmenu-mob-casosh':'🏆 Success Stories',
        'dmenu-mob-calculadorah':'💰 ROI calculator',
        'dmenu-mob-tarjetah':'📱 Business card',
        'dmenu-mob-calendarioh':'📅 Book Appointment',
        'dmenu-mob-contactoh':'📞 Contact',
        'dmenu-mob-aprendeh':'🎓 Learn with us',
        'dmenu-mob-ejemplosh':'⚙️ Practical academy',
        'dmenu-mob-comprah':'🛒 Recommended products',

        // Secciones principales  
        'services-title': 'Specialized Services',
        'process-title': 'Guaranteed 4-Step Process',
        'cases-title': 'Real Success Stories',
        'calculator-title': '💰 Discover How Much Money You\'re Losing',
        'contact-title': 'Get Your Free Diagnosis',
        'calendar-title': '📅 Book Your Free Diagnosis Appointment',

        //Academia Práctica
        'aptitulopagina':'Practical Academy',
        'aptituloh2':'Welcome',
        'apparrafo1':'Here you will find <strong>practical videos</strong>, <strong>quick guides</strong> and <strong>downloadable templates</strong>, <strong>always kept up to date</strong>. All the material grows every month so you have a reference space where you can learn efficiently.',
        'apparrafo2':'In addition, you will be able to make <strong>requests and ask questions</strong>. The most requested ones will be developed, and you can ask for guidance on any resource of the site. “If you are working on your own project, we will guide and advise you on whatever you need, so that you can do it yourself with safety and confidence.” 🚀',
        'tapfeaturestitulo': 'What will you find inside?',
        'apfeaturesh3e1':'Step-by-step video',
        'apfeaturespe1':'Straightforward explanations with real-life examples.',
        'apfeaturesh3e2':'📂 Ready-to-use templates',
        'apfeaturespe2':'Downloadable automations ready to use right away.',
        'apfeaturesh3e3':'📑 Quick guides',
        'apfeaturespe3':'Practical resources to clear up questions in just minutes.',
        'apcomparativetitulo':'Why not on YouTube?',
        'aptatableth1':'YouTube',
        'aptatableth2':'Practical academy',
        'aptabletd1row1':'Unorganized standalone videos',
        'aptabletd2row1':'Well-organized content that\’s easy to follow',
        'aptabletd1row2':'Many are outdated',
        'aptabletd2row2':'Up-to-date material at all times',
        'aptabletd1row3':'No pre-made templates',
        'aptabletd2row3':'Automations available for direct download',
        'aptabletd1row4':'Dependence on YouTube\’s algorithm',
        'aptabletd2row4':'Direct access, without distractions',
        'applanstitulo':'Subscription Plans',
        'apfreesuscription':'Free',
        'appaysuscription':'Subscription',
        'applanprice':'<strong>5 €/month</strong> or <strong>40 €/year</strong>',
        'applanul1li':'✅ 2 preview videos',
        'applanul2li':'✅ 1 ready-to-use template',
        'apbtnfree':'Try it for free',
        'applan2ul1li':'🔥 Get full access to the entire catalog',
        'applan2ul2li':'🔥 Fresh resources every month',
        'applan2ul3li':'🔥 Members-only community',
        'apbtnpay':'Get access now',
        'aphelpacademiah2':'Do you need help?',
        'aphelpacademia1p':'In addition to the videos and downloadable resources, you will have a space <strong>to ask questions and request guidance</strong>. If an automation needs to be adapted to your account or project, you can ask and we will guide you so that you solve it yourself.',
        'aphelpacademia2p':'<em>⚠️ Note:</em> The help is guidance and orientation, not the full execution of projects.',
       
        // Cursos
        'p2titulocursos': '¡ Learn with Us !',
        'p2subtitulocursos': 'Pages, courses and useful links',
        'p2parrafocursos': 'In this section, you will find pages of interest designed to bring you closer to the world of Artificial Intelligence and process automation in companies. Here, you can learn basic concepts, access relevant news, and discover training resources. This is a dynamic page that will gradually grow, adding new content and useful links, so you can always stay up to date with the latest developments and advancements in this field.',
        'cursos-ianinos-title': 'AI for kids',
        'cursos-ianinos-desc': 'Click here and enter a little page made for kids, where you will easily discover what artificial intelligence is. It’s just a few small things to help you get familiar, and at the end a fun mini quiz is waiting for you to test what you’ve learned.',
        'cursos-autproc-title': 'Process automation',
        'cursos-autproc-desc': 'This section is a simple introduction to process automation and artificial intelligence in business. It is designed for those who want to start getting familiar with these topics, with basic explanations and clear examples. At the end, you will find a small quiz to test what you have learned.',

        // Servicios
        'service-automation-title': 'Process Automation',
        'service-automation-desc': 'We connect your tools (CRM, email, billing, inventory) to work in automatic synchronization.',
        'service-automation-roi': 'Average ROI: 400%',
        
        'service-marketing-title': 'Automated Marketing',
        'service-marketing-desc': 'Email sequences, lead scoring, automatic segmentation and lead nurturing.',
        'service-marketing-roi': '+150% qualified leads',
        
        'service-reports-title': 'Smart Reports',
        'service-reports-desc': 'Automatic dashboards that consolidate data from multiple sources for real data-driven decisions.',
        'service-reports-roi': '5x faster decisions',

        'service-web-title': 'Website development',
        'service-web-desc': 'We design and develop fast, secure websites adapted to any device, optimized to attract and convert customers.',
        'service-web-roi': 'Delivered in record time and SEO-ready',

        'service-ai-title': 'Artificial intelligence',
        'service-ai-desc': 'We implement AI solutions that automate tasks, analyze data, and improve decision-making in your business.',
        'service-ai-roi': 'Up to 60% more operational efficiency',

        'service-school-title': 'Corporate training',
        'service-school-desc': 'Customized training programs for teams, focused on technology, sales, and productivity.',
        'service-school-roi': 'Practical learning with immediate results',

        // Proceso
        'step-1-title': 'Free Audit',
        'step-1-desc': 'We analyze your current processes and identify automation opportunities',
        'step-2-title': 'Custom Proposal',
        'step-2-desc': 'We design the specific solution with calculated ROI and implementation timelines',
        'step-3-title': 'Implementation',
        'step-3-desc': 'We configure and test all automations without interrupting your operation',
        'step-4-title': 'Ongoing Support',
        'step-4-desc': 'Monitoring, optimization and team training to maximize results',

        // Testimoniales
        'testimonial-1-text': '"We automated the quotation and follow-up process. Now we generate 3 times more proposals with the same team."',
        'testimonial-1-author': '— Elena Martínez, CEO TechSolutions',
        'testimonial-1-results': '✅ 15 weekly hours saved\n✅ 200% more quotes sent\n✅ 450% ROI in 6 months',

        'testimonial-2-text': '"Inventory and billing automation eliminated errors and accelerated our cash flow."',
        'testimonial-2-author': '— Carlos Ruiz, Commercial Director InnovaRetail',
        'testimonial-2-results': '✅ 0% inventory errors\n✅ 24/7 automatic billing\n✅ 40% improved cash flow',

        // Productes Destacats

        'featuredTitle': "⭐ Featured AI products",

        'gadget1Tag': "IA wearable",
        'gadget1Title': "AI-powered smart glasses",
        'gadget1Text': "Smart glasses with real-time translation, AI assistants and voice control features. An interesting example of how artificial intelligence is becoming integrated into everyday devices and hands-free experiences.",

        'gadget2Tag': "IA wearable",
        'gadget2Title': "AI-powered translation earbuds",
        'gadget2Text': "AI-powered earbuds capable of translating conversations in real time across multiple languages. A practical example of how artificial intelligence is starting to remove communication barriers in travel, meetings and international work.",

        'product3Tag': "Productivity",
        'product3Title': "AI device that records, transcribes and summarizes automatically",
        'product3Text': "Record meetings, convert audio into text and generate summaries automatically using artificial intelligence. A practical tool to save time, organize ideas and avoid losing important information.",

        'amazonButton': "View on Amazon",

        'featuredProductsMore': "View more products",

        // Calculadora
        'calc-title-pain': '💸 YOU\'RE LOSING:',
        'calc-title-gain': '🚀 WITH AUTOMATION:',
        'calc-annual-savings': 'Annual savings:',
        'calc-roi-projected': 'Projected ROI:',
        'calc-cta-button': '🎯 I want to recover this money',
        'calc-hours-label': '⏰ Weekly hours on repetitive tasks (per employee):',
        'calc-cost-label': '💰 Average cost per hour (€):',
        'calc-employees-label': '👥 Employees doing these tasks:',

        // Formulario de contacto
        'contact-name-label': 'Full name *',
        'contact-email-label': 'Business email *',
        'contact-phone-label':'Phone *',
        'contact-company-label': 'Company *',
        'contact-employees-label': 'Number of employees',
        'contact-employees-selecciona':'Select...',
        'contact-employees-1-10': '1-10 employees',
        'contact-employees-11-50': '11-50 employees',
        'contact-employees-51-200': '51-200 employees', 
        'contact-employees-200+': 'More than 200 employees',
        'contact-challenge-label': 'Main challenge you want to automate *',
        'contact-form-type': 'Consultation type',
        'contact-opction0':'General automation assessment',
        'contact-opction1':'Specific process automation',
        'contact-opction2':'Automated marketing',
        'contact-opction3':'Reports and dashboards',
        'contact-opction4':'Integrations between tools',
        'contact-opction5':'Other (please specify in comments)',

        'contact-challenge-placeholder': 'Ex.: Lead management, billing, reports, customer follow-up...',
        'contact-response-time': '⏱️ Response within 2 business hours',

        // Calendario
        'calendar-title-select': 'Select a day',
        'calendar-Button-Prev':'Previous',
        'calendar-Button-Next':'Next',
        'calendar-selected-date-title': 'Time slots for',
        'calendar-subtitle': 'Select the day and time that works best for your video consultation',
        'calendar-modality': '📺 Mode: Video conference (1 hour)',
        'calendar-schedule': '🕒 Schedule: Monday to Friday, 9:00-14:00 and 15:00-19:00',
        'calendar-timezone': '🌍 Timezone: Spain (Madrid)',

        // vCard
        'vcard-title': 'Nexautia.com - We improve productivity in your business',
        'vcard-email': '📧 contacto@nexautia.com',
        'vcard-phone': '📱 +34 610 510 642', 
        'vcard-website': '🌐 www.nexautia.com',
        'vcard-location': '📍 Barcelona, Spain',
        'vcard-download-text': '📱 Download contact',
        'vcard-call-text': '📞 Call now',
        'vcard-email-text': '✉️ Send email',

        // Footer
        'footer-text1': '© 2025 Nexautia. Transforming businesses with intelligent automation.',
        'footer-text2': 'Created with ❤️ by Nexautia for knowledge transfer',
        'footer-text3': 'Keep exploring the incredible world of business automation and Artificial Intelligence!',
        'footer-text4': 'This project starts with a solid base of resources, and each month we’ll add new practical, up-to-date content. The goal is to create <strong>a powerful and useful space</strong> for anyone who wants to truly master automation. 🙌',
        

        // Navigation
        'nav-servicios': 'Services',
        'nav-proceso': 'Process', 
        'nav-casos': 'Success Stories',
        'nav-calculadora':"ROI calculator",
        'nav-tarjeta':"Business card",
        'nav-calendario': 'Book Appointment',
        'nav-contacto': 'Contact',
        'nav-aprende':'Learn with us',
        'nav-ejemplos':'Practical academy',
        'nav-compra':'Recommended Products',
        
        // Calendar - Months
        'month-0': 'January',
        'month-1': 'February',
        'month-2': 'March',
        'month-3': 'April', 
        'month-4': 'May',
        'month-5': 'June',
        'month-6': 'July',
        'month-7': 'August',
        'month-8': 'September',
        'month-9': 'October',
        'month-10': 'November',
        'month-11': 'December',
        
        // Calendar - Days
        'day-header-0': 'Mon',
        'day-header-1': 'Tue',
        'day-header-2': 'Wed',
        'day-header-3': 'Thu',
        'day-header-4': 'Fri',
        'day-header-5': 'Sat',
        'day-header-6': 'Sun',
        
        // Chatbot
        'chatbot-title': 'Automation Consultant',
        'chatbot-placeholder': 'Ask me about automation...',
        'chatbot-send': 'Send',
        'quick-tiempo': '⏰ Time Saved',
        'quick-costo': '💰 Cost/ROI',
        'quick-procesos': '🔧 What to Automate',
        'quick-llamada': '📞 Free Call',
        'chatbot-welcome': 'Hello! I\'m {name}, automation specialist. How can I help you optimize your business?',
        'consulting-analize':'Analyzing your query...',
        'errormessage2':'Sorry, I couldn\'t process your request. Could you please try again?',

        
        // Quick buttons - messages
        'quick-tiempo-msg': 'How much time can I save by automating?', 
        'quick-costo-msg': 'What\'s the cost of automating my processes?',
        'quick-procesos-msg': 'What processes can I automate in my business?',
        'quick-llamada-msg': 'I want to schedule a free call',
        
        // Calculator
        'calc-no-slots': 'No time slots available for this day',
        'calc-select-day': '👆 Select a day on the calendar to see available time slots',
        
        // Forms
        'loading-appointment': 'Processing your appointment...',
        'appointment-confirmed': 'Appointment Confirmed!',
        'appointment-email-sent': 'We\'ve sent your appointment details to',
        'appointment-email-includes': 'You\'ll receive an email with:',
        'appointment-email-confirmation': '✅ Date and time confirmation',
        'appointment-email-link': '📺 Video conference link',
        'appointment-email-reminder': '📋 24h reminder',
        'appointment-email-cancel': '🔗 Cancel/reschedule option',
        'appointment-thanks': '👍 Perfect, thanks',
        
        // VCard
        'vcard-downloaded': '📱 Contact Downloaded',
        'vcard-description': 'The contact file (.vcf) has been downloaded to your device.<br>If your system can\'t open it automatically, you can use these alternatives:',
        'vcard-download-txt': '📄 Download as TXT',
        'vcard-copy-clipboard': '📋 Copy to Clipboard',
        'vcard-understood': '✅ Got it',
        'vcard-copied': 'Data copied to clipboard!',
        
        // Success/error messages
        'form-sending': '⏳ Sending...',
        'form-sent': '✅ Sent!', 
        'form-error': '❌ Error, please try again',
        'request-sent': 'Request Sent!',
        'request-thanks': 'Thank you {name}. We\'ve received your free diagnosis request.<br><strong>We\'ll contact you within 2 business hours.</strong>',
        'connection-error': 'Connection Error',
        'connection-error-msg': 'We couldn\'t send your request.<br>Please try again or contact us directly.',
        
        // Analytics
        'analytics-title': '📊 REAL-TIME ANALYTICS',
        'analytics-version': 'A/B Version:',
        'analytics-visitor': '👤 Visitor:',
        'analytics-cta-clicks': '🎯 CTA Clicks:',
        'analytics-conversions': '📝 Conversions:',
        'analytics-conversions-note': '(forms submitted)',
        'analytics-time': '⏱️ Time:',
        'analytics-heatmap': '🔥 Heatmap clicks:',
        'analytics-vcard': '📱 vCard Downloads:',
        'analytics-switch-text': '🔄 Switch A/B Version',
        'analytics-report-text': '📊 View Detailed Report',
        'headline-a': 'Automate and Save 20h/week on Manual Processes',
        'headline-b': 'Eliminate 90% of Repetitive Tasks in Your Business',
        'subtitle-a': 'We transform companies with intelligent automations that eliminate repetitive tasks, reduce errors and increase productivity by up to 300%.',
        'subtitle-b': 'Free your team from manual work with automations that work 24/7. Reduce human errors and multiply your productivity without hiring more staff.',
        'primary-cta-a': 'Free Diagnosis',
        'primary-cta-b': 'Free Analysis',
        'secondary-cta-a': 'View Success Cases',
        'secondary-cta-b': 'Real Examples',
        'form-cta-a': 'Request Free Diagnosis',
        'form-cta-b': 'I Want My Free Analysis',
        'calc-annual-loss': 'per year',
        'calc-field-hours': 'hours/employee',
        'calc-field-cost': '€/hour',
        'calc-field-employees-singular': 'employee',
        'calc-field-employees-plural': 'employees',
        'calc-validation-hours': 'Please enter the weekly hours',
        'calc-validation-cost': 'Please enter the cost per hour',
        'calc-validation-employees': 'Please enter the number of employees',

         // Analytics faltantes
         'analytics-cta-note': '💡 CTAs = All important buttons',
         'analytics-conversions-detail': '💡 Conversions = Only submitted forms',        
         
         // Calculadora faltantes
         'calc-annual-savings-label': 'Annual savings:',

         // Calendario faltantes
         'calendar-select-day': 'Select a day in the calendar to see available time slots',
         'calendar-processing': 'Processing your appointment...',
         
         // Formulario de cita faltantes
         'appointment-summary-title':'📝Appointment details',
         'appointment-summary-subtitle':'📅 Appointment summary',
         'appointment-summary-date':'Date:',
         'appointment-summary-time':'Time:',
         'appointment-summary-duration':'Duration:',
         'appointment-summary-1h':'1 hour',
         'appointment-summary-mode':'Mode:',
         'appointment-summary-videoconference':'Videoconference',
         'appointment-form-name': 'Full name',
         'appointment-form-email': 'Email',
         'appointment-form-phone': 'Phone',
         'appointment-form-company': 'Company',
         'appointment-form-employees': 'Number of employees',
        'appointment-employees0':'Select...',
        'appointment-employees1':'1-10 employees',
        'appointment-employees2':'11-50 employees',
        'appointment-employees3':'51-200 employees',
        'appointment-employees4':'More than 200 employees',
         'appointment-form-type': 'Consultation type',
         'appointment-opction0':'General automation assessment',
        'appointment-opction1':'Specific process automation',
        'appointment-opction2':'Automated marketing',
        'appointment-opction3':'Reports and dashboards',
        'appointment-opction4':'Integrations between tools',
        'appointment-opction5':'Other (please specify in comments)',
         'appointment-form-details': 'Briefly describe your situation or need',
         'appointment-form-placeholder':'E.g.: I need to automate the lead follow-up process from the CRM to the email marketing...',
         'appointment-form-confirm': '✅ Confirm',
         'appointment-form-cancel': '❌ Cancel', 

    }
};

let currentLanguage = 'es'; // Idioma por defecto (español)

// Función para obtener traducción
function t(key) {
    return translations[currentLanguage][key] || translations['es'][key] || key;
}

// Función para cambiar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateLanguageSelector();
    updateAllTranslations();
    
    trackEvent('language_change', { language: lang });
}
//CAMBIOS AÑADIDOS EL 04/08/2025
// =============================
// FUNCIÓN MEJORADA updateAllTranslations()  04/08/2025
// =============================

    // Función auxiliar mejorada para manejar variaciones de texto
    function updateElementText(selector, mappings) {
        const elements = document.querySelectorAll(selector);
        console.log(`🔍 Buscando elementos con selector: ${selector}`);
        console.log(`📊 Encontrados ${elements.length} elementos`);
        
        elements.forEach((element, index) => {
            const originalText = element.textContent.trim();
            console.log(`📝 Elemento ${index + 1}: "${originalText}"`);
            
            // Para enlaces de navegación, usar data-track
            if (element.hasAttribute('data-track')) {
                const trackKey = element.getAttribute('data-track');
                if (translations[currentLanguage][trackKey]) {
                    element.textContent = t(trackKey);
                    console.log(`✅ Traducido por data-track: ${trackKey}`);
                }
            } else {
                // Para otros elementos, usar el mapeo de texto con comparación flexible
                const currentText = element.textContent.trim();
                
                // Buscar coincidencia exacta primero
                if (mappings[currentText]) {
                    element.textContent = t(mappings[currentText]);
                    console.log(`✅ Traducido por coincidencia exacta: ${mappings[currentText]}`);
                } else {
                    // Si no hay coincidencia exacta, buscar coincidencia ignorando mayúsculas
                    const normalizedCurrentText = currentText.toLowerCase();
                    let translated = false;
                    
                    for (const [key, translationKey] of Object.entries(mappings)) {
                        if (key.toLowerCase() === normalizedCurrentText) {
                            element.textContent = t(translationKey);
                            console.log(`✅ Traducido por coincidencia flexible: ${translationKey}`);
                            translated = true;
                            break;
                        }
                    }
                    
                    if (!translated) {
                        console.log(`❌ No se encontró traducción para: "${currentText}"`);
                    }
                }
            }
        });
    }

function updateAllTranslations() {
    console.log('🔄 Iniciando actualización de traducciones...');
    console.log('🌍 Idioma actual:', currentLanguage);
    
    // 1. Navegación (ya funciona)
    updateElementText('nav a[data-track]', {
        'Servicios': 'nav-servicios',
        'Serveis': 'nav-servicios', 
        'Services': 'nav-servicios',
        'Proceso': 'nav-proceso',
        'Procés': 'nav-proceso',
        'Process': 'nav-proceso',
        'Casos de éxito': 'nav-casos',
        'Casos d\'èxit': 'nav-casos',
        'Success Stories': 'nav-casos',
        'Calculadora ROI': 'nav-calculadora',
        'Calculadora ROI': 'nav-calculadora',
        'ROI calculator': 'nav-calculadora',
        'Tarjeta visita': 'nav-tarjeta',
        'Targeta visita': 'nav-tarjeta',
        'Business card': 'nav-tarjeta',
        'Reservar cita': 'nav-calendario',
        'Book Appointment': 'nav-calendario',
        'Contacto': 'nav-contacto',
        'Contacte': 'nav-contacto',
        'Contact': 'nav-contacto'
        
    });

    // 2. Títulos de secciones   04/08/2024
    updateElementText('h2', {
        'Servicios especializados': 'services-title',        
        'Serveis especialitzats': 'services-title', 
        'Specialized Services': 'services-title',
        'Proceso garantizado en 4 pasos': 'process-title',
        'Procés garantit en 4 passos': 'process-title',
        'Guaranteed 4-Step Process': 'process-title',
        'Casos de éxito reales': 'cases-title',
        'Casos d\'èxit reals': 'cases-title',
        'Real Success Stories': 'cases-title',
        
    });  

  
    
    console.log("Se esmpiezan a ejecutar la llamadas a diferentes funciones");   
    // Actualizar textos A/B dinámicos
    updateABTexts();
    
    // Actualizar calculadora
    updateCalculatorTexts();    
    
    // Actualizar chatbot
    updateChatbotTranslations();
    
    // Actualizar calendario si está visible
    updateCalendarTranslations();
    
    // Actualizar analytics
    updateAnalyticsTranslations();
    updateABTexts();
    updateDynamicDisplay();
    updateChatbotWelcome();
    
    // Actualizar navegación móvil
    updateMobileNavigationTranslations();
    
    // Actualizar todas las secciones
    updateStatsSection();    
    updateServicesSection(); 
    updateAcademiaPractica();
    updateCursosSection();
    updateProcessSection();
    updateTestimonialsSection();
    updateCalculatorSection();
    updateAppointmentFormSection();
    updateCalendarSection();
    updateVCardSection();
    updateContactFormSection();    
    updateFooterSection();
    updateDateAppointment();
    calculateROI();
    updateHamburgerMenu ()     
    updateFeaturedProductsSection()
}

// Actualizar textos hardcodeados del calendario
const selectDayText = document.querySelector('.no-slots p');
if (selectDayText && selectDayText.innerHTML.includes('Selecciona un dia')) {
    selectDayText.innerHTML = t('calendar-select-day');
}

// Actualizar mensaje de bienvenida del chatbot
function updateChatbotWelcome() {
    const existingWelcome = document.querySelector('.message.bot');
    if (existingWelcome && currentAssistantName) {
        const welcomeText = t('chatbot-welcome').replace('{name}', currentAssistantName);
        existingWelcome.textContent = `${currentAssistantName}: ${welcomeText.split(': ')[1] || welcomeText}`;
    }
}



// Actualizar textos A/B Testing
function updateABTexts() {
    const headline = document.getElementById('main-headline');
    const subtitle = document.getElementById('main-subtitle');
    const primaryCTA = document.getElementById('primary-cta-text');
    const secondaryCTA = document.getElementById('secondary-cta-text');
    const formCTA = document.getElementById('form-cta-text');
    
    if (headline) headline.textContent = t(`headline-${currentVersion.toLowerCase()}`);
    if (subtitle) subtitle.textContent = t(`subtitle-${currentVersion.toLowerCase()}`);
    if (primaryCTA) primaryCTA.textContent = t(`primary-cta-${currentVersion.toLowerCase()}`);
    if (secondaryCTA) secondaryCTA.textContent = t(`secondary-cta-${currentVersion.toLowerCase()}`);
    if (formCTA) formCTA.textContent = t(`form-cta-${currentVersion.toLowerCase()}`);
}

// Actualizar textos de calculadora
function updateCalculatorTexts() {
    // Actualizar mensaje de campos vacíos si existe
    const generalError = document.querySelector('.general-error');
    if (generalError) {
        // Recrear el mensaje con la traducción correcta
        const emptyFields = []; // Obtener campos vacíos actuales
        showGeneralError(emptyFields);
    }
}

// Inicializar selector de idiomas con detección automática del navegador
function initializeLanguageSelector() {
    const currentLangBtn = document.getElementById('current-language');
    const dropdown = document.getElementById('language-dropdown');
    
    // Función para detectar el idioma del navegador
    function detectBrowserLanguage() {
        // Obtener el idioma principal del navegador
        const browserLang = navigator.language.substring(0, 2).toLowerCase();
        
        // Obtener todos los idiomas preferidos del navegador
        const browserLanguages = navigator.languages || [navigator.language];
        
        console.log('🌍 Idiomas del navegador detectados:', browserLanguages);
        console.log('🌍 Idioma principal:', browserLang);
        
        // Mapeo de códigos de idioma del navegador a nuestros códigos
        const languageMapping = {
            'es': 'es',    // Español
            'ca': 'ca',    // Catalán
            'en': 'en',    // Inglés
            'en-us': 'en', // Inglés US
            'en-gb': 'en', // Inglés UK
            'es-es': 'es', // Español España
            'es-mx': 'es', // Español México
            'es-ar': 'es', // Español Argentina
            'ca-es': 'ca', // Catalán España
            'ca-ad': 'ca'  // Catalán Andorra
        };
        
        // Buscar coincidencia exacta primero
        if (languageMapping[browserLang] && translations[languageMapping[browserLang]]) {
            console.log('✅ Coincidencia exacta encontrada:', browserLang, '→', languageMapping[browserLang]);
            return languageMapping[browserLang];
        }
        
        // Buscar en todos los idiomas preferidos del navegador
        for (const lang of browserLanguages) {
            const langCode = lang.substring(0, 2).toLowerCase();
            if (languageMapping[langCode] && translations[languageMapping[langCode]]) {
                console.log('✅ Coincidencia en idiomas preferidos:', langCode, '→', languageMapping[langCode]);
                return languageMapping[langCode];
            }
        }
        
        // Si no hay coincidencia, usar español por defecto
        console.log('⚠️ No se encontró coincidencia, usando español por defecto');
        return 'es';
    }
    
    // Recuperar idioma guardado o detectar automáticamente
    const savedLang = localStorage.getItem('preferredLanguage');
    
    if (savedLang && translations[savedLang]) {
        // Si hay un idioma guardado, usarlo
        currentLanguage = savedLang;
        console.log('💾 Usando idioma guardado:', savedLang);
    } else {
        // Si no hay idioma guardado, detectar automáticamente
        currentLanguage = detectBrowserLanguage();
        console.log('🌍 Idioma detectado automáticamente:', currentLanguage);
        
        // Guardar el idioma detectado para futuras visitas
        localStorage.setItem('preferredLanguage', currentLanguage);
    }
    
    updateLanguageSelector();
    
    // Toggle dropdown
    currentLangBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });
    
    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', () => {
        dropdown.classList.remove('show');
    });
    
    // Manejar selección de idioma
   // Manejar selección de idioma
dropdown.addEventListener('click', (e) => {
    const option = e.target.closest('.language-option');

    if (option) {
        const lang = option.getAttribute('data-lang');

        localStorage.setItem('preferredLanguage', lang);
        localStorage.setItem('language', lang);
        localStorage.setItem('Language', lang.toUpperCase());
        localStorage.setItem('Preferred Language', lang.toUpperCase());
        localStorage.setItem('selectedLanguage', lang);
        localStorage.setItem('currentLanguage', lang);

        changeLanguage(lang);
        dropdown.classList.remove('show');
    }
});
}

function updateLanguageSelector() {
    const currentLangBtn = document.getElementById('current-language');
    const options = document.querySelectorAll('.language-option');
    
    const langLabels = {
        'es': 'ES',
        'ca': 'CA', 
        'en': 'EN'
    };
    
    const flagImages = {
        'es': 'imagenes/bandera_espanola.png',
        'ca': 'imagenes/bandera_catalana.png',
        'en': 'imagenes/bandera_inglesa.png'
    };
    
    // Mostrar el idioma actual con las iniciales primero y la bandera después (más pequeña)
    currentLangBtn.innerHTML = `
        ${langLabels[currentLanguage]}
        <img src="${flagImages[currentLanguage]}" alt="${langLabels[currentLanguage]}" width="16" height="12" style="margin-left: 5px; vertical-align: middle;">
    `;    
    
    // Marcar opción activa
    options.forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-lang') === currentLanguage);
    });
    
    // Mostrar información en consola para debugging
    console.log('🌍 Selector de idioma actualizado:', currentLanguage);
}

// Actualizar traducciones del chatbot
function updateChatbotTranslations() {
    const title = document.getElementById('chatbot-title');
    const input = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send');
    
    if (title) title.textContent = t('chatbot-title');
    if (input) input.placeholder = t('chatbot-placeholder');
    if (sendBtn) sendBtn.textContent = t('chatbot-send');
    
    // Actualizar botones rápidos
    document.querySelectorAll('.quick-btn').forEach(btn => {
        const trackId = btn.getAttribute('data-track');
        if (trackId && translations[currentLanguage][trackId]) {
            btn.innerHTML = t(trackId);
            // Actualizar también el mensaje
            btn.setAttribute('data-message', t(trackId + '-msg'));
        }
    });
}

// Actualizar traducciones del calendario
function updateCalendarTranslations() {
    // Actualizar encabezados de días
    const dayHeaders = document.querySelectorAll('.calendar-day-header');
    dayHeaders.forEach((header, index) => {
        header.textContent = t(`day-header-${index}`);
    });
    
    // Actualizar mes actual
    updateCalendarDisplay();
    
    // Actualizar textos de slots
    const noSlotsDiv = document.querySelector('.no-slots p');
    if (noSlotsDiv) {
        noSlotsDiv.innerHTML = t('calc-select-day');
    }
}

// Actualizar traducciones de analytics
function updateAnalyticsTranslations() {
    const analyticsPanel = document.querySelector('.analytics-panel');
    if (!analyticsPanel) return;
    
    const elements = analyticsPanel.children;
    if (elements[0]) elements[0].innerHTML = `<strong>${t('analytics-title')}</strong>`;
    if (elements[1]) elements[1].innerHTML = `${t('analytics-version')} <span id="current-version">${currentVersion}</span>`;
    if (elements[2]) elements[2].innerHTML = `${t('analytics-visitor')} <span id="visitors-count">${analytics.visitors}</span>`;
    if (elements[3]) elements[3].innerHTML = `${t('analytics-cta-clicks')} <span id="cta-clicks">${analytics.ctaClicks}</span><br><small style="opacity: 0.7;">${t('analytics-cta-note')}</small>`;
    if (elements[4]) elements[4].innerHTML = `${t('analytics-conversions')} <span id="conversions">${analytics.conversions}</span><br><small style="opacity: 0.7;">${t('analytics-conversions-detail')}</small>`;
    if (elements[5]) elements[5].innerHTML = `${t('analytics-time')} <span id="avg-time">${Math.floor((Date.now() - startTime) / 1000)}s</span>`;
    if (elements[6]) elements[6].innerHTML = `${t('analytics-heatmap')} <span id="heatmap-clicks">${analytics.heatmapClicks.length}</span>`;
    if (elements[7]) elements[7].innerHTML = `${t('analytics-vcard')} <span id="vcard-downloads">${analytics.vcardDownloads || 0}</span>`;
    
     // Actualizar Mensajes notas
     const helper1 = analyticsPanel.querySelector('#helper');
     if (helper1) helper1.textContent = t('analytics-cta-note');
     const helper2 = analyticsPanel.querySelector('#helper');
     if (helper2) helper2.textContent = t('analytics-conversions-detail');

     
    // Actualizar botones
    const switchBtn = analyticsPanel.querySelector('button[onclick="switchABVersion()"]');
    if (switchBtn) switchBtn.textContent = t('analytics-switch-text');
    
    const reportBtn = analyticsPanel.querySelector('button[onclick="showHeatmapReport()"]');
    if (reportBtn) reportBtn.textContent = t('analytics-report-text');
}

            // =============================
            // VCARD FUNCTIONALITY
            // =============================
            function downloadVCard() {
                const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:AutomatizaPro - Consultor en Automatización
ORG:AutomatizaPro
TITLE:Especialista en Automatización Empresarial
TEL;TYPE=WORK,VOICE:+34900123456
EMAIL;TYPE=WORK:contacto@automatizapro.com
URL:https://www.automatizapro.com
ADR;TYPE=WORK:;;Madrid;Madrid;;28001;España
NOTE:Automatizamos procesos empresariales para ahorrar tiempo y reducir errores. Diagnóstico gratuito + ROI garantizado en 30 días.
END:VCARD`;

                // Intentar descarga como .vcf
                const dataUri =
                    "data:text/vcard;charset=utf-8," +
                    encodeURIComponent(vCardData);
                const link = document.createElement("a");
                link.href = dataUri;
                link.download = "AutomatizaPro-Contacto.vcf";
                link.style.position = "absolute";
                link.style.left = "-9999px";

                document.body.appendChild(link);
                link.click();

                // Mostrar opciones inmediatamente
                setTimeout(() => {
                    document.body.removeChild(link);
                    showContactOptions(vCardData);
                }, 100);

                // Analytics
                trackEvent("vcard_download", {
                    version: currentVersion,
                    timestamp: Date.now(),
                });

                analytics.vcardDownloads = (analytics.vcardDownloads || 0) + 1;
                updateAnalyticsPanel();
            }

            function showContactOptions(vCardData) {
                const modal = document.createElement("div");
                modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

                modal.innerHTML = `
    <div style="background: white; padding: 2rem; border-radius: 12px; max-width: 500px; text-align: center;">
        <h3 style="margin-bottom: 1rem;">📱 Contacto Descargado</h3>
        <p style="margin-bottom: 1.5rem; line-height: 1.5;">
            Se ha descargado el archivo de contacto (.vcf) en tu equipo.<br>
            Si tu sistema no puede abrirlo automáticamente, puedes usar estas alternativas:
        </p>
        
        <button onclick="downloadAsText()" style="background: #0066cc; color: white; border: none; padding: 0.75rem 1rem; border-radius: 8px; margin: 0.5rem; cursor: pointer;">
            📄 Descargar como TXT
        </button>
        
        <button onclick="copyToClipboard()" style="background: #00d4aa; color: white; border: none; padding: 0.75rem 1rem; border-radius: 8px; margin: 0.5rem; cursor: pointer;">
            📋 Copiar al Portapapeles
        </button>
        
        <button onclick="closeModal()" style="background: #ccc; color: #333; border: none; padding: 0.75rem 1rem; border-radius: 8px; margin: 0.5rem; cursor: pointer;">
            ✅ Entendido
        </button>
    </div>
`;

                // Funciones para los botones
                window.downloadAsText = function () {
                    const link = document.createElement("a");
                    link.href =
                        "data:text/plain;charset=utf-8," +
                        encodeURIComponent(vCardData);
                    link.download = "AutomatizaPro-Contacto.txt";
                    link.click();
                    document.body.removeChild(modal);
                };

                window.copyToClipboard = function () {
                    navigator.clipboard
                        .writeText(
                            `AutomatizaPro - Consultor en Automatización
📧 contacto@automatizapro.com
📞 +34 900 123 456
🌐 www.automatizapro.com
📍 Madrid, España`
                        )
                        .then(() => {
                            alert("¡Datos copiados al portapapeles!");
                            document.body.removeChild(modal);
                        });
                };

                window.closeModal = function () {
                    document.body.removeChild(modal);
                };

                document.body.appendChild(modal);
            }
            function showVCardConfirmation() {
                const confirmation = document.createElement("div");
                confirmation.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(135deg, var(--primary), var(--secondary));
                    color: white;
                    padding: 1.5rem 2rem;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    z-index: 10000;
                    text-align: center;
                    max-width: 90%;
                    animation: slideIn 0.3s ease-out;
                `;

                confirmation.innerHTML = `
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">📱</div>
                    <h3 style="margin-bottom: 0.5rem;">¡Contacto Descargado!</h3>
                    <p style="opacity: 0.9; font-size: 0.9rem;">
                        Ya tienes nuestros datos en tu agenda.<br>
                        ¡Llámanos cuando quieras!
                    </p>
                `;

                document.body.appendChild(confirmation);

                // Remover después de 3 segundos
                setTimeout(() => {
                    confirmation.style.animation =
                        "slideOut 0.3s ease-in forwards";
                    setTimeout(() => {
                        if (confirmation.parentNode) {
                            confirmation.parentNode.removeChild(confirmation);
                        }
                    }, 300);
                }, 3000);
            }

            // Añadir estilos para las animaciones de confirmación
            const style = document.createElement("style");
            style.textContent = `
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
                
                @keyframes slideOut {
                    from {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                    to {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0.8);
                    }
                }
                
                @keyframes blink {
                    0%, 50% {
                        opacity: 1;
                    }
                    51%, 100% {
                        opacity: 0.3;
                    }
                }
            `;
            document.head.appendChild(style);

            // =============================
            // A/B TESTING SYSTEM
            // =============================
            const ABTestVersions = {
                A: {
                    headline:
                        "Automatiza y Ahorra 20h/semana en Procesos Manuales",
                    subtitle:
                        "Transformamos empresas con automatizaciones inteligentes que eliminan tareas repetitivas, reducen errores y aumentan la productividad hasta un 300%.",
                    primaryCTA: "Diagnóstico Gratuito",
                    secondaryCTA: "Ver Casos de Éxito",
                    formCTA: "Solicitar Diagnóstico Gratuito",
                },
                B: {
                    headline:
                        "Elimina el 90% de Tareas Repetitivas en Tu Empresa",
                    subtitle:
                        "Libera a tu equipo de trabajo manual con automatizaciones que funcionan 24/7. Reduce errores humanos y multiplica tu productividad sin contratar más personal.",
                    primaryCTA: "Análisis Gratuito",
                    secondaryCTA: "Ejemplos Reales",
                    formCTA: "Quiero Mi Análisis Gratis",
                },
            };

            let currentVersion = "A";
            let startTime = Date.now();

            // Seleccionar versión aleatoria para nuevos visitantes
            function initializeABTest() {
                const savedVersion = sessionStorage.getItem("abTestVersion");
                if (!savedVersion) {
                    currentVersion = Math.random() < 0.5 ? "A" : "B";
                    sessionStorage.setItem("abTestVersion", currentVersion);
                } else {
                    currentVersion = savedVersion;
                }

                applyABTestVersion(currentVersion);
                updateAnalyticsPanel();
            }

            function applyABTestVersion(version) {
                currentVersion = version; // Asegurar que currentVersion esté actualizado
                
                // Aplicar traducciones A/B
                const headline = document.getElementById('main-headline');
                const subtitle = document.getElementById('main-subtitle');
                const primaryCTA = document.getElementById('primary-cta-text');
                const secondaryCTA = document.getElementById('secondary-cta-text');
                const formCTA = document.getElementById('form-cta-text');
                
                if (headline) headline.textContent = t(`headline-${version.toLowerCase()}`);
                if (subtitle) subtitle.textContent = t(`subtitle-${version.toLowerCase()}`);
                if (primaryCTA) primaryCTA.textContent = t(`primary-cta-${version.toLowerCase()}`);
                if (secondaryCTA) secondaryCTA.textContent = t(`secondary-cta-${version.toLowerCase()}`);
                if (formCTA) formCTA.textContent = t(`form-cta-${version.toLowerCase()}`);
            
                // Trackear la versión mostrada
                trackEvent('ab_test_shown', { version: version });
            }

            function switchABVersion() {
                currentVersion = currentVersion === "A" ? "B" : "A";
                sessionStorage.setItem("abTestVersion", currentVersion);
                applyABTestVersion(currentVersion);
                updateAnalyticsPanel();
                trackEvent("manual_version_switch", {
                    newVersion: currentVersion,
                });
            }

            // =============================
            // HEATMAP SYSTEM MEJORADO
            // =============================
            let heatmapData = [];
            let scrollDepth = 0;
            let maxScroll = 0;

            function initializeHeatmap() {
                // Trackear clics con mejor detección
                document.addEventListener("click", function (e) {
                    // Buscar el elemento con data-track más cercano
                    let targetElement = e.target;
                    let trackingId = targetElement.getAttribute("data-track");

                    // Si no tiene data-track, buscar en elementos padre
                    if (!trackingId) {
                        let parent = targetElement.closest("[data-track]");
                        if (parent) {
                            trackingId = parent.getAttribute("data-track");
                            targetElement = parent;
                        }
                    }

                    const isImportantElement =
                        trackingId ||
                        targetElement.tagName === "BUTTON" ||
                        targetElement.tagName === "A" ||
                        targetElement.classList.contains("btn") ||
                        targetElement.classList.contains("card") ||
                        targetElement.closest(".btn") ||
                        targetElement.closest("button") ||
                        targetElement.closest("a");

                    // Solo crear heatmap para elementos importantes
                    if (isImportantElement) {
                        const x = e.clientX;
                        const y = e.clientY + window.scrollY;

                        // Crear efecto visual del heatmap
                        createHeatmapDot(x, y);

                        // Guardar datos del heatmap
                        const heatmapClick = {
                            x: x,
                            y: y,
                            element: targetElement.tagName,
                            className: targetElement.className,
                            trackingId: trackingId,
                            timestamp: Date.now(),
                            version: currentVersion,
                        };

                        analytics.heatmapClicks.push(heatmapClick);
                        console.log(
                            "🔥 Heatmap click registrado:",
                            trackingId || targetElement.tagName
                        );
                    }

                    // SIEMPRE trackear clics con data-track
                    if (trackingId) {
                        console.log("🎯 Tracking click en:", trackingId);
                        trackEvent("click", {
                            element: trackingId,
                            version: currentVersion,
                            x: e.clientX,
                            y: e.clientY + window.scrollY,
                        });
                    }
                });

                // Trackear scroll depth
                window.addEventListener("scroll", function () {
                    const winHeight = window.innerHeight;
                    const docHeight = document.documentElement.scrollHeight;
                    const scrollTop = window.pageYOffset;
                    const trackLength = docHeight - winHeight;
                    const pctScrolled = Math.floor(
                        (scrollTop / trackLength) * 100
                    );

                    if (pctScrolled > maxScroll) {
                        maxScroll = pctScrolled;
                        if (maxScroll % 25 === 0) {
                            trackEvent("scroll_depth", {
                                depth: maxScroll,
                                version: currentVersion,
                            });
                        }
                    }
                });
            }

            function createHeatmapDot(x, y) {
                const dot = document.createElement("div");
                dot.className = "heatmap-click";
                dot.style.left = x - 15 + "px";
                dot.style.top = y - 15 + "px";
                dot.style.width = "30px";
                dot.style.height = "30px";

                document.body.appendChild(dot);

                // Remover después de la animación
                setTimeout(() => {
                    if (dot.parentNode) {
                        dot.parentNode.removeChild(dot);
                    }
                }, 2000);
            }

            // =============================
            // ANALYTICS TRACKING
            // =============================
            let analytics = {
                visitors: 1,
                ctaClicks: 0,
                conversions: 0,
                vcardDownloads: 0,
                events: [],
                heatmapClicks: [],
            };

            // Actualizar panel cada segundo
            let analyticsInterval = setInterval(updateAnalyticsPanel, 1000);

            function trackEvent(eventName, data = {}) {
                const event = {
                    name: eventName,
                    timestamp: Date.now(),
                    version: currentVersion,
                    ...data,
                };

                analytics.events.push(event);

                // Actualizar contadores específicos de forma más precisa
                if (eventName === "click") {
                    // Contar TODOS los CTAs (botones importantes)
                    if (
                        data.element === "cta-primary" ||
                        data.element === "cta-secondary" ||
                        data.element === "form-submit-btn" ||
                        data.element === "chatbot-open" ||
                        data.element === "vcard-download" ||
                        data.element === "vcard-call" ||
                        data.element === "vcard-email" ||
                        (data.element && data.element.includes("cta"))
                    ) {
                        analytics.ctaClicks++;
                        console.log(
                            "🎯 CTA Click detectado:",
                            data.element,
                            "Total CTAs:",
                            analytics.ctaClicks
                        );
                    }
                }

                if (eventName === "form_submit") {
                    analytics.conversions++;
                    console.log(
                        "🎉 CONVERSIÓN (formulario enviado)! Total:",
                        analytics.conversions
                    );
                }

                updateAnalyticsPanel();

                // Log detallado para debug
                console.log("📊 Event tracked:", eventName, data);
            }

            function updateAnalyticsPanel() {
                const avgTime = Math.floor((Date.now() - startTime) / 1000);

                document.getElementById("current-version").textContent =
                    currentVersion;
                document.getElementById("visitors-count").textContent =
                    analytics.visitors;
                document.getElementById("cta-clicks").textContent =
                    analytics.ctaClicks;
                document.getElementById("conversions").textContent =
                    analytics.conversions;
                document.getElementById("avg-time").textContent = avgTime + "s";
                document.getElementById("heatmap-clicks").textContent =
                    analytics.heatmapClicks.length;
                document.getElementById("vcard-downloads").textContent =
                    analytics.vcardDownloads || 0;
            }

            function toggleAnalytics() {
                const panel = document.getElementById("analytics-panel");
                panel.classList.toggle("show");
            }

            function showHeatmapReport() {
                const report = `
=== 📊 REPORTE DE ANALYTICS ===

🎯 VERSIÓN A/B ACTUAL: ${currentVersion}
👤 TIEMPO EN PÁGINA: ${Math.floor((Date.now() - startTime) / 1000)}s
📊 TOTAL EVENTOS: ${analytics.events.length}

🔥 HEATMAP DATOS (${analytics.heatmapClicks.length} clics importantes):
${
    analytics.heatmapClicks
        .map(
            (click, i) =>
                `${i + 1}. ${click.trackingId || click.element} - ${new Date(
                    click.timestamp
                ).toLocaleTimeString()}`
        )
        .join("\n") || "No hay clics registrados aún"
}

🎯 EVENTOS CTA:
${
    analytics.events
        .filter(
            (e) =>
                e.name === "click" &&
                (e.element === "cta-primary" ||
                    e.element === "cta-secondary" ||
                    e.element === "form-submit-btn" ||
                    e.element === "vcard-download")
        )
        .map(
            (event, i) =>
                `${i + 1}. ${event.element} - ${new Date(
                    event.timestamp
                ).toLocaleTimeString()}`
        )
        .join("\n") || "No hay clics en CTAs aún"
}

📱 DESCARGAS VCARD: ${analytics.vcardDownloads || 0}
${
    analytics.events
        .filter((e) => e.name === "vcard_download")
        .map(
            (event, i) =>
                `${i + 1}. vCard descargada - ${new Date(
                    event.timestamp
                ).toLocaleTimeString()}`
        )
        .join("\n") || "No hay descargas de vCard aún"
}

📝 CONVERSIONES:
${
    analytics.events
        .filter((e) => e.name === "form_submit")
        .map(
            (event, i) =>
                `${i + 1}. Formulario enviado - ${new Date(
                    event.timestamp
                ).toLocaleTimeString()}`
        )
        .join("\n") || "No hay conversiones aún"
}

🔍 TODOS LOS EVENTOS:
${analytics.events
    .slice(-10)
    .map(
        (event, i) =>
            `${event.name} - ${event.element || "N/A"} - ${new Date(
                event.timestamp
            ).toLocaleTimeString()}`
    )
    .join("\n")}
                `;

                alert(report);
                console.log("📊 REPORTE COMPLETO:", analytics);
            }

// =============================
// CHATBOT SYSTEM - VERSIÓN MEJORADA
// =============================
const assistantNames = ["Ana", "Carlos", "María", "David"];
let currentAssistantName = "";

function selectAssistantForSession() {
    const savedIndex = Math.floor(Math.random() * assistantNames.length);
    currentAssistantName = assistantNames[savedIndex];
    return currentAssistantName;
}

const chatbotBtn = document.getElementById("chatbot-btn");
const chatbotContainer = document.getElementById("chatbot-container");
const chatbotClose = document.getElementById("chatbot-close");
const messagesContainer = document.getElementById("chatbot-messages");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotSend = document.getElementById("chatbot-send");

// Desactivar Send por defecto
if (chatbotSend) {
    chatbotSend.disabled = true;
}

// Activar Send solo si hay texto en el input
if (chatbotInput) {
    chatbotInput.addEventListener("input", () => {
        if (chatbotSend) {
            chatbotSend.disabled = chatbotInput.value.trim() === "";
        }
    });
}

if (chatbotBtn && chatbotContainer) {
    chatbotBtn.addEventListener("click", () => {
        chatbotContainer.style.display =
            chatbotContainer.style.display === "flex" ? "none" : "flex";
        if (typeof trackEvent !== 'undefined') {
            trackEvent("chatbot_toggle", {
                action: chatbotContainer.style.display,
            });
        }
    });
}

if (chatbotClose && chatbotContainer) {
    chatbotClose.addEventListener("click", () => {
        chatbotContainer.style.display = "none";
        if (typeof trackEvent !== 'undefined') {
            trackEvent("chatbot_close");
        }
    });
}

function appendMessage(sender, text, isTyping = false) {
    if (!messagesContainer) return;
    
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${sender}`;

    if (sender === "bot") {
        const currentName = currentAssistantName || "Asistente";
        const nameSpan = document.createElement("span");
        nameSpan.style.fontWeight = "bold";
        nameSpan.style.color = "var(--primary, #007bff)";
        nameSpan.textContent = `${currentName}: `;
        
        const textSpan = document.createElement("span");
        textSpan.className = "message-content";
        
        msgDiv.appendChild(nameSpan);
        msgDiv.appendChild(textSpan);
        
        if (!isTyping) {
            // Formatear el texto con HTML
            textSpan.innerHTML = formatMessage(text);
        } else {
            textSpan.textContent = text;
        }
    } else {
        msgDiv.textContent = `Tú: ${text}`;
    }

    if (isTyping) {
        msgDiv.classList.add("typing-indicator");
        msgDiv.id = "typing-message";
    }

    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return msgDiv;
}

// Función para formatear el texto del mensaje
function formatMessage(text) {
    if (!text) return '';
    
    // Convertir saltos de línea a <br>
    let formatted = text.replace(/\n/g, '<br>');
    
    // Convertir **texto** a negrita
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convertir *texto* a cursiva
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Convertir listas con - o •
    formatted = formatted.replace(/^[\-•]\s*(.+)/gm, '<li>$1</li>');
    
    // Si hay elementos <li>, envolver en <ul>
    if (formatted.includes('<li>')) {
        formatted = formatted.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    }
    
    // Convertir números seguidos de punto en listas numeradas
    formatted = formatted.replace(/^\d+\.\s*(.+)/gm, '<li>$1</li>');
    
    // Si hay listas numeradas, envolver en <ol> (después de las <ul>)
    if (formatted.includes('<li>') && /^\d+\.\s/.test(text)) {
        formatted = formatted.replace(/<ul>(<li>.*<\/li>)<\/ul>/, '<ol>$1</ol>');
    }
    
    return formatted;
}

// Función mejorada para escribir texto progresivamente con formato en tiempo real
function typeWriterEffect(element, text, speed = 50) {
    return new Promise((resolve) => {
        let i = 0;
        let currentText = '';
        let isInList = false;
        let listType = null; // 'ol' para listas numeradas, 'ul' para listas con viñetas
        
        element.innerHTML = '';
        
        function typeChar() {
            if (i < text.length) {
                const char = text.charAt(i);
                const nextChars = text.substr(i, 5);
                const prevChars = currentText.slice(-10);
                
                currentText += char;
                
                // Detectar patrones para saltos de línea en tiempo real
                let shouldAddBreak = false;
                let shouldStartList = false;
                let shouldEndList = false;
                
                // Detectar dos puntos seguidos de contenido (probable lista)
                if (char === ':' && i < text.length - 1 && text.charAt(i + 1) !== ' ') {
                    shouldAddBreak = true;
                } else if (char === ':' && text.substr(i + 1, 2) === ' 1' || text.substr(i + 1, 3) === ' \n1') {
                    shouldAddBreak = true;
                }
                
                // Detectar inicio de lista numerada (ej: "1. ", "2. ", etc.)
                const numberListPattern = /\d+\.\s/;
                if (numberListPattern.test(nextChars) && (i === 0 || currentText.slice(-1) === '\n' || currentText.slice(-1) === ':')) {
                    if (!isInList) {
                        shouldStartList = true;
                        listType = 'ol';
                        isInList = true;
                    } else if (isInList && listType !== 'ol') {
                        shouldEndList = true;
                        shouldStartList = true;
                        listType = 'ol';
                    }
                }
                
                // Detectar inicio de lista con viñetas (ej: "- ", "• ")
                const bulletListPattern = /[\-•]\s/;
                if (bulletListPattern.test(nextChars) && (i === 0 || currentText.slice(-1) === '\n')) {
                    if (!isInList) {
                        shouldStartList = true;
                        listType = 'ul';
                        isInList = true;
                    } else if (isInList && listType !== 'ul') {
                        shouldEndList = true;
                        shouldStartList = true;
                        listType = 'ul';
                    }
                }
                
                // Detectar fin de lista (dos saltos de línea consecutivos o cambio de patrón)
                if (isInList && (currentText.endsWith('\n\n') || (char === '\n' && i < text.length - 1 && !numberListPattern.test(text.substr(i + 1, 5)) && !bulletListPattern.test(text.substr(i + 1, 3))))) {
                    shouldEndList = true;
                    isInList = false;
                    listType = null;
                }
                
                // Aplicar formato en tiempo real
                let displayText = formatTextProgressive(currentText, isInList, listType, shouldStartList, shouldEndList, shouldAddBreak);
                
                element.innerHTML = displayText + '<span class="typing-cursor">|</span>';
                
                // Scroll automático
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
                
                i++;
                setTimeout(typeChar, speed);
            } else {
                // Terminar el efecto - cerrar listas abiertas si es necesario
                let finalText = formatMessage(text);
                element.innerHTML = finalText;
                resolve();
            }
        }
        
        typeChar();
    });
}

// Función para formatear texto progresivamente manteniendo el contexto de listas
function formatTextProgressive(text, isInList, listType, shouldStartList, shouldEndList, shouldAddBreak) {
    let formatted = text;
    
    // Aplicar salto de línea automático después de ":"
    if (shouldAddBreak) {
        formatted = formatted.replace(/:([^\n])/, ':<br>$1');
    }
    
    // Convertir saltos de línea a <br> (excepto en listas)
    if (!isInList) {
        formatted = formatted.replace(/\n/g, '<br>');
    }
    
    // Aplicar formato básico
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Manejar listas en tiempo real
    if (isInList || shouldStartList) {
        // Listas numeradas
        if (listType === 'ol') {
            // Convertir elementos de lista numerada
            formatted = formatted.replace(/(\d+)\.\s*([^\n]*)/g, '<li>$2</li>');
            
            if (shouldStartList || formatted.includes('<li>')) {
                // Envolver en <ol> si no está ya envuelto
                if (!formatted.includes('<ol>')) {
                    formatted = formatted.replace(/(<li>.*)/s, '<ol>$1');
                }
            }
        }
        // Listas con viñetas
        else if (listType === 'ul') {
            // Convertir elementos de lista con viñetas
            formatted = formatted.replace(/[\-•]\s*([^\n]*)/g, '<li>$1</li>');
            
            if (shouldStartList || formatted.includes('<li>')) {
                // Envolver en <ul> si no está ya envuelto
                if (!formatted.includes('<ul>')) {
                    formatted = formatted.replace(/(<li>.*)/s, '<ul>$1');
                }
            }
        }
    }
    
    // Cerrar listas si es necesario
    if (shouldEndList) {
        if (listType === 'ol' && formatted.includes('<ol>') && !formatted.includes('</ol>')) {
            formatted = formatted.replace(/(<ol>.*<li>.*<\/li>)([^<]*)$/s, '$1</ol>$2');
        } else if (listType === 'ul' && formatted.includes('<ul>') && !formatted.includes('</ul>')) {
            formatted = formatted.replace(/(<ul>.*<li>.*<\/li>)([^<]*)$/s, '$1</ul>$2');
        }
    }
    
    return formatted;
}

function removeTypingIndicator() {
    const typingMsg = document.getElementById("typing-message");
    if (typingMsg) {
        typingMsg.remove();
    }
}

// Función para obtener o crear un ID único por usuario
function getOrCreateUserId() {
    let userId = null;
    try {
        userId = localStorage.getItem("chat_user_id");
        if (!userId) {
            userId = "user_" + Date.now().toString(36) + Math.random().toString(36).substr(2);
            localStorage.setItem("chat_user_id", userId);
        }
    } catch (e) {
        // Fallback si localStorage no está disponible
        userId = "user_" + Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    return userId;
}

async function sendMessageToBot(message) {
    try {
        appendMessage("user", message);
        
        if (typeof trackEvent !== 'undefined') {
            trackEvent("chatbot_message_sent", {
                message: message.substring(0, 50),
            });
        }

        // Mostrar indicador de escritura
        const consultingText = (typeof t !== 'undefined' && t('consulting-analize')) || 'Analizando...';
        appendMessage("bot", consultingText, true);

        // ID único por mensaje
        const requestId = Date.now().toString(36) + Math.random().toString(36).substr(2);

        // ID único por usuario
        const userId = getOrCreateUserId();

        const query = encodeURIComponent(message);

        console.log('Enviando solicitud a Make...', { query, requestId, userId });

        // Llamar al webhook de Make
        const triggerResponse = await fetch(
            `https://hook.eu2.make.com/3gdrtys1ypxrkrtvjksb10rmo126dwl1?nombre=&email=&phone=&empresa=&empleados=&tipo=&desafio=&fecha_envio=&version_ab=&origen=chatbot&diaSeleccionado=&horaSeleccionada=&fechaISO=&fechaConZona=&idioma=&meetingID=&CalendarID=&failedEmail=&message=${query}&id=${requestId}&user=${userId}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );

        console.log('Respuesta de Make recibida:', triggerResponse.status, triggerResponse.statusText);

        if (!triggerResponse.ok) {
            throw new Error(`HTTP ${triggerResponse.status}: ${triggerResponse.statusText}`);
        }

        // Verificar el content-type de la respuesta
        const contentType = triggerResponse.headers.get('content-type');
        console.log('Content-Type de la respuesta:', contentType);

        let data;
        if (contentType && contentType.includes('application/json')) {
            data = await triggerResponse.json();
        } else {
            // Si no es JSON, obtener como texto
            const textResponse = await triggerResponse.text();
            console.log('Respuesta como texto:', textResponse);
            
            // Intentar parsear como JSON manualmente
            try {
                data = JSON.parse(textResponse);
            } catch (e) {
                // Si no es JSON válido, tratar como string directo
                data = { body: textResponse };
            }
        }

        console.log('Datos procesados:', data);

        removeTypingIndicator();

        // Procesar la respuesta de manera más robusta
        let botMessage = "";
        
        if (data) {
            // Prioridad de campos a verificar
            if (typeof data === 'string') {
                botMessage = data;
            } else if (data.body) {
                if (typeof data.body === 'string') {
                    // Si body es un string, intentar parsear como JSON
                    try {
                        const parsedBody = JSON.parse(data.body);
                        botMessage = parsedBody.respuesta || parsedBody.message || parsedBody.text || data.body;
                    } catch (e) {
                        // Si no es JSON, usar el string tal cual
                        botMessage = data.body;
                    }
                } else if (typeof data.body === 'object') {
                    botMessage = data.body.respuesta || data.body.message || data.body.text || JSON.stringify(data.body);
                } else {
                    botMessage = String(data.body);
                }
            } else if (data.respuesta) {
                botMessage = data.respuesta;
            } else if (data.message) {
                botMessage = data.message;
            } else if (data.text) {
                botMessage = data.text;
            } else {
                // Si ningún campo conocido existe, convertir toda la respuesta a string
                botMessage = JSON.stringify(data);
            }
        }

        // Verificar que tenemos un mensaje válido
        if (!botMessage || botMessage.trim() === '') {
            botMessage = "No se recibió respuesta del bot.";
        }

        // Limpiar el mensaje si es muy largo (opcional)
        if (botMessage.length > 2000) {
            console.warn('Mensaje muy largo, cortando...', botMessage.length);
            botMessage = botMessage.substring(0, 2000) + "...";
        }

        console.log('Mensaje final del bot:', botMessage);

        // Crear el elemento del mensaje del bot
        const botMessageElement = appendMessage("bot", "");
        const messageContentElement = botMessageElement.querySelector('.message-content');
        
        if (messageContentElement) {
            // Aplicar efecto typewriter con velocidad más lenta (50ms en lugar de 25ms)
            await typeWriterEffect(messageContentElement, botMessage, 50);
        } else {
            // Fallback si no encuentra el elemento
            appendMessage("bot", botMessage);
        }
        
        showContextualButtons(botMessage);
        
        if (typeof trackEvent !== 'undefined') {
            trackEvent("chatbot_response_received");
        }

    } catch (error) {
        console.error("Error en sendMessageToBot:", error);
        removeTypingIndicator();
        
        let errorMessage = "Error de conexión. Por favor, inténtalo de nuevo.";
        
        // Personalizar el mensaje de error según el tipo
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            errorMessage = "Error de conexión de red. Verifica tu conexión a internet.";
        } else if (error.message.includes('HTTP')) {
            errorMessage = `Error del servidor (${error.message}). Inténtalo de nuevo.`;
        }
        
        appendMessage("bot", errorMessage);
        
        if (typeof trackEvent !== 'undefined') {
            trackEvent("chatbot_connection_error", { error: error.message });
        }
    }
}

// Evento de click del botón Send
if (chatbotSend) {
    chatbotSend.addEventListener("click", () => {
        const message = chatbotInput ? chatbotInput.value.trim() : '';
        if (message) {
            sendMessageToBot(message);
            if (chatbotInput) {
                chatbotInput.value = "";
                chatbotSend.disabled = true; // desactivar hasta que el usuario escriba de nuevo
            }
        }
    });
}

function showContextualButtons(responseText) {
    if (!responseText) return;
    
    const lowerResponse = responseText.toLowerCase();

    if (
        lowerResponse.includes("precio") ||
        lowerResponse.includes("costo") ||
        lowerResponse.includes("presupuesto")
    ) {
        addContextualButton(
            "💰 Solicitar presupuesto personalizado",
            "Quiero un presupuesto detallado para mi empresa"
        );
    }

    if (
        lowerResponse.includes("servicio") ||
        lowerResponse.includes("automatización")
    ) {
        addContextualButton(
            "📋 Ver ejemplos reales",
            "¿Puedes mostrarme ejemplos específicos de automatizaciones?"
        );
    }

    if (
        lowerResponse.includes("contacto") ||
        lowerResponse.includes("llamar")
    ) {
        addContextualButton(
            "📞 Agendar llamada gratuita",
            "Quiero agendar una llamada de diagnóstico gratuita"
        );
    }
}

function addContextualButton(buttonText, message) {
    if (document.querySelector(".contextual-btn")) return;

    const container = document.createElement("div");
    container.className = "contextual-container";
    container.style.cssText = `
        padding: 0.5rem 1rem;
        background: var(--bg-light);
        border-top: 1px solid var(--border);
        text-align: center;
    `;

    const btn = document.createElement("button");
    btn.className = "contextual-btn";
    btn.textContent = buttonText;
    btn.style.cssText = `
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.85rem;
        cursor: pointer;
        transition: all 0.3s ease;
    `;

    btn.addEventListener("click", () => {
        sendMessageToBot(message);
        container.remove();
    });

    container.appendChild(btn);
    const inputContainer = document.getElementById("chatbot-input-container");
    
    if (inputContainer && inputContainer.parentNode) {
        inputContainer.parentNode.insertBefore(container, inputContainer);
    }

    setTimeout(() => {
        if (container.parentNode) {
            container.remove();
        }
    }, 30000);
}

// Event listener para el input (Enter key)
if (chatbotInput) {
    chatbotInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (chatbotSend) {
                chatbotSend.click();
            }
        }
    });
}

// Quick responses
const quickResponsesElement = document.getElementById("quick-responses");
if (quickResponsesElement) {
    quickResponsesElement.addEventListener("click", (e) => {
        if (e.target.classList.contains("quick-btn")) {
            const message = e.target.getAttribute("data-message");
            if (message) {
                sendMessageToBot(message);
                if (typeof trackEvent !== 'undefined') {
                    trackEvent("quick_response_clicked", {
                        button: e.target.getAttribute("data-track"),
                    });
                }
            }
        }
    });
}

// Inicializar el asistente al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    selectAssistantForSession();
    console.log('Chatbot inicializado con asistente:', currentAssistantName);
    
    // Agregar estilos CSS para el efecto typewriter y formateo
    const style = document.createElement('style');
    style.textContent = `
        .message-content {
            line-height: 1.6;
        }
        
        .message-content strong {
            font-weight: bold;
            color: var(--primary, #007bff);
        }
        
        .message-content em {
            font-style: italic;
        }
        
        .message-content ul, .message-content ol {
            margin: 0.5rem 0;
            padding-left: 1.5rem;
        }
        
        .message-content li {
            margin: 0.3rem 0;
            line-height: 1.4;
        }
        
        .message-content ol li {
            margin: 0.4rem 0;
        }
        
        .typing-cursor {
            animation: blink 1s infinite;
            color: var(--primary, #007bff);
            font-weight: bold;
        }
        
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        .message.bot {
            background: rgba(0, 123, 255, 0.1);
            border-left: 3px solid var(--primary, #007bff);
            padding: 0.75rem;
            margin: 0.5rem 0;
            border-radius: 0.5rem;
        }
        
        .message.user {
            background: rgba(108, 117, 125, 0.15);
            border-left: 3px solid var(--secondary, #6c757d);
            padding: 0.75rem;
            margin: 0.5rem 0;
            border-radius: 0.5rem;
            color: #333;
            font-weight: 500;
        }
        
        /* Mejorar el espaciado de listas */
        .message-content br + ol,
        .message-content br + ul {
            margin-top: 0.3rem;
        }
    `;
    document.head.appendChild(style);
});

// =============================
            // FORM HANDLING
            // =============================
            document
                .getElementById("contact-form")
                .addEventListener("submit", async (e) => {
                    e.preventDefault();

                    const submitBtn = e.target.querySelector(
                        'button[type="submit"]'
                    );
                    const originalText = submitBtn.innerHTML;
                    const formData = new FormData(e.target);

                    // Mostrar estado de carga
                    submitBtn.innerHTML = "⏳ Enviando...";
                    submitBtn.disabled = true;

                    // 🔧 CAMBIA ESTA URL POR TU WEBHOOK DE MAKE NEXAUTIA@GMAIL.COM
                    const WEBHOOK_URL =
                        "https://hook.eu2.make.com/3gdrtys1ypxrkrtvjksb10rmo126dwl1";

                    try {
    // Preparar datos para enviar
    const dataToSend = {
        nombre: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        empresa: formData.get("company"),
        empleados: formData.get("employees"),
        tipo: formData.get("type"),
        desafio: formData.get("challenge"),
        fecha_envio: new Date().toLocaleString("es-ES"),
        version_ab: currentVersion,
        origen: "formulario_contacto",
        diaSeleccionado: new Date(selectedDate).toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        }),
        horaSeleccionada: selectedTime,  // aquí añades el slot seleccionado
        // FECHAS SIMPLES COMO CADENAS (sin new Date ni toISOString)
        fechaISO: selectedDate + "T" + selectedTime + ":00",
        fechaConZona: selectedDate + "T" + selectedTime + ":00+02:00",
        idioma: currentLanguage,
        message:"",
        id:"",
        user:"",
        meetingID:"",
        CalendarID:"",
        failedEmail:"",
    };

                        console.log("📤 Enviando datos a Make:", dataToSend);

                        // Enviar a Make
                        const response = await fetch(WEBHOOK_URL, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(dataToSend),
                        });

                        if (response.ok) {
                            // Éxito
                            submitBtn.innerHTML = "✅ ¡Enviado!";
                            submitBtn.style.background =
                                "linear-gradient(135deg, #10b981, #059669)";

                            // Trackear conversión
                            trackEvent("form_submit", {
                                version: currentVersion,
                                company: formData.get("company"),
                                employees: formData.get("employees"),
                            });

                            // Mostrar mensaje de éxito
                            showSuccessMessage(formData.get("name"));

                            // Limpiar formulario después de 2 segundos
                            setTimeout(() => {
                                e.target.reset();
                                submitBtn.innerHTML = originalText;
                                submitBtn.disabled = false;
                                submitBtn.style.background = "";
                            }, 3000);
                        } else {
                            throw new Error(`Error HTTP: ${response.status}`);
                        }
                    } catch (error) {
                        console.error("❌ Error enviando formulario:", error);

                        // Mostrar error
                        submitBtn.innerHTML = "❌ Error, inténtalo de nuevo";
                        submitBtn.style.background =
                            "linear-gradient(135deg, #dc2626, #b91c1c)";

                        // Restaurar botón después de 3 segundos
                        setTimeout(() => {
                            submitBtn.innerHTML = originalText;
                            submitBtn.disabled = false;
                            submitBtn.style.background = "";
                        }, 3000);

                        // Mostrar mensaje de error al usuario
                        showErrorMessage();
                    }
                });

            // Función para mostrar mensaje de éxito
            function showSuccessMessage(name) {
                const lang = currentLanguage || "es"; // Usamos tu variable existente
            
                let titleText = "";
                let messageText = "";
            
                if (lang === "en") {
                    titleText = "Request Sent!";
                    messageText = `Thank you ${name}. We've received your free diagnosis request.<br><strong>We'll contact you within 2 business hours.</strong>`;
                } else if (lang === "ca") {
                    titleText = "Sol·licitud Enviada!";
                    messageText = `Gràcies ${name}. Hem rebut la teva sol·licitud de diagnòstic gratuït.<br><strong>Et contactarem en menys de 2 hores laborals.</strong>`;
                } else {
                    titleText = "¡Solicitud Enviada!";
                    messageText = `Gracias ${name}. Hemos recibido tu solicitud de diagnóstico gratuito.<br><strong>Te contactaremos en menos de 2 horas laborales.</strong>`;
                }
            
                const successDiv = document.createElement("div");
                successDiv.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(135deg, #10b981, #059669);
                    color: white;
                    padding: 2rem;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    z-index: 10000;
                    text-align: center;
                    max-width: 90%;
                    animation: slideIn 0.3s ease-out;
                `;
            
                successDiv.innerHTML = `
                    <div style="font-size: 2rem; margin-bottom: 1rem;">🎉</div>
                    <h3 style="margin-bottom: 1rem;">${titleText}</h3>
                    <p style="opacity: 0.9;">
                        ${messageText}
                    </p>
                `;
            
                document.body.appendChild(successDiv);
            
                // Cambiar a 5 segundos en lugar de 4
                setTimeout(() => {
                    successDiv.style.animation = "slideOut 0.3s ease-in forwards";
                    setTimeout(() => {
                        if (successDiv.parentNode) {
                            successDiv.parentNode.removeChild(successDiv);
                        }
                        
                        // Después de ocultar el mensaje, eliminar el resumen de la cita y desplazar al calendario
                        setTimeout(() => {
                            // Ocultar el formulario de cita
                            const appointmentForm = document.getElementById("appointment-form");
                            if (appointmentForm) {
                                appointmentForm.classList.remove("show");
                            }
                            
                            // Limpiar selecciones del calendario
                            document.querySelectorAll(".calendar-day.selected, .time-slot.selected").forEach((el) => {
                                el.classList.remove("selected");
                            });
                            
                            // Restaurar el formulario de contacto a su sección original
                            const contactForm = document.getElementById('contact-form');
                            const contactWrapper = contactForm ? contactForm.closest('.form-container') : null;
                            const contactSection = document.getElementById('contacto');
                            const contactTitle = contactSection ? contactSection.querySelector(':scope > h2') : null;
                            if (contactSection && contactWrapper && !contactSection.contains(contactWrapper)) {
                                if (contactTitle && contactTitle.parentNode) {
                                    contactTitle.insertAdjacentElement('afterend', contactWrapper);
                                } else {
                                    contactSection.appendChild(contactWrapper);
                                }
                            }
                            if (contactTitle) {
                                contactTitle.style.display = '';
                            }
                            
                            // Restaurar UI del calendario a estado inicial
                            const title = document.getElementById('selected-date-title');
                            if (title) title.textContent = t('calendar-title-select');
                            const container = document.getElementById('time-slots-container');
                            if (container) {
                                container.innerHTML = `
                                    <div class="no-slots">
                                        <p>${t('calendar-select-day')}</p>
                                    </div>
                                `;
                            }
                            
                            // Desplazar al usuario al inicio del calendario
                            const calendarSection = document.querySelector('.calendar-section') || document.getElementById('calendario');
                            if (calendarSection) {
                                calendarSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                            
                            // Resetear variables de selección
                            selectedDate = null;
                            selectedTime = null;
                            
                        }, 300); // Pequeño delay para asegurar que la animación termine
                        
                    }, 300);
                }, 5000); // Cambiado de 4000 a 5000 (5 segundos)
            }
            
            
            // Función para mostrar mensaje de error
            function showErrorMessage() {
                const lang = currentLanguage || 'es'; // Usa el idioma actual o 'es' por defecto
            
                const titleText = translations[lang]['errorTitle'] || translations['es']['errorTitle'];
                const messageText = translations[lang]['errorMessage'] || translations['es']['errorMessage'];
            
                const errorDiv = document.createElement("div");
                errorDiv.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(135deg, #dc2626, #b91c1c);
                    color: white;
                    padding: 2rem;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    z-index: 10000;
                    text-align: center;
                    max-width: 90%;
                    animation: slideIn 0.3s ease-out;
                `;
            
                errorDiv.innerHTML = `
                    <div style="font-size: 2rem; margin-bottom: 1rem;">⚠️</div>
                    <h3 style="margin-bottom: 1rem;">${titleText}</h3>
                    <p style="opacity: 0.9;">
                        ${messageText}
                    </p>
                `;
            
                document.body.appendChild(errorDiv);
            
                setTimeout(() => {
                    errorDiv.style.animation = "slideOut 0.3s ease-in forwards";
                    setTimeout(() => {
                        if (errorDiv.parentNode) {
                            errorDiv.parentNode.removeChild(errorDiv);
                        }
                    }, 300);
                }, 4000);
            }
            

 // =============================
// SMOOTH SCROLLING
// =============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const href = this.getAttribute("href");
        const target = document.querySelector(href);

        const header = document.querySelector("header");
        let headerOffset = header ? header.offsetHeight : 0;

        // Offsets personalizados para cada sección
        const offsetsPersonalizados = {
            "#servicios": headerOffset - 10,  // igual a la altura header - 10
            "#proceso": headerOffset + 5,     // 5px más abajo
            "#casos": headerOffset + 10,      // 10px más abajo
            "#calendario": headerOffset - 40, // más arriba
            "#contacto": headerOffset         // igual a la altura header
        };

        // Si existe un offset personalizado para este href, usarlo
        if (offsetsPersonalizados.hasOwnProperty(href)) {
            headerOffset = offsetsPersonalizados[href];
        }

        if (target) {
            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // ---- ENFOCAR PRIMER CAMPO DENTRO DEL DESTINO ----
            // Opcional: permite forzar un campo concreto con data-focus en el enlace
            // <a href="#contacto" data-focus="#nombre">Ir al formulario</a>
            const FOCUS_DELAY = 450; // ajusta si ves que enfoca demasiado pronto/tarde
            const explicitFocusSel = this.getAttribute("data-focus");

            const focusIt = () => {
                let focusEl = null;

                // 1) Si el enlace define un selector concreto a enfocar
                if (explicitFocusSel) {
                    focusEl = document.querySelector(explicitFocusSel);
                }

                // 2) Si no, buscar el primer campo focusable dentro de la sección destino
                if (!focusEl) {
                    if (target.matches('input, textarea, select')) {
                        focusEl = target;
                    } else {
                        focusEl = target.querySelector(
                            'input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled]), [contenteditable="true"]'
                        );
                    }
                }

                // 3) Fallback: si no encuentra dentro, intenta un <form> cercano
                if (!focusEl) {
                    const form = target.querySelector('form') || target.closest('form');
                    if (form) {
                        focusEl = form.querySelector(
                            'input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled])'
                        );
                    }
                }

                if (focusEl && typeof focusEl.focus === "function") {
                    // Evita que el foco provoque otro scroll brusco
                    focusEl.focus({ preventScroll: true });
                }
            };

            // Espera a que termine "más o menos" el scroll suave y enfoca
            setTimeout(focusIt, FOCUS_DELAY);
            // Reintento para Safari/iOS o si aún no estaba en viewport
            setTimeout(focusIt, FOCUS_DELAY + 350);

            // ---- FIN ENFOQUE ----

            // Tracking (igual que antes)
            if (typeof trackEvent === "function") {
                trackEvent("navigation_click", { section: href });
            }
        }
    });
});
 
            
            // =============================
            // INTERSECTION OBSERVER
            // =============================
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");

                        // Trackear secciones vistas
                        const sectionId =
                            entry.target.id || entry.target.className;
                        trackEvent("section_viewed", {
                            section: sectionId,
                            version: currentVersion,
                        });
                    }
                });
            }, observerOptions);

            document
                .querySelectorAll(".section, .card, .stat-item")
                .forEach((el) => {
                    observer.observe(el);
                });

            // =============================
            // INITIALIZATION
            // =============================
            function initialize() {
                initializeABTest();
                initializeHeatmap();
                initCalculator();
                selectAssistantForSession();
                initializeDarkMode();
                initializeLanguageSelector();
                initializeMobileNavigation();

                // Mostrar mensaje de bienvenida del chatbot
                setTimeout(() => {
                    const welcomeName = currentAssistantName;
                    appendMessage('bot', t('chatbot-welcome').replace('{name}', welcomeName));
                }, 1000);

                // Actualizar todas las traducciones
                updateAllTranslations();

                // Trackear página cargada
                trackEvent("page_loaded", { version: currentVersion });

                console.log("🚀 Analytics y A/B Testing inicializados");
                console.log("📊 Versión actual:", currentVersion);
                console.log("🔥 Heatmap activo");
                console.log("📱 vCard disponible");
                console.log("🌍 Sistema de traducción activo");
                console.log("📱 Navegación móvil activa");
            }

            // =============================
            // CALCULADORA DE ROI MEJORADA
            // =============================
            function initCalculator() {
                const inputs = ["hours", "hourly-cost", "employees"];
                const results = document.getElementById("results");

                inputs.forEach((id) => {
                    const input = document.getElementById(id);

                    // Escuchar cambios en tiempo real para mostrar valores dinámicamente
                    input.addEventListener("input", function () {
                        updateDynamicDisplay();
                        calculateROI();
                    });

                    // También escuchar eventos de teclado para mejor respuesta
                    input.addEventListener("keyup", function () {
                        updateDynamicDisplay();
                        calculateROI();
                    });
                });

                // Inicializar con valores por defecto
                setTimeout(() => {
                    updateDynamicDisplay();
                    calculateROI();
                }, 500);
            }

            // Función para actualizar los textos dinámicos
            // Función para actualizar los sufijos dinámicos
            function updateDynamicDisplay() {
                const hours =
                    parseInt(document.getElementById("hours").value) || 0;
                const hourlyCost =
                    parseInt(document.getElementById("hourly-cost").value) || 0;
                const employees =
                    parseInt(document.getElementById("employees").value) || 0;

                // Actualizar sufijo de horas
                    updateFieldSuffix('hours', hours > 0 ? `${hours} ${t('calc-field-hours')}` : '');

                // Actualizar sufijo de coste por hora
                updateFieldSuffix('hourly-cost', hourlyCost > 0 ? `${hourlyCost} ${t('calc-field-cost')}` : '');

                // Actualizar sufijo de empleados (singular/plural)
                let employeesText = "";
                if (employees > 0) {
                    employeesText = employees === 1 
                    ? `${employees} ${t('calc-field-employees-singular')}` 
                    : `${employees} ${t('calc-field-employees-plural')}`;
                                }
                updateFieldSuffix("employees", employeesText);
            }

            // Función para mostrar sufijos elegantes al lado de los campos
            function updateFieldSuffix(fieldId, suffixText) {
                const input = document.getElementById(fieldId);
                const container = input.parentNode;

                // Buscar sufijo existente
                let suffixElement = container.querySelector(".field-suffix");

                if (suffixText && suffixText.trim() !== "") {
                    if (!suffixElement) {
                        // Crear nuevo sufijo
                        suffixElement = document.createElement("div");
                        suffixElement.className = "field-suffix";
                        suffixElement.style.cssText = `
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
                background: linear-gradient(135deg, var(--primary), var(--secondary));
                color: white;
                padding: 0.25rem 0.75rem;
                border-radius: 20px;
                font-size: 0.75rem;
                font-weight: 600;
                pointer-events: none;
                opacity: 0;
                transition: all 0.3s ease;
                box-shadow: 0 2px 8px rgba(0, 102, 204, 0.2);
                z-index: 10;
                max-width: 120px;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            `;

                        // Hacer el contenedor relativo si no lo es
                        if (getComputedStyle(container).position === "static") {
                            container.style.position = "relative";
                        }

                        container.appendChild(suffixElement);

                        // Animar entrada
                        setTimeout(() => {
                            suffixElement.style.opacity = "1";
                            suffixElement.style.transform =
                                "translateY(-50%) scale(1)";
                        }, 50);
                    }

                    // Actualizar texto con animación suave
                    if (suffixElement.textContent !== suffixText) {
                        suffixElement.style.transform =
                            "translateY(-50%) scale(0.8)";
                        setTimeout(() => {
                            suffixElement.textContent = suffixText;
                            suffixElement.style.transform =
                                "translateY(-50%) scale(1)";
                        }, 150);
                    }

                    // Ajustar padding del input según el ancho de pantalla
                    const screenWidth = window.innerWidth;
                    if (screenWidth <= 480) {
                        input.style.paddingRight = "130px";
                        suffixElement.style.fontSize = "0.7rem";
                        suffixElement.style.padding = "0.2rem 0.5rem";
                        suffixElement.style.maxWidth = "110px";
                    } else if (screenWidth <= 768) {
                        input.style.paddingRight = "125px";
                        suffixElement.style.fontSize = "0.72rem";
                        suffixElement.style.maxWidth = "115px";
                    } else {
                        input.style.paddingRight = "135px";
                    }
                } else if (suffixElement) {
                    // Animar salida y remover
                    suffixElement.style.opacity = "0";
                    suffixElement.style.transform =
                        "translateY(-50%) scale(0.8)";
                    setTimeout(() => {
                        if (suffixElement.parentNode) {
                            suffixElement.parentNode.removeChild(suffixElement);
                        }
                    }, 300);

                    // Restaurar padding original
                    input.style.paddingRight = "1rem";
                }
            }

            // Función auxiliar para actualizar texto en cualquier parte de la página
            function updateTextInPage(newText, className) {
                // Si no existe el elemento, lo creamos dinámicamente
                let element = document.querySelector(`.${className}`);
                if (!element) {
                    // Buscar donde insertar los textos dinámicos en la página
                    const heroContent = document.querySelector(".hero-content");
                    if (heroContent && className === "hours-display") {
                        // Crear elemento para mostrar las horas dinámicamente
                        const hoursDisplay = document.createElement("div");
                        hoursDisplay.className = className;
                        hoursDisplay.style.cssText = `
                position: fixed;
                top: 10px;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(135deg, var(--primary), var(--secondary));
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-weight: 600;
                font-size: 0.9rem;
                z-index: 1000;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                display: none;
            `;
                        document.body.appendChild(hoursDisplay);
                        element = hoursDisplay;
                    }
                }

                if (element) {
                    element.textContent = newText;
                    element.style.display = "block";
                }
            }

            // Función mejorada para calcular ROI con validación
            function calculateROI() {
                const hoursInput = document.getElementById("hours");
                const hourlyCostInput = document.getElementById("hourly-cost");
                const employeesInput = document.getElementById("employees");

                const hours = parseInt(hoursInput.value) || 0;
                const hourlyCost = parseInt(hourlyCostInput.value) || 0;
                const employees = parseInt(employeesInput.value) || 0;

                // Limpiar mensajes de error previos
                clearValidationErrors();

                // Validar campos y mostrar errores específicos
                const emptyFields = [];

                if (!hoursInput.value.trim() || hours <= 0) {
                    emptyFields.push("horas semanales");
                    showFieldError(hoursInput, t('calc-validation-hours'));
                }

                if (!hourlyCostInput.value.trim() || hourlyCost <= 0) {
                    emptyFields.push("coste por hora");                    
                    showFieldError(hourlyCostInput, t('calc-validation-cost')); // ✅ CORREGIDO
                }

                if (!employeesInput.value.trim() || employees <= 0) {
                    emptyFields.push("número de empleados");
                    showFieldError(employeesInput, t('calc-validation-employees'));

                }

                // Si hay campos vacíos, mostrar mensaje general
                if (emptyFields.length > 0) {
                    showGeneralError(emptyFields);
                    document.getElementById("results").style.display = "none";
                    return;
                }

                // Si todos los campos están llenos, calcular y mostrar resultados
                if (hours > 0 && hourlyCost > 0 && employees > 0) {
                    const weeklyLoss = hours * hourlyCost * employees;
                    const annualLoss = weeklyLoss * 52;
                    const annualSavings = Math.round(annualLoss * 0.8); // 80% ahorro
                    const roi = Math.round(
                        (annualSavings / (annualLoss * 0.15)) * 100
                    ); // 15% inversión típica

                  document.getElementById('annual-loss').textContent = `${annualLoss.toLocaleString()}€ ${t('calc-annual-loss')}`;

                    document.getElementById(
                        "annual-savings"
                    ).textContent = `${annualSavings.toLocaleString()}€`;
                    document.getElementById("roi").textContent = `${roi}%`;

                    document.getElementById("results").style.display = "block";

                    // Track calculator usage
                    trackEvent("calculator_used", {
                        annualLoss: annualLoss,
                        employees: employees,
                        version: currentVersion,
                    });
                }
            }
            
            function showFieldError(input, message) {
                // Quitar error previo
                const prevError =
                    input.parentNode.querySelector(".field-error");
                if (prevError) {
                    prevError.remove();
                }

                // Añadir clase de error al input
                input.style.borderColor = "#dc2626";
                input.style.backgroundColor = "#fef2f2";

                // Crear mensaje de error
                const errorDiv = document.createElement("div");
                errorDiv.className = "field-error";
                errorDiv.style.cssText = `
        color: #dc2626;
        font-size: 0.85rem;
        margin-top: 0.25rem;
        font-weight: 500;
    `;
                errorDiv.textContent = message;

                // Insertar después del input
                input.parentNode.appendChild(errorDiv);
            }

            // Función para mostrar error general
            function showGeneralError(emptyFields) {
                // Remover error general previo
                const prevGeneralError =
                    document.querySelector(".general-error");
                if (prevGeneralError) {
                    prevGeneralError.remove();
                }

                const errorDiv = document.createElement("div");
                errorDiv.className = "general-error";
                errorDiv.style.cssText = `
        background: linear-gradient(135deg, #fee2e2, #fecaca);
        color: #dc2626;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        margin: 1rem 0;
        font-weight: 600;
        text-align: center;
        border: 2px solid #fca5a5;
        animation: shake 0.5s ease-in-out;
    `;

                let message =
                    "⚠️ Por favor, completa todos los campos para calcular tu ahorro.\n\n";
                message += "Campos pendientes:\n";
                emptyFields.forEach((field, index) => {
                    message += `${index + 1}. ${
                        field.charAt(0).toUpperCase() + field.slice(1)
                    }\n`;
                });

                errorDiv.textContent = message;
                errorDiv.style.whiteSpace = "pre-line";

                // Insertar antes de los resultados
                const resultsSection = document.getElementById("results");
                resultsSection.parentNode.insertBefore(
                    errorDiv,
                    resultsSection
                );

                // Auto-remover después de 5 segundos
                setTimeout(() => {
                    if (errorDiv.parentNode) {
                        errorDiv.style.animation = "fadeOut 0.5s ease-in-out";
                        setTimeout(() => {
                            if (errorDiv.parentNode) {
                                errorDiv.remove();
                            }
                        }, 500);
                    }
                }, 5000);
            }

            // Función para limpiar errores de validación
            function clearValidationErrors() {
                // Limpiar errores de campos
                document
                    .querySelectorAll(".field-error")
                    .forEach((error) => error.remove());

                // Limpiar error general
                const generalError = document.querySelector(".general-error");
                if (generalError) {
                    generalError.remove();
                }

                // Restaurar estilos de inputs
                const inputs = document.querySelectorAll(
                    "#hours, #hourly-cost, #employees"
                );
                inputs.forEach((input) => {
                    input.style.borderColor = "";
                    input.style.backgroundColor = "";
                });
            }

            // Inicializar cuando la página esté lista
            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", initialize);
            } else {
                initialize();
            }

            // Trackear tiempo en página al salir
            window.addEventListener("beforeunload", function () {
                const timeOnPage = Math.floor((Date.now() - startTime) / 1000);
                trackEvent("page_exit", {
                    timeOnPage: timeOnPage,
                    version: currentVersion,
                    maxScrollDepth: maxScroll,
                    vcardDownloads: analytics.vcardDownloads || 0,
                });

                // Limpiar interval
                if (analyticsInterval) {
                    clearInterval(analyticsInterval);
                }
            });

            // =============================
            // DARK MODE FUNCTIONALITY
            // =============================
            function initializeDarkMode() {
                const toggleBtn = document.getElementById("dark-mode-toggle");
                const isDarkMode = localStorage.getItem("darkMode") === "true";

                if (isDarkMode) {
                    document.body.classList.add("dark-mode");
                    toggleBtn.textContent = "☀️";
                }

                toggleBtn.addEventListener("click", () => {
                    document.body.classList.toggle("dark-mode");
                    const isNowDark =
                        document.body.classList.contains("dark-mode");

                    toggleBtn.textContent = isNowDark ? "☀️" : "🌙";
                    localStorage.setItem("darkMode", isNowDark);

                    trackEvent("dark_mode_toggle", {
                        mode: isNowDark ? "dark" : "light",
                        version: currentVersion,
                    });
                });
            }
        
        
            // ==========================================
            // CONFIGURACIÓN DEL CALENDARIO
            // ==========================================
            const CONFIG = {
                businessHours: {
                    // 0 = Domingo, 1 = Lunes, 2 = Martes, etc.
                    1: [
                        { start: "09:00", end: "14:00" },
                        { start: "15:00", end: "19:00" },
                    ], // Lunes
                    2: [
                        { start: "09:00", end: "14:00" },
                        { start: "15:00", end: "19:00" },
                    ], // Martes
                    3: [
                        { start: "09:00", end: "14:00" },
                        { start: "15:00", end: "19:00" },
                    ], // Miércoles
                    4: [
                        { start: "09:00", end: "14:00" },
                        { start: "15:00", end: "19:00" },
                    ], // Jueves
                    5: [
                        { start: "09:00", end: "14:00" },
                        { start: "15:00", end: "19:00" },
                    ], // Viernes
                },
                slotDuration: 60,
                bufferMinutes: 30,
                timezone: "Europe/Madrid",
                api: {
                    // Reemplaza con la URL del despliegue de tu Apps Script Web App
                    baseUrl: "https://script.google.com/macros/s/AKfycby40UkkytOkFKf_ZrwGw0F6DZPgD_iueecAwSB1fW4CaHUGbOpa_uCRmEbBxSM1mSLc3w/exec",
                    // Calendario a usar. Deja 'primary' o reemplaza por el ID cuando lo tengas.
                    calendarId: "primary",
                },
            };

            // Estado de la última reserva creada (para permitir cancelación)
            let lastBookedEventId = null;
            let lastBookedEmail = null;

            let currentDate = new Date();
            let selectedDate = null;
            let selectedTime = null;

            // ==========================================
            // FUNCIONES CORREGIDAS
            // ==========================================

            // 🔧 FUNCIÓN CORREGIDA: formatDate sin desfase horario
            function formatDate(date) {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const day = String(date.getDate()).padStart(2, "0");
                return `${year}-${month}-${day}`;
            }

            // 🔧 FUNCIÓN CORREGIDA: crear fecha desde string
            function createDateFromString(dateStr) {
                const [year, month, day] = dateStr.split("-").map(Number);
                return new Date(year, month - 1, day);
            }

            // 🔧 FUNCIÓN CORREGIDA: comparar fechas sin problemas de zona horaria
            function isSameDate(date1, date2) {
                return formatDate(date1) === formatDate(date2);
            }

            function initializeCalendar() {
                updateCalendarDisplay();
                setupEventListeners();
            }

            function setupEventListeners() {
                document
                    .getElementById("prev-month")
                    .addEventListener("click", () => {
                        currentDate.setMonth(currentDate.getMonth() - 1);
                        updateCalendarDisplay();
                    });

                document
                    .getElementById("next-month")
                    .addEventListener("click", () => {
                        currentDate.setMonth(currentDate.getMonth() + 1);
                        updateCalendarDisplay();
                    });

                const cancelBtn = document.getElementById("cancel-appointment");
                if (cancelBtn) {
                    cancelBtn.addEventListener("click", cancelAppointment);
                }

                const appointmentFormEl = document.getElementById("appointment-booking-form");
                if (appointmentFormEl) {
                    appointmentFormEl.addEventListener("submit", confirmAppointment);
                }
                // Clean up any legacy hamburger elements if present
                const legacyToggle = document.getElementById('menu-toggle');
                const legacyNav = document.getElementById('site-nav');
                if (legacyToggle) legacyToggle.remove();
                if (legacyNav) legacyNav.id = '';

                // Restaurar el formulario a su lugar original cuando el usuario navega por el header
                const headerNav = document.querySelector('header nav');                
                if (headerNav) {
                    headerNav.addEventListener('click', (e) => {
                        const link = e.target.closest('a');
                        if (link) {
                            cancelAppointment(false);
                        }
                    });
                }

                // Restaurar el formulario a su lugar original cuando el usuario hacer click en otra opción del menú hamburguesa            
                const headerHamburguer= document.querySelector('.mobile-menu-nav');
                if (headerHamburguer) {
                    headerHamburguer.addEventListener('click', (e) => {
                        const link = e.target.closest('a');
                        if (link) {
                            cancelAppointment(false);
                        }
                    });
                }

                //Restaurar el formulario a su lugar original cuando el usuario hacer click en otra opción de los botones del menú inferior            
                const headerIconsInferiors= document.querySelector('.mobile-nav-items');
                if (headerIconsInferiors) {
                    headerIconsInferiors.addEventListener('click', (e) => {
                        const link = e.target.closest('div');
                        if (link) {
                            cancelAppointment(false);
                        }
                    });
                }

                // También cuando cambia el hash (por si navega desde otros enlaces internos)
                window.addEventListener('hashchange', () => {
                    cancelAppointment(false);
                    adjustScrollForStickyHeader();
                });
            }

            function updateCalendarDisplay() {
                const monthNames = [
                    "Enero",
                    "Febrero",
                    "Marzo",
                    "Abril",
                    "Mayo",
                    "Junio",
                    "Julio",
                    "Agosto",
                    "Septiembre",
                    "Octubre",
                    "Noviembre",
                    "Diciembre",
                ];

                document.getElementById("current-month").textContent = `${t(`month-${currentDate.getMonth()}`)} ${currentDate.getFullYear()}`;

                generateCalendarGrid();
            }

            function generateCalendarGrid() {
                const grid = document.getElementById("calendar-grid");
                grid.innerHTML = "";

                // Headers de días
                for (let i = 0; i < 7; i++) {
                    const header = document.createElement("div");
                    header.className = "calendar-day-header";
                    header.textContent = t(`day-header-${i}`);
                    grid.appendChild(header);
                }

                // Generar días del mes
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                const firstDay = new Date(year, month, 1);
                const lastDay = new Date(year, month + 1, 0);
                const today = new Date();

                // Normalizar today a solo fecha (sin hora)
                const todayNormalized = new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate()
                );

                // Calcular días del mes anterior
                let startDay = firstDay.getDay();
                startDay = startDay === 0 ? 6 : startDay - 1;

                // Días del mes anterior (grises)
                if (startDay > 0) {
                    const prevMonth = new Date(year, month, 0);
                    const prevMonthLastDay = prevMonth.getDate();

                    for (let i = startDay - 1; i >= 0; i--) {
                        const day = prevMonthLastDay - i;
                        const dayElement = createDayElement(day, true);
                        grid.appendChild(dayElement);
                    }
                }

                // 🔧 DÍAS DEL MES ACTUAL - CORREGIDO
                for (let day = 1; day <= lastDay.getDate(); day++) {
                    const dayDate = new Date(year, month, day);
                    const dayElement = createDayElement(day, false);
                    const dateStr = formatDate(dayDate);

                    // SIEMPRE añadir data-date
                    dayElement.setAttribute("data-date", dateStr);

                    // 🔧 VERIFICACIONES CORREGIDAS
                    const isToday = isSameDate(dayDate, todayNormalized);
                    const isPast = dayDate < todayNormalized;
                    const isWeekend =
                        dayDate.getDay() === 0 || dayDate.getDay() === 6;

                    console.log(
                        `📅 Día ${day} (${dateStr}): isToday=${isToday}, isPast=${isPast}, isWeekend=${isWeekend}`
                    );

                    if (isToday) {
                        dayElement.classList.add("today");
                    }

                    if (isPast || isWeekend) {
                        dayElement.classList.add("unavailable");
                    } else {
                        // Solo días futuros laborables
                        const hasSlots = hasAvailableSlots(dateStr);
                        console.log(`  → hasSlots: ${hasSlots}`);

                        if (hasSlots) {
                            dayElement.classList.add("has-slots");
                            dayElement.style.cursor = "pointer";

                            // 🔧 EVENTO CLICK CORREGIDO
                            dayElement.addEventListener("click", function () {
                                console.log(
                                    `🔴 CLICK en día ${day}, fecha: ${dateStr}`
                                );
                                selectDate(dayDate);
                            });
                        } else {
                            dayElement.classList.add("unavailable-slot");
                        }
                    }

                    grid.appendChild(dayElement);
                }

                // Días del mes siguiente
                const cellsUsed = startDay + lastDay.getDate();
                const totalCells = 42;
                const remainingCells = totalCells - cellsUsed;

                for (let day = 1; day <= remainingCells; day++) {
                    const dayElement = createDayElement(day, true);
                    grid.appendChild(dayElement);
                }
            }

            function createDayElement(day, isOtherMonth) {
                const dayElement = document.createElement("div");
                dayElement.className = "calendar-day";
                dayElement.textContent = day;

                if (isOtherMonth) {
                    dayElement.classList.add("other-month");
                }

                return dayElement;
            }

            function hasAvailableSlots(dateStr) {
                // Para rendimiento, marcamos días laborables como "con slots";
                // la disponibilidad real se calcula al hacer clic consultando el backend.
                const date = createDateFromString(dateStr);
                const dayOfWeek = date.getDay();
                return Boolean(CONFIG.businessHours[dayOfWeek]);
            }

            async function selectDate(date) {
                console.log("🟢 SELECCIONANDO FECHA:", formatDate(date));

                // Limpiar selección anterior
                document
                    .querySelectorAll(".calendar-day.selected")
                    .forEach((el) => {
                        el.classList.remove("selected");
                    });

                // Buscar y seleccionar el elemento correcto
                const dateStr = formatDate(date);
                const targetElement = document.querySelector(
                    `[data-date="${dateStr}"]`
                );

                if (targetElement) {
                    targetElement.classList.add("selected");
                    console.log("✅ Día seleccionado correctamente");
                } else {
                    console.error(
                        "❌ No se encontró el elemento con fecha:",
                        dateStr
                    );
                    return;
                }

                selectedDate = date;
                selectedTime = null;

                // Actualizar título inmediatamente para que se vea la fecha seleccionada
                const title = document.getElementById("selected-date-title");
                if (title) {
                    title.textContent = `${t('calendar-selected-date-title')} ${date.toLocaleDateString(currentLanguage, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
                }

                // Hacer scroll automático hacia la sección de horarios para que se vea la fecha seleccionada
                const timeSlotsContainer = document.getElementById("time-slots-container");
                if (timeSlotsContainer) {
                    timeSlotsContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }

                // Actualizar UI con los slots de tiempo
                await updateTimeSlotsDisplay(date);
                hideAppointmentForm();
            }
            
            async function fetchBusyInfo(dateStr) {
                const url = `https://script.google.com/macros/s/AKfycby40UkkytOkFKf_ZrwGw0F6DZPgD_iueecAwSB1fW4CaHUGbOpa_uCRmEbBxSM1mSLc3w/exec?action=busy&date=${dateStr}&tz=Europe/Madrid&calendarId=primary`;
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`Error en la petición: ${response.status}`);
                    }
                    return await response.json();
                } catch (error) {
                    console.error("Error obteniendo datos del calendario:", error);
                    return null;
                }
            }
            
                       
                
                async function updateTimeSlotsDisplay(date) {
                const dateStr = formatDate(date);
                const container = document.getElementById(
                    "time-slots-container"
                );
                const title = document.getElementById("selected-date-title");

                // Mostrar mensaje de "Buscando horas disponibles" inmediatamente
                container.innerHTML = `
                    <div class="loading-slots" style="
                        text-align: center;
                        padding: 2rem;
                        color: #dc2626;
                        font-weight: bold;
                        font-size: 1.2rem;
                        animation: blink 1s infinite;
                    ">
                        🔍 ${t('calendar-processing')}...
                    </div>
                `;

                // Consultar ocupación real (y festivos) al backend
                const busyInfo = await fetchBusyInfo(dateStr);
                console.log("Datos que llegan del backend:", busyInfo);
                if (busyInfo?.isHoliday) {
                    container.innerHTML = '<div class="no-slots"><p>Festivo: no hay horarios disponibles</p></div>';
                    return;
                }

                const slots = generateTimeSlots(dateStr, busyInfo?.busy || []);

                if (slots.length === 0) {
                    container.innerHTML =
                        '<div class="no-slots"><p>No hay horarios disponibles para este día</p></div>';
                    return;
                }

                // Crear grid de horarios
                const slotsGrid = document.createElement("div");
                slotsGrid.className = "slots-grid";

                slots.forEach((slot) => {
                    const slotElement = document.createElement("div");
                    slotElement.className = "time-slot";
                    slotElement.textContent = slot;

                    // El backend ya nos devolvió ocupación; si no aparece, está libre
                    slotElement.addEventListener("click", () =>
                        selectTimeSlot(slot, slotElement)
                    );

                    slotsGrid.appendChild(slotElement);
                });

                container.innerHTML = "";
                container.appendChild(slotsGrid);
            }

            function minutesToDate(dateStr, minutes) {
                const d = createDateFromString(dateStr);
                d.setHours(0, minutes, 0, 0);
                return d;
            }

            function overlaps(aStart, aEnd, bStart, bEnd) {
                return aStart < bEnd && bStart < aEnd;
            }

            function expandBusyWithBuffer(busy, buffer) {
                return busy.map(b => ({
                    start: Math.max(0, b.start - buffer),
                    end: b.end + buffer,
                }));
            }

            function generateTimeSlots(dateStr, busyPeriods = []) {
                const date = createDateFromString(dateStr);
                const dayOfWeek = date.getDay();

                const businessHours = CONFIG.businessHours[dayOfWeek];
                if (!businessHours) return [];

                const slots = [];

                const expandedBusy = expandBusyWithBuffer(
                    busyPeriods.map(p => ({ start: parseTime(p.start), end: parseTime(p.end) })),
                    CONFIG.bufferMinutes
                );

                businessHours.forEach((period) => {
                    const startTime = parseTime(period.start);
                    const endTime = parseTime(period.end);

                    let currentStart = startTime;
                    while (currentStart + CONFIG.slotDuration <= endTime) {
                        const currentEnd = currentStart + CONFIG.slotDuration;
                        const blocked = expandedBusy.some(b => overlaps(currentStart, currentEnd, b.start, b.end));
                        if (!blocked) {
                            slots.push(formatTime(currentStart));
                        }
                        currentStart += CONFIG.slotDuration;
                    }
                });

                return slots;
            }

            function selectTimeSlot(time, element) {
                // Limpiar selección anterior
                document
                    .querySelectorAll(".time-slot.selected")
                    .forEach((el) => {
                        el.classList.remove("selected");
                    });

                // Seleccionar nuevo horario
                element.classList.add("selected");
                selectedTime = time;

                // Mostrar formulario
                showAppointmentForm();
            }

            function showAppointmentForm() {
                const apptWrapper = document.getElementById("appointment-form");

                // Actualizar resumen
                document.getElementById("summary-date").textContent = selectedDate.toLocaleDateString(currentLanguage, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                document.getElementById("summary-time").textContent = selectedTime;

                // Insertar el formulario de contacto bajo el resumen
                const targetContainer = document.getElementById("appointment-contact-form-container");
                const contactForm = document.getElementById("contact-form");
                const contactWrapper = contactForm ? contactForm.closest('.form-container') : null;
                if (targetContainer && contactWrapper && !targetContainer.contains(contactWrapper)) {
                    if (targetContainer && contactWrapper && !targetContainer.contains(contactWrapper)) {
                        targetContainer.appendChild(contactWrapper);
                    }
                    
                }

                function scrollToElementAndFocus(element, extraOffset = 0, delay = 300) {
                    if (!element) return;
                    const header = document.querySelector('header');
                    if (!header) return;
                    const headerHeight = header.getBoundingClientRect().height;
                    const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - 8 + extraOffset;
                
                    window.scrollTo({ top, behavior: 'smooth' });
                
                    setTimeout(() => {
                        element.focus();
                    }, delay);
                }
                

                // Ocultar el título original de la sección de contacto para que no quede colgando
                const contactoTitle = document.querySelector('#contacto > h2');
                if (contactoTitle) {
                    contactoTitle.style.display = 'none';
                }

                apptWrapper.classList.add("show");
                
                // Scroll preciso para mostrar el resumen completo de la cita
                const titleElement = document.querySelector('#appointment-form h3');
                if (titleElement) {
                    // Obtener la posición del título
                    const titleRect = titleElement.getBoundingClientRect();
                    const headerHeight = document.querySelector('header')?.getBoundingClientRect().height || 0;
                    
                    // Logs de depuración
                    console.log('=== DEBUG SCROLL ===');
                    console.log('titleRect.top:', titleRect.top);
                    console.log('headerHeight:', headerHeight);
                    console.log('window.pageYOffset:', window.pageYOffset);
                    
                    // Calcular la posición para que el título esté completamente visible
                    // después del encabezado fijo, con un margen de seguridad más grande
                    const targetScrollTop = window.pageYOffset + titleRect.top - headerHeight - 150;
                    
                    console.log('targetScrollTop calculado:', targetScrollTop);
                    console.log('Posición actual del scroll:', window.pageYOffset);
                    
                    // Hacer scroll suave a esa posición
                    window.scrollTo({ 
                        top: targetScrollTop, 
                        behavior: 'smooth' 
                    });
                    
                    // Verificar después del scroll
                    setTimeout(() => {
                        console.log('Posición del scroll después de 100ms:', window.pageYOffset);
                    }, 100);
                } else {
                    console.log('No se encontró el título h3 en #appointment-form');
                    // Fallback si no se encuentra el título
                    apptWrapper.scrollIntoView({ behavior: "smooth", block: "start" });
                }

                // Enfocar el primer campo del formulario de contacto después del scroll
                setTimeout(() => {
                    const nameInput = document.getElementById("name");       
                    scrollToElementAndFocus(nameInput, -350);
                    if (nameInput) nameInput.focus();
                    
                }, 600); // Aumentar el delay para que el scroll termine antes del focus
            }

            function adjustScrollForStickyHeader(element) {
    const header = document.querySelector('header');
    if (!element || !header) return;
    const headerHeight = header.getBoundingClientRect().height;
    const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
}


            function restoreContactFormToOriginal() {
                const contactForm = document.getElementById('contact-form');
                const contactWrapper = contactForm ? contactForm.closest('.form-container') : null;
                const contactSection = document.getElementById('contacto');
                const contactTitle = contactSection ? contactSection.querySelector(':scope > h2') : null;
                if (contactSection && contactWrapper && !contactSection.contains(contactWrapper)) {
                    // Insertar bajo el título de Contacto
                    if (contactTitle && contactTitle.parentNode) {
                        contactTitle.insertAdjacentElement('afterend', contactWrapper);
                    } else {
                        contactSection.appendChild(contactWrapper);
                    }
                }
                // Mostrar el título de Contacto si estuviera oculto
                if (contactTitle) {
                    contactTitle.style.display = '';
                }
            }

            function hideAppointmentForm() {
                const form = document.getElementById("appointment-form");
                form.classList.remove("show");
            }

            function cancelAppointment() {
                hideAppointmentForm();

                // Limpiar selecciones
                document
                    .querySelectorAll(
                        ".calendar-day.selected, .time-slot.selected"
                    )
                    .forEach((el) => {
                        el.classList.remove("selected");
                    });

                selectedDate = null;
                selectedTime = null;

                // Restaurar el formulario de contacto a su sección original
                restoreContactFormToOriginal();

                // Restaurar UI del calendario a estado inicial
                const title = document.getElementById('selected-date-title');
                if (title) title.textContent = t('calendar-title-select');
                const container = document.getElementById('time-slots-container');
                if (container) {
                    container.innerHTML = `
                        <div class="no-slots">
                            <p>${t('calendar-select-day')}</p>
                        </div>
                    `;
                }
            }

            async function confirmAppointment(event) {
                event.preventDefault();

                const formData = new FormData(event.target);
                const appointmentData = {
                    date: formatDate(selectedDate),
                    time: selectedTime,
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    company: formData.get("company"),
                    type: formData.get("type"),
                    details: formData.get("details"),
                };

                // Validar campos requeridos
                if (!appointmentData.name || !appointmentData.email) {
                    alert("Por favor, completa todos los campos requeridos");
                    return;
                }

                // Mostrar loading
                showLoading(true);

                try {
                    // Validación simple en cliente: 1 cita por día por email
                    const bookings = JSON.parse(localStorage.getItem('bookingsByEmail') || '{}');
                    const emailBookings = bookings[appointmentData.email] || {};
                    if (emailBookings[appointmentData.date]) {
                        alert('Ya existe una cita para este email en esta fecha.');
                        return;
                    }

                    // Crear cita real en backend
                    const result = await bookAppointment(appointmentData);
                    if (!result?.success) throw new Error(result?.message || 'No se pudo crear la cita');

                    lastBookedEventId = result.eventId || null;
                    lastBookedEmail = appointmentData.email;

                    // Persistir marca local
                    emailBookings[appointmentData.date] = true;
                    bookings[appointmentData.email] = emailBookings;
                    localStorage.setItem('bookingsByEmail', JSON.stringify(bookings));

                    // Mostrar confirmación
                    showConfirmation(appointmentData.email);

                    // Limpiar formulario y selecciones
                    resetAppointmentForm();
                    updateTimeSlotsDisplay(selectedDate);
                } catch (error) {
                    console.error("Error al confirmar cita:", error);
                    alert(
                        "Error al confirmar la cita. Por favor, inténtalo de nuevo."
                    );
                } finally {
                    showLoading(false);
                }
            }

            async function fetchBusyInfo(dateStr) {
                const url = `${CONFIG.api.baseUrl}?action=busy&date=${encodeURIComponent(dateStr)}&tz=${encodeURIComponent(CONFIG.timezone)}&calendarId=${encodeURIComponent(CONFIG.api.calendarId)}`;
                const res = await fetch(url, { method: 'GET' });
                if (!res.ok) return { busy: [], isHoliday: false };
                return res.json();
            }

            async function bookAppointment(data) {
                const res = await fetch(CONFIG.api.baseUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain' },
                    body: JSON.stringify({
                        action: 'book',
                        calendarId: CONFIG.api.calendarId,
                        timezone: CONFIG.timezone,
                        durationMinutes: CONFIG.slotDuration,
                        bufferMinutes: CONFIG.bufferMinutes,
                        appointment: data,
                    })
                });
                if (!res.ok) throw new Error('Error de red');
                return res.json();
            }

            async function cancelBookedAppointment() {
                if (!lastBookedEventId) {
                    alert('No hay ninguna cita para cancelar en esta sesión.');
                    return;
                }
                try {
                    const res = await fetch(CONFIG.api.baseUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'text/plain' },
                        body: JSON.stringify({
                            action: 'cancel',
                            calendarId: CONFIG.api.calendarId,
                            eventId: lastBookedEventId,
                        })
                    });
                    const data = await res.json();
                    if (!data?.success) throw new Error(data?.message || 'No se pudo cancelar');

                    alert('Cita anulada correctamente.');
                    lastBookedEventId = null;
                    // Limpieza visual y estado
                    resetAppointmentForm();
                    updateTimeSlotsDisplay(selectedDate || new Date());
                } catch (e) {
                    console.error(e);
                    alert('Error al anular la cita');
                }
            }

            function generateConfirmationEmail(data) {
                return {
                    to: data.email,
                    bcc: "automatizaciones.empresas@gmail.com",
                    subject: "✅ Cita Confirmada - AutomatizaPro",
                    html: `
                        <h2>¡Hola ${data.name}!</h2>
                        <p>Tu cita de diagnóstico gratuito ha sido confirmada:</p>

                        <div style="background: #f0f7ff; padding: 20px; border-radius: 10px; margin: 20px 0;">
                            <h3>📅 Detalles de tu cita:</h3>
                            <p><strong>Fecha:</strong> ${formatDisplayDate(
                                createDateFromString(data.date)
                            )}</p>
                            <p><strong>Hora:</strong> ${
                                data.time
                            } (España/Madrid)</p>
                            <p><strong>Duración:</strong> 1 hora</p>
                            <p><strong>Modalidad:</strong> Videoconferencia</p>
                            <p><strong>Tipo:</strong> ${data.type}</p>
                        </div>

                        <h3>📺 Enlace de videoconferencia:</h3>
                        <p><a href="#" style="color: #0066cc;">https://meet.automatizapro.com/diagnostico-${Date.now()}</a></p>

                        <h3>📋 Lo que analizaremos:</h3>
                        <ul>
                            <li>Procesos actuales de tu empresa</li>
                            <li>Oportunidades de automatización</li>
                            <li>ROI estimado y plan de acción</li>
                            <li>Respuesta a todas tus preguntas</li>
                        </ul>

                        <p><strong>¿Necesitas cambiar la cita?</strong></p>
                        <p><a href="#" style="color: #0066cc;">Reprogramar o cancelar cita</a></p>

                        <p>¡Nos vemos pronto!</p>
                        <p>Equipo AutomatizaPro</p>
                    `,
                };
            }

            function showLoading(show) {
                const loading = document.getElementById("loading");
                loading.classList.toggle("show", show);
            }

            function showConfirmation(email) {
                const modal = document.getElementById("confirmation-modal");
                document.getElementById("confirmed-email").textContent = email;
                modal.style.display = "flex";
            }

            function closeConfirmation() {
                const modal = document.getElementById("confirmation-modal");
                modal.style.display = "none";
            }

            function resetAppointmentForm() {
                document.getElementById("appointment-booking-form").reset();
                hideAppointmentForm();

                // Limpiar selecciones visuales
                document
                    .querySelectorAll(
                        ".calendar-day.selected, .time-slot.selected"
                    )
                    .forEach((el) => {
                        el.classList.remove("selected");
                    });

                selectedDate = null;
                selectedTime = null;
            }

            // ==========================================
            // UTILIDADES
            // ==========================================
            function formatDisplayDate(date) {
                const options = {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: CONFIG.timezone,
                };
                return date.toLocaleDateString("es-ES", options);
            }

            function parseTime(timeStr) {
                const [hours, minutes] = timeStr.split(":").map(Number);
                return hours * 60 + minutes;
            }

            function formatTime(minutes) {
                const hours = Math.floor(minutes / 60);
                const mins = minutes % 60;
                return `${hours.toString().padStart(2, "0")}:${mins
                    .toString()
                    .padStart(2, "0")}`;
            }

            // ==========================================
            // INICIALIZACIÓN
            // ==========================================
            document.addEventListener("DOMContentLoaded", function () {
                console.log("🚀 Inicializando calendario...");
                initializeCalendar();
                const cancelBookingBtn = document.getElementById('cancel-booking-btn');
                if (cancelBookingBtn) {
                    cancelBookingBtn.addEventListener('click', cancelBookedAppointment);
                }
            });

            // Cerrar modal al hacer click fuera
            document
                .getElementById("confirmation-modal")
                .addEventListener("click", function (e) {
                    if (e.target === this) {
                        closeConfirmation();
                    }
                });

            // Exponer función para cerrar modal
            window.closeConfirmation = closeConfirmation;

            // =============================
// FUNCIONES AUXILIARES PARA ACTUALIZAR SECCIONES
// =============================

function updateStatsSection() {
    const statItems = document.querySelectorAll('.stat-item');
    if (statItems.length >= 3) {
        // Primer stat (20h)
        const hoursStat = statItems[0];
        hoursStat.querySelector('.stat-number').textContent = t('stats-hours');
        hoursStat.querySelector('.stat-label').textContent = t('stats-hours-label');
        
        // Segundo stat (95%)
        const errorsStat = statItems[1];
        errorsStat.querySelector('.stat-number').textContent = t('stats-errors');
        errorsStat.querySelector('.stat-label').textContent = t('stats-errors-label');
        
        // Tercer stat (30)
        const roiStat = statItems[2];
        roiStat.querySelector('.stat-number').textContent = t('stats-roi');
        roiStat.querySelector('.stat-label').textContent = t('stats-roi-label');
    }
}

function updateAcademiaPractica(){
    const adecademiatitulo = document.querySelector('.ap_titulo');
    if (adecademiatitulo) adecademiatitulo.textContent = t('aptitulopagina');

    const adecademiah2 = document.querySelector('.highlight h2');
    if (adecademiah2) adecademiah2.textContent = t('aptituloh2');

    //Negrita en los tres idiomas partes de la frase
    const highlightparrafo1 = document.querySelector('.highlight p:first-of-type');
    if (highlightparrafo1) highlightparrafo1.innerHTML = t('apparrafo1', { interpolation: { escapeValue: false } });

    const highlightparrafo2 = document.querySelector('.highlight p:nth-of-type(2)');
    if (highlightparrafo2) highlightparrafo2.innerHTML = t('apparrafo2', { interpolation: { escapeValue: false } });
   //fin negrita

    const tafeaturestitulo = document.querySelector('.tfeatures h2');
    if (tafeaturestitulo) tafeaturestitulo.textContent = t('tapfeaturestitulo');

    const tafeatureh3e1 = document.querySelector('.featureh3e1');
    if (tafeatureh3e1) tafeatureh3e1.textContent = t('apfeaturesh3e1');

    const tafeaturepe1 = document.querySelector('.featurepe1');
    if (tafeaturepe1) tafeaturepe1.textContent = t('apfeaturespe1');

    const tafeatureh3e2 = document.querySelector('.featureh3e2');
    if (tafeatureh3e2) tafeatureh3e2.textContent = t('apfeaturesh3e2');

    const tafeaturepe2 = document.querySelector('.featurepe2');
    if (tafeaturepe2) tafeaturepe2.textContent = t('apfeaturespe2');

    const tafeatureh3e3 = document.querySelector('.featureh3e3');
    if (tafeatureh3e3) tafeatureh3e3.textContent = t('apfeaturesh3e3');

    const tafeaturepe3 = document.querySelector('.featurepe3');
    if (tafeaturepe3) tafeaturepe3.textContent = t('apfeaturespe3');

    const tacomparativetitulo = document.querySelector('.comparative');
    if (tacomparativetitulo) tacomparativetitulo.textContent = t('apcomparativetitulo');

    const tatableth1 = document.querySelector('.tableth1');
    if (tatableth1) tatableth1.textContent = t('aptatableth1');

    const tatableth2 = document.querySelector('.tableth2');
    if (tatableth2) tatableth2.textContent = t('aptatableth2');

    const tatabletd1row1 = document.querySelector('.tabletd1row1');
    if (tatabletd1row1) tatabletd1row1.textContent = t('aptabletd1row1');

    const tatabletd2row1 = document.querySelector('.tabletd2row1');
    if (tatabletd2row1) tatabletd2row1.textContent = t('aptabletd2row1');

    const tatabletd1row2 = document.querySelector('.tabletd1row2');
    if (tatabletd1row2) tatabletd1row2.textContent = t('aptabletd1row2');

    const tatabletd2row2 = document.querySelector('.tabletd2row2');
    if (tatabletd2row2) tatabletd2row2.textContent = t('aptabletd2row2');

    const tatabletd1row3 = document.querySelector('.tabletd1row3');
    if (tatabletd1row3) tatabletd1row3.textContent = t('aptabletd1row3');

    const tatabletd2row3 = document.querySelector('.tabletd2row3');
    if (tatabletd2row3) tatabletd2row3.textContent = t('aptabletd2row3');

    const tatabletd1row4 = document.querySelector('.tabletd1row4');
    if (tatabletd1row4) tatabletd1row4.textContent = t('aptabletd1row4');

    const tatabletd2row4 = document.querySelector('.tabletd2row4');
    if (tatabletd2row4) tatabletd2row4.textContent = t('aptabletd2row4');

    const taplanstitulo = document.querySelector('.planstitulo');
    if (taplanstitulo) taplanstitulo.textContent = t('applanstitulo');

    const tafreesuscription = document.querySelector('.freesuscription');
    if (tafreesuscription) tafreesuscription.textContent = t('apfreesuscription');

    const tapaysuscription = document.querySelector('.paysuscription');
    if (tapaysuscription) tapaysuscription.textContent = t('appaysuscription');

//Negrita 5E/mes o 40 €/año en los tres idiomas
const taplanprice = document.querySelector('.plan2 p');
if (taplanprice) {
  taplanprice.innerHTML = t('applanprice', { interpolation: { escapeValue: false } });
}
//fin negrita


    const taplanul1li = document.querySelector('.plan ul li:first-child');
    if (taplanul1li) taplanul1li.textContent = t('applanul1li');

    const taplanul2li = document.querySelector('.plan ul li:nth-child(2)');
    if (taplanul2li) taplanul2li.textContent = t('applanul2li');

    const tabtnfree = document.querySelector('.btnfree');
    if (tabtnfree) tabtnfree.textContent = t('apbtnfree');

    const taplan2ul1li = document.querySelector('.plan2 ul li:first-child');
    if (taplan2ul1li) taplan2ul1li.textContent = t('applan2ul1li');

    const taplan2ul2li = document.querySelector('.plan2 ul li:nth-child(2)');
    if (taplan2ul2li) taplan2ul2li.textContent = t('applan2ul2li');

    const taplan2ul3li = document.querySelector('.plan2 ul li:nth-child(3)');
    if (taplan2ul3li) taplan2ul3li.textContent = t('applan2ul3li');

    const tabtnpay = document.querySelector('.btnpay');
    if (tabtnpay) tabtnpay.textContent = t('apbtnpay');

    const adhelpacademiah2 = document.querySelector('.helpacademia h2');
    if (adhelpacademiah2) adhelpacademiah2.textContent = t('aphelpacademiah2');

    //Ponemos en negrita o emfatizamos parte del texto con atributos html por eso utilizamos innherhtml

    const adhelpacademia1p = document.querySelector('.helpacademia p:first-of-type');
    if (adhelpacademia1p) adhelpacademia1p.innerHTML = t('aphelpacademia1p', { interpolation: { escapeValue: false } });

    const adhelpacademia2p = document.querySelector('.helpacademia p:nth-of-type(2)');
    if (adhelpacademia2p) adhelpacademia2p.innerHTML = t('aphelpacademia2p', { interpolation: { escapeValue: false } });
    //fin negrita

    }

function updateCursosSection() {

    const p2titulo = document.querySelector('.p2_titulo');
    if (p2titulo) p2titulo.textContent = t('p2titulocursos');

    const p2subtitulo = document.querySelector('#cursos h2');
    if (p2subtitulo) p2subtitulo.textContent = t('p2subtitulocursos');

    const p2parrafo = document.querySelector('#cursos p');
    if (p2parrafo) p2parrafo.textContent = t('p2parrafocursos');

    const p2_cards = document.querySelectorAll('.p2_card');
    
    if (p2_cards.length >= 2) {
        // Card 1: IA Niños
        const p2card1 = p2_cards[0];
        p2card1.querySelector('h3').textContent = t('cursos-ianinos-title');
        p2card1.querySelector('p').textContent = t('cursos-ianinos-desc');        
        
        // Card 2: Automatización Procesos
        const p2card2 = p2_cards[1];
        p2card2.querySelector('h3').textContent = t('cursos-autproc-title');
        p2card2.querySelector('p').textContent = t('cursos-autproc-desc');       
       
    }
}


function updateServicesSection() {
    const cards = document.querySelectorAll('#servicios .card');
    if (cards.length >= 6) {
        // Card 1: Automatización
        const card1 = cards[0];
        card1.querySelector('h3').textContent = t('service-automation-title');
        card1.querySelector('p').textContent = t('service-automation-desc');
        card1.querySelector('strong').textContent = t('service-automation-roi');
        
        // Card 2: Marketing
        const card2 = cards[1];
        card2.querySelector('h3').textContent = t('service-marketing-title');
        card2.querySelector('p').textContent = t('service-marketing-desc');
        card2.querySelector('strong').textContent = t('service-marketing-roi');
        
        // Card 3: Reportes
        const card3 = cards[2];
        card3.querySelector('h3').textContent = t('service-reports-title');
        card3.querySelector('p').textContent = t('service-reports-desc');
        card3.querySelector('strong').textContent = t('service-reports-roi');

        // Card 4: WEB
        const card4 = cards[3];
        card4.querySelector('h3').textContent = t('service-web-title');
        card4.querySelector('p').textContent = t('service-web-desc');
        card4.querySelector('strong').textContent = t('service-web-roi');

        // Card 5: IA
        const card5 = cards[4];
        card5.querySelector('h3').textContent = t('service-ai-title');
        card5.querySelector('p').textContent = t('service-ai-desc');
        card5.querySelector('strong').textContent = t('service-ai-roi');

        // Card 6: FORMACIÓN EMPRESAS
        const card6 = cards[5];
        card6.querySelector('h3').textContent = t('service-school-title');
        card6.querySelector('p').textContent = t('service-school-desc');
        card6.querySelector('strong').textContent = t('service-school-roi');
    }
}

function updateFeaturedProductsSection() {
    const section = document.querySelector("#productos-destacados");

    if (!section) return;

    // TÍTULO SECCIÓN
    const title = section.querySelector("h2");

    if (title) {
        title.textContent = t("featuredTitle");
    }

    // CARDS
    const cards = section.querySelectorAll(".product-card");

    if (cards.length >= 3) {

        // CARD 1 - GAFAS IA
        const card1 = cards[0];

        card1.querySelector(".product-tag").textContent =
            t("gadget1Tag");

        card1.querySelector("h3").textContent =
            t("gadget1Title");

        card1.querySelector("p").textContent =
            t("gadget1Text");


        // CARD 2 - AURICULARES IA
        const card2 = cards[1];

        card2.querySelector(".product-tag").textContent =
            t("gadget2Tag");

        card2.querySelector("h3").textContent =
            t("gadget2Title");

        card2.querySelector("p").textContent =
            t("gadget2Text");


        // CARD 3 - PLAUD
        const card3 = cards[2];

        card3.querySelector(".product-tag").textContent =
            t("product3Tag");

        card3.querySelector("h3").textContent =
            t("product3Title");

        card3.querySelector("p").textContent =
            t("product3Text");
    }

    // BOTONES AMAZON
    const amazonButtons =
        section.querySelectorAll("[data-i18n-amazon-button]");

    amazonButtons.forEach(function (button) {
        button.textContent = t("amazonButton");
    });

    // BOTÓN VER MÁS PRODUCTOS
    const moreBtn =
        section.querySelector(".featured-products-more");

    if (moreBtn) {
        moreBtn.textContent =
            t("featuredProductsMore");
    }
}

function updateProcessSection() {
    const steps = document.querySelectorAll('.process-step');
    const stepKeys = ['step-1', 'step-2', 'step-3', 'step-4'];
    
    steps.forEach((step, index) => {
        if (stepKeys[index]) {
            const h3 = step.querySelector('h3');
            const p = step.querySelector('p');
            if (h3) h3.textContent = t(`${stepKeys[index]}-title`);
            if (p) p.textContent = t(`${stepKeys[index]}-desc`);
        }
    });
}

function updateTestimonialsSection() {
    const testimonials = document.querySelectorAll('.testimonial');
    
    if (testimonials.length >= 2) {
        // Testimonial 1
        const test1 = testimonials[0];
        const p1 = test1.querySelector('p');
        const strong1 = test1.querySelector('strong');
        const results1 = test1.querySelector('div[style*="color: var(--success)"]');
        
        if (p1) p1.textContent = t('testimonial-1-text');
        if (strong1) strong1.textContent = t('testimonial-1-author');
        if (results1) results1.innerHTML = t('testimonial-1-results').replace(/\n/g, '<br>');
        
        // Testimonial 2
        const test2 = testimonials[1];
        const p2 = test2.querySelector('p');
        const strong2 = test2.querySelector('strong');
        const results2 = test2.querySelector('div[style*="color: var(--success)"]');
        
        if (p2) p2.textContent = t('testimonial-2-text');
        if (strong2) strong2.textContent = t('testimonial-2-author');  
        if (results2) results2.innerHTML = t('testimonial-2-results').replace(/\n/g, '<br>');
    }
}

function updateCalculatorSection() {
    // Título principal
    const calcTitle = document.querySelector('#calculadora h2');
    if (calcTitle) calcTitle.textContent = t('calculator-title');
    
    // Labels de los campos   
    const hoursLabel = document.querySelector('label[for="hours"]');
    if (hoursLabel) hoursLabel.textContent = t('calc-hours-label');
    
    const costLabel = document.querySelector('label[for="hourly-cost"]');
    if (costLabel) costLabel.textContent = t('calc-cost-label');
    
    const employeesLabel = document.querySelector('label[for="employees"]');
    if (employeesLabel) employeesLabel.textContent = t('calc-employees-label');
    
    // Resultados
    const painTitle = document.querySelector('.result-pain h3');
    if (painTitle) painTitle.textContent = t('calc-title-pain');
 
    
    const gainTitle = document.querySelector('.result-gain h3'); 
    if (gainTitle) gainTitle.textContent = t('calc-title-gain');
    
    // Labels de resultados   

    const savingsLabel = document.querySelector('#annual-savings-label');
    if (savingsLabel) savingsLabel.textContent = t('calc-annual-savings-label');
    
    const roiLabel = document.querySelector('#annual-roi');
    if (roiLabel) roiLabel.textContent = t('calc-roi-projected');
    
    // Botón CTA de calculadora
    const calcCta = document.querySelector('.calc-cta');
    if (calcCta) calcCta.textContent = t('calc-cta-button');
}

function updateHamburgerMenu (){

    const mhnavegacion = document.querySelector('#menu-mob-navegacionh');
    if (mhnavegacion) mhnavegacion.textContent = t('dmenu-mob-navegacionh');
    
    const mhservicios = document.querySelector('#menu-mob-serviciosh');
    if (mhservicios) mhservicios.textContent = t('dmenu-mob-serviciosh');

    const mhproceso = document.querySelector('#menu-mob-procesoh');
    if (mhproceso) mhproceso.textContent = t('dmenu-mob-procesoh');

    const mhcasos = document.querySelector('#menu-mob-casosh');
    if (mhcasos) mhcasos.textContent = t('dmenu-mob-casosh');

    const mhcalculadora = document.querySelector('#menu-mob-calculadorah');
    if (mhcalculadora) mhcalculadora.textContent = t('dmenu-mob-calculadorah');

    const mhtarjeta = document.querySelector('#menu-mob-tarjetah');
    if (mhtarjeta) mhtarjeta.textContent = t('dmenu-mob-tarjetah');

    const mhcontacto= document.querySelector('#menu-mob-contactoh');
    if (mhcontacto) mhcontacto.textContent = t('dmenu-mob-contactoh');

    const mhcalendario = document.querySelector('#menu-mob-calendarioh');
    if (mhcalendario) mhcalendario.textContent = t('dmenu-mob-calendarioh');

    const mhaprende= document.querySelector('#menu-mob-aprendeh');
    if (mhaprende) mhaprende.textContent = t('dmenu-mob-aprendeh');

    const mhejemplos= document.querySelector('#menu-mob-ejemplosh');
    if (mhejemplos) mhejemplos.textContent = t('dmenu-mob-ejemplosh');

    const mhcompra= document.querySelector('#menu-mob-comprah');
    if (mhcompra) mhcompra.textContent = t('dmenu-mob-comprah');


}

function updateContactFormSection() {
    document.querySelector('#contacto h2').textContent = t('contact-title');
    document.querySelector('label[for="name"]').textContent = t('contact-name-label');
    document.querySelector('label[for="email"]').textContent = t('contact-email-label');
    document.querySelector('label[for="phone"]').textContent = t('contact-phone-label');
    document.querySelector('label[for="company"]').textContent = t('contact-company-label');
    
    document.querySelector('label[for="contact-employees"]').textContent = t('contact-employees-label');
    const employeesSelect = document.querySelector('#contact-employees');
    if (employeesSelect) {
        const options = employeesSelect.options;
        if (options[0]) options[0].textContent = t('contact-employees-selecciona');
        if (options[1]) options[1].textContent = t('contact-employees-1-10');
        if (options[2]) options[2].textContent = t('contact-employees-11-50');
        if (options[3]) options[3].textContent = t('contact-employees-51-200');
        if (options[4]) options[4].textContent = t('contact-employees-200+');
    }
    document.querySelector('label[for="consultation-type2"]').textContent = t('contact-form-type');
    const optionsSelect = document.querySelector('#consultation-type2');
    if (optionsSelect) {
        const options = optionsSelect.options;
        if (options[0]) options[0].textContent = t('contact-opction0');
        if (options[1]) options[1].textContent = t('contact-opction1');
        if (options[2]) options[2].textContent = t('contact-opction2');
        if (options[3]) options[3].textContent = t('contact-opction3');
        if (options[4]) options[4].textContent = t('contact-opction4');
        if (options[5]) options[5].textContent = t('contact-opction5');
    }

    document.querySelector('label[for="challenge"]').textContent = t('contact-challenge-label');

    // Actualiza los placeholders de los campos
    document.querySelector('#name').placeholder = t('contact-name-label');
    document.querySelector('#email').placeholder = t('contact-email-label');
    document.querySelector('#phone').placeholder = t('contact-phone-label');
    document.querySelector('#company').placeholder = t('contact-company-label');
    document.querySelector('textarea[name="challenge"]').placeholder = t('contact-challenge-placeholder');    

    
    document.querySelector('.contact-response-time').textContent = t('contact-response-time');
    
}

function updateCalendarSection() {
    // Título principal
    const calendarTitle = document.querySelector('#calendar-header h2');
    if (calendarTitle) calendarTitle.textContent = t('calendar-title');
    
    //Botones Anterior y Siguiente

    const calendarButtonPrev = document.querySelector('#prev-month');
    if (calendarButtonPrev) calendarButtonPrev.textContent = t('calendar-Button-Prev');
    const calendarButtonNext = document.querySelector('#next-month');
    if (calendarButtonNext) calendarButtonNext.textContent = t('calendar-Button-Next');
    
   // document.getElementById("summary-date").textContent = selectedDate.toLocaleDateString(currentLanguage, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });   

    // Subtítulo
    const calendarSubtitle = document.querySelector('#calendar-header p');
    if (calendarSubtitle) calendarSubtitle.textContent = t('calendar-subtitle');
    
    // Info del calendario
    const calendarInfo = document.querySelector('#calendar-header div[style*="background: linear-gradient"]');
    if (calendarInfo) {
        const paragraphs = calendarInfo.querySelectorAll('p');
        if (paragraphs[0]) paragraphs[0].innerHTML = t('calendar-modality');
        if (paragraphs[1]) paragraphs[1].innerHTML = t('calendar-schedule');
        if (paragraphs[2]) paragraphs[2].innerHTML = t('calendar-timezone');
    }

    // Subtítulo Horas
    const calendarTime = document.querySelector('#selected-date-title');
    if (calendarTime) calendarTime.textContent = t('calendar-title-select');

    //Procesando Citas
    const loadingAppointment = document.querySelector('#loading');
    if (loadingAppointment) loadingAppointment.textContent = t('loading-appointment');

    
}

function updateVCardSection() {
    console.log("EJECUTANDO UPDATE VCARD");
    console.log('Título vCard:', t('vcard-title'));

    const vcard = document.querySelector('.vcard-info');
    if (vcard) {
        const h3 = vcard.querySelector('h3');
        const paragraphs = vcard.querySelectorAll('p');
        
        if (h3) h3.textContent = t('vcard-title');
        if (paragraphs[0]) paragraphs[0].textContent = t('vcard-email');
        if (paragraphs[1]) paragraphs[1].textContent = t('vcard-phone');
        if (paragraphs[2]) paragraphs[2].textContent = t('vcard-website');
        if (paragraphs[3]) paragraphs[3].textContent = t('vcard-location');
    }
    
    // Botones de vCard
    const vcardButtons = document.querySelectorAll('.btn-vcard');
    if (vcardButtons[0]) vcardButtons[0].textContent = t('vcard-download-text');
    if (vcardButtons[1]) vcardButtons[1].textContent = t('vcard-call-text');
    if (vcardButtons[2]) vcardButtons[2].textContent = t('vcard-email-text');
}

function updateAppointmentFormSection() {
    // Labels del formulario de cita 

    const appointmentDetails0= document.querySelector('.appointment-form h3');
    if (appointmentDetails0) appointmentDetails0.textContent = t('appointment-summary-title');
    const appointmentDetails1= document.querySelector('.appointment-summary h4');
    if (appointmentDetails1) appointmentDetails1.textContent = t('appointment-summary-subtitle');
    const appointmentDate= document.querySelector('#summary-date').previousElementSibling;
    if (appointmentDate) appointmentDate.textContent = t('appointment-summary-date');
    const appointmentTime= document.querySelector('#summary-time').previousElementSibling;
    if (appointmentTime) appointmentTime.textContent = t('appointment-summary-time');
    const appointmentDuration= document.querySelector('#summary-duration').previousElementSibling;
    if (appointmentDuration) appointmentDuration.textContent = t('appointment-summary-duration');
    const appointment1h= document.querySelector('#summary-duration');
    if (appointment1h) appointment1h.textContent = t('appointment-summary-1h');
    const appointmentMode= document.querySelector('#summary-mode').previousElementSibling;
    if (appointmentMode) appointmentMode.textContent = t('appointment-summary-mode');
    const appointmentvideoconference= document.querySelector('#summary-mode');
    if (appointmentvideoconference) appointmentvideoconference.textContent = t('appointment-summary-videoconference');


    const nameLabel = document.querySelector('#appointment-booking-form label[for="client-name"]');
    if (nameLabel) nameLabel.textContent = t('appointment-form-name');
    
    const emailLabel = document.querySelector('#appointment-booking-form label[for="client-email"]');
    if (emailLabel) emailLabel.textContent = t('appointment-form-email');
    
    const phoneLabel = document.querySelector('#appointment-booking-form label[for="client-phone"]');
    if (phoneLabel) phoneLabel.textContent = t('appointment-form-phone');
    
    const companyLabel = document.querySelector('#appointment-booking-form label[for="client-company"]');
    if (companyLabel) companyLabel.textContent = t('appointment-form-company');
    
    const typeemployees = document.querySelector('#appointment-booking-form label[for="num-employees"]');
    if (typeemployees) typeemployees.textContent = t('appointment-form-employees');
    const typenumemployees= document.querySelector('#num-employees');
    if (typenumemployees) {
        const options = typenumemployees.options;
        if (options[0]) options[0].textContent = t('appointment-employees0');
        if (options[1]) options[1].textContent = t('appointment-employees1');
        if (options[2]) options[2].textContent = t('appointment-employees2');
        if (options[3]) options[3].textContent = t('appointment-employees3');
        if (options[4]) options[4].textContent = t('appointment-employees4');
    }
    
    const typeLabel = document.querySelector('#appointment-booking-form label[for="consultation-type"]');
    if (typeLabel) typeLabel.textContent = t('appointment-form-type');
    const typeoptions = document.querySelector('#consultation-type');
    if (typeoptions) {
        const options = typeoptions.options;
        if (options[0]) options[0].textContent = t('appointment-opction0');
        if (options[1]) options[1].textContent = t('appointment-opction1');
        if (options[2]) options[2].textContent = t('appointment-opction2');
        if (options[3]) options[3].textContent = t('appointment-opction3');
        if (options[4]) options[4].textContent = t('appointment-opction4');
        if (options[5]) options[5].textContent = t('appointment-opction5');
    }
    
    const detailsLabel = document.querySelector('#appointment-booking-form label[for="consultation-details"]');
    if (detailsLabel) detailsLabel.textContent = t('appointment-form-details');

//       
const placeholder1 = document.querySelector('#appointment-booking-form textarea');
if (placeholder1) placeholder1.placeholder = t('appointment-form-placeholder');
document.querySelector('input[name="name"]').placeholder = t('contact-name-label');
document.querySelector('input[name="email"]').placeholder = t('contact-email-label');
document.querySelector('input[name="phone"]').placeholder = t('contact-phone-label');
document.querySelector('input[name="company"]').placeholder = t('contact-company-label');



    
    // Botones
    const confirmBtn = document.querySelector('#appointment-booking-form button[type="submit"]');
    if (confirmBtn) confirmBtn.textContent = t('appointment-form-confirm');
    
    const cancelBtn = document.getElementById('cancel-appointment');
    if (cancelBtn) cancelBtn.textContent = t('appointment-form-cancel');
    

}


function updateFooterSection() {
    const footer = document.querySelector('footer .footer-text1');
    if (footer) footer.textContent = t('footer-text1');

    const footer2 = document.querySelector('footer .footer-text2');
    if (footer2) footer2.textContent = t('footer-text2');

    const footer3 = document.querySelector('footer .footer-text3');
    if (footer3) footer3.textContent = t('footer-text3');

    const footer4 = document.querySelector('footer .footer-text4');
    if (footer4) footer4.innerHTML = t('footer-text4', { interpolation: { escapeValue: false } });

}

function updateDateAppointment(){
    if (selectedDate) {
        document.getElementById("summary-date").textContent =
            `${selectedDate.toLocaleDateString(currentLanguage, { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            })}`;
    } else {
        document.getElementById("summary-date").textContent = "";
        console.warn("selectedDate aún no está definido.");
    }
}



// Función de depuración para testing (disponible globalmente)
window.debugTranslations = function() {
    console.log('🔍 === DEPURACIÓN DE TRADUCCIONES ===');
    console.log('🌍 Idioma actual:', currentLanguage);
    console.log('📚 Traducciones disponibles:', Object.keys(translations[currentLanguage]));
    
    // Información sobre detección de idioma
    console.log('🌐 Información del navegador:');
    console.log('  - Idioma principal:', navigator.language);
    console.log('  - Idiomas preferidos:', navigator.languages);
    console.log('  - Idioma guardado en localStorage:', localStorage.getItem('preferredLanguage'));
    
    // Verificar elementos h2
    const h2Elements = document.querySelectorAll('h2');
    console.log('📋 Elementos h2 encontrados:', h2Elements.length);
    h2Elements.forEach((h2, index) => {
        console.log(`  ${index + 1}. "${h2.textContent.trim()}"`);
    });
    
    // Verificar elementos de navegación
    const navElements = document.querySelectorAll('nav a[data-track]');
    console.log('🧭 Elementos de navegación encontrados:', navElements.length);
    navElements.forEach((nav, index) => {
        const trackKey = nav.getAttribute('data-track');
        console.log(`  ${index + 1}. "${nav.textContent.trim()}" (data-track: ${trackKey})`);
    });
    
    console.log('🔍 === FIN DEPURACIÓN ===');
};

// Función para mostrar información de detección de idioma
window.debugLanguageDetection = function() {
    console.log('🌍 === DETECCIÓN DE IDIOMA ===');
    console.log('🌐 Idioma del navegador:', navigator.language);
    console.log('🌐 Idiomas preferidos:', navigator.languages);
    console.log('💾 Idioma guardado:', localStorage.getItem('preferredLanguage'));
    console.log('🎯 Idioma actual:', currentLanguage);
    console.log('🌍 === FIN DETECCIÓN ===');
};

// ========================================
// MOBILE BOTTOM NAVIGATION FUNCTIONALITY
// ========================================

let currentActiveSection = 'servicios';

function initializeMobileNavigation() {
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    
    // Agregar event listeners a cada elemento de navegación
    mobileNavItems.forEach(item => {
        item.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            const trackKey = this.getAttribute('data-track');
            
            // Track del evento
            if (trackKey) {
                trackEvent('mobile_navigation_click', { section: section, track: trackKey });
            }
            
            // Navegar a la sección
            navigateToSection(section);
            
            // Actualizar estado activo
            updateMobileNavActiveState(section);
        });
    });
    
    // Detectar sección activa al hacer scroll
    window.addEventListener('scroll', debounce(detectActiveSection, 100));
    
    // Detectar sección activa al cargar la página
    setTimeout(detectActiveSection, 500);
    
    // Inicializar menú móvil
    initializeMobileMenu();
}

function navigateToSection(section) {
    if (section === 'inicio') {
        // Scroll al inicio de la página
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Actualizar URL sin recargar la página
        history.pushState(null, null, '#');
        
        currentActiveSection = 'inicio';
    } else {
        const targetElement = document.getElementById(section);
        if (targetElement) {
            // Scroll suave a la sección
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Actualizar URL sin recargar la página
            history.pushState(null, null, `#${section}`);
            
            currentActiveSection = section;
        }
    }
}

function updateMobileNavActiveState(section) {
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    
    mobileNavItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === section) {
            item.classList.add('active');
        }
    });
}

function detectActiveSection() {
    const sections = ['servicios', 'proceso', 'casos', 'calculadora', 'vcard', 'calendario', 'contacto'];
    const scrollPosition = window.scrollY + 100; // Offset para mejor detección
    
    let activeSection = 'servicios'; // Default
    
    // Si estamos en la parte superior de la página, activar "inicio"
    if (scrollPosition < 200) {
        activeSection = 'inicio';
    } else {
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const elementTop = element.offsetTop;
                const elementBottom = elementTop + element.offsetHeight;
                
                if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                    activeSection = section;
                }
            }
        });
    }
    
    if (activeSection !== currentActiveSection) {
        currentActiveSection = activeSection;
        updateMobileNavActiveState(activeSection);
    }
}

// Función debounce para optimizar el scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Actualizar navegación móvil cuando cambie el idioma
function updateMobileNavigationTranslations() {
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    
    mobileNavItems.forEach(item => {
        const section = item.getAttribute('data-section');
        const labelElement = item.querySelector('.mobile-nav-label');
        
        if (labelElement) {
            switch(section) {
                case 'inicio':
                    labelElement.textContent = t('nav-inicio') || 'Inicio';
                    break;
                case 'servicios':
                    labelElement.textContent = t('nav-servicios');
                    break;
                case 'proceso':
                    labelElement.textContent = t('nav-proceso');
                    break;
                case 'calculadora':
                    labelElement.textContent = t('nav-calculadora');
                    break;
                case 'calendario':
                    labelElement.textContent = t('nav-calendario');
                    break;
                case 'contacto':
                    labelElement.textContent = t('nav-contacto');
                    break;
                case 'aprende':
                    labelElement.textContent = t('nav-aprende');
                    break;
                case 'ejemplos':
                labelElement.textContent = t('nav-ejemplos');
                break;
            }
        }
    });
}

// Inicializar menú móvil
function initializeMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuOverlay = document.getElementById('mobile-menu-overlay');
    const menuClose = document.getElementById('mobile-menu-close');
    const menuLinks = document.querySelectorAll('.mobile-menu-nav a');
    
    console.log('Inicializando menú móvil...');
    console.log('Menu toggle:', menuToggle);
    console.log('Menu overlay:', menuOverlay);
    console.log('Menu close:', menuClose);
    console.log('Menu links:', menuLinks.length);
    
    // Abrir menú
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            console.log('Abriendo menú móvil');
            menuOverlay.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevenir scroll
            // trackEvent('mobile_menu_open');
        });
    }
    
    // Cerrar menú
    if (menuClose) {
        menuClose.addEventListener('click', function() {
            console.log('Cerrando menú móvil');
            menuOverlay.classList.remove('show');
            document.body.style.overflow = ''; // Restaurar scroll
            // trackEvent('mobile_menu_close');
        });
    }
    
    // Cerrar menú al hacer clic en el overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function(e) {
            if (e.target === menuOverlay) {
                console.log('Cerrando menú por overlay');
                menuOverlay.classList.remove('show');
                document.body.style.overflow = '';
                // trackEvent('mobile_menu_close_overlay');
            }
        });
    }
    
    // Navegar y cerrar menú al hacer clic en enlaces
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const trackKey = this.getAttribute('data-track');
            
            console.log('Navegando a:', href);
            
            // Track del evento
            // if (trackKey) {
            //     trackEvent('mobile_menu_navigation', { link: href, track: trackKey });
            // }
            
            // Navegar a la sección
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Cerrar menú
            menuOverlay.classList.remove('show');
            document.body.style.overflow = '';
            
            // Actualizar navegación inferior
            if (typeof updateMobileNavActiveState === 'function') {
                updateMobileNavActiveState(targetId);
            }
        });
    });
    
    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuOverlay.classList.contains('show')) {
            console.log('Cerrando menú con Escape');
            menuOverlay.classList.remove('show');
            document.body.style.overflow = '';
            // trackEvent('mobile_menu_close_escape');
        }
    });
    
                console.log('Menú móvil inicializado correctamente');
            
            // Verificación adicional para debug
            console.log('Estado inicial del menú:', menuOverlay.classList.contains('show'));
            console.log('Elementos encontrados:', {
                toggle: !!menuToggle,
                overlay: !!menuOverlay,
                close: !!menuClose,
                links: menuLinks.length
            });
}

// Inicialización automática
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}   