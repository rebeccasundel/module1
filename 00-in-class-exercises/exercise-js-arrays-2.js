const fruits = ["apple", "plum", "strawberries"];

// 1
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// apple
// plum
// strawberries

// 2
fruits.forEach((oneFruit, index) => {
  console.log(index, oneFruit);
});

// 0 'apple'
// 1 'plum'
// 2 'strawberries'
