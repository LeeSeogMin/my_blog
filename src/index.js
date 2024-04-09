// index.js
const likeButton1 = document.getElementById("like-button-1");
const likeCount1 = document.getElementById("like-count-1");
let count1 = 0;

likeButton1.addEventListener("click", () => {
  count1++;
  likeCount1.innerText = count1;
});

const likeButton2 = document.getElementById("like-button-2");
const likeCount2 = document.getElementById("like-count-2");
let count2 = 0;

likeButton2.addEventListener("click", () => {
  count2++;
  likeCount2.innerText = count2;
});