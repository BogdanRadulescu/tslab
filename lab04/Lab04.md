# Object-Oriented Programming (I)

So far, we have only used primitive data types that exist in typescript, but there's so much more than that.

We've had a taste of complex data types in the previous lab, with using `Array` and `String`. But now it's time to think more deeply about them.

## Objects

>Objects are key-value pairs that can store _any_ data type. Keys are called _properties_.

An example of an object is:

```
const objVariable = {
    intProperty: 5,
    stringProperty: 'abcd',
    objectProperty: {
        x: 7,
        y: 'objString'
    }
};
```

We can access properties by using `.`, e.g. `objVariable.intProperty` evaluates to 5.

We can chain dots: `objVariable.objProperty.x` evaluates to 7.

We can output the type of a variable by using `typeof`:

```
console.log(typeof objVariable); // object
console.log(typeof objVariable.intProperty); // number
```

## Classes basics

### Defining a new class

Classes are what define a complex, custom-made data type. The syntax for defining a class starts simple.

In the following example, we'll also define a variable, explicitly declaring it as the custom data type we've just created.

```
class MyCustomDataType {

}

let x: MyCustomDataType = new MyCustomDataType();
```

> Instantiating a class is done through the `new` keyword, followed by calling the _constructor_. We'll talk more about constructors in a following section.

### Properties

We can extend the class declaration with properties:

```
class MyCustomDataType {
    numberProperty: number;
}

const x = new MyCustomDataType();
```

We can now access the property using the dot operator: `x.numberProperty`. Similarly with objects, we can have properties of any data type.

### Methods

We can also add functions to classes. Functions within a class are called _methods_:

```
class MyCustomDataType {
    numberProperty: number;

    printProperty() {
        console.log(this.numberProperty);
    }

    secondPrintProperty = () => {
        console.log(this.numberProperty);
    }
}

let x: MyCustomDataType = new MyCustomDataType();
x.printProperty(); // will print undefined
```

Methods can follow the usual function declaration, except we don't need to add the `function` keyword. We can also access them using the dot operator, add parameters to them, and they otherwise work as regular functions.

### Constructors

Constructors are a special type of function that are named `constructor`.

> Constructors that don't have any parameters are called _default constructors_. **Classes always have a default constructor.**

In constructors, we usually want to initialize things, mostly the parameters.

> Constructors are the methods that are called when you initialize the class instance, using the `new` keyword.

We can overwrite the default constructor and add new constructors:

```
class MyCustomDataType {
    numberProperty: number;

    constructor() {
        // default constructor
        this.numberProperty = 5;
    }

    printProperty() {
        console.log(this.numberProperty);
    }

    secondPrintProperty = () => {
        console.log(this.numberProperty);
    }
}

let x: MyCustomDataType = new MyCustomDataType();
x.printProperty(); // will print 5
```

> `this` refers to the current class instance. We need it to refer to properties and methods, because we don't know the instance name.

> We can only have one constructor in typescript. It's either the default one, or a more specific one, with a certain number of parameters:

```
class MyCustomDataType {
    numberProperty: number;

    constructor(propertyValue: number) {
        this.numberProperty = propertyValue;
    }

    printProperty() {
        console.log(this.numberProperty);
    }

    secondPrintProperty = () => {
        console.log(this.numberProperty);
    }
}

let x: MyCustomDataType = new MyCustomDataType(5);
x.printProperty(); // will print 5
```

> Notice that when initializing the class instance, we called the constructor with one parameter.

## Modifiers and specificity

We can apply special keywords to _methods_ and _properties_ to specify **who can access them**:

### `public`

By default, if you don't mention a method or property specificity, it's assumed to be public - like we've done in all the examples above.

> Public methods and parameters can be accessed both _outside_ and _inside_ the class. **They should be used _only_ for items that the class wants other people to use.**

### `private`

> Private methods and parameters can only be accessed _inside_ the class. **They should be used for items that the class wants hidden, abstracted from the user.** An example would be implementation details that users don't need to know.

### `static`

> Static properties or methods can be accessed without requiring a class _instance_. **They, and their values, are shared between all class instances.**

You can refer to them using the class name, e.g. `Math.random()` - `random` is a static method belonging to the `Math` class.

> You can combine `static` with access modifiers, e.g: `random` is a `public static` method. The order of modifiers matters!

> In static methods, you can only reference other static methods or properties.

### Examples

```
class MyCustomDataType {
    private numberProperty: number;
    private static myStaticNumber: number = 9;

    public constructor(defaultNumberType: number) {
        this.numberProperty = 5;
    }

    public printProperty() {
        console.log(this.numberProperty);
    }

    public secondPrintProperty = () => {
        console.log(this.numberProperty);
    }

    public static printStaticNumber = () => {
        console.log(MyCustomDataType.myStaticNumber);
    } 
}

let x: MyCustomDataType = new MyCustomDataType(5);
x.printProperty(); // 5
MyCustomDataType.printStaticNumber(); // 9
```

In this example, we've made:
* public constructor and public methods, because we need users to interact with these
* private `numberProperty`, because we don't want users to interact with the property directly
* private static `myStaticNumber`, because we want this to be inaccessible from outside the class
* We reference `myStaticNumber` in a `public static` method, and we reference it using the class name.

# Exercises

Set-up:
* run `git pull` to fetch latest changes
* run `cd lab04` to change directory to lab04
* You have a `CalculatorWithMemory.ts` file, with a `CalculatorWithMemory` class defined. Don't change the `export class CalculatorWithMemory` line. All changes should be made in this file.
* You can run `tsx lab04Checker.ts` to run some automated tests, to see if what you've implemented is correct.

## Building a simple Calculator with RAM memory

> _RAM_ stands for _Random Access Memory_ - it's the memory used by your programs to store data. By its nature, it's quite fast but volatile - when your machine restarts, the memory is wiped.

Add a property to the `CalculatorWithMemory` class, an array of numbers called `ramMemory`.

Look at the previous lab to see an example of how to define and initialize an array of numbers, if you don't remember.

1. Add a constructor to the class where you initialize `ramMemory`. You should call the _default_ constructor of `Array`.
2. Implement `addToRam` that adds an element at the end of `ramMemory`. You can use methods from the `Array` class.
3. Implement `removeFromRam` that removes the element at the end of `ramMemory`. Again, you can use methods from the `Array` class. Is there anything you should consider, or look out for, when removing an element?
4. Implement `sum`, `dif`, `mul`, `div`. They will apply the respective operations on all elements in the array, in order. For example, if your array is `[8, 4, 2]`, then:
* `sum` returns 8 + 4 + 2 = 14
* `dif` returns 8 - 4 - 2 = 2
* `mul` returns 8 * 4 * 2 = 64
* `div` returns 8 / 4 / 2 = 1
> If there is only one element in the ramMemory, then the value of that operations is that element. If there is no element, the operations should return `undefined`.

## Extending the Calculator with a Cache layer

> _Cache_ memory is even more specialized than RAM. It's a layer of memory included in the CPU chip. It's extremely fast, extremely expensive, but consequently very small. A typical processor cache is only a few MB in size.

> Fun fact: it's included in the CPU chip because of several reasons. But, having it as close to the CPU as possible, as opposed to RAM which is on a separate circuit, allows it to be very specialized and it increases its read & write speed.

1. Create a new class called `CustomCache`. It should have the following

Properties:
* `sumResult`, `difResult`, `mulResult`, `divResult`

Methods:
* `getSum` and `setSum` - returns the sumResult, sets the sumResult
* `getDif` and `setDif` - returns the difResult, sets the difResult
* `getMul` and `setMul` - returns the mulResult, sets the mulResult
* `getDiv` and `setDiv` - returns the divResult, sets the divResult

2. Adapt the `CalculatorWithMemory` class to use a `CustomCache` instance:
* You will need to add an instance of the CustomCache in your Calculator class
* The `addToRam` and `removeFromRam` will get and set the values stored in cache, based on the number that is added or deleted
* The other methods will just return what is stored in cache