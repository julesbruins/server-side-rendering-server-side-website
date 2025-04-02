> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# drop & heal - server side rendering
Tijdens sprint 8 lag de focus op het maken van een overzichtspagina en eeen detailpagina. Hierbij is het de bedoeling dat alle content dynamisch uit de databaase wordt opgehaald.

### about drop & heal
Rouw is een diep persoonlijke en vaak complexe ervaring die varieert van persoon tot persoon. Het rouwproces kent geen vast tijdspad of gestandaardiseerde aanpak en de intensiteit en duur van het rouwproces kunnen sterk verschillen. In onze hedendaagse samenleving krijgen veel jongvolwassenen te maken met rouw, maar vaak ontbreekt het aan toegankelijke en begrijpelijke ondersteuning die aansluit bij hun specifieke levensfase en persoonlijke behoeften. Drop & Heal streeft ernaar deze leegte te vullen met een innovatieve benadering die technologie gebruikt om een gepersonaliseerd ondersteuningsprogramma te bieden dat zich aanpast aan de unieke behoeften van elke gebruiker. Door gebruik te maken van een analyse, kan de app de specifieke rouwtaak waarin de gebruiker zich bevindt vast stellen en de gewenste hulp bieden.


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Ik heb een website gemaakt met 4 verschillende rouwtaken. Elke overzichtspagina met rouwtaak draagt zijn eigen thema en afbeeldingen. Bij elke rouwtaak zijn de bijbehorende verschillende opdrachten te vinden. Deze kun je ook allemaal openen door op de 'start oefening' button te klikken. Dan kom je op een detailpagina van de opdracht terecht. 



https://github.com/user-attachments/assets/3a21466d-43ff-492e-8040-0fb75deb842a



## Gebruik
Van origine is het de bedoeling dat je aan de hand van een vragenlijst een gepersonaliseerd rouwproces tot je beschikking krijgt. Je wordt automatisch doorgeleidt naar de bijpassende rouwtaak (echter was de vragenlijst al aardig uitgewerkt en aan ons om daarom de pagina's van de verschillende rouwtaken te maken inclusief de bijbehorende opdracahten). 

Je start op de overzichtspagina. Hier kun je verschillende opdrachten vinden die je doorleiden doormiddel van de 'start oefening' button naar de detailpagina van de desbetreffende opdracht. Je kunt wisselen tussen de pagina's via het menu. Je kunt dus op de site verschillende rouwtaken inzien en verschillende opdrachten maken.

## Kenmerken
In dit project wordt er gebruik gemaakt van Node.js en Express om de webserver te beheren. Voor het genereren van dynamische HTML-pagina's wordt Liquid gebruikt, wat de webpagina's flexibel en makkelijk te onderhouden maakt.

### routing
- [`app.get("/")`](https://github.com/julesbruins/server-side-rendering-server-side-website/blob/9ccadcba8f7a5007b0b4d4b5e5efbb46cd48aa72/server.js#L40-L44): Haalt alle gegevens op uit de directus API.
- [`app.get("/task/:id/")`](https://github.com/julesbruins/server-side-rendering-server-side-website/blob/9ccadcba8f7a5007b0b4d4b5e5efbb46cd48aa72/server.js#L46-L52): Deze route haalt de informatie van een specifiek rouwtaak op, op basis van de id.
- [`app.get("/exercise/:id/"`)](https://github.com/julesbruins/server-side-rendering-server-side-website/blob/9ccadcba8f7a5007b0b4d4b5e5efbb46cd48aa72/server.js#L54-L60): Deze route haalt de informatie van een specifieke opdracht op, op basis van de id.

### data & database
- De server maakt een API aanroep zodat de data wordt omgezet in JSON formaat. [Zie hier hoe](https://github.com/julesbruins/server-side-rendering-server-side-website/blob/9ccadcba8f7a5007b0b4d4b5e5efbb46cd48aa72/server.js#L15-L16).
- Vervolgens wordt de opgehaalde data doorgegeven aan de Liquid-template via response.render(). [Zie hier hoe](https://github.com/julesbruins/server-side-rendering-server-side-website/blob/9ccadcba8f7a5007b0b4d4b5e5efbb46cd48aa72/server.js#L43).
- De data kan gebruikt worden in de liquid door het gebruik van variabelen en for loops. [Zie hier hoe](https://github.com/julesbruins/server-side-rendering-server-side-website/blob/9ccadcba8f7a5007b0b4d4b5e5efbb46cd48aa72/views/task.liquid#L39-L61).
- Tot slot zorgt liquid ervoor dat de HTML gegenereed wordt, het naar de browser doorgestuurd wordt en zichtbaar is. 

## Installatie
In dit project wordt gebruik gemaakt van NodeJS. Om aan dit project te werken moet NodeJS geïnstalleerd zijn. Eenmal geïnstalleerd kan het project geopend worden in de code editor.

Voer in de terminal `npm install` uit om alle afhankelijkheden te installeren.

Voer vervolgens `npm start` uit om de server te starten.

Ga in je browser naar http://localhost:8000 om het project te bekijken.

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


