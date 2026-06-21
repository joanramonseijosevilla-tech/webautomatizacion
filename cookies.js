(function () {
  "use strict";

  const MEASUREMENT_ID = "G-FBME4E1ETY";
  const STORAGE_KEY = "nexautia_cookie_preferences_v1";
  const CONSENT_VERSION = 1;
  const CONSENT_LIFETIME_MS = 365 * 24 * 60 * 60 * 1000;
  const currentScript =
    document.currentScript ||
    Array.from(document.scripts).find((script) => /(?:^|\/)cookies\.js(?:\?|$)/.test(script.src));
  const scriptUrl = currentScript && currentScript.src ? new URL(currentScript.src) : new URL("/cookies.js", window.location.href);
  const language = document.documentElement.lang.toLowerCase().startsWith("ca") ? "ca" : "es";

  const messages = {
    es: {
      bannerTitle: "Tu privacidad, bajo tu control",
      bannerText:
        "Usamos almacenamiento técnico para recordar tus preferencias. Con tu permiso, también utilizamos Google Analytics para medir el uso de la web y YouTube para mostrar vídeos incrustados.",
      acceptAll: "Aceptar todas",
      rejectAll: "Rechazar no esenciales",
      configure: "Configurar",
      policy: "Política de cookies",
      settingsTitle: "Preferencias de cookies",
      settingsIntro:
        "Puedes aceptar o rechazar las categorías no necesarias. Las cookies técnicas son imprescindibles para guardar tu elección.",
      necessaryTitle: "Técnicas y necesarias",
      necessaryText: "Guardan tus preferencias de privacidad y permiten el funcionamiento básico.",
      analyticsTitle: "Analíticas",
      analyticsText: "Google Analytics nos ayuda a conocer visitas, páginas consultadas y conversiones.",
      mediaTitle: "Multimedia",
      mediaText: "Permiten cargar y reproducir vídeos de YouTube en modo de privacidad mejorada.",
      alwaysActive: "Siempre activas",
      save: "Guardar selección",
      close: "Cerrar",
      footerPreferences: "Preferencias de cookies",
      mediaBlockedTitle: "Vídeo bloqueado por privacidad",
      mediaBlockedText: "Activa las cookies multimedia para reproducir este vídeo de YouTube.",
      enableMedia: "Activar vídeos",
    },
    ca: {
      bannerTitle: "La teva privacitat, sota el teu control",
      bannerText:
        "Fem servir emmagatzematge tècnic per recordar les teves preferències. Amb el teu permís, també utilitzem Google Analytics per mesurar l'ús del web i YouTube per mostrar vídeos incrustats.",
      acceptAll: "Acceptar-les totes",
      rejectAll: "Rebutjar les no essencials",
      configure: "Configurar",
      policy: "Política de galetes",
      settingsTitle: "Preferències de galetes",
      settingsIntro:
        "Pots acceptar o rebutjar les categories no necessàries. Les galetes tècniques són imprescindibles per desar la teva elecció.",
      necessaryTitle: "Tècniques i necessàries",
      necessaryText: "Desen les teves preferències de privacitat i permeten el funcionament bàsic.",
      analyticsTitle: "Analítiques",
      analyticsText: "Google Analytics ens ajuda a conèixer visites, pàgines consultades i conversions.",
      mediaTitle: "Multimèdia",
      mediaText: "Permeten carregar i reproduir vídeos de YouTube en mode de privacitat millorada.",
      alwaysActive: "Sempre actives",
      save: "Desar la selecció",
      close: "Tancar",
      footerPreferences: "Preferències de galetes",
      mediaBlockedTitle: "Vídeo bloquejat per privacitat",
      mediaBlockedText: "Activa les galetes multimèdia per reproduir aquest vídeo de YouTube.",
      enableMedia: "Activar vídeos",
    },
  };

  const text = messages[language];
  const policyUrl = new URL(language === "ca" ? "ca/politica-cookies/" : "politica-cookies/", scriptUrl).href;

  let preferences = readPreferences();
  let analyticsLoaded = false;
  let analyticsListenersAttached = false;
  let bannerElement = null;
  let settingsOverlay = null;

  function readPreferences() {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) return null;
      const parsed = JSON.parse(stored);
      if (
        parsed.version !== CONSENT_VERSION ||
        typeof parsed.savedAt !== "number" ||
        Date.now() - parsed.savedAt > CONSENT_LIFETIME_MS
      ) {
        window.localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return {
        version: CONSENT_VERSION,
        savedAt: parsed.savedAt,
        analytics: Boolean(parsed.analytics),
        multimedia: Boolean(parsed.multimedia),
      };
    } catch (error) {
      return null;
    }
  }

  function savePreferences(nextPreferences) {
    preferences = {
      version: CONSENT_VERSION,
      savedAt: Date.now(),
      analytics: Boolean(nextPreferences.analytics),
      multimedia: Boolean(nextPreferences.multimedia),
    };

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    } catch (error) {
      // The banner still works during the current visit if storage is unavailable.
    }

    applyPreferences();
    hideBanner();
    closeSettings();
  }

  function applyPreferences() {
    if (preferences && preferences.analytics) {
      enableAnalytics();
    } else {
      disableAnalytics();
    }

    if (preferences && preferences.multimedia) {
      enableMedia();
    } else {
      disableMedia();
    }
  }

  function enableAnalytics() {
    window["ga-disable-" + MEASUREMENT_ID] = false;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };

    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      functionality_storage: "granted",
      security_storage: "granted",
    });
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    if (!analyticsLoaded) {
      analyticsLoaded = true;
      const analyticsScript = document.createElement("script");
      analyticsScript.async = true;
      analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(MEASUREMENT_ID);
      document.head.appendChild(analyticsScript);
      window.gtag("js", new Date());
      window.gtag("config", MEASUREMENT_ID, {
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
    }

    attachAnalyticsListeners();
  }

  function disableAnalytics() {
    window["ga-disable-" + MEASUREMENT_ID] = true;
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
    clearAnalyticsCookies();
  }

  function clearAnalyticsCookies() {
    const cookieNames = document.cookie
      .split(";")
      .map((cookie) => cookie.split("=")[0].trim())
      .filter((name) => /^(_ga|_gid|_gat)/.test(name));

    const hostnameParts = window.location.hostname.split(".");
    const domains = [window.location.hostname];
    if (hostnameParts.length > 1) {
      domains.push("." + hostnameParts.slice(-2).join("."));
    }

    cookieNames.forEach((name) => {
      document.cookie = name + "=; Max-Age=0; path=/; SameSite=Lax";
      domains.forEach((domain) => {
        document.cookie = name + "=; Max-Age=0; path=/; domain=" + domain + "; SameSite=Lax";
      });
    });
  }

  function sendAnalyticsEvent(eventName, parameters) {
    if (!preferences || !preferences.analytics || typeof window.gtag !== "function") return;
    window.gtag("event", eventName, parameters || {});
  }

  function attachAnalyticsListeners() {
    if (analyticsListenersAttached) return;
    analyticsListenersAttached = true;

    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";

      if (href.startsWith("mailto:")) {
        sendAnalyticsEvent("contact_click", { contact_method: "email" });
      } else if (href.startsWith("tel:")) {
        sendAnalyticsEvent("contact_click", { contact_method: "phone" });
      } else if (/wa\.me|whatsapp\.com/i.test(href)) {
        sendAnalyticsEvent("contact_click", { contact_method: "whatsapp" });
      } else if (/(#contacto|#contacte|#calendario|#calendari)/i.test(href)) {
        sendAnalyticsEvent("cta_click", {
          link_url: href,
          link_text: (link.textContent || "").trim().slice(0, 100),
        });
      }
    });

    document.addEventListener("submit", (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      if (
        form.matches(
          "#contact-form, #appointment-booking-form, .appointment-booking-form, .contact-form-card, [data-track='form-submit']"
        )
      ) {
        sendAnalyticsEvent("generate_lead", {
          form_id: form.id || "contact-form",
        });
      }
    });
  }

  function prepareMedia() {
    document.querySelectorAll("iframe[data-cookie-src]").forEach((iframe) => {
      iframe.parentElement && iframe.parentElement.classList.add("nx-cookie-media-parent");
      if (preferences && preferences.multimedia) {
        loadMediaFrame(iframe);
      } else {
        blockMediaFrame(iframe);
      }
    });
  }

  function enableMedia() {
    document.querySelectorAll("iframe[data-cookie-src]").forEach(loadMediaFrame);
  }

  function disableMedia() {
    document.querySelectorAll("iframe[data-cookie-src]").forEach(blockMediaFrame);
  }

  function loadMediaFrame(iframe) {
    const source = iframe.dataset.cookieSrc;
    if (!source) return;
    if (iframe.getAttribute("src") !== source) iframe.setAttribute("src", source);
    iframe.classList.add("nx-cookie-media-loaded");
    const placeholder = iframe.parentElement && iframe.parentElement.querySelector(".nx-cookie-media-placeholder");
    if (placeholder) placeholder.remove();
  }

  function blockMediaFrame(iframe) {
    iframe.setAttribute("src", "about:blank");
    iframe.classList.remove("nx-cookie-media-loaded");
    const parent = iframe.parentElement;
    if (!parent || parent.querySelector(".nx-cookie-media-placeholder")) return;

    const placeholder = document.createElement("div");
    placeholder.className = "nx-cookie-media-placeholder";
    placeholder.innerHTML =
      '<div class="nx-cookie-media-placeholder__content">' +
      '<strong>' + escapeHtml(text.mediaBlockedTitle) + "</strong>" +
      '<p>' + escapeHtml(text.mediaBlockedText) + "</p>" +
      '<button type="button" class="nx-cookie-media-enable">' + escapeHtml(text.enableMedia) + "</button>" +
      "</div>";

    placeholder.querySelector("button").addEventListener("click", () => {
      savePreferences({
        analytics: preferences ? preferences.analytics : false,
        multimedia: true,
      });
    });

    parent.appendChild(placeholder);
  }

  function showBanner() {
    if (bannerElement) return;
    bannerElement = document.createElement("section");
    bannerElement.className = "nx-cookie-banner";
    bannerElement.setAttribute("role", "dialog");
    bannerElement.setAttribute("aria-label", text.bannerTitle);
    bannerElement.innerHTML =
      '<div class="nx-cookie-banner__content">' +
      '<div class="nx-cookie-banner__copy">' +
      '<strong class="nx-cookie-banner__title">' + escapeHtml(text.bannerTitle) + "</strong>" +
      '<p>' + escapeHtml(text.bannerText) + ' <a href="' + escapeAttribute(policyUrl) + '">' + escapeHtml(text.policy) + "</a>.</p>" +
      "</div>" +
      '<div class="nx-cookie-banner__actions">' +
      '<button type="button" class="nx-cookie-button nx-cookie-button--accept" data-cookie-action="accept">' + escapeHtml(text.acceptAll) + "</button>" +
      '<button type="button" class="nx-cookie-button nx-cookie-button--reject" data-cookie-action="reject">' + escapeHtml(text.rejectAll) + "</button>" +
      '<button type="button" class="nx-cookie-button nx-cookie-button--settings" data-cookie-action="settings">' + escapeHtml(text.configure) + "</button>" +
      "</div>" +
      "</div>";

    bannerElement.querySelector('[data-cookie-action="accept"]').addEventListener("click", () => {
      savePreferences({ analytics: true, multimedia: true });
    });
    bannerElement.querySelector('[data-cookie-action="reject"]').addEventListener("click", () => {
      savePreferences({ analytics: false, multimedia: false });
    });
    bannerElement.querySelector('[data-cookie-action="settings"]').addEventListener("click", showSettings);

    document.body.appendChild(bannerElement);
    window.requestAnimationFrame(() => bannerElement.classList.add("is-visible"));
  }

  function hideBanner() {
    if (!bannerElement) return;
    const element = bannerElement;
    bannerElement = null;
    element.classList.remove("is-visible");
    window.setTimeout(() => element.remove(), 220);
  }

  function showSettings() {
    if (settingsOverlay) return;
    const selected = preferences || { analytics: false, multimedia: false };
    settingsOverlay = document.createElement("div");
    settingsOverlay.className = "nx-cookie-settings-overlay";
    settingsOverlay.innerHTML =
      '<section class="nx-cookie-settings" role="dialog" aria-modal="true" aria-labelledby="nx-cookie-settings-title" tabindex="-1">' +
      '<button type="button" class="nx-cookie-settings__close" aria-label="' + escapeAttribute(text.close) + '">×</button>' +
      '<h2 id="nx-cookie-settings-title">' + escapeHtml(text.settingsTitle) + "</h2>" +
      '<p class="nx-cookie-settings__intro">' + escapeHtml(text.settingsIntro) + "</p>" +
      '<div class="nx-cookie-category">' +
      '<div><strong>' + escapeHtml(text.necessaryTitle) + "</strong><p>" + escapeHtml(text.necessaryText) + "</p></div>" +
      '<span class="nx-cookie-category__fixed">' + escapeHtml(text.alwaysActive) + "</span>" +
      "</div>" +
      '<label class="nx-cookie-category nx-cookie-category--toggle">' +
      '<div><strong>' + escapeHtml(text.analyticsTitle) + "</strong><p>" + escapeHtml(text.analyticsText) + "</p></div>" +
      '<input type="checkbox" name="analytics" ' + (selected.analytics ? "checked" : "") + '><span class="nx-cookie-switch" aria-hidden="true"></span>' +
      "</label>" +
      '<label class="nx-cookie-category nx-cookie-category--toggle">' +
      '<div><strong>' + escapeHtml(text.mediaTitle) + "</strong><p>" + escapeHtml(text.mediaText) + "</p></div>" +
      '<input type="checkbox" name="multimedia" ' + (selected.multimedia ? "checked" : "") + '><span class="nx-cookie-switch" aria-hidden="true"></span>' +
      "</label>" +
      '<a class="nx-cookie-settings__policy" href="' + escapeAttribute(policyUrl) + '">' + escapeHtml(text.policy) + "</a>" +
      '<div class="nx-cookie-settings__actions">' +
      '<button type="button" class="nx-cookie-button nx-cookie-button--accept" data-cookie-settings="accept">' + escapeHtml(text.acceptAll) + "</button>" +
      '<button type="button" class="nx-cookie-button nx-cookie-button--reject" data-cookie-settings="reject">' + escapeHtml(text.rejectAll) + "</button>" +
      '<button type="button" class="nx-cookie-button nx-cookie-button--settings" data-cookie-settings="save">' + escapeHtml(text.save) + "</button>" +
      "</div>" +
      "</section>";

    const dialog = settingsOverlay.querySelector(".nx-cookie-settings");
    settingsOverlay.querySelector(".nx-cookie-settings__close").addEventListener("click", closeSettings);
    settingsOverlay.addEventListener("click", (event) => {
      if (event.target === settingsOverlay) closeSettings();
    });
    settingsOverlay.querySelector('[data-cookie-settings="accept"]').addEventListener("click", () => {
      savePreferences({ analytics: true, multimedia: true });
    });
    settingsOverlay.querySelector('[data-cookie-settings="reject"]').addEventListener("click", () => {
      savePreferences({ analytics: false, multimedia: false });
    });
    settingsOverlay.querySelector('[data-cookie-settings="save"]').addEventListener("click", () => {
      savePreferences({
        analytics: settingsOverlay.querySelector('input[name="analytics"]').checked,
        multimedia: settingsOverlay.querySelector('input[name="multimedia"]').checked,
      });
    });

    document.body.appendChild(settingsOverlay);
    document.body.classList.add("nx-cookie-modal-open");
    dialog.focus({ preventScroll: true });
  }

  function closeSettings() {
    if (!settingsOverlay) return;
    settingsOverlay.remove();
    settingsOverlay = null;
    document.body.classList.remove("nx-cookie-modal-open");
  }

  function addFooterControls() {
    document.querySelectorAll("footer").forEach((footer, index) => {
      if (footer.querySelector(".nx-cookie-footer-controls")) return;
      const controls = document.createElement("div");
      controls.className = "nx-cookie-footer-controls";
      controls.innerHTML =
        '<a href="' + escapeAttribute(policyUrl) + '">' + escapeHtml(text.policy) + "</a>" +
        '<button type="button">' + escapeHtml(text.footerPreferences) + "</button>";
      controls.querySelector("button").addEventListener("click", showSettings);

      const target = footer.querySelector(".footer-links") || footer.querySelector(".footer-content") || footer;
      target.appendChild(controls);
      if (index > 0) controls.setAttribute("aria-hidden", "true");
    });
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value);
  }

  function init() {
    prepareMedia();
    addFooterControls();
    applyPreferences();
    if (!preferences) showBanner();

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && settingsOverlay) closeSettings();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
