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

    if(inputTypeValue === "Meter") {
        meterConversion(resultTypeValue);
    }else if (inputTypeValue === "Kilometer") {
        keloMeterConversion(resultTypeValue)
    }else if (inputTypeValue === "Centimeter") {
        centimeterConversion(resultTypeValue)
    }else if (inputTypeValue === "Milimeter") {
        milimeterConversion(resultTypeValue)
    }else if (inputTypeValue === "Micrometer") {
        micrometerConversion(resultTypeValue)
    }else if (inputTypeValue === "Nanometer") {
        nanometerConversion(resultTypeValue)
    }else if (inputTypeValue === "Mile") {
        mileConversion(resultTypeValue)
    }else if (inputTypeValue === "Mile") {
        yardConversion(resultTypeValue)
    }else if (inputTypeValue === "Mile") {
        footConversion(resultTypeValue)
    }else if (inputTypeValue === "Mile") {
        inchConversion(resultTypeValue)
    }


    //meter-conversion
    function meterConversion(resultTypeValue) {
        if (resultTypeValue === "Kilometer") {
            result.value = Number(input.value) * 0.001;
        } else if (resultTypeValue === "Centimeter") {
            result.value = Number(input.value) * 100;
        } else if (resultTypeValue === "Milimeter") {
            result.value = Number(input.value) * 1000;
        } else if (resultTypeValue === "Micrometer") {
            result.value = Number(input.value) * 10000000;
        } else if (resultTypeValue === "Nanometer") {
            result.value = Number(input.value) * 1000000000;
        } else if (resultTypeValue === "Mile") {
            result.value = Number(input.value) * 0.0006213689;
        } else if (resultTypeValue === "Yard") {
            result.value = Number(input.value) * 1.0936132983;
        } else if (resultTypeValue === "Foot") {
            result.value = Number(input.value) * 3.280839895;
        } else if (resultTypeValue === "Inch") {
            result.value = Number(input.value) * 39.37007874;
        } else if (resultTypeValue === "Meter") {
            result.value = input.value;
        }

    }

    //kelometer-conversion
    function keloMeterConversion(resultTypeValue) {
        if (resultTypeValue === "Meter") {
            result.value = Number(input.value) * 1000;
        } else if (resultTypeValue === "Centimeter") {
            result.value = Number(input.value) * 100000;
        } else if (resultTypeValue === "Milimeter") {
            result.value = Number(input.value) * 1000000;
        } else if (resultTypeValue === "Micrometer") {
            result.value = Number(input.value) * 1000000000;
        } else if (resultTypeValue === "Nanometer") {
            result.value = Number(input.value) * 1000000000000;
        } else if (resultTypeValue === "Mile") {
            result.value = Number(input.value) * 0.6213688756;
        } else if (resultTypeValue === "Yard") {
            result.value = Number(input.value) * 1093.6132983;
        } else if (resultTypeValue === "Foot") {
            result.value = Number(input.value) * 3280.839895;
        } else if (resultTypeValue === "Inch") {
            result.value = Number(input.value) * 39370.07874;
        } else if (resultTypeValue === "Kilometer") {
            result.value = input.value;
        }
    }

    //centimeter-conversion
    function centimeterConversion(resultTypeValue) {
        if (resultTypeValue === "Meter") {
            result.value = Number(input.value) * 0.01;
        } else if (resultTypeValue === "Kilometer") {
            result.value = Number(input.value) * 0.00001;
        } else if (resultTypeValue === "Milimeter") {
            result.value = Number(input.value) * 10;
        } else if (resultTypeValue === "Micrometer") {
            result.value = Number(input.value) * 10000;
        } else if (resultTypeValue === "Nanometer") {
            result.value = Number(input.value) * 10000000;
        } else if (resultTypeValue === "Mile") {
            result.value = Number(input.value) * 0.0000062137;
        } else if (resultTypeValue === "Yard") {
            result.value = Number(input.value) * 0.010936133;
        } else if (resultTypeValue === "Foot") {
            result.value = Number(input.value) * 0.032808399;
        } else if (resultTypeValue === "Inch") {
            result.value = Number(input.value) * 0.3937007874;
        } else if (resultTypeValue === "Centimeter") {
            result.value = input.value;
        }
    }
    
    //milimeter-conversion
    function milimeterConversion(resultTypeValue){
        if (resultTypeValue === "Meter") {
            result.value = Number(input.value) * 0.001;
        } else if (resultTypeValue === "Kilometer") {
            result.value = Number(input.value) * 0.000001;
        } else if (resultTypeValue === "Centimeter") {
            result.value = Number(input.value) * 0.1;
        } else if (resultTypeValue === "Micrometer") {
            result.value = Number(input.value) * 1000;
        } else if (resultTypeValue === "Nanometer") {
            result.value = Number(input.value) * 1000000;
        } else if (resultTypeValue === "Mile") {
            result.value = Number(input.value) * 6.213688756E-7;
        } else if (resultTypeValue === "Yard") {
            result.value = Number(input.value) * 0.0010936133;
        } else if (resultTypeValue === "Foot") {
            result.value = Number(input.value) * 0.0032808399;
        } else if (resultTypeValue === "Inch") {
            result.value = Number(input.value) * 0.0393700787;
        } else if (resultTypeValue === "Milimeter") {
            result.value = input.value;
        }
    }

    //micrometer-conversion
    function micrometerConversion(resultTypeValue){
        if (resultTypeValue === "Meter") {
            result.value = Number(input.value) * 0.000001;
        } else if (resultTypeValue === "Kilometer") {
            result.value = Number(input.value) * 9.999999999E-10;
        } else if ( resultTypeValue === "Centimeter") {
            result.value = Number(input.value) * 0.0001;
        } else if ( resultTypeValue === "Micrometer") {
            result.value = input.value;
        } else if (resultTypeValue === "Nanometer") {
            result.value = Number(input.value) * 1000;
        } else if ( resultTypeValue === "Mile") {
            result.value = Number(input.value) * 6.213688756E-10;
        } else if (resultTypeValue === "Yard") {
            result.value = Number(input.value) * 0.0000010936;
        } else if ( resultTypeValue === "Foot") {
            result.value = Number(input.value) * 0.0000032808;
        } else if ( resultTypeValue === "Inch") {
            result.value = Number(input.value) * 0.0000393701;
        } else if (resultTypeValue === "Milimeter") {
            result.value = Number(input.value) * 0.001;
        }
    }

    //nanometer-conversion
    function nanometerConversion(resultTypeValue){

        if ( resultTypeValue === "Meter") {
            result.value = Number(input.value) * 1.E-9;
        } else if ( resultTypeValue === "Kilometer") {
            result.value = Number(input.value) * 1.E-12;
        } else if (resultTypeValue === "Centimeter") {
            result.value = Number(input.value) * 1.E-7;
        } else if (resultTypeValue === "Micrometer") {
            result.value = Number(input.value) * 0.001;
        } else if (resultTypeValue === "Nanometer") {
            result.value = input.value;
        } else if (resultTypeValue === "Mile") {
            result.value = Number(input.value) * 6.213688756E-13;
        } else if ( resultTypeValue === "Yard") {
            result.value = Number(input.value) * 1.093613298E-9;
        } else if (resultTypeValue === "Foot") {
            result.value = Number(input.value) * 3.280839895E-9;
        } else if (resultTypeValue === "Inch") {
            result.value = Number(input.value) * 3.937007874E-8;
        } else if (resultTypeValue === "Milimeter") {
            result.value = Number(input.value) * 0.000001;
        }
    }

    //mile-conversion
    function mileConversion(resultTypeValue){

        if (resultTypeValue === "Meter") {
            result.value = Number(input.value) * 1609.35;
        } else if (resultTypeValue === "Kilometer") {
            result.value = Number(input.value) * 1.60935;
        } else if (resultTypeValue === "Centimeter") {
            result.value = Number(input.value) * 160935;
        } else if ( resultTypeValue === "Micrometer") {
            result.value = Number(input.value) * 1609350000;
        } else if ( resultTypeValue === "Nanometer") {
            result.value = Number(input.value) * 1609350000000;
        } else if ( resultTypeValue === "Mile") {
            result.value = input.value;
        } else if ( resultTypeValue === "Yard") {
            result.value = Number(input.value) * 1760.0065617;
        } else if ( resultTypeValue === "Foot") {
            result.value = Number(input.value) * 5280.019685;
        } else if (resultTypeValue === "Inch") {
            result.value = Number(input.value) * 63360.23622;
        } else if (resultTypeValue === "Milimeter") {
            result.value = Number(input.value) * 1609350;
        }
    
    }

    //yard-conversion
    function yardConversion(resultTypeValue){

        if (resultTypeValue === "Meter") {
            result.value = Number(input.value) * 0.9144;
        } else if (resultTypeValue === "Kilometer") {
            result.value = Number(input.value) * 0.0009144;
        } else if (resultTypeValue === "Centimeter") {
            result.value = Number(input.value) * 91.44;
        } else if ( resultTypeValue === "Micrometer") {
            result.value = Number(input.value) * 914400;
        } else if (resultTypeValue === "Nanometer") {
            result.value = Number(input.value) * 914400000;
        } else if ( resultTypeValue === "Yard") {
            result.value = input.value;
        } else if (resultTypeValue === "Mile") {
            result.value = Number(input.value) * 0.0005681797;
        } else if (resultTypeValue === "Foot") {
            result.value = Number(input.value) * 3;
        } else if ( resultTypeValue === "Inch") {
            result.value = Number(input.value) * 36;
        } else if (resultTypeValue === "Milimeter") {
            result.value = Number(input.value) * 914.4;
        }
    }
       
    //foot-conversion
    function footConversion(resultTypeValue){
        if ( resultTypeValue === "Meter") {
            result.value = Number(input.value) * 0.3048;
        } else if (resultTypeValue === "Kilometer") {
            result.value = Number(input.value) * 0.0003048;
        } else if (resultTypeValue === "Centimeter") {
            result.value = Number(input.value) * 30.48;
        } else if (resultTypeValue === "Micrometer") {
            result.value = Number(input.value) * 304800;
        } else if ( resultTypeValue === "Nanometer") {
            result.value = Number(input.value) * 304800000;
        } else if (resultTypeValue === "Foot") {
            result.value = input.value;
        } else if ( resultTypeValue === "Mile") {
            result.value = Number(input.value) * 0.0001893932;
        } else if ( resultTypeValue === "Yard") {
            result.value = Number(input.value) * 0.3333333333;
        } else if ( resultTypeValue === "Inch") {
            result.value = Number(input.value) * 12;
        } else if (resultTypeValue === "Milimeter") {
            result.value = Number(input.value) * 304.8;
        }
    }

    //inch-conversion
    function inchConversion(resultTypeValue){
        if (resultTypeValue === "Meter") {
            result.value = Number(input.value) * 0.0254;
        } else if ( resultTypeValue === "Kilometer") {
            result.value = Number(input.value) * 0.0000254;
        } else if (resultTypeValue === "Centimeter") {
            result.value = Number(input.value) * 2.54;
        } else if (resultTypeValue === "Micrometer") {
            result.value = Number(input.value) * 25400;
        } else if ( resultTypeValue === "Nanometer") {
            result.value = Number(input.value) * 25400000;
        } else if ( resultTypeValue === "Inch") {
            result.value = input.value;
        } else if ( resultTypeValue === "Mile") {
            result.value = Number(input.value) * 0.0000157828;
        } else if ( resultTypeValue === "Foot") {
            result.value = Number(input.value) * 0.0833333333;
        } else if ( resultTypeValue === "Yard") {
            result.value = Number(input.value) * 0.0277777778;
        } else if (resultTypeValue === "Milimeter") {
            result.value = Number(input.value) * 25.4;
        }
    }
}