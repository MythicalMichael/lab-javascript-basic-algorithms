
var hacker1 = "Misha"
var hacker2 = prompt("Whats your Navigators name?")

console.log("The Navigators Name is", hacker2)

if(hacker1.length > hacker2.length){
  console.log("The driver has the longest name it has", hacker1.length, "characters")
}
else if(hacker2.length > hacker1.length ){
  console.log("Yo navigator has the longest name it has", hacker2.length, "characters")
}
else if(hacker1.length === hacker2.length){
  console.log("Wow you got equally long names",hacker2.length,"characters")
}
  else{
    console.log("You fucked up")

  }
var splitAndUppercase = ""
for(var i = 0; i < hacker1.length ; i++ ){

  splitAndUppercase +=  hacker1[i].toUpperCase() + " "

}
var printNameInReverse = ""
console.log(splitAndUppercase)

for (var k = hacker2.length - 1; k >= 0 ; k-- ){

  printNameInReverse += hacker2[k]
}
console.log(printNameInReverse)
