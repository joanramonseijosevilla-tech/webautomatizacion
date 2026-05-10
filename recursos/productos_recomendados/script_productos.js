document.addEventListener("DOMContentLoaded", function () {
    initDarkMode();
    initMobileMenu();
    initLanguageSelector();
    initProductFilters();

    var savedLang = localStorage.getItem("language") || "es";
    setLanguage(savedLang);
});

/* =============================
   MODO OSCURO / CLARO
============================= */
function initDarkMode() {
    var btn = document.getElementById("dark-mode-toggle");
    if (!btn) return;

    var isDark = localStorage.getItem("darkMode") === "true";

    if (isDark) {
        document.body.classList.add("dark-mode");
        btn.textContent = "☀️";
    } else {
        document.body.classList.remove("dark-mode");
        btn.textContent = "🌙";
    }

    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        var nowDark = document.body.classList.contains("dark-mode");

        localStorage.setItem("darkMode", String(nowDark));
        btn.textContent = nowDark ? "☀️" : "🌙";
    });
}

/* =============================
   MENU MOVIL
============================= */
function initMobileMenu() {
    var openBtn = document.getElementById("mobile-menu-toggle");
    var closeBtn = document.getElementById("mobile-menu-close");
    var overlay = document.getElementById("mobile-menu-overlay");

    if (!openBtn || !closeBtn || !overlay) return;

    openBtn.addEventListener("click", function () {
        overlay.classList.add("active");
    });

    closeBtn.addEventListener("click", function () {
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
            overlay.classList.remove("active");
        }
    });
}

/* =============================
   TRADUCCIONES
============================= */
var translations = {
    es: {
        navServicios: "Servicios",
        navProceso: "Proceso",
        navCasos: "Casos de Éxito",
        navCalculadora: "Calculadora ROI",
        navTarjeta: "Tarjeta visita",
        navCita: "Reservar cita",
        navContacto: "Contacto",
        navAprende: "🎓 Aprende con Nosotros",
        navProductos: "🛒 Productos recomendados",

        heroTitle: "🛒 Productos recomendados para trabajar con IA",
        heroSubtitle: "Selección de libros, dispositivos, accesorios y recursos útiles para aprender inteligencia artificial, automatizar tareas, crear contenido y mejorar tu productividad digital.",
        affiliateNotice: "<strong>Transparencia:</strong> Esta página contiene enlaces de afiliado de Amazon. Si compras a través de ellos, podemos recibir una pequeña comisión sin coste adicional para ti. Solo recomendamos productos que consideramos útiles y relacionados con inteligencia artificial, automatización y productividad.",

        criteriaText1: "No presentamos estos productos como una tienda propia ni tenemos stock. Son recomendaciones seleccionadas para personas interesadas en inteligencia artificial, automatización, formación digital y productividad.",
        criteriaText2: "Antes de comprar, revisa siempre las características, opiniones, precio actualizado y condiciones directamente en Amazon.",

        footer1: "© 2025 Nexautia. Transformando empresas con automatización inteligente.",
        footer2: "Creado con ❤️ por Nexautia para el traspaso de conocimiento",
        footer3: "¡Sigue explorando el increíble mundo de la automatización de empresas y la Inteligencia Artificial!",

        filterAll: "Todos",
        filterDevices: "Dispositivos IA",
        filterBooks: "Libros IA",
        filterProductivity: "Productividad IA",
        filterContent: "Creación de contenido",
        
        featuredTitle: "⭐ Recomendados destacados",
        booksTitle: "📚 Libros sobre IA, automatización y tecnología",
        contentTitle: "🎙️ Creación de contenido con IA",
        productivityTitle: "💻 Productividad y espacio de trabajo",
        gadgetsTitle: "🤖 Dispositivos IA",
        criteriaTitle: "📌 Nuestro criterio de recomendación",

        product1Tag: "Para empezar",
        product1Title: "Libro introductorio sobre inteligencia artificial",
        product1Text: "Ideal para personas que quieren entender la IA desde cero, sin entrar directamente en explicaciones demasiado técnicas.",

        product2Tag: "Creación de contenido",
        product2Title: "Micrófono para vídeos, cursos y reuniones online",
        product2Text: "Recomendado para grabar contenidos, formaciones o vídeos sobre IA con una calidad de audio más profesional.",

        product3Tag: "Productividad",
        product3Title: "Dispositivo de IA que graba, transcribe y resume automáticamente",
        product3Text: "Graba reuniones, convierte el audio en texto y genera resúmenes automáticamente gracias a la inteligencia artificial. Una herramienta práctica para ahorrar tiempo, organizar ideas y no perder información importante.",

        book1Tag: "IA básica",
        book1Title: "Introducción sencilla a la Inteligencia Artificial",
        book1Text: "Libro recomendado para iniciarse en la inteligencia artificial de forma clara y accesible. Ideal para personas que quieren entender qué es la IA, cómo funciona y cómo puede aplicarse en el trabajo, la automatización y la vida cotidiana.",

        book2Tag: "Programación",
        book2Title: "Libro de Machine Learning con Python (nivel principiante–intermedio)",
        book2Text: "Este libro es ideal para dar el salto desde Python básico al mundo de la inteligencia artificial. Aprenderás a crear modelos de machine learning utilizando herramientas reales como Scikit-Learn y TensorFlow, a través de ejemplos prácticos y aplicados a casos reales.",

        book3Tag: "Automatización",
        book3Title: "Libros de productividad y automatización de procesos digitales",
        book3Text: "Selección de libros para aprender a automatizar tareas, optimizar procesos y ahorrar tiempo mediante herramientas reales. Ideal para aplicar automatización en empresas, tiendas online y flujos de trabajo sin intervención manual.",

        content1Tag: "Creación de contenido",
        content1Title: "Hollyland Lark M2 Combo – Micrófono inalámbrico ultracompacto para creación de contenido",
        content1Text: "<b>El Hollyland Lark M2</b> Combo es un sistema de micrófono inalámbrico diseñado para creadores de contenido, YouTube, TikTok, entrevistas y streaming. Destaca por su tamaño extremadamente compacto y ligero, ofreciendo un sonido claro y profesional sin necesidad de equipos complejos.<br><br>La versión Combo incluye compatibilidad con cámaras, smartphones USB-C y dispositivos Lightning, lo que permite grabar fácilmente en prácticamente cualquier entorno. Además, incorpora cancelación de ruido inteligente y un estuche de carga portátil para mejorar la autonomía durante las grabaciones.<br><br>Ideal para vídeos, reels, podcasts, entrevistas y contenido para redes sociales.",

        content2Tag: "Creación de contenido",
        content2Title: "<b>Elgato Stream Deck +</b> – Controlador inteligente para creación de contenido y automatización",
        content2Text: "<b>El Elgato Stream Deck +</b> es un controlador físico diseñado para creadores de contenido, streamers, editores y usuarios que quieren automatizar tareas de forma rápida y sencilla. Incorpora botones LCD personalizables, controles giratorios y pantalla táctil para gestionar acciones con un solo toque.<br><br>Permite controlar aplicaciones, cambiar escenas en streaming, ajustar volumen, lanzar automatizaciones, abrir herramientas de IA o ejecutar accesos rápidos sin interrumpir el flujo de trabajo.Ideal para streaming, YouTube, edición de vídeo, productividad y automatización de contenido.",

        content3Tag: "Creación de contenido",
        content3Title: "<strong>Amaran 200x S</strong> – Foco LED profesional para creación de contenido y vídeo",
        content3Text: "<strong>Amaran 200x S</strong> es un foco LED profesional de 200W pensado para <strong>creadores de contenido</strong>, <strong>YouTube</strong>, <strong>streaming</strong>, entrevistas y producción audiovisual.<br><br>Destaca por ofrecer una iluminación potente, uniforme y con colores naturales, muy utilizada en setups de vídeo profesionales y estudios de grabación.<br><br>Permite ajustar la temperatura de color entre tonos cálidos y fríos, adaptándose fácilmente a diferentes estilos de grabación y ambientes. Además, es compatible con modificadores de luz tipo Bowens para conseguir resultados más cinematográficos.<br><br>Ideal para <strong>YouTube</strong>, <strong>podcasts</strong>, <strong>streaming</strong>, vídeos tecnológicos, entrevistas y creación de contenido profesional.",

        content4Tag: "Creación de contenido",
        content4Title: "<strong>Sony Alpha ZV-E10K</strong> – Cámara mirrorless profesional para creación de contenido y YouTube",
        content4Text: "<strong>Sony Alpha ZV-E10K</strong> es una cámara mirrorless APS-C diseñada especialmente para <strong>creadores de contenido</strong>, <strong>YouTube</strong>, <strong>streaming</strong>, entrevistas y videoblogs.<br><br>Incorpora un sensor APS-C de 24,2 MP, grabación de vídeo en <strong>4K</strong>, enfoque automático <strong>Eye AF en tiempo real</strong> y objetivos intercambiables para conseguir una imagen mucho más profesional y cinematográfica.<br><br>Su pantalla abatible facilita la grabación de vlogs y contenido para redes sociales, mientras que el micrófono direccional integrado mejora la captura de voz durante las grabaciones.<br><br>Ideal para <strong>YouTube</strong>, <strong>streaming</strong>, podcasts, entrevistas, vídeos tecnológicos y creación de contenido profesional.",

        content5Tag: "Creación de contenido",
        content5Title: "<strong>DJI Osmo Pocket 3</strong> – Cámara compacta profesional para creación de contenido y vlogging",
        content5Text: "<strong>DJI Osmo Pocket 3</strong> es una cámara compacta diseñada para <strong>creadores de contenido</strong>, <strong>YouTube</strong>, <strong>vlogging</strong>, viajes y vídeos para redes sociales.<br><br>Incorpora un sensor de 1 pulgada, grabación de vídeo en <strong>4K</strong> y estabilización mecánica en 3 ejes para conseguir imágenes fluidas y profesionales incluso grabando en movimiento.<br><br>Su diseño compacto permite llevarla fácilmente en el bolsillo, mientras que la pantalla táctil giratoria facilita la grabación de contenido vertical y horizontal para diferentes plataformas.<br><br>Ideal para <strong>YouTube</strong>, <strong>reels</strong>, <strong>TikTok</strong>, viajes, entrevistas y creación de contenido profesional.",

        content6Tag: "Creación de contenido",
        content6Title: "<strong>RØDECaster Pro II</strong> – Estudio profesional de podcast y creación de contenido",
        content6Text: "<strong>RØDECaster Pro II</strong> es una consola de producción de audio diseñada para <strong>podcasts</strong>, <strong>streaming</strong>, entrevistas y creación de contenido profesional.<br><br>Integra mezclador de audio, grabadora, interfaz USB y controles físicos en un único dispositivo pensado para simplificar la producción de contenido y mejorar la calidad del sonido.<br><br>Incorpora pantalla táctil, faders profesionales, pads programables y conectividad para micrófonos, auriculares, ordenadores y dispositivos móviles, permitiendo gestionar grabaciones y directos desde un solo equipo.<br><br>Ideal para <strong>podcasts</strong>, <strong>YouTube</strong>, <strong>streaming</strong>, entrevistas, estudios de grabación y setups profesionales de creación de contenido.",

        productivity1Tag: "Trabajo diario",
        productivity1Title: "Monitor externo",
        productivity1Text: "Muy útil para trabajar con IA, documentación, automatizaciones y varias herramientas abiertas al mismo tiempo.",

        productivity2Tag: "Comodidad",
        productivity2Title: "Teclado y ratón ergonómicos",
        productivity2Text: "Una mejora sencilla para trabajar más cómodo durante muchas horas creando contenido, programando o automatizando tareas.",

        productivity3Tag: "Ergonomía",
        productivity3Title: "Silla o soporte ergonómico",
        productivity3Text: "Para mejorar la postura y la comodidad si trabajas muchas horas delante del ordenador.",

        gadget1Tag: "Dispositivos IA",
        gadget1Title: "Gafas inteligentes con inteligencia artificial",
        gadget1Text: "Gafas inteligentes con funciones de traducción en tiempo real, asistentes IA y control por voz. Un ejemplo interesante de cómo la inteligencia artificial empieza a integrarse en dispositivos cotidianos y experiencias manos libres.",

        gadget2Tag: "Dispositivos IA",
        gadget2Title: "Auriculares inteligentes con traducción IA",
        gadget2Text: "Auriculares con inteligencia artificial capaces de traducir conversaciones en tiempo real entre múltiples idiomas. Un ejemplo práctico de cómo la IA empieza a eliminar barreras de comunicación en viajes, reuniones y trabajo internacional.",

        gadget3Tag: "Dispositivos IA",
        gadget3Title: "Anillos inteligentes y wearables con IA",
        gadget3Text: "Descubre anillos inteligentes y wearables con inteligencia artificial capaces de monitorizar sueño, actividad física, estrés y salud en tiempo real. Tecnología futurista aplicada a productividad, bienestar y automatización personal.",

        gadget4Tag: "Dispositivos IA",
        gadget4Title: "PLAUD NotePin: wearable inteligente con IA para reuniones y productividad",
        gadget4Text: "Descubre el PLAUD NotePin, un wearable ultraligero de solo 16,7 gramos capaz de grabar conversaciones, transcribir reuniones y generar resúmenes automáticos mediante inteligencia artificial. Ideal para productividad, notas y automatización personal en tiempo real.",

        gadget5Tag: "Dispositivos IA",
        gadget5Title: "<b>PenGPT AI Smart Pen</b> - Bolígrafo inteligente con IA, OCR y traducción en tiempo real",
        gadget5Text: "Un avanzado <b>bolígrafo inteligente con inteligencia artificial</b> capaz de <b>escanear textos</b>, realizar <b>traducciones en tiempo real</b> y ofrecer funciones inteligentes mediante tecnología tipo <b>ChatGPT</b>.<br><br>Este gadget futurista incorpora <b>pantalla táctil HD</b>, reconocimiento <b>OCR</b>, traducción multilenguaje y herramientas ideales para estudiantes, productividad, trabajo y viajes.<br><br><b>✔ Escaneo inteligente OCR</b><br><b>✔ Traducción instantánea multilenguaje</b><br><b>✔ Funciones IA tipo ChatGPT</b><br><b>✔ Pantalla táctil integrada</b><br><b>✔ Gadget tecnológico futurista</b>",

        amazonButton: "Ver en Amazon"
    },

    ca: {
        navServicios: "Serveis",
        navProceso: "Procés",
        navCasos: "Casos d'èxit",
        navCalculadora: "Calculadora ROI",
        navTarjeta: "Targeta de visita",
        navCita: "Reservar cita",
        navContacto: "Contacte",
        navAprende: "🎓 Aprèn amb nosaltres",
        navProductos: "🛒 Productes recomanats",

        heroTitle: "🛒 Productes recomanats per treballar amb IA",
        heroSubtitle: "Selecció de llibres, dispositius, accessoris i recursos útils per aprendre intel·ligència artificial, automatitzar tasques, crear contingut i millorar la productivitat digital.",
        affiliateNotice: "<strong>Transparència:</strong> Aquesta pàgina conté enllaços d'afiliat d'Amazon. Si compres a través d'aquests enllaços, podem rebre una petita comissió sense cap cost addicional per a tu. Només recomanem productes que considerem útils i relacionats amb intel·ligència artificial, automatització i productivitat.",

        criteriaText1: "No presentem aquests productes com una botiga pròpia ni tenim estoc. Són recomanacions seleccionades per a persones interessades en intel·ligència artificial, automatització, formació digital i productivitat.",
        criteriaText2: "Abans de comprar, revisa sempre les característiques, opinions, preu actualitzat i condicions directament a Amazon.",

        footer1: "© 2025 Nexautia. Transformant empreses amb automatització intel·ligent.",
        footer2: "Creat amb ❤️ per Nexautia per a la transferència de coneixement",
        footer3: "Continua explorant l'increïble món de l'automatització empresarial i la intel·ligència artificial!",

        filterAll: "Tots",
        filterDevices: "Dispositius IA",
        filterBooks: "Llibres IA",
        filterProductivity: "Productivitat IA",
        filterContent: "Creació de contingut",
        
        featuredTitle: "⭐ Recomanats destacats",
        booksTitle: "📚 Llibres sobre IA, automatització i tecnologia",
        contentTitle: "🎙️ Creació de contingut amb IA",
        productivityTitle: "💻 Productivitat i espai de treball",
        gadgetsTitle: "🤖 Dispositius IA",
        criteriaTitle: "📌 El nostre criteri de recomanació",

        product1Tag: "Per començar",
        product1Title: "Llibre introductori sobre intel·ligència artificial",
        product1Text: "Ideal per a persones que volen entendre la IA des de zero, sense entrar directament en explicacions massa tècniques.",

        product2Tag: "Creació de contingut",
        product2Title: "Micròfon per a vídeos, cursos i reunions online",
        product2Text: "Recomanat per gravar continguts, formacions o vídeos sobre IA amb una qualitat d'àudio més professional.",

        product3Tag: "Productivitat",
        product3Title: "Dispositiu d'IA que grava, transcriu i resumeix automàticament",
        product3Text: "Grava reunions, converteix l'àudio en text i genera resums automàticament gràcies a la intel·ligència artificial. Una eina pràctica per estalviar temps, organitzar idees i no perdre informació important.",

        book1Tag: "IA bàsica",
        book1Title: "Introducció senzilla a la Intel·ligència Artificial",
        book1Text: "Llibre recomanat per iniciar-se en la intel·ligència artificial d’una manera clara i accessible. Ideal per a persones que volen entendre què és la IA, com funciona i com es pot aplicar a la feina, l’automatització i la vida quotidiana.",

        book2Tag: "Programació",
        book2Title: "Llibre de Machine Learning amb Python (nivell principiant–intermedi)",
        book2Text: "Aquest llibre és ideal per fer el salt des de Python bàsic cap al món de la intel·ligència artificial. Aprendràs a crear models de machine learning utilitzant eines reals com Scikit-Learn i TensorFlow, amb exemples pràctics i aplicats a casos reals.",

        book3Tag: "Automatització",
        book3Title: "Llibres de productivitat i automatització de processos digitals",
        book3Text: "Selecció de llibres per aprendre a automatitzar tasques, optimitzar processos i estalviar temps amb eines reals. Ideal per aplicar automatització en empreses, botigues online i fluxos de treball sense intervenció manual.",

        content1Tag: "Creació de contingut",
        content1Title: "Hollyland Lark M2 Combo – Micròfon sense fils ultracompacte per a creació de contingut",
        content1Text: "El <b>Hollyland Lark M2 Combo</b> és un sistema de micròfon sense fils pensat per a creadors de contingut, YouTube, TikTok, entrevistes i streaming. Destaca per la seva mida extremadament compacta i lleugera, oferint un so clar i professional sense necessitat d’equips complicats.<br><br>La versió Combo inclou compatibilitat amb càmeres, smartphones USB-C i dispositius Lightning, permetent gravar fàcilment en pràcticament qualsevol situació. També incorpora cancel·lació de soroll intel·ligent i un estoig de càrrega portàtil per augmentar l’autonomia durant les gravacions.<br><br>Ideal per a vídeos, reels, podcasts, entrevistes i contingut per a xarxes socials.",

        content2Tag: "Creació de contingut",
        content2Title: "<b>Elgato Stream Deck</b> + – Controlador intel·ligent per a creació de contingut i automatització",
        content2Text: "<b>L’Elgato Stream Deck +</b> és un controlador físic pensat per a creadors de contingut, streamers, editors i usuaris que volen automatitzar tasques de manera ràpida i senzilla. Incorpora botons LCD personalitzables, controls giratoris i pantalla tàctil per gestionar accions amb un sol toc.<br><br>Permet controlar aplicacions, canviar escenes en streaming, ajustar el volum, executar automatitzacions, obrir eines d’IA o activar accessos ràpids sense interrompre el flux de treball.<br><br>Ideal per a streaming, YouTube, edició de vídeo, productivitat i automatització de contingut.",

        content3Tag: "Creació de contingut",
        content3Title: "<strong>Amaran 200x S</strong> – Focus LED professional per a creació de contingut i vídeo",
        content3Text: "<strong>Amaran 200x S</strong> és un focus LED professional de 200W pensat per a <strong>creadors de contingut</strong>, <strong>YouTube</strong>, <strong>streaming</strong>, entrevistes i producció audiovisual.<br><br>Destaca per oferir una il·luminació potent, uniforme i amb colors naturals, molt utilitzada en setups de vídeo professionals i estudis de gravació.<br><br>Permet ajustar la temperatura de color entre tons càlids i freds, adaptant-se fàcilment a diferents estils de gravació i ambients. A més, és compatible amb modificadors de llum tipus Bowens per aconseguir resultats més cinematogràfics.<br><br>Ideal per a <strong>YouTube</strong>, <strong>podcasts</strong>, <strong>streaming</strong>, vídeos tecnològics, entrevistes i creació de contingut professional.",

        content4Tag: "Creació de contingut",
        content4Title: "<strong>Sony Alpha ZV-E10K</strong> – Càmera mirrorless professional per a creació de contingut i YouTube",
        content4Text: "<strong>Sony Alpha ZV-E10K</strong> és una càmera mirrorless APS-C dissenyada especialment per a <strong>creadors de contingut</strong>, <strong>YouTube</strong>, <strong>streaming</strong>, entrevistes i videoblogs.<br><br>Incorpora un sensor APS-C de 24,2 MP, gravació de vídeo en <strong>4K</strong>, enfocament automàtic <strong>Eye AF en temps real</strong> i objectius intercanviables per aconseguir una imatge molt més professional i cinematogràfica.<br><br>La seva pantalla abatible facilita la gravació de vlogs i contingut per a xarxes socials, mentre que el micròfon direccional integrat millora la captura de veu durant les gravacions.<br><br>Ideal per a <strong>YouTube</strong>, <strong>streaming</strong>, podcasts, entrevistes, vídeos tecnològics i creació de contingut professional.",

        content5Tag: "Creació de contingut",
        content5Title: "<strong>DJI Osmo Pocket 3</strong> – Càmera compacta professional per a creació de contingut i vlogging",
        content5Text: "<strong>DJI Osmo Pocket 3</strong> és una càmera compacta pensada per a <strong>creadors de contingut</strong>, <strong>YouTube</strong>, <strong>vlogging</strong>, viatges i vídeos per a xarxes socials.<br><br>Incorpora un sensor d’1 polzada, gravació de vídeo en <strong>4K</strong> i estabilització mecànica en 3 eixos per aconseguir imatges fluides i professionals fins i tot gravant en moviment.<br><br>El seu disseny compacte permet portar-la fàcilment a la butxaca, mentre que la pantalla tàctil giratòria facilita la gravació de contingut vertical i horitzontal per a diferents plataformes.<br><br>Ideal per a <strong>YouTube</strong>, <strong>reels</strong>, <strong>TikTok</strong>, viatges, entrevistes i creació de contingut professional.",

        content6Tag: "Creació de contingut",
        content6Title: "<strong>RØDECaster Pro II</strong> – Estudi professional de podcast i creació de contingut",
        content6Text: "<strong>RØDECaster Pro II</strong> és una consola de producció d’àudio pensada per a <strong>podcasts</strong>, <strong>streaming</strong>, entrevistes i creació de contingut professional.<br><br>Integra mesclador d’àudio, gravadora, interfície USB i controls físics en un únic dispositiu pensat per simplificar la producció de contingut i millorar la qualitat del so.<br><br>Incorpora pantalla tàctil, faders professionals, pads programables i connectivitat per a micròfons, auriculars, ordinadors i dispositius mòbils, permetent gestionar gravacions i directes des d’un sol equip.<br><br>Ideal per a <strong>podcasts</strong>, <strong>YouTube</strong>, <strong>streaming</strong>, entrevistes, estudis de gravació i setups professionals de creació de contingut.",

        productivity1Tag: "Treball diari",
        productivity1Title: "Monitor extern",
        productivity1Text: "Molt útil per treballar amb IA, documentació i múltiples eines alhora.",

        productivity2Tag: "Comoditat",
        productivity2Title: "Teclat i ratolí ergonòmics",
        productivity2Text: "Millora per treballar còmodament durant moltes hores.",

        productivity3Tag: "Ergonomia",
        productivity3Title: "Cadira o suport ergonòmic",
        productivity3Text: "Per millorar la postura i la comoditat.",

        gadget1Tag: "Dispositius IA",
        gadget1Title: "Ulleres intel·ligents amb intel·ligència artificial",
        gadget1Text: "Ulleres intel·ligents amb funcions de traducció en temps real, assistents IA i control per veu. Un exemple interessant de com la intel·ligència artificial comença a integrar-se en dispositius quotidians i experiències mans lliures.",

        gadget2Tag: "Dispositius IA",
        gadget2Title: "Auriculars intel·ligents amb traducció IA",
        gadget2Text: "Auriculars amb intel·ligència artificial capaços de traduir converses en temps real entre múltiples idiomes. Un exemple pràctic de com la IA comença a eliminar barreres de comunicació en viatges, reunions i treball internacional.",

        gadget3Tag: "Dispositius IA",
        gadget3Title: "Anells intel·ligents i wearables amb IA",
        gadget3Text: "Descobreix anells intel·ligents i wearables amb intel·ligència artificial capaços de monitoritzar el son, l’activitat física, l’estrès i la salut en temps real. Tecnologia futurista aplicada a la productivitat, el benestar i l’automatització personal.",

        gadget4Tag: "Dispositius IA",
        gadget4Title: "PLAUD NotePin: wearable intel·ligent amb IA per a reunions i productivitat",
        gadget4Text: "Descobreix el PLAUD NotePin, un wearable ultralleuger de només 16,7 grams capaç de gravar converses, transcriure reunions i generar resums automàtics mitjançant intel·ligència artificial. Ideal per a productivitat, notes i automatització personal en temps real.",

        gadget5Tag: "Dispositius IA",
        gadget5Title: "<b>PenGPT AI Smart Pen</b> - Bolígraf intel·ligent amb IA, OCR i traducció en temps real",
        gadget5Text: "Un innovador <b>bolígraf intel·ligent amb intel·ligència artificial</b> capaç de <b>escanejar textos</b>, fer <b>traduccions en temps real</b> i oferir funcions intel·ligents mitjançant tecnologia tipus <b>ChatGPT</b>.<br><br>Aquest gadget futurista incorpora <b>pantalla tàctil HD</b>, reconeixement <b>OCR</b>, traducció multillengua i eines ideals per a estudiants, productivitat, feina i viatges.<br><br><b>✔ Escaneig intel·ligent OCR</b><br><b>✔ Traducció instantània multillengua</b><br><b>✔ Funcions IA tipus ChatGPT</b><br><b>✔ Pantalla tàctil integrada</b><br><b>✔ Gadget tecnològic futurista</b>",

        amazonButton: "Veure a Amazon"
    },

    en: {
        navServicios: "Services",
        navProceso: "Process",
        navCasos: "Success Cases",
        navCalculadora: "ROI Calculator",
        navTarjeta: "Business Card",
        navCita: "Book a Call",
        navContacto: "Contact",
        navAprende: "🎓 Learn with Us",
        navProductos: "🛒 Recommended Products",

        heroTitle: "🛒 Recommended products for working with AI",
        heroSubtitle: "A selection of books, devices, accessories and useful resources to learn artificial intelligence, automate tasks, create content and improve digital productivity.",
        affiliateNotice: "<strong>Transparency:</strong> This page contains Amazon affiliate links. If you buy through them, we may receive a small commission at no additional cost to you. We only recommend products we consider useful and related to artificial intelligence, automation and productivity.",

        criteriaText1: "We do not present these products as our own store nor do we hold stock. These are curated recommendations for people interested in artificial intelligence, automation, digital training and productivity.",
        criteriaText2: "Before purchasing, always review features, opinions, updated pricing and conditions directly on Amazon.",

        footer1: "© 2025 Nexautia. Transforming businesses with intelligent automation.",
        footer2: "Created with ❤️ by Nexautia for knowledge sharing",
        footer3: "Keep exploring the incredible world of business automation and Artificial Intelligence!",

        filterAll: "All",
        filterDevices: "AI Devices",
        filterBooks: "AI Books",
        filterProductivity: "AI Productivity",
        filterContent: "Content Creation",

        filterAll: "Todos",
        filterDevices: "Dispositivos IA",
        filterBooks: "Libros IA",
        filterProductivity: "Productividad IA",
        filterContent: "Creación de contenido",
                
        featuredTitle: "⭐ Featured recommendations",
        booksTitle: "📚 Books about AI, automation and technology",
        contentTitle: "🎙️ Content creation with AI",
        productivityTitle: "💻 Productivity and workspace",
        gadgetsTitle: "🤖 AI Devices",
        criteriaTitle: "📌 Our recommendation criteria",

        product1Tag: "For beginners",
        product1Title: "Introductory book about artificial intelligence",
        product1Text: "Ideal for people who want to understand AI from scratch without going directly into overly technical explanations.",

        product2Tag: "Content creation",
        product2Title: "Microphone for videos, courses and online meetings",
        product2Text: "Recommended for recording content, training sessions or AI videos with more professional audio quality.",

        product3Tag: "Productivity",
        product3Title: "AI device that records, transcribes and summarizes automatically",
        product3Text: "Record meetings, convert audio into text and generate summaries automatically using artificial intelligence. A practical tool to save time, organize ideas and avoid losing important information.",

        book1Tag: "Basic AI",
        book1Title: "Simple Introduction to Artificial Intelligence",
        book1Text: "Recommended book for getting started with artificial intelligence in a clear and accessible way. Ideal for people who want to understand what AI is, how it works, and how it can be applied to work, automation and everyday life.",

        book2Tag: "Programming",
        book2Title: "Machine Learning with Python Book (Beginner–Intermediate Level)",
        book2Text: "This book is perfect for taking the next step from basic Python into the world of artificial intelligence. You will learn how to build machine learning models using real tools like Scikit-Learn and TensorFlow, through practical, hands-on examples based on real-world use cases.",

        book3Tag: "Automation",
        book3Title: "Productivity and Digital Process Automation Books",
        book3Text: "A curated selection of books to learn how to automate tasks, optimize processes, and save time using real-world tools. Ideal for applying automation in businesses, online stores, and workflow systems without manual work.",

        content1Tag: "Content creation",
        content1Title: "Hollyland Lark M2 Combo – Ultra-Compact Wireless Microphone for Content Creators",
        content1Text: "The <b>Hollyland Lark M2 Combo</b> is a wireless microphone system designed for content creators, YouTube, TikTok, interviews, and streaming. It stands out for its ultra-compact and lightweight design while delivering clear and professional audio without the need for complex equipment.<br><br>The Combo version includes compatibility with cameras, USB-C smartphones, and Lightning devices, making it easy to record in almost any setup. It also features intelligent noise cancellation and a portable charging case for extended battery life during recordings.<br><br>Perfect for videos, reels, podcasts, interviews, and social media content.",

        content2Tag: "Content creation",
        content2Title: "<b>Elgato Stream Deck +</b> – Smart Controller for Content Creation and Automation",
        content2Text: "<b>The Elgato Stream Deck +</b> is a physical controller designed for content creators, streamers, editors, and users who want to automate tasks quickly and easily. It features customizable LCD keys, rotary dials, and a touchscreen to manage actions with a single touch.<br><br>It allows users to control apps, switch streaming scenes, adjust volume, launch automations, open AI tools, or trigger shortcuts without interrupting their workflow.<br><br>Perfect for streaming, YouTube, video editing, productivity, and content automation.",

        content3Tag: "Content creation",
        content3Title: "<strong>Amaran 200x S</strong> – Professional LED Light for Content Creation and Video Production",
        content3Text: "<strong>Amaran 200x S</strong> is a professional 200W LED light designed for <strong>content creators</strong>, <strong>YouTube</strong>, <strong>streaming</strong>, interviews, and video production.<br><br>It stands out for delivering powerful, even lighting with natural color reproduction, commonly used in professional video setups and recording studios.<br><br>It features adjustable color temperature settings from warm to cool tones, allowing it to adapt easily to different recording styles and environments. It is also compatible with Bowens mount light modifiers for more cinematic-looking results.<br><br>Ideal for <strong>YouTube</strong>, <strong>podcasts</strong>, <strong>streaming</strong>, tech videos, interviews, and professional content creation.",

        content4Tag: "Content creation",
        content4Title: "<strong>Sony Alpha ZV-E10K</strong> – Professional Mirrorless Camera for Content Creation and YouTube",
        content4Text: "<strong>Sony Alpha ZV-E10K</strong> is an APS-C mirrorless camera specifically designed for <strong>content creators</strong>, <strong>YouTube</strong>, <strong>streaming</strong>, interviews, and vlogging.<br><br>It features a 24.2 MP APS-C sensor, <strong>4K video</strong> recording, <strong>real-time Eye AF autofocus</strong>, and interchangeable lenses for a more professional and cinematic image quality.<br><br>Its fully articulating screen makes it ideal for vlogs and social media content, while the built-in directional microphone improves voice recording quality during shoots.<br><br>Ideal for <strong>YouTube</strong>, <strong>streaming</strong>, podcasts, interviews, tech videos, and professional content creation.",

        content5Tag: "Content creation",
        content5Title: "<strong>DJI Osmo Pocket 3</strong> – Professional Compact Camera for Content Creation and Vlogging",
        content5Text: "<strong>DJI Osmo Pocket 3</strong> is a compact camera designed for <strong>content creators</strong>, <strong>YouTube</strong>, <strong>vlogging</strong>, travel videos, and social media content.<br><br>It features a 1-inch sensor, <strong>4K video</strong> recording, and 3-axis mechanical stabilization for smooth and professional-looking footage even while moving.<br><br>Its compact design makes it easy to carry in a pocket, while the rotating touchscreen simplifies vertical and horizontal recording for different platforms.<br><br>Ideal for <strong>YouTube</strong>, <strong>reels</strong>, <strong>TikTok</strong>, travel videos, interviews, and professional content creation.",

        content6Tag: "Content creation",
        content6Title: "<strong>RØDECaster Pro II</strong> – Professional Podcast and Content Creation Studio",
        content6Text: "<strong>RØDECaster Pro II</strong> is an audio production console designed for <strong>podcasts</strong>, <strong>streaming</strong>, interviews, and professional content creation.<br><br>It combines an audio mixer, recorder, USB audio interface, and physical controls into a single device built to simplify content production and improve sound quality.<br><br>It features a touchscreen display, professional faders, programmable pads, and connectivity for microphones, headphones, computers, and mobile devices, allowing users to manage recordings and live productions from one central system.<br><br>Ideal for <strong>podcasts</strong>, <strong>YouTube</strong>, <strong>streaming</strong>, interviews, recording studios, and professional content creation setups.",

        productivity1Tag: "Daily work",
        productivity1Title: "External monitor",
        productivity1Text: "Helps manage multiple tools and tasks efficiently.",

        productivity2Tag: "Comfort",
        productivity2Title: "Ergonomic keyboard and mouse",
        productivity2Text: "Improves comfort during long working hours.",

        productivity3Tag: "Ergonomics",
        productivity3Title: "Ergonomic chair or support",
        productivity3Text: "Improves posture and comfort.",

        gadget1Tag: "AI Devices",
        gadget1Title: "AI-powered smart glasses",
        gadget1Text: "Smart glasses with real-time translation, AI assistants and voice control features. An interesting example of how artificial intelligence is becoming integrated into everyday devices and hands-free experiences.",

        gadget2Tag: "AI Devices",
        gadget2Title: "AI-powered translation earbuds",
        gadget2Text: "AI-powered earbuds capable of translating conversations in real time across multiple languages. A practical example of how artificial intelligence is starting to remove communication barriers in travel, meetings and international work.",

        gadget3Tag: "AI Devices",
        gadget3Title: "AI Smart Rings and Wearable Technology",
        gadget3Text: "Discover AI-powered smart rings and wearable devices capable of monitoring sleep, activity, stress, and health in real time. Futuristic technology designed for productivity, wellness, and personal automation.",

        gadget4Tag: "AI Devices",
        gadget4Title: "PLAUD NotePin: AI wearable for meetings and productivity",
        gadget4Text: "Discover the PLAUD NotePin, an ultra-light wearable weighing only 16.7 grams capable of recording conversations, transcribing meetings, and generating automatic AI-powered summaries. Ideal for productivity, notes, and personal automation in real time.",

        gadget5Tag: "AI Devices",
        gadget5Title: "<b>PenGPT AI Smart Pen</b> - AI smart pen with OCR scanning and real-time translation",
        gadget5Text: "An advanced <b>AI-powered smart pen</b> capable of <b>scanning text</b>, performing <b>real-time language translation</b> and providing intelligent assistance through <b>ChatGPT-style AI technology</b>.<br><br>This futuristic gadget features a <b>HD touchscreen</b>, <b>OCR recognition</b>, multilingual translation and productivity tools ideal for students, work, travel and technology enthusiasts.<br><br><b>✔ Intelligent OCR text scanning</b><br><b>✔ Instant multi-language translation</b><br><b>✔ ChatGPT-style AI functions</b><br><b>✔ Integrated HD touchscreen</b><br><b>✔ Futuristic tech gadget</b>",

        amazonButton: "View on Amazon"
    }
};

/* =============================
   SELECTOR DE IDIOMA
============================= */
function initLanguageSelector() {
    var currentLanguageBtn = document.getElementById("current-language");
    var dropdown = document.getElementById("language-dropdown");
    var options = document.querySelectorAll(".language-option");

    if (!currentLanguageBtn || !dropdown || options.length === 0) return;

    currentLanguageBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.classList.toggle("show");
    });

    options.forEach(function (option) {
        option.addEventListener("click", function () {
            var lang = option.getAttribute("data-lang");
            setLanguage(lang);
            dropdown.classList.remove("show");
        });
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".language-selector")) {
            dropdown.classList.remove("show");
        }
    });
}

function setLanguage(lang) {
    lang = (lang || "es").toLowerCase();

    var t = translations[lang] || translations.es;

    Object.keys(t).forEach(function (key) {
        var elements = document.querySelectorAll('[data-i18n="' + key + '"]');

        elements.forEach(function (element) {
            element.innerHTML = t[key];
        });
    });

    var amazonButtons = document.querySelectorAll("[data-i18n-amazon-button]");

    amazonButtons.forEach(function (button) {
        button.textContent = t.amazonButton;
    });

    var currentLanguageBtn = document.getElementById("current-language");

    if (currentLanguageBtn) {
        var flags = {
            es: "../../imagenes/bandera_espanola.png",
            ca: "../../imagenes/bandera_catalana.png",
            en: "../../imagenes/bandera_inglesa.png"
        };

        var labels = {
            es: "ES",
            ca: "CA",
            en: "EN"
        };

        currentLanguageBtn.innerHTML =
            '<img src="' +
            flags[lang] +
            '" alt="' +
            labels[lang] +
            '" width="24" height="16" /> ' +
            labels[lang];
    }

    document.documentElement.lang = lang;

    localStorage.setItem("language", lang);
    localStorage.setItem("Language", lang.toUpperCase());
    localStorage.setItem("Preferred Language", lang.toUpperCase());
    localStorage.setItem("preferredLanguage", lang);
    localStorage.setItem("selectedLanguage", lang);
    localStorage.setItem("currentLanguage", lang);
}

function initProductFilters() {
    var filterButtons = document.querySelectorAll(".filter-btn");
    var productCards = document.querySelectorAll(".product-card");

    if (filterButtons.length === 0 || productCards.length === 0) return;

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var filter = button.getAttribute("data-filter");

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            productCards.forEach(function (card) {
                var categories = card.getAttribute("data-category") || "";

                if (filter === "all" || categories.split(" ").includes(filter)) {
                    card.classList.remove("is-hidden");
                } else {
                    card.classList.add("is-hidden");
                }
            });

            document.querySelectorAll("main .section").forEach(function (section) {
                var cardsInSection = section.querySelectorAll(".product-card");

                if (cardsInSection.length === 0) return;

                var visibleCards = section.querySelectorAll(
                    ".product-card:not(.is-hidden)"
                );

                section.style.display = visibleCards.length > 0 ? "" : "none";
            });
        });
    });
}