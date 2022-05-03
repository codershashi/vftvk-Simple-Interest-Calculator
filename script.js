
function computeInterest(){

    var principalValue = parseFloat(document.getElementById("principal").value);
    
    var interestRate = parseFloat(document.getElementById("rate").value);

    var years = parseInt(document.getElementById("years").value);
    
    var amount = principalValue * years * interestRate / 100 ;
    var finalYear = 2020 + years;

   
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principalValue +
    "</mark>,<br/>" + "at an interest rate of <mark>" + interestRate + "</mark>,<br/>" +
    "You will receive an amount of <mark>" + amount + "</mark>,<br/>" + 
    "in the year <mark>" + finalYear + "</mark>,<br/>" ;

    
}

function ratevalue(){
    document.getElementById("rangeValue").innerHTML = document.getElementById("rate").value;
}

function principleAmount(){
    var principalValue = parseInt(document.getElementById("principal").value);
    if(principalValue.value == ""){
        alert("Please Enter Principle Value!");
        principalValue.focus();
    }
    if(principalValue < 0){
        alert("Please Enter a Positive Principle Value!");
        document.getElementById("principal").focus();
    }


}


