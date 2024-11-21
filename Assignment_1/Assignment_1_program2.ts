// 2. Write a typescript program which contains one function named as Area. That function should calculate area of circle. 
//    Accept value of radius from user and return its area. Default value of PI should be 3.14 if it is not provided by the caller.

// Input:  5
// Output: Area of circle is 78.5

function Area(iRadius : number, fPI : number =  3.14) : number
{
    var iArea : number = 0;
    iArea = fPI * iRadius * iRadius;
    return iArea;
}

var iRadius : number = 5
var iRet : number = 0;

iRet = Area(iRadius);
console.log("Area of circle is : "+iRet);