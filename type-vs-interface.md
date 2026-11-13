TypeScript-এ object-এর shape বা structure define করার জন্য আমরা সাধারণত `type` alias এবং `interface` দুটোই ব্যবহার করি।

`interface` মূলত object-এর structure define করার জন্য ব্যবহার করা হয়। এর সবচেয়ে বড় সুবিধা হলো "declaration merging"। অর্থাৎ, একই নামে দুটি interface লিখলে TypeScript নিজে থেকেই সেগুলোকে merge করে নেয়। এছাড়া `extends` keyword দিয়ে এটি অন্য interface-কে inherit করতে পারে। 

অন্যদিকে, `type` alias অনেক বেশি flexible। এটি শুধু object ই না  primitive types, unions, tuples এবং intersections সবকিছুর জন্যই ব্যবহার করা যায়।

<!-- Example -->

interface User {
  name: string;
  age: number;
}

type Status = "pending" | "success" | "failed";