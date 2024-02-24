/* Ques # 17:
 Shrinking guest list: You just found out that Your new dinner table won't arrive in time for the dinner,and you have space for only Two guests.

. Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only Two people for dinner.

. Remove guest from your list one at a time until only Two names remain in your list.Each time you pop a name from your list, print a message to that person letting them know you're sorry you can't invite them to dinner.

. Print a message to each of the two people still on your list, letting them know they're still invited.

. Remove the last two names from your list, so you have an empty list. print your list to make sure you actually have an empty list at the end of your program.*/

 
let guestArr: string[] = ["Sana","Uzma","Mariyam","Hassan"];

console.log("I can invite only two people to Dinner.");

 while(guestArr.length>2){
    let removeGuest = guestArr.pop()
    console.log(`Dear ${removeGuest}, You're sorry You can't invited them to Dinner.`)
 };

 guestArr.map((item) =>{
    console.log(`Dear ${item}, You are still invited to the Dinner`)
 })
 
guestArr.splice(0,2);
console.log(guestArr);



