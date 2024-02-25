import {setDateArray} from './setDateArray.js';
import {formatCustom} from './formatCustom.js';

export function formatDateCustom(formatDate,format){

    let date = new Date(formatDate)
    let dateArrayToFormat = setDateArray(date);
    return formatCustom(dateArrayToFormat,format);
}