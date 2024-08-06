function Animal(nome, animal, nomeCientifico, raca, peso){
    this.nome = nome;
    this.animal = animal;
    this.nomeCientifico = nomeCientifico;
    this.raca = raca;
    this.peso = peso;

}

function Gato(nome, raca, peso){
    Animal.call(this, nome, 'Gato', 'Felis catus', raca, peso)
}

function Cachorro(nome, raca, peso){
    Animal.call(this, nome, 'Cachorro', 'Canis familiaris', raca, peso)
}

const gatoDaMaria = new Gato('Felix', 'Persa', '5kg');
const gatoDoLucas = new Gato('Floquinho', 'Siamês', '4kg')
const cachorroDoJoao = new Cachorro('Rex', 'Pastor-Alemão', '35kg');
const cachorroDaMarta = new Cachorro('Gudan', 'Husky Siberiano', '25kg');

console.log(gatoDaMaria);
console.log(gatoDoLucas);
console.log(cachorroDoJoao);
console.log(cachorroDaMarta);