//1
function convertToUSD(price){
  return price*1.4.toFixed(2)*1;
}

//2
function convertToBRL(price){
  
  return price*0.99*5.7.toFixed(2) * 1;
}
//3
// console.log(convertToBRL(200));
// console.log(convertToUSD(100));

//4

function convertMoney(currency, value) {
  if(currency=== "usd") {
    return convertToUSD(value);
  } else if(currency === "brl") {
    return convertToBRL(value);
  } else {
    return "Please enter correct type of currency! USD/BRL!";
  }
}
function convertTest(currency, value, expValue) {
  let conversion=convertMoney(currency, value);
  return `Your expected value is ${expValue} and the conversion is ${conversion}`
}
console.log(convertTest('brl', 1, 7.28))
