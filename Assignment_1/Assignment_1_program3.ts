// 3. Write a typescript program which contains one function named as DisplayFactors. That function should accept one number and 
//    display factors of that number.

// Input: 20
// Output: 1 2 4 5 10

// we can also return string
function DisplayFactors(iNo : number): void
{
    // Updater

    if(iNo < 0)
    {
        iNo = -iNo;
    }

    for(var iCnt = 1; iCnt <= (iNo / 2); iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            console.log(iCnt);
        }
    }
}

var iValue : number = 20;
DisplayFactors(iValue);