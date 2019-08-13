//ex-1 simple demostration of abstract class
/*abstract class class_one{
    public fun_one():string{
        return "This is from function one..!"
    };
    public abstract fun_two():string;
}
class class_two extends class_one{
    public fun_two():string{
        return "This is from function two";
    };
};
let obj:class_two= new class_two();
console.log(obj.fun_one(),obj.fun_two());
*/

//ex-2 second simple demostration of abstract class


abstract class class_one{
    public abstract fun_one():string;
};
abstract class class_two extends class_one{
    public abstract fun_two():string;
    public fun_one():string{
        return "this is from class_two which is abstract class";
    };
};
class class_three extends class_two{
    public fun_two():string{
        return "this is from class three which is a normal sub class";
    };
};
let obj:class_three=new class_three();
console.log(obj.fun_one(),obj.fun_two());


abstract class a1{
    public abstract sub1:string;
};
abstract class a2 extends a1{
    public abstract sub2:string;
    
};
abstract class a3 extends a2{
    public abstract sub3:string;
    
};
class a4 extends a3{
    sub1="Angular";
    sub2="mongo";
    sub3="node";    
}
let ob:a4=new a4();
console.log(ob.sub1,ob.sub2,ob.sub3);


interface interface1{
    mean():string;
};
abstract class c1 implements interface1{
    public mean():string{
        return "\nThis is from MEAN Stack...!!";
    };
    abstract mern():string;
};
abstract class c2 extends c1{
    abstract mevn():string;
};
class c3 extends c2{
    public mern():string{
        return "\nThis is from MERN Stack....!!";
    }
    public mevn():string{
        return "\nThis is from the MEVN Stack....!!";
    }
};
let ob1:c3=new c3();
console.log(ob1.mean(),ob1.mern(),ob1.mevn());