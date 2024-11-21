// 5. Write a typescript program which contains one function named as Fibonacci. That function accept one number from user and 
//    print Fibonacci series till that number.

// Input: 21
// Output: 1 1 3 8 13 21

function Fibonacci(iNo : number): void
{
    if(iNo < 1)
    {
        console.log("Invalid input. Please enter a number greater than 0.");
        return;
    }

    var iSecondLast : number = 1;
    var iLast : number = 1;

    console.log("Fibonacci series up to "+iNo+":");

    console.log(iSecondLast);
    console.log(iLast);
    
    var iAns : number = 0;

    while(true)
    {
        iAns = iSecondLast + iLast;

        if(iAns > iNo)
        {
            break;
        }

        console.log(iAns);

        iSecondLast = iLast;
        iLast = iAns;
    }
}

var iValue : number = 21;
Fibonacci(iValue);