var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log(" 45 QUUESTIONS OF ASSIMENTS");
// QUESTION 2
var message1 = "yaram";
console.log("hello " + message1 + ",how do you do ?");
// 
console.log("\n");
// 
// QUESTION 3
var m = "aisha jee";
// TO LOWER CASE
console.log(m.toLowerCase());
// TO UPPERCASE
console.log(m.toUpperCase());
// TO TITTLE CASE
console.log(m.replace(/\b\w/g, function (a) { return a.toUpperCase(); }));
// 
console.log("\n");
// 
// QUESTION 4
console.log("\"once a person said,\"Everything begins with expectations and ends with experince\"");
// 
console.log("\n");
// 
// QUESTION 5
var famous_persons = "a person";
var message = " once said,\"Everything begins with expectations and ends with experince\"";
console.log(famous_persons, message);
// 
console.log("\n");
// 
// QUESTION 6
// WITH WHITESPACES
var whitespaces = "\n\t AishaJee \t\n";
console.log(whitespaces);
// WITHOUT WHITESPACES
console.log(whitespaces.trim());
// 
console.log("\n");
// 
// QUESTION 7 AND 8
console.log(2 + 6);
console.log(14 - 6);
console.log(2 * 4);
console.log(16 / 2);
// 
console.log("\n");
// 
// QUESTION 9
var favouratenumber = "29";
var message2 = "my favourate number is:";
console.log(message2 + favouratenumber);
// 
console.log("\n");
// 
// QUESTION 10
// THREE TYPES OF VARIABLES (which tells about data type):
// STRING: any text not contaning no for calculation 
// NUMBER: numbers for calculation
// BOOLEAN: can contain only yes or no
// STRING eg:
var num = "1";
var num1 = "1";
console.log(num + num1);
// NUMBER eg:
var num2 = 1;
var num3 = 1;
console.log(num2 + num3);
// string + number eg:
var num4 = 1;
var num5 = "1";
console.log(num4 + num5);
// 
console.log("\n");
// 
// QUESTION 11
var namelist = ["osaf", "aqsa", "jia", "biya"];
namelist.forEach(function (namelist) { return console.log(namelist); });
// 
console.log("\n");
// 
// QUESTION 12
var namelist1 = ["osaf", "aqsa", "jia", "biya"];
namelist1.forEach(function (namelist) { return console.log("hello ".concat(namelist, ", how do you do?")); });
// 
console.log("\n");
// 
// QUESTION NO 13 
var transport = ["bycycle", "car", "heavybike",];
transport.forEach(function (transport) { return console.log("i will like to invest my first slary for ".concat(transport)); });
// 
console.log("\n");
// 
// QUESTION 14 
// INVITING GUEST
var guestlist0 = ["aqsa", "osaf", "biya", "jia"];
guestlist0.forEach(function (guestlist) { return console.log("hello ".concat(guestlist, ",it will be honour for me if you will join me at dinner")); });
// 
console.log("\n");
// 
//  QUESTION 15
// MODIFING INVITATION GUESTLIST
var guestlist1 = ["aqsa", "osaf", "biya", "jia"];
var cannotAttend1 = guestlist1[1];
console.log(cannotAttend1, "having transport issue");
guestlist1.splice(1, 1, "ali");
guestlist1.forEach(function (guestlist) { return console.log("hello ".concat(guestlist, ",it will be honour for me if you will join me at dinner.")); });
// 
console.log("\n");
// 
// QUESTION 16 
// MODIFING INVITATION GUESTLIST
// list
var guestlist = ["aqsa", "osaf", "biya", "jia"];
// guest can not attend
var cannotAttend = guestlist[1];
console.log(cannotAttend, "having transport issue");
// replacing guest by new guest 
guestlist.splice(1, 1, "ali");
console.log("good news! we got a new bigger tabble for dinner ");
// addind new guest in starting index of array
guestlist.unshift("noor");
// adding new guest in ending index of array
guestlist.push("aisha");
// for adding new guest in middle of array or guest list
var middleIndex = Math.floor(guestlist.length / 2);
// adding new guest in middle index of array
guestlist.splice(middleIndex, 0, "shiza");
guestlist.forEach(function (oneguest) { return console.log("hello ".concat(oneguest, ",it will be honour for me if you will join me at dinner.")); });
// 
console.log("\n");
// 
//QUESTION 17
// SHRINKING INVITATION GUESTLIST
// list
var guestlist = ["aqsa", "osaf", "biya", "jia"];
// guest can not attend
var cannotAttends = guestlist[1];
console.log(cannotAttend, " having transport issue");
// replacing guest by new guest 
guestlist.splice(1, 1, "ali");
console.log("\n good news! we got a new bigger tabble for dinner ");
// addind new guest in starting index of array
guestlist.unshift("noor");
// adding new guest in ending index of array
guestlist.push("aisha");
// for adding new guest in middle of array or guest list
var middleIndex = Math.floor(guestlist.length / 2);
// adding new guest in middle index of array
guestlist.splice(middleIndex, 0, "shiza");
guestlist.forEach(function (oneguest) { return console.log("\n hello ".concat(oneguest, ",it will be honour for me if you will join me at dinner.")); });
// INFORMING GUEST ABOUT DINNER TABBLE 
console.log("\n Sorry ,guys i am feeling very sad to inform you that the dinner tabble wont arrive on time. So,I can only invite only 2 persons for dinner. ");
// removing guest from list until 2 guest remain
// using while loop to remove guests until 2 guests will remain
while (guestlist.length > 2) {
    var removedguest = guestlist.pop();
    console.log("\n sorry , ".concat(removedguest, " i cannt invite you"));
}
;
// invinting remaining 2 guests
console.log("\n luckly these guests are still invited");
guestlist.forEach(function (guestlist) { return console.log("\n hello ".concat(guestlist, ", happyly you are still invited.")); });
"\n";
// also removing last two names
while (guestlist.length > 0) {
    guestlist.pop();
}
console.log("\n emty list", guestlist);
// 
console.log("\n");
// 
// QUESTION 18 
// PLACES LIKE TO VISIT IN THIS WORLD
// list in oeriginal order
var contrieslist = ["Italy", "Thailand", "Germani", "Argentina", "Korea"];
console.log("\n original order:", contrieslist);
// printing array in alphabetical order without modifing array
console.log("\n alphabetical order :", __spreadArray([], contrieslist, true).sort());
// in original order again 
console.log("\n still oriiginal order:", contrieslist);
// in reverse order
console.log("\n reverse order:", __spreadArray([], contrieslist, true).reverse());
// in original order again 
console.log("\n still oriiginal order:", contrieslist);
// modifing original array in reverse order
console.log("\n original array reversed", contrieslist.reverse());
// back to original order
console.log("\n original order:", contrieslist.reverse());
// modifing original array in alphabetical order
console.log("\n alphabetical order :", contrieslist.sort());
// modifing original array in reverse order again
console.log("\n reverse order again", contrieslist.reverse());
// 
console.log("\n");
// 
// QUESTION 19
// calculating no of guests
var guestlist = ["aqsa", "osaf", "biya", "jia"];
// let cannotAttend = guestlist[1];
// console.log(cannotAttend ,"having transport issue")
// guestlist.splice(1,1, "ali");
// guestlist.forEach(guestlist => console.log (`hello ${guestlist},it will be honour for me if you will join me at dinner.`))
var lengthguest = guestlist.length;
console.log("i am inviting ".concat(lengthguest, " guests."));
// 
console.log("\n");
// 
// QUESTIN 20
// making list
var language = ["urdu", "hindi", "english", "thai", "chinese"];
language.forEach(function (a) { return console.log(a); });
// 
console.log("\n");
var BMWcar = {
    model: "x5",
    year: "2022",
    color: "black",
    price: "600000",
};
// printing object 
console.log(BMWcar);
// 
console.log("\n");
// 
// QUESTION 22
// PRODUCING ERROR IN ARRAY
var error = ["a", "b", "c", "d", "e"];
// printing error
console.log(error[8]);
console.log(error[3]);
// 
console.log("\n");
// 
// QUESTION 23
// TEST1
var a = 1;
var b = 2;
console.log("test1:a is equals to 1");
console.log(a == 1);
// TEST2
console.log("test2 :a isnt equal to 2");
console.log(a != 2);
// TEST3
console.log("test3:a +b is equals to 3");
console.log(a + b == 3);
// TEST4
console.log("test4 : b is equals to 2");
console.log(b == 2);
// TEST5
console.log("test5 :b isnt equals to 4");
console.log(b != 4);
// TEST6
console.log("test6: b divide by 4 is 1");
console.log(b / 4 == 1);
// TEST7
console.log("test7 : a multiply by b is 3");
console.log(a * b == 3);
// TEST8 
console.log("test8:5 is greater than 10");
console.log(5 > 10);
// TEST9
console.log("test9: b is smaller than 1");
console.log(b < 1);
// TEST10
console.log("test10: a substracts from b + 5 is 4");
console.log(a - (b + 5) == 4);
// 
console.log("\n");
// 
// QUESTION 24
// condition testing 
var fruit = "mango";
var uppercasefruit = "MANGO";
var ten = 10;
var twenty = 20;
var fruitlist = ["mango", "apple", "banana"];
// equalities and inequalities in strings 
console.log("is fruit is equals to mango");
console.log(fruit == "mango");
console.log(" is fruit isnt equals to mango");
console.log(fruit != "mango");
// using lower case function
console.log("is uppercasefruit is equals to mango after converting into lowercase");
console.log(uppercasefruit.toLowerCase() == "mango");
console.log("is uppercasefruit isnot equals to mango after converting into mango");
console.log(uppercasefruit.toLowerCase() != "mango");
// numerical testing
console.log("is 10 equals to 10");
console.log(ten == 10);
console.log("is 10 is equal to 20");
console.log(ten == twenty);
console.log("is 10 isnt equal to 20");
console.log(ten != twenty);
console.log("is 20 is less than 0");
console.log(20 < 0);
// using "and" & "or"
console.log("twenty is equals to 20 and twenty greater than ten");
console.log(twenty == 20 && twenty > 10);
console.log("twenty isnt equals to 20 and twenty greater than 30");
console.log(twenty != 20 && twenty > 30);
console.log("twenty is equals to 10 or twenty is geater than 10");
console.log(twenty == 10 || 20 > 10);
// testing array by using conditions 
console.log("fruitlist contain banana ");
console.log(fruitlist.includes("banana"));
console.log("fruitlist is not having mango");
console.log(!fruitlist.includes("mango"));
// QUESTION 25
// IF CONDITION 
var aliencolor = "red";
if (aliencolor === "red") {
    console.log("player earn 5 points");
}
if (aliencolor === "black") {
    console.log("player earn 5 points");
}
// QUESTION 26
// IF ELSE CONDITION 
var aliencolor = "green";
// if version
if (aliencolor === "green") {
    console.log("the player just earn 5 points for shooting the alien.");
}
else {
    console.log("player just earn 5 points");
}
;
// else version 
if (aliencolor === "red ") {
    console.log("condition is true ");
}
else {
    console.log("the given condition isnt true(else statement)");
}
;
// QUESTION 27
// multiple if conditions
// version1
var aliencolor1 = "green";
//  #1
if (aliencolor1 === "green") {
    console.log("(version 1 ) you shot down green alien you have earned 5 points.");
}
// #2
else if (aliencolor1 === "yellow") {
    console.log("(version 1) you shot down yellow alien you have earned 10 points.");
}
// #3
else if (aliencolor1 === "red ") {
    console.log("(version 1) you shot down red alien you have earned 15 points.");
}
// version 2
var aliencolor2 = "yellow";
//  #1
if (aliencolor2 === "green") {
    console.log("(version 2) you shot down green alien you have earned 5 points.");
}
// #2
else if (aliencolor2 === "yellow") {
    console.log("(version 2) you shot down yellow alien you have earned 10 points.");
}
// #3
else if (aliencolor2 === "red ") {
    console.log("(version 2) you shot down red alien you have earned 15 points.");
}
// version 3
var aliencolor3 = "red";
//  #1
if (aliencolor3 === "green") {
    console.log("(version 3) you shot down green alien you have earned 5 points.");
}
// #2
else if (aliencolor3 === "yellow") {
    console.log("(version 3) you shot down yellow alien you have earned 10 points.");
}
// #3
else if (aliencolor3 === "red") {
    console.log("(version 3) you shot down red alien you have earned 15 points.");
}
// QUESTION 28
var age = 18;
if (age < 2) {
    console.log("the person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("the person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("the person ia a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("the person is adult");
}
else if (age >= 65) {
    console.log(" the person is an elder");
}
// QUESTION 29
var favorite_fruits = ["mango", "strawberry", "apple"];
if (favorite_fruits.includes("mango")) {
    console.log("i love to eat mango.");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("i love to eat strawberry.");
}
if (favorite_fruits.includes("apple")) {
    console.log("i love to eat apple.");
}
if (favorite_fruits.includes("banana")) {
    console.log("i love to eat banana.");
}
if (favorite_fruits.includes("orange")) {
    console.log("i love to eat orange.");
}
//  QUESTION 30
var usernames = ["aisha", "saam", "admin", "biya", "shah"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("hello ".concat(username, ",would you like to see a status report?."));
    }
    else {
        console.log("hello ".concat(username, ",thankyou for logging in again."));
    }
});
// QUESTION 31
var usernames = ["aisha", "saam", "admin", "biya", "shah"];
// array having values
console.log("\t array with values");
if (usernames.length === 0) {
    console.log("your array is emty we need to find some users!");
}
else {
    usernames.forEach(function (username) {
        if (username === "admin") {
            console.log("hello ".concat(username, ",would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(username, ",thankyou for logging in again."));
        }
    });
}
// array isnt having values
usernames = [];
console.log("\n \t array not having values");
if (usernames.length === 0) {
    console.log("your array is emty we need to find some users!");
}
else {
    usernames.forEach(function (username) {
        if (username === "admin") {
            console.log("hello ".concat(username, ",would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(username, ",thankyou for logging in again."));
        }
    });
}
;
// QUESTION 32
// making array
var current_users = ["aisha", "biya", "zain", "saam"];
var new_users = ["aaliy", "saim", "biya", "laiba", "aisha"];
// using loop for user name avaibility
new_users.forEach(function (A) {
    // making condition for user name already taken
    if (current_users.some(function (B) { return A.toLowerCase() === B.toLowerCase(); })) {
        console.log("sorry ".concat(A, " is already taken."));
    }
    else {
        console.log("this username ".concat(A, " is avalible."));
    }
});
// QUESTION 33
var ordinalnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  using for loop similar to foreach loop
for (var _i = 0, ordinalnumber_1 = ordinalnumber; _i < ordinalnumber_1.length; _i++) {
    var eachnumber = ordinalnumber_1[_i];
    var ordinalending = void 0;
    if (eachnumber === 1) {
        ordinalending = "st";
    }
    else if (eachnumber === 2) {
        ordinalending = "nd";
    }
    else if (eachnumber === 3) {
        ordinalending = "rd";
    }
    else
        (ordinalending = "th");
    console.log("".concat(eachnumber).concat(ordinalending));
}
// QUESTION 34
var pizzaflavour = ["fajita", "ckn tikka", "malai", "cheese lover"];
// using for loop
for (var _a = 0, pizzaflavour_1 = pizzaflavour; _a < pizzaflavour_1.length; _a++) {
    var eachflavour = pizzaflavour_1[_a];
    console.log("i like ".concat(eachflavour, " pizza."));
}
// printing a msg outside of loop
console.log("\n i love pizza");
console.log("its a junk food");
// QUESTION 35
var animals = ["horse", "dog", "cat"];
for (var _b = 0, animals_1 = animals; _b < animals_1.length; _b++) {
    var eachanimal = animals_1[_b];
    console.log(eachanimal);
}
for (var _c = 0, animals_2 = animals; _c < animals_2.length; _c++) {
    var eachanimal = animals_2[_c];
    console.log("\n ".concat(eachanimal, " is a beautiful animal."));
}
console.log("\n they are good to be pet.");
// QUESTION 36
function tshirt(size, text) { console.log("you order a ".concat(size, " shirt with ").concat(text, " print on it")); }
;
tshirt("large", "emoji");
tshirt("small", "doll");
// QUESTION 37
function tshirt1(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "emoji"; }
    console.log("you order a ".concat(size, " shirt with ").concat(text, " print on it"));
}
;
tshirt1();
tshirt1("medium");
// different msg
tshirt1("small", "company logo");
// QUESTION 38
// using function 
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is the city of ").concat(country, ". "));
}
describe_city("karachi");
describe_city("rome", "italy");
describe_city("abu dabi", "dubai");
// QUESTION 39
// using return along with function
function describe_city1(city, country) {
    if (country === void 0) { country = "pakistan"; }
    return "".concat(city, " ").concat(country);
}
var f1 = describe_city1("karachi");
var f2 = describe_city1("rome", "italy");
var f3 = describe_city1("abu dabi", "dubai");
console.log(f1);
console.log(f2);
console.log(f3);
