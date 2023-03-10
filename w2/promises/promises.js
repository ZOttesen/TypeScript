
const calculate = async (x,y,operation) => {
    return await operation(x,y);
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
    if(y === 0) return new Error("Cannot devide by zero");
    return x/y;
}


(async () => {
    calculate(7,3,add).then(res => console.log(res));
    calculate(7,3,sub).then(res => console.log(res));
    calculate(7,3,multi).then(res => console.log(res));
    calculate(7,3,devide).then(res => console.log(res));
})();


