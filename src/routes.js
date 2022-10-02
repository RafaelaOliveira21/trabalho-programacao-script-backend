import { Router } from "express";
import empregadosController from "./controller/EmpregadoController.js";

const router = Router();
router.get("/empregados", empregadosController.findAll);
router.get("/empregados/:id", empregadosController.findById);
router.post("/empregados", empregadosController.save);
router.put("/empregados/:id", empregadosController.update);
router.delete("/empregados/:id", empregadosController.delete);

export default router;
