const lista = ["Sabão", "Shampoo", "Arroz", "Feijão", "Pão",
                  "Alface", "Tomate", "Pneu", "Bola", "Banana"]

lista.push("pneu");
lista.push("linguiseta");                
console.log(lista);
console.log(lista[7]);
console.log(lista.length)
produtos = []

lista.pop;
nlista = lista.splice(3,4);
console.log(nlista);
lista1 = lista.slice(0,5);
lista2 = lista.slice(5);

console.log(lista1);
console.log(lista2);

lista1.push("");
lista2.push("");

listacompleta = lista1.concat(lista2);

console.log(listacompleta);
