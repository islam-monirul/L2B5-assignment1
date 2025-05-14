### Level 2 (Batch 5) - Assignment 1 by Monirul Islam

While learning `TypeScript`, I have encountered a bunch of topics that were really confusing to me. In today's blog, I will try to answer the following two questions from my own understanding that I have chosen from a list of given topics:

1. What are some differences between interfaces and types in TypeScript?
2. Provide an example of using union and intersection types in TypeScript.

_Let's start with the differences between interfaces and types in TypeScript :_

`interface` is basically used to define the shape of an object and `type` is a way of defining a name for any types which includes primitive types, union types and object types.

```
// type alias
type isPlayer = boolean;
type InjuryStatus = "injured" | "recovering" | "recovered";
type PlayerInfo = {
	readonly playerID: number;
	name: string;
	currentMarketValue: number;
}

// interface
interface IEmployee {
	employeeID: number;
	userName: string;
	firstName: string;
	lastName: string;
	isRetired: boolean;
}
```

Onee of the important difference between `interface` and `type` is that we can `interface` is extendable which means we can re-open any `interface` and add new properties whereas `type` cannot be re-opened.

```
// adding new field to interface
interface IEmployee {
	employeeID: number;
}

interface IEmployee {
	userName: string;
}
```

but if we try to do the same thing with `type`, we will get duplicate identifier 'window' error.

Another key difference is that with `interface`, we can use the concept of inheritance. we can extend any interface using `extends` keyword. On the other hand, if we want to extend `type` we need to use the intersections.

```
// extending interface
interface IEmployee {
	employeeID: number;
	userName: string;
	firstName: string;
	lastName: string;
}

interface IRetirementInfo {
	isRetired: boolean;
}

// extending type
type PlayerInfo = {
	readonly playerID: number;
	name: string;
	currentMarketValue: number;
}

type Player = PlayerInfo & {
	isCurrentlyActive: boolean;
}
```

So,my understanding about the uses of `type` and `interface` is that we should use `interface` when working with objects and have plan to extend it in our projects. On the other hand, we should use type when combining multiple types or define a complex structures.
