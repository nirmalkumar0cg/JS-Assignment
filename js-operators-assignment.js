const prompt = require('prompt-sync')();
// Part A: Arithmetic Operators
// 1. Addition +

// A school collected ₹15,000 from one class and ₹12,500 from another class. Find the total collection.
let schoolMoneyClass1= 15000;
let schoolMoneyClass2= 12500;
let totalMoneyCollected = schoolMoneyClass1+schoolMoneyClass2;
console.log(`Total Money Collected = ${totalMoneyCollected}`)
// A person reads 18 pages in the morning and 25 pages in the evening. Find the total pages read.
let morningPages=18;
let eveningPages=25;
console.log(`Total Pages Read Today = ${morningPages+eveningPages}`)
// A shop sold 125 items on Monday and 178 items on Tuesday. Find the total items sold.
let mondaySold=125;
let tuesdaySold=178;
let totalSale=mondaySold+tuesdaySold;
console.log(`Total Item Sold = ${mondaySold+tuesdaySold}`)
// 2. Subtraction -

// A bus has 80 seats, and 53 seats are occupied. Find the number of empty seats.
let totalSeat=80;
let occupiedSeat=53;
let vacantSeats = totalSeat-occupiedSeat;
console.log(`Total Number Of Seat left is ${vacantSeats}`)
// A student has 500 marks and loses 35 marks due to incorrect answers. Find the final marks.
let studentTotalMarks=500;
let studentLostMarks=35;
let studentFinalMarks=studentTotalMarks-studentLostMarks;
console.log(`Total Marks Lost is = ${studentFinalMarks}`)
// A warehouse has 2,500 boxes and sends 875 boxes to a store. Find the remaining boxes.
let totalWarehouseBox=2500;
let sentWarehouseBox=875;
let leftoverWarehouseBox=totalWarehouseBox-sentWarehouseBox;
console.log(`Total LeftOver Boxes are = ${leftoverWarehouseBox}`)
// 3. Multiplication *


// One notebook costs ₹45. Calculate the cost of buying 8 notebooks.
let oneNbCost=45;
let nbQty=8;
console.log(`Total Price = ₹${oneNbCost*nbQty}`)
// A machine produces 120 bottles per hour. Calculate its production in 6 hours.
let bottlePerHour=120;
let bottlePerCustomHour=6
console.log(`Total Bottle Produced in 6 hours = ${bottlePerHour*bottlePerCustomHour}`)
// A garden has 7 rows with 15 plants in each row. Find the total number of plants.
let gardenRow=7;
let gardenPlantPerRow=15;
let totalNoOfPlant=gardenRow*gardenPlantPerRow
console.log(`The Total Number Of Plants Are-${totalNoOfPlant}`)
// 4. Division /

// A teacher distributes 144 pencils equally among 12 students. Find the number of pencils each student receives.
let totalPencils=144;
let totalStudents=12;
let totalPencilPerChild= totalPencils/totalStudents;
console.log(`Total Number Of Pencil Per Student=${totalPencilPerChild}`)

// A train travels 360 kilometres in 6 hours. Find its average distance travelled per hour.
let totalDistance=360;
let timeTaken=6;
let avgDistPerHour=totalDistance/timeTaken;
console.log(`Total Average distance travelled per hour${avgDistPerHour}`)
// A company distributes ₹72,000 equally among 9 departments. Find the amount received by each department.
let CompanyMoney=72000;
let TotalDepartments = 9;
console.log(`Total amouunt recieved by each department ${CompanyMoney/TotalDepartments}`)
// 5. Modulus % (5 questions)


// A teacher has 53 students and forms groups of 5. Find the number of students left over.
let totalStudent = 53;
let studentsGroup = 5;
let leftoverStudents = totalStudent%studentsGroup;
console.log(`Left Over Students in a group of 5= ${leftoverStudents}`)
// A shop has 128 candies and packs 10 candies in each box. Find the number of candies left unpacked.
let totalCandies = 128;
let candiesPackedPerBox=10;
let candiesLeftOver=totalCandies%candiesPackedPerBox;
console.log(`Candies Left Over ${candiesLeftOver}`)
// A number is given by the user. Check whether it is even or odd using the modulus operator.
let userNum=Number(prompt("Enter A Number You Want To Know If It's Even Or Odd: "))
userNum%2==0 ? console.log(`Even`) : console.log(`Odd`)
// A factory produces 237 toys and packs them in boxes of 6. Find how many toys are left after packing full boxes.
let totalToysProduced = 237;
let toysPerBox=6;
let toysLeft=totalToysProduced%toysPerBox;
console.log(`Toys Left To Pack = ${toysLeft}`)
// A bus can carry 40 passengers. If 185 people are waiting, find how many people will be left after filling as many full buses as possible.
let busCapacity=40;
let peopleWaiting=185;
let leftOverPeople=peopleWaiting%busCapacity;
console.log(`Total Number Of People After Filling as much as possible being left over=${leftOverPeople}`)
// 6. Exponentiation ** (5 questions)


// Find the volume of a cube with a side length of 6 cm using side ** 3.
let lenghtOfCube=6;
let volOfCube=lenghtOfCube**3
console.log(`The Volume Of Cube ${volOfCube}`)
// A bacteria culture doubles every hour. Calculate the number of bacteria after 4 hours using exponentiation (start with 1 bacterium: 1 * 2 ** 4).
let bacteriaPerHour=2;
let bacteriumAfterCustomHour=1*2**4;
console.log(`Bacteria After 4 Hours ${bacteriumAfterCustomHour}`)
// Calculate the total number of cells in a square arrangement with 9 cells on each side using side ** 2.
let totalNumberOfCells = 9;
console.log(`Total Number Of Cells In A Square Arrangment with 9 cells on each side=${totalNumberOfCells**2}`)
// Find the value of ( 5^4 ) (5 raised to the power 4) using the exponentiation operator.
let value=5**4;
console.log(`The Value of 5^4 is ${value}`)
// A digital image has 1,024 pixels on each side (square image). Find the total number of pixels using pixels ** 2.
let imagePixels=1024;
let totalNoOfPixels=imagePixels**2;
console.log(`Total Number Of Pixels = ${totalNoOfPixels}`)
// Part B: Assignment Operators

// 1. Simple Assignment =

// Store your age in a variable age and print it.
let myAge=19;
console.log(`My Age is ${myAge}`)
// Store the price of a pen (₹15) in a variable penPrice and print it.
let penPrice=15;
console.log(`Price Of The Pen${penPrice}`)
// Store the number of days in a week in a variable daysInWeek and print it.
let daysInWeek=7;
console.log(`Total Number Of Days In Week${daysInWeek}`)
// Store your city name in a variable city and print it.
let myCity='Varanasi'
console.log(`My City Is ${myCity}`)
// Store the value of PI (3.14159) in a variable piValue and print it.
let piValue=3.14159;
console.log(`Pi Value is ${piValue}`)
// 2. Add and Assign +=

// A student has 200 marks. He gets 35 more marks. Use += to update the total and print it.
let studentMarks = 200;
studentMarks += 35;
console.log(`Total Marks ${studentMarks}`)
// A savings account has ₹5,000. ₹1,200 is deposited. Use += to update the balance and print it.
let totalBalance=5000;
let depositedBalance=1200;
totalBalance+=depositedBalance;
console.log(`Total Balance ${totalBalance}`)
// A phone battery is at 45%. It gets charged by 30%. Use += to update the battery percentage and print it.
let phoneBattery=45;
let phoneCharge=30;
totalPhoneBattery= phoneBattery+=phoneCharge;
console.log(`Total Battery = ${totalPhoneBattery}`);
// A game player has 1,250 points. He earns 375 more points. Use += to update the score and print it.
let totalPlayerPoints=1250;
let playerBonusPoints=375;
let finalPlayerPoints= totalPlayerPoints+=playerBonusPoints;
console.log(`Total Player Points:${finalPlayerPoints}`)
// A library has 840 books. 160 new books are added. Use += to update the total number of books and print it.
let libraryBooks = 840;
let updatedBooks = libraryBooks+=160;
console.log(`Total Number Of Books:${updatedBooks}`)
// 3. Subtract and Assign -=

// A water tank has 1,000 litres. 375 litres are used. Use -= to update the remaining water and print it.
let totalWaterInTank=1000;
let waterUsed=375;
let remainingWater= totalWaterInTank-=waterUsed
console.log(`Total remaining water ${remainingWater}`)
// A student has 500 rupees. He spends 180 rupees. Use -= to update the remaining money and print it.
let studentMoney=500;
let totalstudentMoney = studentMoney-=180;
console.log(`Total Student Money:${totalstudentMoney}`)
// A phone battery is at 90%. It uses 45% during the day. Use -= to update the battery percentage and print it.
let totalBattery=90;
let totalDischarge=45;
totalBattery-=totalDischarge;
console.log(`Total Remaining Battery: ${totalBattery}`)
// A warehouse has 2,400 boxes. 950 boxes are sent out. Use -= to update the remaining boxes and print it.
let totalBoxes= 2400;
let sentBoxes = 950;
totalBoxes-=sentBoxes;
console.log(`Remainig Boxes ${totalBoxes}`)
// A game player has 2,000 points. He loses 625 points. Use -= to update the score and print it.
let totalScore = 2000;
let lostPoints = 625;
totalScore -= lostPoints;
console.log(`Total Score ${totalScore}`)
// 4. Multiply and Assign *=

// A population of a town is 5,000. It becomes 3 times larger. Use *= to update the population and print it.
let townPopulation=5000;
let sizeIncrease = 3;
townPopulation*=sizeIncrease;
console.log(`Total Population ${townPopulation}`)
// A factory produces 120 units per day. Production becomes 4 times due to new machines. Use *= to update the daily production and print it.
let productPerDay=120;
let updatedProductPerDay = 4;
productPerDay*=updatedProductPerDay;
// A savings amount is ₹2,000. It doubles (becomes 2 times). Use *= to update the amount and print it.
let savingAmt=2000;
savingAmt*2;
console.log(`Total Updated Price ${savingAmt}`)
// A garden has 50 plants. After a season, the number of plants becomes 5 times. Use *= to update the total plants and print it.
let totalPlants = 50;
totalPlants*=5;
console.log(`Total Number Of Plants ${totalPlants}`)
// A game score is 150. A bonus multiplies the score by 3. Use *= to update the score and print it.
let gameScore=150;
let bonusMultiply = 3;
gameScore*=bonusMultiply;
console.log(`Total Score ${gameScore}`);
// 5. Divide and Assign /=

// A total of 1,200 metres of cloth is divided equally into 4 parts. Use /= to update the length of one part and print it.
let totalMetresOfCloth=1200;
let totalDividend= totalMetresOfCloth/=4;
console.log(`Length Of One Part:${totalDividend}`);
// A company has ₹80,000 budget. It is divided equally among 8 projects. Use /= to update the budget per project and print it.
let companyBudget=80000;
let companyDividend=8;
companyBudget/=companyDividend;
console.log(`Budget Per Project${companyBudget}`)
// A jar has 960 grams of sugar. It is divided equally into 6 packets. Use /= to update the sugar in one packet and print it.
let totalGramOfSugar=960;
let sugarDividend=6;
totalGramOfSugar/=sugarDividend;
console.log(`Total Sugar In One Packet: ${totalGramOfSugar}`)
// A distance of 450 km is covered in 5 equal trips. Use /= to update the distance per trip and print it.
let distanceCovered = 450;
let totalTrips = 5;
distanceCovered/=totalTrips;
console.log(`Distance Per Trip:${distanceCovered}`) 
// A total of 2,500 marks is divided equally among 10 students. Use /= to update the marks per student and print it.
let marks = 2500;
let dividendMarks = 10;
marks /= dividendMarks;
console.log(`Total Marks Per Student ${marks}`)

// 6. Modulus and Assign %=

// A shop has 137 candies and packs them in boxes of 10; find the candies left using %=.
let totalCandie=137;
let CandiePerBox=10;
console.log(`Candies Left ${totalCandie%=CandiePerBox}`)
// A coach has 250 students and makes teams of 7; find the students left using %=.
let totalCoachStudent=250;
let studentPerTeam=7;
console.log(`The Student Left is ${totalCoachStudent%=studentPerTeam}`)
// A project runs for 1,000 days; find the days left after full weeks using %=.
let projectRuntime=1000;
let daysLeftAfterFullWeeks=7;
console.log(`The Days Left After Full Weeks ${projectRuntime%=daysLeftAfterFullWeeks}`)
// A hall has 89 chairs arranged in rows of 5; find the chairs left using %=.
let chairArranged = 89;
let chairRow=5;
console.log(`Total Chair Left${chairArranged%=chairRow}`)
// A loan runs for 365 months; find the months left after full years using %=.
let loanMonths = 365;
let monthLeft= loanMonths%=12;
console.log(`Total Number Of Month Left: ${monthLeft}`)

// Exponentiation and Assign **=
// A square garden has side 10 m; find its area using **=.
let sideOfSquare=10;
sideOfSquare**=2;
console.log(`Area Of Square: ${sideOfSquare}`)
// A cube box has edge 4 cm; find its volume using **=.
let edgeOfCube=4;
edgeOfCube**=3;
console.log(`Volume Of Cube ${edgeOfCube}`)
// An image’s size factor is 3; find the total area growth factor using **=.
let imageSizeFactor=3;
imageSizeFactor**=2;
console.log(`Total Area Growth Factor: ${imageSizeFactor}`)

//LOOSE EQUALITY


console.log(1234 == "1234");
console.log(0 == false);
console.log("" == false);
console.log(null == undefined);
console.log(500 == "500");

// 6
let a = 0;
let b = false;
console.log(a == b);      

// 7
let x = "";
let y = false;
console.log(x == y);       

// 8
let p = "0";
let q = 0;
console.log(p == q);      

// 9
let m = [];
let n = 0;
console.log(m == n);       

// 10
let val1 = [];
let val2 = false;
console.log(val1 == val2); 





// LOOSE INEUALITY



console.log("SAVE10" != "SAVE20");
console.log("admin" != "guest");
console.log(42 != "40");
console.log("" != false);
console.log(null != 101);



// 6
let a = 0;
let b = false;
console.log(a != b);       

// 7
let x = "";
let y = false;
console.log(x != y);       

// 8
let p = "0";
let q = 0;
console.log(p != q);       

// 9
let m = null;
let n = undefined;
console.log(m != n);       

// 10
let val1 = [];
let val2 = 0;
console.log(val1 != val2); 


//STRICT EQUALITY



console.log(1234 === "1234");
console.log(1234567890 === 1234567890);
console.log(true === 1);
console.log(null === undefined);
console.log(85 === 85);



// 6
let a = 0;
let b = false;
console.log(a === b);      

// 7
let x = "";
let y = false;
console.log(x === y);      

// 8
let p = "0";
let q = 0;
console.log(p === q);    

// 9
let m = null;
let n = undefined;
console.log(m === n);     

// 10
let val = NaN;
console.log(val === val);  



//STRICT INEQUALITY


console.log("101" !== 101);
console.log(true !== 1);
console.log("abc123" !== "abc124");
console.log(null !== undefined);
console.log(10 !== 20);


// 6
let a = 0;
let b = false;
console.log(a !== b);      

// 7
let x = "";
let y = false;
console.log(x !== y);     

// 8
let p = "0";
let q = 0;
console.log(p !== q);      

// 9
let m = null;
let n = undefined;
console.log(m !== n);      

// 10
let val = NaN;
console.log(val !== val);

//Greater than


console.log(20 > 18);
console.log(650 > 500);
console.log(1200 > 1000);
console.log(40000 > 30000);
console.log(11000 > 10000);


// 6
let a = 5;
let b = 5;
console.log(a > b);        

// 7
let x = "10";
let y = "2";
console.log(x > y);        

// 8
let p = "5";
let q = 10;
console.log(p > q);        

// 9
let m = null;
let n = 0;
console.log(m > n);       

// 10
let val = undefined;
console.log(val > 0);     

//LESS THAN

console.log(30 < 35);
console.log(8000 < 10000);
console.log(7 < 10);
console.log(40 < 50);
console.log(4 < 5);


// 6
let a = 5;
let b = 5;
console.log(a < b);        

// 7
let x = "10";
let y = "2";
console.log(x < y);       

// 8
let p = null;
let q = 1;
console.log(p < q);      

// 9
let m = null;
let n = 0;
console.log(m < n);       

// 10
let val = undefined;
console.log(val < 0);      

//GREATER THAN OR EQUAL TO

console.log(18 >= 18);
console.log(75 >= 75);
console.log(14 >= 13);
console.log(500 >= 500);
console.log(3 >= 2);



// 6
let a = 5;
let b = 5;
console.log(a >= b);     

// 7
let x = null;
let y = 0;
console.log(x >= y);       

// 8
let p = undefined;
let q = 0;
console.log(p >= q);       

// 9
let m = "5";
let n = 5;
console.log(m >= n);      

// 10
let val = "10";
let limit = 5;
console.log(val >= limit);




// Stored username is "admin" and password is 1234. Check if both are valid using && and print the result.

let username = "admin";
let password = 1234;
console.log(username === "admin" && password === 1234);

// A user is logged in (isLoggedIn = true) and has permission (hasPermission = true). Check if they can access a page using &&.

let isLoggedIn = true;
let hasPermission = true;
console.log(isLoggedIn && hasPermission);

// A product is in stock (inStock = true) and its price is less than ₹1000 (price = 800). Check if it can be bought using &&.

let inStock = true;
let price = 800;
console.log(inStock && price < 1000);

// A student has marks 75 and attendance 80. Passing requires marks greater than 65 and attendance greater than 70. Check using &&.

let marks = 75;
let attendance = 80;
console.log(marks > 65 && attendance > 70);

// Two conditions: isWeekend = true and isHoliday = false. A party happens only if both are true. Check using &&.

let isWeekend = true;
let isHoliday = false;
console.log(isWeekend && isHoliday);

// A user can login with either a correct password (passwordCorrect = true) or a valid OTP (otpValid = false). Check if login is allowed using ||.

let passwordCorrect = true;
let otpValid = false;
console.log(passwordCorrect || otpValid);

// A discount applies if the user is a member (isMember = false) or has a coupon (hasCoupon = true). Check using ||.

let isMember = false;
let hasCoupon = true;
console.log(isMember || hasCoupon);

// Entry is allowed if age is above 18 (age = 16) or height is above 150 cm (height = 155). Check using ||.

let age = 16;
let height = 155;
console.log(age > 18 || height > 150);

// A form is valid if either email is given (emailGiven = true) or phone is given (phoneGiven = false). Check using ||.

let emailGiven = true;
let phoneGiven = false;
console.log(emailGiven || phoneGiven);

// A game level opens if score is above 1000 (score = 900) or time bonus is collected (timeBonus = true). Check using ||.

let score = 900;
let timeBonus = true;
console.log(score > 1000 || timeBonus);

// A user is not banned (isBanned = false). Check if they can login by negating isBanned using !.

let isBanned = false;
console.log(!isBanned);

// A task is not completed (isCompleted = false). Check if it is still pending using !.

let isCompleted = false;
console.log(!isCompleted);

// A light is on (isOn = true). Check if it is off using !.

let isOn = true;
console.log(!isOn);

// A subscription is not active (isActive = false). Check if the user cannot access premium content using !.

let isActive = false;
console.log(!isActive);

// A file is not read-only (isReadOnly = false). Check if it can be edited using !.

let isReadOnly = false;
console.log(!isReadOnly);

// A user can enter if they are a member (isMember = true) and not banned (isBanned = false). Check using && and !.

let isMemberMixed = true;
let isBannedMixed = false;
console.log(isMemberMixed && !isBannedMixed);

// A discount is given if the user is a student (isStudent = true) or a senior (isSenior = false), but not if they are banned (isBanned = true). Check using ||, &&, and !.

let isStudent = true;
let isSenior = false;
let isBannedDiscount = true;
console.log((isStudent || isSenior) && !isBannedDiscount);

// A form is valid if name is given (nameGiven = true) and (email or phone is given: emailGiven = false, phoneGiven = true). Check using && and ||.

let nameGiven = true;
let emailGivenMixed = false;
let phoneGivenMixed = true;
console.log(nameGiven && (emailGivenMixed || phoneGivenMixed));

// Access is allowed if (user is admin isAdmin = true or has a token hasToken = false) and not suspended (isSuspended = false). Check using ||, &&, and !.

let isAdmin = true;
let hasToken = false;
let isSuspended = false;
console.log((isAdmin || hasToken) && !isSuspended);

// A game level opens if score is above 1000 (score = 1200) and (time bonus collected timeBonus = false or extra life extraLife = true). Check using && and ||.

let scoreMixed = 1200;
let timeBonusMixed = false;
let extraLife = true;
console.log(scoreMixed > 1000 && (timeBonusMixed || extraLife));

// A counter starts at 5. Use the increment operator to increase it by 1 and print the new value.
let counter = 5;
counter++;
console.log(counter);

// A player has 3 lives. Use the decrement operator to reduce one life and print the remaining lives.
let lives = 3;
lives--;
console.log(lives);

// Start with score = 10. Increase the score using ++ and print it.
let score = 10;
score++;
console.log(score);

// Start with items = 8. Decrease the items using -- and print it.
let items = 8;
items--;
console.log(items);

// Declare count = 0. Increment it twice and print the final value.
let count = 0;
count++;
count++;
console.log(count);

// Start with x = 5. Create y = x++. Print both x and y. Explain why the values are different.
let x = 5;
let y = x++;
console.log(x, y);
// y is 5 because the post-increment operator assigns the value before incrementing x to 6.

// Start with a = 5. Create b = ++a. Print both a and b. Explain the difference from the previous question.
let a = 5;
let b = ++a;
console.log(a, b);
// Both are 6 because the pre-increment operator increments a first, then assigns the new value to b.

// Start with lives = 3. Use post-decrement (lives--) and store the result in previousLives. Print both variables.
let livesGame = 3;
let previousLives = livesGame--;
console.log(livesGame, previousLives);

// Start with attempts = 0. Use pre-increment (++attempts) and store the result in currentAttempts. Print both variables.
let attempts = 0;
let currentAttempts = ++attempts;
console.log(attempts, currentAttempts);

// Start with points = 100. Increase it using ++. Then decrease it using --. Print the final value.
let points = 100;
points++;
points--;
console.log(points);

// Declare a variable name = "Rahul" and print its type using typeof.
let name = "Rahul";
console.log(typeof name);

// Declare a variable age = 25 and print its type.
let age = 25;
console.log(typeof age);

// Declare a variable isStudent = true and print its type.
let isStudent = true;
console.log(typeof isStudent);

// Declare a variable city (without assigning a value) and print its type.
let city;
console.log(typeof city);

// Print the type of the value null.
console.log(typeof null);

// Create three variables: price = 99.99, message = "Welcome", isActive = false. Print the type of each variable with a clear message.
let price = 99.99;
let message = "Welcome";
let isActive = false;
console.log("The type of price is:", typeof price);
console.log("The type of message is:", typeof message);
console.log("The type of isActive is:", typeof isActive);

// Convert the string "25" into a number using Number() and add 10 to it. Print the result.
let strNum = "25";
let resultNum = Number(strNum) + 10;
console.log(resultNum);

// Convert the number 100 into a string using String() and join it with " rupees". Print the result.
let amount = 100;
let resultStr = String(amount) + " rupees";
console.log(resultStr);

// Convert the value 0 into a boolean using Boolean() and print it.
let zeroVal = 0;
console.log(Boolean(zeroVal));

// Convert the value "Hello" into a boolean and print it.
let helloVal = "Hello";
console.log(Boolean(helloVal));

// Use the unary + operator to convert "50" into a number and multiply it by 2.
let stringFifty = "50";
let multipliedResult = +stringFifty * 2;
console.log(multipliedResult);


