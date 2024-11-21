// 3. Write a typescript program which contains one function named as Maximum. That function accepts array of numbers and 
//    returns the second largest number from array.

// Input: 23 89 6 29 56 45 77 32 
// Output: Second Maximum number is 77

function SecondMaximum(Arr : number[]): number
{
    if(Arr.length < 2)
    {
        console.log("Array should contain at least two elements.")
        return -1;
    }

    var iMax : number = -Infinity;
    var iMax2 : number = -Infinity;

    for(var iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] > iMax)
        {
            iMax2 = iMax;
            iMax = Arr[iCnt];
        }

        else if(Arr[iCnt] > iMax2 && Arr[iCnt] != iMax)
        {
            iMax2 = Arr[iCnt];
        }
    }

    return iMax2;
}

// Another Logic

// for(i = 0; i < Brr.length; i++)
// {
//     if(Max < Brr[i])
//     {
//         Max = Brr[i];
//     }
// }

// for(i = 0; i < Brr.length; i++)
// {
//     if((Brr[i] < Max) && (Brr[i] > SecMax))
//     {
//         SecMax = Brr[i];
//     }
// }

var iArr : number[] = [23,89,6,29,56,45,77,32];
var iRet : number = SecondMaximum(iArr);
console.log("Second Maximum number from the array is : "+iRet);
