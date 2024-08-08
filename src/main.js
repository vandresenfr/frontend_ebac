const alunos = ['Pedro', 'Lucas', 'Paulo', 'Camila', 'Fernando']
const notas = [5.0, 6.7, 4.8, 10.0, 8.7]

const alunosNotas = alunos.map(function(nome, i){
    return {
        nome: nome,
        nota: notas[i]
    }
})

console.log(alunosNotas)

const filtraAlunosAprovados = (aluno) => aluno.nota >= 6.0;
const alunosAprovados = alunosNotas.filter(filtraAlunosAprovados);

console.log(alunosAprovados);