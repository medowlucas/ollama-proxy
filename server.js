import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

// Libera CORS para todas as origens
app.use(cors());

app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const response = await fetch("https://lucaslopes.ddns.net/ollama/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Erro ao conectar com Ollama:", error);
    res.status(500).json({ error: "Erro ao comunicar com Ollama" });
  }
});

app.listen(3000, () => {
  console.log("Proxy rodando na porta 3000");
});
