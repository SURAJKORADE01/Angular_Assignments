// 5. Write a typescript program which contains one function named as ChkString. That function accept one string and check whether that string contains 
//    "Marvellous" word or not.

// Input: "Pune Kothrud Marvellous Infosystems" 
// Output: String contains Marvellous in it.

function ChkString(str : string) : boolean
{
    var Arr : string[] = str.split(" ");
    var bFlag : boolean = false;

    for(var iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] == "Marvellous")
        {
            bFlag = true;
            break;
        }
    }

    return bFlag;
}

var str : string = "Pune Kothrud Marvellous Infosystems";
var bRet : boolean = ChkString(str);

if(bRet)
{
    console.log("String contains Marvellous in it");
}

else
{
    console.log("String DOES NOT contains Marvellous in it");
}