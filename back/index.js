import express from 'express' //bibliothque pour cree un serveur 
import dotenv from 'dotenv' // la bibliothque pour charger les variables d'environnement depuis un fichier .env

dotenv.config() // lire le fichier env a la racine du projet et charger les variables d'environnement dans process.env

const app = express() // initialiser l'application express
const port = process.env.PORT ||4000 // definir le port sur lequel le serveur va ecouter les requetes

app.get('/', (req, res) => {
    res.send('Mon premier backend marche !')
}) // definer une route 

app.listen(port, () => {
    console.log("serveur tourne bien au " + port)
}) // demarrer le serveur et ecouter les requetes sur le port defini