function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
return (add=x =>{return x+2;})
}
function returnsAnAnonymousFunction(){
    return (()=>{return "ssup";})
}