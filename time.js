var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "Second") {
        secondConversion(resultTypeValue);
    }else if (inputTypeValue === "Milisecond") {
        milisecondConversion(resultTypeValue)
    }else if (inputTypeValue === "Microsecond") {
        microsecondConversion(resultTypeValue)
    }else if (inputTypeValue === "Nanosecond") {
        nanosecondConversion(resultTypeValue)
    }else if (inputTypeValue === "Picosecond") {
        picosecondConversion(resultTypeValue)
    }else if (inputTypeValue === "Minute") {
        minuteConversion(resultTypeValue)
    }else if (inputTypeValue === "Hour") {
        hourConversion(resultTypeValue)
    }else if (inputTypeValue === "Day") {
        dayConversion(resultTypeValue)
    }else if (inputTypeValue === "Week") {
        weekConversion(resultTypeValue)
    }else if (inputTypeValue === "Month") {
        monthConversion(resultTypeValue)
    }else if (inputTypeValue === "Year") {
        yearConversion(resultTypeValue)
    }


    function secondConversion(resultTypeValue){
        if(resultTypeValue === "Second") {
            result.value = Number(input.value) *1;
        }else if (resultTypeValue === "Milisecond") {
            result.value = Number(input.value) * 1000;
        }else if (resultTypeValue === "Microsecond") {
            result.value = Number(input.value) *1000000;
        }else if (resultTypeValue === "Nanosecond") {
            result.value = Number(input.value) * 1000000000;
        }else if (resultTypeValue === "Picosecond") {
            result.value = Number(input.value) *1000000000000;
        }else if (resultTypeValue === "Minute") {
            result.value = Number(input.value) *0.0166666667;
        }else if (resultTypeValue === "Hour") {
            result.value = Number(input.value) *0.0002777778;
        }else if (resultTypeValue === "Day") {
            result.value = Number(input.value) *0.0000115741;
        }else if (resultTypeValue === "Week") {
            result.value = Number(input.value) *0.0000016534;
        }else if (resultTypeValue === "Month") {
            result.value = Number(input.value) *3.802570537E-7;
        }else if (resultTypeValue === "Year") {
            result.value = Number(input.value) *3.168808781E-8;
        }
    }

    function milisecondConversion(resultTypeValue){
        if(resultTypeValue === "Second") {
            result.value = Number(input.value) *0.001;
        }else if (resultTypeValue === "Milisecond") {
            result.value = Number(input.value) *1;
        }else if (resultTypeValue === "Microsecond") {
            result.value = Number(input.value) *1000;
        }else if (resultTypeValue === "Nanosecond") {
            result.value = Number(input.value) *1000000;
        }else if (resultTypeValue === "Picosecond") {
            result.value = Number(input.value) *1000000000;
        }else if (resultTypeValue === "Minute") {
            result.value = Number(input.value) *0.0000166667;
        }else if (resultTypeValue === "Hour") {
            result.value = Number(input.value) * 2.777777777E-7;
        }else if (resultTypeValue === "Day") {
            result.value = Number(input.value) * 1.157407407E-8;
        }else if (resultTypeValue === "Week") {
            result.value = Number(input.value) *1.653439153E-9;
        }else if (resultTypeValue === "Month") {
            result.value = Number(input.value) *3.802570537E-10;
        }else if (resultTypeValue === "Year") {
            result.value = Number(input.value) *3.168808781E-11;
        }
    }


    function microsecondConversion(resultTypeValue){
        if(resultTypeValue === "Second") {
            result.value = Number(input.value) * 0.000001;
        }else if (resultTypeValue === "Milisecond") {
            result.value = Number(input.value) *0.001;
        }else if (resultTypeValue === "Microsecond") {
            result.value = Number(input.value) *1;
        }else if (resultTypeValue === "Nanosecond") {
            result.value = Number(input.value) *1000;
        }else if (resultTypeValue === "Picosecond") {
            result.value = Number(input.value) *1000000;
        }else if (resultTypeValue === "Minute") {
            result.value = Number(input.value) *1.666666666E-8;
        }else if (resultTypeValue === "Hour") {
            result.value = Number(input.value) *2.777777777E-10;
        }else if (resultTypeValue === "Day") {
            result.value = Number(input.value) *1.157407407E-11;
        }else if (resultTypeValue === "Week") {
            result.value = Number(input.value) *1.653439153E-12;
        }else if (resultTypeValue === "Month") {
            result.value = Number(input.value) *3.802570537E-13;
        }else if (resultTypeValue === "Year") {
            result.value = Number(input.value) *3.168808781E-14;
        }
    }


    function nanosecondConversion(resultTypeValue){
        if(resultTypeValue === "Second") {
            result.value = Number(input.value) *1.E-9;
        }else if (resultTypeValue === "Milisecond") {
            result.value = Number(input.value) *0.000001;
        }else if (resultTypeValue === "Microsecond") {
            result.value = Number(input.value) *0.001;
        }else if (resultTypeValue === "Nanosecond") {
            result.value = Number(input.value) *1;
        }else if (resultTypeValue === "Picosecond") {
            result.value = Number(input.value) *1000;
        }else if (resultTypeValue === "Minute") {
            result.value = Number(input.value) *1.666666666E-11;
        }else if (resultTypeValue === "Hour") {
            result.value = Number(input.value) *2.777777777E-13;
        }else if (resultTypeValue === "Day") {
            result.value = Number(input.value) *1.157407407E-14;
        }else if (resultTypeValue === "Week") {
            result.value = Number(input.value) *1.653439153E-15;
        }else if (resultTypeValue === "Month") {
            result.value = Number(input.value) *3.802570537E-16;
        }else if (resultTypeValue === "Year") {
            result.value = Number(input.value) *3.168808781E-17;
        }
    }


    function picosecondConversion(resultTypeValue){
        if(resultTypeValue === "Second") {
            result.value = Number(input.value) *1.E-12;
        }else if (resultTypeValue === "Milisecond") {
            result.value = Number(input.value) *1.E-9;
        }else if (resultTypeValue === "Microsecond") {
            result.value = Number(input.value) *0.000001;
        }else if (resultTypeValue === "Nanosecond") {
            result.value = Number(input.value) *0.001;
        }else if (resultTypeValue === "Picosecond") {
            result.value = Number(input.value) *1;
        }else if (resultTypeValue === "Minute") {
            result.value = Number(input.value) *1.666666666E-14;
        }else if (resultTypeValue === "Hour") {
            result.value = Number(input.value) *2.777777777E-16;
        }else if (resultTypeValue === "Day") {
            result.value = Number(input.value) *1.157407407E-17;
        }else if (resultTypeValue === "Week") {
            result.value = Number(input.value) *1.653439153E-18;
        }else if (resultTypeValue === "Month") {
            result.value = Number(input.value) *3.802570537E-19;
        }else if (resultTypeValue === "Year") {
            result.value = Number(input.value) *3.168808781E-20;
        }
    }



     function minuteConversion(resultTypeValue){
            if(resultTypeValue === "Second") {
                result.value = Number(input.value) *60;
            }else if (resultTypeValue === "Milisecond") {
                result.value = Number(input.value) *60000;
            }else if (resultTypeValue === "Microsecond") {
                result.value = Number(input.value) *60000000;
            }else if (resultTypeValue === "Nanosecond") {
                result.value = Number(input.value) *60000000000;
            }else if (resultTypeValue === "Picosecond") {
                result.value = Number(input.value) *60000000000000;
            }else if (resultTypeValue === "Minute") {
                result.value = Number(input.value) *1;
            }else if (resultTypeValue === "Hour") {
                result.value = Number(input.value) *0.0166666667;
            }else if (resultTypeValue === "Day") {
                result.value = Number(input.value) *0.0006944444;
            }else if (resultTypeValue === "Week") {
                result.value = Number(input.value) *0.0000992063;
            }else if (resultTypeValue === "Month") {
                result.value = Number(input.value) *0.0000228154;
            }else if (resultTypeValue === "Year") {
                result.value = Number(input.value) *0.0000019013;
            }
        }



    function hourConversion(resultTypeValue){
            if(resultTypeValue === "Second") {
                result.value = Number(input.value) *3600;
            }else if (resultTypeValue === "Milisecond") {
                result.value = Number(input.value) *3600000;
            }else if (resultTypeValue === "Microsecond") {
                result.value = Number(input.value) *3600000000;
            }else if (resultTypeValue === "Nanosecond") {
                result.value = Number(input.value) *3600000000000;
            }else if (resultTypeValue === "Picosecond") {
                result.value = Number(input.value) *3600000000000000;
            }else if (resultTypeValue === "Minute") {
                result.value = Number(input.value) *60;
            }else if (resultTypeValue === "Hour") {
                result.value = Number(input.value) *1;
            }else if (resultTypeValue === "Day") {
                result.value = Number(input.value) *0.0416666667;
            }else if (resultTypeValue === "Week") {
                result.value = Number(input.value) *0.005952381;
            }else if (resultTypeValue === "Month") {
                result.value = Number(input.value) *0.0013689254;
            }else if (resultTypeValue === "Year") {
                result.value = Number(input.value) *0.0001140771;
            }
        }



    function dayConversion(resultTypeValue){
            if(resultTypeValue === "Second") {
                result.value = Number(input.value) *86400;
            }else if (resultTypeValue === "Milisecond") {
                result.value = Number(input.value) *86400000;
            }else if (resultTypeValue === "Microsecond") {
                result.value = Number(input.value) *86400000000;
            }else if (resultTypeValue === "Nanosecond") {
                result.value = Number(input.value) *86400000000000;
            }else if (resultTypeValue === "Picosecond") {
                result.value = Number(input.value) *86400000000000000n;
            }else if (resultTypeValue === "Minute") {
                result.value = Number(input.value) *1440;
            }else if (resultTypeValue === "Hour") {
                result.value = Number(input.value) *24;
            }else if (resultTypeValue === "Day") {
                result.value = Number(input.value) *1;
            }else if (resultTypeValue === "Week") {
                result.value = Number(input.value) *0.1428571429;
            }else if (resultTypeValue === "Month") {
                result.value = Number(input.value) *0.0328542094;
            }else if (resultTypeValue === "Year") {
                result.value = Number(input.value) *0.0027378508;
            }
        }


    function weekConversion(resultTypeValue){
            if(resultTypeValue === "Second") {
                result.value = Number(input.value) *604800;
            }else if (resultTypeValue === "Milisecond") {
                result.value = Number(input.value) *604800000;
            }else if (resultTypeValue === "Microsecond") {
                result.value = Number(input.value) *604800000000;
            }else if (resultTypeValue === "Nanosecond") {
                result.value = Number(input.value) *604800000000000;
            }else if (resultTypeValue === "Picosecond") {
                result.value = Number(input.value) *604800000000000000;
            }else if (resultTypeValue === "Minute") {
                result.value = Number(input.value) *10080;
            }else if (resultTypeValue === "Hour") {
                result.value = Number(input.value) *168;
            }else if (resultTypeValue === "Day") {
                result.value = Number(input.value) *7;
            }else if (resultTypeValue === "Week") {
                result.value = Number(input.value) *1;
            }else if (resultTypeValue === "Month") {
                result.value = Number(input.value) *0.2299794661;
            }else if (resultTypeValue === "Year") {
                result.value = Number(input.value) *0.0191649555;
            }
        }


    function monthConversion(resultTypeValue){
            if(resultTypeValue === "Second") {
                result.value = Number(input.value) *2629800;
            }else if (resultTypeValue === "Milisecond") {
                result.value = Number(input.value) *2629800000;
            }else if (resultTypeValue === "Microsecond") {
                result.value = Number(input.value) *2629800000000;
            }else if (resultTypeValue === "Nanosecond") {
                result.value = Number(input.value) *2629800000000000;
            }else if (resultTypeValue === "Picosecond") {
                result.value = Number(input.value) *2629800000000000000n;
            }else if (resultTypeValue === "Minute") {
                result.value = Number(input.value) *43830;
            }else if (resultTypeValue === "Hour") {
                result.value = Number(input.value) *730.5;
            }else if (resultTypeValue === "Day") {
                result.value = Number(input.value) *30.4375;
            }else if (resultTypeValue === "Week") {
                result.value = Number(input.value) *4.3482142857;
            }else if (resultTypeValue === "Month") {
                result.value = Number(input.value) *1;
            }else if (resultTypeValue === "Year") {
                result.value = Number(input.value) *0.0833333333;
            }
        }


    function yearConversion(resultTypeValue){
            if(resultTypeValue === "Second") {
                result.value = Number(input.value) * 31557600;
            }else if (resultTypeValue === "Milisecond") {
                result.value = Number(input.value) * 31557600000;
            }else if (resultTypeValue === "Microsecond") {
                result.value = Number(input.value) * 31557600000000;
            }else if (resultTypeValue === "Nanosecond") {
                result.value = Number(input.value) * 3.156e+16;
            }else if (resultTypeValue === "Picosecond") {
                result.value = Number(input.value) * 3.156e+19;
            }else if (resultTypeValue === "Minute") {
                result.value = Number(input.value) * 525960;
            }else if (resultTypeValue === "Hour") {
                result.value = Number(input.value) * 8766;
            }else if (resultTypeValue === "Day") {
                result.value = Number(input.value) * 365.25;
            }else if (resultTypeValue === "Week") {
                result.value = Number(input.value) * 52.178571429;
            }else if (resultTypeValue === "Month") {
                result.value = Number(input.value) * 12;
            }else if (resultTypeValue === "Year") {
                result.value = Number(input.value) * 1;
            }
        }        
    }