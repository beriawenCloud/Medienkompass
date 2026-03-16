/* =========================================================
   MEDIENKOMPASS ÖSTERREICH – script.js
   App-Logik: Suche, Rendering, API-Vorbereitung
   Benötigt data.js (muss davor geladen sein).
   ========================================================= */

"use strict";

/* ---------------------------------------------------------
   KONFIGURATION (Gemini API – später aktivierbar)
   --------------------------------------------------------- */
const CONFIG = {
  workerUrl:   "https://medienkompass-proxy.sandygall1412.workers.dev",
  useWorker:   true,
  searchDelay: 600,
};

/* ---------------------------------------------------------
   DOM-REFERENZEN
   --------------------------------------------------------- */
const DOM = {
  topicSectionLabel: () => document.getElementById("topic-section-label"),
  topicInput:      () => document.getElementById("topic-input"),
  searchBtn:       () => document.getElementById("search-btn"),
  loadingOverlay:  () => document.getElementById("loading-overlay"),
  resultsArea:     () => document.getElementById("results-area"),
  topicOfWeek:     () => document.getElementById("topic-of-week"),
  weekCards:       () => document.getElementById("week-cards"),
  topicTitle:      () => document.getElementById("topic-title"),
  topicSummary:    () => document.getElementById("topic-summary"),
  topicDate:       () => document.getElementById("topic-date"),
  mediaCardsGrid:  () => document.getElementById("media-cards-grid"),
  meaningContent:  () => document.getElementById("meaning-content"),
  questionsContent:() => document.getElementById("questions-content"),
};

/* =========================================================
   INITIALISIERUNG
   ========================================================= */
function initApp() {
  setupSearchListeners();
  showApiStatus();
  loadTagesanalyse();
  console.log("[Medienkompass] App initialisiert. Worker:", CONFIG.useWorker);
}

/* ---------------------------------------------------------
   loadTagesanalyse: Lädt das Tagesthema vom Worker (gecacht).
   Nur 1 API-Anfrage pro Tag – danach aus KV-Cache bedient.
   --------------------------------------------------------- */
async function loadTagesanalyse() {
  if (CONFIG.useWorker && CONFIG.workerUrl) {
    try {
      const loadingText = document.getElementById("loading-text");
      if (loadingText) loadingText.textContent = "Tagesthema wird geladen …";
      showLoadingFull(true);

      const response = await fetch(CONFIG.workerUrl + "/tagesanalyse");
      if (!response.ok) throw new Error("Worker antwortet nicht.");

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      // Robuster Zugriff: heute → gestern → Meldung
      const analyse = data.heute || data.gestern || data.vorgestern;
      if (!analyse) {
        console.warn("[Medienkompass] Keine Analyse im Cache verfügbar.");
        showLoadingFull(false);
        renderHomepageNoData();
        renderHomepageWithTagesanalyse(data);
        return;
      }

      showLoadingFull(false);
      renderHomepageWithTagesanalyse(data);

    } catch (err) {
      console.warn("[Medienkompass] Tagesthema nicht verfügbar:", err.message);
      showLoadingFull(false);
      renderHomepageTopics();
    }
  } else {
    renderHomepageTopics();
  }
}

/* ---------------------------------------------------------
   renderHomepageWithTagesanalyse: Heute / Gestern / Vorgestern
   --------------------------------------------------------- */
function renderHomepageWithTagesanalyse(data) {
  const todayGrid   = document.getElementById("topic-today-grid");
  const recentGrid  = document.getElementById("topic-recent-grid");
  const archiveGrid = document.getElementById("topic-archive-grid");
  if (!todayGrid) return;

  todayGrid.innerHTML = "";
  if (recentGrid)  recentGrid.innerHTML = "";
  if (archiveGrid) archiveGrid.innerHTML = "";

  const labels = ["heute","gestern","vorgestern","tag4","tag5","tag6","tag7",
                  "tag8","tag9","tag10","tag11","tag12","tag13","tag14","tag15"];
  const dayLabels = ["● Heute","Gestern","Vorgestern","Vor 3 Tagen","Vor 4 Tagen",
                     "Vor 5 Tagen","Vor 6 Tagen","Vor 7 Tagen","Vor 8 Tagen","Vor 9 Tagen",
                     "Vor 10 Tagen","Vor 11 Tagen","Vor 12 Tagen","Vor 13 Tagen","Vor 14 Tagen"];

  // Heute → today-grid
  const heuteTopic = data[labels[0]];
  if (heuteTopic) {
    todayGrid.appendChild(createTopicCard(heuteTopic, 0, true, null));
  } else {
    todayGrid.appendChild(createPlaceholderCard(0, "Heute"));
  }

  // Gestern / Vorgestern / Vor 3 Tagen → recent-grid
  for (let i = 1; i <= 3; i++) {
    const topic = data[labels[i]];
    if (topic) {
      recentGrid.appendChild(createTopicCard(topic, i - 1, false, null));
    } else {
      recentGrid.appendChild(createPlaceholderCard(i - 1, "–"));
    }
  }

  // Rest → archive-grid
  for (let i = 4; i < labels.length; i++) {
    const topic = data[labels[i]];
    if (topic) {
      archiveGrid.appendChild(createTopicCard(topic, i - 4, false, null));
    } else {
      archiveGrid.appendChild(createPlaceholderCard(i - 4, "–"));
    }
  }
}

function renderHomepageTopics() {
  const todayGrid   = document.getElementById("topic-today-grid");
  const recentGrid  = document.getElementById("topic-recent-grid");
  const archiveGrid = document.getElementById("topic-archive-grid");
  if (!todayGrid) return;

  todayGrid.innerHTML  = "";
  if (recentGrid)  recentGrid.innerHTML  = "";
  if (archiveGrid) archiveGrid.innerHTML = "";

  // Alles Platzhalter
  todayGrid.appendChild(createPlaceholderCard(0, "● Heute"));
  const recentLabels = ["Gestern", "Vorgestern", "Vor 3 Tagen"];
  recentLabels.forEach(function(label, i) {
    recentGrid.appendChild(createPlaceholderCard(i, label));
  });
  for (let i = 4; i < 15; i++) {
    archiveGrid.appendChild(createPlaceholderCard(i - 4, `Vor ${i} Tagen`));
  }
}

function createPlaceholderCard(index, dayLabel) {
  const card = document.createElement("div");
  card.className = "topic-card topic-card--placeholder animate-in";
  card.style.animationDelay = (index * 0.05) + "s";
  card.style.opacity = "0";

  const isToday = dayLabel && dayLabel.includes("Heute");
  const badgeClass = isToday ? "topic-card-today-badge" : "topic-card-day-badge";

  card.innerHTML = `
    <div class="topic-card-body topic-card-body--placeholder">
      <div class="topic-card-meta">
        <span class="topic-card-date">–</span>
        <span class="${badgeClass}">${escapeHtml(dayLabel || "")}</span>
      </div>
      <div class="placeholder-icon">📅</div>
      <p class="placeholder-text">Noch kein Thema für diesen Tag</p>
    </div>
  `;
  return card;
}

function renderHomepageNoData() {
  const todayGrid = document.getElementById("topic-today-grid");
  if (!todayGrid) return;
  todayGrid.innerHTML = `
    <div class="topic-card topic-card--placeholder animate-in" style="opacity:1;">
      <div class="topic-card-body topic-card-body--placeholder">
        <div class="topic-card-meta">
          <span class="topic-card-date">–</span>
          <span class="topic-card-today-badge">● Heute</span>
        </div>
        <div class="placeholder-icon">📰</div>
        <p class="placeholder-text">Noch kein Tagesthema verfügbar. Bitte später nochmal vorbeischauen.</p>
      </div>
    </div>
  `;
}

function toggleArchive() {
  const grid = document.getElementById("topic-archive-grid");
  const text = document.getElementById("archive-toggle-text");
  const icon = document.getElementById("archive-toggle-icon");
  if (!grid) return;
  const isHidden = grid.classList.toggle("hidden");
  text.textContent = isHidden ? "Ältere Themen anzeigen" : "Ältere Themen ausblenden";
  icon.textContent = isHidden ? "↓" : "↑";
}

/* ---------------------------------------------------------
   Zeigt den API-Status unter dem Recherche-Tool
   --------------------------------------------------------- */
function showApiStatus() {
  const hint = document.getElementById("api-status-hint");
  if (!hint) return;
  if (CONFIG.useWorker && CONFIG.workerUrl) {
    hint.innerHTML = `<span class="api-live">● Live – Gemini API aktiv</span>`;
  } else {
    hint.innerHTML = `<span class="api-demo">○ Demo-Modus – Worker noch nicht konfiguriert</span>`;
  }
}

/* ---------------------------------------------------------
   showLoadingFull: Ladeindikator beim Start
   --------------------------------------------------------- */
function showLoadingFull(visible) {
  // Beim Laden des Tagesthemas keinen Overlay zeigen –
  // die Karten erscheinen einfach sobald sie da sind.
  // (Kein sichtbarer Ladeindikator nötig)
}

/* ---------------------------------------------------------
   renderHomepageTopics: Fallback mit Demo-Daten
   --------------------------------------------------------- */
function renderHomepageTopics() {
  const demoKeys = [
    "eu-kunststoffverpackungen", "frauentag", "co2-steuer", "erbschaftssteuer",
    "naher-osten", "spritpreise", "energiepreise-nahost", "inflation",
    "gletscher", "sicherheitspolitik", "pensionsreform", "wohnkosten",
    "bildung", "digitalsteuer"
  ];

  const todayGrid   = document.getElementById("topic-today-grid");
  const recentGrid  = document.getElementById("topic-recent-grid");
  const archiveGrid = document.getElementById("topic-archive-grid");
  if (!todayGrid) return;

  todayGrid.innerHTML = "";
  if (recentGrid)  recentGrid.innerHTML = "";
  if (archiveGrid) archiveGrid.innerHTML = "";

  // Heute
  if (DEMO_DATA[demoKeys[0]]) {
    todayGrid.appendChild(createTopicCard(DEMO_DATA[demoKeys[0]], 0, true, "● Demo"));
  }
  // Letzte 3 Tage
  demoKeys.slice(1, 4).forEach(function(key, i) {
    if (DEMO_DATA[key] && recentGrid) {
      recentGrid.appendChild(createTopicCard(DEMO_DATA[key], i, false, "Demo"));
    }
  });
  // Archiv
  demoKeys.slice(4).forEach(function(key, i) {
    if (DEMO_DATA[key] && archiveGrid) {
      archiveGrid.appendChild(createTopicCard(DEMO_DATA[key], i, false, "Demo"));
    }
  });
}

/* ---------------------------------------------------------
   createTopicCard: Eine Themenkarte für die Startseite
   --------------------------------------------------------- */
function createTopicCard(topic, index, isToday = false, dayLabel = null) {
  const card = document.createElement("div");
  card.className = "topic-card animate-in" + (isToday ? " topic-card--today" : "");
  card.style.animationDelay = (index * 0.1) + "s";
  card.style.opacity = "0";

  const mediaBadges = (topic.media || []).slice(0, 3).map(function (m) {
    const color = getMediumColor(m.slug);
    return `<span class="topic-card-medium" style="background:${color};">${escapeHtml(m.medium)}</span>`;
  }).join("");

  const totalMedia = (topic.media || []).length;

  // Badge: nur "● Heute" für aktuelles Thema
  let dayBadge = "";
  if (isToday) {
    dayBadge = `<span class="topic-card-today-badge">● Heute</span>`;
  }

  card.innerHTML = `
    <div class="topic-card-body">
      <div class="topic-card-meta">
        <span class="topic-card-date">${escapeHtml(topic.date || "")}</span>
        <div style="display:flex;gap:6px;align-items:center;">
          ${dayBadge}
          <span class="topic-card-count">${totalMedia} Medien</span>
        </div>
      </div>
      <h3 class="topic-card-title">${escapeHtml(topic.title || "")}</h3>
      <p class="topic-card-summary">${escapeHtml(topic.summary || "")}</p>
      <div class="topic-card-footer">
        <div class="topic-card-media-row">${mediaBadges}<span class="topic-card-more">+${totalMedia - 3}</span></div>
        <span class="topic-card-cta">Analyse öffnen →</span>
      </div>
    </div>
  `;

  card.addEventListener("click", function () {
    renderTopic(topic, true, dayLabel || "Analyse");
  });

  return card;
}

/* ---------------------------------------------------------
   showHomepage: Zurück zur Startseite
   --------------------------------------------------------- */
function showHomepage() {
  const resultsArea = DOM.resultsArea();
  if (resultsArea) resultsArea.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------------------------------------------------------
   handleResearch: Recherche-Tool (eigenes Thema)
   --------------------------------------------------------- */
function handleResearch() {
  const input = document.getElementById("research-input");
  if (!input) return;
  const rawTopic = input.value.trim();
  if (!rawTopic) { shakeElement(input); return; }

  // Recherche-Input ins Such-Input übertragen (für Konsistenz)
  const mainInput = DOM.topicInput();
  if (mainInput) mainInput.value = rawTopic;

  showLoading(true);

  if (CONFIG.useWorker && CONFIG.workerUrl) {
    searchTopicWithGemini(rawTopic);
  } else {
    setTimeout(function () {
      const demoData = getDemoTopicData(rawTopic);
      if (demoData) {
        renderTopic(demoData, true, "Analyse");
      } else {
        renderNoResults(rawTopic);
      }
      showLoading(false);
    }, CONFIG.searchDelay);
  }
}

/* ---------------------------------------------------------
   renderWeekTopicFull: (nicht mehr aktiv, Kompatibilität)
   --------------------------------------------------------- */
function renderWeekTopicFull() {
  renderHomepageTopics();
}

/* ---------------------------------------------------------
   Event-Listener für Suche
   --------------------------------------------------------- */
function setupSearchListeners() {
  const input = DOM.topicInput();
  const btn   = DOM.searchBtn();

  if (!input || !btn) return;

  // Enter-Taste im Suchfeld
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  });

  // Leerzeichen-Bereinigung und Validierung beim Tippen
  input.addEventListener("input", function () {
    const val = this.value.trim();
    btn.disabled = val.length === 0;
  });
}

/* =========================================================
   THEMA DER WOCHE (Startseite)
   ========================================================= */
function renderTopicOfTheWeek() {
  const weekSection = DOM.topicOfWeek();
  const weekCardsEl = DOM.weekCards();

  if (!weekSection || !weekCardsEl) return;

  const topicData = DEMO_DATA[WEEK_TOPIC_KEY];
  if (!topicData) return;

  // Nur die ersten 7 Medien (alle 7) als Schnellkarten
  weekCardsEl.innerHTML = "";
  topicData.media.forEach(function (item) {
    const card = createWeekCard(item);
    weekCardsEl.appendChild(card);
  });
}

/* ---------------------------------------------------------
   Erstellt eine Schnell-Karte für "Thema der Woche"
   --------------------------------------------------------- */
function createWeekCard(item) {
  const card = document.createElement("div");
  card.className = "week-card medium--" + item.slug;

  const color = getMediumColor(item.slug);

  card.innerHTML = `
    <div class="week-card-stripe" style="background:${color};"></div>
    <div class="week-card-content">
      <div class="week-card-medium">${escapeHtml(item.medium)}</div>
      <div class="week-card-headline">${escapeHtml(item.headline)}</div>
      <div class="week-card-date">${escapeHtml(item.date)}</div>
    </div>
  `;

  return card;
}

/* =========================================================
   SUCHE
   ========================================================= */

/* ---------------------------------------------------------
   handleSearch: Einstiegspunkt für Benutzersuche
   --------------------------------------------------------- */
function handleSearch() {
  const input = DOM.topicInput();
  if (!input) return;

  const rawTopic = input.value.trim();
  if (!rawTopic) {
    shakeElement(input);
    return;
  }

  showLoading(true);

  if (CONFIG.useWorker && CONFIG.workerUrl) {
    searchTopicWithGemini(rawTopic);
  } else {
    // Demo-Modus
    setTimeout(function () {
      const topicData = getDemoTopicData(rawTopic);
      if (topicData) {
        renderTopic(topicData);
      } else {
        renderNoResults(rawTopic);
      }
      showLoading(false);
    }, CONFIG.searchDelay);
  }
}

/* ---------------------------------------------------------
   quickSearch: Schnellsuche über Buttons
   --------------------------------------------------------- */
function quickSearch(keyword) {
  const input = DOM.topicInput();
  if (input) {
    input.value = keyword;
  }
  handleSearch();
}

/* =========================================================
   DEMO-DATEN
   ========================================================= */

/* ---------------------------------------------------------
   getDemoTopicData: Sucht passendes Thema in Demo-Daten
   --------------------------------------------------------- */
function getDemoTopicData(rawTopic) {
  const normalized = rawTopic.toLowerCase().trim();

  // 1. Direkte Schlüssel-Suche
  if (DEMO_DATA[normalized]) {
    return DEMO_DATA[normalized];
  }

  // 2. Keyword-Map
  if (KEYWORD_MAP[normalized]) {
    const key = KEYWORD_MAP[normalized];
    return DEMO_DATA[key] || null;
  }

  // 3. Teilstring-Suche in Keywords
  for (const [keyword, key] of Object.entries(KEYWORD_MAP)) {
    if (normalized.includes(keyword) || keyword.includes(normalized)) {
      return DEMO_DATA[key] || null;
    }
  }

  // 4. Teilstring in Titel oder Keywords der Themen
  for (const [, topicData] of Object.entries(DEMO_DATA)) {
    const titleMatch = topicData.title.toLowerCase().includes(normalized);
    const keywordMatch = topicData.keywords.some(function (kw) {
      return kw.toLowerCase().includes(normalized) || normalized.includes(kw.toLowerCase());
    });
    if (titleMatch || keywordMatch) {
      return topicData;
    }
  }

  return null;
}

/* =========================================================
   GEMINI API (vorbereitet, noch nicht aktiv)
   ========================================================= */

/* ---------------------------------------------------------
   searchTopicWithGemini: Sendet Prompt an Cloudflare Worker.
   Der Worker leitet an Gemini weiter und hält den API-Key
   server-seitig – er erscheint nie im Browser.
   --------------------------------------------------------- */
async function searchTopicWithGemini(topic) {
  const prompt = buildGeminiPrompt(topic);

  try {
    const response = await fetch(CONFIG.workerUrl + "/analyse", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errBody = await response.json().catch(() => ({ error: response.statusText }));
      throw new Error(`Worker-Fehler ${response.status}: ${errBody.error || response.statusText}`);
    }

    const data = await response.json();

    // Bei Search Grounding können mehrere Parts kommen – alle zusammensammeln
    const parts = data?.candidates?.[0]?.content?.parts || [];
    const rawText = parts
      .filter(p => p.text)
      .map(p => p.text)
      .join("");

    if (!rawText) throw new Error("Keine Textantwort von Gemini erhalten.");

    // JSON aus der Antwort extrahieren
    const jsonStart = rawText.indexOf("{");
    const jsonEnd   = rawText.lastIndexOf("}");
    if (jsonStart === -1 || jsonEnd === -1) throw new Error("Kein JSON in Gemini-Antwort.");

    const parsed = JSON.parse(rawText.substring(jsonStart, jsonEnd + 1));

    if (!parsed.title || !Array.isArray(parsed.media) || parsed.media.length === 0) {
      throw new Error("Gemini-Antwort hat unvollständige Struktur.");
    }

    renderTopic(parsed, true, "Analyse – Live via Gemini");

  } catch (err) {
    console.error("[Medienkompass] Worker/Gemini Fehler:", err);
    const demoData = getDemoTopicData(topic);
    if (demoData) {
      console.warn("[Medienkompass] Fallback auf Demo-Daten.");
      renderTopic(demoData, true, "Analyse (Demo-Fallback)");
    } else {
      renderNoResults(topic);
    }
  } finally {
    showLoading(false);
  }
}

/* ---------------------------------------------------------
   buildGeminiPrompt: Erstellt den Prompt für die API
   --------------------------------------------------------- */
function buildGeminiPrompt(topic) {
  const today = new Date().toLocaleDateString("de-AT", { day: "2-digit", month: "long", year: "numeric" });

  return `
Du bist ein österreichischer Medienforscher. Heute ist der ${today}.

WICHTIGSTE REGEL: Du hast Zugriff auf Google Search. Nutze diese Suche aktiv, 
bevor du antwortest. Verwende NIEMALS Fakten aus deinem Trainingswissen ohne 
Überprüfung – Gesetze, Förderungen und Maßnahmen ändern sich laufend.

BEKANNTE FEHLERQUELLEN – diese Aussagen sind FALSCH und dürfen NICHT verwendet werden:
- "Klimabonus als Ausgleich" → Der Klimabonus wurde in Österreich mit 2025 abgeschafft
- Nenne keine Förderprogramme oder staatlichen Leistungen ohne aktuelle Prüfung
- Nenne keine konkreten Eurobeträge ohne aktuelle Quelle

AUFGABE:
Analysiere das folgende politische Thema aus Sicht von sieben österreichischen Medien.
Verwende dabei ausschließlich aktuelle, verifizierte Informationen (Stand: ${today}).

Thema: "${topic}"

Erstelle die Analyse im folgenden JSON-Format (exakt diese Struktur, kein Text davor/danach):
{
  "title": "Aussagekräftiger Titel des Themas",
  "summary": "Kurzzusammenfassung (2-3 Sätze, nur gesicherte Fakten)",
  "date": "Monat Jahr",
  "media": [
    {
      "medium": "ORF",
      "slug": "orf",
      "url": "https://orf.at/#/stories/search/?q=SUCHBEGRIFF (Suchseite des Mediums für das Thema)",
      "headline": "Realistische Schlagzeile im typischen ORF-Stil zu diesem Thema",
      "date": "Aktuelles Datum",
      "focus": "Fokus (z.B. Umwelt / Wirtschaftliche Folgen / Politischer Konflikt / Bürgerbelastung / Alltag / Unternehmen)",
      "stil": "Stil (sachlich ODER erklärend ODER zugespitzt)",
      "excerpt": "2-3 Sätze Zusammenfassung der wichtigsten Aussagen dieses Mediums zu dem Thema. Typischen Schreibstil des Mediums imitieren. Nur gesicherte Fakten."
    }
  ],
  "folgenBuerger": [
    "Konkrete, aktuell gültige Folge für Bürgerinnen und Bürger",
    "Weitere Folge", "Weitere Folge", "Weitere Folge", "Weitere Folge"
  ],
  "folgenUnternehmen": [
    "Konkrete, aktuell gültige Folge für Unternehmen",
    "Weitere Folge", "Weitere Folge", "Weitere Folge", "Weitere Folge"
  ],
  "zahlenFakten": [
    { "wert": "Zahl oder Wert", "label": "Kurze Erklärung des Wertes" },
    { "wert": "Zahl oder Wert", "label": "Kurze Erklärung des Wertes" },
    { "wert": "Zahl oder Wert", "label": "Kurze Erklärung des Wertes" },
    { "wert": "Zahl oder Wert", "label": "Kurze Erklärung des Wertes" },
    { "wert": "Zahl oder Wert", "label": "Kurze Erklärung des Wertes" }
  ],
  "internationalerVergleich": [
    "Land A: Beschreibung des Ansatzes dort (nur gesicherte Fakten!)",
    "Land B: ...", "Land C: ...", "Land D: ...", "Land E: ..."
  ],
  "zeitlicherHorizont": {
    "kurzfristig":   ["Folge innerhalb von 0–1 Jahren", "Weitere kurzfristige Folge"],
    "mittelfristig": ["Folge in 1–5 Jahren", "Weitere mittelfristige Folge"],
    "langfristig":   ["Folge in 5+ Jahren", "Weitere langfristige Folge"]
  },
  "politik": [
    { "partei": "ÖVP",   "haltung": "dafuer", "position": "Aktuelle, belegte Position der Partei (1 Satz)" },
    { "partei": "SPÖ",   "haltung": "dagegen", "position": "..." },
    { "partei": "FPÖ",   "haltung": "gespalten", "position": "..." },
    { "partei": "Grüne", "haltung": "abwartend", "position": "..." },
    { "partei": "NEOS",  "haltung": "neutral", "position": "..." }
  ],
  "fragen": [
    "Kritische Reflexionsfrage 1", "Kritische Reflexionsfrage 2",
    "Kritische Reflexionsfrage 3", "Kritische Reflexionsfrage 4",
    "Kritische Reflexionsfrage 5", "Kritische Reflexionsfrage 6"
  ]
}

Haltungs-Werte für "politik[].haltung" NUR diese verwenden: dafuer | dagegen | gespalten | abwartend | neutral

Medien in dieser Reihenfolge mit typischem Stil:
- ORF (slug: orf) → sachlich, ausgewogen, öffentlich-rechtlich
- Der Standard (slug: standard) → erklärend, analysierend, linksliberal
- Die Presse (slug: presse) → sachlich, wirtschaftsnah, konservativ-liberal
- Kronen Zeitung (slug: krone) → zugespitzt, boulevardesk, lesernah
- Heute (slug: heute) → erklärend, vereinfacht, alltagsorientiert
- exxpress (slug: exxpress) → zugespitzt, wirtschaftsliberal, EU-kritisch

Nur JSON ausgeben. Kein Text, keine Erklärungen, keine Markdown-Codeblöcke.
  `.trim();
}

/* =========================================================
   RENDERING
   ========================================================= */

/* ---------------------------------------------------------
   renderTopic: Hauptfunktion für die Darstellung
   --------------------------------------------------------- */
function renderTopic(topicData, scrollToResults = true, label = "Analyse") {
  if (!topicData) return;

  // Homepage BLEIBT sichtbar – nur Ergebnisse einblenden
  const resultsArea = DOM.resultsArea();
  if (resultsArea) {
    resultsArea.classList.remove("hidden");
    if (scrollToResults) {
      setTimeout(function () {
        resultsArea.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }

  // Source-Badge
  const sourceBadge = document.getElementById("topic-source-badge");
  if (sourceBadge) {
    if (CONFIG.useWorker && CONFIG.workerUrl) {
      sourceBadge.textContent = "● Live via Gemini API";
      sourceBadge.className = "topic-source-badge topic-source-badge--live";
    } else {
      sourceBadge.textContent = "○ Demo-Daten";
      sourceBadge.className = "topic-source-badge topic-source-badge--demo";
    }
    sourceBadge.classList.remove("hidden");
  }

  renderTopicHeader(topicData, label);
  renderMediaCards(topicData.media || []);
  renderMeaningSection(topicData);
  renderQuestions(topicData.fragen || DEFAULT_QUESTIONS);
}

/* ---------------------------------------------------------
   renderTopicHeader
   --------------------------------------------------------- */
function renderTopicHeader(topicData, label = "Analyse") {
  const labelEl   = DOM.topicSectionLabel();
  const titleEl   = DOM.topicTitle();
  const summaryEl = DOM.topicSummary();
  const dateEl    = DOM.topicDate();

  if (labelEl)   labelEl.textContent   = label;
  if (titleEl)   titleEl.textContent   = topicData.title   || "";
  if (summaryEl) summaryEl.textContent = topicData.summary || "";
  if (dateEl)    dateEl.textContent    = topicData.date    || "";
}

/* ---------------------------------------------------------
   renderMediaCards: 7 Medienkarten
   --------------------------------------------------------- */
function renderMediaCards(mediaItems) {
  const grid = DOM.mediaCardsGrid();
  if (!grid) return;

  grid.innerHTML = "";

  mediaItems.forEach(function (item, index) {
    const card = createMediaCard(item, index);
    grid.appendChild(card);
  });
}

/* ---------------------------------------------------------
   createMediaCard: Erstellt eine einzelne Medienkarte
   --------------------------------------------------------- */
function createMediaCard(item, index) {
  // Karte als <a>-Element wenn URL vorhanden und nicht nur Suchseite
  // Unterstützt sowohl found-Feld (Gemini-Pfad) als auch webhook-Format (ohne found)
  const hasRealUrl = item.url && item.url.startsWith("http") &&
    item.found !== false &&
    !item.headline?.includes("Kein aktueller Artikel");
  const card = document.createElement(hasRealUrl ? "a" : "div");
  card.className = "media-card medium--" + (item.slug || "default") + " animate-in";
  card.style.animationDelay = (index * 0.06) + "s";
  card.style.opacity = "0";

  if (hasRealUrl) {
    card.href   = item.url;
    card.target = "_blank";
    card.rel    = "noopener noreferrer";
    card.setAttribute("aria-label", `${item.medium}: ${item.headline} – im neuen Tab öffnen`);
  }

  const searchUrl = item.searchUrl || "#";

  card.innerHTML = `
    <div class="media-card-top"></div>
    <div class="media-card-body">
      <div class="media-name-row">
        <span class="media-name">${escapeHtml(item.medium || "")}</span>
        <div class="media-name-right">
          <span class="media-date">${escapeHtml(item.date || "")}</span>
          <a href="${escapeHtml(searchUrl)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" class="media-link-icon" aria-hidden="true" title="Beim Medium suchen">🔍</a>
        </div>
      </div>
      <p class="media-headline">${escapeHtml(item.headline || "")}</p>
      ${item.excerpt ? `<p class="media-excerpt">${escapeHtml(item.excerpt)}</p>` : ""}
      <div class="media-tags">
        ${item.focus ? `<span class="media-tag-badge media-tag-badge--focus">${escapeHtml(item.focus)}</span>` : ""}
        ${item.stil  ? `<span class="media-tag-badge">${escapeHtml(item.stil)}</span>` : ""}
      </div>
      ${item.compass ? `
      <div class="media-compass">
        ${item.compass.ausrichtung ? `<span class="compass-tag compass-tag--ausrichtung">🧭 ${compassLabel('ausrichtung', item.compass.ausrichtung)}</span>` : ""}
        ${item.compass.neutralitaet ? `<span class="compass-tag compass-tag--neutralitaet compass-tag--neu-${escapeHtml(item.compass.neutralitaet)}">● ${compassLabel('neutralitaet', item.compass.neutralitaet)}</span>` : ""}
        <span class="compass-info-btn" onclick="event.preventDefault(); event.stopPropagation();" aria-label="Medieneinordnung erklären">ⓘ
          <span class="compass-tooltip">
            <strong>Medieneinordnung</strong><br><br>
            <em>Politische Ausrichtung:</em><br>
            🧭 Linksautoritär: Progressiv in gesellschaftlichen Fragen, befürwortet staatliche Eingriffe und Regulierung<br>
            🧭 Liberal-konservativ: Wirtschaftsliberal, gesellschaftlich traditionell orientiert<br>
            🧭 Libertär-konservativ: Wirtschaftsliberal, gesellschaftlich freiheitlich, EU-skeptisch<br>
            🧭 Opportunistisch: Politische Haltung wechselt je nach Eigentümerinteresse und Machtlage<br>
            🧭 Regierungsnah: Tendenzielle Nähe zur jeweils regierenden Partei<br><br>
            <em>Neutralität:</em><br>
            ● Hoch: Ausgewogene Berichterstattung, verschiedene Perspektiven gleichwertig<br>
            ● Mittel: Erkennbare redaktionelle Tendenz, aber grundsätzlich faktenbasiert<br>
            ● Mäßig: Klare redaktionelle Linie, selektive Themensetzung<br>
            ● Gering: Starke redaktionelle Haltung, einseitige Berichterstattung<br><br>
            <em>Die Einordnung spiegelt die generelle redaktionelle Linie des Mediums wider.</em>
          </span>
        </span>
      </div>` : ""}
    </div>
  `;

  return card;
}

/* ---------------------------------------------------------
   renderMeaningSection: Alle 6 Blöcke des Konkret-Bereichs
   --------------------------------------------------------- */
function renderMeaningSection(topicData) {
  const container = DOM.meaningContent();
  if (!container) return;

  const folgenBuerger     = topicData.folgenBuerger     || [];
  const folgenUnternehmen = topicData.folgenUnternehmen || [];
  const zahlenFakten      = topicData.zahlenFakten      || [];
  const intVergleich      = topicData.internationalerVergleich || [];
  const zeitHorizont      = topicData.zeitlicherHorizont || { kurzfristig: [], mittelfristig: [], langfristig: [] };
  const politik           = topicData.politik           || [];
  // Neue Felder vom Webhook-Pfad
  const commonFrames   = topicData.commonFrames  || [];
  const explicitFacts  = topicData.explicitFacts || [];
  const offeneFragen   = topicData.offeneFragen  || [];

  container.innerHTML = `

    <!-- Zeile 1: Politik – volle Breite, ganz oben -->
    <div class="meaning-card meaning-card--politics animate-in meaning-card--full">
      <div class="meaning-card-icon">🏛️</div>
      <h3 class="meaning-card-title">Was sagen die Parteien?</h3>
      <div class="politics-grid">
        ${politik.map(p => `
          <div class="politics-item">
            <span class="politics-party">${escapeHtml(p.partei || "")}</span>
            <span class="politics-stance politics-stance--${escapeHtml(p.haltung || "neutral")}">${escapeHtml(stanceLabel(p.haltung))}</span>
            <p class="politics-text">${escapeHtml(p.position || "")}</p>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Zeile 2: Bürger & Unternehmen -->
    <div class="meaning-card meaning-card--citizens animate-in" style="animation-delay:0.07s;">
      <div class="meaning-card-icon">🏠</div>
      <h3 class="meaning-card-title">Folgen für Bürgerinnen & Bürger</h3>
      <ul class="meaning-list">
        ${folgenBuerger.map(f => `<li>${escapeHtml(f)}</li>`).join("")}
      </ul>
    </div>

    <div class="meaning-card meaning-card--businesses animate-in" style="animation-delay:0.14s;">
      <div class="meaning-card-icon">🏢</div>
      <h3 class="meaning-card-title">Folgen für Unternehmen</h3>
      <ul class="meaning-list">
        ${folgenUnternehmen.map(f => `<li>${escapeHtml(f)}</li>`).join("")}
      </ul>
    </div>

    <!-- Zeile 3: Zahlen & Internationaler Vergleich -->
    <div class="meaning-card meaning-card--facts animate-in" style="animation-delay:0.21s;">
      <div class="meaning-card-icon">📊</div>
      <h3 class="meaning-card-title">Zahlen & Fakten</h3>
      <ul class="meaning-list meaning-list--facts">
        ${zahlenFakten.map(f => `<li><span class="fact-value">${escapeHtml(f.wert || "")}</span><span class="fact-label">${escapeHtml(f.label || "")}</span></li>`).join("")}
      </ul>
    </div>

    <div class="meaning-card meaning-card--international animate-in" style="animation-delay:0.28s;">
      <div class="meaning-card-icon">🌍</div>
      <h3 class="meaning-card-title">Internationaler Vergleich</h3>
      <ul class="meaning-list">
        ${intVergleich.map(f => `<li>${escapeHtml(f)}</li>`).join("")}
      </ul>
    </div>

    <!-- Zeile 4: Zeitlicher Horizont – volle Breite -->
    <div class="meaning-card meaning-card--timeline animate-in meaning-card--full" style="animation-delay:0.35s;">
      <div class="meaning-card-icon">🗓️</div>
      <h3 class="meaning-card-title">Zeitlicher Horizont</h3>
      <div class="timeline-grid">
        <div class="timeline-col">
          <div class="timeline-label timeline-label--short">Kurzfristig</div>
          <ul class="meaning-list">
            ${(zeitHorizont.kurzfristig || []).map(f => `<li>${escapeHtml(f)}</li>`).join("")}
          </ul>
        </div>
        <div class="timeline-col">
          <div class="timeline-label timeline-label--mid">Mittelfristig</div>
          <ul class="meaning-list">
            ${(zeitHorizont.mittelfristig || []).map(f => `<li>${escapeHtml(f)}</li>`).join("")}
          </ul>
        </div>
        <div class="timeline-col">
          <div class="timeline-label timeline-label--long">Langfristig</div>
          <ul class="meaning-list">
            ${(zeitHorizont.langfristig || []).map(f => `<li>${escapeHtml(f)}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>

  ${commonFrames.length > 0 ? `
    <!-- Gemeinsame Frames (Webhook-Analyse) -->
    <div class="meaning-card animate-in meaning-card--full" style="animation-delay:0.42s;">
      <div class="meaning-card-icon">🔍</div>
      <h3 class="meaning-card-title">Gemeinsame Deutungsrahmen</h3>
      <ul class="meaning-list">
        ${commonFrames.map(f => `<li>${escapeHtml(f)}</li>`).join("")}
      </ul>
    </div>` : ""}

  ${explicitFacts.length > 0 ? `
    <!-- Explizite Fakten (Webhook-Analyse) -->
    <div class="meaning-card meaning-card--facts animate-in meaning-card--full" style="animation-delay:0.49s;">
      <div class="meaning-card-icon">📌</div>
      <h3 class="meaning-card-title">Belegte Fakten aus den Artikeln</h3>
      <ul class="meaning-list meaning-list--facts">
        ${explicitFacts.map(f => `<li><span class="fact-value">${escapeHtml(f.wert || "")}</span><span class="fact-label">${escapeHtml(f.label || "")}${f.sourceMedium ? " <em>(" + escapeHtml(f.sourceMedium) + ")</em>" : ""}</span></li>`).join("")}
      </ul>
    </div>` : ""}

  `;
}

/* Hilfsfunktion: Haltungs-Label */
function stanceLabel(haltung) {
  const map = { "dafuer": "Dafür", "dagegen": "Dagegen", "gespalten": "Gespalten", "neutral": "Neutral", "abwartend": "Abwartend" };
  return map[haltung] || haltung || "";
}

/* Hilfsfunktion: Political Compass Label */
function compassLabel(achse, wert) {
  if (achse === 'wirtschaft') {
    const map = { "konservativ": "Konservativ", "liberal": "Liberal", "mitte": "Mitte" };
    return map[wert] || wert || "Mitte";
  }
  if (achse === 'gesellschaft') {
    const map = { "autoritaer": "Autoritär", "libertaer": "Libertär", "mitte": "Mitte" };
    return map[wert] || wert || "Mitte";
  }
  if (achse === 'ausrichtung') {
    const map = {
      "linksautoritaer": "Linksautoritär",
      "liberal-konservativ": "Liberal-konservativ",
      "libertaer-konservativ": "Libertär-konservativ",
      "opportunistisch": "Opportunistisch",
      "regierungsnah": "Regierungsnah"
    };
    return map[wert] || wert || "";
  }
  if (achse === 'neutralitaet') {
    const map = { "hoch": "Neutralität: hoch", "mittel": "Neutralität: mittel", "maessig": "Neutralität: mäßig", "gering": "Neutralität: gering" };
    return map[wert] || wert || "";
  }
  return wert || "";
}

/* ---------------------------------------------------------
   renderQuestions: Fragen zum Weiterdenken
   --------------------------------------------------------- */
function renderQuestions(questions) {
  const container = DOM.questionsContent();
  if (!container) return;

  const questionsArray = questions || DEFAULT_QUESTIONS;

  container.innerHTML = questionsArray.map(function (q, i) {
    return `
      <div class="question-card animate-in" style="animation-delay:${i * 0.07}s; opacity:0;">
        <span class="question-number">${String(i + 1).padStart(2, "0")}</span>
        <p class="question-text">${escapeHtml(q)}</p>
      </div>
    `;
  }).join("");
}

/* ---------------------------------------------------------
   renderNoResults: Kein passendes Demo-Thema gefunden
   --------------------------------------------------------- */
function renderNoResults(topic) {
  const weekSection = DOM.topicOfWeek();
  if (weekSection) weekSection.classList.add("hidden");

  const resultsArea = DOM.resultsArea();
  if (!resultsArea) return;
  resultsArea.classList.remove("hidden");

  const titleEl   = DOM.topicTitle();
  const summaryEl = DOM.topicSummary();
  const dateEl    = DOM.topicDate();

  if (titleEl)   titleEl.textContent = `„${topic}" – Analyse nicht verfügbar`;
  if (summaryEl) summaryEl.innerHTML =
    CONFIG.useWorker && CONFIG.workerUrl
      ? `Die Analyse konnte nicht geladen werden. Bitte versuche es später nochmal.`
      : `Für dieses Thema sind noch keine Demo-Daten hinterlegt. ` +
        `Verfügbare Demo-Themen: <strong>Kunststoffverpackungen</strong>, <strong>CO2-Steuer</strong>, <strong>Erbschaftssteuer</strong>.`;
  if (dateEl) dateEl.textContent = "";

  const mediaGrid = DOM.mediaCardsGrid();
  if (mediaGrid) mediaGrid.innerHTML = "";
  const meaningContent = DOM.meaningContent();
  if (meaningContent) meaningContent.innerHTML = "";
  const questionsContent = DOM.questionsContent();
  if (questionsContent) questionsContent.innerHTML = "";

  resultsArea.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* =========================================================
   UI-HILFSFUNKTIONEN
   ========================================================= */

/* ---------------------------------------------------------
   showLoading: Ladeindikator ein-/ausblenden
   --------------------------------------------------------- */
function showLoading(visible) {
  const overlay    = DOM.loadingOverlay();
  const resultsArea = DOM.resultsArea();
  const searchBtn  = DOM.searchBtn();

  if (!overlay) return;

  if (visible) {
    // Ergebnisbereich zeigen (mit Spinner drin), Inhalt ausblenden
    if (resultsArea) resultsArea.classList.remove("hidden");
    overlay.classList.remove("hidden");
    // Inhalte ausblenden während geladen wird
    const sections = resultsArea ? resultsArea.querySelectorAll("section, .back-bar") : [];
    sections.forEach(s => s.style.visibility = "hidden");

    if (searchBtn) {
      searchBtn.disabled = true;
      const btnText = searchBtn.querySelector(".btn-text");
      if (btnText) btnText.textContent = "Wird analysiert …";
    }
    const loadingText = document.getElementById("loading-text");
    if (loadingText) loadingText.textContent = "Medienberichte werden verglichen …";
  } else {
    overlay.classList.add("hidden");
    // Inhalte wieder zeigen
    const sections = resultsArea ? resultsArea.querySelectorAll("section, .back-bar") : [];
    sections.forEach(s => s.style.visibility = "");

    if (searchBtn) {
      searchBtn.disabled = false;
      const btnText = searchBtn.querySelector(".btn-text");
      if (btnText) btnText.textContent = "Vergleich starten";
    }
  }
}

/* ---------------------------------------------------------
   shakeElement: Visuelles Feedback bei leerem Input
   --------------------------------------------------------- */
function shakeElement(el) {
  el.style.transition = "transform 0.08s ease";
  const steps = [6, -6, 4, -4, 2, -2, 0];
  let i = 0;
  const interval = setInterval(function () {
    el.style.transform = `translateX(${steps[i]}px)`;
    i++;
    if (i >= steps.length) {
      clearInterval(interval);
      el.style.transform = "";
    }
  }, 60);
  el.focus();
}

/* ---------------------------------------------------------
   getMediumColor: Gibt die Markenfarbe eines Mediums zurück
   --------------------------------------------------------- */
function getMediumColor(slug) {
  const colors = {
    "orf":      "#e30613",
    "standard": "#0e3a6e",
    "presse":   "#1a1a1a",
    "krone":    "#d4001a",
    "heute":    "#ff6600",
    "exxpress": "#222222"
  };
  return colors[slug] || "#6b7280";
}

/* ---------------------------------------------------------
   escapeHtml: XSS-Schutz für dynamische Inhalte
   --------------------------------------------------------- */
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g,  "&amp;")
    .replace(/</g,  "&lt;")
    .replace(/>/g,  "&gt;")
    .replace(/"/g,  "&quot;")
    .replace(/'/g,  "&#039;");
}

/* =========================================================
   START
   ========================================================= */
document.addEventListener("DOMContentLoaded", initApp);
