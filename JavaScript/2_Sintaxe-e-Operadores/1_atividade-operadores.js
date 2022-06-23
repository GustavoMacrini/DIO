function igual(a,b){
    if(a===b){
        return true;
    }
    else{
        return false;
    }
}

function maiormenor(a,b){
    let msg = "";
    soma = a+b;
    msg = "Sua soma é " + soma + ", que é "; 

    if(soma > 10){
        msg += "maior que 10 e ";
    }
    else{
        msg += "menor que 10 e ";
    }

    if(soma > 20){
        msg += "maior que 20.";
    }
    else{
        msg += "menor que 20.";
    }

    return msg;
}

function comparar(a,b){
    let msg = "";

    if(igual(a,b)){
        msg = "Os números " + a + " e " + b + " são iguais. ";
    }
    else{
        msg = "Os números " + a + " e " + b + " não são iguais. ";
    }

    return msg;
}

console.log(comparar(10,20));
console.log(maiormenor(10,20));