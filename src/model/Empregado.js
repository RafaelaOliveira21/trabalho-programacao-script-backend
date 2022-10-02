import { model, Schema } from "mongoose";

const EmpregadoSchema = new Schema({
    id: {
        type: Number,
    },
    nome: {
        type: String,
        required: true,
    },
    funcao: {
        type: String,
        required: true,
    },
    salario: {
        type: Number,
        required: true,
    },
});

export default model("Empregado", EmpregadoSchema);
