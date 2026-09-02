---
title: "Privatliv"
slug: "privatliv"
updated: "September 2026"
description: "Privatliv hos TidTil – transparent information om appen og hjemmesiden."
---

Denne privatlivspolitik beskriver behandlingen af personoplysninger ved brug af **TidTil-appen** og denne **TidTil-hjemmeside**. Den tager udgangspunkt i den nuværende tekniske implementering af appen og hjemmesiden.

## Dataansvarlig

Dataansvarlig for TidTil og denne hjemmeside er:

{{< legal >}}

Der er på nuværende tidspunkt ikke udpeget en databeskyttelsesrådgiver, da vi ud fra virksomhedens nuværende størrelse ikke vurderer, at der gælder et lovkrav om dette. Hvis det ændrer sig, opdaterer vi denne politik.

## Kort fortalt

- TidTil kræver **ingen særskilt TidTil-konto** og ingen ekstra TidTil-adgangskode.
- Kalender- og profildata behandles lokalt på enheden og via **Apple iCloud/CloudKit**.
- Familiedeling bruger **CloudKit Sharing**. Delt indhold er tilgængeligt for de personer, du inviterer.
- TidTil driver **ingen egen backendserver til kalenderindhold**.
- Den nuværende kode indeholder **ingen reklame-, tracking- eller tredjepartsanalyse-SDK'er**.
- Påmindelser og beskeder om nye familieaftaler oprettes som **lokale iOS-notifikationer**.
- **TidTil Familie** kan prøves gratis én gang i 14 dage. Prøveadgangen slutter automatisk og bliver ikke til et betalt abonnement.
- Køb og abonnementer håndteres via **Apple StoreKit/App Store**.
- Hjemmesiden bruger **ingen eksternt indlæste webfonts, egen webanalyse eller reklametrackere**.

## 1. Privatliv i TidTil-appen

### 1.1 Hvilke data behandler TidTil?

Afhængigt af hvilke funktioner du bruger, behandler appen især følgende kategorier af oplysninger.

### Aftaler og kalenderdata

En aftale kan blandt andet indeholde:

- aftalens titel,
- start- og slutdato samt start- og sluttidspunkt,
- markering som flerdagesaftale,
- gentagelsesregel,
- valgt påmindelse,
- aftaletype, f.eks. almindelig aftale, fødselsdag eller årsdag,
- navn på en person ved fødselsdage eller årsdage,
- tilknytning til familiemedlemmer eller lokalt oprettede personer,
- tekniske identifikatorer for tilknyttede CloudKit-deltagere,
- en teknisk identifikator for det familiemedlem, der oprettede aftalen.

### Familiemedlemmer og lokalt oprettede personer

TidTil skelner mellem personer, der deltager via deres egen app/iCloud-konto, og lokalt oprettede personer, f.eks. børn uden egen iPhone. Der kan blandt andet behandles:

- navn,
- intern teknisk identifikator,
- eventuelle billeddata,
- tilknytning til en familie og til aftaler.

Når familiedeling er aktiv, kan navne og aftaletilknytninger for personer i familien synkroniseres med de inviterede familiemedlemmer.

### Brugerprofil

Din egen profil kan indeholde:

- navn,
- telefonnummer,
- e-mailadresse,
- en valgfri tekst til startkortet,
- valgfrit profilbillede.

Disse profildata er som udgangspunkt knyttet til brugerens private CloudKit-område. Når du bruger en delt familiekalender, offentliggøres dit **profilnavn desuden i familiens delte område**, så andre familiemedlemmer kan genkende dig på deltagerlisten. Denne navnedeling deler ikke automatisk dit telefonnummer, din e-mailadresse, dit profilbillede eller teksten på startkortet med familien.

### CloudKit-deltagerdata

Til invitationer og administration af en delt kalender stiller Apple tekniske deltageroplysninger til rådighed via CloudKit. Afhængigt af invitationens status kan disse blandt andet omfatte:

- CloudKit-bruger-/record-identifikator,
- visningsnavn eller navnekomponenter,
- invitationsstatus,
- rolle som ejer eller deltager,
- ved afventende invitationer eventuelt den e-mailadresse eller det telefonnummer, Apple stiller til rådighed.

TidTil bruger disse oplysninger udelukkende til invitationer, deltagerlister og tildeling af aftaler i den fælles kalender. Oplysningerne kan også indgå i en intern stabil deltageridentifikator, indtil Apple stiller en permanent CloudKit-record-identifikator til rådighed.

### Prøveadgang og tekniske adgangsdata

Til den gratis 14-dages prøveadgang til **TidTil Familie** behandler appen tekniske adgangsdata. Det omfatter især:

- prøveperiodens start og slutning,
- prøveadgangens aktuelle status,
- oplysningen om, hvorvidt prøveadgangen allerede er blevet brugt.

Disse oplysninger gemmes i det private iCloud-/CloudKit-område og kan mellemlagres på enheden. De indeholder ikke kalenderindhold og bruges udelukkende til at levere prøveadgangen, beregne den resterende prøveperiode og forhindre gentagen brug.

### 1.2 Lokal lagring og iCloud/CloudKit

TidTil bruger **Core Data** til lokal lagring og **Apple CloudKit** til synkronisering. Appen bruger et privat CloudKit-område til brugerens egne data og et delt CloudKit-område til data, som andre deler med brugeren.

Den lokale database er beskyttet med iOS-filbeskyttelsen `CompleteUntilFirstUserAuthentication`. Efter genstart af enheden bliver data derfor først tilgængelige efter den første oplåsning; derefter kan iOS tilgå dem i det omfang, det er nødvendigt for baggrundssynkronisering.

Apples privatlivs- og sikkerhedsvilkår gælder desuden for CloudKit. TidTil driver ikke en egen applikationsserver, hvortil privat kalenderindhold sendes med henblik på analyse eller reklamer.

### 1.3 Familiedeling og synkronisering

Familiedeling er baseret på **Apple CloudKit Sharing**. Når du deler en familiekalender, kan inviterede og autoriserede deltagere se og – i henhold til de delingsrettigheder TidTil anvender – redigere de delte kalenderdata.

Delingen administreres via Apples systemdialog. Kun personer, der er tilføjet til delingen, får adgang til den fælles kalender. Ejeren kan fjerne deltagere via Apples delingsfunktioner, og deltagere kan forlade en deling.

Ved aktiv deling kan fælles aftaler, lokalt oprettede familiepersoner og det profilnavne-register, der bruges til at identificere deltagere, synkroniseres mellem de deltagende enheder.

### 1.4 Profilbilleder og billedvalg

TidTil bruger Apples **system-billedvælger (PhotosPicker)** til valg af profilbillede. Appen får kun adgang til det billede, du vælger, og får ikke automatisk adgang til hele dit billedbibliotek.

Det valgte billede skaleres ned til brug som profilbillede og gemmes sammen med profildataene. Det uploades ikke til en egen TidTil-server.

### 1.5 Notifikationer og påmindelser

TidTil bruger Apples notifikationssystem til:

- påmindelser, som du selv vælger til aftaler,
- beskeder om nye synkroniserede familieaftaler, der vedrører dig.

Disse notifikationer oprettes på enheden via `UNUserNotificationCenter`. Indholdet kan omfatte aftalens titel, dato, tidspunkt og eventuelt navnet på det familiemedlem, der oprettede aftalen.

CloudKit kan vække appen via system-/baggrundsnotifikationer, når der sker ændringer. TidTil driver ikke en egen push-server til dette formål.

Tilladelse til notifikationer gives via iOS' systemdialog. Beskeder om nye familieaftaler kan desuden deaktiveres i TidTils indstillinger.

### 1.6 Enhedsindstillinger og UserDefaults

Nogle ikke-indholdsmæssige indstillinger gemmes lokalt via Apples `UserDefaults` / SwiftUI `AppStorage`, især:

- valgt accentfarve,
- indstilling for beskeder om nye familieaftaler,
- et teknisk fremdriftstoken, der forhindrer, at allerede behandlede CloudKit-ændringer udløser dobbelte beskeder.

Disse indstillinger bruges kun til appens funktion og ikke til reklamer eller profilering.

### 1.7 Køb, abonnementer og gratis prøveadgang

**TidTils private kalender er og forbliver helt gratis.** Fra version 2.2 kan den fælles familiekalender låses op med et valgfrit abonnement (**TidTil Familie**). Inviterede familiemedlemmer skal aldrig have deres eget abonnement.

Inden der tegnes et betalt familieabonnement, kan ejeren af familiedelingen **prøve TidTil Familie gratis én gang i 14 dage**. Prøveperioden begynder først, når familiedelingen aktiveres bevidst, og den slutter automatisk. Den bliver ikke automatisk til et betalt abonnement.

De tekniske adgangsdata, der er nødvendige for prøveadgangen, behandles i det private iCloud-/CloudKit-område. Retsgrundlaget er GDPR artikel 6, stk. 1, litra b, da behandlingen er nødvendig for at levere den prøveadgang, du anmoder om, og administrere adgangsretten.

Køb, fornyelse, gendannelse og opsigelse foregår **udelukkende via Apple og App Store**. Betalingsoplysninger som kreditkort- eller bankoplysninger bliver hverken behandlet eller gemt af os og når os på intet tidspunkt.

Kontrollen af, om der findes et gyldigt betalt abonnement, sker **udelukkende på din enhed** via Apples StoreKit. Der er ingen egen TidTil-server involveret, og ingen betalingsdata overføres til os. Den separate kontrol af den gratis engangsprøve bruger de tekniske adgangsdata i iCloud/CloudKit, som er beskrevet ovenfor. Har du brugt TidTil før version 2.2, beholder du familiekalenderen gratis permanent; også den kontrol sker lokalt ud fra den kvittering, Apple har signeret.

### 1.8 Ingen reklamer, tracking eller tredjepartsanalyse

Ud fra den aktuelt gennemgåede appkode:

- indeholder TidTil ingen reklame-SDK'er,
- indeholder TidTil ingen tredjepartsanalyse-SDK'er,
- bruger TidTil ikke en reklameidentifikator til tracking,
- opretter TidTil ikke brugerprofiler til reklame- eller markedsføringsformål,
- sender TidTil ikke kalenderindhold til en egen analyse- eller trackingtjeneste.

Apple kan behandle egne tekniske data i forbindelse med operativsystemet, iCloud, CloudKit og App Store. Apples privatlivspolitik gælder for denne behandling.

### 1.9 Opbevaring og sletning i appen

Den nuværende appversion håndterer data blandt andet således:

- Egne enkeltstående aftaler gemmes som udgangspunkt, indtil de slettes; enkeltstående aftaler, hvis sluttidspunkt ligger mere end **30 dage** tilbage, fjernes automatisk fra brugerens private område.
- Gentagne aftaler, fødselsdage og årsdage slettes ikke af denne automatiske 30-dages oprydning.
- Aftaler i en kalender, som en anden person har delt med dig, slettes ikke automatisk af din enhed for alle deltagere.
- Enkeltstående aftaler kan slettes direkte i appen.
- “Slet alle mine aftaler” fjerner dine egne aftaler fra det private område.
- “Nulstil appen helt” fjerner eller nulstiller dine egne aftaler, egne personposter og profildata. Andre deltageres data i den fælles kalender slettes ikke generelt af denne funktion.
- En eksisterende CloudKit-deling skal eventuelt også afsluttes eller forlades via familie-/delingsadministrationen.
- Hvis du blot sletter appen fra din iPhone, betyder det **ikke nødvendigvis**, at data, der allerede er gemt i iCloud/CloudKit, slettes.
- Prøveadgangens start, slutning og status gemmes, så længe det er nødvendigt for at levere og administrere den. Oplysningen om, at engangsprøven allerede er blevet brugt, gemmes, så længe det er nødvendigt for at forhindre gentagen brug. Lovbestemte rettigheder til sletning berøres ikke.

### 1.10 Børn og andre personer uden egen enhed

Forældre eller andre berettigede brugere kan oprette personer i familien – især børn uden egen enhed – og tildele aftaler til dem. Afhængigt af brugen kan navn, intern identifikator, eventuelle billeddata og aftaletilknytninger blive behandlet.

Hvis kalenderen deles med andre familiemedlemmer, kan disse oplysninger være synlige og redigerbare for de inviterede deltagere. Indtast kun personoplysninger om andre personer, hvis du er berettiget til det.

TidTil bruger ikke disse oplysninger til reklamer, tracking eller profilering.

### 1.11 Feedbackformular i appen

Appen indeholder en formular, hvor du kan melde en fejl eller sende os en idé. Data overføres **kun, hvis du bevidst indsender formularen**.

Følgende behandles:

- den **titel og besked**, du selv skriver
- et **skærmbillede**, hvis du selv vedhæfter et
- **appversion, buildnummer, iOS-version og enhedsmodel**, så en meldt fejl kan genskabes
- tidspunktet for indsendelsen

Disse meldinger gemmes i den **offentlige database i vores iCloud-container**. Kun vi som udbyder har adgang, så vi kan svare dig og rette fejlen; andre brugere af appen kan ikke se din melding. Retsgrundlaget er art. 6, stk. 1, litra f, i GDPR (legitim interesse i fejlretning og forbedring af appen) eller dit samtykke ved bevidst indsendelse.

**Overføres ikke:** dit navn, dit profilbillede, dine aftaler eller dine familiemedlemmers data. Undlad venligst at angive personoplysninger i teksten, som ikke er nødvendige for behandlingen.

Vi opbevarer kun meldinger, så længe det er nødvendigt for at behandle dem. På anmodning sletter vi din melding — skriv blot til adressen nedenfor.

## 2. Privatliv på TidTil-hjemmesiden

### 2.1 Hosting via GitHub Pages

Denne hjemmeside hostes via **GitHub Pages**. Når en GitHub Pages-side besøges, kan GitHub blandt andet logge den besøgendes IP-adresse og gemme den til sikkerhedsformål. Andre teknisk nødvendige forbindelses- og requestdata kan også blive behandlet.

Behandlingen sker for at levere hjemmesiden sikkert, stabilt og teknisk pålideligt på grundlag af vores legitime interesse, jf. GDPR artikel 6, stk. 1, litra f.

Yderligere oplysninger findes i GitHubs privatlivsinformation.

### 2.2 Lokalt hostede webfonts

Skrifttyperne **Jost** og **Sacramento**, der bruges på denne hjemmeside, leveres sammen med hjemmesiden via GitHub Pages. Visningen af skrifttyperne medfører derfor **ingen forbindelse til Google Fonts eller andre eksterne fonttjenester**.

Skriftfilerne stammer fra det officielle Google Fonts-repository og anvendes under den respektive **SIL Open Font License (OFL)**. De gældende licenstekster leveres sammen med skriftfilerne.

### 2.3 Ingen egen webanalyse eller reklametrackere

Vi bruger på nuværende tidspunkt **ingen egen webanalyse, Google Analytics, reklamecookies eller reklametrackere** på hjemmesiden.

### 2.4 Kontakt via e-mail

Hvis du kontakter os via e-mail, behandler vi de oplysninger, du sender, især din e-mailadresse, beskedens indhold og eventuelt dit navn, for at kunne besvare din henvendelse.

Hvis henvendelsen vedrører en aftale eller foranstaltninger forud for en aftale, sker behandlingen på grundlag af GDPR artikel 6, stk. 1, litra b. I andre tilfælde sker den på grundlag af vores legitime interesse i at besvare henvendelser, jf. artikel 6, stk. 1, litra f.

## 3. Modtagere og international behandling

Afhængigt af den anvendte funktion kan teknisk nødvendige data især blive behandlet af:

- **Apple** til iCloud, CloudKit, CloudKit Sharing, push-/systemnotifikationer og StoreKit/App Store,
- **familiemedlemmer, du inviterer**, for fælles delte kalenderdata,
- **GitHub** til hosting af denne hjemmeside.

Internationale udbydere kan behandle data uden for EU eller EØS. Sådanne overførsler er underlagt de garantier, den pågældende udbyder anvender, samt udbyderens gældende privatlivsvilkår.

## 4. Retsgrundlag

Når GDPR finder anvendelse, baserer vi især behandlingen på:

- **GDPR artikel 6, stk. 1, litra b**, når behandlingen er nødvendig for at levere appfunktioner, synkronisering, prøveadgang, køb og abonnementer eller behandle kontraktrelaterede henvendelser,
- **GDPR artikel 6, stk. 1, litra f**, når behandlingen er nødvendig for sikker og pålidelig drift af hjemmesiden eller behandling af generelle henvendelser.

Når behandling alene udløses af en valgfri funktion – f.eks. valg af profilbillede, aktivering af en påmindelse eller invitation af familiemedlemmer – sker behandlingen kun, når du aktivt bruger funktionen. Hvis samtykke fremover bliver juridisk nødvendigt for en bestemt behandling, vil TidTil indhente det særskilt.

## 5. Dine rettigheder

Når de juridiske betingelser er opfyldt, har du blandt andet ret til:

- indsigt i dine personoplysninger,
- berigtigelse af urigtige oplysninger,
- sletning,
- begrænsning af behandling,
- dataportabilitet,
- indsigelse mod behandling baseret på legitime interesser,
- tilbagekaldelse af et samtykke med virkning for fremtiden,
- at indgive en klage til en kompetent databeskyttelsesmyndighed.

En væsentlig del af de private appdata ligger udelukkende i dit Apple-/iCloud-miljø. Da TidTil ikke driver en egen backendserver til dette kalenderindhold, kan vi ikke centralt hente indholdet for dig på samme måde som en traditionel cloududbyder. Mange data kan administreres direkte via appen og Apples iCloud-funktioner.

## 6. Ændringer af denne privatlivspolitik

Vi opdaterer denne privatlivspolitik, når funktioner, tekniske processer, anvendte tjenester eller juridiske krav ændrer sig. Den aktuelle version er altid tilgængelig på denne side. Opdateringsdatoen står øverst i politikken.

## Kontakt

Ved spørgsmål om privatliv kan du kontakte os på: {{< email >}}
