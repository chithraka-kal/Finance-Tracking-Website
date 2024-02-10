function addTransaction(transactionType) {
  // Get form values based on the transaction type
  var description = document.getElementById(
    transactionType.toLowerCase() + "Description"
  ).value;
  var amount = document.getElementById(
    transactionType.toLowerCase() + "Amount"
  ).value;
  var date = document.getElementById(
    transactionType.toLowerCase() + "Date"
  ).value;

  // You can perform further validation or processing here

  // Display the values (you can modify this part based on your needs)
  alert(
    transactionType +
      " added:\nDescription: " +
      description +
      "\nAmount: " +
      amount +
      "\nDate: " +
      date
  );

  // You can send the values to your backend or perform other actions as needed
}

// Function to show the selected form and hide others
function showForm(formId) {
  var forms = document.getElementsByClassName("form-container");
  for (var i = 0; i < forms.length; i++) {
    forms[i].style.display = forms[i].id === formId ? "block" : "none";
  }
}
