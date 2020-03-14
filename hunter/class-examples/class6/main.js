class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  getInterests() {
    return(this.interests)
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}

let personA = new Person("Angel", "Chen", 26, "F", "vegetable classification");

personA.greeting()
personA.farewell()
console.log(personA.getInterests())
