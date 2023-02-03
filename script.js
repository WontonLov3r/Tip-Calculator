//these variables ask for user input using the prompt command
let billAmount = prompt("What is your bill amount: ")
let numberOfDiners = prompt("Total number of Diners (How many people are dining with you): ")
let serviceRating = prompt("What the service there Good, Great, or Terrible: ")
billAmount = parseInt(billAmount)
numberOfDiners = parseInt(numberOfDiners)

//this function returns the tip in relation to the service quality
const tip = service => {
    switch (service) {
        case 'Good':
            return .15;
            break;
        case 'Great':
            return .2;
            break;
        case 'Terrible':
            return .1;
    }
}

//function calculates the total tip
const totalTip = () => {
  return tip(serviceRating) * billAmount;
}

//function calculates the total bill including the tip 
const totalBillIncludingTip = () => {
  return (tip(serviceRating) * billAmount) + billAmount;
}

//function calculates the total amount of money owed by each person
const tipPerPerson = () => {
  return ((tip(serviceRating) * billAmount) + billAmount)/numberOfDiners;
}

//prints the total tip, the total bill including the tip, and the individual money owed
console.log("Total tip: " + totalTip());
console.log("Total Bill including tip: " + totalBillIncludingTip())
console.log("Individual Money owed: " + tipPerPerson())


