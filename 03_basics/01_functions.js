
function sayMyName()
{
    console.log("My name is PRINCE SHARMA");
}

// sayMyName(); // My name is PRINCE SHARMA

function addTwoNumbers(num1, num2)
{
    console.log(num1 + num2);
}

// addTwoNumbers(10, 20); // 30

function addTwoNumbersWithReturn(num1, num2)
{
    return num1 + num2;
}

const sum = addTwoNumbersWithReturn(10, 20);
// console.log(sum); // 30

function loginUserMessage(userName)
{
    return `User ${userName} logged in successfully`;
}

const loginMessage = loginUserMessage("PRINCE SHARMA");
// console.log(loginMessage); // User PRINCE SHARMA logged in successfully

function loginMessage(userName)
{
    if(!userName) {
        console.log("User name is required");
        return;
    }
    return `User ${userName} logged in successfully`;
}

const loginMessageWithCheck = loginMessage();
// console.log(loginMessageWithCheck); // User name is required

function loginMessageWithDefault(userName = "Guest")
{
    return `User ${userName} logged in successfully`;
}

const loginMessageWithDefaultUser = loginMessageWithDefault();
// console.log(loginMessageWithDefaultUser); // User Guest logged in successfully

function calculateCartTotal(price)
{
    return price
}

// console.log(calculateCartTotal(100)); // 100
// console.log(calculateCartTotal(100, 200, 300)); // 100

function calculateCartTotalWithRest(...prices)
{
    let total = 0;
    for (let price of prices) {
        total += price;
    }

    return total;
}

// console.log(calculateCartTotalWithRest(100, 200, 300)); // 600

const user = {name: "PRINCE SHARMA", age: 20, isActive: true};

function printUserDetails(anyObject)
{
    console.log(`Name is ${anyObject.name} and Age is ${anyObject.age}`);
}

// printUserDetails(user); // Name is PRINCE SHARMA and Age is 20
// printUserDetails({name: "John Doe", age: 25}); // Name is John Doe and Age is 25

const myNewArray = [100, 200, 300, 400, 500];

function returnSecondValue(array)
{
    return array[1];
}

// console.log(returnSecondValue(myNewArray)); // 200
// console.log(returnSecondValue([100, 200, 300, 400, 500])); // 200
