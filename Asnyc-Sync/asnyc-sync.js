
const taskOne = () => {
    console.log('task one');
}//syc


const taskTwo = () => {
    console.log('task two');
}
// const dataLoading = () =>{
//     console.log('task three, data loading.....');
// }
const taskThree = () => {
    setTimeout(() => {
        console.log('task three, data loading.....');
    }, 2000)//Asnychrounous
}

const taskFour = () => {
    console.log('task four');
}

const taskFive = () => {
    console.log('task five');
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();