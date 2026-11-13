কোডের নির্দিষ্ট কোনো জায়গায় একটি ভেরিয়েবলের টাইপ আসলে কী সেটা TypeScript-কে বোঝানোর প্রসেসকে Type Narrowing বলা হয়। বিশেষ করে Union type নিয়ে কাজ করার সময় এটি খুব দরকারি।

Type Narrowing না করলে TypeScript কনফিউজ হয়ে যায়, কারণ একটি ভেরিয়েবলে একাধিক টাইপ থাকতে পারে। আমরা সাধারণত `typeof`, `instanceof` এবং `in` operator ব্যবহার করে টাইপ narrow করি। 

- `typeof`: মূলত primitive type (string, number, boolean) চেক করতে কাজে লাগে।
- `instanceof`: কোনো ভ্যালু Class-এর instance কি না তা চেক করে।
- `in` operator: object-এর ভেতর নির্দিষ্ট কোনো property আছে কি না তা চেক করে।


<!-- Exmples -->
type Animal = { fly: () => void } | { swim: () => void };

function move(animal: Animal) {
  if ("fly" in animal) {
    animal.fly(); 
  } else {
    animal.swim(); 
  }
}