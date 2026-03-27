const tarefas = [];

export function criarTarefa(req, res){
    const {titulo} = req.body;

    const novaTarefa = {
        id: tarefas.length + 1,
        titulo
    };

    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
}

export function listarTarefas(req, res){
    res.json(tarefas);
}