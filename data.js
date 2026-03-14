/* =========================================================
   MEDIENKOMPASS ÖSTERREICH – data.js
   Demo-Daten für drei Themen
   Wird vor script.js geladen.
   ========================================================= */

const DEMO_DATA = {

  /* -------------------------------------------------------
     THEMA 1: EU-Kunststoffverpackungen
     ------------------------------------------------------- */
  "eu-kunststoffverpackungen": {
    id: "eu-kunststoffverpackungen",
    title: "EU plant Einschränkungen bei Kunststoffverpackungen",
    summary:
      "Die Europäische Union plant weitreichende Regelungen zu Kunststoffverpackungen. " +
      "Ziel ist die Reduzierung von Plastikmüll – mit möglichen Folgen für Industrie, Handel und Konsumenten.",
    date: "März 2025",
    keywords: ["Kunststoffverpackungen", "EU-Verordnung", "Plastik", "Verpackungspflicht"],

    media: [
      {
        medium: "ORF",
        slug: "orf",
        url: "https://orf.at/#/stories/search/?q=Kunststoffverpackungen+EU",
        headline: "EU will Plastikmüll drastisch reduzieren – Österreich muss handeln",
        date: "15. März 2025",
        focus: "Umwelt",
        stil: "sachlich",
        excerpt:
          "Die EU-Kommission präsentierte Pläne zur schrittweisen Abkehr von Einwegkunststoffen. " +
          "Österreich ist von der Verordnung besonders betroffen, da hiesige Betriebe hohe Investitionen tätigen müssten."
      },
      {
        medium: "Der Standard",
        slug: "standard",
        url: "https://www.derstandard.at/suche?q=Kunststoffverpackungen+EU",
        headline: "Plastikverbot: Brüssel setzt Zeichen, Industrie warnt vor Kosten",
        date: "14. März 2025",
        focus: "Politischer Konflikt",
        stil: "erklärend",
        excerpt:
          "Die neue EU-Verpackungsverordnung stößt in der Industrie auf Widerstand. " +
          "Umweltverbände begrüßen die Maßnahmen, warnen aber vor Schlupflöchern."
      },
      {
        medium: "Die Presse",
        slug: "presse",
        url: "https://www.diepresse.com/suche?q=Kunststoffverpackungen+EU",
        headline: "Neue EU-Verordnung: Teurer Weg zu weniger Plastik",
        date: "14. März 2025",
        focus: "Wirtschaftliche Folgen",
        stil: "sachlich",
        excerpt:
          "Experten rechnen mit erheblichen Kostenbelastungen für Klein- und Mittelbetriebe. " +
          "Die Umsetzungsfristen der EU gelten als ambitioniert."
      },
      {
        medium: "Kronen Zeitung",
        slug: "krone",
        url: "https://www.krone.at/suche?q=Kunststoffverpackungen",
        headline: "Brüssel verbietet Plastik – das zahlen SIE",
        date: "15. März 2025",
        focus: "Bürgerbelastung",
        stil: "zugespitzt",
        excerpt:
          "Die EU-Bürokraten greifen wieder in die Einkaufstasche! Was das Plastikverbot " +
          "für Österreichs Haushalte wirklich bedeutet – und wer am Ende die Rechnung bekommt."
      },
      {
        medium: "Heute",
        slug: "heute",
        url: "https://www.heute.at/s/suche?q=Kunststoffverpackungen",
        headline: "Ende der Plastikverpackung: Was sich für uns ändert",
        date: "15. März 2025",
        focus: "Alltag",
        stil: "erklärend",
        excerpt:
          "Von der Flasche bis zur Tiefkühlverpackung: Die EU will Plastik eindämmen. " +
          "Wir erklären, was das für den Supermarkt-Einkauf der Zukunft bedeutet."
      },
      {
        medium: "oe24",
        slug: "oe24",
        url: "https://www.oe24.at/suche?q=Kunststoffverpackungen",
        headline: "PLASTIKSHOCK: EU-Verpackungsverbot trifft österreichische Firmen hart",
        date: "13. März 2025",
        focus: "Unternehmen",
        stil: "zugespitzt",
        excerpt:
          "Tausende Jobs könnten gefährdet sein! Österreichs Verpackungsindustrie schlägt " +
          "Alarm: Die neuen EU-Regeln überfordern heimische Betriebe."
      },
      {
        medium: "exxpress",
        slug: "exxpress",
        url: "https://exxpress.at/?s=Kunststoffverpackungen",
        headline: "EU-Plastikverbot: Regulierungswahn auf Kosten der Wirtschaft",
        date: "14. März 2025",
        focus: "Wirtschaftliche Folgen",
        stil: "zugespitzt",
        excerpt:
          "Wieder greift Brüssel in das Wirtschaftsleben ein. Das neue Verpackungsgesetz " +
          "belastet Unternehmen, treibt Preise und bringt kaum messbaren Umweltnutzen."
      }
    ],

    folgenBuerger: [
      "Preise für verpackte Lebensmittel könnten steigen",
      "Weniger Einwegverpackungen im Supermarkt – mehr Mehrwegoptionen",
      "Umstellung des Konsumverhaltens beim Einkauf nötig",
      "Mögliche Kosteneinsparungen durch Reduzierung von Verpackungsmüll",
      "Pfandsysteme für neue Verpackungsarten könnten eingeführt werden"
    ],

    folgenUnternehmen: [
      "Investitionen in neue Verpackungssysteme und -maschinen erforderlich",
      "Produktionskosten könnten durch teurere Alternativmaterialien steigen",
      "Kleinbetriebe mit geringeren Ressourcen stärker belastet als Großkonzerne",
      "Neue Marktchancen für Hersteller biologisch abbaubarer Verpackungen",
      "Lieferketten müssen umgestellt werden – logistischer Aufwand steigt"
    ],

    fragen: [
      "Welche konkreten Kosten entstehen für Haushalte durch neue Verpackungsmaterialien?",
      "Wie werden Klein- und Mittelbetriebe bei der Umstellung unterstützt?",
      "Welche Folgen für Beschäftigung in der Verpackungsindustrie werden thematisiert?",
      "Welche Umweltwirkung hat die Maßnahme – und wird das kritisch hinterfragt?",
      "Wird eher moralisch (Klimaschutz) oder praktisch (Kosten, Umsetzbarkeit) argumentiert?",
      "Welche Alternativen zur neuen Regulierung werden diskutiert?"
    ],

    zahlenFakten: [
      { wert: "55 Mrd. €",  label: "EU-Verpackungsmarkt jährlich" },
      { wert: "40 %",       label: "Kunststoffanteil soll bis 2030 reduziert werden" },
      { wert: "2030",       label: "Zieljahr der EU-Verpackungsverordnung" },
      { wert: "26 kg",      label: "Verpackungsmüll pro Kopf in Österreich pro Jahr" },
      { wert: "ca. 5 %",   label: "Geschätzter Preisanstieg bei betroffenen Produkten" }
    ],

    internationalerVergleich: [
      "Deutschland: Einwegpfand seit 2003 erfolgreich, Rücklaufquote über 97 %",
      "Dänemark: Mehrwegsystem seit Jahrzehnten etabliert, geringster Pro-Kopf-Verpackungsmüll der EU",
      "Frankreich: Verbot von Einwegplastik bei Obst & Gemüse bereits seit 2022 in Kraft",
      "USA: Kein einheitliches Bundesgesetz, Regelungen variieren stark nach Bundesstaat",
      "China: Verbot von Einwegplastiktüten in Städten seit 2020, Umsetzung lückenhaft"
    ],

    zeitlicherHorizont: {
      kurzfristig: [
        "Unternehmen müssen Verpackungen prüfen und anpassen",
        "Erste Preiserhöhungen bei Produkten möglich"
      ],
      mittelfristig: [
        "Umstellung von Produktionslinien und Lieferketten (2025–2028)",
        "Pfandsysteme für neue Materialien werden eingeführt"
      ],
      langfristig: [
        "Deutliche Reduktion von Kunststoffmüll bis 2030 angestrebt",
        "Neue Industrien für Bioverpackungen entstehen"
      ]
    },

    politik: [
      { partei: "ÖVP",    haltung: "gespalten",  position: "Unterstützt Umweltziele, fordert aber längere Übergangsfristen für Betriebe." },
      { partei: "SPÖ",    haltung: "dafuer",     position: "Begrüßt die Maßnahme, verlangt soziale Abfederung bei Preiserhöhungen." },
      { partei: "FPÖ",    haltung: "dagegen",    position: "Kritisiert EU-Regulierung als Eingriff in Wirtschaftsfreiheit, lehnt Verbote ab." },
      { partei: "Grüne",  haltung: "dafuer",     position: "Befürwortet die Verordnung, fordert ambitioniertere Ziele und raschere Umsetzung." },
      { partei: "NEOS",   haltung: "gespalten",  position: "Marktwirtschaftliche Lösung bevorzugt, skeptisch gegenüber starren Verboten." }
    ]
  },

  /* -------------------------------------------------------
     THEMA 2: CO2-Steuer
     ------------------------------------------------------- */
  "co2-steuer": {
    id: "co2-steuer",
    title: "CO2-Steuer: Österreichs Klimapolitik auf dem Prüfstand",
    summary:
      "Der CO2-Preis in Österreich wurde schrittweise erhöht und beträgt 2025 rund 55 Euro pro Tonne. " +
      "Der Klimabonus als Ausgleichszahlung wurde mit 2025 abgeschafft – die Mehrkosten treffen Haushalte und Betriebe nun ungekürzt.",
    date: "Februar 2025",
    keywords: ["CO2-Steuer", "Klimapolitik", "Energiekosten", "CO2-Bepreisung"],

    media: [
      {
        medium: "ORF",
        slug: "orf",
        url: "https://orf.at/#/stories/search/?q=CO2+Steuer",
        headline: "CO2-Preis 2025: Kein Klimabonus mehr – Haushalte ohne Ausgleich",
        date: "20. Feb. 2025",
        focus: "Umwelt",
        stil: "sachlich",
        excerpt:
          "Der CO2-Preis steigt weiter, der Klimabonus wurde als Sparmaßnahme gestrichen. " +
          "Umweltorganisationen fordern alternative Entlastungsmaßnahmen für einkommensschwache Haushalte."
      },
      {
        medium: "Der Standard",
        slug: "standard",
        url: "https://www.derstandard.at/suche?q=CO2+Steuer",
        headline: "CO2-Abgabe ohne Gegenleistung: Wer trägt die Last?",
        date: "19. Feb. 2025",
        focus: "Bürgerbelastung",
        stil: "erklärend",
        excerpt:
          "Haushalte in ländlichen Regionen tragen durch höhere Sprit- und Heizkosten eine überproportionale Last. " +
          "Seit der Abschaffung des Klimabonus gibt es keinen direkten Ausgleich mehr."
      },
      {
        medium: "Die Presse",
        slug: "presse",
        url: "https://www.diepresse.com/suche?q=CO2+Steuer",
        headline: "CO2-Steuer: Lenkungswirkung fraglich, Belastung real",
        date: "20. Feb. 2025",
        focus: "Wirtschaftliche Folgen",
        stil: "sachlich",
        excerpt:
          "Wirtschaftsexperten zweifeln an der Wirksamkeit nationaler CO2-Preise bei globalem Klimawandel. " +
          "Die Kostenbelastung für Betriebe und Haushalte sei hingegen messbar und unmittelbar."
      },
      {
        medium: "Kronen Zeitung",
        slug: "krone",
        url: "https://www.krone.at/suche?q=CO2+Steuer",
        headline: "Tanken wird teurer – und den Ausgleich hat die Regierung gestrichen",
        date: "21. Feb. 2025",
        focus: "Bürgerbelastung",
        stil: "zugespitzt",
        excerpt:
          "Der CO2-Preis steigt, der Klimabonus ist weg. Pendler auf dem Land " +
          "zahlen drauf – ohne jede Kompensation aus Wien."
      },
      {
        medium: "Heute",
        slug: "heute",
        url: "https://www.heute.at/s/suche?q=CO2+Steuer",
        headline: "So viel mehr zahlen Sie 2025 fürs Tanken und Heizen",
        date: "20. Feb. 2025",
        focus: "Alltag",
        stil: "erklärend",
        excerpt:
          "Konkrete Zahlen: Was der CO2-Preis 2025 für Sprit, Gas und Heizöl bedeutet – " +
          "und welche Entlastungen nach dem Ende des Klimabonus noch übrig geblieben sind."
      },
      {
        medium: "oe24",
        slug: "oe24",
        url: "https://www.oe24.at/suche?q=CO2+Steuer",
        headline: "CO2-HAMMER: Teurer tanken, kein Ausgleich – das kostet Sie hunderte Euro!",
        date: "19. Feb. 2025",
        focus: "Bürgerbelastung",
        stil: "zugespitzt",
        excerpt:
          "Die Rechnung haben wir gemacht: CO2-Preis hoch, Klimabonus weg. " +
          "Ein Durchschnittshaushalt zahlt 2025 deutlich mehr – ohne jeden staatlichen Ausgleich."
      },
      {
        medium: "exxpress",
        slug: "exxpress",
        url: "https://exxpress.at/?s=CO2+Steuer",
        headline: "CO2-Steuer: Österreich bestraft sich selbst – mit globalem Nulleffekt",
        date: "21. Feb. 2025",
        focus: "Wirtschaftliche Folgen",
        stil: "zugespitzt",
        excerpt:
          "Österreich emittiert 0,2 Prozent der globalen CO2-Menge. Trotzdem zahlen " +
          "Bürger und Betriebe immer mehr – ohne Ausgleich und ohne messbaren Klimaeffekt."
      }
    ],

    folgenBuerger: [
      "Höhere Kosten beim Tanken: CO2-Aufschlag beträgt 2025 rund 15–16 Cent pro Liter",
      "Heizkosten (Gas, Heizöl) steigen durch CO2-Bepreisung merklich",
      "Pendler ohne öffentliche Verkehrsanbindung besonders stark belastet",
      "Der Klimabonus als Ausgleichszahlung wurde mit 2025 abgeschafft – kein direkter Ersatz",
      "Langfristiger Anreiz, auf Alternativen umzusteigen (Wärmepumpe, E-Auto, Öffis)"
    ],

    folgenUnternehmen: [
      "Energieintensive Betriebe tragen erhebliche Mehrkosten ohne vollständige Kompensation",
      "Transportkosten für Güter und Logistik steigen durch teurere Kraftstoffe",
      "Landwirte und bestimmte Unternehmen erhalten weiterhin eine CO2-Kompensation (rd. 303 Mio. €)",
      "Gefahr von Wettbewerbsnachteilen gegenüber Ländern ohne CO2-Bepreisung",
      "Förderprogramme für erneuerbare Energie als teilweiser Ausgleich vorhanden"
    ],

    fragen: [
      "Welche Haushalte tragen den größten Anteil der CO2-Kosten – und warum?",
      "Warum wurde der Klimabonus abgeschafft – und welche sozialen Folgen hat das?",
      "Welche globale Wirkung hat eine nationale CO2-Bepreisung wirklich?",
      "Werden Alternativen zur CO2-Steuer (z. B. Regulierung, Verbote) diskutiert?",
      "Warum erhalten Unternehmen weiter eine CO2-Kompensation, Privatpersonen aber nicht?",
      "Wird moralisch (Klimaverantwortung) oder ökonomisch (Kosten-Nutzen) argumentiert?"
    ],

    zahlenFakten: [
      { wert: "55 €",     label: "CO2-Preis pro Tonne in Österreich (2025)" },
      { wert: "+15 Ct",   label: "Mehrkosten pro Liter Diesel durch CO2-Abgabe" },
      { wert: "0,2 %",    label: "Österreichs Anteil an globalen CO2-Emissionen" },
      { wert: "1,8 Mrd.", label: "Einsparung durch Abschaffung des Klimabonus (2025)" },
      { wert: "303 Mio.", label: "CO2-Kompensation weiterhin für Unternehmen & Landwirte" }
    ],

    internationalerVergleich: [
      "Schweden: Höchster CO2-Preis der Welt (ca. 130 €/t), kombiniert mit Steuersenkungen",
      "Deutschland: CO2-Preis 2025 bei 55 €/t, Klimageld als Ausgleich bisher nicht umgesetzt",
      "Schweiz: CO2-Abgabe mit direkter Rückverteilung an alle Haushalte (Dividende)",
      "USA: Kein nationaler CO2-Preis, einzelne Bundesstaaten (z. B. Kalifornien) mit Emissionshandel",
      "China: Emissionshandelssystem seit 2021, Preis deutlich niedriger als in Europa"
    ],

    zeitlicherHorizont: {
      kurzfristig: [
        "Sofortige Mehrkosten beim Tanken und Heizen spürbar",
        "Kein direkter staatlicher Ausgleich mehr (Klimabonus weggefallen)"
      ],
      mittelfristig: [
        "Investitionsanreize für Wärmepumpen, E-Autos, Solaranlagen",
        "Energieintensive Betriebe unter Anpassungsdruck"
      ],
      langfristig: [
        "Lenkungswirkung: schrittweise Reduktion fossiler Energie erwartet",
        "Österreich-Ziel: Klimaneutralität bis 2040"
      ]
    },

    politik: [
      { partei: "ÖVP",    haltung: "gespalten",  position: "Steht zur CO2-Bepreisung, hat aber den Klimabonus als Ausgleich abgeschafft." },
      { partei: "SPÖ",    haltung: "gespalten",  position: "Unterstützt CO2-Preis, fordert sozialen Ausgleich für einkommensschwache Haushalte." },
      { partei: "FPÖ",    haltung: "dagegen",    position: "Lehnt CO2-Steuer als Belastung für Pendler und Normalverdiener grundsätzlich ab." },
      { partei: "Grüne",  haltung: "dafuer",     position: "Fordert höheren CO2-Preis und Wiedereinführung eines sozialen Ausgleichs." },
      { partei: "NEOS",   haltung: "dafuer",     position: "Befürwortet CO2-Bepreisung als marktwirtschaftliches Instrument, mit Entbürokratisierung." }
    ]
  },

  /* -------------------------------------------------------
     THEMA 3: Erbschaftssteuer
     ------------------------------------------------------- */
  "erbschaftssteuer": {
    id: "erbschaftssteuer",
    title: "Erbschaftssteuer: Rückkehr einer Debatte",
    summary:
      "Politische Parteien diskutieren die Wiedereinführung einer Erbschaftssteuer in Österreich. " +
      "Befürworter argumentieren mit Umverteilung, Kritiker sehen Risiken für Familienunternehmen.",
    date: "Jänner 2025",
    keywords: ["Erbschaftssteuer", "Vermögen", "Steuer", "Familienunternehmen"],

    media: [
      {
        medium: "ORF",
        slug: "orf",
        url: "https://orf.at/#/stories/search/?q=Erbschaftssteuer",
        headline: "Erbschaftssteuer: Koalition uneinig, Debatte entbrannt",
        date: "10. Jän. 2025",
        focus: "Politischer Konflikt",
        stil: "sachlich",
        excerpt:
          "Mehrere Parteien fordern die Wiedereinführung einer Erbschaftssteuer. " +
          "Die Koalitionspartner sind uneinig – eine Einigung scheint vorerst nicht in Sicht."
      },
      {
        medium: "Der Standard",
        slug: "standard",
        url: "https://www.derstandard.at/suche?q=Erbschaftssteuer",
        headline: "Erbschaftssteuer: Wie Österreich Vermögen verteilt – und warum das ein Problem ist",
        date: "9. Jän. 2025",
        focus: "Umverteilung",
        stil: "erklärend",
        excerpt:
          "In kaum einem EU-Land ist Vermögen so ungleich verteilt wie in Österreich. " +
          "Eine Erbschaftssteuer könnte zur Umverteilung beitragen – wenn sie richtig gestaltet wird."
      },
      {
        medium: "Die Presse",
        slug: "presse",
        url: "https://www.diepresse.com/suche?q=Erbschaftssteuer",
        headline: "Erbschaftssteuer: Zwischen Gerechtigkeit und wirtschaftlichem Schaden",
        date: "10. Jän. 2025",
        focus: "Wirtschaftliche Folgen",
        stil: "sachlich",
        excerpt:
          "Eine gut ausgestaltete Erbschaftssteuer kann sinnvoll sein – schlecht gemacht " +
          "schadet sie Familienunternehmen und treibt Vermögen ins Ausland."
      },
      {
        medium: "Kronen Zeitung",
        slug: "krone",
        url: "https://www.krone.at/suche?q=Erbschaftssteuer",
        headline: "Hände weg von unserem Ersparten! Erbschaftssteuer trifft Normalbürger",
        date: "11. Jän. 2025",
        focus: "Bürgerbelastung",
        stil: "zugespitzt",
        excerpt:
          "Das Eigenheim, das Häuserl am Land, die kleine Erbschaft: " +
          "Jetzt soll der Staat auch noch beim Vererben die Hand aufhalten. Wir sagen: Nein danke!"
      },
      {
        medium: "Heute",
        slug: "heute",
        url: "https://www.heute.at/s/suche?q=Erbschaftssteuer",
        headline: "Erbschaftssteuer: Was das für Ihre Erbschaft bedeuten würde",
        date: "10. Jän. 2025",
        focus: "Alltag",
        stil: "erklärend",
        excerpt:
          "Würde die Erbschaftssteuer kommen – wer wäre betroffen? Wir erklären " +
          "mögliche Freibeträge, Steuersätze und was das für Häuser und Sparguthaben bedeutet."
      },
      {
        medium: "oe24",
        slug: "oe24",
        url: "https://www.oe24.at/suche?q=Erbschaftssteuer",
        headline: "STEUER-ALARM: Rot-Grün plant Erbschaftssteuer-Hammer für alle!",
        date: "9. Jän. 2025",
        focus: "Politischer Konflikt",
        stil: "zugespitzt",
        excerpt:
          "Die Linksparteien wollen Ihnen ans Erbe! Erbschaftssteuer würde " +
          "Mittelstand und Eigenheimbesitzer treffen – nicht nur Millionäre."
      },
      {
        medium: "exxpress",
        slug: "exxpress",
        url: "https://exxpress.at/?s=Erbschaftssteuer",
        headline: "Erbschaftssteuer: Staatsgier auf dem Rücken der Familien",
        date: "11. Jän. 2025",
        focus: "Bürgerbelastung",
        stil: "zugespitzt",
        excerpt:
          "Der Staat will beim Lebenswerk der Österreicher mitnaschen. " +
          "Experten warnen: Eine neue Erbschaftssteuer treibt Kapital ins Ausland und schadet der Wirtschaft."
      }
    ],

    folgenBuerger: [
      "Eigenheimbesitzer könnten beim Vererben von Immobilien Steuer zahlen müssen",
      "Freibeträge entscheiden, ob Normalbürger oder nur Hochvermögende betroffen sind",
      "Mögliche Staatseinnahmen könnten für Bildung oder Sozialleistungen genutzt werden",
      "Komplexere Nachlassplanung und rechtliche Beratung erforderlich",
      "Vermögensübertragung zu Lebzeiten könnte strategisch interessanter werden"
    ],

    folgenUnternehmen: [
      "Familienunternehmen bei Betriebsübergabe steuerlich belastet",
      "Kapitalabfluss ins Ausland möglich, wenn Steuern zu hoch sind",
      "Investitionsbereitschaft könnte sinken, wenn weniger Kapital verfügbar ist",
      "Regelungen für Betriebsvermögen entscheidend für Wettbewerbsfähigkeit",
      "Neue Beratungsdienstleistungen rund um Nachfolgeplanung entstehen"
    ],

    fragen: [
      "Ab welchem Betrag wären Normalbürger von einer Erbschaftssteuer betroffen?",
      "Welche Folgen hätte sie für Familienunternehmen und die Betriebsnachfolge?",
      "Wie hoch wären die tatsächlichen Staatseinnahmen – und wofür würden sie genutzt?",
      "Welche Länder haben eine Erbschaftssteuer – mit welchen Erfahrungen?",
      "Berichten Medien faktenbasiert oder eher emotionalisierend über das Thema?",
      "Welche Aspekte des Themas werden in der öffentlichen Debatte kaum diskutiert?"
    ],

    zahlenFakten: [
      { wert: "1 %",       label: "Reichste Österreicher besitzen ca. 40 % des Gesamtvermögens" },
      { wert: "2008",      label: "Jahr der Abschaffung der Erbschaftssteuer in Österreich" },
      { wert: "1–2 Mrd.", label: "Geschätzte jährliche Steuereinnahmen bei Wiedereinführung" },
      { wert: "500.000 €", label: "Diskutierter Freibetrag für Immobilien (Vorschlag SPÖ)" },
      { wert: "15 von 27", label: "EU-Mitgliedsstaaten haben eine Erbschafts- oder Schenkungssteuer" }
    ],

    internationalerVergleich: [
      "Deutschland: Erbschaftssteuer mit Freibeträgen bis 400.000 € je nach Verwandtschaftsgrad",
      "Schweiz: Keine Bundessteuer, Kantone regeln individuell – oft mit hohen Freibeträgen",
      "Frankreich: Progressive Erbschaftssteuer bis 45 %, strenge Regelung bei Fernverwandten",
      "UK: 40 % auf Erbschaften über 325.000 Pfund, mit Ausnahmen für Eigenheime",
      "Schweden: Erbschaftssteuer 2004 abgeschafft – seitdem kein nennenswerter Kapitalabfluss messbar"
    ],

    zeitlicherHorizont: {
      kurzfristig: [
        "Politische Debatte und Koalitionsverhandlungen – kein Beschluss absehbar",
        "Steuerliche Beratung zur vorausschauenden Vermögensübertragung nimmt zu"
      ],
      mittelfristig: [
        "Bei Einführung: Anpassung von Unternehmens- und Immobilienbewertungen nötig",
        "Mögliche Verlagerung von Vermögen ins Ausland (Vorbereitungsphase)"
      ],
      langfristig: [
        "Staatseinnahmen könnten Bildung oder Sozialleistungen finanzieren",
        "Langfristige Auswirkung auf Vermögensverteilung wissenschaftlich umstritten"
      ]
    },

    politik: [
      { partei: "ÖVP",    haltung: "dagegen",    position: "Lehnt Erbschaftssteuer ab – sieht sie als Doppelbesteuerung bereits versteuerter Einkommen." },
      { partei: "SPÖ",    haltung: "dafuer",     position: "Fordert Erbschaftssteuer ab 1 Mio. € mit hohem Freibetrag für Eigenheime und KMU." },
      { partei: "FPÖ",    haltung: "dagegen",    position: "Strikt dagegen – bezeichnet sie als Angriff auf Familienvermögen und Mittelstand." },
      { partei: "Grüne",  haltung: "dafuer",     position: "Unterstützt Erbschaftssteuer als Instrument gegen Vermögenskonzentration." },
      { partei: "NEOS",   haltung: "abwartend",  position: "Grundsätzlich offen, aber nur mit umfassender Steuerreform und Senkung anderer Abgaben." }
    ]
  }
};

/* -------------------------------------------------------
   Keyword-Mapping für flexible Sucheingaben
   ------------------------------------------------------- */
const KEYWORD_MAP = {
  "kunststoffverpackungen":    "eu-kunststoffverpackungen",
  "eu-kunststoffverpackungen": "eu-kunststoffverpackungen",
  "verpackung":                "eu-kunststoffverpackungen",
  "verpackungen":              "eu-kunststoffverpackungen",
  "plastik":                   "eu-kunststoffverpackungen",
  "eu verpackung":             "eu-kunststoffverpackungen",

  "co2":                       "co2-steuer",
  "co2-steuer":                "co2-steuer",
  "co2 steuer":                "co2-steuer",
  "klimasteuer":               "co2-steuer",
  "klimabonus":                "co2-steuer",   // historisch: Klimabonus war mit CO2-Steuer verknüpft (abgeschafft 2025)
  "kohlenstoff":               "co2-steuer",

  "erbschaftssteuer":          "erbschaftssteuer",
  "erbschaft":                 "erbschaftssteuer",
  "erbschaftsteuer":           "erbschaftssteuer",
  "erbschafts steuer":         "erbschaftssteuer",
  "vermögensteuer":            "erbschaftssteuer",
  "erben":                     "erbschaftssteuer"
};

/* -------------------------------------------------------
   Standard-Fragen (Fallback, wenn Thema keine eigenen hat)
   ------------------------------------------------------- */
const DEFAULT_QUESTIONS = [
  "Welche Folgen betreffen Bürger direkt?",
  "Welche Auswirkungen tragen Unternehmen?",
  "Welche Aspekte betonen Medien besonders stark?",
  "Welche möglichen Folgen werden kaum erwähnt?",
  "Wird eher moralisch oder praktisch argumentiert?",
  "Welche Stimmen fehlen in der Berichterstattung?"
];

/* -------------------------------------------------------
   Demo-Daten für "Thema der Woche" (Schnellansicht)
   ------------------------------------------------------- */
const WEEK_TOPIC_KEY = "eu-kunststoffverpackungen";
