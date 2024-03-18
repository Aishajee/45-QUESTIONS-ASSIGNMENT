console.log(" 45 QUESTIONS OF ASSIMENTS");

// QUESTION 2

let message1 = "yaram"
console.log("hello " + message1 +",how do you do ?")


// 
console.log("\n");
// 

// QUESTION 3

let m ="aisha jee"

// TO LOWER CASE
console.log(m.toLowerCase());

// TO UPPERCASE
console.log(m.toUpperCase());

// TO TITTLE CASE
console.log(m.replace(/\b\w/g, (a)=> a.toUpperCase()));

// 
console.log("\n");
// 

// QUESTION 4

console.log("\"once a person said,\"Everything begins with expectations and ends with experince\"");

// 
console.log("\n");
// 

// QUESTION 5

let famous_persons = "a person";

let message = " once said,\"Everything begins with expectations and ends with experince\"";

console.log(famous_persons,message);

// 
console.log("\n");
// 

// QUESTION 6

// WITH WHITESPACES

let whitespaces = "\n\t AishaJee \t\n"

console.log(whitespaces);

// WITHOUT WHITESPACES

console.log(whitespaces.trim());

// 
console.log("\n");
// 


// QUESTION 7 AND 8

console.log(2+6);

console.log(14-6);

console.log(2*4);

console.log(16/2);

// 
console.log("\n")
// 

// QUESTION 9

let favouratenumber = "29"

let message2 = "my favourate number is:"

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
let num="1"
let num1="1"
console.log(num+num1)

// NUMBER eg:
let num2 =1;
let num3 =1;
console.log(num2 + num3);

// string + number eg:
let num4=1
let num5="1"
console.log(num4+num5);

// 
console.log("\n");
// 

// QUESTION 11

let namelist = ["osaf","aqsa","jia","biya"]

namelist.forEach(namelist => console.log(namelist));

// 
console.log("\n");
// 

// QUESTION 12

let namelist1 = ["osaf","aqsa","jia","biya"]

namelist1.forEach(namelist => console.log(`hello ${namelist}, how do you do?`));

// 
console.log("\n");
// 

// QUESTION NO 13 

let transport =["bycycle","car","heavybike",]

transport.forEach(transport => console.log(`i will like to invest my first slary for ${transport}` ));

// 
console.log("\n");
// 

// QUESTION 14 

// INVITING GUEST

let guestlist0 =["aqsa","osaf","biya","jia"]

guestlist0.forEach(guestlist => console.log (`hello ${guestlist},it will be honour for me if you will join me at dinner`));

// 
console.log("\n");
// 

//  QUESTION 15

// MODIFING INVITATION GUESTLIST

let guestlist1 =["aqsa","osaf","biya","jia"];

let cannotAttend1 = guestlist1[1];

console.log(cannotAttend1 ,"having transport issue");
guestlist1.splice(1,1, "ali");

guestlist1.forEach(guestlist => console.log (`hello ${guestlist},it will be honour for me if you will join me at dinner.`));

// 
console.log("\n");
// 

// QUESTION 16 

// MODIFING INVITATION GUESTLIST
// list
let guestlist =["aqsa","osaf","biya","jia"];

// guest can not attend
let cannotAttend = guestlist[1];

console.log(cannotAttend ,"having transport issue");

// replacing guest by new guest 
guestlist.splice(1,1, "ali");

console.log ("good news! we got a new bigger tabble for dinner " );

// addind new guest in starting index of array
guestlist.unshift("noor");

// adding new guest in ending index of array
guestlist.push("aisha"); 

// for adding new guest in middle of array or guest list
let middleIndex:number = Math.floor(guestlist.length /2);

// adding new guest in middle index of array
guestlist.splice(middleIndex,0,"shiza");

guestlist.forEach(oneguest => console.log (`hello ${oneguest},it will be honour for me if you will join me at dinner.`));

// 
console.log("\n");
// 


//QUESTION 17

// SHRINKING INVITATION GUESTLIST
// list
let guestlist =["aqsa","osaf","biya","jia"];

// guest can not attend
let cannotAttends = guestlist[1];

console.log(cannotAttend ," having transport issue");

// replacing guest by new guest 
guestlist.splice(1,1, "ali");

console.log ("\n good news! we got a new bigger tabble for dinner " );

// addind new guest in starting index of array
guestlist.unshift("noor");

// adding new guest in ending index of array
guestlist.push("aisha"); 

// for adding new guest in middle of array or guest list
let middleIndex:number = Math.floor(guestlist.length /2);

// adding new guest in middle index of array
guestlist.splice(middleIndex,0,"shiza");

guestlist.forEach(oneguest => console.log (`\n hello ${oneguest},it will be honour for me if you will join me at dinner.`))

// INFORMING GUEST ABOUT DINNER TABBLE 

console.log("\n Sorry ,guys i am feeling very sad to inform you that the dinner tabble wont arrive on time. So,I can only invite only 2 persons for dinner. ");

// removing guest from list until 2 guest remain
// using while loop to remove guests until 2 guests will remain

while(guestlist.length >2 ){
    let removedguest = guestlist.pop();
    console.log(`\n sorry , ${removedguest} i cannt invite you`)};

// invinting remaining 2 guests
console.log("\n luckly these guests are still invited")

guestlist.forEach(guestlist =>console.log(`\n hello ${guestlist}, happyly you are still invited.`));"\n"

// also removing last two names
while (guestlist.length >0){
    guestlist.pop();
}
console.log ("\n emty list" , guestlist);



// 
console.log("\n");
// 


// QUESTION 18 
// PLACES LIKE TO VISIT IN THIS WORLD

// list in oeriginal order
let contrieslist = ["Italy","Thailand","Germani","Argentina","Korea"];
console.log ("\n original order:", contrieslist );

// printing array in alphabetical order without modifing array
console.log("\n alphabetical order :",[...contrieslist].sort());

// in original order again 
console.log ("\n still oriiginal order:",contrieslist);

// in reverse order
console.log ("\n reverse order:",[...contrieslist].reverse());

// in original order again 
console.log ("\n still oriiginal order:",contrieslist);

// modifing original array in reverse order
console.log("\n original array reversed",contrieslist.reverse());

// back to original order
console.log("\n original order:",contrieslist.reverse());

// modifing original array in alphabetical order
console.log( "\n alphabetical order :",contrieslist.sort());


// modifing original array in reverse order again
console.log("\n reverse order again",contrieslist.reverse());



// 
console.log("\n");
// 


// QUESTION 19

// calculating no of guests
let guestlist =["aqsa","osaf","biya","jia"];

// let cannotAttend = guestlist[1];

// console.log(cannotAttend ,"having transport issue")
// guestlist.splice(1,1, "ali");

// guestlist.forEach(guestlist => console.log (`hello ${guestlist},it will be honour for me if you will join me at dinner.`))

let lengthguest = guestlist.length;
console.log (`i am inviting ${lengthguest} guests.`);



// 
console.log("\n");
// 


// QUESTIN 20
// making list

let language = ["urdu" ,"hindi" ,"english","thai","chinese" ];
language.forEach(a => console.log(a));


// 
console.log("\n");
// 

// QUESTION 21
// MAKING OBJECT

interface BMWcar {
    model:string;
    year:number;
    color:string;
    price :number;
}

let BMWcar ={
    model: "x5",
    year:"2022",
    color: "black",
    price:"600000",
} 
// printing object 
console.log(BMWcar);


// 
console.log("\n");
// 


// QUESTION 22
// PRODUCING ERROR IN ARRAY
let error:string[] =["a","b","c","d","e"];

// printing error
console.log(error[8]);
console.log(error[3]);


// 
console.log("\n");
// 


// QUESTION 23
// TEST1
let a = 1 ;
let b = 2;
console.log("test1:a is equals to 1");
console.log(a == 1)

// TEST2
console.log("test2 :a isnt equal to 2");
console.log(a != 2);

// TEST3
console.log("test3:a +b is equals to 3");
console.log (a+b == 3);

// TEST4
console.log("test4 : b is equals to 2");
console.log (b == 2);

// TEST5
console.log ("test5 :b isnt equals to 4");
console.log (b != 4);

// TEST6
console.log ("test6: b divide by 4 is 1");
console.log(b/4 == 1);

// TEST7
console.log ("test7 : a multiply by b is 3");
console.log (a*b == 3);

// TEST8 
console.log("test8:5 is greater than 10"); 
console.log(5>10);

// TEST9
console.log("test9: b is smaller than 1");
console.log(b<1);

// TEST10
console.log("test10: a substracts from b + 5 is 4");
console.log (a-(b+5) == 4);


// 
console.log("\n");
// 

// QUESTION 24

// condition testing 
let fruit = "mango" ;
let uppercasefruit = "MANGO" ;
let ten = 10 ;
let twenty = 20 ;
let fruitlist = ["mango","apple","banana"]
// equalities and inequalities in strings 
console.log ("is fruit is equals to mango");
console.log (fruit == "mango");

console.log (" is fruit isnt equals to mango");
console.log(fruit != "mango");

// using lower case function
console.log ("is uppercasefruit is equals to mango after converting into lowercase");
console.log (uppercasefruit.toLowerCase() == "mango");
 
console.log ("is uppercasefruit isnot equals to mango after converting into mango" );
console.log (uppercasefruit.toLowerCase() != "mango");

// numerical testing
console.log("is 10 equals to 10");
console.log(ten == 10);

console.log("is 10 is equal to 20");
console.log(ten == twenty);

console.log("is 10 isnt equal to 20");
console.log (ten != twenty);

console.log ("is 20 is less than 0");
console.log(20 < 0);

// using "and" & "or"
console.log("twenty is equals to 20 and twenty greater than ten");
console.log( twenty == 20 && twenty > 10);

console.log("twenty isnt equals to 20 and twenty greater than 30");
console.log( twenty != 20 && twenty > 30);

console.log("twenty is equals to 10 or twenty is geater than 10");
console.log (twenty == 10 || 20 > 10);

// testing array by using conditions 
console.log("fruitlist contain banana ");
console.log (fruitlist.includes("banana"));

console.log("fruitlist is not having mango");
console.log(!fruitlist.includes("mango"));


// 
console.log("\n");
// 


// QUESTION 25

// IF CONDITION 
let aliencolor ="red";

if (aliencolor === "red"){
    console.log("player earn 5 points");
}
if (aliencolor ==="black"){
    console.log ("player earn 5 points")
}


// 
console.log("\n");
// 



// QUESTION 26

// IF ELSE CONDITION 

let aliencolor0 = "green";

// if version

if(aliencolor0 === "green"){
    console.log("the player just earn 5 points for shooting the alien.")
}
else{console.log ("player just earn 5 points")};

// else version 

if (aliencolor0 === "red "){
    console.log ("condition is true ")
}
else{console.log ("the given condition isnt true(else statement)")};

// 
console.log("\n");
// 


// QUESTION 27

// multiple if conditions
// version1

let aliencolor1 = "green";

//  #1
if(aliencolor1 === "green"){
    console.log("(version 1 ) you shot down green alien you have earned 5 points.");
}

// #2
else if(aliencolor1 === "yellow"){
    console.log ("(version 1) you shot down yellow alien you have earned 10 points.");
}

 // #3
else if (aliencolor1 === "red "){
    console.log("(version 1) you shot down red alien you have earned 15 points.");
}

// version 2

let aliencolor2 = "yellow";

//  #1
if(aliencolor2 === "green"){
    console.log("(version 2) you shot down green alien you have earned 5 points.");
}

// #2
else if(aliencolor2 === "yellow"){
    console.log ("(version 2) you shot down yellow alien you have earned 10 points.");
}

 // #3
else if (aliencolor2 === "red "){
    console.log("(version 2) you shot down red alien you have earned 15 points.");
}

// version 3

let aliencolor3 = "red";

//  #1
if(aliencolor3 === "green"){
    console.log("(version 3) you shot down green alien you have earned 5 points.");
}

// #2
else if(aliencolor3 === "yellow"){
    console.log ("(version 3) you shot down yellow alien you have earned 10 points.");
}

 // #3
else if (aliencolor3 === "red"){
    console.log("(version 3) you shot down red alien you have earned 15 points.");
}

// 
console.log("\n");
// 


// QUESTION 28

let age = 18 ;

if (age < 2){
    console.log("the person is a baby");
}
else if (age >=2 && age <4 ){
    console.log ("the person is a toddler");
}
else if( age >=4 && age < 13){
    console.log("the person is a kid");
}
else if (age >= 13 && age < 20 ){
    console.log ("the person ia a teenager"); 
}
else if (age >= 20 && age < 65){
    console.log("the person is adult");
}
else if (age >= 65){
    console.log (" the person is an elder");
}

// 
console.log("\n");
// 


// QUESTION 29

let favorite_fruits = ["mango","strawberry","apple"];

if (favorite_fruits.includes("mango")){

    console.log("i love to eat mango.");
}
if (favorite_fruits.includes("strawberry")){

    console.log("i love to eat strawberry.");
}
if (favorite_fruits.includes("apple")){

    console.log("i love to eat apple.");
}
if (favorite_fruits.includes("banana")){

    console.log("i love to eat banana.");
}
if (favorite_fruits.includes("orange")){

    console.log("i love to eat orange.");
}

// 
console.log("\n");
// 


//  QUESTION 30

let usernames =["aisha","saam","admin","biya","shah"];

usernames.forEach(username => {
    if(username === "admin"){
        console.log(`hello ${username},would you like to see a status report?.`);
    }
    else{console.log (`hello ${username},thankyou for logging in again.`);
}
});


// 
console.log("\n");
// 


// QUESTION 31

let usernames1 =["aisha","saam","admin","biya","shah"];

// array having values
console.log("\t array with values")
if (usernames1.length === 0){
    console.log("your array is emty we need to find some users!")
}
else{
usernames1.forEach(username => {
    if(username === "admin"){
        console.log(`hello ${username},would you like to see a status report?`);
    }
    else{console.log (`hello ${username},thankyou for logging in again.`)
}
})
}

// array isnt having values

usernames =[];
console.log ("\n \t array not having values")
if (usernames.length === 0){
    console.log("your array is emty we need to find some users!")
}
else{
usernames.forEach(username => {
    if(username === "admin"){
        console.log(`hello ${username},would you like to see a status report?`);
    }
    else{console.log (`hello ${username},thankyou for logging in again.`)
}
})
};

// 
console.log("\n");
// 


// QUESTION 32

// making array
let current_users = ["aisha","biya","zain","saam"];

let new_users = ["aaliy","saim","biya","laiba","aisha"];

// using loop for user name avaibility

new_users.forEach(A =>{

    // making condition for user name already taken

    if (current_users.some(B => A.toLowerCase() === B.toLowerCase())){
        console.log(`sorry ${A} is already taken.`)
    }
    else{console.log(`this username ${A} is avalible.`)}
});


// 
console.log("\n");
// 


// QUESTION 33
let ordinalnumber = [ 1,2,3,4,5,6,7,8,9];

//  using for loop similar to foreach loop

for (let eachnumber of ordinalnumber){ 
    let ordinalending : string;
 
    if (eachnumber === 1){
    ordinalending  = "st"
    }

    else if(eachnumber === 2){
        ordinalending = "nd"
    }

    else if(eachnumber === 3){
        ordinalending = "rd"
    }

    else (
        ordinalending = "th"
    )
 console.log (`${eachnumber}${ordinalending}`);
}


// 
console.log("\n");
// 


// QUESTION 34

let pizzaflavour = ["fajita","ckn tikka","malai","cheese lover"];

// using for loop
for(let eachflavour of pizzaflavour){
    console.log(`i like ${eachflavour} pizza.`);
}

// printing a msg outside of loop

console.log("\n i love pizza")
console.log ("its a junk food");


// 
console.log("\n");
// 


// QUESTION 35

let animals =["horse","dog","cat"];

for(let eachanimal of animals){
    console.log( eachanimal);
}

for( let eachanimal of animals){
    console.log(`\n ${eachanimal} is a beautiful animal.`);
}

console.log ("\n they are good to be pet.");


// 
console.log("\n");
// 


// QUESTION 36
function tshirt(size:string,text :string):

void{console.log(`you order a ${size} shirt with ${text} print on it`)};

tshirt("large","emoji");
tshirt("small","doll");


// 
console.log("\n");
// 


// QUESTION 37

function tshirt1(size:string = "large",text :string = "emoji"):

void{console.log(`you order a ${size} shirt with ${text} print on it`)};

tshirt1();
tshirt1("medium");

// different msg
tshirt1("small","company logo");

// 
console.log("\n");
// 



// QUESTION 38

// using function 

function describe_city (city:string , country : string = "pakistan"):

void{
    console.log(`${city} is the city of ${country}. `);
}

describe_city("karachi");
describe_city("rome","italy");
describe_city("abu dabi","dubai");

// 
console.log("\n");
// 



// QUESTION 39

// using return along with function


function describe_city1 (city:string , country : string = "pakistan"):string{
    return `${city} ${country}`
}

let f1 = describe_city1("karachi");
let f2 = describe_city1("rome","italy");
let f3 = describe_city1("abu dabi","dubai");

console.log(f1);
console.log(f2);
console.log(f3);

// 
console.log("\n");
// 


// QUESTION 40

function make_Album(artist:string , title:string):{artist:string; title:string} {
    const dictionary ={
        artist :artist.charAt(0).toUpperCase() +artist.slice(1),
        title :title.charAt(0).toUpperCase() +title.slice(1)
    };
    return dictionary;
}
let album = make_Album("aisha","blur")
console.log(album)

 album = make_Album("biya","golden")
 console.log (album)

 album = make_Album("shah","light")
 console.log (album)

// 
console.log("\n");
// 


 // QUESTION 41

let magician: string[] =["aisha","biya","saim"];


function show_magicians(magicians:string[]):void{ 
    for (let magician of magicians)
{
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
}
}

show_magicians(magician);


// 
console.log("\n");
// 


// QUESTION 42

let magicians =["aisha","biya","saam"];


function show_magicians0(magicians:string[]):void{ 
    for (let magician of magicians)
{
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1) );
}
};

function make_great(magicians:string[]):void{
for(let index = 0; index < magicians.length ; index++){
    magicians[index] = magicians[index] + ` the great`
}
};//index is indecating the values of array
make_great(magicians);
show_magicians0(magicians);

// 
console.log("\n");
// 



// QUESTION 43


let magicians1 :string[] =["aisha","biya","saam"];

// from Q#41

function show_magicians1(magicians:string[]):void{ 
    for (let magician of magicians)
{
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1) );
}
};

// 
console.log("\n");
// 



// fromQ#42

function make_great1(magicians:string[]): string[] {
    let great_magicians:string[]=[];
    // making index

for(let index = 0; index < magicians.length ; index++){
    // adding magicians index with the great

    great_magicians.push(magicians[index] + ` the great`)
} return great_magicians;};

// 
let great_magicians1 : string[]=make_great1(magicians1);
show_magicians1(magicians1);
show_magicians1(great_magicians1);

// 
console.log("\n");
// 


// QUESTION 44

function sandwich(...items :string[]):void{
    console.log("sandwich order:");
    for(let index =0 ; index < items.length ; index++){
        console.log(`${items[index]}`)
    }
};console.log ("dear customer , enjoy your sandwiches.");

sandwich("- chicken","- onion","- black peper.");
sandwich("- beef steaks","- tomato","- iceberg");
sandwich("- peperoni flavour","- cheese");


// 
console.log("\n");
// 


// QUESTION 45

interface car{
    manufecture:string,
    model:string,
    [feature :string]: any;
}
function carfeature( manufecture : string , model : string , optional : Record < string , any > ): car{
    return{
        manufecture,
        model,
        ...optional
    }
}
let mycar:car =carfeature("toyota","accord",{color:"silver", year:"2022"});
console.log(mycar);