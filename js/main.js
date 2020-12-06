$(document).ready( function() {

  var hash = window.location.hash;
  var city = "dc";
  var selectCity = document.getElementById("selectCity");
  var budgetStr = document.getElementById("cityPdBudget");
  var budget = {
    dc: 545000000,
    nyc: 6000000000
  }
  var newBudgetForm = document.getElementById("newBudgetForm");
  var remainingBudgetStr = document.getElementById("remainingBudget");
  var addLineItemBtn = document.getElementById("addRow");
  var newBudgetItems = document.getElementsByClassName("newBudgetFormAmt");
  var usedBudget = 0;

  if (hash.length > 0) {
    city = hash.substring(1);
    if (budget[city] == undefined) {
      city = "dc";
    }
  }
  var playableBudget = budget[city];
  var remainingBudget = playableBudget;
  selectCity.value = city;
  budgetStr.textContent = playableBudget;
  remainingBudgetStr.textContent = remainingBudget;

  function calculateBudget() {
    city = selectCity.value;
    playableBudget = budget[city];
    budgetStr.textContent = playableBudget;
    newBudgetItems = document.getElementsByClassName("newBudgetFormAmt");
    usedBudget = 0;
    for (var i = 0; i < newBudgetItems.length; i++) { 
      usedBudget = usedBudget + Number(newBudgetItems[i].value);
    }
    remainingBudget = playableBudget - usedBudget;
    remainingBudgetStr.textContent = remainingBudget;
  }

  selectCity.addEventListener('change', function() {
    calculateBudget();
  });

  newBudgetForm.addEventListener('input', function () {
    calculateBudget();
  });

  var lineItemHTML = "<div class='form-row'><div class='col-7'><input type='text' class='form-control' placeholder='Budget idea'></div><div class='col'><div class='input-group'><div class='input-group-prepend'><div class='input-group-text'>$</div></div><input type='number' step='1000000' class='form-control newBudgetFormAmt' placeholder='Amount'></div></div></div>"

  addLineItemBtn.addEventListener('click', function() {
    childElement = document.createElement('div');
    appendChildElement = newBudgetForm.appendChild(childElement)
    appendChildElement.innerHTML = lineItemHTML;
  });

});

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});
  