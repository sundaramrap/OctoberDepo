// Making an objectvb n

const people = {
  name: "Alize",
  age: 25,
  occupation: function () {
    console.log(`My name is ${this.name},work at Tesla`);
  },
};

people.occupation();
