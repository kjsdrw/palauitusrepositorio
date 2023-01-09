![Tehtävä 04: uusi muistiinpano](osa0/04/Tehtava_04_ uusi_muistiinpano.png)


```

title Tehtävä - 0.4: uusi muistiinpano

note over selain:
selain kirjoittaa input-teksti-kenttään "Jotain"
ja painaa Save-nappia
end note

selain->palvelin: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over selain:
selain lähettää POST pyynnön palvelimelle ja alkaa suorittaa js-koodia
joka tallentaa kenttään kirjoitetun tekstin "Jotain" listalle/palvelimelle/tietokantaan
end note

note over selain:
selain lataa uudelleen HTML-sivun, CSS:n sekä JS-koodin.
end note

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
palvelin-->selain: HTML-koodi
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
palvelin-->selain: main.js

note over selain:
selain alkaa suorittaa js-koodia
joka pyytää päivitetyn JSON-datan palvelimelta
end note

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: [{"content":"new note","date":"2023-01-09T10:08:25.242Z"}, ...]

note over selain:
selain suorittaa tapahtumankäsittelijän
joka renderöi uuden muistiinpanon näytölle aikaisempien jatkoksi
end note

```

https://www.websequencediagrams.com/

