function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500))

const user = {
    username: "ayush",
    price: 199
}

function handleObject(anyobject){
      console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username: "ayu",
    price: 399
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,900,300,500]))