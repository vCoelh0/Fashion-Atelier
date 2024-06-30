// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const app = express();
app.use(express.json());


app.use(cors({
  origin: 'http://localhost:3000' 
}));

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

app.post("/pergunte-ao-chatgpt", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt é obrigatório" });
  }

  const model = "gpt-3.5-turbo";
  const role = "assistant";
  const max_tokens = 20;

  try {
    
    const completion = await openai.chat.completions.create({
      messages: [{ role: role, content: prompt }],
      model: model,
      max_tokens: max_tokens,
    });

    res.json({
      completion: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Erro ao chamar a API OpenAI:", error);
    res.status(500).json({ error: "Erro no servidor ao chamar a API OpenAI" });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Em execução na porta ${PORT}`));
