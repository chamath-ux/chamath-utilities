
import {formatOne, formatTwo, formatThird} from '../formatTypes/mainFormat.js'

export function formatCustom(dateString,format){

    let date= '';

    switch (format) {
        case 'YYYY/MM/DD':

            date = formatOne(dateString);
            
            break;

        case 'DD/MM/YYYY':

            date = formatTwo(dateString);
            
            break;

        case 'MM/DD/YYYY':

            date = formatThird(dateString);
            
            break;
    
        default:
            break;
    }

    return date;
}