let income = [];
let totalIncome = 0;
//let incomeBalance = 0;

let finalBalance = 0;

const addIncDescription = document.getElementById("incomeDescription");
const inputIncome = document.getElementById("incomeAmount");
const incomeDate = document.getElementById("incomeDate");
const addIncBtn = document.getElementById("addIncomeBtn");
const incomeTableBody = document.getElementById("expense_tbl_body");
const totalAmountIncCell = document.getElementById("total_amount");
//const incomeBalanceCell = document.getElementById("net_balance");

let expenses = [];
let totalAmount = 0;
//let exepenseBalance = incomeBalance;

const addDescription = document.getElementById("expenseDescription");
const inputAmount = document.getElementById("expenseAmount");
const inputDate = document.getElementById("expenseDate");
const addExpBtn = document.getElementById("addExpensesBtn");
const expenseTableBody = document.getElementById("expense_tbl_body");
const totalAmountCell = document.getElementById("total_expenses");
//const exepenseBalanceCell = document.getElementById("net_balance");

const finalBalanceCell = document.getElementById("final_balance");

addIncBtn.addEventListener("click", function () {
  const incDescription = addIncDescription.value;
  const incAmount = Number(inputIncome.value);
  const date = incomeDate.value;

  if (incDescription === "") {
    alert("please select a category");
    return;
  }
  if (isNaN(incAmount) || incAmount <= 0) {
    alert("please enter a valid amount");
    return;
  }
  if (date === "") {
    alert("please select a date");
    return;
  }
  income.push({ incDescription, incAmount, date });

  totalIncome += incAmount;
  //incomeBalance += incAmount;
  totalAmountIncCell.textContent = totalIncome;
  //incomeBalanceCell.textContent = incomeBalance;

  finalBalanceCell.textContent = totalIncome - totalAmount;

  const newRow = incomeTableBody.insertRow();

  const DetailsCell = newRow.insertCell();
  const AmountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    income.splice(income.indexOf(expense), 1);

    totalIncome -= expense.incAmount;
    //incomeBalance -= expense.incAmount;
    totalAmountIncCell.textContent = totalIncome;
    //incomeBalanceCell.textContent = incomeBalance;

    finalBalanceCell.textContent = totalIncome - totalAmount;

    incomeTableBody.removeChild(newRow);
  });
  const expense = income[income.length - 1];
  DetailsCell.textContent = expense.incDescription;
  AmountCell.textContent = expense.incAmount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
});
for (const exepense of income) {
  totalIncome += incAmount;
  //incomeBalance += incAmount;
  totalAmountIncCell.textContent = totalIncome;
  //incomeBalanceCell.textContent = incomeBalance;

  finalBalanceCell.textContent = totalIncome - totalAmount;

  const newRow = incomeTableBody.insertRow();

  const DetailsCell = newRow.insertCell();
  const AmountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    income.splioce(income.indexOf(expense), 1);

    totalIncome -= expense.incAmount;
    //incomeBalance -= expense.incAmount;
    totalAmountIncCell.textContent = totalIncome;
    //incomeBalanceCell.textContent = incomeBalance;

    finalBalanceCell.textContent = totalIncome - totalAmount;

    incomeTableBody.removeChild(newRow);
  });
  const expense = income[income.length - 1];
  DetailsCell.textContent = expense.incDescription;
  AmountCell.textContent = expense.incAmount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
}

//**********************************************************************************

addExpBtn.addEventListener("click", function () {
  const description = addDescription.value;
  const amount = Number(inputAmount.value);
  const date = inputDate.value;

  if (description === "") {
    alert("please select a category");
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert("please enter a valid amount");
    return;
  }
  if (date === "") {
    alert("please select a date");
    return;
  }
  expenses.push({ description, amount, date });

  totalAmount += amount;
  //exepenseBalance -= amount;
  totalAmountCell.textContent = totalAmount;
  //exepenseBalanceCell.textContent = exepenseBalance;

  finalBalanceCell.textContent = totalIncome - totalAmount;

  const newRow = expenseTableBody.insertRow();

  const DetailsCell = newRow.insertCell();
  const AmountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    expenses.splice(expenses.indexOf(expense), 1);

    totalAmount -= expense.amount;
    //exepenseBalance += expense.amount;
    totalAmountCell.textContent = totalAmount;
    //exepenseBalanceCell.textContent = exepenseBalance;

    finalBalanceCell.textContent = totalIncome - totalAmount;

    expenseTableBody.removeChild(newRow);
  });
  const expense = expenses[expenses.length - 1];
  DetailsCell.textContent = expense.description;
  AmountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
});
for (const exepense of expenses) {
  totalAmount += amount;
  //exepenseBalance -= amount;
  totalAmountCell.textContent = totalAmount;
  //exepenseBalanceCell.textContent = exepenseBalance;

  const newRow = expenseTableBody.insertRow();

  const DetailsCell = newRow.insertCell();
  const AmountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    expenses.splioce(expenses.indexOf(expense), 1);

    totalAmount -= expense.amount;
    //exepenseBalance += expense.amount;
    totalAmountCell.textContent = totalAmount;
    //exepenseBalanceCell.textContent = exepenseBalance;

    finalBalanceCell.textContent = totalIncome - totalAmount;

    expenseTableBody.removeChild(newRow);
  });
  const expense = expenses[expenses.length - 1];
  DetailsCell.textContent = expense.description;
  AmountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
}

// Function to show the selected form and hide others
function showForm(formId) {
  var forms = document.getElementsByClassName("form-container");
  for (var i = 0; i < forms.length; i++) {
    forms[i].style.display = forms[i].id === formId ? "block" : "none";
  }
}
