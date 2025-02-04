// Importiamo express
const express = require('express');
// inizializziamo express invocandolo come una funzione e lo salviamo in una variabile
const app = express();
// specifichiamo la porta su cui il server express sarà in ascolto
const port = 3000;

// definiamo la prima rotta
app.get('/', (req,res) => {
    res.send ('Server del mio blog')
});

// definiamo la rotta bacheca
app.get('/bacheca', (req,res) => {
    const bacheca = 
    [
      {
        "titolo": "Le rotte commerciali più trafficate del mondo",
        "contenuto": "Un'analisi delle principali rotte marittime utilizzate nel commercio internazionale e la loro importanza economica.",
        "immagine": "https://example.com/rotte-commerciali.jpg",
        "tags": ["marittimo", "commercio", "logistica", "rotte"]
      },
      {
        "titolo": "Come funzionano i container nel trasporto marittimo",
        "contenuto": "Scopri il ruolo essenziale dei container nel commercio globale e come vengono gestiti nei porti.",
        "immagine": "https://example.com/container-trasporto.jpg",
        "tags": ["logistica", "container", "spedizioni", "commercio"]
      },
      {
        "titolo": "Le navi mercantili più grandi del mondo",
        "contenuto": "Dai colossi del trasporto merci alle petroliere più imponenti: un viaggio tra le navi più grandi mai costruite.",
        "immagine": "https://example.com/navi-mercantili.jpg",
        "tags": ["marittimo", "navi", "trasporto", "ingegneria"]
      },
      {
        "titolo": "Sicurezza in mare: le normative per la navigazione mercantile",
        "contenuto": "Una panoramica sulle principali normative internazionali che regolano la sicurezza delle navi mercantili.",
        "immagine": "https://example.com/sicurezza-navigazione.jpg",
        "tags": ["sicurezza", "marittimo", "regolamenti", "navigazione"]
      },
      {
        "titolo": "Lavorare su una nave mercantile: ruoli e responsabilità",
        "contenuto": "Scopri le diverse figure professionali a bordo delle navi mercantili e le loro mansioni quotidiane.",
        "immagine": "https://example.com/lavoro-nave.jpg",
        "tags": ["marittimo", "carriera", "equipaggio", "trasporto"]
      }
    ]
    res.json(bacheca)
});

// avviamo il server, mettendolo in ascolto sulla porta indicata
app.listen (port,() => {
    console.log (`Server is running on http://localhost:${port}`)
    console.log(`The server's bacheca endpoint is available at http://localhost:${port}/bacheca`);

})
