import express from 'express';
import { criarTarefa, listarTarefas } from '../controllers/tarefasController.js';

const router = express.Router();

router.post('/tarefas', criarTarefa);
router.get('/tarefas', listarTarefas);

export default router;