// {} are used to create an object

// collection of key : value pairs
var mustang = {
  name: "mustang", //property
  year: 1998,
  colors: ["red", "black", "yellow"],
  isFirstOwner: true,

  // method
  // when a funciton is made or attaced with an object, it is called method
  //  details : ()=>{
  //  console.log(this)
  //  }
  // in case of arrow function inside an object "this " kwyword will return the global object only

  // it will return the object itself in the case of anonymous function
  details: function () {
    console.log(this.name);
    console.log(this.year);
    console.log(this.colors);
  },
};
// mustang.details()

// this keyword

// if we use this keyword outside any object, class , function it will give us global object as a result
// console.log(this); //global object (web info)

// classes
class Car {
  // properties

  name = "mustang";
  year = 1998;
  colors = ["red", "black", "yellow"];
  isFirstOwner = true;

  // method
  details = function () {
    console.log(`Car Name : ${this.name} \nYears : ${this.year}\nColors Available : ${this.colors}`)
  };
}

// object // instance
var car1 = new Car();
var car2 = new Car();
