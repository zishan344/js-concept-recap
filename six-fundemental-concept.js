/*  প্রোগ্রামিংয়ের ছয়রত্ন কি তুমি কি জানো: 

১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?
yes i know . when assign one time useing variable . i am usingt const variable 
and . when assining multiple timr this variable i am using let 
 
for example: */
{
  const i = 10;
  // akane i ar value jodi abar a ar moto kore assine korte cay ta hole error kabo . airokom akadin jai gai jodi kono variable use korte hoi ta hole amar const na use koer let use korbo.
  let a = 10;
  a = 30;
  //   console.log(a);
}

// ২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, ===, !==, >=. <=) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে
{
  const a = 10;
  const b = 20;
  if (a < b || a === b || a !== b || a >= b || a <= b) {
    // console.log("ha ha kesa laga mera mojak");
  }
  if (a < b && a !== b) {
    // console.log("ha ha sod dea mene toje sod dea ");
  }
}

/* ২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else-if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো  */
{
  const a = 10;
  const b = 20;
  if (a > b) {
    // console.log("ha ha i am big");
  } else if (a === b) {
    // console.log("i am your equal");
  } else {
    // console.log("oh no i am a little  boy ");
  }
}

/* ৩. array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে? সেগুলা কি তুমি জানো? yse i know let me show some example*/
{
  const studentsName = ["rahim", "abdul", "karim", "rejawol"];
  //   console.log(studentsName["length"]);
  //   console.log(studentsName[2]);
  studentsName.push("habi");
  //   console.log(studentsName);
  studentsName.pop();
  //   console.log(studentsName);
  if (studentsName.indexOf("abudl")) {
    // console.log("abdul is available");
  }
  if (studentsName.includes("rahim")) {
    // console.log("rahim is available");
  }
}

/* ৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো।  */
{
  let i = 0;
  while (i < 10) {
    //   console.log(i + "hello world!");
    i++;
  }
  for (let i = 0; i < 10; i++) {
    //   console.log(i + "hello Bangladehs");
  }
}

/* ৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়।  */
{
  function add(a, b) {
    return a + b;
  }
  // console.log(add(1, 2));
}
/*
৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়। 
 */
const studentDetils = {
  name: "marouf",
  id: 10,
  subject: ["bangla", "english", "math", "histerycal"],
};
console.log(studentDetils.id);
console.log(studentDetils.subject[2]);
