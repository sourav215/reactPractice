const data = [
  {
    name: "Superman",
    favoriteIceCreams: [
      "Strawberry",
      "Vanilla",
      "Chocolate",
      "Cookies & Cream",
    ],
  },
  {
    name: "Batman",
    favoriteIceCreams: [
      "Cookies & Cream",
      "Mint Chocolate Chip",
      "Chocolate",
      "Vanilla",
    ],
  },
  {
    name: "Flash",
    favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
  },
  {
    name: "Aquaman",
    favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
  },
  {
    name: "Green Lantern",
    favoriteIceCreams: [
      "Vanilla",
      "French Vanilla",
      "Vanilla Bean",
      "Strawberry",
    ],
  },
  {
    name: "Robin",
    favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
  },
];

const ans = data.reduce((acc, item) => {
  item.favoriteIceCreams.forEach((elem) => {
    acc[elem] = acc[elem] ? acc[elem] + 1 : 1;
  });

  return acc;
}, {});

console.log(ans);

/*
{
  Strawberry: 3,
  Vanilla: 4,
  Chocolate: 5,
  'Cookies & Cream': 2,
  'Mint Chocolate Chip': 3,
  'Rocky Road': 1,
  Pistachio: 1,
  Banana: 1,
  'French Vanilla': 1,
  'Vanilla Bean': 1
}
*/

// const voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: true}
// ];

// // young -> [0,20]
// // mids -> [0,40]
// // old -> [40,Infinity]

// console.log(
//   voters.reduce((acc,item) => {
//     if(item.age < 21){
//       acc.numYoungPeople = acc.numYoungPeople ? acc.numYoungPeople + 1 : 1
//       if(item.voted) {
//         acc.numYoungVotes = acc.numYoungVotes ? acc.numYoungVotes + 1 : 1
//       }
//     }
//   return acc
//   }, {})
// )

// /*
// { numYoungVotes: 1,
//   numYoungPeople: 4,
//   numMidVotesPeople: 3,
//   numMidsPeople: 4,
//   numOldVotesPeople: 3,
//   numOldsPeople: 4
// }
// */

// const wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(wishlist.reduce((acc,item) => (acc+item.price),0))

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once: 227005

// let prateekMarksData = {
//   name: "Prateek",
//   subject1: "Javascript",
//   subject2: "HTML",
//   subject3: "CSS",
//   subject4: null,
//   subject5: null,
//   marks1: 90,
//   marks2: 81,
//   marks3: 80,
//   marks4: null,
//   marks5: null,
// }

// let nrupulMarksData = {
//   name: "Nrupul",
//   subject1: "Java",
//   subject2: "Pyton",
//   subject3: null,
//   subject4: null,
//   subject5: null,
//   marks1: 95,
//   marks2: 85,
//   marks3: null,
//   marks4: null,
//   marks5: null,
// }

// let allStudentsMarksData = [prateekMarksData, nrupulMarksData];

// let massagedData = allStudentsMarksData.reduce((acc, item)=>{
//   let object = {};

//   object.name = item.name;
//   let arr = [];

//   for(let i = 1; i < 6; i++) {
//       if(item[`subject${i}`]){
//         object.marks = object.marks ? [...object.marks, {  subject: item[`subject${i}`], score : item[`marks${i}`]   } ] : [ { subject: item[`subject${i}`], score : item[`marks${i}`]   }  ];

//         console.log({ subject: item[`subject${i}`], score : item[`marks${i}`]   })

//       }
//   }

//   acc.push(object)

//   return acc
// },[])

// console.log(massagedData);

// /*
//  ------------------------------------------------
//  massage the `allStudentsMarksData` to get a new
//  array called `massagedData`

//  Instead of separate enties for 5 subjects and their marks,
//  in the new array, we just have one entry called marks.
//  marks is an array of objects. the objects of marks
//  contains subject and score.
//  ------------------------------------------------

//   Expected output from `massagedData`

//   [
//      {
//        name: "Prateek",
//        marks: [
//          {subject: 'Javascript', score: 90},
//          {subject: 'HTML', score: 81},
//          {subject: 'CSS', score: 80}
//        ]
//      },
//      {
//        name: "Nrupul",
//        marks: [
//          {subject: 'Java', score: 95},
//          {subject: 'Python', score: 85}
//        ]
//      },

//   ]

// */
let massagedData = allStudentsMarksData.map((ele) => {
  
  let obj = {};
  obj.name = ele.name;

  for (let i = 0; i < 6; i++) {
    if (ele[`subject${i}`]) {
      obj.marks = obj.marks
        ? [
            ...obj.marks,
            {
              subject: ele[`subject${i}`],
              score: ele[`score${i}`],
            },
          ]
        : [
            {
              subject: ele[`subject${i}`],
              score: ele[`score${i}`],
            },
          ];
    }
  }
  return obj;
});
