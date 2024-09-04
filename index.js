function strCount(str) {
    let index = 0;
    while (str[index] !== undefined) {

        index++;
    }
    return index;
}
// console.log(strCount('ayoub'))
// console.log(strCount(''))


function strRevers(str){
    let reversed = "";
    for (let i =strCount(str)-1; i>=0 ; i--) {
        reversed+=str[i];
    }
    return reversed;
}
console.log(strRevers('ayoub'));
