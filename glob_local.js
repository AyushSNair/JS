//scopes in js

function one(){
    const username = "ayush"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website);

    two()
}

one()


if (true){
    const username = "ayush"
    if (username === "ayush"){
        const website = "youtube"
        console.log(username + website);
    }


}



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function addone(value){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2 
}

addTwo(5)