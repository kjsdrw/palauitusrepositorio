![Tehtävä 05: Single Page App](https://github.com/kjsdrw/palautusrepositorio/blob/9dcca8109ecfa08a25e38a06386af9414d9a5312/osa0/05/Tehtava_05_Single_Page_App.png)

```

title Tehtävä - 0.5: Single Page App

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
palvelin-->selain: HTML-koodi
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
palvelin-->selain: spa.js

note over selain:
selain alkaa suorittaa js-koodia
joka pyytää JSON-datan palvelimelta
end note

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: [{"content":"midu.dev","date":"2023-01-09T09:26:24.828Z"},...]

note over selain:
selain suorittaa tapahtumankäsittelijän
joka renderöi muistiinpanot näytölle
end note
```
