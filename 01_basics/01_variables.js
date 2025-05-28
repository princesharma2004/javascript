const accountId = 1234567890
let accountEmail = "princesharma21102004@gmail.com"
var accountPassword = "1234567890"
accountCity = "Delhi"
let accountState

// accountId = 9876543210 // This will throw an error because accountId is a constant

accountEmail = "new@gmail.com"
accountPassword = "newpassword123"
accountCity = "new Delhi"

/*
prefer not to use var
    because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
