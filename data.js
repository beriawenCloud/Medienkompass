/* =========================================================
   MEDIENKOMPASS ÖSTERREICH – data.js
   14 Demo-Themen als Archiv-Platzhalter
   Political Compass: wirtschaft + gesellschaft pro Medium
   ========================================================= */

const DEMO_DATA = {

/* -------------------------------------------------------
   1. EU-Kunststoffverpackungen
   ------------------------------------------------------- */
"eu-kunststoffverpackungen": {
  id: "eu-kunststoffverpackungen",
  title: "EU plant Einschränkungen bei Kunststoffverpackungen",
  summary: "Die Europäische Union plant weitreichende Regelungen zu Kunststoffverpackungen. Ziel ist die Reduzierung von Plastikmüll – mit möglichen Folgen für Industrie, Handel und Konsumenten.",
  date: "März 2026",
  keywords: ["Kunststoffverpackungen","EU","Plastik"],
  media: [
    { medium:"ORF", slug:"orf", url:"https://orf.at/#/stories/search/?q=Kunststoffverpackungen+EU", headline:"EU will Plastikmüll drastisch reduzieren – Österreich muss handeln", date:"11. März 2026", focus:"Umwelt", stil:"sachlich", excerpt:"Die EU-Kommission präsentierte Pläne zur Abkehr von Einwegkunststoffen. Österreich ist besonders betroffen.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"Der Standard", slug:"standard", url:"https://www.derstandard.at/suche?q=Kunststoffverpackungen+EU", headline:"Plastikverbot: Brüssel setzt Zeichen, Industrie warnt vor Kosten", date:"10. März 2026", focus:"Politischer Konflikt", stil:"erklärend", excerpt:"Die neue EU-Verpackungsverordnung stößt in der Industrie auf Widerstand. Umweltverbände begrüßen die Maßnahmen.", compass:{wirtschaft:"liberal", gesellschaft:"libertaer"} },
    { medium:"Die Presse", slug:"presse", url:"https://www.diepresse.com/suche?q=Kunststoffverpackungen+EU", headline:"Neue EU-Verordnung: Teurer Weg zu weniger Plastik", date:"10. März 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Experten rechnen mit erheblichen Kostenbelastungen für KMU. Die Umsetzungsfristen gelten als ambitioniert.", compass:{wirtschaft:"konservativ", gesellschaft:"mitte"} },
    { medium:"Kronen Zeitung", slug:"krone", url:"https://www.krone.at/suche?q=Kunststoffverpackungen", headline:"Brüssel verbietet Plastik – das zahlen SIE", date:"11. März 2026", focus:"Bürgerbelastung", stil:"zugespitzt", excerpt:"Die EU-Bürokraten greifen wieder in die Einkaufstasche! Was das Plastikverbot für Österreichs Haushalte bedeutet.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} },
    { medium:"Heute", slug:"heute", url:"https://www.heute.at/s/suche?q=Kunststoffverpackungen", headline:"Ende der Plastikverpackung: Was sich für uns ändert", date:"11. März 2026", focus:"Alltag", stil:"erklärend", excerpt:"Von der Flasche bis zur Tiefkühlverpackung: Die EU will Plastik eindämmen.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"exxpress", slug:"exxpress", url:"https://exxpress.at/?s=Kunststoffverpackungen", headline:"EU-Plastikverbot: Regulierungswahn auf Kosten der Wirtschaft", date:"10. März 2026", focus:"Wirtschaftliche Folgen", stil:"zugespitzt", excerpt:"Wieder greift Brüssel ins Wirtschaftsleben ein. Das Verpackungsgesetz belastet Unternehmen.", compass:{wirtschaft:"konservativ", gesellschaft:"libertaer"} }
  ],
  folgenBuerger:["Preise für verpackte Lebensmittel könnten steigen","Weniger Einwegverpackungen im Supermarkt","Umstellung des Konsumverhaltens nötig","Mögliche Kosteneinsparungen durch weniger Verpackungsmüll","Pfandsysteme für neue Verpackungsarten"],
  folgenUnternehmen:["Investitionen in neue Verpackungssysteme erforderlich","Produktionskosten durch teurere Materialien","Kleinbetriebe stärker belastet als Großkonzerne","Neue Marktchancen für Hersteller biologisch abbaubarer Verpackungen","Lieferketten müssen umgestellt werden"],
  zahlenFakten:[{wert:"55 Mrd. €",label:"EU-Verpackungsmarkt jährlich"},{wert:"40 %",label:"Kunststoffanteil soll bis 2030 reduziert werden"},{wert:"2030",label:"Zieljahr der EU-Verpackungsverordnung"},{wert:"26 kg",label:"Verpackungsmüll pro Kopf in Österreich"},{wert:"ca. 5 %",label:"Geschätzter Preisanstieg bei betroffenen Produkten"}],
  internationalerVergleich:["Deutschland: Einwegpfand seit 2003, Rücklaufquote über 97 %","Dänemark: Mehrwegsystem seit Jahrzehnten etabliert","Frankreich: Verbot von Einwegplastik bei Obst seit 2022","USA: Kein einheitliches Bundesgesetz","China: Verbot von Einwegplastiktüten in Städten seit 2020"],
  zeitlicherHorizont:{kurzfristig:["Unternehmen müssen Verpackungen prüfen","Erste Preiserhöhungen möglich"],mittelfristig:["Umstellung von Produktionslinien 2026–2029","Pfandsysteme werden eingeführt"],langfristig:["Deutliche Reduktion von Kunststoffmüll bis 2030","Neue Industrien für Bioverpackungen"]},
  politik:[{partei:"ÖVP",haltung:"gespalten",position:"Unterstützt Umweltziele, fordert längere Übergangsfristen."},{partei:"SPÖ",haltung:"dafuer",position:"Begrüßt die Maßnahme, verlangt soziale Abfederung."},{partei:"FPÖ",haltung:"dagegen",position:"Kritisiert EU-Regulierung als Eingriff in Wirtschaftsfreiheit."},{partei:"Grüne",haltung:"dafuer",position:"Befürwortet die Verordnung, fordert ambitioniertere Ziele."},{partei:"NEOS",haltung:"gespalten",position:"Marktwirtschaftliche Lösung bevorzugt."}],
  fragen:["Welche Kosten entstehen für Haushalte?","Wie werden KMU bei der Umstellung unterstützt?","Welche Folgen für Beschäftigung in der Verpackungsindustrie?","Welche Umweltwirkung hat die Maßnahme wirklich?","Wird eher moralisch oder praktisch argumentiert?","Welche Alternativen zur Regulierung werden diskutiert?"]
},

/* -------------------------------------------------------
   2. CO2-Steuer
   ------------------------------------------------------- */
"co2-steuer": {
  id: "co2-steuer",
  title: "CO2-Steuer: Österreichs Klimapolitik auf dem Prüfstand",
  summary: "Der CO2-Preis in Österreich beträgt 2025 rund 55 Euro pro Tonne. Der Klimabonus als Ausgleichszahlung wurde mit 2025 abgeschafft – die Mehrkosten treffen Haushalte und Betriebe ungekürzt.",
  date: "Februar 2026",
  keywords: ["CO2-Steuer","Klimapolitik","Energiekosten"],
  media: [
    { medium:"ORF", slug:"orf", url:"https://orf.at/#/stories/search/?q=CO2+Steuer", headline:"CO2-Preis 2025: Kein Klimabonus mehr – Haushalte ohne Ausgleich", date:"7. März 2026", focus:"Umwelt", stil:"sachlich", excerpt:"Der CO2-Preis steigt weiter, der Klimabonus wurde als Sparmaßnahme gestrichen.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"Der Standard", slug:"standard", url:"https://www.derstandard.at/suche?q=CO2+Steuer", headline:"CO2-Abgabe ohne Gegenleistung: Wer trägt die Last?", date:"6. März 2026", focus:"Bürgerbelastung", stil:"erklärend", excerpt:"Haushalte in ländlichen Regionen tragen eine überproportionale Last. Kein direkter Ausgleich mehr.", compass:{wirtschaft:"liberal", gesellschaft:"libertaer"} },
    { medium:"Die Presse", slug:"presse", url:"https://www.diepresse.com/suche?q=CO2+Steuer", headline:"CO2-Steuer: Lenkungswirkung fraglich, Belastung real", date:"7. März 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Wirtschaftsexperten zweifeln an der Wirksamkeit nationaler CO2-Preise.", compass:{wirtschaft:"konservativ", gesellschaft:"mitte"} },
    { medium:"Kronen Zeitung", slug:"krone", url:"https://www.krone.at/suche?q=CO2+Steuer", headline:"Tanken wird teurer – und den Ausgleich hat die Regierung gestrichen", date:"7. März 2026", focus:"Bürgerbelastung", stil:"zugespitzt", excerpt:"Der CO2-Preis steigt, der Klimabonus ist weg. Pendler zahlen drauf.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} },
    { medium:"Heute", slug:"heute", url:"https://www.heute.at/s/suche?q=CO2+Steuer", headline:"So viel mehr zahlen Sie 2025 fürs Tanken und Heizen", date:"7. März 2026", focus:"Alltag", stil:"erklärend", excerpt:"Konkrete Zahlen: Was der CO2-Preis für Sprit, Gas und Heizöl bedeutet.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"exxpress", slug:"exxpress", url:"https://exxpress.at/?s=CO2+Steuer", headline:"CO2-Steuer: Österreich bestraft sich selbst – mit globalem Nulleffekt", date:"7. März 2026", focus:"Wirtschaftliche Folgen", stil:"zugespitzt", excerpt:"Österreich emittiert 0,2 % der globalen CO2-Menge. Trotzdem zahlen Bürger immer mehr.", compass:{wirtschaft:"konservativ", gesellschaft:"libertaer"} }
  ],
  folgenBuerger:["Höhere Kosten beim Tanken: ~15–16 Ct/Liter","Heizkosten steigen merklich","Pendler ohne ÖV besonders betroffen","Klimabonus seit 2025 abgeschafft – kein Ersatz","Langfristiger Anreiz für Alternativen (Wärmepumpe, E-Auto)"],
  folgenUnternehmen:["Energieintensive Betriebe tragen Mehrkosten","Transportkosten steigen","Landwirte erhalten weiter CO2-Kompensation","Gefahr von Wettbewerbsnachteilen","Förderprogramme für erneuerbare Energie vorhanden"],
  zahlenFakten:[{wert:"55 €",label:"CO2-Preis pro Tonne (2025)"},{wert:"+15 Ct",label:"Mehrkosten pro Liter Diesel"},{wert:"0,2 %",label:"Österreichs Anteil an globalen CO2-Emissionen"},{wert:"1,8 Mrd.",label:"Einsparung durch Abschaffung des Klimabonus"},{wert:"303 Mio.",label:"CO2-Kompensation weiterhin für Unternehmen"}],
  internationalerVergleich:["Schweden: Höchster CO2-Preis der Welt (~130 €/t)","Deutschland: CO2-Preis 2025 bei 55 €/t","Schweiz: CO2-Abgabe mit direkter Rückverteilung","USA: Kein nationaler CO2-Preis","China: Emissionshandelssystem seit 2021"],
  zeitlicherHorizont:{kurzfristig:["Sofortige Mehrkosten beim Tanken und Heizen","Kein staatlicher Ausgleich mehr"],mittelfristig:["Investitionsanreize für Wärmepumpen, E-Autos","Energieintensive Betriebe unter Anpassungsdruck"],langfristig:["Schrittweise Reduktion fossiler Energie erwartet","Österreich-Ziel: Klimaneutralität bis 2040"]},
  politik:[{partei:"ÖVP",haltung:"gespalten",position:"Steht zur CO2-Bepreisung, hat aber Klimabonus abgeschafft."},{partei:"SPÖ",haltung:"gespalten",position:"Unterstützt CO2-Preis, fordert sozialen Ausgleich."},{partei:"FPÖ",haltung:"dagegen",position:"Lehnt CO2-Steuer als Belastung für Pendler ab."},{partei:"Grüne",haltung:"dafuer",position:"Fordert höheren CO2-Preis und Wiedereinführung eines Ausgleichs."},{partei:"NEOS",haltung:"dafuer",position:"Befürwortet CO2-Bepreisung als marktwirtschaftliches Instrument."}],
  fragen:["Welche Haushalte tragen den größten Anteil?","Warum wurde der Klimabonus abgeschafft?","Welche globale Wirkung hat eine nationale CO2-Bepreisung?","Werden Alternativen diskutiert?","Warum erhalten Unternehmen weiter Kompensation, Privatpersonen nicht?","Wird moralisch oder ökonomisch argumentiert?"]
},

/* -------------------------------------------------------
   3. Erbschaftssteuer
   ------------------------------------------------------- */
"erbschaftssteuer": {
  id: "erbschaftssteuer",
  title: "Erbschaftssteuer: Rückkehr einer Debatte",
  summary: "Politische Parteien diskutieren die Wiedereinführung einer Erbschaftssteuer in Österreich. Befürworter argumentieren mit Umverteilung, Kritiker sehen Risiken für Familienunternehmen.",
  date: "März 2026",
  keywords: ["Erbschaftssteuer","Vermögen","Steuer"],
  media: [
    { medium:"ORF", slug:"orf", url:"https://orf.at/#/stories/search/?q=Erbschaftssteuer", headline:"Erbschaftssteuer: Koalition uneinig, Debatte entbrannt", date:"4. März 2026", focus:"Politischer Konflikt", stil:"sachlich", excerpt:"Mehrere Parteien fordern die Wiedereinführung. Die Koalitionspartner sind uneinig.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"Der Standard", slug:"standard", url:"https://www.derstandard.at/suche?q=Erbschaftssteuer", headline:"Erbschaftssteuer: Wie Österreich Vermögen verteilt – und warum das ein Problem ist", date:"3. März 2026", focus:"Umverteilung", stil:"erklärend", excerpt:"In kaum einem EU-Land ist Vermögen so ungleich verteilt wie in Österreich.", compass:{wirtschaft:"liberal", gesellschaft:"libertaer"} },
    { medium:"Die Presse", slug:"presse", url:"https://www.diepresse.com/suche?q=Erbschaftssteuer", headline:"Erbschaftssteuer: Zwischen Gerechtigkeit und wirtschaftlichem Schaden", date:"4. März 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Eine gut ausgestaltete Erbschaftssteuer kann sinnvoll sein – schlecht gemacht schadet sie.", compass:{wirtschaft:"konservativ", gesellschaft:"mitte"} },
    { medium:"Kronen Zeitung", slug:"krone", url:"https://www.krone.at/suche?q=Erbschaftssteuer", headline:"Hände weg von unserem Ersparten! Erbschaftssteuer trifft Normalbürger", date:"4. März 2026", focus:"Bürgerbelastung", stil:"zugespitzt", excerpt:"Das Eigenheim, das Häuserl am Land: Jetzt soll der Staat beim Vererben die Hand aufhalten.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} },
    { medium:"Heute", slug:"heute", url:"https://www.heute.at/s/suche?q=Erbschaftssteuer", headline:"Erbschaftssteuer: Was das für Ihre Erbschaft bedeuten würde", date:"4. März 2026", focus:"Alltag", stil:"erklärend", excerpt:"Wer wäre betroffen? Wir erklären mögliche Freibeträge und was das für Häuser bedeutet.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"exxpress", slug:"exxpress", url:"https://exxpress.at/?s=Erbschaftssteuer", headline:"Erbschaftssteuer: Staatsgier auf dem Rücken der Familien", date:"4. März 2026", focus:"Bürgerbelastung", stil:"zugespitzt", excerpt:"Der Staat will beim Lebenswerk mitnaschen. Experten warnen: treibt Kapital ins Ausland.", compass:{wirtschaft:"konservativ", gesellschaft:"libertaer"} }
  ],
  folgenBuerger:["Eigenheimbesitzer könnten Steuer zahlen müssen","Freibeträge entscheidend für Betroffenheit","Staatseinnahmen für Bildung oder Soziales","Komplexere Nachlassplanung erforderlich","Vermögensübertragung zu Lebzeiten interessanter"],
  folgenUnternehmen:["Familienunternehmen bei Betriebsübergabe belastet","Kapitalabfluss ins Ausland möglich","Investitionsbereitschaft könnte sinken","Regelungen für Betriebsvermögen entscheidend","Neue Beratungsdienstleistungen entstehen"],
  zahlenFakten:[{wert:"1 %",label:"Reichste besitzen ~40 % des Gesamtvermögens"},{wert:"2008",label:"Jahr der Abschaffung der Erbschaftssteuer"},{wert:"1–2 Mrd.",label:"Geschätzte jährliche Einnahmen bei Wiedereinführung"},{wert:"500.000 €",label:"Diskutierter Freibetrag für Immobilien"},{wert:"15 von 27",label:"EU-Länder mit Erbschaftssteuer"}],
  internationalerVergleich:["Deutschland: Freibeträge bis 400.000 € je nach Verwandtschaft","Schweiz: Kein Bundessteuer, Kantone regeln individuell","Frankreich: Progressive Erbschaftssteuer bis 45 %","UK: 40 % auf Erbschaften über 325.000 Pfund","Schweden: Erbschaftssteuer 2004 abgeschafft"],
  zeitlicherHorizont:{kurzfristig:["Politische Debatte – kein Beschluss absehbar","Steuerliche Beratung nimmt zu"],mittelfristig:["Anpassung von Bewertungen nötig","Mögliche Verlagerung von Vermögen ins Ausland"],langfristig:["Staatseinnahmen könnten Bildung finanzieren","Langfristige Wirkung auf Vermögensverteilung"]},
  politik:[{partei:"ÖVP",haltung:"dagegen",position:"Lehnt Erbschaftssteuer ab – sieht sie als Doppelbesteuerung."},{partei:"SPÖ",haltung:"dafuer",position:"Fordert Erbschaftssteuer ab 1 Mio. € mit hohem Freibetrag."},{partei:"FPÖ",haltung:"dagegen",position:"Strikt dagegen – Angriff auf Familienvermögen."},{partei:"Grüne",haltung:"dafuer",position:"Unterstützt als Instrument gegen Vermögenskonzentration."},{partei:"NEOS",haltung:"abwartend",position:"Grundsätzlich offen, aber nur mit umfassender Steuerreform."}],
  fragen:["Ab welchem Betrag wären Normalbürger betroffen?","Welche Folgen für Familienunternehmen?","Wie hoch wären die Staatseinnahmen wirklich?","Welche Länder haben eine Erbschaftssteuer – mit welchen Erfahrungen?","Wird faktenbasiert oder emotionalisierend berichtet?","Welche Aspekte werden kaum diskutiert?"]
},

/* -------------------------------------------------------
   4. Eskalation im Nahen Osten
   ------------------------------------------------------- */
"naher-osten": {
  id: "naher-osten",
  title: "Eskalation im Nahen Osten: Österreichs Reaktion",
  summary: "Die anhaltenden Konflikte im Nahen Osten haben direkte Auswirkungen auf Österreich – von steigenden Energiepreisen bis zu humanitären Fragen und außenpolitischen Positionen.",
  date: "Februar 2026",
  keywords: ["Naher Osten","Israel","Gaza","Außenpolitik"],
  media: [
    { medium:"ORF", slug:"orf", url:"https://orf.at/#/stories/search/?q=Naher+Osten+Österreich", headline:"Nahost-Konflikt: Österreich fordert sofortige Waffenruhe", date:"8. Feb. 2026", focus:"Außenpolitik", stil:"sachlich", excerpt:"Die österreichische Bundesregierung hat sich für eine sofortige Waffenruhe ausgesprochen.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"Der Standard", slug:"standard", url:"https://www.derstandard.at/suche?q=Naher+Osten", headline:"Nahost-Krieg: Warum Österreichs Neutralität auf dem Prüfstand steht", date:"7. Feb. 2026", focus:"Politischer Konflikt", stil:"erklärend", excerpt:"Der Konflikt stellt Österreichs außenpolitische Neutralität vor neue Herausforderungen.", compass:{wirtschaft:"liberal", gesellschaft:"libertaer"} },
    { medium:"Die Presse", slug:"presse", url:"https://www.diepresse.com/suche?q=Naher+Osten", headline:"Nahost-Krise: Wirtschaftliche Folgen für Europa und Österreich", date:"8. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Steigende Ölpreise und Lieferkettenstörungen belasten die österreichische Wirtschaft.", compass:{wirtschaft:"konservativ", gesellschaft:"mitte"} },
    { medium:"Kronen Zeitung", slug:"krone", url:"https://www.krone.at/suche?q=Naher+Osten", headline:"Krieg im Nahen Osten: Droht uns jetzt die nächste Energiekrise?", date:"2. März 2026", focus:"Bürgerbelastung", stil:"zugespitzt", excerpt:"Der Konflikt könnte die Energiepreise in die Höhe treiben. Österreich muss sich wappnen.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} },
    { medium:"Heute", slug:"heute", url:"https://www.heute.at/s/suche?q=Naher+Osten", headline:"Nahost-Konflikt: Was das für uns in Österreich bedeutet", date:"8. Feb. 2026", focus:"Alltag", stil:"erklärend", excerpt:"Von Spritpreisen bis zu humanitärer Hilfe: So berührt der Konflikt den österreichischen Alltag.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"exxpress", slug:"exxpress", url:"https://exxpress.at/?s=Naher+Osten", headline:"Nahost-Krise: Österreich muss klare Kante zeigen", date:"2. März 2026", focus:"Außenpolitik", stil:"zugespitzt", excerpt:"Die Regierung laviert. Österreich braucht eine klare außenpolitische Position.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} }
  ],
  folgenBuerger:["Steigende Energiepreise möglich","Humanitäre Hilfsbereitschaft gefragt","Sicherheitslage in Österreich beobachtet","Reisewarnungen für die Region","Flüchtlingsfragen könnten zunehmen"],
  folgenUnternehmen:["Lieferkettenstörungen möglich","Energiekosten könnten steigen","Exportmärkte im Nahen Osten betroffen","Versicherungskosten für internationale Transporte","Investitionsunsicherheit steigt"],
  zahlenFakten:[{wert:"3 %",label:"Österreichs Energieimporte aus der Nahost-Region"},{wert:"~500",label:"Österreicher im Konfliktgebiet registriert"},{wert:"2 Mio. €",label:"Österreichische Nothilfe für Gaza"},{wert:"15 %",label:"Möglicher Ölpreisanstieg bei Eskalation"},{wert:"1948",label:"Gründungsjahr Israels"}],
  internationalerVergleich:["Deutschland: Klare Pro-Israel-Haltung der Regierung","USA: Militärische Unterstützung für Israel","Frankreich: Fordert Zweistaatenlösung","Türkei: Kritische Haltung gegenüber Israel","Irland: Besonders pro-palästinensische Regierungsposition"],
  zeitlicherHorizont:{kurzfristig:["Energiepreisschwankungen","Humanitäre Krisenhilfe nötig"],mittelfristig:["Außenpolitische Positionierung Österreichs","Wirtschaftliche Anpassung an neue Lieferketten"],langfristig:["Langfristige Stabilitätsfrage im Nahen Osten","Österreichs Rolle in der EU-Außenpolitik"]},
  politik:[{partei:"ÖVP",haltung:"gespalten",position:"Fordert Waffenruhe, betont Israels Selbstverteidigungsrecht."},{partei:"SPÖ",haltung:"dafuer",position:"Starke Forderung nach Waffenruhe und humanitärer Hilfe."},{partei:"FPÖ",haltung:"abwartend",position:"Österreichische Interessen im Vordergrund, wenig Einmischung."},{partei:"Grüne",haltung:"dafuer",position:"Klare Forderung nach Waffenstillstand und Völkerrecht."},{partei:"NEOS",haltung:"gespalten",position:"Betont Israels Recht auf Selbstverteidigung, fordert Zivilschutz."}],
  fragen:["Wie weit soll Österreichs außenpolitisches Engagement gehen?","Welche wirtschaftlichen Folgen drohen bei weiterer Eskalation?","Wie balancieren Medien zwischen den Konfliktparteien?","Welche humanitären Verpflichtungen hat Österreich?","Wird über Ursachen oder nur Symptome berichtet?","Wie beeinflusst der Konflikt die innenpolitische Debatte?"]
},

/* -------------------------------------------------------
   5. Steigende Spritpreise
   ------------------------------------------------------- */
"spritpreise": {
  id: "spritpreise",
  title: "Steigende Spritpreise: Mögliche Maßnahmen der Regierung",
  summary: "Die Spritpreise in Österreich sind erneut gestiegen. Die Regierung diskutiert mögliche Entlastungsmaßnahmen für Pendler und Haushalte mit niedrigem Einkommen.",
  date: "Februar 2026",
  keywords: ["Spritpreise","Tanken","Pendler","Energie"],
  media: [
    { medium:"ORF", slug:"orf", url:"https://orf.at/#/stories/search/?q=Spritpreise+Österreich", headline:"Spritpreise auf Jahreshoch: Regierung prüft Entlastungsmaßnahmen", date:"27. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Die Bundesregierung hat Arbeitsgruppen eingesetzt um mögliche Entlastungen zu prüfen.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"Der Standard", slug:"standard", url:"https://www.derstandard.at/suche?q=Spritpreise", headline:"Hohe Spritpreise: Strukturelles Problem statt kurzfristiger Einmalzahlung", date:"26. Feb. 2026", focus:"Politischer Konflikt", stil:"erklärend", excerpt:"Ökonomen warnen: Einmalzahlungen lösen das strukturelle Problem nicht.", compass:{wirtschaft:"liberal", gesellschaft:"libertaer"} },
    { medium:"Die Presse", slug:"presse", url:"https://www.diepresse.com/suche?q=Spritpreise", headline:"Spritpreise: Marktversagen oder politisches Versagen?", date:"27. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Die Ursachen liegen in Steuerlast und Weltmarktpreisen. Eine differenzierte Analyse.", compass:{wirtschaft:"konservativ", gesellschaft:"mitte"} },
    { medium:"Kronen Zeitung", slug:"krone", url:"https://www.krone.at/suche?q=Spritpreise", headline:"Tanken wird zum Luxus! Österreicher leiden unter Rekordpreisen", date:"27. Feb. 2026", focus:"Bürgerbelastung", stil:"zugespitzt", excerpt:"Volle Tanks, leere Geldbörsen: Die Spritpreise explodieren und die Regierung schaut zu.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} },
    { medium:"Heute", slug:"heute", url:"https://www.heute.at/s/suche?q=Spritpreise", headline:"So viel zahlen Sie jetzt an der Zapfsäule", date:"27. Feb. 2026", focus:"Alltag", stil:"erklärend", excerpt:"Aktuelle Preise, Ursachen und was die Regierung tun könnte – wir erklären es.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"exxpress", slug:"exxpress", url:"https://exxpress.at/?s=Spritpreise", headline:"Spritpreise: Regierung soll Steuern senken statt zu jammern", date:"27. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"zugespitzt", excerpt:"Die Lösung ist einfach: Mineralölsteuer senken. Stattdessen werden Bürger mit Worthülsen abgespeist.", compass:{wirtschaft:"konservativ", gesellschaft:"libertaer"} }
  ],
  folgenBuerger:["Mehr Ausgaben für Mobilität","Pendler besonders betroffen","Lieferkosten steigen durch höhere Transportkosten","Alternativen wie ÖV werden attraktiver","Kaufkraft sinkt"],
  folgenUnternehmen:["Transportkosten steigen","Lieferketten werden teurer","Landwirtschaft besonders betroffen","Druck auf Preiserhöhungen bei Produkten","Nachfrage nach E-Fahrzeugen steigt"],
  zahlenFakten:[{wert:"1,65 €",label:"Durchschnittspreis Diesel (Feb. 2026)"},{wert:"1,72 €",label:"Durchschnittspreis Benzin Super (Feb. 2026)"},{wert:"80 %",label:"Anteil Steuern am Spritpreis"},{wert:"3 Mio.",label:"Pendler in Österreich"},{wert:"20 %",label:"Spritpreisanstieg seit Vorjahr"}],
  internationalerVergleich:["Deutschland: Ähnliche Preise, höhere Pendlerpauschale","Luxemburg: Deutlich günstigerer Sprit, starker Tanktourismus","Schweiz: Höhere Löhne relativieren Mehrbelastung","Ungarn: Staatlich gedeckelte Spritpreise (mit Problemen)","Frankreich: Zeitweise staatliche Subventionen"],
  zeitlicherHorizont:{kurzfristig:["Sofortige Belastung für Pendlerhaushalte","Regierung under Handlungsdruck"],mittelfristig:["Strukturelle Verlagerung zu ÖV und E-Mobilität","Mineralölsteuerreform möglich"],langfristig:["Langfristiger Rückgang fossiler Mobilität","Neue Mobilitätsmuster entstehen"]},
  politik:[{partei:"ÖVP",haltung:"abwartend",position:"Prüft Entlastungsmaßnahmen, lehnt dauerhafte Subventionen ab."},{partei:"SPÖ",haltung:"dafuer",position:"Fordert sofortige Steuersenkung und Pendlerhilfe."},{partei:"FPÖ",haltung:"dafuer",position:"Verlangt Mineralölsteuersenkung und Ende des CO2-Aufschlags."},{partei:"Grüne",haltung:"dagegen",position:"Lehnt Steuersenkungen ab, fordert ÖV-Ausbau."},{partei:"NEOS",haltung:"gespalten",position:"Strukturreform statt Einmalzahlungen."}],
  fragen:["Wäre eine Steuersenkung nachhaltig oder nur kurzfristig?","Welche Pendler sind am stärksten betroffen?","Wie hängen Weltmarktpreis und heimische Preise zusammen?","Werden Alternativen zur Steuersenkung diskutiert?","Wer profitiert von hohen Spritpreisen?","Ist eine dauerhafte Lösung möglich?"]
},

/* -------------------------------------------------------
   6. Energiepreise und Nahost-Konflikt
   ------------------------------------------------------- */
"energiepreise-nahost": {
  id: "energiepreise-nahost",
  title: "Energiepreise: Wirtschaftliche Folgen des Nahost-Konflikts",
  summary: "Der Nahost-Konflikt beeinflusst die globalen Energiemärkte. Österreichische Unternehmen und Haushalte beobachten die Entwicklungen mit Sorge.",
  date: "Februar 2026",
  keywords: ["Energiepreise","Nahost","Öl","Gas","Wirtschaft"],
  media: [
    { medium:"ORF", slug:"orf", url:"https://orf.at/#/stories/search/?q=Energiepreise+Nahost", headline:"Nahost-Konflikt treibt Ölpreis: Österreich bereitet sich vor", date:"25. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Der Ölpreis ist seit Konfliktbeginn um 15 % gestiegen. Die Energieagentur beobachtet die Lage.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"Der Standard", slug:"standard", url:"https://www.derstandard.at/suche?q=Energiepreise", headline:"Energiemarkt unter Druck: Was der Nahost-Krieg für Österreichs Haushalte bedeutet", date:"24. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"erklärend", excerpt:"Analysten warnen vor möglichen Preisspitzen, betonen aber Österreichs diversifizierte Versorgung.", compass:{wirtschaft:"liberal", gesellschaft:"libertaer"} },
    { medium:"Die Presse", slug:"presse", url:"https://www.diepresse.com/suche?q=Energiepreise+Nahost", headline:"Geopolitik und Energie: Österreichs Abhängigkeiten auf dem Prüfstand", date:"25. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Die Diversifizierung der Energieversorgung bleibt die wichtigste strategische Aufgabe.", compass:{wirtschaft:"konservativ", gesellschaft:"mitte"} },
    { medium:"Kronen Zeitung", slug:"krone", url:"https://www.krone.at/suche?q=Energiepreise", headline:"Nächste Energiekrise droht! Heizen wird wieder teurer", date:"25. Feb. 2026", focus:"Bürgerbelastung", stil:"zugespitzt", excerpt:"Nach der Gaskrise kommt die Ölkrise? Österreicher müssen sich auf höhere Heizkosten einstellen.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} },
    { medium:"Heute", slug:"heute", url:"https://www.heute.at/s/suche?q=Energiepreise", headline:"Energie teurer durch Nahost-Krise: Was Sie wissen müssen", date:"25. Feb. 2026", focus:"Alltag", stil:"erklärend", excerpt:"Wir erklären den Zusammenhang zwischen Nahost-Konflikt und Ihren Energiekosten.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"exxpress", slug:"exxpress", url:"https://exxpress.at/?s=Energiepreise", headline:"Energiepreise steigen: Regierung schläft während Bürger zahlen", date:"25. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"zugespitzt", excerpt:"Während der Nahost-Konflikt die Preise treibt, fehlt von der Regierung jede Krisenvorsorge.", compass:{wirtschaft:"konservativ", gesellschaft:"libertaer"} }
  ],
  folgenBuerger:["Heizkosten könnten steigen","Spritpreise reagieren sensibel","Energiereserven ausreichend für Winter","Sparappelle der Regierung möglich","Langfristig: Erneuerbare werden attraktiver"],
  folgenUnternehmen:["Energieintensive Betriebe unter Druck","Planungsunsicherheit steigt","Versorgungssicherheit bleibt gewährleistet","Absicherungsgeschäfte teurer","Wettbewerbsnachteile gegenüber Ländern mit günstigerer Energie"],
  zahlenFakten:[{wert:"+15 %",label:"Ölpreisanstieg seit Konfliktbeginn"},{wert:"90 %",label:"Österreichs Gasreserven im März 2026"},{wert:"30 %",label:"Österreichs Energiemix aus erneuerbaren Quellen"},{wert:"3 Monate",label:"Strategische Ölreserve Österreichs"},{wert:"40 %",label:"Gasanteil am österreichischen Energiemix"}],
  internationalerVergleich:["Norwegen: Energiexporteur, profitiert von hohen Preisen","Deutschland: Stark abhängig, intensive Diversifizierungsbemühungen","Frankreich: Nuklearenergie als Puffer","Ungarn: Stark von russischem Gas abhängig","Niederlande: LNG-Terminal als Alternative ausgebaut"],
  zeitlicherHorizont:{kurzfristig:["Preisschwankungen an den Märkten","Beobachtung der Versorgungslage"],mittelfristig:["Beschleunigung der Energiewende","Neue Lieferverträge werden geschlossen"],langfristig:["Langfristige Reduktion fossiler Abhängigkeiten","Geopolitische Neuausrichtung der Energieversorgung"]},
  politik:[{partei:"ÖVP",haltung:"abwartend",position:"Betont Versorgungssicherheit, will keine voreiligen Maßnahmen."},{partei:"SPÖ",haltung:"gespalten",position:"Fordert Preisregulierung und Schutz für einkommensschwache Haushalte."},{partei:"FPÖ",haltung:"dagegen",position:"Kritisiert Abhängigkeit, fordert Rückbesinnung auf eigene Ressourcen."},{partei:"Grüne",haltung:"dafuer",position:"Sieht Krise als Beschleuniger für Energiewende."},{partei:"NEOS",haltung:"gespalten",position:"Fordert marktkonforme Lösungen statt staatlicher Eingriffe."}],
  fragen:["Wie gut ist Österreich auf Energiekrisen vorbereitet?","Welche Abhängigkeiten bestehen noch?","Wird die Krise als Chance für die Energiewende gesehen?","Welche Maßnahmen schützen einkommensschwache Haushalte?","Wie unterscheidet sich die Berichterstattung von 2022?","Welche langfristigen Lehren zieht die Politik?"]
},

/* -------------------------------------------------------
   7. Neue Inflationszahlen
   ------------------------------------------------------- */
"inflation": {
  id: "inflation",
  title: "Neue Inflationszahlen für Österreich",
  summary: "Die aktuellen Inflationsdaten zeigen eine leichte Entspannung, aber die Kaufkraft vieler Haushalte bleibt unter Druck. Lebensmittel- und Wohnkosten bleiben erhöht.",
  date: "Februar 2026",
  keywords: ["Inflation","Kaufkraft","Preise","Wirtschaft"],
  media: [
    { medium:"ORF", slug:"orf", url:"https://orf.at/#/stories/search/?q=Inflation+Österreich", headline:"Inflation sinkt auf 3,2 Prozent – aber Kaufkraft bleibt unter Druck", date:"23. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Die Statistik Austria veröffentlichte die neuesten Daten. Lebensmittel und Wohnen bleiben teuer.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"Der Standard", slug:"standard", url:"https://www.derstandard.at/suche?q=Inflation", headline:"Inflation: Entspannung auf dem Papier, Druck im Alltag", date:"22. Feb. 2026", focus:"Bürgerbelastung", stil:"erklärend", excerpt:"Trotz sinkender Inflation bleiben die Preise auf hohem Niveau. Viele Haushalte spüren keine Erleichterung.", compass:{wirtschaft:"liberal", gesellschaft:"libertaer"} },
    { medium:"Die Presse", slug:"presse", url:"https://www.diepresse.com/suche?q=Inflation", headline:"Inflationsrückgang: Geldpolitik der EZB zeigt Wirkung", date:"23. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Die Zinspolitik der EZB beginnt zu greifen. Österreichs Wirtschaft stabilisiert sich.", compass:{wirtschaft:"konservativ", gesellschaft:"mitte"} },
    { medium:"Kronen Zeitung", slug:"krone", url:"https://www.krone.at/suche?q=Inflation", headline:"Inflation sinkt – aber im Supermarkt merkt man nichts davon!", date:"23. Feb. 2026", focus:"Bürgerbelastung", stil:"zugespitzt", excerpt:"Statistiker jubeln über sinkende Inflation. Doch an der Supermarktkassa ist davon nichts zu spüren.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} },
    { medium:"Heute", slug:"heute", url:"https://www.heute.at/s/suche?q=Inflation", headline:"Inflation geht zurück: Was das für Ihren Geldbeutel bedeutet", date:"23. Feb. 2026", focus:"Alltag", stil:"erklärend", excerpt:"Konkret: Wo werden Preise günstiger, wo bleiben sie hoch? Ein Überblick.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"exxpress", slug:"exxpress", url:"https://exxpress.at/?s=Inflation", headline:"Inflation: Regierung feiert – Bürger leiden weiter", date:"23. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"zugespitzt", excerpt:"Die Regierung nutzt die gesunkenen Zahlen für PR. Doch die reale Kaufkraftverluste seit 2021 sind massiv.", compass:{wirtschaft:"konservativ", gesellschaft:"libertaer"} }
  ],
  folgenBuerger:["Kaufkraft bleibt unter Vorkrisen-Niveau","Lebensmittelpreise noch immer erhöht","Wohnkosten weiter belastend","Lohnerhöhungen gleichen Verluste teilweise aus","Sparen wieder attraktiver durch höhere Zinsen"],
  folgenUnternehmen:["Lohnverhandlungen werden leichter","Investitionsklima verbessert sich","Rohstoffkosten stabilisieren sich","Konsumnachfrage erholt sich langsam","Exportwirtschaft profitiert von stabileren Preisen"],
  zahlenFakten:[{wert:"3,2 %",label:"Aktuelle Inflationsrate Österreich (Feb. 2026)"},{wert:"8,6 %",label:"Inflationsspitze 2022"},{wert:"-8 %",label:"Realer Kaufkraftverlust seit 2021"},{wert:"4,5 %",label:"EZB-Leitzins (März 2026)"},{wert:"2 %",label:"Inflationsziel der EZB"}],
  internationalerVergleich:["Deutschland: Inflation bei 2,8 % (Feb. 2026)","EU-Schnitt: 3,0 % (Feb. 2026)","Ungarn: Noch immer über 5 %","Schweiz: Nur 1,5 % Inflation","USA: 3,4 % (Feb. 2026)"],
  zeitlicherHorizont:{kurzfristig:["Preise bleiben auf hohem Niveau","Lohnerhöhungen 2025 in Verhandlung"],mittelfristig:["Schrittweise Normalisierung erwartet","EZB könnte Zinsen senken"],langfristig:["Strukturelle Inflationsquellen bleiben (Wohnen, Energie)","Kaufkraft erholt sich langsam"]},
  politik:[{partei:"ÖVP",haltung:"dafuer",position:"Betont Erfolg der Stabilitätspolitik, kündigt weitere Entlastungen an."},{partei:"SPÖ",haltung:"dagegen",position:"Kritisiert anhaltend hohe Preise, fordert Preisregulierung."},{partei:"FPÖ",haltung:"dagegen",position:"Verweist auf realen Kaufkraftverlust, kritisiert Regierung."},{partei:"Grüne",haltung:"gespalten",position:"Befürwortet EZB-Kurs, fordert mehr soziale Abfederung."},{partei:"NEOS",haltung:"dafuer",position:"Lobt Geldpolitik, warnt vor staatsinterventionistischen Reflexen."}],
  fragen:["Warum spüren Haushalte die sinkende Inflation kaum?","Welche Produktgruppen bleiben teuer?","Sind die Lohnerhöhungen ausreichend?","Welche Rolle spielt die EZB-Politik?","Wird über strukturelle Ursachen oder nur Symptome berichtet?","Wer profitiert von höherer Inflation?"]
},

/* -------------------------------------------------------
   8. Internationaler Frauentag
   ------------------------------------------------------- */
"frauentag": {
  id: "frauentag",
  title: "Internationaler Frauentag: Gleichstellung in Österreich",
  summary: "Der Internationale Frauentag am 8. März rückt die Lage von Frauen in Österreich in den Fokus. Lohnungleichheit, Teilzeitarbeit und Gewalt gegen Frauen sind zentrale Themen.",
  date: "März 2026",
  keywords: ["Frauentag","Gleichstellung","Lohnschere","Frauenrechte"],
  media: [
    { medium:"ORF", slug:"orf", url:"https://orf.at/#/stories/search/?q=Frauentag+Österreich", headline:"Frauentag 2025: Österreich bei Lohngleichheit noch weit hinten", date:"8. März 2026", focus:"Gesellschaft", stil:"sachlich", excerpt:"Österreich liegt beim Gender Pay Gap im EU-Vergleich auf einem der letzten Plätze.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"Der Standard", slug:"standard", url:"https://www.derstandard.at/suche?q=Frauentag", headline:"Frauentag: Warum Gleichstellung in Österreich so langsam vorankommt", date:"8. März 2026", focus:"Gesellschaft", stil:"erklärend", excerpt:"Strukturelle Barrieren, Teilzeitfalle und ungleiche Care-Arbeit bremsen den Fortschritt.", compass:{wirtschaft:"liberal", gesellschaft:"libertaer"} },
    { medium:"Die Presse", slug:"presse", url:"https://www.diepresse.com/suche?q=Frauentag", headline:"Frauentag: Eigenverantwortung statt Quoten", date:"8. März 2026", focus:"Gesellschaft", stil:"sachlich", excerpt:"Nicht alle Lohnunterschiede sind diskriminierend – eine differenzierte Betrachtung der Zahlen.", compass:{wirtschaft:"konservativ", gesellschaft:"mitte"} },
    { medium:"Kronen Zeitung", slug:"krone", url:"https://www.krone.at/suche?q=Frauentag", headline:"Frauentag: Österreichs Frauen kämpfen – gegen Gewalt und unfaire Löhne", date:"8. März 2026", focus:"Gesellschaft", stil:"zugespitzt", excerpt:"Jeden dritten Tag wird in Österreich eine Frau von ihrem Partner getötet. Das muss sich ändern!", compass:{wirtschaft:"mitte", gesellschaft:"autoritaer"} },
    { medium:"Heute", slug:"heute", url:"https://www.heute.at/s/suche?q=Frauentag", headline:"Frauentag: Diese Rechte haben Frauen in Österreich noch nicht", date:"8. März 2026", focus:"Gesellschaft", stil:"erklärend", excerpt:"Von der Lohnschere bis zur Pensionslücke: Was Frauen in Österreich noch immer benachteiligt.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"exxpress", slug:"exxpress", url:"https://exxpress.at/?s=Frauentag", headline:"Frauentag: Quotenpolitik schadet Wirtschaft und Frauen gleichermaßen", date:"8. März 2026", focus:"Gesellschaft", stil:"zugespitzt", excerpt:"Zwangsquoten in Aufsichtsräten sind kontraproduktiv. Leistung statt Geschlecht soll entscheiden.", compass:{wirtschaft:"konservativ", gesellschaft:"libertaer"} }
  ],
  folgenBuerger:["Frauen verdienen im Schnitt 18 % weniger","Pensionslücke bleibt erheblich","Gewalt gegen Frauen weiter Problem","Teilzeitfalle durch Care-Arbeit","Kinderbetreuungsangebot entscheidend"],
  folgenUnternehmen:["Frauenquoten in Aufsichtsräten verpflichtend","Lohngleichheits-Reporting wird ausgeweitet","Fachkräftemangel durch Teilzeitfalle","Flexible Arbeitsmodelle gewinnen an Bedeutung","Equal Pay als Wettbewerbsvorteil"],
  zahlenFakten:[{wert:"18 %",label:"Gender Pay Gap in Österreich"},{wert:"48 %",label:"Frauen in Österreich die Teilzeit arbeiten"},{wert:"1.750 €",label:"Durchschnittliche Frauenpension (brutto)"},{wert:"35 %",label:"Frauen in österreichischen Aufsichtsräten"},{wert:"2040",label:"Prognostiziertes Jahr der vollständigen Lohngleichheit"}],
  internationalerVergleich:["Island: Lohngleichheitsgesetz seit 2018","Schweden: Höchste Frauenerwerbsquote Europas","Deutschland: Gender Pay Gap 18 % (ähnlich Österreich)","Rumänien: Niedrigster Gender Pay Gap der EU","Japan: Frauen nur 22 % der Führungspositionen"],
  zeitlicherHorizont:{kurzfristig:["Demonstrationen und politische Debatten","Neue Berichtspflichten für Unternehmen"],mittelfristig:["Ausbau der Kinderbetreuung geplant","Lohngleichheitsgesetze werden verschärft"],langfristig:["Strukturelle Gleichstellung dauert Jahrzehnte","Kulturwandel in Betrieben nötig"]},
  politik:[{partei:"ÖVP",haltung:"gespalten",position:"Unterstützt Gleichstellung, lehnt Pflichtquoten ab."},{partei:"SPÖ",haltung:"dafuer",position:"Fordert verpflichtende Lohntransparenz und Ausbau der Kinderbetreuung."},{partei:"FPÖ",haltung:"dagegen",position:"Betont traditionelle Familienmodelle, kritisiert Genderideologie."},{partei:"Grüne",haltung:"dafuer",position:"Setzt sich für umfassende Gleichstellungsmaßnahmen ein."},{partei:"NEOS",haltung:"gespalten",position:"Befürwortet Gleichstellung durch Marktmechanismen, nicht Quoten."}],
  fragen:["Warum hat Österreich einen so hohen Gender Pay Gap?","Welche Maßnahmen wären am wirksamsten?","Wie unterschiedlich berichten Medien über Frauenrechte?","Wird Gewalt gegen Frauen ausreichend thematisiert?","Welche Rolle spielt Kinderbetreuung bei der Gleichstellung?","Wer profitiert von der aktuellen Situation?"]
},

/* -------------------------------------------------------
   9. Klimawandel: Gletscher
   ------------------------------------------------------- */
"gletscher": {
  id: "gletscher",
  title: "Klimawandel: Rückgang der österreichischen Gletscher",
  summary: "Österreichs Gletscher schmelzen in einem alarmierenden Tempo. Wissenschaftler warnen vor weitreichenden Folgen für Wasserversorgung, Tourismus und Ökosysteme.",
  date: "Februar 2026",
  keywords: ["Gletscher","Klimawandel","Alpen","Tourismus"],
  media: [
    { medium:"ORF", slug:"orf", url:"https://orf.at/#/stories/search/?q=Gletscher+Österreich", headline:"Österreichs Gletscher: Noch zehn Jahre bis zum Verschwinden?", date:"20. Feb. 2026", focus:"Umwelt", stil:"sachlich", excerpt:"Neue Messdaten zeigen: Die Gletscher schrumpfen schneller als prognostiziert.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"Der Standard", slug:"standard", url:"https://www.derstandard.at/suche?q=Gletscher", headline:"Gletscherschwund: Wissenschaft warnt, Politik zögert", date:"19. Feb. 2026", focus:"Politischer Konflikt", stil:"erklärend", excerpt:"Klimaforscher fordern dringliche Maßnahmen. Die Politik diskutiert, während die Eis schmilzt.", compass:{wirtschaft:"liberal", gesellschaft:"libertaer"} },
    { medium:"Die Presse", slug:"presse", url:"https://www.diepresse.com/suche?q=Gletscher", headline:"Gletscherverlust: Wirtschaftliche Folgen für Alpintourismus", date:"20. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Der Tourismus in alpinen Regionen steht vor einem Strukturwandel. Anpassung ist nötig.", compass:{wirtschaft:"konservativ", gesellschaft:"mitte"} },
    { medium:"Kronen Zeitung", slug:"krone", url:"https://www.krone.at/suche?q=Gletscher", headline:"Unsere Gletscher sterben! Was wir verlieren und was das kostet", date:"20. Feb. 2026", focus:"Gesellschaft", stil:"zugespitzt", excerpt:"Ein Stück österreichischer Heimat verschwindet für immer. Die emotionale und wirtschaftliche Bilanz.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} },
    { medium:"Heute", slug:"heute", url:"https://www.heute.at/s/suche?q=Gletscher", headline:"Gletscherschwund: Was das für Ihren Skiurlaub bedeutet", date:"20. Feb. 2026", focus:"Alltag", stil:"erklärend", excerpt:"Konkret: Welche Skigebiete sind betroffen? Was ändert sich für Touristen?", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"exxpress", slug:"exxpress", url:"https://exxpress.at/?s=Gletscher", headline:"Gletscherpanik: Klimahysteriker übertreiben – Alpen bleiben attraktiv", date:"20. Feb. 2026", focus:"Politischer Konflikt", stil:"zugespitzt", excerpt:"Die Alarmstimmung wird von Klimaaktivisten geschürt. Eine nüchterne Betrachtung der Fakten.", compass:{wirtschaft:"konservativ", gesellschaft:"libertaer"} }
  ],
  folgenBuerger:["Skigebiete könnten schließen","Trinkwasserversorgung langfristig betroffen","Wandertourismus verändert sich","Naturkatastrophenrisiken steigen","Heimatgefühl und Kulturverlust"],
  folgenUnternehmen:["Tourismuswirtschaft im Strukturwandel","Skigebietsbetreiber investieren in Alternativen","Landwirtschaft: Bewässerungsprobleme","Wasserkraft: Veränderungen möglich","Neue Chancen für Sommertourismus"],
  zahlenFakten:[{wert:"-60 %",label:"Gletscherfläche in Österreich seit 1850"},{wert:"900",label:"Gletscher in Österreich 1850, heute noch ~200"},{wert:"3 °C",label:"Temperaturanstieg in den Alpen seit 1900"},{wert:"2050",label:"Prognose: 80 % der Gletscher verschwunden"},{wert:"1 Mrd. €",label:"Jährlicher Beitrag des Wintertourismus"}],
  internationalerVergleich:["Schweiz: Gletscher schrumpfen 3x schneller als Weltdurchschnitt","Frankreich: Mont Blanc verliert jährlich an Höhe","Island: Erster Gletscher bereits 2019 'begraben'","Himalaya: Wasserversorgung für Milliarden bedroht","Grönland: Meeresspiegelanstieg von 7m möglich wenn alles schmilzt"],
  zeitlicherHorizont:{kurzfristig:["Skigebiete kämpfen um Schneesicherheit","Tourismuswirtschaft sucht Alternativen"],mittelfristig:["Strukturwandel in Almregionen","Neue Sommerangebote entstehen"],langfristig:["Großteile der Gletscher verschwunden","Wasserversorgung neu organisiert"]},
  politik:[{partei:"ÖVP",haltung:"gespalten",position:"Bekenntnis zum Klimaschutz, aber Schutz der Wirtschaft prioritär."},{partei:"SPÖ",haltung:"dafuer",position:"Fordert ambitioniertere Klimamaßnahmen und Unterstützung betroffener Regionen."},{partei:"FPÖ",haltung:"dagegen",position:"Relativiert Klimaforschung, kritisiert wirtschaftliche Folgen des Klimaschutzes."},{partei:"Grüne",haltung:"dafuer",position:"Sieht Gletscherschwund als dringendstes Warnsignal."},{partei:"NEOS",haltung:"dafuer",position:"Befürwortet marktkonforme Klimaschutzmaßnahmen."}],
  fragen:["Wann werden österreichische Gletscher verschwunden sein?","Welche wirtschaftlichen Alternativen gibt es für betroffene Regionen?","Wie unterschiedlich gewichten Medien wirtschaftliche vs. ökologische Folgen?","Welche politischen Maßnahmen werden diskutiert?","Wer trägt die Kosten des Strukturwandels?","Werden Verantwortliche benannt?"]
},

/* -------------------------------------------------------
   10. Sicherheitspolitik und Terrorwarnstufe
   ------------------------------------------------------- */
"sicherheitspolitik": {
  id: "sicherheitspolitik",
  title: "Sicherheitspolitik: Terrorwarnstufe in Österreich erhöht",
  summary: "Österreich hat die Terrorwarnstufe angehoben. Sicherheitsbehörden reagieren auf veränderte Bedrohungslagen. Die Debatte über Balance zwischen Sicherheit und Freiheit ist neu entfacht.",
  date: "Februar 2026",
  keywords: ["Sicherheit","Terror","Polizei","Überwachung"],
  media: [
    { medium:"ORF", slug:"orf", url:"https://orf.at/#/stories/search/?q=Terrorwarnstufe+Österreich", headline:"Österreich erhöht Terrorwarnstufe: Behörden erhöhen Schutzmaßnahmen", date:"18. Feb. 2026", focus:"Sicherheit", stil:"sachlich", excerpt:"Innenminister erklärt Erhöhung der Warnstufe. Konkrete Bedrohungen wurden nicht genannt.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"Der Standard", slug:"standard", url:"https://www.derstandard.at/suche?q=Terrorwarnstufe", headline:"Terrorwarnung: Überwachung vs. Bürgerrechte – eine Abwägung", date:"17. Feb. 2026", focus:"Gesellschaft", stil:"erklärend", excerpt:"Sicherheitsmaßnahmen sind nötig, dürfen aber Grundrechte nicht aushöhlen.", compass:{wirtschaft:"liberal", gesellschaft:"libertaer"} },
    { medium:"Die Presse", slug:"presse", url:"https://www.diepresse.com/suche?q=Terrorwarnstufe", headline:"Terrorbedrohung: Österreich braucht mehr Mittel für Sicherheitsbehörden", date:"18. Feb. 2026", focus:"Sicherheit", stil:"sachlich", excerpt:"Polizei und Verfassungsschutz brauchen mehr Ressourcen für neue Herausforderungen.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} },
    { medium:"Kronen Zeitung", slug:"krone", url:"https://www.krone.at/suche?q=Terrorwarnstufe", headline:"Terror-Alarm in Österreich: So schützen Sie sich und Ihre Familie", date:"18. Feb. 2026", focus:"Bürgerbelastung", stil:"zugespitzt", excerpt:"Was bedeutet die höhere Warnstufe für den Alltag? Tipps für mehr persönliche Sicherheit.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} },
    { medium:"Heute", slug:"heute", url:"https://www.heute.at/s/suche?q=Terrorwarnstufe", headline:"Terrorwarnung: Müssen wir uns Sorgen machen?", date:"18. Feb. 2026", focus:"Alltag", stil:"erklärend", excerpt:"Was die erhöhte Warnstufe bedeutet und was Behörden empfehlen.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"exxpress", slug:"exxpress", url:"https://exxpress.at/?s=Terrorwarnstufe", headline:"Terrorwarnstufe erhöht: Regierung muss endlich handeln statt warnen", date:"18. Feb. 2026", focus:"Sicherheit", stil:"zugespitzt", excerpt:"Warnungen allein reichen nicht. Österreich braucht härtere Einwanderungskontrollen.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} }
  ],
  folgenBuerger:["Erhöhte Polizeipräsenz an öffentlichen Plätzen","Veranstaltungen mit mehr Sicherheitskontrollen","Verunsicherung in der Bevölkerung","Reisewarnungen beachten","Notfallnummern griffbereit haben"],
  folgenUnternehmen:["Sicherheitskosten für Veranstaltungen steigen","Tourismus könnte betroffen sein","Versicherungskosten steigen","Investitionen in Sicherheitstechnik","Reisebeschränkungen für Mitarbeiter"],
  zahlenFakten:[{wert:"4 von 5",label:"Warnstufe (5 = höchste in Österreich)"},{wert:"3.000",label:"Polizisten zusätzlich im Einsatz"},{wert:"2016",label:"Letztes Mal Warnstufe auf diesem Niveau"},{wert:"500",label:"Beobachtete Personen mit Extremismusverdacht"},{wert:"70 %",label:"Österreicher befürworten mehr Videoüberwachung"}],
  internationalerVergleich:["Frankreich: Seit 2015 im permanenten Anti-Terror-Einsatz","Deutschland: Bundesweites Sicherheitssystem nach 2016","UK: 5-stufiges Warnsystem seit 2006","USA: Farbsystem (seit 2011 ersetzt durch NTAS)","Israel: Ständige hohe Sicherheitspräsenz als Normalzustand"],
  zeitlicherHorizont:{kurzfristig:["Erhöhte Sicherheitsmaßnahmen sofort","Bevölkerung sensibilisiert"],mittelfristig:["Neue Sicherheitsgesetze möglich","Investitionen in Überwachungstechnik"],langfristig:["Langfristige Herausforderung durch Radikalisierung","Balance Sicherheit vs. Freiheit bleibt Thema"]},
  politik:[{partei:"ÖVP",haltung:"dafuer",position:"Unterstützt alle notwendigen Sicherheitsmaßnahmen."},{partei:"SPÖ",haltung:"gespalten",position:"Unterstützt Sicherheit, warnt vor Einschränkung von Bürgerrechten."},{partei:"FPÖ",haltung:"dafuer",position:"Fordert härtere Gangart, stärkere Grenzkontrollen."},{partei:"Grüne",haltung:"gespalten",position:"Betont Verhältnismäßigkeit und Grundrechtsschutz."},{partei:"NEOS",haltung:"gespalten",position:"Sicherheit ja, aber mit rechtsstaatlichen Mitteln."}],
  fragen:["Wie konkret ist die Bedrohungslage wirklich?","Welche Maßnahmen sind verhältnismäßig?","Werden Grundrechte ausreichend geschützt?","Wie unterscheidet sich die mediale Reaktion von früheren Warnungen?","Wer profitiert von Sicherheitsdebatten politisch?","Wird über Ursachen von Radikalisierung berichtet?"]
},

/* -------------------------------------------------------
   11. Pensionsreform
   ------------------------------------------------------- */
"pensionsreform": {
  id: "pensionsreform",
  title: "Pensionsreform: Österreichs Rentensystem unter Druck",
  summary: "Das österreichische Pensionssystem gerät durch demografischen Wandel unter Druck. Die Regierung diskutiert Reformen, die gesellschaftlich stark umstritten sind.",
  date: "März 2026",
  keywords: ["Pension","Rente","Reform","Demographie"],
  media: [
    { medium:"ORF", slug:"orf", url:"https://orf.at/#/stories/search/?q=Pensionsreform+Österreich", headline:"Pensionsreform: Regierung plant schrittweise Anpassungen", date:"15. Feb. 2026", focus:"Gesellschaft", stil:"sachlich", excerpt:"Das Sozialministerium präsentierte Eckpunkte einer möglichen Reform. Details noch offen.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"Der Standard", slug:"standard", url:"https://www.derstandard.at/suche?q=Pensionsreform", headline:"Pensionssystem: Wer zahlt für die alternde Gesellschaft?", date:"14. Feb. 2026", focus:"Gesellschaft", stil:"erklärend", excerpt:"Demografischer Wandel stellt das Umlageverfahren vor Herausforderungen. Eine Analyse.", compass:{wirtschaft:"liberal", gesellschaft:"libertaer"} },
    { medium:"Die Presse", slug:"presse", url:"https://www.diepresse.com/suche?q=Pensionsreform", headline:"Pensionsreform: Nur höheres Antrittsalter hilft langfristig", date:"15. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Ökonomen sind sich einig: Ohne Anpassung des Antrittsalters ist das System nicht finanzierbar.", compass:{wirtschaft:"konservativ", gesellschaft:"mitte"} },
    { medium:"Kronen Zeitung", slug:"krone", url:"https://www.krone.at/suche?q=Pensionsreform", headline:"Hände weg von unseren Pensionen! Reform bedroht Lebensstandard", date:"15. Feb. 2026", focus:"Bürgerbelastung", stil:"zugespitzt", excerpt:"Wieder sollen die Kleinen zahlen. Kürzungen bei Pensionen treffen Normalverdiener am härtesten.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} },
    { medium:"Heute", slug:"heute", url:"https://www.heute.at/s/suche?q=Pensionsreform", headline:"Pensionsreform: Was sich für Sie ändert", date:"15. Feb. 2026", focus:"Alltag", stil:"erklärend", excerpt:"Wann können Sie in Pension? Was ändert sich? Die wichtigsten Fragen beantwortet.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"exxpress", slug:"exxpress", url:"https://exxpress.at/?s=Pensionsreform", headline:"Pensionssystem: Kapitalgedeckte Säule längst überfällig", date:"15. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"zugespitzt", excerpt:"Das Umlageverfahren ist ein Auslaufmodell. Österreich braucht dringend kapitalgedeckte Pensionen.", compass:{wirtschaft:"konservativ", gesellschaft:"libertaer"} }
  ],
  folgenBuerger:["Möglicherweise höheres Pensionsantrittsalter","Pensionshöhe könnte sinken","Private Vorsorge wird wichtiger","Jüngere Generationen zahlen mehr","Frauen besonders von Pensionslücke betroffen"],
  folgenUnternehmen:["Pensionskassenbeiträge könnten steigen","Ältere Arbeitnehmer länger im Betrieb","HR-Herausforderungen durch älter werdende Belegschaft","Betriebliche Vorsorgemodelle gewinnen an Bedeutung","Fachkräftemangel durch Pensionierungen"],
  zahlenFakten:[{wert:"64,8",label:"Durchschnittliches Pensionsantrittsalter Männer"},{wert:"61,2",label:"Durchschnittliches Pensionsantrittsalter Frauen"},{wert:"22 %",label:"Anteil der Pensionsausgaben am BIP"},{wert:"2050",label:"Prognose: Fast jeder 3. Österreicher pensioniert"},{wert:"1.500 €",label:"Durchschnittliche Bruttopension"}],
  internationalerVergleich:["Schweden: Flexible Pensionsmodelle mit Kapitaldeckung","Deutschland: Schrittweise Anhebung auf 67 Jahre","Frankreich: Umstrittene Reform auf 64 Jahre","Niederlande: Stark kapitalgedecktes System","Japan: Höchstes Renteneintrittsalter weltweit (68)"],
  zeitlicherHorizont:{kurzfristig:["Politische Debatte und Verhandlungen","Keine sofortigen Änderungen geplant"],mittelfristig:["Schrittweise Anhebung des Antrittsalters möglich","Private Vorsorge wird steuerlich gefördert"],langfristig:["Systemische Reform unausweichlich","Generationenvertrag neu verhandeln"]},
  politik:[{partei:"ÖVP",haltung:"gespalten",position:"Betont Nachhaltigkeit, will aber keine radikalen Einschnitte."},{partei:"SPÖ",haltung:"dagegen",position:"Lehnt Anhebung des Antrittsalters ab, fordert höhere Arbeitgeberbeiträge."},{partei:"FPÖ",haltung:"dagegen",position:"Verspricht keine Pensionskürzungen, kritisiert Reform."},{partei:"Grüne",haltung:"gespalten",position:"Befürwortet Systemreform, aber sozial gerecht."},{partei:"NEOS",haltung:"dafuer",position:"Fordert kapitalgedeckte Säule und höheres Antrittsalter."}],
  fragen:["Ist das Pensionssystem wirklich nicht finanzierbar?","Welche Generationen tragen die Last?","Warum ist das Antrittsalter so niedrig im Vergleich?","Werden Frauen bei der Reform besonders berücksichtigt?","Wer profitiert vom bestehenden System?","Wird die Debatte faktenbasiert oder emotional geführt?"]
},

/* -------------------------------------------------------
   12. Wohnkosten und Mietpreise
   ------------------------------------------------------- */
"wohnkosten": {
  id: "wohnkosten",
  title: "Wohnkostenexplosion: Mietpreise und Wohnbau in Österreich",
  summary: "Mieten in österreichischen Städten erreichen Rekordniveaus. Die Debatte über Mietpreisbremsen, sozialen Wohnbau und Bodenspekulation ist in vollem Gange.",
  date: "Februar 2026",
  keywords: ["Miete","Wohnen","Mietpreisbremse","Wohnbau"],
  media: [
    { medium:"ORF", slug:"orf", url:"https://orf.at/#/stories/search/?q=Mietpreise+Österreich", headline:"Wohnkosten: Wien nähert sich europäischen Großstadtpreisen", date:"13. Feb. 2026", focus:"Gesellschaft", stil:"sachlich", excerpt:"Neue Daten zeigen: Mieten in Wien sind seit 2020 um 35 % gestiegen.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"Der Standard", slug:"standard", url:"https://www.derstandard.at/suche?q=Mietpreise", headline:"Mietpreise: Wohnraumspekulation als systemisches Problem", date:"12. Feb. 2026", focus:"Gesellschaft", stil:"erklärend", excerpt:"Institutionelle Investoren verdrängen Mieter. Eine Analyse der Ursachen.", compass:{wirtschaft:"liberal", gesellschaft:"libertaer"} },
    { medium:"Die Presse", slug:"presse", url:"https://www.diepresse.com/suche?q=Mietpreise", headline:"Mietpreisbremse: Gut gemeint, schlecht gemacht", date:"13. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Preisregulierungen reduzieren das Angebot langfristig. Mehr Neubau wäre die bessere Lösung.", compass:{wirtschaft:"konservativ", gesellschaft:"mitte"} },
    { medium:"Kronen Zeitung", slug:"krone", url:"https://www.krone.at/suche?q=Mietpreise", headline:"Wohnen wird zum Luxus! Österreicher können sich kein Dach mehr leisten", date:"13. Feb. 2026", focus:"Bürgerbelastung", stil:"zugespitzt", excerpt:"Wer kein Erbe hat, hat keine Chance auf Wohneigentum. Eine Generation wird ausgesperrt.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} },
    { medium:"Heute", slug:"heute", url:"https://www.heute.at/s/suche?q=Mietpreise", headline:"Wohnkosten: So viel zahlen Sie jetzt in Österreich", date:"13. Feb. 2026", focus:"Alltag", stil:"erklärend", excerpt:"Aktuelle Mietpreise in Wien, Graz und Salzburg im Vergleich. Was ist noch leistbar?", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"exxpress", slug:"exxpress", url:"https://exxpress.at/?s=Mietpreise", headline:"Mietpreisbremse: Sozialismusideen lösen keine Wohnkrise", date:"13. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"zugespitzt", excerpt:"Regulierung ist keine Lösung. Österreich braucht Deregulierung im Baurecht.", compass:{wirtschaft:"konservativ", gesellschaft:"libertaer"} }
  ],
  folgenBuerger:["Wohnen frisst immer größeren Teil des Einkommens","Junge Menschen können nicht ausziehen","Eigentumserwerb für Durchschnittsverdienende kaum möglich","Umzug in günstigere Regionen als Alternative","Obdachlosigkeit als äußerste Folge"],
  folgenUnternehmen:["Fachkräftegewinnung wegen hoher Wohnkosten schwierig","Baubranche unter Druck durch hohe Zinsen","Immobilieninvestoren unter politischem Druck","Coworking als Alternative zum teuren Büro","Betriebliche Wohnbeihilfen als Vorteil"],
  zahlenFakten:[{wert:"+35 %",label:"Mietpreisanstieg Wien seit 2020"},{wert:"40 %",label:"Anteil Wohnkosten am Einkommen (Österreich-Schnitt)"},{wert:"1,2 Mio.",label:"Sozialwohnungen in Österreich"},{wert:"3.500 €",label:"Durchschnittlicher Quadratmeterpreis Wien Kauf"},{wert:"16 €",label:"Durchschnittliche Nettomiete/m² Wien"}],
  internationalerVergleich:["Wien: Trotz Steigerung noch günstiger als Zürich/London","Berlin: Mietpreisdeckel 2021 vom Gericht aufgehoben","Amsterdam: Strengste Mietregulierung Europas","Singapur: 80 % der Bevölkerung in staatlichem Wohnbau","USA: Keine bundesweite Mietregulierung"],
  zeitlicherHorizont:{kurzfristig:["Mietpreise steigen weiter","Politischer Druck auf Regierung wächst"],mittelfristig:["Neue Wohnbauförderungen geplant","Mietpreisregulierungen werden diskutiert"],langfristig:["Strukturelle Reform des Wohnungsmarkts nötig","Klimaanforderungen verteuern Sanierungen"]},
  politik:[{partei:"ÖVP",haltung:"gespalten",position:"Setzt auf Neubauförderung, lehnt Mietpreisbremse ab."},{partei:"SPÖ",haltung:"dafuer",position:"Fordert umfassende Mietpreisbremse und Ausbau des sozialen Wohnbaus."},{partei:"FPÖ",haltung:"gespalten",position:"Kritisiert hohe Mieten, macht Einwanderung mitverantwortlich."},{partei:"Grüne",haltung:"dafuer",position:"Fordert Leerstandsabgabe und stärkere Regulierung."},{partei:"NEOS",haltung:"dagegen",position:"Will Bauregulierungen lockern, um mehr Angebot zu schaffen."}],
  fragen:["Wäre eine Mietpreisbremse wirklich wirksam?","Wer profitiert vom derzeitigen System?","Wie unterscheiden sich Berichte über Ursachen?","Welche Rolle spielt Spekulation wirklich?","Wird soziales Wohnen ausreichend thematisiert?","Wer kann sich Wien noch leisten?"]
},

/* -------------------------------------------------------
   13. Bildungsreform
   ------------------------------------------------------- */
"bildung": {
  id: "bildung",
  title: "Bildungsreform: Österreichs Schulsystem im Wandel",
  summary: "Das österreichische Bildungssystem steht vor großen Herausforderungen. PISA-Ergebnisse, Lehrermangel und die Debatte über Gesamtschule beschäftigen Politik und Gesellschaft.",
  date: "Februar 2026",
  keywords: ["Bildung","Schule","PISA","Lehrermangel","Reform"],
  media: [
    { medium:"ORF", slug:"orf", url:"https://orf.at/#/stories/search/?q=Bildungsreform+Österreich", headline:"PISA 2025: Österreich stagniert – Handlungsbedarf erkannt", date:"11. Feb. 2026", focus:"Gesellschaft", stil:"sachlich", excerpt:"Die neue PISA-Studie zeigt: Österreichs Schüler liegen im Mittelfeld, Verbesserungen ausgeblieben.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"Der Standard", slug:"standard", url:"https://www.derstandard.at/suche?q=Bildungsreform", headline:"Bildungssystem: Soziale Herkunft bestimmt noch immer den Erfolg", date:"10. Feb. 2026", focus:"Gesellschaft", stil:"erklärend", excerpt:"PISA bestätigt: Chancengerechtigkeit ist in Österreich nicht verwirklicht.", compass:{wirtschaft:"liberal", gesellschaft:"libertaer"} },
    { medium:"Die Presse", slug:"presse", url:"https://www.diepresse.com/suche?q=Bildungsreform", headline:"Bildung: Leistungsprinzip statt Gesamtschule", date:"11. Feb. 2026", focus:"Gesellschaft", stil:"sachlich", excerpt:"Nicht das System, sondern die Qualität des Unterrichts ist entscheidend. Lehrerausbildung verbessern.", compass:{wirtschaft:"konservativ", gesellschaft:"mitte"} },
    { medium:"Kronen Zeitung", slug:"krone", url:"https://www.krone.at/suche?q=Bildungsreform", headline:"Unsere Kinder lernen zu wenig! Bildungssystem versagt", date:"11. Feb. 2026", focus:"Gesellschaft", stil:"zugespitzt", excerpt:"PISA-Schock: Österreichs Schüler können immer schlechter lesen und rechnen.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} },
    { medium:"Heute", slug:"heute", url:"https://www.heute.at/s/suche?q=Bildungsreform", headline:"PISA-Ergebnisse: Was bedeutet das für die Zukunft Ihrer Kinder?", date:"11. Feb. 2026", focus:"Alltag", stil:"erklärend", excerpt:"Konkret: Was die PISA-Ergebnisse für österreichische Schüler bedeuten.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"exxpress", slug:"exxpress", url:"https://exxpress.at/?s=Bildungsreform", headline:"Bildungsversagen: Ideologie statt Leistung im Klassenzimmer", date:"11. Feb. 2026", focus:"Gesellschaft", stil:"zugespitzt", excerpt:"Das Bildungssystem wird von linker Ideologie unterwandert. Zurück zu Leistung und Disziplin.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} }
  ],
  folgenBuerger:["Chancen von Kindern hängen von Herkunft ab","Lehrermangel gefährdet Qualität","Digitalisierung schafft neue Anforderungen","Berufsausbildung vs. akademischer Weg","Nachhilfe wird immer teurer"],
  folgenUnternehmen:["Fachkräftemangel durch Bildungslücken","Unternehmen investieren in eigene Ausbildung","Digitale Kompetenz der Absolventen entscheidend","Duale Ausbildung weiter gefragt","Internationale Attraktivität des Standorts"],
  zahlenFakten:[{wert:"492",label:"Österreichs PISA-Punktzahl Lesen (OECD-Schnitt 476)"},{wert:"35 %",label:"Lehrermangel bis 2030 prognostiziert"},{wert:"8.000 €",label:"Ausgaben pro Schüler pro Jahr"},{wert:"30 %",label:"Schüler mit Migrationshintergrund in Wien"},{wert:"15 %",label:"Schulabbrecher in Österreich"}],
  internationalerVergleich:["Finnland: Weltbestes Bildungssystem, Gesamtschule","Singapur: PISA-Spitzenreiter durch Leistungsorientierung","Deutschland: Ähnliche Probleme, ähnliche Debatten","Estland: Digitale Bildung als Erfolgsmodell","Japan: Stark leistungsorientiert, hoher Druck auf Schüler"],
  zeitlicherHorizont:{kurzfristig:["Notfallmaßnahmen gegen Lehrermangel","Nachhilfe und Fördermaßnahmen ausgebaut"],mittelfristig:["Neue Lehrpläne und Ausbildungsstandards","Digitalisierung der Schulen"],langfristig:["Generationenübergreifende Bildungsreform","Gesamtschuldebatte bleibt aktuell"]},
  politik:[{partei:"ÖVP",haltung:"gespalten",position:"Lehnt Gesamtschule ab, will Leistung stärken."},{partei:"SPÖ",haltung:"dafuer",position:"Fordert Gesamtschule und mehr Ressourcen."},{partei:"FPÖ",haltung:"dagegen",position:"Kritisiert Ideologisierung, fordert Rückkehr zu Grundwerten."},{partei:"Grüne",haltung:"dafuer",position:"Gesamtschule und Chancengerechtigkeit im Fokus."},{partei:"NEOS",haltung:"gespalten",position:"Bildung als Investition, mehr Autonomie für Schulen."}],
  fragen:["Was sind die wahren Ursachen der PISA-Stagnation?","Wäre eine Gesamtschule wirklich besser?","Wie wird Lehrermangel bewertet?","Welche Aspekte des Bildungssystems werden ignoriert?","Wird soziale Herkunft als Ursache thematisiert?","Wer profitiert vom bestehenden System?"]
},

/* -------------------------------------------------------
   14. Digitalsteuer
   ------------------------------------------------------- */
"digitalsteuer": {
  id: "digitalsteuer",
  title: "Digitalsteuer: Österreich im europäischen Steuerwettbewerb",
  summary: "Die Besteuerung digitaler Konzerne bleibt ein heißes Thema. Österreich unterstützt die EU-weite Digitalsteuer, während globale Verhandlungen stocken.",
  date: "Februar 2026",
  keywords: ["Digitalsteuer","Steuer","Tech-Konzerne","EU","OECD"],
  media: [
    { medium:"ORF", slug:"orf", url:"https://orf.at/#/stories/search/?q=Digitalsteuer+Österreich", headline:"Digitalsteuer: Österreich drängt auf EU-weite Lösung", date:"8. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Finanzminister bekräftigt Österreichs Unterstützung für eine globale Mindeststeuer auf Digitalkonzerne.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"Der Standard", slug:"standard", url:"https://www.derstandard.at/suche?q=Digitalsteuer", headline:"Digitalsteuer: Warum Amazon, Google und Meta zu wenig zahlen", date:"7. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"erklärend", excerpt:"Wie Konzerne durch Steueroasen Milliarden sparen – und warum das in Österreich spürbar ist.", compass:{wirtschaft:"liberal", gesellschaft:"libertaer"} },
    { medium:"Die Presse", slug:"presse", url:"https://www.diepresse.com/suche?q=Digitalsteuer", headline:"Digitalsteuer: Gefahr für Innovationsstandort Europa", date:"8. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"sachlich", excerpt:"Zu hohe Steuern könnten Tech-Investitionen aus Europa vergraulen.", compass:{wirtschaft:"konservativ", gesellschaft:"mitte"} },
    { medium:"Kronen Zeitung", slug:"krone", url:"https://www.krone.at/suche?q=Digitalsteuer", headline:"Milliarden-Konzerne zahlen keine Steuern – das ist ein Skandal!", date:"8. Feb. 2026", focus:"Bürgerbelastung", stil:"zugespitzt", excerpt:"Während kleine Betriebe jeden Cent versteuern, sparen Riesen wie Amazon Milliarden.", compass:{wirtschaft:"konservativ", gesellschaft:"autoritaer"} },
    { medium:"Heute", slug:"heute", url:"https://www.heute.at/s/suche?q=Digitalsteuer", headline:"Digitalsteuer: Was das für Preise bei Netflix und Amazon bedeutet", date:"8. Feb. 2026", focus:"Alltag", stil:"erklärend", excerpt:"Würde eine Digitalsteuer Ihre Streaming-Abos teurer machen? Wir klären auf.", compass:{wirtschaft:"mitte", gesellschaft:"mitte"} },
    { medium:"exxpress", slug:"exxpress", url:"https://exxpress.at/?s=Digitalsteuer", headline:"Digitalsteuer: EU-Bürokratie gefährdet Innovationen", date:"8. Feb. 2026", focus:"Wirtschaftliche Folgen", stil:"zugespitzt", excerpt:"Anstatt Tech-Konzerne mit Steuern zu belasten, sollte Europa selbst wettbewerbsfähiger werden.", compass:{wirtschaft:"konservativ", gesellschaft:"libertaer"} }
  ],
  folgenBuerger:["Mehr Steuereinnahmen für öffentliche Dienste möglich","Preiserhöhungen bei digitalen Services denkbar","Wettbewerb zwischen lokalen und globalen Anbietern","Österreichische Online-Händler unter Druck","Datenschutz und Steuertransparenz verknüpft"],
  folgenUnternehmen:["Multinationale Konzerne müssen mehr zahlen","Kleine österreichische Unternehmen profitieren von fairem Wettbewerb","Verwaltungsaufwand steigt","Tech-Investitionen könnten zurückgehen","Neue Compliance-Anforderungen"],
  zahlenFakten:[{wert:"15 %",label:"OECD-Mindeststeuer für Großkonzerne"},{wert:"6 Mrd. €",label:"Geschätzte Steuereinnahmen für EU jährlich"},{wert:"3 %",label:"Österreichs Digitalsteuer auf Werbeeinnahmen"},{wert:"750 Mio. €",label:"Jahresumsatz-Schwelle für OECD-Mindeststeuer"},{wert:"140",label:"Länder, die OECD-Mindeststeuer unterzeichnet haben"}],
  internationalerVergleich:["Frankreich: Erste nationale Digitalsteuer 2019","Irland: Profitiert von niedrigen Körperschaftssteuern","USA: Lehnt unilaterale Digitalsteuern ab","Indien: Eigene Digitalsteuer auf ausländische Tech-Konzerne","UK: 2 % Digitalsteuer auf Suchmaschinen und Social Media"],
  zeitlicherHorizont:{kurzfristig:["OECD-Mindeststeuer wird umgesetzt","Erste Einnahmen fließen"],mittelfristig:["EU-weite Harmonisierung","Tech-Konzerne passen Strukturen an"],langfristig:["Globale Steuergerechtigkeit als Ziel","Neue Steuermodelle für digitale Wirtschaft"]},
  politik:[{partei:"ÖVP",haltung:"dafuer",position:"Unterstützt globale Lösung, lehnt nationale Alleingänge ab."},{partei:"SPÖ",haltung:"dafuer",position:"Fordert ambitioniertere Besteuerung digitaler Konzerne."},{partei:"FPÖ",haltung:"gespalten",position:"Gegen EU-Übertragung, aber für faire Besteuerung."},{partei:"Grüne",haltung:"dafuer",position:"Setzt sich für starke globale Mindeststeuer ein."},{partei:"NEOS",haltung:"gespalten",position:"Fairness ja, aber keine Wettbewerbsnachteile für Europa."}],
  fragen:["Wären Mehreinnahmen wirklich spürbar?","Würden Preise für Verbraucher steigen?","Wie fair ist das aktuelle Steuersystem für kleine Betriebe?","Wird über Steueroasen ausreichend berichtet?","Welche Interessen stehen hinter den Positionen?","Wer profitiert vom Status quo?"]
}

}; // Ende DEMO_DATA

/* -------------------------------------------------------
   Keyword-Mapping
   ------------------------------------------------------- */
const KEYWORD_MAP = {
  "kunststoffverpackungen":    "eu-kunststoffverpackungen",
  "eu-kunststoffverpackungen": "eu-kunststoffverpackungen",
  "verpackung":                "eu-kunststoffverpackungen",
  "plastik":                   "eu-kunststoffverpackungen",
  "co2":                       "co2-steuer",
  "co2-steuer":                "co2-steuer",
  "klimasteuer":               "co2-steuer",
  "erbschaftssteuer":          "erbschaftssteuer",
  "erbschaft":                 "erbschaftssteuer",
  "iran":                      "naher-osten",
  "naher osten":               "naher-osten",
  "nahost":                    "naher-osten",
  "sprit":                     "spritpreise",
  "spritpreise":               "spritpreise",
  "tanken":                    "spritpreise",
  "energie":                   "energiepreise-nahost",
  "energiepreise":             "energiepreise-nahost",
  "inflation":                 "inflation",
  "teuerung":                  "inflation",
  "frauentag":                 "frauentag",
  "gleichstellung":            "frauentag",
  "gletscher":                 "gletscher",
  "klimawandel":               "gletscher",
  "terror":                    "sicherheitspolitik",
  "sicherheit":                "sicherheitspolitik",
  "terrorwarnstufe":           "sicherheitspolitik",
  "pension":                   "pensionsreform",
  "pensionsreform":            "pensionsreform",
  "miete":                     "wohnkosten",
  "wohnen":                    "wohnkosten",
  "mietpreise":                "wohnkosten",
  "bildung":                   "bildung",
  "schule":                    "bildung",
  "pisa":                      "bildung",
  "digitalsteuer":             "digitalsteuer",
  "steuer":                    "digitalsteuer",
};

const DEFAULT_QUESTIONS = [
  "Welche Folgen betreffen Bürger direkt?",
  "Welche Auswirkungen tragen Unternehmen?",
  "Welche Aspekte betonen Medien besonders stark?",
  "Welche möglichen Folgen werden kaum erwähnt?",
  "Wird eher moralisch oder praktisch argumentiert?",
  "Welche Stimmen fehlen in der Berichterstattung?"
];

const WEEK_TOPIC_KEY = "eu-kunststoffverpackungen";
