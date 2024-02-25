
function emailValidation(email){

    let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regExp.test(email);
}

function capitalizeFirstWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

function dateToTimestamp(date){
   
    let date = new Date(date);
    return date.getTime();

}

function timeStampToDate(timeStamp){

    return new Date(timeStamp);
}

function dateToDateString(timeStamp){

    return  timeStampToDate(timeStamp).toDateString();
}

function dateToLocalString(timeStamp){

    return timeStampToDate(timeStamp).toLocaleString();
}

function getyear(date)
{
    return date.getFullYear();
}

function getmonth(date){

    return date.getMonth();
}

function getdate(date){

    return date.getDate();
}

function formatDateCustom(date,format){

    let dateArray={};
    dateArray['year'] = timeStampToDate(date).getyear();
    dateArray['month'] = timeStampToDate(date).getmonth();
    dateArray['day'] = timeStampToDate(date).getdate();

    let date= '';

    switch (format) {
        case 'YYYY/MM/DD':

            date = formatOne(dateArray);
            
            break;

        case 'DD/MM/YYYY':

            date = formatTwo(dateArray);
            
            break;

        case 'MM/DD/YYYY':

            date = formatThird(dateArray);
            
            break;
    
        default:
            break;
    }

    return 
}

function formatOne(dateArray){

    return dateArray.year+'/'+dateArray.month+'/'+dateArray.day;

}

function formatTwo(dateArray){

    return dateArray.day+'/'+dateArray.month+'/'+dateArray.year;

}

function formatThird(dateArray){

    return dateArray.month+'/'+dateArray.day+'/'+dateArray.year;

}


module.exports ={
    emailValidation,
    capitalizeFirstWord,
    dateToTimestamp,
    timeStampToDate,
    dateToDateString,
    dateToLocalString,
    getyear,
    getmonth,
    getdate,
    formatDateCustom
} ; 