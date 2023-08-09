const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0


let location = 'RSA'
let shipping = null
let currency = '$'

if (location === 'RSA') { shipping = 400; currency = 'R';}

else if (location === 'NAM')
{shipping = 600} 
else {shipping = 800}

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED




if (shoes + batteries + pens + shirts + toys > 1000 && customers < 2) {
	if ((location === 'NAM' || location === 'RSA')) {
		    shipping = 0
		}
	}


if (shipping === 0 && customers !== 1) { console.log(FREE_WARNING) }

location === 'NK' ? console.log(BANNED_WARNIN) : console.log('price', currency, shoes + batteries + pens + shirts + toys + shipping)

let customers = 1

currency = null