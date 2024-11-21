// 1. Create one typescript application which contains one class named as Arithmetic.
// Arithmetic class contains two characteristics (Class data members) as Number1, Number2. 
// Create one parametrised constructor which accept two values and assign it to Number1 and Number2
// In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction, Multiplication and Division.
// Addition method will add Number1, Number2 & return result. 
// Subtraction method will subtract Number1, Number2 & return result.
// Multiplication method will multiply Number1, Number2 & return result. 
// Division method will divide Number1, Number2 & return result.
// After designing the class create two objects of that class by providing some hardcoded value Call all the methods by using both the objects.

class Arithmetic
{
    iNo1 : number;
    iNo2 : number;

    constructor(iValue1 : number, iValue2 : number)
    {
        this.iNo1 = iValue1;
        this.iNo2 = iValue2;
    }

    Addition() : number
    {
        var iAns : number = 0;
        iAns = this.iNo1 + this.iNo2;
        return iAns;
    }

    Subtraction() : number
    {
        var iAns : number = 0;
        iAns = this.iNo1 - this.iNo2;
        return iAns;
    }

    Multiplication() : number
    {
        var iAns : number = 0;
        iAns = this.iNo1 * this.iNo2;
        return iAns;
    }

    Division() : number
    {
        var iAns : number = 0;
        iAns = this.iNo1 / this.iNo2;
        return iAns;
    }
}

var iRet : number = 0;

var obj1 = new Arithmetic(20,10);

iRet = obj1.Addition();
console.log("Addition is : "+iRet);

iRet = obj1.Subtraction();
console.log("Subtraction is : "+iRet);

iRet = obj1.Multiplication();
console.log("Multiplication is : "+iRet);

iRet = obj1.Division();
console.log("Division is : "+iRet);

console.log();
console.log();

var obj2 = new Arithmetic(55,11);

iRet = obj2.Addition();
console.log("Addition is : "+iRet);

iRet = obj2.Subtraction();
console.log("Subtraction is : "+iRet);

iRet = obj2.Multiplication();
console.log("Multiplication is : "+iRet);

iRet = obj2.Division();
console.log("Division is : "+iRet);