function myfun():never{
    while(true){
        console.log('welcome');
    };
};

function fun_one(message):never{
    throw new Error(message);
};
fun_one('hello');