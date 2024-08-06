function Animal(animal, nomeCientifico, raca, peso){
    this.animal = animal;
    this.nomeCientifico = nomeCientifico
    this.raca = raca;
    this.peso = peso;
}

const animal1 = new Animal('Gato', 'Felis catus', 'Persa', '4kg');
const animal2 = new Animal('Cachorro', 'Canis familiaris', 'Pastor-Alemão', '35kg');

console.log(animal1);
console.log(animal2);