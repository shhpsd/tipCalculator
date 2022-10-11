const tipsBtn = document.querySelectorAll(".btn");
const btnsArray = Array.from(tipsBtn);
const resetBtn = document.getElementById("reset");
const inputBill = document.getElementById("bill");
const inputCustomTip = document.getElementById("customTip");
const inputNumberPeople = document.getElementById("inputNumberPeople");

const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");

let amountTip = 0;
let total = 0;


function build(){
    let valueBill;
    let valueTip;
    let peopleCount;
    let btn;

    for(let i = 0 ; i < btnsArray.length; i++){
    
        let btn = btnsArray[i];
        btn.addEventListener("click", select =>{
            if(btn.classList.contains("selected")){
                btn.classList.remove("selected");
                inputCustomTip.disabled = false;
                valueTip = 0;
            }else{
                btn.classList.add("selected");
                inputCustomTip.disabled = true;
                valueTip = btn.placeholder;
            }  
        })
    }
    

    inputNumberPeople.addEventListener("change", change =>{
        if(inputCustomTip.disabled === false){
            valueTip = inputCustomTip.value;
        }
        valueBill = inputBill.value;
        peopleCount = inputNumberPeople.value;
        total = (valueBill *  (1 +(valueTip / 100)));
        amountTip = (total / peopleCount);
        tipAmount.innerHTML = amountTip + "$";
        totalAmount.innerHTML = total + "$";
    })
    resetBtn.addEventListener("click", reset =>{
        inputBill.value = "";
        inputNumberPeople.value = "";
        tipAmount.innerText = 0 + "$";
        totalAmount.innerText = 0 + "$";
        btn.classList.remove("selected");
        inputCustomTip.value = "";
    })
}

build();