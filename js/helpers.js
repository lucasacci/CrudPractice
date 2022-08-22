
export function validarCode(input){
    //expresiones regulares

    let patron = /^[0-9]{1,3}$/;

    if(patron.test(input.value) === true){
        input.className = 'form-control is-valid'
        return true;
    }else{
        input.className = 'form-control is-invalid'
        return false;
    }
}

export function validarTitle(input){

    if(input.value.length >= 3 && input.value.length <=20){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }

}

export function validarDescription(input){

    if(input.value.length >= 10 && input.value.length <= 100){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }

}

export function validarUrl(input){

    let patron = /https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

    if(patron.test(input.value) === true){
        input.className = 'form-control is-valid'
        return true;
    }else{
        input.className = 'form-control is-invalid'
        return false;
    }

}