export function linkValidation(link){

    let regExp = /^(ftp|http|https):\/\/[^ "]+$/;;
    return regExp.test(link);
}