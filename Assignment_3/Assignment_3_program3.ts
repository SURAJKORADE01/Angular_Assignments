// 3. Create one typescript application which contains one class named as CircleX which sill inherits above Circle class
// In Circlex class we have to write one method (Behaviours) as Circumference which will return circumference of circle. 
// After designing the class create two objects of that class by providing some hardcoded value. Call Circumference and Area methods by using both the objects.

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

class CircleX extends Circle
{
    Circumference() : number
    {
        var iAns : number = 0;
        iAns = 2 * this.fPI * this.iRad;
        return iAns;
    }
}

var iRet : number = 0;

var obj5 = new CircleX(5);
iRet = obj5.Area();
console.log("Area of circle is : "+iRet);

iRet = obj5.Circumference();
console.log("Circumference of circle is : "+iRet);

console.log();
console.log();

var obj6 = new CircleX(8);
iRet = obj6.Area();
console.log("Area of circle is : "+iRet);

iRet = obj6.Circumference();
console.log("Circumference of circle is : "+iRet);
