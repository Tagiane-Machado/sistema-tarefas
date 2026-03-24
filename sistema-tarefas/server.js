const express = require("express");
const app = express();

app.use(express.json());

let tarefas = [];
let idAtual = 1;

// Criar tarefa
app.post("/tarefas", (req, res) => {
  const { nome, status } = req.body;

  if (!nome || nome.trim() === "") {
    return res.status(400).json({
      erro: "O nome da tarefa é obrigatório."
    });
  }

  const novaTarefa = {
    id: idAtual++,
    nome,
    status: status || "pendente"
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
});

// Listar tarefas
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

// ATUALIZAR MIUNHA PARTE
app.put("/tarefas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, status } = req.body;

  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({
      erro: "Tarefa não encontrada."
    });
  }

  if (nome !== undefined) {
    if (nome.trim() === "") {
      return res.status(400).json({
        erro: "O nome não pode ser vazio."
      });
    }
    tarefa.nome = nome;
  }

  if (status !== undefined) {
    tarefa.status = status;
  }

  res.json(tarefa);
});

// DELETAR MINHA PARTE
app.delete("/tarefas/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = tarefas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({
      erro: "Tarefa não encontrada."
    });
  }

  const removida = tarefas.splice(index, 1);

  res.json({
    mensagem: "Tarefa deletada com sucesso",
    tarefa: removida[0]
  });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});