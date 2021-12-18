let calc = function() {
  const bill = Number(document.getElementById('bill').value);
  const  split = Number(document.getElementById('split').value);
  const  tip = bill * 10;
  const  totalBill = bill + tip;
  const  splitPerPerson = totalBill / split;

  document.getElementById("tip").innerHTML = "$" + Number(tip).toFixed(2);
  document.getElementById("total").innerHTML = "$" + Number(totalBill).toFixed(2);
  document.getElementById("splitTotal").innerHTML = "$" + Number(splitPerPerson).toFixed(2);
}
