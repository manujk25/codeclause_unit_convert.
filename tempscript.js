var tempInput = document.getElementById('tempInput');
var tempResult = document.getElementById('tempResult');
var tempInputType = document.getElementById('tempInputType');
var tempResultType = document.getElementById('tempResultType');
var tempInputTypeValue,tempResultTypeValue;

tempInput.addEventListener("keyup",myTemp);
tempInputType.addEventListener("change", myTemp);
tempResultType.addEventListener("change", myTemp);

tempInputTypeValue = tempInputType.value;
tempResultTypeValue = tempResultType.value;

function  myTemp(){

    tempInputTypeValue = tempInputType.value;
    tempResultTypeValue = tempResultType.value;

    if(tempInputTypeValue == "Celsius"){
        celsiusConversion(tempResultTypeValue);
    }else if(tempInputTypeValue == "Kelvin"){
        kelvinConversion(tempResultTypeValue);
    }else if(tempInputTypeValue == "Fahrenheit"){
        fahrenheitConversion(tempResultTypeValue);
    }

    function celsiusConversion(resultTypeValue){
        if(tempResultTypeValue === "Celsius"){
            tempResult.value = tempInput.value;
        }else if(tempResultTypeValue === "Kelvin"){
            tempResult.value = Number(tempInput.value) +273.15;
        }else if(tempResultTypeValue === "Fahrenheit"){
            tempResult.value = Number(tempInput.value) * 1.8 +32;
        }
    }

    function kelvinConversion(tempResultTypeValue){
        if(tempResultTypeValue === "Celsius"){
            tempResult.value = Number(tempInput.value) -273.15;
        }else if(tempResultTypeValue === "Kelvin"){
            tempResult.value = tempInput.value;
        }else if(tempResultTypeValue === "Fahrenheit"){
            tempResult.value =( Number(tempInput.value) -273.15)*1.8 + 32;
        }
    }

    function fahrenheitConversion(tempResultTypeValue){
        if( tempResultTypeValue === "Celsius"){
            tempResult.value = ((tempInput.value)-32)*.56;
        }else if(tempResultTypeValue === "Kelvin"){
            tempResult.value = (Number(tempInput.value)-32)*0.56+273.15;
        }else if(tempResultTypeValue === "Fahrenheit"){
            tempResult.value = tempInput.value;
        }
    }
}