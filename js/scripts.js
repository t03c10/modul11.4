function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " zl.");
}

var iPhone6s = new Phone("Apple", 2550, "gold");
var galaxyS6 = new Phone("Samsung Galaxy S6", 1999, "black");
var onePlus = new Phone("OnePlus One", 1825, "silver");

iPhone6s.printInfo();
galaxyS6.printInfo();
onePlus.printInfo();



function Patient(firstName, age, timeSpent) {
    this.firstName = firstName;
    this.age = age;
    this.timeSpent = timeSpent;
}

Patient.prototype.triageRegister = function () {
    console.log("Patient named " + this.firstName + " aged " + this.age + " has spent " + this.timeSpent + " hours in queue.");
}

var pat1 = new Patient("JoeyS Tribbiani", 37, 4);
var pat2 = new Patient("Monica Geller", 38, 7);
var pat3 = new Patient("Rachel Green", 33, 2);

pat1.triageRegister();
pat2.triageRegister();
pat3.triageRegister();
