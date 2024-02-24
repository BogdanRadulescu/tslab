# Lab 01: Variables, data types, and operations

## Variables

### Declaration and initialization

You can think of a variable like a box. If you don't immediately need something, you can store it in a box, so you can access it at a later time.

From a programming perspective, a variable is a slot in memory (more specifically, in RAM) that we have access to. In some languages, e.g. C/C++, memory management is the programmer's job. In typescript, however, we usually don't care how the variable is stored, or how much memory it needs.

Let's start with an empty box:
```
var firstVar;
```

This statement is called a _variable declaration_. We prefixed it by the keyword `var`, and we created a new box, variable, called `firstVar`. Later in our scripts, we can reference this variable through its name.

> _Although not strictly necessary, it's usually a good practice to end statements with a ;_

By itself, the empty variable is not very useful, so let's put something in it:

```
var firstVar;
firstVar = 5;
```

The second line is called _variable initialization_.

> **The = operator is not the same as the mathematical symbol**. A single `=` is called the _assignment operator_, and simply assigns the _value_ of the expression on the right side to the variable on the left side.

> If you want to check equality between two expressions, you will need to use `===`. Yes, three equals.

We can combine _declaration_ and _initialization_ into a single statement:

```
var firstVar = 5;
```

### `var` vs `let` vs `const`

So far, we have used the keyword `var` to declare a variable, but it's not the only one we can use. In fact, `var` is the one we should _never_ use.
* `let` is, for our purposes, very similar to var. If you want to have a variable that you can reasssign values to, use `let`
* `const` is used for variables that can only be initialized once, and they must be initialized when being declared. Use `const` when you want to make sure that a variable has exactly one value, and can't be reassigned later by mistake.
* `var` - avoid it like the plague. If you're curious why, check out [this](https://sentry.io/answers/difference-between-let-and-var-in-javascript/), although it might not make much sense at this time.

> A good rule of thumb is to _always_ use `const`, unless I explicitly need to re-assign a value to my variable.

Examples:
* Assigning a `let` variable several times
```
let a;
a = 5;
console.log(a); // 5
a = 7;
console.log(a); // 7
```

* Assigning a `const` variable
```
const a = 5;
console.log(a); // 5
```

If you attempt to assign another value to `a` after the declaration & initialization, you will get an error.

> There's a new statement here, `console.log()`. Without going too much into detail, this will print the value enclosed in brackets to the terminal, when you run the script. We'll talk about classes and functions in a further lab.

> Also, if you put text after a `//`, that's called a _comment_. All the text on the row following `//` will be ignored. This is useful if you want to add explanations to code (but, ideally, you shouldn't need to use it that often!).

## Data types

Think of data types in typescript like labels you can put on boxes. If you have a box labelled "carrots", you should probably put carrots in it. But, in practice, nothing's stopping you from also putting apples there (don't do that please).

When you say a variable has a certain type, you're hinting at what values could be assigned to it.

### Basic types (that we care about now)
There are 3 basic data types that we care about now:
* `number` - self-explanatory
* `string` - a sequence of characters, e.g. `"Hello World"`. A string _constant_ can be enclosed either in single quotes, or double quoutes.
* `boolean` - can only have the values `true` or `false`

Type can be inferred automatically by the typescript compiler, by evaluating the data type of the expression you assign to a variable:
```
let myNumber = 5;
let myString = "Hello";
let myBoolean = false;
```

You can also explicitly specify the data type:
```
let myNumber: number = 5;
let myString: string = "Hello";
let myBoolean: boolean = false; 
```

## Operators

So far, we have only used constants in our assignments, but what happens if we need some more complex computations on expressions?

> **You can use operators between one or more variables or constants**

### Mathematical operators
These make most sense when applied to numbers:
* `+`
* `-`
* `*` - multiplication
* `/` - division
* `%` - modulo, the remainder of a division. e.g:
    * 78 % 10 = 8, because 78 / 10 is 7, with remainder 8
    * 80 % 10 = 0
    * 78 % 100 = 78
* `++` - increment, increases the value of the variable by one
* `--` - decrement, decreases the value of the variable by one

> Mathematical operators make most sense when applied to numbers, but some of them can be applied to other data types as well. Can you guess what `"Hello " + "World"` does?

### Relational operators

* `>` - `5 > 7` evaluates to `false`, and `7 > 5` evaluates to `true`
* `<`
* `<=` - less or equal than. Also evaluates to true when the expressions are equal
* `>=`
* `==` or `===`, equality operator. Evaluates to true when the expressions are equal. Don't confuse it with `=`, which is the _assignment_ operator.
> The short explanation is that, because javascript is weird, `==` behaves differently from `===`. We always want to use `===` though, except for some very weird, niche cases.
* `!=` or `!==`, not equal. Similarly, always use `!==`

### Logical operators
* `&&` - AND. Evaluates to `true` if _both_ expressions are true, otherwise it's false. e.g.
    * `true && false` evaluates to `false`
    * `true && true` evaluates to `true `
* `||` - OR. Evaluates to `true` if _at least one_ expression is true, e.g.
    * `true || false` evaluates to `true`
    * `false || false` evaluates to `false`
* `!` - NOT. Negates the value, e.g. `!true` evaluates to `false` and vice-versa.

> Since the order of operations can be weird sometimes (but usually follows mathematical conventions), you can, and should, use brackets where you think the order of operations can be ambiguous

> Mathematical operations take precedence over (i.e. are evaluated before) logical ones

### Exercises
1. Without running the code, what do you think these expressions evaluate to?
* ((12 + 4) / 4 - 4) === 4 - 4
* 7 - 8 < 10 - 12
* (5 + 8 < 24) && (12 >= 3 + 5)

```
const x = 7;
const y = 10;
(x-4) / (y - 8)
```
For the following exercises, you will need to create a new file. The name doesn't matter, but the extension should be `.ts`, e.g. `lab01.ts`.

You can write the code in it, and execute it by running `tsx lab01.ts` in the GitBash terminal.

2. Define a variable, assign it a value, and print it. Should the variable be declared with `let` or `const`? Why?
3. Define a variable, assign it a value, and print it. Assign another value to the same variable, and print it again.
4. Define a variable, assign an expression to it, and print it.
5. Define a variable, declare the type explicitly, assign a value to it, then print it.
6. Define 2 variables with the explicit type of `number`. Assign values to each of them. Print the sum of the 2 variables, the difference, and the result of the division.
7. Define 2 variables, the first one with the explicit type `number` and the second one with type `string`. Assign any appropriate values to them. Print the result of adding them up. What happens, and can you guess why?


## Variable lifetimes

A program is a set of instructions that, normally, is executed in order from top to bottom. Thik of this example:

```
const a = 5;
const b = 7;
console.log(a + b);
```

The order in which the instructions are executed is this:

* Declare a variable called `a` and assign it the value 5
* Declare another variable called `b`, and assign it the value 7
* Output the value of `a + b`

What would happen if we were to print the value of `a + b` before declaring and initializing them? Well, we would get an error, because at the time of computing the sum, the variables are not defined. So, we can say that

> The lifetime of a variable starts when it is declared.

### Blocks

> A block is a section of code delimited by curly brackets. It is required for certain types of instructions

An example of block: 

```
{
    const a = 5;
    console.log(a);
}
```

> A variable declared within a block only lives while inside that block. Variables declared outside blocks are visible to inner blocks.

To understand this better, let's look at this example:
```
let a = 9;
{
    console.log(a);

    let b = 5;
    console.log(b);

    {
        let c = 5;
    }

    console.log(c);
}
```
* `a` is visible when printing, because the print is in an _inner block_ from where it was defined
* `b` is visible when printing, because the print is in the _same block_ in which it was defined
* `c` is **not visible** when printing (and the print will throw an error), because it's not in the same scope as when it was defined

> You cannot declare a new variable with the same name as a living, existing one. In other words, you cannot have two variables with the same name in the same scope.

## Extension: ternary operator

The ternary operator is a bit weird to understand at first, but it's a powerful tool that's used quite frequently. It consists of:
* A conditional expression that will always evaluate as boolean
* 2 other expressions

This is the syntax:
```
const result = conditional ? expression1 : expression2;
```

If the `conditional` expression evaluates to `true`, then result would be assigned the value of `expression`. If the conditional expression is false, then result would be `expression2`.

Let's take a few examples, to make things clearer:
```
true ? 1 : 2; // evaluates to 1, because the conditional is true
(5 === 6) ? 7 : 8 // evaluates to 8, because the conditional is false

// Is the same thing as saying "if a equals 7, then a + 2, else a - 2"
const result = (a === 7) ? a + 2 : a - 2
```

You can combine multiple conditional expressions, but you need to be careful how you format them, otherwise they can easily get unreadable, e.g.

```
const result = (a === 7) ? (b === 2) ? b + 2 : b - 2 : (c === 3) ? c - 3 : c + 3
```

is the same thing as

```
const result = (a === 7) // if a equals 7
    ? (b === 2) // and if b equals 2
        ? b + 2 // then b + 2 
        : b - 2 // otherwise b - 2
    : (c === 3) // otherwise (a different than 7), and if c is equal to 3
        ? c + 3 // then c + 3
        : c - 3 // then c - 3
```

> Nesting ternary operators like this is usually a bad idea, because the logic is difficult to follow

### Exercise
What would the expression above evaluate to, for values of:
* a = 7, b = 2, c = 3
* a = 9, b = 2, c = 4