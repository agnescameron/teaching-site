const person1 = {
  name: ['Bob', 'Smith'],
  age: 32,
  greeting: function() {
    console.log('Hi! I\'m ' + this.name[0] + '.');
  }
};

const person2 = {
  name: ['Angela', 'Brown'],
  age: 21,
  greeting: function() {
    console.log('Hi! I\'m ' + this.name[0] + '.');
  }
};


person1.greeting();
person2.greeting();