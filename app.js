
const sum = (a,b) =>{ return a+b}

console.log(sum(5,5));

// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
let oneDollarIs ={
    "JPY": 152.72,
    "EUR":0.93,
    "GBP":0.77,
}
let oneYenToPound ={
    "GBP":0.0050,
    "USD":0.0065,
    "EUR":0.0061

}

const fromEuroToDollar = euro =>{
    return euro*oneEuroIs['USD'];
}
const fromDollarToYen = dollar =>{
    return dollar*oneDollarIs["JPY"];
}
const fromYenToPound = yen =>{
    return yen*oneYenToPound["GBP"]
}


 console.log(fromEuroToDollar(6.8));
 console.log(fromDollarToYen(7.5));
 console.log(fromYenToPound(100.5));
 
 
module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound}