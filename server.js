import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 JARVIN CORE AI
const SYSTEM_PROMPT = `
Você é o JARVIN QUANT AI.

Analise o mercado e responda:

📊 Sinal: COMPRA / VENDA / AGUARDAR  
📈 Confiança: 0–100%  
⚠️ Risco: BAIXO / MÉDIO / ALTO  

Regras:
- só COMPRA/VENDA se confiança > 75%
- caso contrário AGUARDAR

Inclua:
- tendência
- suporte/resistência
- confluência técnica
- plano de trade

Nunca prometer lucro.
`;

app.post("/analyze", (req, res) => {
  const input = req.body.message;

  // versão simulada (depois colocamos IA real)
  const response = {
    signal: "AGUARDAR",
    confidence: 65,
    risk: "MÉDIO",
    trend: "mercado lateral sem força",
    entry: null,
    stop: null,
    takeProfit: null
  };

  res.json(response);
});

app.listen(3000, () => {
  console.log("JARVIN AI rodando");
});
