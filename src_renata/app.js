import express from 'express';
import tarefasRoutes from "./routes/tarefasRoutes.js";

const app = express();
app.use(express.json());

app.use(tarefasRoutes);

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
});