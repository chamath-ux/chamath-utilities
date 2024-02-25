import {emailValidation} from './validations/emailValidation.js';
import {capitalizeFirstWord} from './capitalizeFirstWord.js';
import {dateToDateString, dateToLocalString, dateToTimestamp, timeStampToDate } from './dateFormatting/formatMainTypes/mainFormatTypesMain.js';
import {formatDateCustom, formatTimeStampCusDate} from './dateFormatting/formatCustomTypes/mainFormatCustomTypes.js';
import { getdate, getmonth, getyear } from './dateFormatting/getMDY/mainMDY.js';
import { emailValidation, linkValidation } from './validations/mainValidationFile.js';

module.exports= {
    emailValidation,
    capitalizeFirstWord,
    dateToTimestamp,
    timeStampToDate,
    dateToDateString,
    dateToLocalString,
    formatDateCustom,
    formatTimeStampCusDate,
    getdate,
    getmonth,
    getyear,
    linkValidation
} ; 