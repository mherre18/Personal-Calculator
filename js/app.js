const userBudget = prompt('How much do you have?');
let amountBudget;
const form = document.getElementById('add-expense');


// class

class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.remain = Number(budget);
    }

    budgetRemain(amount = 0) {
        return this.remain -= Number(amount);
    }
}

class Show {
    insertBudget(amount){

        const budgetSpan = document.querySelector('span#total');
        const remainSpan = document.querySelector('span#remaining');

        //HTML
        budgetSpan.innerHTML = `${amount}`;
        remainSpan.innerHTML = `${amount}`;
    }

    printMessage(message, type) {
        const divMessage = document.createElement('div');
        divMessage.classList.add('text-center', 'alert');

        if(type === 'error'){
            divMessage.classList.add('alert-danger');
        } else {
            divMessage.classList.add('alert-success');
        }

        divMessage.appendChild(document.createTextNode(message));

        document.querySelector('.primary').insertBefore(divMessage, form);

        setTimeout(function() {
            document.querySelector('.primary .alert').remove();
            form.reset();
        }, 3000);
    }

    addExpenseList(name, amount) {
        const expensesList = document.querySelector('#expenses ul');

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        li.innerHTML = `${name}
                        $ ${amount}`;

        expensesList.appendChild(li);                
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if(userBudget === null || userBudget === '') {
        window.location.reload();

    } else {
        amountBudget = new Budget(userBudget);
        //console.log(amountBudget);

        const ui = new Show();
        ui.insertBudget(amountBudget.budget);
        
    }

});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nameExpense = document.querySelector('#expense').value;
    const amountExpense = document.querySelector('#amount').value;
    //console.log('Send');

    const ui = new Show();

    if(nameExpense === '' || amountExpense === '') {
        ui.printMessage('Something went wrong', 'error');
    } else {
        ui.printMessage('Correct', 'correct');
        ui.addExpenseList(nameExpense, amountExpense);
    }
});