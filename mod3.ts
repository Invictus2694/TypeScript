class mod3{
    private constructor(){}
    static fun_one(){
        return new mod3();
    }
    /**
     * fun_two
 :string  
 return "welcome";  */
    public fun_two():string {
        return "welcome";
        
    }
};
console.log(mod3.fun_one().fun_two());