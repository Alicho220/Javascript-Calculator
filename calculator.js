const first_number = parseFloat(prompt('Enter First Number: '));
const operator = prompt('Enter operator (\n +  to add,\n -  to subtract,\n *  to multiply,\n /  to divide. ): ');
const second_number = parseFloat(prompt('Enter Second Number: '));

let result;
let error_message;
if (!Number.isInteger(first_number) && !Number.parseFloat(first_number)) {
    error_message = 'first input must be an integer value or a double value'
    console.log(error_message)
} else if (!Number.isInteger(second_number) && !Number.parseFloat(second_number)) {
    error_message = 'second input must be an integer value or a double value'
    console.log(error_message)
} else {

    switch (operator) {
        case '+':
            result = first_number + second_number;
            console.log(`${first_number} ${operator} ${second_number} = ${result}`);
            break;
        case '-':
            result = first_number - second_number;
            console.log(`${first_number} ${operator} ${second_number} = ${result}`);
            break;
        case '*':
            result = first_number * second_number;
            console.log(`${first_number} ${operator} ${second_number} = ${result}`);
            break;
        case '/':
            result = first_number / second_number;
            console.log(`${first_number} ${operator} ${second_number} = ${result}`);
            break;
        default:
            error_message = 'enter a valid operator'
            console.log(error_message);
    }
} 