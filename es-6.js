// ES6 রিলেটেড সাতটা জিনিস তোমাকে জানতে হবে

/* ১. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে অবজেক্ট এর প্রপার্টি এর মান কিভাবে বসায় সেটা জানতে হবে। বিশেষ করে নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। বা কোন একটা অবজেক্ট এর প্রপার্টি array সেই array থেকে ভ্যালু এনে কিভাবে টেমপ্লেট স্ট্রিং এর মধ্যে বসাতে পারবে ।  */
{
  let a = 10;
  let b = "temple mos";
  const temp = `temper id ${a}. name:${b}.`;
  // console.log(temp);
}

/* ২. স্প্রেড অপারেটর (...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে (filter ইউজ করে) */
const subject = ["bangla", "english", "math", "histerycal"];
// console.log([...subject, "joss"]);
const number = [10, 20, 30, 40, 50, 60, 70, 80];
const nu = [...number, 90, 100].filter((n) => n != 20);
// console.log(nu);

// const initialValue = 0;
// const sumWithInitial = nu.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// const numarr = number.filter((num) => {
//   if (num > 20) {
//     const result = num + num;
//     console.log(result);
//   }
// });
// console.log(numarr);
/* 
৩.১. শূন্য প্যারামিটারওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে। */
const arrow1 = () => 9;
// console.log(arrow1());

/* ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে।  */
const arrow2 = (x) => x * 12;
// console.log(arrow2(2));

/* ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।  */
const arrow3 = (x, y) => (x + y) / 4;
// console.log(arrow3(10, 10));

/* ৩.৪ একাধিক লাইনওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।  */
const arrow4 = (x, y) => {
  const xx = x + 5;
  const yy = y + 5;
  return xx * yy;
};
// console.log(arrow4(4, 4));

/* .

৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে। */
const studentDetils = {
  name: "marouf",
  id: 10,
  subject: ["bangla", "english", "math", "histerycal"],
};
const { id: balance } = studentDetils;
console.log(balance);
/* 
৫. shorthand দিয়ে অবজেক্ট কিভাবে ডিক্লেয়ার করে, {a , b } স্টাইলে। 
*/
let a = 10;
let b = 20;
const obj = { a, b };
// console.log(obj);

/* ৬. ফাংশন এর মধ্যে ডিফল্ট প্যারামিটার কিভাবে ডিক্লেয়ার করে  */
const func = (i = 5) => i + 10;
// console.log(func());
/*
৭. অপশনাল চেইনিং কি জিনিস, সেটা কখন কিভাবে ইউজ করে ? না জানলে গুগলে সার্চ দাও 
. */
studentDetils.man
  ? console.log(studentDetils.name)
  : console.log("its not foundt");
