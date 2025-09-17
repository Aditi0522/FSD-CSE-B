// function register(){
//     waitfortwoseconds();
//     console.log('register end')

// }
// function sendEmail(){
//     waitfortwoseconds();
//     console.log('email send end')

// }
// function login(){
//     waitfortwoseconds();
//     console.log('login end')

// }
// function getData(){
//     waitfortwoseconds();
//     console.log('get data end')

// }
// function displayData(){
//     console.log('Display Data end')

// }
// function waitfortwoseconds(){
//     const ms=new Date().getTime()+8000;
//     while(new Date().getTime()<ms)
//     {}
// }
// register();
// sendEmail();
// login();
// getData();
// displayData();
// console.log('call other application')

function register(cb){
    setTimeout(()=>{
     console.log('register end');
     cb();
    },2000)
    

}
function sendEmail(cb){
     setTimeout(()=>{
     console.log('send email end');
     cb();
    },3000)

}
function login(cb){
    setTimeout(()=>{
     console.log('login end');
     cb();
    },1000)

}
function getData(cb){
   setTimeout(()=>{
     console.log('get data end');
     cb();
    },2000)

}
function displayData(){
    setTimeout(()=>{
     console.log('display data end')
    },2000)

}
//callback Hell
register(()=>{
     sendEmail(()=>{
                login(()=>{
                      getData(()=>{
                          displayData();
                      });
                });
});
});
console.log('call other application')