import service from "../service/EmpregadoService.js";

class EmpregadosController {
    async findAll(req, res) {
        const empregados = await service.findAll();

        res.json(empregados);
    }

    async findById(req, res) {
        try {
            const empregado = await service.findById(req.params.id);
            return res.json(empregado);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async save(req, res) {
        try {
            const empregado = await service.save(req.body);

            return res.json(empregado);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const empregado = await service.update(id, req.body);

            return res.json(empregado);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const empregado = await service.delete(id);

            return res.status(204).json(empregado);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default new EmpregadosController();
