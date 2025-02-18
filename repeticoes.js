//Básico

//EX 1

// let num1 = prompt("Digite um número")

// for (let i = 1; i <= num1; i++) {
//     console.log(`contagem : ${i}`);
// }


//EX 01

// let num = prompt("Digite um numero");
// let contador = 1;
// while (contador <= num) {
//     console.log("Contador :", contador);
//     contador++;
// }

//EX 02
// let num = prompt("Insira um número");

// for (let contador = 1; contador <=10; contador++) {
//     let Calculo = num * contador;
//     let mensagem = `${num} x ${contador} = ${Calculo}`; 
//     console.log(mensagem);
// }


//EX 03

// let num = prompt("Digite um número inteiro e positivo")
// let resultado = 0;
// for (let i = 1; i <= 50; i++) {
//     resultado += i;
//     console.log(`Somatório ${resultado}`);
// }

// Intermediário

//EX 1

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0)
//         console.log(`${i}`)
      
// }

//EX 2
let valor = 35;
let num1 = 0;
do {
    num1 = prompt("Digite um Número")

if (num1>0 && num1 <=100) {
    if (valor == num1)
        window.alert("Parabéns !! Você Acertou !!");
} 

else if (valor<num1){
    window.alert("O número digitado é maior, tente novamente");
}

else if (valor>num1) {
    window.alert("O número digitado ")
}

else {
    window.alert("Digite um numero entre 1 e 100");
} 

}while(valor!=num1);
