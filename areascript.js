var areaInput = document.getElementById('areaInput');
var areaResult = document.getElementById('areaResult');
var areaInputType = document.getElementById('areaInputType');
var areaResultType = document.getElementById('areaResultType');
var areaInputTypeValue,areaResultTypeValue;

areaInput.addEventListener("keyup",myArea);
areaInputType.addEventListener("change", myArea);
areaResultType.addEventListener("change", myArea);

areaInputTypeValue = areaInputType.value;
areaResultTypeValue = areaResultType.value;
function myArea(){

    areaInputTypeValue = areaInputType.value;
    areaResultTypeValue = areaResultType.value;

    if(areaInputTypeValue === "Sqaure Meter" && areaResultTypeValue === "Sqaure Meter"){
        areaResult.value = Number(areaInput.value);
    }else if(areaInputTypeValue === "Sqaure Meter" && areaResultTypeValue === "Sqaure Kilometer"){
        areaResult.value = Number(areaInput.value) * 0.000001;
    }else if(areaInputTypeValue === "Sqaure Meter" && areaResultTypeValue === "Sqaure Centimeter"){
        areaResult.value = Number(areaInput.value) * 10000;
    }else if(areaInputTypeValue === "Sqaure Meter" && areaResultTypeValue === "Sqaure Milimeter"){
        areaResult.value = Number(areaInput.value) * 1000000;
    }else if(areaInputTypeValue === "Sqaure Meter" && areaResultTypeValue === "Sqaure Micrometer"){
        areaResult.value = Number(areaInput.value) * 1000000000000;
    }else if(areaInputTypeValue === "Sqaure Meter" && areaResultTypeValue === "Hectare"){
        areaResult.value = Number(areaInput.value) * 0.0001;
    }else if(areaInputTypeValue === "Sqaure Meter" && areaResultTypeValue === "Sqaure Mile"){
        areaResult.value = Number(areaInput.value) * 3.861018768E-7; 
    }else if(areaInputTypeValue === "Sqaure Meter" && areaResultTypeValue === "Sqaure Yard"){
        areaResult.value = Number(areaInput.value) * 1.1959900463; 
    }else if(areaInputTypeValue === "Sqaure Meter" && areaResultTypeValue === "Sqaure Foot"){
        areaResult.value = Number(areaInput.value) * 10.763910417; 
    }else if(areaInputTypeValue === "Sqaure Meter" && areaResultTypeValue === "Sqaure Inch"){
        areaResult.value = Number(areaInput.value) * 1550.0031;
    }else if(areaInputTypeValue === "Sqaure Meter" && areaResultTypeValue === "Acre"){
        areaResult.value = Number(areaInput.value) * 0.0002471054; 
    }


    if(areaInputTypeValue === "Sqaure Kilometer" && areaResultTypeValue === "Sqaure Kilometer"){
         areaResult.value = areaInput.value; 
    }else if(areaInputTypeValue === "Sqaure Kilometer" && areaResultTypeValue === "Sqaure Centimeter"){
        areaResult.value = Number(areaInput.value) * 10000000000;
    }else if(areaInputTypeValue === "Sqaure Kilometer" && areaResultTypeValue === "Sqaure Milimeter"){
        areaResult.value = Number(areaInput.value) * 11000000000000;
    }else if(areaInputTypeValue === "Sqaure Kilometer" && areaResultTypeValue === "Sqaure Micrometer"){
        areaResult.value = Number(areaInput.value) * 1000000000000000000n;
    }else if(areaInputTypeValue === "Sqaure Kilometer" && areaResultTypeValue === "Hectare"){
        areaResult.value = Number(areaInput.value) * 100;
    }else if(areaInputTypeValue === "Sqaure Kilometer" && areaResultTypeValue === "Sqaure Mile"){
        areaResult.value = Number(areaInput.value) * 0.3861018768; 
    }else if(areaInputTypeValue === "Sqaure Kilometer" && areaResultTypeValue === "Sqaure Yard"){
        areaResult.value = Number(areaInput.value) * 1195990.0463; 
    }else if(areaInputTypeValue === "Sqaure Kilometer" && areaResultTypeValue === "Sqaure Foot"){
        areaResult.value = Number(areaInput.value) * 10763910.417; 
    }else if(areaInputTypeValue === "Sqaure Kilometer" && areaResultTypeValue === "Sqaure Inch"){
        areaResult.value = Number(areaInput.value) * 1550003100;
    }else if(areaInputTypeValue === "Sqaure Kilometer" && areaResultTypeValue === "Sqaure Meter"){
        areaResult.value = Number(areaInput.value) * 1000000;
    }else if(areaInputTypeValue === "Sqaure Kilometer" && areaResultTypeValue === "Acre"){
        areaResult.value = Number(areaInput.value) * 247.10538147; 
    }



    if(areaInputTypeValue === "Sqaure Centimeter" && areaResultTypeValue === "Sqaure Kilometer"){
        areaResult.value = Number(areaInput.value) * 1.E-10;
    }else if(areaInputTypeValue === "Sqaure Centimeter" && areaResultTypeValue === "Sqaure Centimeter"){
         areaResult.value = areaInput.value;
    }else if(areaInputTypeValue === "Sqaure Centimeter" && areaResultTypeValue === "Sqaure Milimeter"){
        areaResult.value = Number(areaInput.value) * 100;
    }else if(areaInputTypeValue === "Sqaure Centimeter" && areaResultTypeValue === "Sqaure Micrometer"){
        areaResult.value = Number(areaInput.value) * 100000000;
    }else if(areaInputTypeValue === "Sqaure Centimeter" && areaResultTypeValue === "Hectare"){
        areaResult.value = Number(areaInput.value) * 1.E-8;
    }else if(areaInputTypeValue === "Sqaure Centimeter" && areaResultTypeValue === "Sqaure Mile"){
        areaResult.value = Number(areaInput.value) * 3.861018768E-11; 
    }else if(areaInputTypeValue === "Sqaure Centimeter" && areaResultTypeValue === "Sqaure Yard"){
        areaResult.value = Number(areaInput.value) * 0.000119599; 
    }else if(areaInputTypeValue === "Sqaure Centimeter" && areaResultTypeValue === "Sqaure Foot"){
        areaResult.value = Number(areaInput.value) * 0.001076391; 
    }else if(areaInputTypeValue === "Sqaure Centimeter" && areaResultTypeValue === "Sqaure Inch"){
        areaResult.value = Number(areaInput.value) * 0.15500031;
    }else if(areaInputTypeValue === "Sqaure Centimeter" && areaResultTypeValue === "Sqaure Meter"){
        areaResult.value = Number(areaInput.value) * 0.0001;
    }else if(areaInputTypeValue === "Sqaure Centimeter" && areaResultTypeValue === "Acre"){
        areaResult.value = Number(areaInput.value) * 2.471053814E-8; 
    }


    if(areaInputTypeValue === "Sqaure Milimeter" && areaResultTypeValue === "Sqaure Kilometer"){
        areaResult.value = Number(areaInput.value) * 1.E-12;
    }else if(areaInputTypeValue === "Sqaure Milimeter" && areaResultTypeValue === "Sqaure Centimeter"){
        areaResult.value = Number(areaInput.value) * 0.01;
    }else if(areaInputTypeValue === "Sqaure Milimeter" && areaResultTypeValue === "Sqaure Milimeter"){
        areaResult.value = areaInput.value;
    }else if(areaInputTypeValue === "Sqaure Milimeter" && areaResultTypeValue === "Sqaure Micrometer"){
        areaResult.value = Number(areaInput.value) * 1000000;
    }else if(areaInputTypeValue === "Sqaure Milimeter" && areaResultTypeValue === "Hectare"){
        areaResult.value = Number(areaInput.value) * 9.999999999E-11;
    }else if(areaInputTypeValue === "Sqaure Milimeter" && areaResultTypeValue === "Sqaure Mile"){
        areaResult.value = Number(areaInput.value) * 3.861018768E-13; 
    }else if(areaInputTypeValue === "Sqaure Milimeter" && areaResultTypeValue === "Sqaure Yard"){
        areaResult.value = Number(areaInput.value) * 0.000001196; 
    }else if(areaInputTypeValue === "Sqaure Milimeter" && areaResultTypeValue === "Sqaure Foot"){
        areaResult.value = Number(areaInput.value) * 0.0000107639; 
    }else if(areaInputTypeValue === "Sqaure Milimeter" && areaResultTypeValue === "Sqaure Inch"){
        areaResult.value = Number(areaInput.value) * 0.0015500031;
    }else if(areaInputTypeValue === "Sqaure Milimeter" && areaResultTypeValue === "Sqaure Meter"){
        areaResult.value = Number(areaInput.value) * 0.000001;
    }else if(areaInputTypeValue === "Sqaure Milimeter" && areaResultTypeValue === "Acre"){
        areaResult.value = Number(areaInput.value) * 2.471053814E-10; 
    }



    if(areaInputTypeValue === "Sqaure Micrometer" && areaResultTypeValue === "Sqaure Kilometer"){
        areaResult.value = Number(areaInput.value) * 1.E-18;
    }else if(areaInputTypeValue === "Sqaure Micrometer" && areaResultTypeValue === "Sqaure Centimeter"){
        areaResult.value = Number(areaInput.value) * 9.999999999E-9;
    }else if(areaInputTypeValue === "Sqaure Micrometer" && areaResultTypeValue === "Sqaure Milimeter"){
        areaResult.value = Number(areaInput.value) * 0.000001;
    }else if(areaInputTypeValue === "Sqaure Micrometer" && areaResultTypeValue === "Sqaure Micrometer"){
        areaResult.value = areaInput.value; 
    }else if(areaInputTypeValue === "Sqaure Micrometer" && areaResultTypeValue === "Hectare"){
        areaResult.value = Number(areaInput.value) * 1.E-16;
    }else if(areaInputTypeValue === "Sqaure Micrometer" && areaResultTypeValue === "Sqaure Mile"){
        areaResult.value = Number(areaInput.value) * 3.861018768E-19; 
    }else if(areaInputTypeValue === "Sqaure Micrometer" && areaResultTypeValue === "Sqaure Yard"){
        areaResult.value = Number(areaInput.value) * 1.195990046E-12; 
    }else if(areaInputTypeValue === "Sqaure Micrometer" && areaResultTypeValue === "Sqaure Foot"){
        areaResult.value = Number(areaInput.value) * 1.076391041E-11; 
    }else if(areaInputTypeValue === "Sqaure Micrometer" && areaResultTypeValue === "Sqaure Inch"){
        areaResult.value = Number(areaInput.value) * 1.5500031E-9;
    }else if(areaInputTypeValue === "Sqaure Micrometer" && areaResultTypeValue === "Sqaure Meter"){
        areaResult.value = Number(areaInput.value) * 1.E-12;
    }else if(areaInputTypeValue === "Sqaure Micrometer" && areaResultTypeValue === "Acre"){
        areaResult.value = Number(areaInput.value) * 2.471053814E-16; 
    }
    if(areaInputTypeValue === "Hectare" && areaResultTypeValue === "Sqaure Kilometer"){
        areaResult.value = Number(areaInput.value) * 0.01;
    }else if(areaInputTypeValue === "Hectare " && areaResultTypeValue === "Sqaure Centimeter"){
        areaResult.value = Number(areaInput.value) * 100000000;
    }else if(areaInputTypeValue === "Hectare" && areaResultTypeValue === "Sqaure Milimeter"){
        areaResult.value = Number(areaInput.value) * 10000000000;
    }else if(areaInputTypeValue === "Hectare" && areaResultTypeValue === "Sqaure Micrometer"){
        areaResult.value = Number(areaInput.value) * 10000000000000000n;
    }else if(areaInputTypeValue === "Hectare" && areaResultTypeValue === "Hectare"){
        areaResult.value = areaInput.value;
    }else if(areaInputTypeValue === "Hectare" && areaResultTypeValue === "Sqaure Mile"){
        areaResult.value = Number(areaInput.value) * 0.0038610188; 
    }else if(areaInputTypeValue === "Hectare" && areaResultTypeValue === "Sqaure Yard"){
        areaResult.value = Number(areaInput.value) * 11959.900463; 
    }else if(areaInputTypeValue === "Hectare" && areaResultTypeValue === "Sqaure Foot"){
        areaResult.value = Number(areaInput.value) * 107639.10417; 
    }else if(areaInputTypeValue === "Hectare" && areaResultTypeValue === "Sqaure Inch"){
        areaResult.value = Number(areaInput.value) * 15500031;
    }else if(areaInputTypeValue === "Hectare" && areaResultTypeValue === "Sqaure Meter"){
        areaResult.value = Number(areaInput.value) * 10000;
    }else if(areaInputTypeValue === "Hectare" && areaResultTypeValue === "Acre"){
        areaResult.value = Number(areaInput.value) * 2.4710538147; 
    }

    if(areaInputTypeValue === "Sqaure Mile" && areaResultTypeValue === "Sqaure Kilometer"){
        areaResult.value = Number(areaInput.value) * 2.58999;
    }else if(areaInputTypeValue === "Sqaure Mile" && areaResultTypeValue === "Sqaure Centimeter"){
        areaResult.value = Number(areaInput.value) * 25899900000;
    }else if(areaInputTypeValue === "Sqaure Mile" && areaResultTypeValue === "Sqaure Milimeter"){
        areaResult.value = Number(areaInput.value) * 2589990000000;
    }else if(areaInputTypeValue === "Sqaure Mile" && areaResultTypeValue === "Sqaure Micrometer"){
        areaResult.value = Number(areaInput.value) * 2589990000000000000n;
    }else if(areaInputTypeValue === "Sqaure Mile" && areaResultTypeValue === "Hectare"){
        areaResult.value = Number(areaInput.value) * 258.999;
    }else if(areaInputTypeValue === "Sqaure Mile" && areaResultTypeValue === "Sqaure Mile"){
        areaResult.value = areaInput.value; 
    }else if(areaInputTypeValue === "Sqaure Mile" && areaResultTypeValue === "Sqaure Yard"){
        areaResult.value = Number(areaInput.value) * 3097602.26; 
    }else if(areaInputTypeValue === "Sqaure Mile" && areaResultTypeValue === "Sqaure Foot"){
        areaResult.value = Number(areaInput.value) * 27878420.34; 
    }else if(areaInputTypeValue === "Sqaure Mile" && areaResultTypeValue === "Sqaure Inch"){
        areaResult.value = Number(areaInput.value) * 4014492529;
    }else if(areaInputTypeValue === "Sqaure Mile" && areaResultTypeValue === "Sqaure Meter"){
        areaResult.value = Number(areaInput.value) * 2589990;
    }else if(areaInputTypeValue === "Sqaure Mile" && areaResultTypeValue === "Acre"){
        areaResult.value = Number(areaInput.value) * 640.00046695; 
    }

    if(areaInputTypeValue === "Sqaure Yard" && areaResultTypeValue === "Sqaure Kilometer"){
        areaResult.value = Number(areaInput.value) * 8.3612736E-7;
    }else if(areaInputTypeValue === "Sqaure Yard" && areaResultTypeValue === "Sqaure Centimeter"){
        areaResult.value = Number(areaInput.value) * 8361.2736;
    }else if(areaInputTypeValue === "Sqaure Yard" && areaResultTypeValue === "Sqaure Milimeter"){
        areaResult.value = Number(areaInput.value) * 836127.36;
    }else if(areaInputTypeValue === "Sqaure Yard" && areaResultTypeValue === "Sqaure Micrometer"){
        areaResult.value = Number(areaInput.value) * 836127360000;
    }else if(areaInputTypeValue === "Sqaure Yard" && areaResultTypeValue === "Hectare"){
        areaResult.value = Number(areaInput.value) * 0.0000836127;
    }else if(areaInputTypeValue === "Sqaure Yard" && areaResultTypeValue === "Sqaure Mile"){
        areaResult.value = Number(areaInput.value) * 3.228303429E-7; 
    }else if(areaInputTypeValue === "Sqaure Yard" && areaResultTypeValue === "Sqaure Yard"){
          areaResult.value = areaInput.value;
    }else if(areaInputTypeValue === "Sqaure Yard" && areaResultTypeValue === "Sqaure Foot"){
        areaResult.value = Number(areaInput.value) * 9; 
    }else if(areaInputTypeValue === "Sqaure Yard" && areaResultTypeValue === "Sqaure Inch"){
        areaResult.value = Number(areaInput.value) * 1296;
    }else if(areaInputTypeValue === "Sqaure Yard" && areaResultTypeValue === "Sqaure Meter"){
        areaResult.value = Number(areaInput.value) * 0.83612736;
    }else if(areaInputTypeValue === "Sqaure Yard" && areaResultTypeValue === "Acre"){
        areaResult.value = Number(areaInput.value) * 0.0002066116; 
    }

    if(areaInputTypeValue === "Sqaure Foot" && areaResultTypeValue === "Sqaure Kilometer"){
        areaResult.value = Number(areaInput.value) * 9.290304E-8;
    }else if(areaInputTypeValue === "Sqaure Foot" && areaResultTypeValue === "Sqaure Centimeter"){
        areaResult.value = Number(areaInput.value) * 929.0304;
    }else if(areaInputTypeValue === "Sqaure Foot" && areaResultTypeValue === "Sqaure Milimeter"){
        areaResult.value = Number(areaInput.value) * 92903.04;
    }else if(areaInputTypeValue === "Sqaure Foot" && areaResultTypeValue === "Sqaure Micrometer"){
        areaResult.value = Number(areaInput.value) * 92903040000;
    }else if(areaInputTypeValue === "Sqaure Foot" && areaResultTypeValue === "Hectare"){
        areaResult.value = Number(areaInput.value) * 0.0000092903;
    }else if(areaInputTypeValue === "Sqaure Foot" && areaResultTypeValue === "Sqaure Mile"){
        areaResult.value = Number(areaInput.value) * 3.58700381E-8; 
    }else if(areaInputTypeValue === "Sqaure Foot" && areaResultTypeValue === "Sqaure Yard"){
        areaResult.value = Number(areaInput.value) * 0.1111111111; 
    }else if(areaInputTypeValue === "Sqaure Foot" && areaResultTypeValue === "Sqaure Foot"){
        areaResult.value = areaInput.value; 
    }else if(areaInputTypeValue === "Sqaure Foot" && areaResultTypeValue === "Sqaure Inch"){
        areaResult.value = Number(areaInput.value) * 144;
    }else if(areaInputTypeValue === "Sqaure Foot" && areaResultTypeValue === "Sqaure Meter"){
        areaResult.value = Number(areaInput.value) * 0.09290304;
    }else if(areaInputTypeValue === "Sqaure Foot" && areaResultTypeValue === "Acre"){
        areaResult.value = Number(areaInput.value) * 0.0000229568; 
    }

    if(areaInputTypeValue === "Sqaure Inch" && areaResultTypeValue === "Sqaure Kilometer"){
        areaResult.value = Number(areaInput.value) * 6.4516E-10;
    }else if(areaInputTypeValue === "Sqaure Inch" && areaResultTypeValue === "Sqaure Centimeter"){
        areaResult.value = Number(areaInput.value) * 6.4516;
    }else if(areaInputTypeValue === "Sqaure Inch" && areaResultTypeValue === "Sqaure Milimeter"){
        areaResult.value = Number(areaInput.value) * 645.16;
    }else if(areaInputTypeValue === "Sqaure Inch" && areaResultTypeValue === "Sqaure Micrometer"){
        areaResult.value = Number(areaInput.value) * 645160000;
    }else if(areaInputTypeValue === "Sqaure Inch" && areaResultTypeValue === "Hectare"){
        areaResult.value = Number(areaInput.value) * 6.4516E-8;
    }else if(areaInputTypeValue === "Sqaure Inch" && areaResultTypeValue === "Sqaure Mile"){
        areaResult.value = Number(areaInput.value) * 2.490974868E-10; 
    }else if(areaInputTypeValue === "Sqaure Inch" && areaResultTypeValue === "Sqaure Yard"){
        areaResult.value = Number(areaInput.value) * 0.0007716049; 
    }else if(areaInputTypeValue === "Sqaure Inch" && areaResultTypeValue === "Sqaure Foot"){
        areaResult.value = Number(areaInput.value) * 0.0069444444; 
    }else if(areaInputTypeValue === "Sqaure Inch" && areaResultTypeValue === "Sqaure Inch"){
        areaResult.value = areaInput.value;
    }else if(areaInputTypeValue === "Sqaure Inch" && areaResultTypeValue === "Sqaure Meter"){
        areaResult.value = Number(areaInput.value) * 0.00064516;
    }else if(areaInputTypeValue === "Sqaure Inch" && areaResultTypeValue === "Acre"){
        areaResult.value = Number(areaInput.value) * 1.594225079E-7; 
    }


    if(areaInputTypeValue === "Acre" && areaResultTypeValue === "Sqaure Kilometer"){
        areaResult.value = Number(areaInput.value) * 0.0040468564
    }else if(areaInputTypeValue === "Acre" && areaResultTypeValue === "Sqaure Centimeter"){
        areaResult.value = Number(areaInput.value) * 40468564.224;
    }else if(areaInputTypeValue === "Acre" && areaResultTypeValue === "Sqaure Milimeter"){
        areaResult.value = Number(areaInput.value) * 4046856422.4;
    }else if(areaInputTypeValue === "Acre" && areaResultTypeValue === "Sqaure Micrometer"){
        areaResult.value = Number(areaInput.value) * 4046856422400000;
    }else if(areaInputTypeValue === "Acre" && areaResultTypeValue === "Hectare"){
        areaResult.value = Number(areaInput.value) * 0.4046856422;
    }else if(areaInputTypeValue === "Acret" && areaResultTypeValue === "Sqaure Mile"){
        areaResult.value = Number(areaInput.value) * 0.0015624989; 
    }else if(areaInputTypeValue === "Acre" && areaResultTypeValue === "Sqaure Yard"){
        areaResult.value = Number(areaInput.value) * 4840; 
    }else if(areaInputTypeValue === "Acre" && areaResultTypeValue === "Sqaure Foot"){
        areaResult.value = Number(areaInput.value) * 43560; 
    }else if(areaInputTypeValue === "Acre" && areaResultTypeValue === "Sqaure Inch"){
        areaResult.value = Number(areaInput.value) * 6272640;
    }else if(areaInputTypeValue === "Acre" && areaResultTypeValue === "Sqaure Meter"){
        areaResult.value = Number(areaInput.value) * 4046.8564224;
    }else if(areaInputTypeValue === "Acre" && areaResultTypeValue === "Acre"){
         areaResult.value = areaInput.value;
    }




    
}