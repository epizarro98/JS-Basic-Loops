//Question 1
//Write a for loop that will log only the even numbers in 0 through 200.
// Hint: Think about the increment expression.


for(var i = 0; i <= 200; i+=2) { // will add plus 2
    console.log(i)
}


//Question 2
//Write code that logs "Love me, pet me! HSSSSSS!" 10 times.

// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", "meow?", or "...why does the red dot always get away..." at random.

// Hint: You will need to use Math.random()

   kittens = ['human why you take pictures','the catnip made me do it', 'meow?', 'why does the red dot always get away']
   kittens[0];
   kittens[1];
   kittens[2];
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
    let randomChoice = Math.floor(Math.random() * 4) 
    console.log(kittens[randomChoice])
    }
  }
//I wasnt sure on how to get that code to print 10 times. I also had a classmate help me on this is so shout out to thst person. But for the mos part I do get whats going on.


//Question 3
//Declare a variable called currentTemp that stores the current temperature. Set this to a random whole number between 1 and 100.
// Hint: Use Math.random then multiply by 100 - make sure to use floor or rnd to get a whole number

// Declare a variable called desiredTemp that is the temperature in Fahrenheit, that you personally like to relax at. (For most of us, this is between 68 and 72!)

// Print out the current temperature is. For example:

// The current temperature is 24F
// While the temperature is too low, add a degree to the current temperature. Every time you increase the temperature, print out the current temperature again. For example:
// The current temperature is now 25F
// While the temperature is too high, subtract a degree from the current temperature. Every time you decrease the temperature, print out the current temperature again.


let currentTemp = Math.floor(Math.random() * 100) 
 let desiredTemp = 70
 let isDesiredTemp = false

 console.log(`The current temperature is ${currentTemp}F`);

  while(currentTemp === 70) {
      console.log(`The current temperature is finally ${desiredTemp}F`)
  }
  while(currentTemp < 70) {
   console.log(`The current temperature is now ${currentTemp}F`)
   currentTemp++ 
  } while(currentTemp > 70) {
      console.log(`The current temperature is now ${currentTemp}F`)
      currentTemp--
  }
  console.log(Math.floor(Math.random(29)))


//while(!isDesiredTemp){
//     if(desiredTemp === currentTemp){
//       isDesiredTemp = true
//     }else if(currentTemp < desiredTemp){
//       currentTemp++
//       console.log("current temperature is " + currentTemp + "F")
//     } else if(currentTemp > desiredTemp){
//       currentTemp--
//        console.log("current temperature is " + currentTemp + "F")
//     }
// }
  //METEENS SOLUTION



  

  //Write a javascript application that logs all numbers from 1 - 100.

// If a number is divisible by 3 log "Fizz" instead of the number.

// If a number is divisible by 5 log "Buzz" instead of the number.

// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number

for (let i = 0; i <= 100; i++) {

  if (i % 15 === 0) {
    console.log('FizzBuzz')
  }else if(i % 3 === 0){
    console.log('Fizz')
  }else if(i % 5 === 0){
    console.log('Buzz')
  }else {
    console.log(i)//i = 0?
  }
}
//I did alot of research on it and found multiple ways on how to do this but this way made the most sense to be. I have a pretty good understanding with whats going on in this code. I also found it interesting seeing the different kinds of solutions.



//Have you learned about JavaScript objects yet? If you've got some bonus time, there's no time like the present!

// Use a for...in loop to examine the phoneBook Object below and print out the names of all the people who share the phone number "333-333-3333".

var phoneBook = {
  "Abe": "111-111-1111",
  "Bob": "222-222-2222",
  "Cam": "333-333-3333",
  "Dan": "444-444-4444",
  "Ern": "555-555-5555",
  "Fry": "111-111-1111",
  "Gil": "222-222-2222",
  "Hal": "333-333-3333",
  "Ike": "444-444-4444",
  "Jim": "555-555-5555",
  "Kip": "111-111-1111",
  "Liv": "222-222-2222",
  "Mia": "333-333-3333",
  "Nik": "444-444-4444",
  "Oli": "555-555-5555",
  "Pam": "111-111-1111",
  "Qiq": "222-222-2222",
  "Rob": "333-333-3333",
  "Stu": "444-444-4444",
  "Tad": "555-555-5555",
  "Uwe": "111-111-1111",
  "Val": "222-222-2222",
  "Wil": "333-333-3333",
  "Xiu": "444-444-4444",
  "Yam": "555-555-5555",
  "Zed": "111-111-1111"
};
//333-333-3333
for(var person in phoneBook){
  if(phoneBook[person] === "333-333-3333"){
    console.log(person)
  }
}

//Shoutout to Seth and Trev for they helped and broke down the steps on how to do this. Also have a good understanding.