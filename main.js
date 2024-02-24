
function emailValidation(email){

    let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regExp.test(email);
}

function capitalizeFirstWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports ={
    emailValidation,
    capitalizeFirstWord
} ;