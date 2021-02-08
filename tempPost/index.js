// let isDupl = false;
// let arr = createNumber();
// isDupl = isDuplicate(arr,isDupl);
// console.log(arr, "중복여부: "+isDupl);
// while(isDupl === true){
//     if(isDupl === false){break;}
//     arr = createNumber();
//     isDupl = isDuplicate(arr,isDupl);
// }
// console.log(arr, "중복여부: "+isDupl);
// function createNumber(){
//     let arr = new Array(4);
//     let index = 0;

//     for(let num of arr){
//         num = Math.floor(Math.random()*10);
//         arr[index] = num;
//         index++;
//     }
//     return arr;
// }
// function isDuplicate(arr, isDupl)  {
//     isDupl = arr.some(function(element) {
//         return arr.indexOf(element) !== arr.lastIndexOf(element);
//     });
//     return isDupl;
// }



//맨앞자리 0불가 로직추가

// //배열

// //find : 조건에 맞는 해당 요소가 배열에 있을경우 해당 요소 출력, 없으면 undifiend 출력
// console.log("find 1: ",arr.find(element => element === 1));

// //forEach : 배열 크기만큼 반복해서 요소 출력
// console.log("foreach: ");
// arr.forEach(element => console.log(element));

// //includes : 배열에 값이 있으면 true, 없으면 false 출력
// console.log("includes 1: ",arr.includes(1));



// let isDupl = false;
// let arr = createNumber();
// isDupl = isDuplicate(arr,isDupl);
// console.log(arr,"중복여부: "+isDupl);
// while(isDupl === true || arr[0] === 0){
//     if(isDupl === false && arr[0] !== 0){break;}
//     arr = createNumber();
//     isDupl = isDuplicate(arr,isDupl);
// }
// console.log(arr,"중복여부: "+isDupl);
// function createNumber(){
//     let arr = new Array(4);
//     let index = 0;
//     for(let num of arr){
//         num = Math.floor(Math.random()*10);
//         arr[index] = num;
//         index++;
//     }
//     return arr;
// }
// function isDuplicate(arr, isDupl)  {
//     isDupl = arr.some(function(element) {
//         return arr.indexOf(element) !== arr.lastIndexOf(element);
//     });
//     return isDupl;
// }
let isDupl = false;
let arr = createNumber();
// console.log(arr, "중복여부: "+isDupl);
function createNumber(){
    let arr = new Array(4);
    let index = 0;

    for(let num of arr){
        num = Math.floor(Math.random()*10);
        arr[index] = num;
        index++;
    }
    isDupl = isDuplicate(arr, isDupl);
    if(isDupl === true || arr[0] === 0) return createNumber();
    if(isDupl === false && arr[0] !== 0) return arr;

}
function isDuplicate(arr, isDupl)  {
    isDupl = arr.some(function(element) {
        return arr.indexOf(element) !== arr.lastIndexOf(element);
    });
    return isDupl;
}

//4자리 숫자 화면에띄우기

let inputVal = "";
window.onload = function() {     //node에서 실행하면 window is not defined 에러로 실행불가함
    const btn = document.querySelector('.btn');
    const inputVal = document.querySelector('.input').value;
    const con1 = document.querySelector('.con1').innerHTML;

}
function clickOk(){
    inputVal = document.querySelector('.input').value;

    // document.querySelector('.con1').innerHTML = inputVal;
    newContainer = document.createElement("div");
    newContainer.setAttribute("class","container");
    newContent = document.createElement("div");
    newContent.setAttribute("class","con1");
    main = document.querySelector('#main');
    main.appendChild(newContainer);


    container = document.querySelector('#container');
    container.appendChild(newContent);
    console.log(container);
}
