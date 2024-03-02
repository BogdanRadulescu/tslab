# Arrays and Functions

## Functions

You can think of functions as a similar concept from mathematics. You can apply an operation, or a few operations, on zero or more parameters.

But functions are more than that. They provide a way for abstractization of some operations that depend on one or more variables.

### Declaring and calling a function

The syntax for declaring a function is:

```
function functionName(param1: type, param2: type, ..., paramN: typeN): returnType {
    // operations
    return valueOfReturnType
}
```

Let's break this down:
* Keyword `function`
* `functionName` - similar to variable name
* A list of parameters, declared by name and their type
  * You will have access to these parameters as variables in the function scope
  * You can add zero or more parameters
  * Parameters can also be other functions!
* A return type - the value that the function returns
  * If the function doesn't return anything, this type is `void`
* A return keyword
  * This is optional if the return type is `void`, but otherwise the value returned must match `returnType`
* The `returnType` is optional, because it's inferred from the value returned, but it's usually a good idea to explicitly specify it


As an example, adding two numbers:

```
function sum(a: number, b: number): number {
    return a + b;
}
```

> Although you can modify the values of the parameters, usually this is not a great idea. You should treat these as `const` in most cases.

> A function that produces the same output given the same input, and that doesn't have any side effects (including modifying any external state or variables), is called _pure function_

The `sum` function above is an example of a pure function.

You can call a function by its name, and assign _values_ to the parameters:
```
const s = sum(5, 7);
console.log(s); // 12
```

> We refer to writing the function body as a _function declaration_, and we refer to using the function as a _function call_. Function _definitions_ don't do anything by themselves. The code will not be executed until the function is _called_.

### Lambda/anonymous/arrow functions

There is an alternate way of declaring functions, which is sometimes very useful:

```
(param1: paramType1, ... , paramN: paramTypeN): returnType => {
    // operations
    return valueOfReturnType
}
```

This is very similar to the regular notation, but there are a few differences:
* The `function` keyword is missing
* The function `name` is missing
* There's the extra `=>` arrow

It's lambda, or anonymous because the function doesn't have a name, or arrow function.

By itself, it can be helpful, but usually we want to convert an arrow function into a named function by assigning it to a variable:

```
const sum = (a: number, b: number): number => {
    return a + b;
}
```

> If we only want to return something in the arrow function, and not do any additional operations, we can skip the brackets and the `return` keyword:

```
const sum = (a: number, b: number): number => a + b;
```

## Arrays

We've looked at ways of storing a value in a variable. But, what happens if we need to store an undefined number of values in one place? Well, we can use an array.

The syntax for declaring an array is very similar to a regular variable:
```
let array: number[];
```

The empty `[]` in the type refer to this as an array. As with any variable, if we don't initialize it or assign anything to it, it will have a value of `undefined`.

We can initialize using something similar to variables:

```
const array1: number[] = [];
const array2: number[] = [1, 2, 3, 4, 5];
```

We can get an element from the array by referring to its _position_ within the array:
```
const array = [1, 2];

console.log(array[0]); // 1
console.log(array[1]); // 2
```
> **Array positions start at 0.**


We can add elments to arrays:
```
const array = [1, 2];

array.push(5);
console.log(array[2]); // 5
```

We can iterate throught elements of arrays, in multiple ways actually:
```
const array = [1, 2, 3, 4, 5];

for (const el of array) {
    console.log(el); // 1 2 3 4 5
}
```

> You can find a documentation of all _methods_ (not exactly functions, but we don't care about the distinction now) that arrays have, [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Declaring arrays with fixed size

This, conceptually, is slightly more complicated to explain at this point. We can initialize an array using its constructor, and generic type:

```
// creates an array with 10 elements, all of them `undefined` unless specified
const array = Array<number>(10);
```

### Strings are also arrays (not really, but they share some methods)

* You can access the letters in a string by their position
* You can find the string length by using `.length`

> More documentation about strings [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Exercises

> Don't delete function definitions for these exercises. You can just comment out or delete function _calls_.

1. Write a function that returns the maximum of three numbers
2. Write a function that returns the factorial of a number, e.g:
5! = 1 * 2 * 3 * 4 * 5
3. Write a function that checks if a number is prime
4. Write a function that checks if a string is a palyndrome
5. Write a function that reverses a string
6. Write a function that calculates the sum of 2 numbers, and another one for the difference of 2 numbers. Write another function that takes as parameter 2 numbers and an operation, and applies the operation on the 2 numbers.
7. Sort an array of numbers. Hint: you can use `array.sort()` for that. Test it with an array of 20 random numbers between 1 and 100:
```
Math.floor(Math.random() * 100) + 1
```
> Look at the documentation if things don't turn out as expected for this exercise
8. Look at the docs, and filter an array so that it only contains odd numbers.

### (Extension) Recursive functions

> A recursive function is a function that calls itself.

This is a fun concept, but in practice it isn't used very often.

Within a function, we can call other functions. But what would happen if we call the function that we're in? Something like:

```
function recursiveFunction(param: number) {
    return recursiveFunction(param + 1);
}

console.log(recursiveFunction(1));
```

Well, this program will never stop:
* On the first function call, we're returning `recursiveFunction(2)`, so a new instance of the function is added to a stack
* On the first function call, we're returning `recursiveFunction(3)`, so we create a new instance

This is never ending, because we haven't added a _stop condition_.

What if, instead, we do this:

```
function recursiveFunction(param: number) {
    if (param < 5) {
        return recursiveFunction(param + 1);
    } else {
        return param;
    }
}

console.log(recursiveFunction(1));
```

We keep spawning functions with increasingly large values for `param`. But, when `param` reaches 5, then we stop the recursion and return 5 instead. 

Let's take a few more examples:

* Calculating the sum of 1 + 2 + 3 + ... + n:

```
const n = 4;
const sum = (i: number) => {
    if (i < n) {
        return i + sum(i + 1);
    }

    return i;
}

console.log(sum(0)); // 10
```

An explanation is that:
* sum(0) is 0 + sum(1)
* sum(1) is 1 + sum(2), so we have 0 + 1 + sum(2) so far
* sum(2) is 2 + sum(3), so we have 0 + 1 + 2 + sum(3)
* sum(3) is 3 + sum(4), so we have 0 + 1 + 2 + 3 + sum(4)
* sum(4) is 4, so end result 0 + 1 + 2 + 3 + 4

A cleaner way would've been to define sum as:
```
const sum = (i: number) => {
    if (i > 0) {
        return i + sum(i - 1);
    }

    return i;
}

console.log(sum(4));
```
So we had 4 + 3 + 2 + 1

### Ultimate (but optional) exercise

* Compute the n-th term of the fibonacci sequence, using recursive functions. You will notice that this is very not optimized, and we're duplicating calculations. This is fine.
* The same as above, but optimize it. Hint: maybe use an array.
