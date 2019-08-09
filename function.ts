function fun_one():string{

    return "Hello World";
}

document.write("<br>"+fun_one());


function fun_two(var1:number):boolean{
    while( var1!=0 )
    {
        var remainder = var1%10;
       var reversedInteger = reversedInteger*10 + remainder;
        var1/= 10;
    }
    if (var1 == reversedInteger)
       {
           return true;
       }
    else
       return false;
    

}

document.write("<br>"+fun_two(111));



function mean(b1:string,b2:string,b3:string):string{
    return "<br>"+b1+"--"+b2+"--"+b3;
}

document.write(mean('Angular','NodeJs','MongoDB'));


function fun1():any{
    return fun2();
}
function fun2():string{
    return "<br>WELCOME";
}

document.write(fun1());

function _dbFun(arg1:any,arg2:any){
    document.write("<br>"+arg1);
    document.write("<br>"+arg2);
}

function _sucessCallBack():string{
    return "Success";
}

function _errorCallBack():string{
    return "Error";
}


_dbFun(_sucessCallBack(),_errorCallBack());