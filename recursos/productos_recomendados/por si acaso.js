
document.addEventListener("DOMContentLoaded", function () {
    initDarkMode();
    initMobileMenu();
    initLanguageSelector();

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
        
        featuredTitle: "⭐ Recomendados destacados",
        booksTitle: "📚 Libros sobre IA, automatización y tecnología",
        contentTitle: "🎙️ Creación de contenido con IA",
        productivityTitle: "💻 Productividad y espacio de trabajo",
        gadgetsTitle: "🤖 Gadgets inteligentes",
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
        book1Title: "Libro de introducción a la IA",
        book1Text: "Para entender conceptos clave como inteligencia artificial, aprendizaje automático, automatización y uso práctico de herramientas digitales.",

        book2Tag: "Programación",
        book2Title: "Libro de Machine Learning con Python (nivel principiante–intermedio)",
        book2Text: "Este libro es ideal para dar el salto desde Python básico al mundo de la inteligencia artificial. Aprenderás a crear modelos de machine learning utilizando herramientas reales como Scikit-Learn y TensorFlow, a través de ejemplos prácticos y aplicados a casos reales.",

        book3Tag: "Automatización",
        book3Title: "Libros de productividad y automatización de procesos digitales",
        book3Text: "Selección de libros para aprender a automatizar tareas, optimizar procesos y ahorrar tiempo mediante herramientas reales. Ideal para aplicar automatización en empresas, tiendas online y flujos de trabajo sin intervención manual.",

        content1Tag: "Audio",
        content1Title: "Micrófono USB",
        content1Text: "Muy útil para grabar vídeos, tutoriales, formaciones, podcasts o reuniones online con mejor calidad de sonido.",

        content2Tag: "Iluminación",
        content2Title: "Luz LED o aro de luz",
        content2Text: "Una iluminación sencilla puede mejorar mucho la calidad de vídeos, clases online o presentaciones profesionales.",

        content3Tag: "Vídeo",
        content3Title: "Webcam o soporte para grabación",
        content3Text: "Recomendado para crear contenido educativo, reuniones, directos o vídeos explicativos sobre inteligencia artificial.",

        productivity1Tag: "Trabajo diario",
        productivity1Title: "Monitor externo",
        productivity1Text: "Muy útil para trabajar con IA, documentación, automatizaciones y varias herramientas abiertas al mismo tiempo.",

        productivity2Tag: "Comodidad",
        productivity2Title: "Teclado y ratón ergonómicos",
        productivity2Text: "Una mejora sencilla para trabajar más cómodo durante muchas horas creando contenido, programando o automatizando tareas.",

        productivity3Tag: "Ergonomía",
        productivity3Title: "Silla o soporte ergonómico",
        productivity3Text: "Para mejorar la postura y la comodidad si trabajas muchas horas delante del ordenador.",

        gadget1Tag: "Domótica",
        gadget1Title: "Altavoz inteligente",
        gadget1Text: "Una forma sencilla de introducir automatización e inteligencia en el hogar o en pequeños espacios de trabajo.",

        gadget2Tag: "Smart home",
        gadget2Title: "Enchufes o dispositivos inteligentes",
        gadget2Text: "Útiles para automatizar rutinas sencillas y entender mejor cómo la tecnología puede mejorar tareas cotidianas.",

        gadget3Tag: "Accesorios",
        gadget3Title: "Accesorios tecnológicos útiles",
        gadget3Text: "Pequeños dispositivos que ayudan a trabajar mejor, crear contenido o mejorar la productividad digital.",

        amazonButton: "Ver en Amazon",

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

        featuredTitle: "⭐ Recomanats destacats",
        booksTitle: "📚 Llibres sobre IA, automatització i tecnologia",
        contentTitle: "🎙️ Creació de contingut amb IA",
        productivityTitle: "💻 Productivitat i espai de treball",
        gadgetsTitle: "🤖 Gadgets intel·ligents",
        criteriaTitle: "📌 El nostre criteri de recomanació",

        product1Tag: "Per començar",
        product1Title: "Llibre introductori sobre intel·ligència artificial",
        product1Text: "Ideal per a persones que volen entendre la IA des de zero, sense entrar directament en explicacions massa tècniques.",

        product2Tag: "Creació de contingut",
        product2Title: "Micròfon per a vídeos, cursos i reunions online",
        product2Text: "Recomanat per gravar continguts, formacions o vídeos sobre IA amb una qualitat d'àudio més professional.",

        product3Tag: "Productivitat",
        product3Title: "Monitor o accessori per treballar amb més comoditat",
        product3Text: "Una bona configuració de treball ajuda molt quan fas servir eines d'IA, automatitzacions i diverses finestres alhora.",

        book1Tag: "IA bàsica",
        book1Title: "Llibre d'introducció a la IA",
        book1Text: "Per entendre conceptes clau com intel·ligència artificial, aprenentatge automàtic, automatització i ús pràctic d'eines digitals.",

        book2Tag: "Programació",
        book2Title: "Llibre de Machine Learning amb Python (nivell principiant–intermedi)",
        book2Text: "Aquest llibre és ideal per fer el salt des de Python bàsic cap al món de la intel·ligència artificial. Aprendràs a crear models de machine learning utilitzant eines reals com Scikit-Learn i TensorFlow, amb exemples pràctics i aplicats a casos reals.",

        book3Tag: "Automatització",
        book3Title: "Llibres de productivitat i automatització de processos digitals",
        book3Text: "Selecció de llibres per aprendre a automatitzar tasques, optimitzar processos i estalviar temps amb eines reals. Ideal per aplicar automatització en empreses, botigues online i fluxos de treball sense intervenció manual.",

        content1Tag: "Àudio",
        content1Title: "Micròfon USB",
        content1Text: "Molt útil per gravar vídeos, tutorials, formacions, podcasts o reunions online amb millor qualitat de so.",

        content2Tag: "Il·luminació",
        content2Title: "Llum LED o aro de llum",
        content2Text: "Una il·luminació senzilla pot millorar molt la qualitat de vídeos, classes online o presentacions.",

        content3Tag: "Vídeo",
        content3Title: "Webcam o suport de gravació",
        content3Text: "Recomanat per crear contingut educatiu, reunions o vídeos explicatius sobre intel·ligència artificial.",

        productivity1Tag: "Treball diari",
        productivity1Title: "Monitor extern",
        productivity1Text: "Molt útil per treballar amb IA, documentació i múltiples eines alhora.",

        productivity2Tag: "Comoditat",
        productivity2Title: "Teclat i ratolí ergonòmics",
        productivity2Text: "Millora per treballar còmodament durant moltes hores.",

        productivity3Tag: "Ergonomia",
        productivity3Title: "Cadira o suport ergonòmic",
        productivity3Text: "Per millorar la postura i la comoditat.",

        gadget1Tag: "Domòtica",
        gadget1Title: "Altaveu intel·ligent",
        gadget1Text: "Introducció fàcil a la tecnologia intel·ligent a casa.",

        gadget2Tag: "Smart home",
        gadget2Title: "Endolls intel·ligents",
        gadget2Text: "Automatització senzilla del dia a dia.",

        gadget3Tag: "Accessoris",
        gadget3Title: "Accessoris tecnològics útils",
        gadget3Text: "Dispositius per millorar productivitat i contingut.",
                
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


        featuredTitle: "⭐ Featured recommendations",
        booksTitle: "📚 Books about AI, automation and technology",
        contentTitle: "🎙️ Content creation with AI",
        productivityTitle: "💻 Productivity and workspace",
        gadgetsTitle: "🤖 Smart gadgets",
        criteriaTitle: "📌 Our recommendation criteria",

        product1Tag: "For beginners",
        product1Title: "Introductory book about artificial intelligence",
        product1Text: "Ideal for people who want to understand AI from scratch without going directly into overly technical explanations.",

        product2Tag: "Content creation",
        product2Title: "Microphone for videos, courses and online meetings",
        product2Text: "Recommended for recording content, training sessions or AI videos with more professional audio quality.",

        product3Tag: "Productivity",
        product3Title: "Monitor or accessory for more comfortable work",
        product3Text: "A good work setup helps a lot when using AI tools, automations and several windows at the same time.",

        book1Tag: "Basic AI",
        book1Title: "Introduction to AI book",
        book1Text: "Understand key concepts such as artificial intelligence, machine learning, automation and practical digital tools.",

        book2Tag: "Programming",
        book2Title: "Machine Learning with Python Book (Beginner–Intermediate Level)",
        book2Text: "This book is perfect for taking the next step from basic Python into the world of artificial intelligence. You will learn how to build machine learning models using real tools like Scikit-Learn and TensorFlow, through practical, hands-on examples based on real-world use cases.",

        book3Tag: "Automation",
        book3Title: "Productivity and Digital Process Automation Books",
        book3Text: "A curated selection of books to learn how to automate tasks, optimize processes, and save time using real-world tools. Ideal for applying automation in businesses, online stores, and workflow systems without manual work.",

        content1Tag: "Audio",
        content1Title: "USB microphone",
        content1Text: "Great for recording videos, tutorials, podcasts and meetings.",

        content2Tag: "Lighting",
        content2Title: "LED light or ring light",
        content2Text: "Simple lighting can greatly improve video quality.",

        content3Tag: "Video",
        content3Title: "Webcam or recording setup",
        content3Text: "Ideal for educational and AI-related content.",

        productivity1Tag: "Daily work",
        productivity1Title: "External monitor",
        productivity1Text: "Helps manage multiple tools and tasks efficiently.",

        productivity2Tag: "Comfort",
        productivity2Title: "Ergonomic keyboard and mouse",
        productivity2Text: "Improves comfort during long working hours.",

        productivity3Tag: "Ergonomics",
        productivity3Title: "Ergonomic chair or support",
        productivity3Text: "Improves posture and comfort.",

        gadget1Tag: "Smart home",
        gadget1Title: "Smart speaker",
        gadget1Text: "Easy entry into smart home automation.",

        gadget2Tag: "Smart devices",
        gadget2Title: "Smart plugs",
        gadget2Text: "Simple automation for daily routines.",

        gadget3Tag: "Accessories",
        gadget3Title: "Useful tech accessories",
        gadget3Text: "Improve productivity and content creation.",
        amazonButton: "View on Amazon",

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

            localStorage.setItem("language", lang);
            setLanguage(lang);
            dropdown.classList.remove("show");
        });
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".language-selector")) {
            dropdown.classList.remove("active");
        }
    });
}

function setLanguage(lang) {
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
}

function syncProductLanguageForIndex() {
    var lang =
        localStorage.getItem("Language") ||
        localStorage.getItem("language") ||
        document.documentElement.lang ||
        "es";

    lang = lang.toLowerCase();

    var upperLang = lang.toUpperCase();

    localStorage.setItem("Language", upperLang);
    localStorage.setItem("Preferred Language", upperLang);

    localStorage.setItem("language", lang);
    localStorage.setItem("preferredLanguage", lang);
    localStorage.setItem("selectedLanguage", lang);
    localStorage.setItem("currentLanguage", lang);
}

document.addEventListener(
    "click",
    function (e) {
        var link = e.target.closest("a");

        if (!link) return;

        var href = link.getAttribute("href") || "";

        if (href.indexOf("index.html") !== -1) {
            syncProductLanguageForIndex();
        }
    },
    true
);