```
title Tehtävä - 0.6: uusi muistiinpano

note over selain:
selain kirjoittaa input-teksti-kenttään "Jotain"
ja painaa Save-nappia
end note

selain->palvelin: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over selain:
selain lähettää POST pyynnön palvelimelle ja alkaa suorittaa js-koodia
joka tallentaa kenttään kirjoitetun tekstin "Jotain" listalle/palvelimelle/tietokantaan
sekä päivittää uuden listan eli JSON datan
end note

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: [{ content: "HTML on helppoa", date: "2019-01-01" }, ...]

note over selain:
selain suorittaa tapahtumankäsittelijän
joka renderöi uuden muistiinpanon näytölle aikaisempien jatkoksi
end note
```
