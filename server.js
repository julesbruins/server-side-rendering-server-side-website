// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express, { request } from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


console.log('Hieronder moet je waarschijnlijk nog wat veranderen')
// Doe een fetch naar de data die je nodig hebt
const taskResponse = await fetch('https://fdnd-agency.directus.app/items/dropandheal_task/')            // Je haalt de API op
const excerciseResponse = await fetch('https://fdnd-agency.directus.app/items/dropandheal_exercise')    // Je haalt de API op

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
const taskResponseJSON = await taskResponse.json()                                                      // Je zet de data om in JSON
const excerciseResponseJSON = await excerciseResponse.json()                                            // Je zet de data om in JSON


// Controleer eventueel de data in je console
// (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)
// console.log(apiResponseJSON)


// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Maak een GET route voor de index (meestal doe je dit in de root, als /)
app.get('/', async function (request, response) {               // Je haalt de root op
   // Render index.liquid uit de Views map
   // Geef hier eventueel data aan mee
   response.render('index.liquid', {task: taskResponseJSON.data })  
})

app.get('/task/:id', async function (request, response) {       // Je haalt de id op die uit de filter (<a> van task.lquid) komt. 
  const task = request.params.id;                               // Je maakt een variabele aan voor de opgevraagde id
  const taskResponse = await fetch(`https://fdnd-agency.directus.app/items/dropandheal_task/?fields=*.*&filter={"id":"${task}"}&limit=1`) // De variable kan je in de link terug laten komen
  const taskResponseJSON = await taskResponse.json()            // Je zet de data om in JSON

  response.render('task.liquid', {task: taskResponseJSON.data?.[0] || [] })   // Je rendert de pagina op task.liquid. De vraagteken en || staan ervoor dat als de data leeg is de pagina alsnog geladen wordt.
})


// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, '/')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})


