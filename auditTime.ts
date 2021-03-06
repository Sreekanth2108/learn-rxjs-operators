import { from, interval } from 'rxjs';
import { auditTime } from 'rxjs/operators'

// emit a number every 1sec
const source = interval(1000);
// wait for 2 sec and emit the lastest number from source
source.pipe(auditTime(2000))
.subscribe(x => console.log(x));
// output: 
// 2
// 5
// 8
// 11
// 14
// ...