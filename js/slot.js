/// load page JS
///////////call for action on button to hide loadPage and show main
////document.querySelector(/*INSERTCODE*/).style.display = 'none'
////	document.querySelector(/*INSERTCODE*/).style.display = 'none'


 document.querySelector('#takeMoney').addEventListener('click', takeMoney)



 function takeMoney(){
     document.querySelector('#loadPage').style.display = 'none'
    document.querySelector('main').style.display = 'block'
    document.querySelector('#totalMoney').innerText = '500'
     console.log('55')
}
///////////////end load page

/////array

const images1 = ['images/camel.png','images/treasure.png','images/gold.jpeg','images/pyramid.png', 'images/hookah.jpeg']
const images2 = ['images/camel.png','images/treasure.png','images/gold.jpeg','images/pyramid.png', 'images/hookah.jpeg']
const images3 = ['images/camel.png','images/treasure.png','images/gold.jpeg','images/pyramid.png', 'images/hookah.jpeg']



///logic for random pictures
document.querySelector('#getMore').addEventListener('click', addMoreMoney)
document.querySelector('#playButton').addEventListener('click', play)
document.querySelector('#playButton').addEventListener('click', play2)
document.querySelector('#playButton').addEventListener('click', play3)
document.querySelector('#playButton').addEventListener('click', bet)

function play(){
    let totalMoney = document.querySelector('#totalMoney').innerText
    let totalValue = Number(totalMoney)
    if(totalValue>0){
    let randomImage1 = images1[Math.floor(Math.random()*images1.length)];
    document.querySelector('#slot1').src= randomImage1
    console.log(randomImage1)}
     else if(totalValue <= 0){
     }
}
function play2(){
    let totalMoney = document.querySelector('#totalMoney').innerText
    let totalValue = Number(totalMoney)
    if(totalValue>0){
    let randomImage2 = images2[Math.floor(Math.random()*images2.length)];
    document.querySelector('#slot2').src= randomImage2
    console.log(randomImage2)}
    if(totalValue <= 0){
    }
}
function play3(){
    let totalMoney = document.querySelector('#totalMoney').innerText
    let totalValue = Number(totalMoney)
    if(totalValue>0){
    let randomImage3 = images3[Math.floor(Math.random()*images3.length)];
    document.querySelector('#slot3').src= randomImage3
    console.log(randomImage3)}
    if(totalValue <= 0){
    }
}
function bet(){
    let randomImage1 = document.querySelector('#slot1').src  
    let randomImage2 = document.querySelector('#slot2').src
    let randomImage3 = document.querySelector('#slot3').src
    let betAmount = document.querySelector('#betAmount').value
    let  betValue = Number(betAmount)
    let totalMoney = document.querySelector('#totalMoney').innerText
    let totalValue = Number(totalMoney)
    if(randomImage1 == randomImage2 && randomImage2 == randomImage3){
        document.querySelector('#totalMoney').innerText = totalValue + (betValue*5)
        console.log('jimmy neutron')
    }
    else if(totalValue <= 0){
        console.log('you stink')
        alert('Please click "get more" to add more money!')
    }

    else{
        document.querySelector('#totalMoney').innerText = totalValue - betValue
        console.log(totalValue)
        console.log(betValue)
        console.log(totalValue-betValue)
        console.log(betAmount)
        console.log(totalMoney)
        console.log('himmy neutron')
    }
    
}
function addMoreMoney(){
    document.querySelector('#totalMoney').innerText = '500'
}




// function add() {
//     let inputOne = document.querySelector('#inputOne').value
//     let inputTwo = document.querySelector('#inputTwo').value

//     total = Number(inputOne) + Number(inputTwo)

//     document.querySelector('#result').innerText = total
// }
// function subtract() {
//     let inputOne = document.querySelector('#inputOne').value
//     let inputTwo = document.querySelector('#inputTwo').value

//     total = Number(inputOne) - Number(inputTwo)

//     document.querySelector('#result').innerText = total
// }
// function divide() {
//     let inputOne = document.querySelector('#inputOne').value
//     let inputTwo = document.querySelector('#inputTwo').value

//     total = Number(inputOne) / Number(inputTwo)

//     document.querySelector('#result').innerText = total
// }
// function multiply() {
//     let inputOne = document.querySelector('#inputOne').value
//     let inputTwo = document.querySelector('#inputTwo').value

//     total = Number(inputOne) * Number(inputTwo)

//     document.querySelector('#result').innerText = total