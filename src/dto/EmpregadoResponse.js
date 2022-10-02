class EmpregadoResponse {
    constructor(empregado) {
        this.id = empregado.id;
        this.nome = empregado.nome;
        this.funcao = empregado.funcao;
        this.salario = empregado.salario;
    }

    static of(empregado) {
        return new EmpregadoResponse(empregado);
    }
}

export default EmpregadoResponse;
