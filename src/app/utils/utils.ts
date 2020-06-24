import { TimerLog } from '../models/timerLog.model';

export default class Utils {

    /*--- To sort a list of object on the basis of attribute and order ---*/
    static sort(list: {}[], field: string, sortOder: number) {
        let tempList = [];
        if (sortOder > 0) {
            tempList = list.sort((a, b) => {
                return typeof(a[field]) === 'string' ? b[field].localeCompare(a[field]) : (b[field] - a[field]);
            });
        } else {
            tempList = list.sort((a, b) => {
              return typeof(a[field]) === 'string' ? a[field].localeCompare(b[field]) : (a[field] - b[field]);
            });
        }
        return tempList;
    }

    /*--- To filter log based on type ---*/
    public filterLog(timerLog: TimerLog[] , logType: number) {
        if (logType) {
            return timerLog.filter((log) => {
                return log && log.action === logType;
            });
        }
        else{
            return timerLog;
        }
    }
}
