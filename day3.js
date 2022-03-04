//Q: What are classes in javascript, explain using an example

/*A: ***Classes allows us to store different parameters of objects. For instance, we can store different parameters of objects.
Classes are also usefull as a template for creating new objects*/
class Building {
    constructor(type) {
      this._type = type;
      this._bedrooms = 1;
    }
    // we define the class building and using constructor give it different properties (type)
    get type() {
      return this._type;
    }
    //using type we can define if it's a house, flat, apartment, cottage, etc.
    get bedrooms() {
      return this._bedrooms;
    }
    //parameter bedrooms stores the number of bedrooms
    incrementBedrooms() {
      this._bedrooms ++;
    }
  }
//if needed, we can use the function to increment no. of bedrooms

// Q:How do you do inheritance in classes, give an example.
// A: We can use inheritance using keyword extends, that extends the "parent" parameters of the class we defined earlier
class Apartment extends Building {
    constructor(type,washrooms) {
        super(type);
        this._wash = washrooms;
    }
}


// Q: What will happen if you write a constructor in a class more than once ?
// A: it gets syntax error