
    function calculate(x,y,operation){
        console.log(operation(x,y));

    }

    function add (x,y){
        return x+y;
    }

    function sub(x,y){
        return x-y;
    }

    function multi(x,y){
        return x*y;
    }

    function devide(x,y){
        return x/y;
    }
    calculate(7,3,add)
    calculate(7,3,sub)
    calculate(7,3,multi)
    calculate(7,3,devide)


