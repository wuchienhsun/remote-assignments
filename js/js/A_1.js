//A_1
console.log("A_1");
var sort = [];
function sortNumber(a,b)
{
return a - b
}

function Max(...num) {
	var sortednum = num.sort(sortNumber);
  /*console.log(sortednum);
  console.log(num.length);*/
  for (var i = 0; i <num.length; i++) {
    sort = sortednum.pop();
    return sort;
  }
	console.log(Max(100,500,7000, 324324,222));

}
console.log("console.log(Max(100,500,7000, 324324,222));");

console.log(Max(100,500,7000, 324324,222));


// A_2
// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

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
var cal = {
	calculate: function(args) {
			if(args.)
	}
}


//A_3
console.log("A_3");
var a
function avg(data){
	console.log("return (a.products[0].price+a.products[1].price+a.products[2].price)/3;");
	return (a.products[0].price+a.products[1].price+a.products[2].price)/3;
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
