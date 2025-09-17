function register()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("register email");
            resolve();
        },2000)});
    }

// sendEmail()
function sendEmail() {
    return waitfortwoseconds().then(() => {
        console.log("sendemail enal");
    });
}
// login()
function login() {
    return waitfortwoseconds().then(() => {
        console.log("login enal");
    });
}
// getData()
function getData() {
    return waitfortwoseconds().then(() => {
        console.log("getdata enal");
    });
}
// DisplayData()
function DisplayData() {
    return waitfortwoseconds().then(() => {
        console.log("DisplayData enal");
    });
}
// wait function
function waitfortwoseconds() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}

// Promise chaining version
register()
    .then(sendEmail)
    .then(login)
    .then(getData)
    .then(DisplayData);

