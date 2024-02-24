# Conditionals and loops

So far, we have only explored instructions that are executed sequentially. But, consider the following scenarios:
* We want to repeat the same operation an unspecified number of times, e.g. Print all numbers from 1 to N
* Execute different instructions based on some condition

We haven't yet explored tools to help us with that. But we will look at 4 instructions that are used to alter the execution flow of programs.

## `if` statement

The syntax for an if statement is:
```
if (condition) {
    // execute some instructions
} else {
    // execute other instructions
}
```

As an example:

```
if (myNumber < 0) {
    myNumber += 10;
} else {
    myNumber -= 20;
}
```

The 2 keywords are `if` and `else`. If you want an `if` block, you will need:
* The `if` keyword
* A conditional - this is an expression that will always be evaluated as `boolean`. The instructions in the first block will be executed if the condition evaluates to `true`
* (Optional) An `else` block. Instructions in this block are executed if the conditional evaluates to `false`. This block is optional, you can just have an `if` block.

> If statements are useful whenever you want to execute different code based on a condition

## `switch` statement

Switch statements are logically very similar to `if` statements. The syntax is:

```
switch(variable) {
    case val1: {
        // instruction set 1
        break;
    }
    case val2: {
        // instruction set 2
        break;
    }
    ...
    default: {
        // instruction set default
    }
}

```

Let's break it down:
* Keyword `switch`
* A variable that we want to check the values of - can be any base type (e.g. number, string, boolean)
* A sequence of `case` options, with a value associated with them. In a switch statement, the value of the variable is checked against each value in the case. If they are equal, then execute the instruction set for that case
* (Optional) A `default` case. Will be executed regardless of the variable value.

Let's take the following example:

```
let a = 5;
switch(a) {
    case 1: {
        console.log(a);
        a += 1;
    }
    case 5: {
        console.log(a);
        a += 2;
    }
}
console.log(a);
```

The above will print `5` and `7`, because a matched the value of the second case, so we executed the second instruction set.

You can convert a switch statement to a squence of if statements. Let's take the example above:

```
let a = 5;
if (a === 1) {
    console.log(a);
    a += 1;
}
if (a === 5) {
    console.log(a);
    a += 2;
    break;
}

console.log(a);
```

Currently, as it's written, the switch case would compare the value of the variable against each case. But what happens if the varaible changes, and we accidentally execute more than one case block (which we usually don't want to do)? Take the following example:

```
let a = 1;
switch(a) {
    case 1: {
        a +=1;
        console.log(a);
    }
    case 2: {
        a +=1;
        console.log(a);
    }
    default: {
        a +=1;
        console.log(a);
    }
}
```

This will output `2`, `3` and `4`, because:
* The variable `a` is matched on the first case. We increment it by one, then print it.
* Then, it's also matched on the second case, because we've just incremented it by one. So we also execute that.
* Then, we also execute the default case.

Assuming this is unintended and we only want to execute _exactly one_ block, we can use the `break` statement:

```
let a = 1;
switch(a) {
    case 1: {
        a +=1;
        console.log(a);
        break;
    }
    case 2: {
        a +=1;
        console.log(a);
        break;
    }
    default: {
        a +=1;
        console.log(a);
    }
}
```

> `break` is used to exit out of the `switch`, `while` and `for` statements early.

The above will output just `2`.

> Why didn't I include a `break` in the default case?


> Tip: If you leave a case block empty (but still specified), it will perform the same instruction set when either case matches, e.g., the following will print the value if a is _either 4 or 5_.

```
switch(a) {
    case 4:
    case 5: {
        console.log(a);
        break;
    }
}
```

## `while` statement

This statement is also called a `while` _loop_, because it executes instructions repeatedly. The syntax is:

```
while(condition) {
    // instruction set
}
```

* `condition` is always evaluated as a `boolean`
* The instruction set is executed repeatedly, as long as the condition is `true`.

For instance:

```
let a = 1;
while (a < 5) {
    console.log(a);
    a += 1;
}
```

Will output the numbers from 1 to 4.
> Similarly to switch statements, you can use `break` to exit the loop early.

## `for` statements

This block is used to iterate from a starting point to an end point. You can define the start, end, and how big the steps are on each iteration.

The syntax is:

```
for (variable_initialization; variable_condition; variable_manipulation) {
    // execute instructions
}
```

So, it's made of 3 parts. Let's break them down:
* _variable_initialization_: define the starting point
* _variable_condition_: define the finish point
* _variable_manipulation_: define the step size

Let's say we want to print all the numbers from 1 to 10. We could write:

```
for (let a = 1; a <= 10; a++) {
    console.log(a);
}
```

We could also write it as a while:
```
let a = 1;
while(a <= 10) {
    console.log(a);
    a++;
}
```

> `for` loops are generally used when you want to iterate from a start to a finish point, when the start, end, and step are clearly defined.

> `while` loops are used for generic _do this until something happens_ loops.


## Exercises

Some of the following exercises will reference a number `n`. `n` is a random number between 1 and 25 - this is how you need to define it:

```
let n = Math.floor(Math.random() * 25) + 1;
```

Don't worry too much about this. We'll talk about it in more detail in the next labs.

> For all of these exercises, also print the value of n. Let me know after each exercise so we can check.

1. If n is less than 10, print "1 Beep". If it's greater than 10, print "1 Boop".
2. If n is a multiple of 5, print "2 Beep". If it's not a multiple of 5, print "2 Boop".
3. Print the sum of the squares of all numbers between 1 and n (i.e. 1^2 + 2^2 + 3^2 + ... + n^2). Print n and the result.
4. Multiply n by 5, by using repeated addition. Print n and the result.
5. Implement division with remainder by using repeated subtractions. To test it divide n by 5, and print n and the result.
6. Print a simple pyramid with depth n. The simple pyramid is (for n = 5):
```
*
**
***
****
*****
```
7. Print a more complicated pyramid. n must be odd, so if the random number is even, just add 1 to it. (example for n = 5):
```
*****
 ***
  *
```
8. Print an even more complicated pyramid (example for n = 5, again n must be odd)
```
  *
 ***
*****
```

### (Extension) Fibonacci sequence

The fibonacci sequece is a [number sequence](https://en.wikipedia.org/wiki/Sequence) defined by recursion. If the generic term is a<sub>n</sub>, then the sequence is defined as:

> a<sub>n</sub> = a<sub>n-1</sub> + a<sub>n-2</sub><br>
> a<sub>0</sub> = 1<br>
> a<sub>1</sub> = 1

So, the fibonacci numbers up to 5 are:

> a<sub>0</sub> = 1<br>
> a<sub>1</sub> = 1<br>
> a<sub>2</sub> = a<sub>1</sub> + a<sub>0</sub> = 2<br>
> a<sub>3</sub> = a<sub>2</sub> + a<sub>1</sub> = 3<br>
> a<sub>4</sub> = a<sub>3</sub> + a<sub>2</sub> = 5<br>
> a<sub>5</sub> = a<sub>4</sub> + a<sub>3</sub> = 8<br>

Print the fibonacci sequence between 1 and n.