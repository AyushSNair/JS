const user = {
    username: "ayush",
    price: 999,

    welcomeMessage: function(username){
        console.log(`${this.username} , welocme to website`);
    }

}

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()

function chai(){
    let username = "ayu"
    console.log(this.username);
}


//chai()

const chai1 = () => {
    let username = "ayus";
    console.log(this.username);
}

chai1()


const addTwo = (num1, num2) => {
    console.log(num1 + num2);
}

addTwo(3,4);

const addTwo1 = (num1, num2) => num1 + num2;

console.log(addTwo(3,4))