---
title: "Datenschutz"
slug: "datenschutz"
updated: "August 2026"
description: "Datenschutz bei TidTil – transparent erklärt für App und Website."
---

Diese Datenschutzerklärung beschreibt die Verarbeitung personenbezogener Daten bei der Nutzung der **TidTil-App** sowie dieser **TidTil-Website**. Sie orientiert sich am derzeitigen technischen Stand der App und der Website.

## Verantwortlicher

Verantwortlich für TidTil und diese Website ist:

{{< legal >}}

Ein Datenschutzbeauftragter ist derzeit nicht benannt, da nach der aktuellen Unternehmensgröße keine entsprechende gesetzliche Pflicht angenommen wird. Sollte sich dies ändern, wird diese Erklärung angepasst.

## Kurzfassung

- TidTil benötigt **kein eigenes Benutzerkonto** und kein zusätzliches TidTil-Passwort.
- Kalender- und Profildaten werden lokal auf dem Gerät und über **Apple iCloud/CloudKit** verarbeitet.
- Für die Familienfreigabe verwendet TidTil **CloudKit Sharing**. Freigegebene Inhalte sind für die von dir eingeladenen Mitglieder zugänglich.
- TidTil betreibt **keinen eigenen Backend-Server für Kalenderinhalte**.
- Die App enthält nach aktuellem Stand **keine Werbe-, Tracking- oder Analyse-SDKs**.
- Erinnerungen und Hinweise auf neue Familientermine werden als **lokale iOS-Mitteilungen** erzeugt.
- Käufe und Abonnements werden über **Apple StoreKit/App Store** abgewickelt.
- Die Website verwendet **keine extern geladenen Webfonts, keine Webanalyse und keine Werbetracker**.

# 1. Datenschutz in der TidTil-App

## 1.1 Welche Daten verarbeitet TidTil?

Je nachdem, welche Funktionen du nutzt, verarbeitet die App insbesondere folgende Daten.

### Termine und Kalenderdaten

Bei einem Termin können unter anderem gespeichert werden:

- Titel des Termins,
- Start- und Enddatum sowie Start- und Endzeit,
- Kennzeichnung als mehrtägiger Termin,
- Wiederholungsregel,
- gewählte Erinnerung,
- Terminart, z. B. normaler Termin, Geburtstag oder Jahrestag,
- Name einer Person bei Geburtstagen oder Jahrestagen,
- Zuordnung zu Familienmitgliedern oder lokal angelegten Personen,
- technische Kennungen der zugeordneten CloudKit-Teilnehmer,
- technische Kennung des Familienmitglieds, das einen Termin angelegt hat.

### Familienmitglieder und lokal angelegte Personen

TidTil unterscheidet zwischen Personen mit eigener App-/iCloud-Teilnahme und lokal angelegten Personen, beispielsweise Kindern ohne eigenes iPhone. Dabei können insbesondere verarbeitet werden:

- Name,
- interne technische Kennung,
- optional vorhandene Bilddaten,
- Zuordnung zu einer Familie und zu Terminen.

Bei einer aktiven Familienfreigabe können Namen und Terminzuordnungen der zur Familie gehörenden Personen mit den eingeladenen Familienmitgliedern synchronisiert werden.

### Benutzerprofil

Im eigenen Profil können folgende Daten gespeichert werden:

- Name,
- Telefonnummer,
- E-Mail-Adresse,
- frei gewählter Text für die Startkarte,
- optionales Profilfoto.

Diese Profildaten werden grundsätzlich dem privaten CloudKit-Bereich des jeweiligen Nutzers zugeordnet. Wenn du einen gemeinsamen Familienkalender verwendest, wird dein **Profilname zusätzlich im gemeinsamen Familienbereich veröffentlicht**, damit andere Familienmitglieder dich in der Teilnehmerliste erkennen können. Telefonnummer, E-Mail-Adresse, Profilfoto und Startkartentext werden durch diese Namensveröffentlichung nicht automatisch für Familienmitglieder freigegeben.

### CloudKit-Teilnehmerdaten

Für Einladungen und die Verwaltung eines gemeinsamen Kalenders stellt Apple über CloudKit technische Teilnehmerinformationen bereit. Abhängig vom Einladungs- und Annahmestatus können dazu gehören:

- CloudKit-Benutzer-/Datensatzkennung,
- Anzeigename bzw. Namensbestandteile,
- Status der Einladung,
- Rolle als Besitzer oder Teilnehmer,
- bei noch nicht angenommenen Einladungen gegebenenfalls die von Apple bereitgestellte E-Mail-Adresse oder Telefonnummer.

TidTil verwendet diese Angaben ausschließlich, um Einladungen, Teilnehmerlisten und die Zuordnung von Terminen innerhalb des gemeinsamen Kalenders zu ermöglichen. Solche Angaben können außerdem Bestandteil einer internen stabilen Teilnehmerkennung sein, solange Apple noch keine dauerhafte CloudKit-Datensatzkennung bereitstellt.

## 1.2 Lokale Speicherung und iCloud/CloudKit

TidTil verwendet **Core Data** für die lokale Datenhaltung und **Apple CloudKit** für die Synchronisierung. Die App arbeitet mit einem privaten CloudKit-Bereich für eigene Daten und einem geteilten CloudKit-Bereich für Daten, die andere mit dir teilen.

Die lokale Datenbank wird mit dem iOS-Dateischutz `CompleteUntilFirstUserAuthentication` geschützt. Das bedeutet, dass die Daten nach einem Neustart des Geräts erst nach der ersten Entsperrung verfügbar werden; danach kann iOS die Daten im erforderlichen Umfang auch für Hintergrund-Synchronisierung verwenden.

Für CloudKit gelten zusätzlich die Datenschutz- und Sicherheitsbestimmungen von Apple. TidTil betreibt keinen eigenen Anwendungsserver, an den deine privaten Kalenderinhalte zu Analyse- oder Werbezwecken übertragen werden.

## 1.3 Familienfreigabe und Synchronisierung

Die Familienfreigabe basiert auf **Apple CloudKit Sharing**. Wenn du einen Familienkalender freigibst, können die von dir eingeladenen und berechtigten Teilnehmer die freigegebenen Kalenderdaten sehen und – entsprechend der von TidTil verwendeten Freigabeberechtigung – bearbeiten.

Die Freigabe wird über Apples Systemdialog verwaltet. Nur Personen, die in die Freigabe aufgenommen wurden, erhalten Zugriff auf den gemeinsamen Kalender. Besitzer können Teilnehmer über die von Apple bereitgestellte Freigabeverwaltung entfernen; Teilnehmer können eine Freigabe verlassen.

Bei einer aktiven Freigabe können insbesondere gemeinsame Termine, lokal angelegte Familienpersonen und das für die Teilnehmeranzeige veröffentlichte Profilnamens-Verzeichnis zwischen den beteiligten Geräten synchronisiert werden.

## 1.4 Profilfoto und Fotoauswahl

Für die Auswahl eines Profilfotos verwendet TidTil Apples **System-Fotoauswahl (PhotosPicker)**. Die App erhält dabei nur Zugriff auf das von dir ausgewählte Bild und nicht automatisch auf deine gesamte Fotomediathek.

Das gewählte Bild wird für das Profil verkleinert und in den Profildaten gespeichert. Es wird nicht an einen eigenen TidTil-Server übertragen.

## 1.5 Mitteilungen und Erinnerungen

TidTil verwendet Apples Benachrichtigungssystem für:

- selbst gewählte Erinnerungen an Termine,
- Hinweise auf neu synchronisierte Familientermine, die dich betreffen.

Diese Mitteilungen werden auf dem Gerät über `UNUserNotificationCenter` erstellt. Inhalte können den Termintitel, Datum, Uhrzeit und gegebenenfalls den Namen des Familienmitglieds enthalten, das den Termin angelegt hat.

CloudKit kann die App über System- bzw. Hintergrundbenachrichtigungen über Änderungen informieren. TidTil betreibt dafür keinen eigenen Push-Server.

Die Berechtigung für Mitteilungen wird über den iOS-Systemdialog erteilt. Hinweise auf neue Familientermine können zusätzlich in den TidTil-Einstellungen deaktiviert werden.

## 1.6 Geräteeinstellungen und UserDefaults

Einige nicht-inhaltliche Einstellungen werden lokal über Apples `UserDefaults` bzw. SwiftUI `AppStorage` gespeichert, insbesondere:

- gewählte Akzentfarbe,
- Einstellung für Hinweise auf neue Familientermine,
- eine technische Fortschrittsmarke, damit bereits verarbeitete CloudKit-Änderungen nicht mehrfach gemeldet werden.

Diese Einstellungen dienen ausschließlich der App-Funktion und werden nicht für Werbung oder Profiling verwendet.

## 1.7 Käufe und Abonnements

**Die aktuelle Version von TidTil enthält keine In-App-Käufe und kein Abonnement.** Die App ist vollständig kostenlos nutzbar, bindet kein Kauf-Framework ein und verarbeitet keinerlei Zahlungs- oder Kaufdaten.

Für eine spätere Version ist ein optionales Abo (**TidTil Sync**) geplant, mit dem sich die Familienfreigabe freischalten lässt. Sollte es eingeführt werden, laufen Kauf, Verlängerung, Wiederherstellung und Verwaltung ausschließlich über Apple bzw. den App Store; Zahlungsdaten wie Kreditkarten- oder Bankverbindungen würden auch dann nicht von uns verarbeitet oder gespeichert. Diese Datenschutzerklärung wird vor einer solchen Einführung entsprechend aktualisiert.

## 1.8 Keine Werbung, kein Tracking und keine Drittanbieter-Analyse

Nach dem derzeit geprüften Stand des App-Codes:

- enthält TidTil keine Werbe-SDKs,
- enthält TidTil keine Drittanbieter-Analytics-SDKs,
- verwendet TidTil keine Werbe-ID zur Nachverfolgung,
- erstellt TidTil keine Nutzerprofile für Werbe- oder Marketingzwecke,
- sendet TidTil Kalenderinhalte nicht an einen eigenen Analyse- oder Trackingdienst.

Apple kann im Rahmen seiner Betriebssystem-, iCloud-, CloudKit- und App-Store-Dienste eigene technische Daten verarbeiten. Dafür gelten die Datenschutzbestimmungen von Apple.

## 1.9 Speicherdauer und Löschung in der App

Die aktuelle App-Version behandelt Daten insbesondere wie folgt:

- Eigene einmalige Termine werden grundsätzlich bis zur manuellen Löschung gespeichert; einmalige Termine, deren Ende mehr als **30 Tage** zurückliegt, werden von der App automatisch aus dem eigenen privaten Store entfernt.
- Wiederkehrende Termine, Geburtstage und Jahrestage werden nicht durch diese automatische 30-Tage-Bereinigung gelöscht.
- Termine aus einem von anderen Personen geteilten Kalender werden nicht von deinem Gerät automatisch für alle Beteiligten gelöscht.
- Einzelne Termine können direkt in der App gelöscht werden.
- „Alle meine Termine löschen“ entfernt die eigenen Termine aus dem privaten Bereich.
- „App vollständig zurücksetzen“ entfernt bzw. leert die eigenen Termine, eigenen Personen-Einträge und Profildaten. Daten anderer Teilnehmer im gemeinsamen Kalender werden dadurch nicht pauschal gelöscht.
- Eine bestehende CloudKit-Freigabe muss gegebenenfalls zusätzlich über die Familien-/Freigabeverwaltung beendet oder verlassen werden.
- Das bloße Löschen der App vom iPhone bedeutet **nicht zwingend**, dass bereits in iCloud/CloudKit gespeicherte Daten gelöscht werden.

## 1.10 Kinder und andere Personen ohne eigenes Gerät

Eltern oder andere berechtigte Nutzer können Personen – insbesondere Kinder ohne eigenes Gerät – innerhalb der Familie anlegen und ihnen Termine zuordnen. Dabei werden je nach Nutzung Name, interne Kennung, gegebenenfalls Bilddaten und Terminzuordnungen verarbeitet.

Wenn der Kalender mit anderen Familienmitgliedern geteilt wird, können diese Daten für die eingeladenen Teilnehmer sichtbar und bearbeitbar sein. Bitte trage personenbezogene Daten anderer Personen nur ein, wenn du hierzu berechtigt bist.

TidTil verwendet diese Angaben nicht für Werbung, Tracking oder Profiling.

## 1.11 Feedback-Formular in der App

Die App enthält ein Formular, über das du einen Fehler melden oder eine Idee schicken kannst. Die Übermittlung erfolgt **ausschließlich dann, wenn du das Formular bewusst absendest**.

Dabei werden verarbeitet:

- **Titel und Nachricht**, die du selbst verfasst
- ein **Screenshot**, sofern du selbst einen anhängst
- **App-Version, Build-Nummer, iOS-Version und Gerätemodell**, damit sich ein gemeldeter Fehler nachstellen lässt
- der Zeitpunkt der Übermittlung

Diese Meldungen werden in der **öffentlichen Datenbank unseres iCloud-Containers** gespeichert. Zugriff darauf haben ausschließlich wir als Anbieter, um dir zu antworten und den Fehler zu beheben; andere Nutzer der App können deine Meldung nicht einsehen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Fehlerbehebung und Verbesserung der App) bzw. deine Einwilligung durch das bewusste Absenden.

**Nicht übermittelt werden** dein Name, dein Profilfoto, deine Termine sowie die Daten deiner Familienmitglieder. Bitte gib im Text keine personenbezogenen Daten an, die für die Bearbeitung nicht erforderlich sind.

Wir speichern die Meldungen nur so lange, wie es zur Bearbeitung erforderlich ist. Auf Wunsch löschen wir deine Meldung – schreib uns dazu einfach an die unten genannte Adresse.

# 2. Datenschutz auf der TidTil-Website

## 2.1 Hosting über GitHub Pages

Diese Website wird über **GitHub Pages** bereitgestellt. Beim Aufruf einer GitHub-Pages-Website kann GitHub insbesondere die IP-Adresse des Besuchers protokollieren und für Sicherheitszwecke speichern. Darüber hinaus können technisch erforderliche Verbindungs- und Request-Daten verarbeitet werden.

Die Verarbeitung erfolgt zur sicheren, stabilen und technisch zuverlässigen Bereitstellung der Website auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO.

Weitere Informationen findest du in den Datenschutzinformationen von GitHub.

## 2.2 Lokale Webfonts

Die auf dieser Website verwendeten Schriftarten **Jost** und **Sacramento** werden zusammen mit der Website über GitHub Pages ausgeliefert. Beim Anzeigen der Schriftarten wird daher **keine Verbindung zu Google Fonts oder anderen externen Font-Diensten** hergestellt.

Die Schriftdateien stammen aus dem offiziellen Google-Fonts-Repository und werden unter der jeweiligen **SIL Open Font License (OFL)** verwendet. Die Lizenztexte werden zusammen mit den Schriftdateien bereitgestellt.

## 2.3 Keine eigene Webanalyse und keine Werbetracker

Nach dem derzeitigen Stand der Website verwenden wir **keine eigene Webanalyse, kein Google Analytics, keine Werbe-Cookies und keine Werbetracker**.

## 2.4 Kontaktaufnahme per E-Mail

Wenn du uns per E-Mail kontaktierst, verarbeiten wir die von dir übermittelten Angaben, insbesondere deine E-Mail-Adresse, den Nachrichteninhalt und gegebenenfalls deinen Namen, um deine Anfrage zu beantworten.

Soweit die Anfrage auf einen Vertrag oder vorvertragliche Maßnahmen gerichtet ist, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. In anderen Fällen erfolgt sie auf Grundlage unseres berechtigten Interesses an der Bearbeitung von Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO.

# 3. Empfänger und Drittlandverarbeitung

Technisch erforderliche Daten können – abhängig von der genutzten Funktion – insbesondere von folgenden Empfängern verarbeitet werden:

- **Apple** für iCloud, CloudKit, CloudKit Sharing, Push-/Systembenachrichtigungen und StoreKit/App Store,
- **von dir eingeladene Familienmitglieder** für gemeinsam freigegebene Kalenderdaten,
- **GitHub** für das Hosting dieser Website.

Bei internationalen Anbietern kann eine Verarbeitung auch außerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums stattfinden. Für solche Übermittlungen gelten die vom jeweiligen Anbieter eingesetzten datenschutzrechtlichen Garantien und die jeweiligen Datenschutzbestimmungen.

# 4. Rechtsgrundlagen

Soweit die DSGVO anwendbar ist, stützen wir die Verarbeitung insbesondere auf:

- **Art. 6 Abs. 1 lit. b DSGVO**, soweit die Verarbeitung zur Bereitstellung von App-Funktionen, Synchronisierung, Kauf-/Abo-Funktionen oder zur Bearbeitung vertragsbezogener Anfragen erforderlich ist,
- **Art. 6 Abs. 1 lit. f DSGVO**, soweit die Verarbeitung zur sicheren und zuverlässigen Bereitstellung der Website oder zur Bearbeitung allgemeiner Anfragen erforderlich ist.

Soweit eine Verarbeitung ausschließlich durch eine freiwillige Funktion ausgelöst wird – etwa das Auswählen eines Profilfotos, das Aktivieren einer Erinnerung oder das Einladen von Familienmitgliedern – erfolgt die Verarbeitung nur, wenn du diese Funktion aktiv nutzt. Soweit für einzelne Vorgänge künftig eine Einwilligung erforderlich sein sollte, wird TidTil diese gesondert einholen.

# 5. Deine Rechte

Soweit die gesetzlichen Voraussetzungen erfüllt sind, stehen dir insbesondere folgende Rechte zu:

- Auskunft über deine personenbezogenen Daten,
- Berichtigung unrichtiger Daten,
- Löschung,
- Einschränkung der Verarbeitung,
- Datenübertragbarkeit,
- Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen,
- Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft,
- Beschwerde bei einer zuständigen Datenschutzaufsichtsbehörde.

Ein wesentlicher Teil der privaten App-Daten liegt ausschließlich in deinem Apple-/iCloud-Bereich. Da TidTil keinen eigenen Backend-Server für diese Kalenderinhalte betreibt, können wir diese Daten nicht wie ein klassischer Cloudanbieter zentral für dich auslesen. Viele Daten können direkt über die App und die Apple-/iCloud-Funktionen verwaltet werden.

# 6. Änderungen dieser Datenschutzerklärung

Wir passen diese Datenschutzerklärung an, wenn sich Funktionen, technische Abläufe, eingesetzte Dienste oder rechtliche Anforderungen ändern. Die jeweils aktuelle Fassung ist auf dieser Seite verfügbar. Das Aktualisierungsdatum steht am Anfang der Erklärung.

## Kontakt

Bei Fragen zum Datenschutz erreichst du uns unter: {{< email >}}
