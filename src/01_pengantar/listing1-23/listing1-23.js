var letter: string = 'a';
let digit: number = 1;
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
let letters: Array = ['c', 'z', ...vowels, 'b'];
let mixed: any[] = ['a', 1, 'b', 2, 'c', 3];
let plainArray = ['a', 1, 'b', 2, 'c', 3];

function worldMessage(message: string) { 
  // Template literal
  console.log(`${message} World!`)
}

let arrowEchoer = (message: number) => { console.log(message); return message };

worldMessage("Hello");
arrowEchoer(1);

// TypeScript detects incorrect assignments/calls
digit = "a"; // "a" not assignable to type 'number'
worldMessage(1);// 1 not assignable to type 'string'
arrowEchoer("Hello");// "Hello" not assignable to type 'number'