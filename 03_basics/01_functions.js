
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
