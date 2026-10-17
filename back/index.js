require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middlewares
app.use(express.json());

// Connexion à MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connexion à MongoDB réussie !");
  } catch (error) {
    console.error("❌ Erreur de connexion MongoDB :", error.message);
    process.exit(1);
  }
}

// Route de test
app.get("/", (req, res) => {
  res.json({ message: "Serveur Express opérationnel !" });
});

// Démarrage après connexion à la base
async function startServer() {
  await connectDB();

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur le port ${PORT}`);
  });
}

startServer();