// 1. Write a typescript program which contains one function named as Maximum. That function accepts array of numbers and returns the largest 
//    number from array.

// Input: 23 89 6 29 56 45 77 32
// Output: Maximum number is 89

//              (...Arr : number[])
function Maximum(Arr : number[]): number
{
    var iMax : number = Arr[0];

    for(var iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] > iMax)
        {
            iMax = Arr[iCnt];
        }
    }

    return iMax;
}

var Arr : number[] = [23,89,6,29,56,45,77,32];

var iRet : number = 0;
iRet = Maximum(Arr);
console.log("Maximum number is : "+iRet);