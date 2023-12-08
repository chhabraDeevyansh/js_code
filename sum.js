// calling a function inside a function

function finalSum(a,b,cal){
    let ans=cal(a,b);
    return ans;
}

function actacl(a,b){
    return a+b;
}

let finalans=finalSum(1,2,actacl);
console.log(finalans);
