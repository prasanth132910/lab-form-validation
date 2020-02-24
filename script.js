// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function validateform() {
    var password = document.getElementById('passwordtext').value;
    var name = document.getElementById('usertext').value;
    var email = document.getElementById('emailtext').value;
    var usernamevalid = /^[a-zA-Z0-9]+$/;
    if (!usernamevalid.test(name))
     {
        alert("Please enter your username");
        return false;
    }
    var emailvalid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailvalid.test(email))
     {
        alert("Please enter your Email");
        return false;
    }
    var passwordvalid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordvalid.test(password))
     {
        alert("Please enter your password");
        return false;
    }
    alert("Registration successfull");

    return true;    
}
