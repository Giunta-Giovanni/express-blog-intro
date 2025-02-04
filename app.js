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

// avviamo il server, mettendolo in ascolto sulla porta indicata
app.listen (port,() => {
    console.log (`Example aoo listening on port ${port}`)
})
