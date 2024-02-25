export function dateToTimestamp(dateString){
   
    let date = new Date(dateString);
    return date.getTime();

}