//A_1
console.log("----------------------------------------");
console.log("A_1");

function max(num) {
	var maxf = num[0];
for(var i = 1 ; i <num.length; i++) {
	if(num[i] > maxf) {
		maxf = num[i];
		}
	}
		return maxf;
}
var num = [1,2,4,5];
console.log(max(num));
var num = [5,2,7,1,6];
console.log(max(num));

console.log("----------------------------------------");










console.log("A_2");
function calculate(args) {
		let result;
		if(args.op==="+"){
				result=args.n1+args.n2;
		} else if (args.op==="-"){
			result=args.n1-args.n2;
		} else {
				result ="Not supported";
		}
		return result;
}


var text = {
  op: "+",
  n1: 1,
  n2: 3
};
console.log(calculate(text));



console.log("----------------------------------------");

//A_3
// args = JSON.stringify(args)

console.log("A_3");
var avgpric;
var a;
var avgprice = 0;
function avg(data){
	for (var i = 0; i < a.products.length; i++) {
		var avgprices = parseInt(a.products[i].price);
		avgprice += avgprices;
	}
	avgpric = avgprice/a.products.length;
	console.log(avgpric);
}

avg(a = {
	size: 3,
	products: [
		{
			name: "Product 1",
			price: 100
		},
		{
			name: "Product 2",
			price: 700
		},
		{
			name: "Product 3",
			price: 250
		}
	]
});
console.log("----------------------------------------");
