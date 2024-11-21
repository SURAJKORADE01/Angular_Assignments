// 4. Write a typescript program which contains one function named as ChkArmstrong. 
//    That function accepts one numbers and check whether number is Armstrong number or not.

// Input: 153
// Output: It is Armstrong number

function CountNumber(iNo : number) : number
{
    var iCount : number = 0;

    while(iNo != 0)
    {
        iCount++;
        iNo = Math.floor(iNo / 10);
    }

    return iCount;
}

function CalculatePower(X : number, Y : number): number
{
    var iPow : number = 1;

    for(var iCnt = 1; iCnt <= Y; iCnt++)
    {
        iPow = iPow * X;
    }

    return iPow;
}

function ChkArmstrong(iNo : number): boolean
{
    var iCount : number = 0;
    var iTemp : number = iNo;
    var iDigit : number = 0;
    var iSum : number = 0;

    iCount = CountNumber(iNo);

    while(iNo != 0)
    {
        iDigit = iNo % 10;
        iSum = iSum + CalculatePower(iDigit,iCount);
        iNo = Math.floor(iNo / 10);
    }

    if(iSum == iTemp)
    {
        return true;
    }

    else
    {
        return false;
    }
}


var iValue : number = 153;
var bRet : boolean = false;

bRet = ChkArmstrong(iValue);

if(bRet == true)
{
    console.log("It is an Armstrong number");
}

else
{
    console.log("It is NOT an Armstrong number");
}