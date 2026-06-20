// =====================================================
// NEXAUTIA HOME - script limpio para estructura estática ES/CA
// Mantiene funcionalidad real: menú móvil, calculadora ROI,
// calendario, formularios, vCard y chatbot con escritura progresiva.
// No traduce la página ni modifica H1/SEO con A/B testing.
// =====================================================

(function () {
    "use strict";

    const PAGE_LANG = (document.documentElement.lang || "es").slice(0, 2).toLowerCase();
    const LANG = PAGE_LANG === "ca" ? "ca" : "es";

    const TEXT = {
        es: {
            months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            days: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
            selectDay: "👆 Selecciona un día en el calendario para ver los horarios disponibles",
            selectedDateTitle: "Horarios para",
            noSlots: "No hay horarios disponibles para este día",
            loadingSlots: "Consultando disponibilidad...",
            formSending: "⏳ Enviando...",
            formSent: "✅ ¡Enviado!",
            formError: "❌ Error, inténtalo de nuevo",
            contactSuccessTitle: "¡Solicitud enviada!",
            contactSuccess: "Hemos recibido tu solicitud. Te contactaremos en menos de 2 horas laborales.",
            appointmentSuccess: "Cita confirmada correctamente.",
            appointmentError: "Error al confirmar la cita. Por favor, inténtalo de nuevo o escríbenos directamente.",
            validationAppointment: "Selecciona primero un día y una hora.",
            cancelNoSession: "No hay ninguna cita para cancelar en esta sesión.",
            cancelOk: "Cita anulada correctamente.",
            cancelError: "Error al anular la cita.",
            annualLossSuffix: "al año",
            calcValidation: "Introduce valores válidos para calcular el ROI.",
            phoneInvalid: "Introduce un teléfono móvil español válido de 9 cifras que empiece por 6 o 7.",
            chatbotWelcome: "¡Hola! Soy {name}, especialista de Nexautia en automatización, IA, páginas web y formación. ¿En qué puedo ayudarte a optimizar tu negocio?",
            chatbotThinking: "Analizando tu consulta...",
            chatbotFallback: "Gracias por tu consulta. Para una respuesta personalizada, deja tus datos en el formulario o reserva una cita gratuita en el calendario.",
            chatbotConnectionError: "No he podido conectar con el asistente en este momento. Puedes intentarlo de nuevo o escribirnos desde el formulario.",
        },
        ca: {
            months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
            days: ["Dl", "Dt", "Dc", "Dj", "Dv", "Ds", "Dg"],
            selectDay: "👆 Selecciona un dia al calendari per veure els horaris disponibles",
            selectedDateTitle: "Horaris per a",
            noSlots: "No hi ha horaris disponibles per a aquest dia",
            loadingSlots: "Consultant disponibilitat...",
            formSending: "⏳ Enviant...",
            formSent: "✅ Enviat!",
            formError: "❌ Error, torna-ho a intentar",
            contactSuccessTitle: "Sol·licitud enviada!",
            contactSuccess: "Hem rebut la teva sol·licitud. Et contactarem en menys de 2 hores laborals.",
            appointmentSuccess: "Cita confirmada correctament.",
            appointmentError: "Error en confirmar la cita. Si us plau, torna-ho a intentar o escriu-nos directament.",
            validationAppointment: "Selecciona primer un dia i una hora.",
            cancelNoSession: "No hi ha cap cita per cancel·lar en aquesta sessió.",
            cancelOk: "Cita anul·lada correctament.",
            cancelError: "Error en anul·lar la cita.",
            annualLossSuffix: "l'any",
            calcValidation: "Introdueix valors vàlids per calcular el ROI.",
            phoneInvalid: "Introdueix un telèfon mòbil espanyol vàlid de 9 xifres que comenci per 6 o 7.",
            chatbotWelcome: "Hola! Sóc {name}, especialista de Nexautia en automatització, IA, pàgines web i formació. En què et puc ajudar a optimitzar el teu negoci?",
            chatbotThinking: "Analitzant la teva consulta...",
            chatbotFallback: "Gràcies per la consulta. Per a una resposta personalitzada, deixa les teves dades al formulari o reserva una cita gratuïta al calendari.",
            chatbotConnectionError: "No he pogut connectar amb l’assistent en aquest moment. Pots tornar-ho a provar o escriure’ns des del formulari.",
        },
    };

    const T = TEXT[LANG];

    const CONFIG = {
        makeWebhookUrl: "https://hook.eu2.make.com/3gdrtys1ypxrkrtvjksb10rmo126dwl1",
        chatbotTypingSpeed: 50,
        timezone: "Europe/Madrid",
        slotDuration: 60,
        bufferMinutes: 30,
        calendarApi: {
            baseUrl: "https://script.google.com/macros/s/AKfycbyP0snrfOM3bc819PGYy0AHZHLHfqttmZYYNytu-Snu_9_DHN5Z_P5duZdmoCCY7P9s3w/exec",
            calendarId: "primary",
        },
        businessHours: {
            1: [{ start: "09:00", end: "14:00" }, { start: "15:00", end: "19:00" }],
            2: [{ start: "09:00", end: "14:00" }, { start: "15:00", end: "19:00" }],
            3: [{ start: "09:00", end: "14:00" }, { start: "15:00", end: "19:00" }],
            4: [{ start: "09:00", end: "14:00" }, { start: "15:00", end: "19:00" }],
            5: [{ start: "09:00", end: "14:00" }, { start: "15:00", end: "19:00" }],
        },
    };

    let calendarCurrentDate = new Date();
    let selectedDate = null;
    let selectedTime = null;
    let lastBookedEventId = null;
    let lastBookedEmail = null;

    function $(selector, context = document) {
        return context.querySelector(selector);
    }

    function $all(selector, context = document) {
        return Array.from(context.querySelectorAll(selector));
    }

    function ready(fn) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", fn);
        } else {
            fn();
        }
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    function createDateFromString(dateStr) {
        const [year, month, day] = dateStr.split("-").map(Number);
        return new Date(year, month - 1, day);
    }

    function formatDisplayDate(date) {
        return date.toLocaleDateString(LANG === "ca" ? "ca-ES" : "es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    function parseTime(timeStr) {
        if (!timeStr) return 0;
        if (timeStr.includes("T")) {
            const d = new Date(timeStr);
            return d.getHours() * 60 + d.getMinutes();
        }
        const match = String(timeStr).match(/(\d{1,2}):(\d{2})/);
        if (!match) return 0;
        return Number(match[1]) * 60 + Number(match[2]);
    }

    function formatTime(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
    }

    function showMessage(container, type, title, message) {
        if (!container) return;
        const old = $(".form-message", container);
        if (old) old.remove();
        const div = document.createElement("div");
        div.className = `form-message ${type}`;
        div.innerHTML = title ? `<strong>${title}</strong><br>${message}` : message;
        container.appendChild(div);
        setTimeout(() => div.remove(), 8000);
    }

    // =====================================================
    // Menú móvil: único listener, sin bloquear navegación real
    // =====================================================
    function initMobileMenu() {
        const btn = document.getElementById("mobile-menu-btn") || document.getElementById("mobile-menu-toggle");
        const overlay = document.getElementById("mobile-menu-overlay");
        const closeBtn = document.getElementById("mobile-menu-close");
        if (!btn || !overlay || btn.dataset.nxMenuReady === "true") return;
        btn.dataset.nxMenuReady = "true";

        const openMenu = (event) => {
            if (event) event.preventDefault();
            overlay.classList.add("show");
            document.body.classList.add("mobile-menu-open");
            document.body.style.overflow = "hidden";
            btn.setAttribute("aria-expanded", "true");
        };

        const closeMenu = () => {
            overlay.classList.remove("show");
            document.body.classList.remove("mobile-menu-open");
            document.body.style.overflow = "";
            btn.setAttribute("aria-expanded", "false");
        };

        btn.addEventListener("click", openMenu);
        if (closeBtn) closeBtn.addEventListener("click", closeMenu);
        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) closeMenu();
        });
        $all(".mobile-menu-nav a", overlay).forEach((link) => {
            link.addEventListener("click", closeMenu);
        });
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeMenu();
        });
    }

    function initSmoothAnchors() {
        $all('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", (event) => {
                const href = anchor.getAttribute("href");
                if (!href || href === "#") return;
                const target = document.querySelector(href);
                if (!target) return;
                event.preventDefault();
                const header = document.querySelector("header");
                const headerHeight = header ? header.getBoundingClientRect().height : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
                window.scrollTo({ top, behavior: "smooth" });
            });
        });
    }

    // =====================================================
    // Validación de teléfonos móviles españoles
    // =====================================================
    function isValidSpanishMobile(value) {
        return value === "" || /^[67]\d{8}$/.test(value);
    }

    function validatePhoneField(field) {
        if (!field) return true;
        const value = field.value.trim();
        const valid = isValidSpanishMobile(value);
        field.setCustomValidity(valid ? "" : T.phoneInvalid);
        return valid;
    }

    function initPhoneValidation() {
        ["appointment-phone", "phone"].forEach((id) => {
            const field = document.getElementById(id);
            if (!field) return;

            field.addEventListener("input", () => {
                field.value = field.value.replace(/\D/g, "").slice(0, 9);
                validatePhoneField(field);
            });

            field.addEventListener("blur", () => {
                validatePhoneField(field);
            });
        });
    }

    // =====================================================
    // Calculadora ROI
    // =====================================================
    function initCalculator() {
        const fields = ["hours", "hourly-cost", "employees"].map((id) => document.getElementById(id));
        if (fields.some((field) => !field)) return;
        fields.forEach((field) => {
            field.addEventListener("input", calculateROI);
            field.addEventListener("keyup", calculateROI);
        });
        calculateROI();
    }

    function calculateROI() {
        const hours = Number(document.getElementById("hours")?.value || 0);
        const hourlyCost = Number(document.getElementById("hourly-cost")?.value || 0);
        const employees = Number(document.getElementById("employees")?.value || 0);
        const results = document.getElementById("results");
        if (!results) return;

        if (hours <= 0 || hourlyCost <= 0 || employees <= 0) {
            results.style.display = "none";
            return;
        }

        const weeklyLoss = hours * hourlyCost * employees;
        const annualLoss = weeklyLoss * 52;
        const annualSavings = Math.round(annualLoss * 0.8);
        const roi = Math.round(((annualSavings - 5000) / 5000) * 100);
        const formatter = new Intl.NumberFormat(LANG === "ca" ? "ca-ES" : "es-ES");

        const annualLossEl = document.getElementById("annual-loss");
        const annualSavingsEl = document.getElementById("annual-savings");
        const roiEl = document.getElementById("roi");

        if (annualLossEl) annualLossEl.textContent = `${formatter.format(annualLoss)} € ${T.annualLossSuffix}`;
        if (annualSavingsEl) annualSavingsEl.textContent = `${formatter.format(annualSavings)} €`;
        if (roiEl) roiEl.textContent = `${formatter.format(roi)}%`;
        results.style.display = "block";
    }

    // =====================================================
    // Calendario y reserva
    // =====================================================
    function initCalendar() {
        const grid = document.getElementById("calendar-grid");
        if (!grid) return;
        document.getElementById("prev-month")?.addEventListener("click", () => {
            calendarCurrentDate.setMonth(calendarCurrentDate.getMonth() - 1);
            updateCalendarDisplay();
        });
        document.getElementById("next-month")?.addEventListener("click", () => {
            calendarCurrentDate.setMonth(calendarCurrentDate.getMonth() + 1);
            updateCalendarDisplay();
        });
        document.getElementById("appointment-booking-form")?.addEventListener("submit", confirmAppointment);
        document.getElementById("cancel-appointment")?.addEventListener("click", cancelAppointmentSelection);
        document.getElementById("cancel-booking-btn")?.addEventListener("click", cancelBookedAppointment);
        document.getElementById("confirmation-modal")?.addEventListener("click", function (event) {
            if (event.target === this) closeConfirmation();
        });
        resetSlotsMessage();
        updateCalendarDisplay();
    }

    function updateCalendarDisplay() {
        const grid = document.getElementById("calendar-grid");
        const title = document.getElementById("current-month");
        if (!grid || !title) return;

        const year = calendarCurrentDate.getFullYear();
        const month = calendarCurrentDate.getMonth();
        title.textContent = `${T.months[month]} ${year}`;
        grid.innerHTML = "";

        T.days.forEach((day) => {
            const header = document.createElement("div");
            header.className = "calendar-day-header";
            header.textContent = day;
            grid.appendChild(header);
        });

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startOffset = (firstDay.getDay() + 6) % 7;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 0; i < startOffset; i++) {
            const empty = document.createElement("div");
            empty.className = "calendar-day other-month";
            grid.appendChild(empty);
        }

        for (let day = 1; day <= lastDay.getDate(); day++) {
            const date = new Date(year, month, day);
            const dateStr = formatDate(date);
            const dayOfWeek = date.getDay();
            const isPast = date < today;
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            const isAvailable = !isPast && !isWeekend && Boolean(CONFIG.businessHours[dayOfWeek]);
            const cell = document.createElement("div");
            cell.className = "calendar-day";
            cell.textContent = String(day);
            cell.dataset.date = dateStr;
            if (formatDate(date) === formatDate(today)) cell.classList.add("today");
            if (selectedDate && formatDate(selectedDate) === dateStr) cell.classList.add("selected");
            if (isAvailable) {
                cell.classList.add("available");
                cell.addEventListener("click", () => selectDate(date));
            } else {
                cell.classList.add("unavailable");
            }
            grid.appendChild(cell);
        }
    }

    async function selectDate(date) {
        selectedDate = date;
        selectedTime = null;
        hideAppointmentForm();
        updateCalendarDisplay();

        const title = document.getElementById("selected-date-title");
        const container = document.getElementById("time-slots-container");
        if (title) title.textContent = `${T.selectedDateTitle} ${formatDisplayDate(date)}`;
        if (container) container.innerHTML = `<div class="no-slots"><p>🔍 ${T.loadingSlots}</p></div>`;

        const dateStr = formatDate(date);
        let busy = [];
        try {
            const busyInfo = await fetchBusyInfo(dateStr);
            busy = Array.isArray(busyInfo?.busy) ? busyInfo.busy : [];
            if (busyInfo?.isHoliday) busy = [{ start: "00:00", end: "23:59" }];
        } catch (error) {
            console.warn("No se pudo consultar disponibilidad externa. Se muestran horarios estándar.", error);
        }

        const slots = generateTimeSlots(dateStr, busy);
        renderTimeSlots(slots);
    }

    function resetSlotsMessage() {
        const title = document.getElementById("selected-date-title");
        const container = document.getElementById("time-slots-container");
        if (title) title.textContent = LANG === "ca" ? "Selecciona un dia" : "Selecciona un día";
        if (container) container.innerHTML = `<div class="no-slots"><p>${T.selectDay}</p></div>`;
    }

    async function fetchBusyInfo(dateStr) {
        const url = `${CONFIG.calendarApi.baseUrl}?action=busy&date=${encodeURIComponent(dateStr)}&tz=${encodeURIComponent(CONFIG.timezone)}&calendarId=${encodeURIComponent(CONFIG.calendarApi.calendarId)}`;
        const response = await fetch(url, { method: "GET" });
        if (!response.ok) return { busy: [], isHoliday: false };
        return response.json();
    }

    function normalizeBusyPeriod(period) {
        return {
            start: parseTime(period.start || period.startTime),
            end: parseTime(period.end || period.endTime),
        };
    }

    function expandBusyWithBuffer(busyPeriods) {
        return busyPeriods.map(normalizeBusyPeriod).filter((period) => period.end > period.start).map((period) => ({
            start: Math.max(0, period.start - CONFIG.bufferMinutes),
            end: Math.min(24 * 60, period.end + CONFIG.bufferMinutes),
        }));
    }

    function overlaps(startA, endA, startB, endB) {
        return startA < endB && endA > startB;
    }

    function generateTimeSlots(dateStr, busyPeriods = []) {
        const date = createDateFromString(dateStr);
        const businessHours = CONFIG.businessHours[date.getDay()];
        if (!businessHours) return [];
        const expandedBusy = expandBusyWithBuffer(busyPeriods);
        const slots = [];

        businessHours.forEach((period) => {
            let start = parseTime(period.start);
            const end = parseTime(period.end);
            while (start + CONFIG.slotDuration <= end) {
                const slotEnd = start + CONFIG.slotDuration;
                const blocked = expandedBusy.some((busy) => overlaps(start, slotEnd, busy.start, busy.end));
                if (!blocked) slots.push(formatTime(start));
                start += CONFIG.slotDuration;
            }
        });
        return slots;
    }

    function renderTimeSlots(slots) {
        const container = document.getElementById("time-slots-container");
        if (!container) return;
        if (!slots.length) {
            container.innerHTML = `<div class="no-slots"><p>${T.noSlots}</p></div>`;
            return;
        }
        const wrapper = document.createElement("div");
        wrapper.className = "slots-grid";
        slots.forEach((slot) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "time-slot";
            button.textContent = slot;
            button.addEventListener("click", () => selectTimeSlot(slot, button));
            wrapper.appendChild(button);
        });
        container.innerHTML = "";
        container.appendChild(wrapper);
    }

    function selectTimeSlot(time, element) {
        selectedTime = time;
        $all(".time-slot.selected").forEach((slot) => slot.classList.remove("selected"));
        element.classList.add("selected");
        showAppointmentForm();
    }

    function showAppointmentForm() {
        const formBox = document.getElementById("appointment-form");
        if (!formBox || !selectedDate || !selectedTime) return;
        document.getElementById("summary-date").textContent = formatDisplayDate(selectedDate);
        document.getElementById("summary-time").textContent = `${selectedTime} (${CONFIG.timezone})`;
        formBox.classList.add("show");
        setTimeout(() => {
            formBox.scrollIntoView({ behavior: "smooth", block: "start" });
            document.getElementById("appointment-name")?.focus({ preventScroll: true });
        }, 150);
    }

    function hideAppointmentForm() {
        document.getElementById("appointment-form")?.classList.remove("show");
    }

    function cancelAppointmentSelection() {
        // Solo cancela la selección visual antes de enviar.
        // No toca Google Calendar ni Make porque todavía no existe cita real.
        const form = document.getElementById("appointment-booking-form");
        if (form) form.reset();

        selectedDate = null;
        selectedTime = null;
        hideAppointmentForm();
        $all(".time-slot.selected").forEach((slot) => slot.classList.remove("selected"));
        resetSlotsMessage();
        updateCalendarDisplay();

        const calendarTarget = document.querySelector("#calendario .calendar-section") || document.getElementById("calendario");
        if (calendarTarget) {
            const header = document.querySelector("header");
            const headerHeight = header ? header.getBoundingClientRect().height : 0;
            const top = calendarTarget.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
            window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        }
    }

    async function confirmAppointment(event) {
        event.preventDefault();
        const form = event.currentTarget;

        if (!selectedDate || !selectedTime) {
            alert(T.validationAppointment);
            return;
        }

        const appointmentPhone = document.getElementById("appointment-phone");
        if (!validatePhoneField(appointmentPhone)) {
            appointmentPhone.reportValidity();
            appointmentPhone.focus();
            return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const original = submitBtn ? submitBtn.innerHTML : "";
        if (submitBtn) {
            submitBtn.innerHTML = T.formSending;
            submitBtn.disabled = true;
        }
        showLoading(true);

        try {
            const formData = new FormData(form);
            const appointmentData = {
                date: formatDate(selectedDate),
                time: selectedTime,
                name: (formData.get("name") || "").trim(),
                email: (formData.get("email") || "").trim(),
                phone: (formData.get("phone") || "").trim(),
                company: (formData.get("company") || "").trim(),
                employees: formData.get("employees") || "",
                type: formData.get("type") || "",
                details: (formData.get("details") || "").trim(),
            };

            if (!appointmentData.name || !appointmentData.email) {
                alert("Por favor, completa todos los campos requeridos.");
                return;
            }

            // Apps Script se usa solo para consultar disponibilidad.
            // La creación de Zoom, Calendar, IDs y correos la gestiona Make.
            // No se cambia ningún literal del payload que espera Make.
            await notifyMakeAppointment(appointmentData);

            lastBookedEventId = null;
            lastBookedEmail = appointmentData.email;

            if (submitBtn) {
                submitBtn.innerHTML = T.formSent;
                submitBtn.style.background = "linear-gradient(135deg, #10b981, #059669)";
            }

            showConfirmation(appointmentData.email);

            form.reset();
            hideAppointmentForm();
            selectedDate = null;
            selectedTime = null;
            resetSlotsMessage();
            updateCalendarDisplay();
        } catch (error) {
            console.error("❌ Error al confirmar cita:", error);
            if (submitBtn) {
                submitBtn.innerHTML = T.formError;
                submitBtn.style.background = "linear-gradient(135deg, #dc2626, #b91c1c)";
            }
            alert(T.appointmentError);
        } finally {
            showLoading(false);
            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.innerHTML = original;
                    submitBtn.disabled = false;
                    submitBtn.style.background = "";
                }
            }, 3000);
        }
    }

    function showCalendarSuccessMessage(name) {
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
        `;
        const title = LANG === "ca" ? "Sol·licitud enviada!" : "¡Solicitud enviada!";
        const msg = LANG === "ca"
            ? `Gràcies ${name}. Hem rebut la teva sol·licitud de diagnòstic gratuït.<br><strong>Et contactarem en menys de 2 hores laborals.</strong>`
            : `Gracias ${name}. Hemos recibido tu solicitud de diagnóstico gratuito.<br><strong>Te contactaremos en menos de 2 horas laborales.</strong>`;
        successDiv.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 1rem;">🎉</div>
            <h3 style="margin-bottom: 1rem;">${title}</h3>
            <p style="opacity: 0.95;">${msg}</p>
        `;
        document.body.appendChild(successDiv);
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }

    async function bookAppointment(data) {
        const response = await fetch(CONFIG.calendarApi.baseUrl, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({
                action: "book",
                calendarId: CONFIG.calendarApi.calendarId,
                timezone: CONFIG.timezone,
                durationMinutes: CONFIG.slotDuration,
                bufferMinutes: CONFIG.bufferMinutes,
                appointment: data,
            }),
        });
        if (!response.ok) throw new Error("Error de red");
        return response.json();
    }

    async function notifyMakeAppointment(appointmentData) {
        // Payload clonado del script antiguo que alimenta las ramas de Make.
        // No cambiar nombres de campos ni el valor de origen: Make los usa para enrutar.
        const selectedDateObj = createDateFromString(appointmentData.date);
        const dataToSend = {
            nombre: appointmentData.name,
            email: appointmentData.email,
            phone: appointmentData.phone,
            empresa: appointmentData.company,
            empleados: appointmentData.employees,
            tipo: appointmentData.type,
            desafio: appointmentData.details,
            fecha_envio: new Date().toLocaleString("es-ES"),
            version_ab: sessionStorage.getItem("abTestVersion") || "A",
            origen: "formulario_contacto",
            diaSeleccionado: selectedDateObj.toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            }),
            horaSeleccionada: appointmentData.time,
            fechaISO: `${appointmentData.date}T${appointmentData.time}:00`,
            fechaConZona: `${appointmentData.date}T${appointmentData.time}:00+02:00`,
            idioma: LANG,
            message: "",
            id: "",
            user: "",
            meetingID: "",
            CalendarID: "",
            failedEmail: "",
        };

        console.log("📤 Enviando datos a Make:", dataToSend);

        const response = await fetch(CONFIG.makeWebhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend),
        });

        if (!response.ok) {
            throw new Error(`Make no recibió correctamente la reserva: HTTP ${response.status}`);
        }

        return true;
    }

    async function cancelBookedAppointment() {
        if (!lastBookedEventId) {
            alert(T.cancelNoSession);
            return;
        }
        try {
            const response = await fetch(CONFIG.calendarApi.baseUrl, {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify({
                    action: "cancel",
                    calendarId: CONFIG.calendarApi.calendarId,
                    eventId: lastBookedEventId,
                }),
            });
            const data = await response.json();
            if (!data?.success) throw new Error(data?.message || "No se pudo cancelar");
            lastBookedEventId = null;
            lastBookedEmail = null;
            closeConfirmation();
            alert(T.cancelOk);
        } catch (error) {
            console.error(error);
            alert(T.cancelError);
        }
    }

    function showLoading(show) {
        const loading = document.getElementById("loading");
        if (loading) loading.classList.toggle("show", Boolean(show));
    }

    function showConfirmation(email) {
        const modal = document.getElementById("confirmation-modal");
        const emailEl = document.getElementById("confirmed-email");
        const acceptBtn = modal?.querySelector('button[onclick="closeConfirmation()"]');
        if (emailEl) emailEl.textContent = email || "";
        if (acceptBtn) acceptBtn.textContent = LANG === "ca" ? "Perfecte, gràcies" : "Perfecto, gracias";
        if (modal) modal.style.display = "flex";
    }

    function closeConfirmation() {
        const modal = document.getElementById("confirmation-modal");
        if (modal) modal.style.display = "none";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.closeConfirmation = closeConfirmation;

    // =====================================================
    // Formulario de contacto general
    // =====================================================
    function initContactForm() {
        const form = document.getElementById("contact-form");
        if (!form) return;
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const phoneField = document.getElementById("phone");
            if (!validatePhoneField(phoneField)) {
                phoneField.reportValidity();
                phoneField.focus();
                return;
            }

            const submitBtn = form.querySelector('button[type="submit"]');
            const original = submitBtn ? submitBtn.innerHTML : "";
            if (submitBtn) {
                submitBtn.innerHTML = T.formSending;
                submitBtn.disabled = true;
            }

            try {
                const formData = new FormData(form);
                // Payload alineado con el script antiguo que espera Make.
                // No cambiar nombres de campos ni el valor de origen: las ramas de Make dependen de estos literales.
                const payload = {
                    nombre: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    empresa: formData.get("company"),
                    empleados: formData.get("employees"),
                    tipo: formData.get("type"),
                    desafio: formData.get("challenge"),
                    fecha_envio: new Date().toLocaleString("es-ES"),
                    version_ab: sessionStorage.getItem("abTestVersion") || "A",
                    origen: "formulario_contacto",
                    diaSeleccionado: "",
                    horaSeleccionada: "",
                    fechaISO: "",
                    fechaConZona: "",
                    idioma: LANG,
                    message: "",
                    id: "",
                    user: "",
                    meetingID: "",
                    CalendarID: "",
                    failedEmail: "",
                };

                const response = await fetch(CONFIG.makeWebhookUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);

                const responseContentType = response.headers.get("content-type") || "";
                if (responseContentType.toLowerCase().includes("text/html")) {
                    const responseHtml = await response.text();
                    document.open();
                    document.write(responseHtml);
                    document.close();
                    return;
                }

                if (submitBtn) submitBtn.innerHTML = T.formSent;
                showMessage(form, "success", T.contactSuccessTitle, T.contactSuccess);
                form.reset();
            } catch (error) {
                console.error(error);
                if (submitBtn) submitBtn.innerHTML = T.formError;
                showMessage(form, "error", "", T.formError);
            } finally {
                setTimeout(() => {
                    if (submitBtn) {
                        submitBtn.innerHTML = original;
                        submitBtn.disabled = false;
                    }
                }, 2500);
            }
        });
    }

    // =====================================================
    // vCard
    // =====================================================
    function downloadVCard() {
        const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:Nexautia\nORG:Nexautia\nTEL;TYPE=CELL:+34610510642\nEMAIL:contacto@nexautia.com\nURL:https://www.nexautia.com/\nADR;TYPE=WORK:;;Barcelona;;;España\nNOTE:Automatización, inteligencia artificial, páginas web y formación para empresas\nEND:VCARD`;
        const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "nexautia-contacto.vcf";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    }

    window.downloadVCard = downloadVCard;

    // =====================================================
    // Chatbot conectado a Make, con nombre rotativo de asistente
    // =====================================================
    const assistantNames = LANG === "ca"
        ? ["Anna", "Carlos", "Maria", "David"]
        : ["Ana", "Carlos", "María", "David"];
    let currentAssistantName = "";

    function selectAssistantForSession() {
        if (currentAssistantName) return currentAssistantName;
        const randomIndex = Math.floor(Math.random() * assistantNames.length);
        currentAssistantName = assistantNames[randomIndex];
        return currentAssistantName;
    }

    function getOrCreateChatUserId() {
        try {
            // Mantenemos la misma clave que usaba el script antiguo para no romper
            // conversaciones o filtros que pudieran existir en Make.
            let userId = localStorage.getItem("chat_user_id");
            if (!userId) {
                userId = `user_${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
                localStorage.setItem("chat_user_id", userId);
            }
            return userId;
        } catch (error) {
            return `user_${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
        }
    }

    function formatChatMessage(text) {
        if (!text) return "";
        let formatted = String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(.*?)\*/g, "<em>$1</em>");

        formatted = formatted.replace(/^[-•]\s+(.+)$/gm, "<li>$1</li>");
        if (formatted.includes("<li>")) {
            formatted = formatted.replace(/(<li>[\s\S]*<\/li>)/, "<ul>$1</ul>");
        }

        return formatted.replace(/\n/g, "<br>");
    }

    function typeWriterEffect(element, text, speed = CONFIG.chatbotTypingSpeed) {
        return new Promise((resolve) => {
            const cleanText = String(text || "");
            let index = 0;
            element.innerHTML = "";

            function writeNextCharacter() {
                if (index < cleanText.length) {
                    const partialText = cleanText.slice(0, index + 1);
                    element.innerHTML = `${formatChatMessage(partialText)}<span class="typing-cursor">|</span>`;
                    const messages = document.getElementById("chatbot-messages");
                    if (messages) messages.scrollTop = messages.scrollHeight;
                    index += 1;
                    window.setTimeout(writeNextCharacter, speed);
                    return;
                }

                element.innerHTML = formatChatMessage(cleanText);
                resolve();
            }

            writeNextCharacter();
        });
    }

    function extractBotResponse(data) {
        if (!data) return "";
        if (typeof data === "string") {
            try {
                return extractBotResponse(JSON.parse(data));
            } catch (error) {
                return data;
            }
        }
        if (data.body) return extractBotResponse(data.body);
        return data.respuesta || data.response || data.message || data.text || data.answer || JSON.stringify(data);
    }

    function initChatbot() {
        const btn = document.getElementById("chatbot-btn");
        const container = document.getElementById("chatbot-container");
        const close = document.getElementById("chatbot-close");
        const messages = document.getElementById("chatbot-messages");
        const input = document.getElementById("chatbot-input");
        const send = document.getElementById("chatbot-send");
        if (!btn || !container || !messages) return;

        const append = (sender, text, options = {}) => {
            const div = document.createElement("div");
            div.className = `message ${sender}`;
            if (options.id) div.id = options.id;

            if (sender === "bot") {
                const name = selectAssistantForSession();
                div.innerHTML = `<strong class="message-name">${name}: </strong><span class="message-content">${formatChatMessage(text)}</span>`;
            } else {
                div.innerHTML = `<strong class="message-name">Tú: </strong><span class="message-content">${formatChatMessage(text)}</span>`;
            }

            messages.appendChild(div);
            messages.scrollTop = messages.scrollHeight;
            return div;
        };

        const open = () => {
            container.classList.add("show");
            if (!messages.dataset.welcomeShown) {
                const name = selectAssistantForSession();
                append("bot", T.chatbotWelcome.replace("{name}", name));
                messages.dataset.welcomeShown = "true";
            }
            input?.focus();
        };

        const closeChat = () => container.classList.remove("show");

        const setSendingState = (isSending) => {
            if (send) send.disabled = isSending;
            if (input) input.disabled = isSending;
        };

        const sendMessage = async () => {
            const text = input?.value.trim();
            if (!text) return;

            append("user", text);
            if (input) input.value = "";

            const thinking = append("bot", T.chatbotThinking, { id: "chatbot-thinking" });
            thinking.classList.add("typing-indicator");
            setSendingState(true);

            try {
                // En el chatbot replicamos la llamada del script antiguo que funcionaba:
                // GET al webhook de Make, con el mensaje codificado en query string.
                // No usamos POST aquí porque el escenario del chatbot estaba preparado así.
                const requestId = Date.now().toString(36) + Math.random().toString(36).slice(2);
                const userId = getOrCreateChatUserId();
                const query = encodeURIComponent(text);
                const url = `${CONFIG.makeWebhookUrl}?nombre=&email=&phone=&empresa=&empleados=&tipo=&desafio=&fecha_envio=&version_ab=&origen=chatbot&diaSeleccionado=&horaSeleccionada=&fechaISO=&fechaConZona=&idioma=&meetingID=&CalendarID=&failedEmail=&message=${query}&id=${requestId}&user=${userId}`;

                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) throw new Error(`HTTP ${response.status}`);

                const contentType = response.headers.get("content-type") || "";
                const rawData = contentType.includes("application/json")
                    ? await response.json()
                    : await response.text();

                const botText = extractBotResponse(rawData).trim() || T.chatbotFallback;
                thinking.remove();

                const botMessage = append("bot", "");
                const content = botMessage.querySelector(".message-content");
                if (content) {
                    await typeWriterEffect(content, botText, CONFIG.chatbotTypingSpeed);
                } else {
                    append("bot", botText);
                }
            } catch (error) {
                console.error("Error en chatbot:", error);
                thinking.remove();
                append("bot", T.chatbotConnectionError);
            } finally {
                setSendingState(false);
                input?.focus();
            }
        };

        btn.addEventListener("click", open);
        close?.addEventListener("click", closeChat);
        send?.addEventListener("click", sendMessage);
        input?.addEventListener("keydown", (event) => {
            if (event.key === "Enter") sendMessage();
        });
        input?.addEventListener("input", () => {
            if (send && !input.disabled) send.disabled = input.value.trim() === "";
        });
        if (send && input) send.disabled = input.value.trim() === "";

        document.getElementById("quick-responses")?.addEventListener("click", (event) => {
            const quick = event.target.closest(".quick-btn");
            if (!quick) return;
            open();
            if (input) input.value = quick.dataset.message || quick.textContent.trim();
            sendMessage();
        });
    }

    ready(() => {
        initMobileMenu();
        initSmoothAnchors();
        initPhoneValidation();
        initCalculator();
        initCalendar();
        initContactForm();
        initChatbot();
    });
})();
