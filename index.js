const users = [{
    email: "dollariyke@gmail.com",
    password:"winners"
},
{
    email: "james@gmail.com",
    password:"jamers"
},
{
    email: "peter@gmail.com",
    password:"peters"
},
{
    email: "mark@gmail.com",
    password:"markers"
},
{
    email: "andrew@gmail.com",
    password:"andrewers"
}

]

const login =(event)=>{
    const username = document.getElementById('Email1').value;
    const password = document.getElementById('InputPassword1').value;
    event.preventDefault();

    for(let i =0 ; i <users.length ; i++){
        if(username === users[i].email && password === users[i].password){
            window.location.assign("https://www.w3schools.com");
            return
        }
    }
    console.log('wrong user details');
}

let mybtn = document.getElementById('submit');
mybtn.addEventListener('click',login);