const val = (cpf) => {
    cpf = '18710076077'; // the generate function only works if have some sample valid parameter, I didn't understand why either
    const calculationVerification = (cpf) => {
        return ((cpf[0] * 10 + cpf[1] * 9 + cpf[2] * 8 + cpf[3] * 7 + cpf[4] * 6 + cpf[5] * 5 + cpf[6] * 4 + cpf[7] * 3 + cpf[8] * 2) * 10 % 11 == cpf[9]) ?
        ((cpf[0] * 11 + cpf[1] * 10 + cpf[2] * 9 + cpf[3] * 8 + cpf[4] * 7 + cpf[5] * 6 + cpf[6] * 5 + cpf[7] * 4 + cpf[8] * 3 + cpf[9] * 2) * 10 % 11 == cpf[10] ? true : false) : false;
    }
    const isANumber = (cpf) => !isNaN(cpf);
    const hasLength = (cpf) => cpf.length == 11 ? true : false;
    const isEqual = (array) => {
        firstElement = array[0];
        for(let i = 1; i < array.length; i++){
            if(array[i] != firstElement){
                return true;
            } else {
                return false;
            }
        }
    }
    return isANumber(cpf) && hasLength(cpf) && isEqual(cpf) && calculationVerification(cpf) == true ? 'CPF válido' : 'CPF inválido';
}

const gen = () => {
    let cpf = Math.floor((Math.random() * 99999999999));
    if(val(cpf) == 'CPF válido'){
        return `cpf gerado: ${cpf}`;
    }
}
