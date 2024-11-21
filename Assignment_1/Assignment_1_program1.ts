// 1. Write a typescript program which contains one function named as Maximum. That function accepts three parameters and it should returns 
//    largest value from three input parameters.

// Input: 23 89 6
// Output: Maximum number is 89

function Maximum(iValue1 : number, iValue2 : number, iValue3 : number): number
{
    if((iValue1 >= iValue2) && (iValue1 >= iValue3))
    {
        return iValue1;
    }

    else if((iValue2 >= iValue1) && (iValue2 >= iValue3))
    {
        return iValue2;
    } 

    else
    {
        return iValue3;
    }
}


var iNo1 : number = 23;
var iNo2 : number = 89;
var iNo3 : number = 6;

var iAns : number = 0;
iAns = Maximum(iNo1,iNo2,iNo3);
console.log("Maximum number is : "+iAns);