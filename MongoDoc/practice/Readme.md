## Inside Simple Array

```js
db.users.find({ hobbies: "coding" }, { name: 1, _id: 0 });
```

```
{
  name: 'Jake Turner'
}
```

## Nested obj elem

```js
db.users.find({ "address.city": "New York" }, { name: 1, _id: 0 });

or;

db.users.aggregate([
  { $match: { "address.city": "New York" } },
  { $project: { name: 1, _id: 0 } },
]);

or;

db.users
  .find({
    $expr: { $eq: ["$address.city", "New York"] },
  })
  .count();
```

```
{
  name: 'Alice Johnson'
}
```

## Destructure

- Fetch only active users.
- Extract:
  1. email
  2. education.degreeCode array
  3. totalScores: sum of all numbers in the scores 2D array
  4. techStack: all tech values from projects (merged into a flat array)

### 1.Using forEach()

```js
db.users.find({ isActive: true }).forEach(function (user) {
  // Extract degree codes
  const degreeCodes = user.education.map((e) => e.degreeCode);

  // Calculate totalScores by flattening and summing the 2D scores array
  const totalScores = user.scores
    .flat() // flatten 2D array
    .reduce((sum, n) => sum + n, 0); // sum all values

  // Extract all tech stacks from projects and flatten
  const techStack = user.projects.map((p) => p.tech).flat();

  // Final result
  const result = {
    email: user.email,
    education: degreeCodes,
    totalScores: totalScores,
    techStack: techStack,
  };

  printjson(result);
});
```

### 2. Using Aggregate Query

```js
db.users.aggregate([
  { $match: { isActive: true } },
  {
    $project: {
      _id: 0,
      email: 1,
      education: {
        $map: {
          input: "$education",
          as: "e",
          in: "$$e.degreeCode",
        },
      },
      totalScores: {
        $sum: {
          $map: {
            input: "$scores",
            as: "innerArr",
            in: { $sum: "$$innerArr" },
          },
        },
      },
      techStack: {
        $reduce: {
          input: "$projects",
          initialValue: [],
          in: {
            $concatArrays: ["$$value", "$$this.tech"],
          },
        },
      },
    },
  },
]);
```

```
{
  "email": "alice@example.com",
  "education": ["CS101", "DS202"],
  "totalScores": 333,
  "techStack": ["Python", "TensorFlow", "React", "Node.js"]
}
```


## Greater than and Less than
```js
db.users.find({age: {$gt: 20 , $lt: 30}}).count()
```

## Update Email

```js
db.users.updateOne(
  { name: "Alice Johnson" },
  { $set: { email: "alice001@example.com" } }
);
```

```
{
    email: 'alice001@gmail.com'
}
```
