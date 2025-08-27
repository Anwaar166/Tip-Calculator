let button = document.getElementById("btn");
let inputAmount = document.getElementById("amount");
let inputPeople = document.getElementById("InputPeople");
let select = document.querySelector("#selectTag");
let tipDisplay = document.getElementById("tipAmount");
let totalAmountDisplay = document.getElementById("totalAmount");
let printBox = document.querySelector(".printBox");
let button2 = document.getElementById("btn2");
let isCalculated=false;
function display(value) {
  let tipBox1 = document.getElementById("tipBox1");
  let tipBox2 = document.getElementById("tipBox2");
  tipBox1.style.display = value;
  tipBox2.style.display = value;
}
display("none");

function CalculateTip(percentage) {
  if (inputAmount.value == "") {
    alert("Please Enter some amount!!");
    return;
  }
  if (inputPeople.value == "") {
    alert("Plase Enter people's Amount!! ");
    return;
  }
  if (inputAmount.value == 0 || inputPeople.value == 0) {
    alert("Pleae Enter value greater than zero (0)");
    return;
  } else {
    let inputValue = parseInt(inputAmount.value);
    let people = parseInt(inputPeople.value);
    let percentValue = parseFloat(percentage) / 100;
    let tip = Math.round((parseInt(inputValue) * percentValue) / people);
    let totalAmount = tip * people;
    tipDisplay.textContent = tip;
    totalAmountDisplay.textContent = totalAmount;
    display("block");
    isCalculated=true;
    return tip;
  }
}

button.addEventListener("click", () => {
  try {
    let selected = select.value.toLowerCase();
    if (selected == "choice") {
      alert("Please select any option!!");
      return;
    } else if (selected == "outstanding") {
      CalculateTip(15);
    } else if (selected == "good") {
      CalculateTip(10);
    } else {
      CalculateTip(5);
    }
  } catch (error) {
    alert("Error Occured: " + error);
  }
});

function printDisplay(billAmount, tipOption, NoPeople, eachPay, totalpay) {
  printBox.innerHTML = ""; 
  printBox.style.display="block"
  let p1 = document.createElement("p");
  p1.innerHTML = `Your bill Amount: <b>${billAmount}</b>`;
  printBox.append(p1);

  let p2 = document.createElement("p");
  p2.innerHTML = `The tip option you selected: <b>${tipOption}</b>`;
  printBox.append(p2);

  let p3 = document.createElement("p");
  p3.innerHTML = `Number of people sharing the bill: <b>${NoPeople}</b>`;
  printBox.append(p3);

  let p4 = document.createElement("p");
  p4.innerHTML = `Tip amount Rs. <b>${eachPay}</b> each`;
  printBox.append(p4);

  let p5 = document.createElement("p");
  p5.innerHTML = `Total tip amount to pay: <b>${totalpay}</b>`;
  printBox.append(p5);
}

button2.addEventListener("click", () => {
      // After calculating tip, update print section
      if(inputAmount.value==""||select.selectedOptions[0].text=="---Choose an option---"||inputPeople.value=="",!isCalculated){
        alert("Plaese first calculate the Tip. Thanks!")
        return
      }
      else{
       printDisplay(
          inputAmount.value,
          select.options[select.selectedIndex].text,
          inputPeople.value,
          tipDisplay.textContent,
          totalAmountDisplay.textContent
        );
         window.print();

      }
});
