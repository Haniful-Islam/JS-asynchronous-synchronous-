// function squre(num) {
//     console.log(`squre is ${num}: ${num * num}`)
// }
// // const squreVar = squre;
// // squreVar(5);

// function higherOrderFunction(num, callback) {
//     callback(num);
// }
// higherOrderFunction(10, squre);

function taskOne(callback){
    console.log('taskone')
    callback();
}
function taskTwo(callback){
    console.log('taskTwo')
    callback();
}
function taskThree(callback){
    setTimeout(() =>{
        console.log('taskThree,,, Data loading....');
        callback();
    },2000);
    
}
function taskFour(callback){
    console.log('taskFour');
    callback();
}
function taskFive(){
    console.log('taskFive');
}

taskOne(function f1(){
    taskTwo(function f2(){
        taskThree(function f3(){
            taskFour( function f4(){
                taskFive( function f5(){

                });
            })
        })
    })
})



