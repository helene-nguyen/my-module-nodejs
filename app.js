// Pour une présentation de notre séléction littéraire 
// nous utilisons un page web il nous faut donc la libraire http
// afin de créer notre serveur
const http = require('http');
const {
    title
} = require('process');
const myBooks = require('./module');
const myModule = require('./module');




// Création de notre serveur
const server = http.createServer((req, res) => {

    // On court-circuite l'appel automatique du navigateur au favicon.ico
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {
            'Content-Type': 'image/x-icon'
        });
        res.end();
        return;
    }

    // On envoi les header de la réponse http
    // ici nous voulons une réponse de type text encodé en UTF-8
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    myModule.sortArray();
    // On écrit l'entête de notre page html
    res.write(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge">    <title>Document</title><style>
    body {display:flex;justify-content:center;align-items:center;padding-top:5em;}
    table,td {border: 1px solid #333;padding :1em;}
    th{padding:1em 0;}
    thead,tfoot {background-color: #333;color: #fff;}
    </style></head><body>`);

    // Corps de la page
    res.write(`<table>
    <thead>
        <tr>
            <th colspan="5" >My collection</th>
        </tr>
    </thead>
    <tbody>
        ${myBooks.titles()}
        ${myBooks.infos(`title`)}
        ${myBooks.infos(`language`)}
        ${myBooks.infos(`country`)}
        ${myBooks.infos(`author`)}
        ${myBooks.date()}
        ${myBooks.fromNow()}        
    </tbody>
</table>`)
    console.log(myModule.sortArray())
    // On écrit le pied de page de notre page html
    res.write('</body></html>');
    // On à fini d'envoyer nos informations au client
    res.end();
});

// Notre serveur sera sur le port 3000
server.listen(3000, () => {
    console.log('Running server on http://localhost:3000');
});