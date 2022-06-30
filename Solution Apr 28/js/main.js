
function fakeBin(x) { return x.split('').map(n => n < 5 ? 0 : 1).join(''); }

function fakeBin(x){ return x.split('').map(n => n < 5 ? 0 : 1).join('')
}

function digitize(n){
    return Array.from(String(n), Number).reverse()
}

const summation = function (num) { const sum = 0; for (var i = 1; i <= num; i++) { sum += i; } return sum; }

const summation = function(num){ const sum = 0; for(let i =1; i<= num; i++) {sum += i} return sum}

function countBy(x, n) { let z = []; for (i=1; i <= n; i++){ z.push(x * i) } return z; }

function countBy(x,n){ let z =[]; for (i = i; i<=n; i++){ z.push(x*i)} return z}