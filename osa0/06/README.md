```

title Tehtävä - 0.6: uusi muistiinpano

note over selain:
selain kirjoittaa input-teksti-kenttään "Jotain"
ja painaa Save-nappia
end note

selain->palvelin: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

note over selain:
selain lähettää POST pyynnön palvelimelle ja alkaa suorittaa js-koodia
joka tallentaa kenttään kirjoitetun tekstin "Jotain" listalle/palvelimelle/tietokantaan
sekä päivittää uuden listan eli JSON datan
end note

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: [{"content":"new note","date":"2023-01-09T10:08:25.242Z"}, ...]

note over selain:
HUOM! selain EI lataa uuelleen HTML, CSS-tiedostoja.
end note

note over selain:
selain suorittaa tapahtumankäsittelijän
joka renderöi uuden muistiinpanon näytölle aikaisempien jatkoksi
end note

```
