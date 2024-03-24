# Object-Oriented Programming (II)

## Type inheritance

> Type inheritance refers to the mechanism of data types being derived from a base data type. All classes _inherit_ the base `object` type.

If class A inherits class B, then class A is the `child` of class B, and B is the `parent` of A.

Let's look at the following example:

```
class Animal {
    protected health: number;

    eat = () => {
        this.health += 5;
    }

    talk = (): void => {
        throw new Error("Not implemented");
    }
}

class Parrot extends Animal {
    talk = (): void => {
        console.log("Polly wants a cracker");
    }
}

class Cat extends Animal {
    talk = (): void => {
        console.log("🌊 .·:*¨𝙢𝒆𝙤𝖜¨*:·. 🌊")
    }
}

const cat: Animal = new Cat();
const parrot: Animal = new Parrot();

cat.eat();
cat.talk();
parrot.eat();
parrot.talk();
```

Notice the `extends` keyword - this is what marks inheritance. Classes that inherit the base type have access to all the `public` and `protected` methods and properties, but not `private`

`protected` methods and properties are accessible by the class and all classes that inherit it (all descendants).

Look at the following lines:
```
const cat: Animal = new Cat();
const parrot: Animal = new Parrot();
```

We specified the types of the variables `cat` and `parrot` as the base type of `Animal`, but the actual instances are children of Animal, `Cat` and `Parrot`. 

This is useful when we want to write generic code, that works for all instances of a base type, e.g. if we write a generic function:

```
const feedAnimal = (animal: Animal) => animal.eat();

feedAnimal(cat);
feedAnimal(parrot);
```

The above works because:
> Converting (casting) from a child (more specific) class is possible, e.g. Parrot > Animal. It's not possible to cast a parent to a child class, e.g. Parrot > Animal.

## Interfaces

> Interfaces are a data type that contains only method definitions, without implementation.

Consequently, it's not possible to _instantiate_ an interface. You can only _implement_ an interface.

Let's consider this:

```
interface LivingBeing {
    eat();
    talk();
};

abstract class Animal implements LivingBeing {
    protected health: number;

    eat = () => {
        this.health += 5;
    }

    talk = () => {
        throw new Error("Not implemented");
    }
}
```

Notice the keyword `implements`. Interfaces are `implemented`, classes are `extended`.

> All classes that implement an interface must offer implementations for all interface methods.

In the example above, _not_ including `eat()` or `talk()` in the `Animal` class would've resulted in an error.

Also, notice the `abstract` modifier. It can apply to classes to specify that they shouldn't be instantiated.

Abstract classes can still provide valid implementations for methods. For instance, the method `eat` remains the same so it can be implemented in the `Animal` class instead of its children.

You can find a full example of the code in `lab05/example.ts`.

## Exercises

You will need to add code to `lab05.ts`. Also, remember, the purpose is to work on OOP, so please:
* Fully specify all data types
* Use modifiers, least restrictive privilege possible
* Avoid code duplication if possible


### TaxiCo

We are implementing a system to check the profitability of various types of cars in the fleet of a taxi company.

All `Vehicle`s need to be able to do the following:
* `pickUp()` a number of people, equal to the maximum capacity for the specific make and model. This method should return the number of people that were picked up
* `dropOff()` all the people at once
* `moveOneKm()` moves one kilometer. If the fuel reached 0, then it automatically refuels to its maximum capacity. You should also keep track of the current car's profit here.
* `currentProfit()` returns the profit that the car made since the start of the simulation. This starts at 0.

An `AutomotiveVehicle` has the following properties:
* `kmPerLitreWhileEmpty` - how many km it can move with 1L of gas, while the vehicle is empty
* `kmPerLitreWhileFull` - how many km it can move with 1L of gas, while all seats are full
* `humanCapacity` - how many people cat fit in the car. All cars start empty.
* `fuelCapacity` - how many L of gas fit in the tank. All cars start with a full tank.
* `profitPerKm` - how much people pay per kilometer. It's calculated per person.

The TaxiCo Company has the following cars in its fleet:

CrappyCar:
* `kmPerLitreWhileEmpty`: 8
* `kmPerLitreWhileFull`: with a 50% chance probability, either 6 or 7
* `humanCapacity`: 4 - with a 50% chance probability, this drops by 1 because someone refuses to enter the CrappyCar
* `fuelCapacity`: 150
* `profitPerKm`: $3
* 1L of fuel costs $4

ExcellentElectricCar:
* `kmPerLitreWhileEmpty`: 10
* `kmPerLitreWhileFull`: 9
* `humanCapacity`: 1
* `fuelCapacity`: 200 - after every 100km, this drops by 1
* `profitPerKm`: 50% chance between $6 and $7, because some passengers will tip. For convenience, let's assume the tip is calculated per km, not a flat amount at the end of the trip.
* 1L of fuel costs $2 or $3, with a 50% chance for each. But, since refuelling takes time, it drops passengers off.

Implement the cars and the methods. You have a skeleton in `lab05.ts`.

Once you're finished, you can run the simulation in `lab05simulation.ts`.