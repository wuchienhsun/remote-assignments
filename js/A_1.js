//A_1
console.log("----------------------------------------");
console.log("A_1");
/*
var sort = [];
function sortNumber(a,b)
{
return a - b
}

function Max(...num) {
	var sortednum = num.sort(sortNumber);
  /*console.log(sortednum);
  console.log(num.length);
  for (var i = 0; i <num.length; i++) {
    sort = sortednum.pop();
    return sort;
  }
}
console.log("console.log(Max(100,500,7000, 324324,222));");

console.log(Max(100,500,7000, 324324,222));

console.log("console.log(Max(23423,111111,555555,2302130123));");
console.log(Max(23423,111111,555555,2302130123));
*/
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








// A_2
// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
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
var prop = 'op';
var n1 = 'n1';
var n2 = 'n2';
var o = {
	[prop]: "+",
	[n1]: 1,
	[n2]: 2
}
console.log(calculate(o));


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
