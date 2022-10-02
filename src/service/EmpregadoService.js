import { model } from "mongoose";
import EmpregadoResponse from "../dto/EmpregadoResponse.js";
import Empregado from "../model/Empregado.js";

class EmpregadoService {
    #repository;

    constructor() {
        this.#repository = model("Empregado", Empregado.schema);
    }

    async findAll() {
        const empregados = await this.#repository.find({});
        return empregados.map(EmpregadoResponse.of);
    }

    async findById(id) {
        const empregado = await this.#repository.find({ id });

        this.#validarEmpregadoPorId(empregado, id);

        return EmpregadoResponse.of(empregado[0]);
    }

    async save(request) {
        request.id = await this.#getNextId();

        this.#validarEmpregado(request);

        const empregado = await this.#repository.create(request);
        return EmpregadoResponse.of(empregado);
    }

    async update(id, empregado) {
        const empregadoEncontrado = await this.#repository.find({ id });

        this.#validarEmpregadoPorId(empregadoEncontrado, id);

        this.#validarEmpregado(empregado);

        await this.#repository.updateOne({ id }, empregado);
        const empregadoAtualizado = await this.#repository.find({ id });

        return EmpregadoResponse.of(empregadoAtualizado[0]);
    }

    async delete(id) {
        const empregado = await this.#repository.find({ id });

        this.#validarEmpregadoPorId(empregado, id);

        await this.#repository.deleteOne({ id });
    }

    async #getNextId() {
        const last = await this.#repository.find({}).sort({ id: -1 }).limit(1);
        return last.length > 0 ? last[0].id + 1 : 1;
    }

    #validarEmpregadoPorId(empregado, id) {
        if (empregado.length === 0) {
            throw new Error(`Empregado de id ${id} não encontrado`);
        }
    }

    #validarEmpregado(empregado) {
        if (empregado.funcao === undefined) {
            throw new Error("A função do vendedor é obrigatória");
        } else if (empregado.salario === undefined) {
            throw new Error("O salário do vendedor é obrigatório");
        } else if (empregado.nome === undefined) {
            throw new Error("O nome do vendedor é obrigatório");
        }
    }
}

export default new EmpregadoService();
