const array = ["bob", "sally", "tom"]
console.log(array[0])

function writeCards(array, string){
    // const newArray = []
    for(let i = 0 ; i < array.length; i++){
    array[i]=(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return array;
}

console.log(writeCards(array, "birthday"))

function countDown() {
    let count = 11;
    while(count > 0){
        count--;
        console.log(count);
    }
}
