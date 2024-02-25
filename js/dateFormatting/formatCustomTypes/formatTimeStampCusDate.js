import {timeStampToDate} from '../formatMainTypes/timeStampToDate.js';
import {setDateArray} from './setDateArray.js';
import {formatCustom} from './formatCustom.js';

export function formatTimeStampCusDate(dateString,format){

    
    let dateFormat = timeStampToDate(dateString);
    let dateArrayToFormat = setDateArray(dateFormat);
    return formatCustom(dateArrayToFormat,format);

   
}