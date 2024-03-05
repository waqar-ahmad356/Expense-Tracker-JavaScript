let expenses = [];

function addExpense() {
    const nameInput = document.getElementById('expenseName');
    const amountInput = document.getElementById('expenseAmount');
    const categorySelect = document.getElementById('expenseCategory');

    // Check for a valid amount
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return; // Exit the function if the amount is not valid
    }

    // Use a default name if none is provided
    const name = nameInput.value.trim() || "Unnamed Expense";

    const expense = {
        name: name,
        amount: amount, // Use the validated amount
        category: categorySelect.value
    };

    // Add the validated expense to the expenses array
    expenses.push(expense);

    displayExpenses();
    displaySummary();

    // Reset the input fields for the next expense entry
    nameInput.value = '';
    amountInput.value = '';
    categorySelect.selectedIndex = 0;
}

function displayExpenses() {
    const expensesList = document.getElementById('expensesList');
    expensesList.innerHTML = '<h3>Expenses:</h3>';

    expenses.forEach(expense => {
        const expenseItem = document.createElement('div');
        expenseItem.textContent = `${expense.name}: $${expense.amount.toFixed(2)} - ${expense.category}`;
        expensesList.appendChild(expenseItem);
    });
}

function displaySummary() {
    const summary = document.getElementById('summary');
    summary.innerHTML = '<h3>Summary:</h3>';

    let total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const summaryItem = document.createElement('div');
    summaryItem.textContent = `Total Expenses: $${total.toFixed(2)}`;
    summary.appendChild(summaryItem);
}

// Optional: Use an event listener for form submission instead of the inline onclick attribute
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addExpenseBtn').addEventListener('click', addExpense);
});

