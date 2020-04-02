const userBudget = prompt('How much do you have?');
let amountBudget;

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

document.addEventListener('DOMContentLoaded', function() {
    if(userBudget === null || userBudget === '') {
        window.location.reload();

    } else {
        amountBudget = new Budget(userBudget);
        console.log(amountBudget);
    }

})