var weightInput = document.getElementById('weightInput');
var weightResult = document.getElementById('weightResult');
var weightInputType = document.getElementById('weightInputType');
var weightResultType = document.getElementById('weightResultType');
var weightInputTypeValue, weightResultTypeValue;

weightInput.addEventListener("keyup", result);
weightInputType.addEventListener("change", result);
weightResultType.addEventListener("change", result);

weightInputTypeValue = weightInputType.value;
weightResultTypeValue = weightResultType.value;

function result() {

    weightInputTypeValue = weightInputType.value;
    weightResultTypeValue = weightResultType.value;

    if(weightInputTypeValue === "Kilogram") {
        kilogramConversion(weightResultTypeValue);
    }else if (weightInputTypeValue === "Gram") {
        gramConversion(weightResultTypeValue);
    }else if (weightInputTypeValue === "Miligram") {
        miligramConversion(weightResultTypeValue)
    }else if (weightInputTypeValue === "Metric Ton") {
        metricTonConversion(weightResultTypeValue)
    }else if (weightInputTypeValue === "Long Ton") {
        longTonConversion(weightResultTypeValue)
    }else if (weightInputTypeValue === "Short Ton") {
        shortTonConversion(weightResultTypeValue)
    }else if (weightInputTypeValue === "Pound") {
        poundConversion(weightResultTypeValue)
    }else if (weightInputTypeValue === "Ounce") {
        ounceConversion(weightResultTypeValue)
    }else if (weightInputTypeValue === "Carrat") {
        carratConversion(weightResultTypeValue)
    }else if (weightInputTypeValue === "Atomic Mass Unit") {
        atomicMassConversion(weightResultTypeValue)
    }

    
    //meter-conversion
    function kilogramConversion(weightResultTypeValue) {
        if (weightResultTypeValue === "Kilogram") {
            weightResult.value = Number(weightInput.value);
        } else if (weightResultTypeValue === "Miligram") {
            weightResult.value = Number(weightInput.value) * 1000000;
        } else if (weightResultTypeValue === "Metric Ton") {
            weightResult.value = Number(weightInput.value) * 0.001;
        } else if (weightResultTypeValue === "Long Ton") {
            weightResult.value = Number(weightInput.value) * 0.0009842073;
        } else if (weightResultTypeValue === "Short Ton") {
            weightResult.value = Number(weightInput.value) * 0.0011023122;
        } else if (weightResultTypeValue === "Pound") {
            weightResult.value = Number(weightInput.value) * 2.2046244202;
        } else if (weightResultTypeValue === "Ounce") {
            weightResult.value = Number(weightInput.value) * 35.273990723;
        } else if (weightResultTypeValue === "Carrat") {
            weightResult.value = Number(weightInput.value) * 5000;
        }else if (weightResultTypeValue === "Atomic Mass Unit") {
            weightResult.value = Number(weightInput.value) * 6.022136652E+26;
        } else if (weightResultTypeValue === "Gram") {
            weightResult.value = Number(weightInput.value) * 1000;
        }

    }
    function gramConversion(weightResultTypeValue) {
        if (weightResultTypeValue === "Kilogram") {
            weightResult.value = Number(weightInput.value) * 0.001;
        } else if (weightResultTypeValue === "Miligram") {
            weightResult.value = Number(weightInput.value) * 1000;
        } else if (weightResultTypeValue === "Metric Ton") {
            weightResult.value = Number(weightInput.value) * 0.000001;
        } else if (weightResultTypeValue === "Long Ton") {
            weightResult.value = Number(weightInput.value) * 9.842073304E-7;
        } else if (weightResultTypeValue === "Short Ton") {
            weightResult.value = Number(weightInput.value) * 0.0000011023;
        } else if (weightResultTypeValue === "Pound") {
            weightResult.value = Number(weightInput.value) * 0.0022046244;
        } else if (weightResultTypeValue === "Ounce") {
            weightResult.value = Number(weightInput.value) * 0.0352739907;
        } else if (weightResultTypeValue === "Carrat") {
            weightResult.value = Number(weightInput.value) * 5;
        }else if (weightResultTypeValue === "Atomic Mass Unit") {
            weightResult.value = Number(weightInput.value) * 6.022136652E+23;
        } else if (weightResultTypeValue === "Gram") {
            weightResult.value = Number(weightInput.value);
        }

    }

    //kelometer-conversion
    function miligramConversion(weightResultTypeValue) {
        if (weightResultTypeValue === "Gram") {
            weightResult.value = Number(weightInput.value) * 0.001;
        } else if (weightResultTypeValue === "Kilogram") {
            weightResult.value = Number(weightInput.value) * 0.000001;
        } else if (weightResultTypeValue === "Metric Ton") {
            weightResult.value = Number(weightInput.value) * 9.999999999E-10;
        } else if (weightResultTypeValue === "Long Ton") {
            weightResult.value = Number(weightInput.value) * 9.842073304E-10;
        } else if (weightResultTypeValue === "Short Ton") {
            weightResult.value = Number(weightInput.value) * 1.10231221E-9;
        } else if (weightResultTypeValue === "Pound") {
            weightResult.value = Number(weightInput.value) * 0.0000022046;
        } else if (weightResultTypeValue === "Ounce") {
            weightResult.value = Number(weightInput.value) * 0.000035274;
        } else if (weightResultTypeValue === "Atomic Mass Unit") {
            weightResult.value = Number(weightInput.value) * 602213665200000000000;
        }else if (weightResultTypeValue === "Carrat") {
            weightResult.value = Number(weightInput.value) * 0.005;
        } else if (weightResultTypeValue === "Miligram") {
            weightResult.value = Number(weightInput.value);
        }
    }

    //centimeter-conversion
    function metricTonConversion(weightResultTypeValue) {
        if (weightResultTypeValue === "Gram") {
            weightResult.value = Number(weightInput.value) * 1000000;
        } else if (weightResultTypeValue === "Miligram") {
            weightResult.value = Number(weightInput.value) * 1000000000;
        } else if (weightResultTypeValue === "Metric Ton") {
            weightResult.value = Number(weightInput.value);
        } else if (weightResultTypeValue === "Long Ton") {
            weightResult.value = Number(weightInput.value) * 0.9842073304;
        } else if (weightResultTypeValue === "Short Ton") {
            weightResult.value = Number(weightInput.value) * 1.1023122101;
        } else if (weightResultTypeValue === "Pound") {
            weightResult.value = Number(weightInput.value) * 2204.6244202;
        } else if (weightResultTypeValue === "Ounce") {
            weightResult.value = Number(weightInput.value) * 35273.990723;
        } else if (weightResultTypeValue === "Carrat") {
            weightResult.value = Number(weightInput.value) * 5000000;
        }else if (weightResultTypeValue === "Atomic Mass Unit") {
            weightResult.value = Number(weightInput.value) * 6.022136652E+29;
        } else if (weightResultTypeValue === "Kilogram") {
            weightResult.value = Number(weightInput.value) * 1000;
        }
    }
    
    //milimeter-conversion
    function longTonConversion(weightResultTypeValue) {
        if (weightResultTypeValue === "Gram") {
            weightResult.value = Number(weightInput.value) * 1016046.08;
        } else if (weightResultTypeValue === "Miligram") {
            weightResult.value = Number(weightInput.value) * 1016046080;
        } else if (weightResultTypeValue === "Metric Ton") {
            weightResult.value = Number(weightInput.value) * 1.01604608;
        } else if (weightResultTypeValue === "Long Ton") {
            weightResult.value = Number(weightInput.value);
        } else if (weightResultTypeValue === "Short Ton") {
            weightResult.value = Number(weightInput.value) * 1.12;
        } else if (weightResultTypeValue === "Pound") {
            weightResult.value = Number(weightInput.value) * 2240;
        } else if (weightResultTypeValue === "Ounce") {
            weightResult.value = Number(weightInput.value) * 35840;
        } else if (weightResultTypeValue === "Carrat") {
            weightResult.value = Number(weightInput.value) * 5080230.4;
        } else if (weightResultTypeValue === "Atomic Mass Unit") {
            weightResult.value = Number(weightInput.value) * 6.118768338E+29;
        } else if (weightResultTypeValue === "Kilogram") {
            weightResult.value = Number(weightInput.value) * 1016.04608;
        }
    }
    //micrometer-conversion
    function shortTonConversion(weightResultTypeValue) {
        if (weightResultTypeValue === "Gram") {
            weightResult.value = Number(weightInput.value) * 907184;
        } else if (weightResultTypeValue === "Miligram") {
            weightResult.value = Number(weightInput.value) * 907184000;
        } else if (weightResultTypeValue === "Metric Ton") {
            weightResult.value = Number(weightInput.value) * 0.907184;
        } else if (weightResultTypeValue === "Long Ton") {
            weightResult.value = Number(weightInput.value) * 0.8928571429;
        } else if (weightResultTypeValue === "Short Ton") {
            weightResult.value = Number(weightInput.value);
        } else if (weightResultTypeValue === "Pound") {
            weightResult.value = Number(weightInput.value) *2000;
        } else if (weightResultTypeValue === "Ounce") {
            weightResult.value = Number(weightInput.value) * 32000;
        } else if (weightResultTypeValue === "Carrat") {
            weightResult.value = Number(weightInput.value) * 4535920;
        }else if (weightResultTypeValue === "Atomic Mass Unit") {
            weightResult.value = Number(weightInput.value) *5.463186016E+29;
        } else if (weightResultTypeValue === "Kilogram") {
            weightResult.value = Number(weightInput.value) * 907.184;
        }
    }

    //nanometer-conversion
    function poundConversion(weightResultTypeValue) {
        if (weightResultTypeValue === "Gram") {
            weightResult.value = Number(weightInput.value) * 0.001;
        } else if (weightResultTypeValue === "Miligram") {
            weightResult.value = Number(weightInput.value) * 100;
        } else if (weightResultTypeValue === "Metric Ton") {
            weightResult.value = Number(weightInput.value) * 1000;
        } else if (weightResultTypeValue === "Long Ton") {
            weightResult.value = Number(weightInput.value) * 10000000;
        } else if (weightResultTypeValue === "Short Ton") {
            weightResult.value = Number(weightInput.value) * 1000000000;
        } else if (weightResultTypeValue === "Pound") {
            weightResult.value = Number(weightInput.value) * 0.0006213689;
        } else if (weightResultTypeValue === "Ounce") {
            weightResult.value = Number(weightInput.value) * 1.0936132983;
        } else if (weightResultTypeValue === "Carrat") {
            weightResult.value = Number(weightInput.value) * 3.280839895;
        }else if (weightResultTypeValue === "Atomic Mass Unit") {
            weightResult.value = Number(weightInput.value) * 3.280839895;
        } else if (weightResultTypeValue === "Kilogram") {
            weightResult.value = Number(weightInput.value) * 39.37007874;
        }
    }

    //mile-conversion
    function ounceConversion(weightResultTypeValue) {
        if (weightResultTypeValue === "Gram") {
            weightResult.value = Number(weightInput.value) * 0.001;
        } else if (weightResultTypeValue === "Miligram") {
            weightResult.value = Number(weightInput.value) * 100;
        } else if (weightResultTypeValue === "Metric Ton") {
            weightResult.value = Number(weightInput.value) * 1000;
        } else if (weightResultTypeValue === "Long Ton") {
            weightResult.value = Number(weightInput.value) * 10000000;
        } else if (weightResultTypeValue === "Short Ton") {
            weightResult.value = Number(weightInput.value) * 1000000000;
        } else if (weightResultTypeValue === "Pound") {
            weightResult.value = Number(weightInput.value) * 0.0006213689;
        } else if (weightResultTypeValue === "Ounce") {
            weightResult.value = Number(weightInput.value) * 1.0936132983;
        } else if (weightResultTypeValue === "Carrat") {
            weightResult.value = Number(weightInput.value) * 3.280839895;
        }else if (weightResultTypeValue === "Atomic Mass Unit") {
            weightResult.value = Number(weightInput.value) * 3.280839895;
        } else if (weightResultTypeValue === "Kilogram") {
            weightResult.value = Number(weightInput.value) * 39.37007874;
        }
    
    }

    //yard-conversion
    function atomicMassConversion(weightResultTypeValue) {
        if (weightResultTypeValue === "Gram") {
            weightResult.value = Number(weightInput.value) * 0.001;
        } else if (weightResultTypeValue === "Miligram") {
            weightResult.value = Number(weightInput.value) * 100;
        } else if (weightResultTypeValue === "Metric Ton") {
            weightResult.value = Number(weightInput.value) * 1000;
        } else if (weightResultTypeValue === "Long Ton") {
            weightResult.value = Number(weightInput.value) * 10000000;
        } else if (weightResultTypeValue === "Short Ton") {
            weightResult.value = Number(weightInput.value) * 1000000000;
        } else if (weightResultTypeValue === "Pound") {
            weightResult.value = Number(weightInput.value) * 0.0006213689;
        } else if (weightResultTypeValue === "Ounce") {
            weightResult.value = Number(weightInput.value) * 1.0936132983;
        } else if (weightResultTypeValue === "Carrat") {
            weightResult.value = Number(weightInput.value) * 3.280839895;
        }else if (weightResultTypeValue === "Atomic Mass Unit") {
            weightResult.value = Number(weightInput.value) * 3.280839895;
        } else if (weightResultTypeValue === "Kilogram") {
            weightResult.value = Number(weightInput.value) * 39.37007874;
        }
    }

    function carratConversion(weightResultTypeValue) {
        if (weightResultTypeValue === "Gram") {
            weightResult.value = Number(weightInput.value) * 0.001;
        } else if (weightResultTypeValue === "Miligram") {
            weightResult.value = Number(weightInput.value) * 100;
        } else if (weightResultTypeValue === "Metric Ton") {
            weightResult.value = Number(weightInput.value) * 1000;
        } else if (weightResultTypeValue === "Long Ton") {
            weightResult.value = Number(weightInput.value) * 10000000;
        } else if (weightResultTypeValue === "Short Ton") {
            weightResult.value = Number(weightInput.value) * 1000000000;
        } else if (weightResultTypeValue === "Pound") {
            weightResult.value = Number(weightInput.value) * 0.0006213689;
        } else if (weightResultTypeValue === "Ounce") {
            weightResult.value = Number(weightInput.value) * 1.0936132983;
        } else if (weightResultTypeValue === "Carrat") {
            weightResult.value = Number(weightInput.value) * 3.280839895;
        }else if (weightResultTypeValue === "Atomic Mass Unit") {
            weightResult.value = Number(weightInput.value) * 3.280839895;
        } else if (weightResultTypeValue === "Kilogram") {
            weightResult.value = Number(weightInput.value) * 39.37007874;
        }
    }
       

}