<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: ReferenceError: greetign is not defined

<i>Explanation: In this code, a variable greeting is declared, but an empty object is assigned to a non-existent variable greetign, resulting in a ReferenceError because greetign is not defined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: Answer: D: 3

<i>Explanation: The sum function attempts to add two values together, but JavaScript performs type coercion, converting the number 1 to a string to make the operation valid. Therefore, it concatenates the strings "1" and "2," resulting in "12," which is then converted back to a number due to the + operator, resulting in the numeric value 3.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: Answer: A: ['🍕', '🍫', '🥑', '🍔']

<i>Explanation: The info.favoriteFood initially references the first element of the food array, which is "🍕". Later, it's changed to "🍝," but this change doesn't affect the original food array. Therefore, when you log food, it remains ['🍕', '🍫', '🥑', '🍔'].
</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: Hi there, undefined

<i>Explanation: The sayHi function expects an argument name, but it is called without any argument. When a function is called with missing arguments, those arguments are undefined. So, the function returns "Hi there, undefined" where undefined is the value of name.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: 1

<i>Explanation: The forEach loop iterates through the nums array and increments the count variable only when the num is truthy. In JavaScript, 0 is considered falsy, so it does not increment count. Only the numbers 1, 2, and 3 are truthy, resulting in count being 1.
</i>

</p>
</details>
