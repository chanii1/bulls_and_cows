const btnStart= document.querySelector('.btnStart');
const starsDiv= document.querySelector('.stars');
const codeInp= document.querySelector('#code');
//const errorDiv = document.querySelector('.error');
const goBtn = document.querySelector('#goBtn');

let numTries= 0;
let maxTries= 9;//find a place to put them


let fourDisit;
function startGame() {
    containerDiv.innerHTML ="";
    btnStart.disabled=true;

    goBtn.disabled=false;
    codeInp.disabled=false;

    numTries=0;
    codeInp.value ="";

    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    fourDisit =[];
    const getDisit = ()=>{
        let i = Math.floor(Math.random() * numbers.length);
        return numbers[i];
    }

    const cutDigitOut = (digit)=>{
        const temp = numbers.filter(d => d!== digit)
        numbers =temp; 
    }

    for(let i =1; i<=4; i++){
        
        let newD = getDisit();
        fourDisit.push(newD);
        cutDigitOut(newD);
    }

    //let randomNum = get4Dig();
    starsDiv.innerText = `Random Number: ****`;

    //const errorDiv = document.querySelector('.error');
    //errorDiv.innerText= "";
    
    //removeDivs();

}
btnStart.addEventListener('click',startGame);

let bulls;
let cows;
//let winDiv;
//let loseDiv;
function checkNum(/*inputNum,randomNum*/) {
    
    //codeInp.value="";

    let numInp= codeInp.value;//need tobeafter clicking the go btn
    let randomNum= fourDisit.map(String);
    

    if(numInp<=0||/*numInp>9999||*/numInp.toString().length !== 4){
        let errorDiv = document.createElement("div");
        errorDiv.innerText = "Please enter a positive 4-digit number.";
        document.body.append(errorDiv);
        //alert('no')
        return;
    }else{
        numTries++;
        bulls=0;
        cows=0;
        /*console.log(randomNum);
        console.log(numInp);
        console.log(typeof(numInp));*/
        

        for (let i = 0; i < numInp.length; i++) {
            let digit = numInp[i];
            console.log(digit);
            if (randomNum.includes(digit)) {
                let positionInRandom = randomNum.indexOf(digit);
                if (positionInRandom === i) {
                    console.log(`Digit ${digit} is in the randomNum array and in the correct position.`);
                    bulls++;
                } else {
                    console.log(`Digit ${digit} is in the randomNum array but not in the correct position.`);
                    cows++;
                }
            } else {
                console.log(`Digit ${digit} is not in the randomNum array.`);
            }
           

            if(bulls===4){
                let winDIv = document.createElement("div");
                winDIv.classList.add('stars');
                document.body.append(winDIv);
                winDIv.innerText= "congratulations! you win!"
                btnStart.disabled= false;
            }
        }
        
        if(numTries>=maxTries){
           let loseDiv = document.createElement("div");
            loseDiv.classList.add("stars");
            document.body.append(loseDiv);
            loseDiv.innerText= `You ran out of tries... it's ok, you can try again!`
            codeInp.disabled=true;
            goBtn.disabled=true;
            btnStart.disabled= false;
        }
        const triesDiv= document.querySelector('.tries');
        triesDiv.innerHTML= `You have used: ${numTries} tries from ${maxTries}`;
    }
    newDivs();
    codeInp.value= "";
}
//checkNum()
goBtn.addEventListener("click",checkNum);


let newDiv;
let containerDiv = document.createElement("div");
containerDiv.classList.add('containerDiv');
document.body.append(containerDiv);
function newDivs(){
    
    newDiv= document.createElement("div");
    newDiv.classList.add('newDiv');
    newDiv.innerText= codeInp.value+ " bulls:" + bulls + " cows:" + cows;
    containerDiv.append(newDiv);
    //document.body.insertBefore(newDiv,winDiv);
    //document.body.insertBefore(newDiv,loseDiv);
}
/*function removeDivs(){
    newDiv.Remove('hide');
}*/


