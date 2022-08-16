let pessoa = prompt("Deseja comer mais coxinha? \n S: sim \n N: não").toUpperCase()
let soma = 0
while(pessoa === "S"){
    soma = soma + 2.50
    console.log(soma)
    pessoa = prompt("Deseja comer mais coxinha? \n S: sim \n N: não").toUpperCase()
}
console.log("Soma =", soma)