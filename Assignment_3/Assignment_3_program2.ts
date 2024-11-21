// 2. Create one typescript application which contains one class named as Circle
// Circle class contains two characteristics (Class data members) as Radius, Pl
// Create one parametrised constructor which accept one value and assign it to Radius.Value of PI member is set to 3.14 
// In Circle class we have to one method (Behaviours) as Area which will return area of Circle 
// After designing the class create two objects of that class by providing some hardcoded value Call the method Area by using both the objects.

class Circle
{
    iRad : number;
    fPI : number;

    public constructor(iRadius : number)
    {
        this.iRad = iRadius;
        this.fPI = 3.14;
    }

    Area() : number
    {
        var iAns : number = 0;
        iAns = this.fPI * this.iRad * this.iRad;
        return iAns;
    }
}

var iRet : number = 0;

var obj3 = new Circle(5);
iRet = obj3.Area();
console.log("Area of circle : "+iRet);

console.log();

var obj4 = new Circle(8);
iRet = obj4.Area();
console.log("Area of circle : "+iRet);