
import { getdate, getmonth, getyear} from "../getMDY/mainMDY.js";

export function setDateArray(date){

    let dateArray={};
    
    dateArray['year'] = getyear(date);
    dateArray['month'] = getmonth(date);
    dateArray['day'] = getdate(date);

    return dateArray;
}