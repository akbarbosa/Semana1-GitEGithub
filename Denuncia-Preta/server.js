const app = require("./src/app");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Seu servidor esta rodando na porta ${PORT} e está funcionando`);
});