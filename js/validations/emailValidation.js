export function emailValidation(email){

    let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regExp.test(email);
}