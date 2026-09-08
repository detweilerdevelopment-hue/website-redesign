import fs from 'node:fs';
import assert from 'node:assert/strict';
const source = fs.readFileSync('src/main.jsx', 'utf8');
const calculate = new Function('trip', source.match(/function calculate\(trip\) \{([\s\S]*?)\n\}/)[1]);
let count = 0;
for (const travelers of [1,2,3,4]) for (const stay of ['nice','monaco']) for (const race of ['none','grandstand','terrace','yacht']) for (const boat of [false,true]) for (const transfer of [false,true]) for (let boatGuests=1;boatGuests<=travelers;boatGuests++) {
 const p=calculate({travelers,stay,race,boat,transfer,boatGuests});
 assert.equal(p.total,p.today+p.later);
 assert.equal(p.boat,boat?210*boatGuests:0);
 assert.equal(p.transfer,transfer?120:0);
 assert.ok(p.total>=1890*travelers);
 count++;
}
assert.equal(calculate({travelers:2,stay:'monaco',race:'grandstand',boat:true,boatGuests:1,transfer:true}).total,14590);
console.log(`${count} pricing combinations passed, including shared transfer and partial-group activity.`);
