//index.js
import dotenv from "dotenv";
import express from "express";      // Requisição do pacote do express
import roteadorUsuario from "./routes/usuario.js";



dotenv.config();

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

//index.js
app.use(express.json());

app.use(roteadorUsuario);

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    nome: "Raica Pereira de Oliveira",      // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});



app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});