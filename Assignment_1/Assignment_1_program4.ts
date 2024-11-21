// 4. Write a typescript program which contains one function named as ChkPrime. That function should accept one number and it should 
//    return true if the given number is prime and otherwise return false..

// Input: 11
// Output: It is prime number

function ChkPrime(iNo : number): boolean
{
    var bFlag = true;

    for(var iCnt = 2; iCnt <= (iNo / 2); iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            bFlag = false;
            break;
        }
    }

    return bFlag;
}

var iValue : number = 11;
var bRet : boolean = false;

bRet = ChkPrime(iValue);

if(bRet == true)
{
    console.log("It is Prime number");
}

else
{
    console.log("It is NOT a prime number");
}