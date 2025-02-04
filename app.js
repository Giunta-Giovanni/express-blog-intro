// Importiamo express
const express = require('express');
// inizializziamo express invocandolo come una funzione e lo salviamo in una variabile
const app = express();
// specifichiamo la porta su cui il server express sarà in ascolto
const port = 3000;

// asset statico 
app.use(express.static('public'));

// definiamo la prima rotta
app.get('/', (req,res) => {
    res.send ('Server del mio blog')
});

// definiamo la rotta bacheca
app.get('/bacheca', (req,res) => {
    const bacheca = 
    [
      {
        "titolo": "Ciambellone al Limone",
        "contenuto": "Il ciambellone al limone è una torta soffice e profumata, perfetta per una merenda o una colazione leggera. Preparato con ingredienti semplici come farina, zucchero, uova, limone e burro, è un dolce che conquista con il suo sapore fresco e la sua consistenza morbida.",
        "immagine": "/images/ciambellone.jpeg",
        "tags": ["ciambellone", "limone", "dolce", "colazione", "merenda", "ricetta"]
      },
      {
        "titolo": "Cracker alla Barbabietola",
        "contenuto": "I cracker alla barbabietola sono uno snack salato e sano, perfetto per accompagnare formaggi o per uno spuntino leggero. Realizzati con farina integrale, barbabietola fresca e un tocco di olio d'oliva, offrono un sapore ricco e una consistenza croccante.",
        "immagine": "/images/cracker_barbabietola.jpg",
        "tags": ["cracker", "barbabietola", "snack", "salato", "sano", "spuntino"]
      },
      {
        "titolo": "Pane Fritto Dolce",
        "contenuto": "Il pane fritto dolce è un dolce semplice e goloso, perfetto per un dessert o una merenda speciale. Realizzato con fette di pane morbido, zucchero, cannella e un po' di burro, viene fritto fino a doratura, creando una crosticina croccante e un interno soffice.",
        "immagine": "/images/pane_fritto_dolce.jpeg",
        "tags": ["pane fritto", "dolce", "dessert", "merenda", "cannella", "zucchero"]
      },
      {
        "titolo": "Pasta alla Barbabietola",
        "contenuto": "La pasta alla barbabietola è un piatto colorato e saporito, che unisce il gusto delicato della barbabietola alla semplicità della pasta fresca. Preparata con farina, barbabietola cotta e un pizzico di sale, questa pasta è perfetta con sughi leggeri o anche solo con burro fuso e parmigiano.",
        "immagine": "/images/pasta_barbabietola.jpeg",
        "tags": ["pasta", "barbabietola", "vegetariano", "piatto colorato", "succo di barbabietola", "ricetta sana"]
      },
      {
        "titolo": "Torta Paesana",
        "contenuto": "La torta paesana è un dolce tipico della tradizione lombarda, ricca di sapore e storia. Preparata con ingredienti semplici come pane raffermo, cacao, latte, uova e frutta secca, è un dessert rustico e umido, perfetto per accompagnare una tazza di tè o un caffè. Il suo gusto intenso e la consistenza morbida la rendono ideale per ogni occasione.",
        "immagine": "/images/torta_paesana.jpeg",
        "tags": ["torta", "paesana", "tradizione", "dolce rustico", "cacao", "frutta secca", "colazione", "dessert"]
      }
    ]
    res.json(bacheca)
});

// avviamo il server, mettendolo in ascolto sulla porta indicata
app.listen (port,() => {
    console.log (`Server is running on http://localhost:${port}`)
    console.log(`The server's bacheca endpoint is available at http://localhost:${port}/bacheca`);

})
