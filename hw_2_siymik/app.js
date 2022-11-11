const box = document.querySelector('.box')
const btnStart = document.querySelector('.start')
const btnStop = document.querySelector('.stop')

let leftPos = 0;
let topPos = 0;
let countMoveBlock=0
function moveBlock() {
    const moveSlight = setTimeout(moveBlock,100)
        if (leftPos <= 380 && topPos===0){
            leftPos += 20
            box.style.left = `${leftPos}px`
            moveSlight
        }else if(leftPos >=380 && topPos <= 280){
            topPos += 20
            box.style.top = `${topPos}px`
            moveSlight
        }else if(topPos===300 && leftPos>=20){
            leftPos -= 20
            box.style.left = `${leftPos}px`
            moveSlight
        }else if(leftPos===0 && topPos!==0){
            topPos -= 20
            box.style.top = `${topPos}px`
            moveSlight
        }
    btnStop.addEventListener('click',()=>{
        clearInterval(moveSlight)
        countMoveBlock=0
    })
}

btnStart.addEventListener('click',()=>{
    if(countMoveBlock===0){
        countMoveBlock++
        moveBlock()
    }
})
//3 задание
function MultiplyNumber (n){
    return function Mult(){
        let newN =n**2
        console.log(newN)
    }
}
const n = MultiplyNumber(10)

// 2 задание
const newStart = document.querySelector('#start')
let h1Node = document.querySelector('h1')
const newStop = document.querySelector('#stop')
let tN = 0
let CountTN = 0
newStart.addEventListener('click',()=>{
    if(CountTN===0){
    const Timer = setInterval(()=>{
    h1Node.innerHTML=Number(h1Node.innerHTML)+1
    console.log( tN++);
    CountTN++
    },1000)
    newStop.addEventListener('click',()=>{
        clearInterval(Timer)
        CountTN=0
    })
    }}
)




const arr = [1,3,4,6,7,11,12,13]
// arr.filter((a)=>{
//     if(a%2!==0){
//         console.log(a)
//     }
// })

const result = arr.filter(function(elem){
    if ( elem%1 == 0 && elem % 2 !== 0){
        return true;
    }else{
        return false;
    }
});
console.log(result);


// function oddNumbers (array){
//     for (let i = 0; i<array.lenght; i++){
//         let item = array[i];
//         if (item % 2)
//         console.log(item);
//     }
// }
// let numbers = [1,2,3,4,5,6,7,8,9,13,16];
// oddNumbers (numbers);

// const arr = [1,2,3,4,5,6,7,8,9]
// let result = arr.filter (item => {
//     if (item % 2 !==0){
//         return item;
//     }
// })
// console.log (arr);