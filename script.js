function gerarSenha(tamanhoSenha, incluiLowerCase, incluiUpperCase, incluiNumeros, incluiSimbolos){
    
    //definindo os caracteres que podem estar na senha
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numerosChars = "0123456789";
    const simbolosChars = ".+-*,?/;:!@#$%&-_=£¢¬§";

    let caracteresPermitidos = "";
    let senha = "";

    //confere quais caracteres o usuario quer na senha
    caracteresPermitidos += incluiLowerCase ? lowerCaseChars : "";
    caracteresPermitidos += incluiUpperCase ? upperCaseChars : "";
    caracteresPermitidos += incluiNumeros ? numerosChars : "";
    caracteresPermitidos += incluiSimbolos ? simbolosChars : "";

    //não gera senhas, caso o usuario não utilize o tamanho e tipos de caracteres mínimos
    if(tamanhoSenha <= 0){
        return `O tamanho da senha deve ser de pelo menos 1 caractere.`;
    }
    if(caracteresPermitidos.length === 0){
        return `Pelo menos um tipo de caractere deve ser permitido`;
    }

    //escolhe os caracteres de forma aleatória
    for(let i = 0; i < tamanhoSenha; i++){
        const randomIndex = Math.floor(Math.random() * caracteresPermitidos.length);
        senha += caracteresPermitidos[randomIndex];
    }

    return senha;       //não se esquecer de dar um retorno
}

//parâmetros
const tamanhoSenha = 12;
const incluiLowerCase = true;
const incluiUpperCase = true;
const incluiNumeros = true;
const incluiSimbolos = true;

const senha = gerarSenha(tamanhoSenha, incluiLowerCase, incluiUpperCase, incluiNumeros, incluiSimbolos);

console.log(`Sua nova senha: ${senha}`);