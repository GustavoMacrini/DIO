var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function testNumber(){
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }
    else{
        currentNumberWrapper.style.color = 'gray';
    }
}

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    testNumber();
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    testNumber();
}