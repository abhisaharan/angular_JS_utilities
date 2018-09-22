a = [2,4,6,7];
var i;
for (i=0; i<= a.length; i++) {
    if (a[i] === 4) {
        a.splice(i,i);
    }
}
console.log(a);