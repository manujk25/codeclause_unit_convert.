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

    if(inputTypeValue === "Cubic Meter") {
        meterConversion(resultTypeValue);
    }else if (inputTypeValue === "Cubic Kilometer") {
        keloMeterConversion(resultTypeValue)
    }else if (inputTypeValue === "Cubic Centimeter") {
        centimeterConversion(resultTypeValue)
    }else if (inputTypeValue === "Cubic Milimeter") {
        milimeterConversion(resultTypeValue)
    }else if (inputTypeValue === "Liter") {
        litreConversion(resultTypeValue)
    }else if (inputTypeValue === "Mililiter") {
        mililiterConversion(resultTypeValue)
    }else if (inputTypeValue === "US Gallon") {
        usGallonConversion(resultTypeValue)
    }else if (inputTypeValue === "US Quart") {
        usQuartConversion(resultTypeValue)
    }else if (inputTypeValue === "US Pint") {
        usPintConversion(resultTypeValue)
    }else if (inputTypeValue === "US Cup") {
        usCupConversion(resultTypeValue)
    }else if (inputTypeValue === "US Fluid Ounce") {
        usFluidConversion(resultTypeValue)
    }else if (inputTypeValue === "US Table Spoon") {
        usTableConversion(resultTypeValue)
    }else if (inputTypeValue === "US Tea Spoon") {
        usTeaConversion(resultTypeValue)
    }else if (inputTypeValue === "Imperial Gallon") {
        imperialGallonConversion(resultTypeValue)
    }else if (inputTypeValue === "Imperial Quart") {
        imperialQuartConversion(resultTypeValue)
    }else if (inputTypeValue === "Imperial Pint") {
        imperialPintConversion(resultTypeValue)
    }else if (inputTypeValue === "Imperial Fluid Ounce") {
        imperialFluidConversion(resultTypeValue)
    }else if (inputTypeValue === "Imperial Table Spoon") {
        imperialTableConversion(resultTypeValue)
    }else if (inputTypeValue === "Imperial Tea Spoon") {
        imperialTeaConversion(resultTypeValue)
    }else if (inputTypeValue === "Cubic Mile") {
        cubicMileConversion(resultTypeValue)
    }else if (inputTypeValue === "Cubic Yard") {
        cubicYardConversion(resultTypeValue)
    }else if (inputTypeValue === "Cubic Foot") {
        cubicFootConversion(resultTypeValue)
    }else if (inputTypeValue === "Cubic Inch") {
        cubicInchConversion(resultTypeValue)
    }



    function meterConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value);
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 1.E-9;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 1000000;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 1000000000;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 1000;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value) * 1000000;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 264.17217686;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 1056.6887074;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 2113.3774149;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 4226.7548297;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 33814.038638;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 67628.077276;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 202884.23183;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 219.9692483
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 879.8769932;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 1759.7539864;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 35195.079728;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 56312.127565;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 168936.38269;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 2.399128636E-10;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 1.3079506193;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 35.314666721;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 61023.744095;
        }
    }



    function keloMeterConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 1000000000;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value);
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 1000000000000000;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 1000000000000000000n;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 1000000000000;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value) * 1000000000000000;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 264172176858;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 1056688707432;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 2113377414864;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 4226754829728;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 33814038637823;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 67628077275645;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 202884231826936;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 219969248299;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 879876993196;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 1759753986393;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 35195079727854;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 56312127564566;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 168936382693699;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 0.2399128636;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 1307950619.3;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 35314666721;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 61023744094732;
        }
    }



    function centimeterConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.000001;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 9.999999999E-16;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value);
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 1000;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 0.001;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 0.0002641722;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 0.0010566887;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 0.0021133774;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 0.0042267548;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 0.0338140386;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 0.0676280773;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 0.2028842318;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.0002199692;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 0.000879877;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 0.001759754;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 0.0351950797;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 0.0563121276;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 0.1689363827;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 2.399128636E-16;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.000001308;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.0000353147;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 0.0610237441;
        }
    }
    


    function milimeterConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 1.E-9;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 1.E-18;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 0.001;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value);
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 0.000001;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value) * 0.001;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 2.641721768E-7;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 0.0000010567;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 0.0000021134;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 0.0000042268;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 0.000033814;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 0.0000676281;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 0.0002028842;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 2.199692482E-7;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 8.798769931E-7;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 0.0000017598;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 0.0000351951;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 0.0000563121;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 0.0001689364;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 2.399128636E-19;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 1.307950619E-9;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 3.531466672E-8;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 0.0000610237;
        }
    }


    function litreConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.001;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 1.E-12;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 1000;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 1000000;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value);
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value) * 1000;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 0.2641721769;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 1.0566887074;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 2.1133774149;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 4.2267548297;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 33.814038638;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 67.628077276;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 202.88423183;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.2199692483;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) *0.8798769932;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 1.7597539864;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 35.195079728;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 56.312127565;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 168.93638269;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 2.399128636E-13;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0013079506;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.0353146667;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 61.023744095;
        }
    }


    function mililiterConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) *0.000001;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 9.999999999E-16;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 1000;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 0.001;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value);
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 0.0002641722;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 0.0010566887;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 0.0021133774;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 0.0042267548;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 0.0338140386;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 0.0676280773;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 0.2028842318;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.0002199692;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 0.000879877;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 0.001759754;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 0.0351950797;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 0.0563121276;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 0.1689363827;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 2.399128636E-16;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.000001308;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.0000353147;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 0.0610237441;
        }
    }


    function usGallonConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.00378541;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 3.78541E-12;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 3785.41;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 3785410;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 3.78541;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value) * 3785.41;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value);
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 4;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 8;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 16;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 128;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 256;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 768;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.8326737922;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 3.3306951688;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 6.6613903376;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 133.22780675;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 213.1644908;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 639.49347241;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 29.081685531E-13;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0049511294;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.1336804926;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 230.99989113;
        }
    }
    

    function usQuartConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) *0.0009463525;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 9.463525E-13;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 946.3525;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 946352.5;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 0.9463525;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 946.3525;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 0.25;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) ;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 2;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 4;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 32;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 64;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 192;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.2081684481;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 0.8326737922;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 1.6653475844;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 33.306951688;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 53.291122701;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 159.8733681;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 2.270421382E-13;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0012377823;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.0334201231;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 57.749972783;
        }
    }


    function usPintConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) *0.0004731763;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) *4.7317625E-13;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 473.17625;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 473176.25;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 0.47317625;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 473.17625;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) *0.125;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 0.5;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 2;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 16;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 32;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 96;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.104084224;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) *0.4163368961;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 10.8326737922;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 316.653475844;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 26.645561351;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 79.936684052;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 1.135210691E-13;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0006188912;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.0167100616;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 28.874986392;
        }
    }
   

    function usCupConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) *0.0002365881;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 2.36588125E-13;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 236.588125;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 236588.125;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 0.236588125;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 236.588125;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 0.0625;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 0.25;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 0.5;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 8;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 16;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 48;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.052042112;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 0.2081684481;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 0.4163368961;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 8.326737922;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 13.322780675;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 39.968342026;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 5.676053457E-14;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0003094456;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.0083550308;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 14.437493196;
        }
    }


    function usFluidConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.0000295735;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 2.957351562E-14;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 29.573515625;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 29573.515625;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 0.0295735156;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 29.573515625;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 0.0078125;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 0.03125;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 0.0625;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 0.125;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 2;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 6;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.006505264;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 0.026021056;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 0.052042112;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 1.0408422403;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 1.6653475844;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 4.9960427532;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 7.095066821E-15;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0000386807;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.0010443788;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 1.8046866495;
        }
    }



    function usTableConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.0000147868;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 1.478675781E-14;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 14.786757812;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 14786.757812;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 0.0147867578;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 14.786757812;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 0.00390625;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 0.015625;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 0.03125;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 0.0625;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 0.5;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 3;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.003252632;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 0.013010528;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 0.026021056;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 0.5204211201;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 0.8326737922;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 2.4980213766;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 3.54753341E-15;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0000193403;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.0005221894;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 0.9023433247;
        }
    }
   


    function usTeaConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.0000049289;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 4.92891927E-15;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 4.9289192708;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 4928.9192708;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 0.0049289193;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 4.9289192708;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 0.0013020833;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 0.0052083333;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 0.0104166667;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 0.0208333333;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 0.1666666667;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 0.3333333333;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.0010842107;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 0.0043368427;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 0.0086736853;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 0.1734737067;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 0.2775579307;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 0.8326737922;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 1.182511136E-15;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0000064468;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.0001740631;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 0.3007811082;
        }
    }
   


    function imperialGallonConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.00454609;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 4.54609E-12;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 0.00454609;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 4546090;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 4.54609;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 4546.09;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 1.2009504915;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 4.803801966;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 9.6076039319;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 19.215207864;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 153.72166291;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 307.44332582;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 922.32997747;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 4;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 8;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 160;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 256;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 768;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 1.09066547E-12;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0059460612;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.1605436532;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 277.41943279;
        }
    }


    function imperialQuartConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.0011365225;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 1.1365225E-12;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 1136.5225;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 1136522.5;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 1.1365225;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 1136.5225;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 0.3002376229;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 1.2009504915;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 2.401900983;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 4.803801966;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 38.430415728;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 76.860831456;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 230.58249437;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.25;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 2;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 40;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 64;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 192;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 2.726663675E-13;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0014865153;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.0401359133;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 69.354858198;
        }
    }




    function imperialPintConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.0005682613;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 5.6826125E-13;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) *568.26125;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) *568261.25;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 0.56826125;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 568.26125;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 0.1501188114;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 0.6004752457;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 1.2009504915;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 2.401900983;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 19.215207864;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 38.430415728;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 115.29124718;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.125;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 0.5;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 20;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 32;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 96;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 1.363331837E-13;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0007432577;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.0200679567;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 34.677429099;
        }
    }





    function imperialFluidConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.0000284131;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 2.84130625E-14;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 28.4130625;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 28413.0625;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 0.0284130625;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 28.4130625;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 0.0075059406;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 0.0300237623;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 0.0600475246;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 0.1200950491;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 0.9607603932;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 1.9215207864;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 5.7645623592;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.00625;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 0.025;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 0.05;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 1.6;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 4.8;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 6.816659189E-15;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0000371629;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.0010033978;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 1.7338714549;
        }
    }


    function imperialTableConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.0000177582;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 1.775816406E-14;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 17.758164063;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 17758.164063;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 0.0177581641;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 17.758164063;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 0.0046912129;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 0.0187648514;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 0.0187648514;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 0.0750594057;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 0.6004752457;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 1.2009504915;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 3.6028514745;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.00390625;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 0.015625;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 0.03125;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 0.625;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 3;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 4.260411993E-15;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0000232268;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.0006271236;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 1.0836696593;
        }
    }



    function imperialTeaConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.0000059194;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 5.91938802E-15;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 5.9193880208;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 5919.3880208;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) *0.005919388;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 5.9193880208;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 0.0015637376;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 0.0062549505;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 0.012509901;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 0.0250198019;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 0.2001584152;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 0.4003168305;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 1.2009504915;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.0013020833;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 0.0052083333;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 0.0104166667;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 0.2083333333;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 0.3333333333;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 1.420137331E-15;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0000077423;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 0.0002090412;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 0.3612232198;
        }
    }


    function cubicMileConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 4168180000;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 4.16818;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 4168180000000000;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) *4168179999999999500n ;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) *4168180000000;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 4168180000000000;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 1101117184136;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 4404468736544;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 8808937473087;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 17617874946175;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 140942999569399;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 281885999138799;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 845657997416396;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 916871421375;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 3667485685501;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 7334971371002;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 146699427420047;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 234719083872075;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 704157251616224;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 5451773612.4;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 147197887535;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 254357949660781;
        }
    }


    function cubicYardConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.764554858;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 7.645548579E-10;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 764554.85798;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) *764554857.98 ;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 764.55485798;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 764554.85798;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 201.97412116;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 807.89648464;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 1615.7929693;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 3231.5859386;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 25852.687509;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 51705.375017;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 155116.12505;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 168.17855739;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 672.71422958;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 1345.4284592;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 26908.569183;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 43053.710693;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 129161.13208;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 1.834265453E-10;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 27;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 46656;
        }
    }



    function cubicFootConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.0283168466;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 2.831684659E-11;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 28316.846592;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 28316846.592 ;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 28.316846592;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 28316.846592;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 7.480523006;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 29.922092024;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 59.844184048;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 119.6883681;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 957.50694476;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 1915.0138895;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 5745.0416686;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 6.228835459;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 24.915341836;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 49.830683672;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 996.61367345;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 1594.5818775;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 4783.7456325;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 6.793575755E-12;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.037037037;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) * 1;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 1728;
        }
    }

    function cubicInchConversion(resultTypeValue){
        if(resultTypeValue === "Cubic Meter") {
            result.value = Number(input.value) * 0.0000163871;
        }else if (resultTypeValue === "Cubic Kilometer") {
            result.value = Number(input.value) * 1.6387064E-14;
        }else if (resultTypeValue === "Cubic Centimeter") {
            result.value = Number(input.value) * 16.387064;
        }else if (resultTypeValue === "Cubic Milimeter") {
            result.value = Number(input.value) * 16387.064 ;
        }else if (resultTypeValue === "Liter") {
            result.value = Number(input.value) * 0.016387064;
        }else if (resultTypeValue === "Mililiter") {
            result.value = Number(input.value)* 16.387064;
        }else if (resultTypeValue === "US Gallon") {
            result.value = Number(input.value) * 0.0043290064;
        }else if (resultTypeValue === "US Quart") {
            result.value = Number(input.value) * 0.0173160255;
        }else if (resultTypeValue === "US Pint") {
            result.value = Number(input.value) * 0.034632051;
        }else if (resultTypeValue === "US Cup") {
            result.value = Number(input.value) * 0.0692641019;
        }else if (resultTypeValue === "US Fluid Ounce") {
            result.value = Number(input.value) * 0.5541128153;
        }else if (resultTypeValue === "US Table Spoon") {
            result.value = Number(input.value) * 1.1082256305;
        }else if (resultTypeValue === "US Tea Spoon") {
            result.value = Number(input.value) * 3.3246768915;
        }else if (resultTypeValue === "Imperial Gallon") {
            result.value = Number(input.value) * 0.0036046501;
        }else if (resultTypeValue === "Imperial Quart") {
            result.value = Number(input.value) * 0.0144186006;
        }else if (resultTypeValue === "Imperial Pint") {
            result.value = Number(input.value) * 0.0288372012;
        }else if (resultTypeValue === "Imperial Fluid Ounce") {
            result.value = Number(input.value) * 0.576744024;
        }else if (resultTypeValue === "Imperial Table Spoon") {
            result.value = Number(input.value) * 0.9227904384;
        }else if (resultTypeValue === "Imperial Tea Spoon") {
            result.value = Number(input.value) * 2.7683713151;
        }else if (resultTypeValue === "Cubic Mile") {
            result.value = Number(input.value) * 3.931467451E-15;
        }else if (resultTypeValue === "Cubic Yard") {
            result.value = Number(input.value) * 0.0000214335;
        }else if (resultTypeValue === "Cubic Foot") {
            result.value = Number(input.value) *0.0005787037;
        }else if (resultTypeValue === "Cubic Inch") {
            result.value = Number(input.value) * 1;
        }
    }




       
}