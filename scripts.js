// დავალება 1

function isEqual(a, b){
    if(a === b){
        console.log('ტოლია');
    } else{
        console.log('არ არის ტოლი');
    }
}

isEqual(5, 5);
isEqual(5, '5');
isEqual('test', null);

//დავალება 2

function converToCelcius(fahrenheit){
    if(typeof fahrenheit == 'number'){
        celsius = (fahrenheit - 32) * 5/9;
        return celsius;
    }else{
        return false;
    }
}

console.log(converToCelcius(329));
console.log(converToCelcius('329'));


//დავალება 3 

function makeOperations(a, b, operation){
    if(typeof a !='number' || typeof b!='number'){
        return false;
    }
    let result = false;
    switch(operation){
        case '+':
            result = a + b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        case '-':
            result = a - b;
            break;
        default:
            result = false;

    }

    return result;

}

console.log(makeOperations(3, 4, '+'));
console.log(makeOperations(9, 4, '*'));
console.log(makeOperations(32, 4, '/'));
console.log(makeOperations(22, 4, '-'));
console.log(makeOperations('5', 2, '+'));
console.log(makeOperations(2, 2, '~'));

