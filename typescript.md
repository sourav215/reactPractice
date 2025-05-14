## Type Aliase

```ts
type DataType = {
  num1: number;
  num2: number;
  num3?: number; // Not required
};

const addnumbers = (data: DataType): number => {
  return data.num1 + data.num2;
};

console.log(addnumbers({ num1: 10, num2: 20 }));
```

## Interface

```js
interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const user1: IUser = {
  username: "srv1",
  email: "sourav@gmail.com",
  age: 20,
};

const employee1: IEmployee = {
  username: "srv1",
  email: "sourav@gmail.com",
  age: 20,
  employeeId: 1020,
};
```

## Generic

```ts
interface IPost<T> {
  id: number;
  title: string;
  extra: T;
}

const post1: IPost<String> = {
  id: 1,
  title: "Post 1",
  extra: "This is extra",
};
```

```ts
interface IBook<T> {
  id: number;
  title: string;
  extra: T[];
}

const post1: IBook<String> = {
  id: 1,
  title: "Post 1",
  extra: ["This is extra"],
};

interface IAuthor {
  name: string;
  country: string;
}

const post2: IBook<IAuthor> = {
  id: 2,
  title: "Post about Rabindranath",
  extra: [
    { name: "Tagore", country: "India" },
    { name: "Subhash", country: "India" },
  ],
};
```
