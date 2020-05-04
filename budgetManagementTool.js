var Cost;
var Income=0;
var Saving;
var Allocation=0;
var CurrentResidue;




function calculateCost() {
	 var itemName=document.querySelector("#itemId").value;
	 var cost= document.querySelector("#costId").value;

	 var table=document.getElementsByTagName('table')[0];
	 var newCostRow=table.insertRow(1);
	 var newCell1=newCostRow.insertCell(0);
	 var newCell2=newCostRow.insertCell(1);

	 newCell1.innerHTML= itemName;
	 newCell2.innerHTML= cost;

	 var myArray=[cost];

	 document.getElementById('itemId').value= '';
	 document.getElementById('costId').value= '';


	 for (var i = 0; i<myArray.length; i++) {
	 	console.log(`My Current item values are ${myArray.toString()}`);

	 	var calcTableCell=document.getElementById("costTable"), sumCostValue=0; minusCostValue=Income;
	 	console.log(`Initial Income is ${Income}`)
	 	console.log(`Initial minusCostValue is ${minusCostValue}`)

	 	for (var i = 1; i <calcTableCell.rows.length; i++) {
	 		sumCostValue=sumCostValue+ parseInt(calcTableCell.rows[i].cells[1].innerHTML);
            minusCostValue=minusCostValue- parseInt(calcTableCell.rows[i].cells[1].innerHTML);
	 	console.log(`Sum of cost is ${sumCostValue}`)	


	 	document.querySelector("#displayCostResultId").innerHTML= `Total Cost: ${sumCostValue}`;
	 	Cost = sumCostValue;
	 	 console.log(`Total cost is ${Cost}`)
	 	document.querySelector("#displayCurrentTotalResidueId").innerHTML=`Residue(Total Income-Total Cost): ${minusCostValue}`;
	 	CurrentResidue = minusCostValue;
	 	console.log(`CurrentResidue is ${CurrentResidue}`)
	 	 
	 	}}}





	 	function calculateIncome() {
	 var IncomeSource=document.querySelector("#incomeSourceId").value;
	 var salary= document.querySelector("#salaryId").value;

	 var table=document.getElementsByTagName('table')[1];
	 var newCostRow=table.insertRow(1);
	 var newCell1=newCostRow.insertCell(0);
	 var newCell2=newCostRow.insertCell(1);

	 newCell1.innerHTML= IncomeSource;
	 newCell2.innerHTML= salary;

	 var incomeArray=[salary];

	 document.getElementById('incomeSourceId').value= '';
	 document.getElementById('salaryId').value= '';


	 for (var i = 0; i<incomeArray.length; i++) {
	 	console.log(`My Current item values are ${incomeArray.toString()}`);

	 	var calcSalaryCell=document.getElementById("incomeTable"), sumSalaryValue=0; afterNewIncome=CurrentResidue;

	 	for (var i = 1; i <calcSalaryCell.rows.length; i++) {
	 		sumSalaryValue=sumSalaryValue+ parseInt(calcSalaryCell.rows[i].cells[1].innerHTML);
 

	 	document.querySelector("#displayIncomeResultId").innerHTML= `Total Income: ${sumSalaryValue}`;
	 	// document.querySelector("#displayCurrentTotalResidueId").innerHTML= `Residue is: ${minusCostValue}`;
	
	 	console.log(`Total is ${sumSalaryValue}`)
	 	 Income = sumSalaryValue;
	 	  console.log(`Total income is ${Income}`)
	 	}}}




	 	
// TOTAL ALLOCATION
	 	
function allocationSavings() {
	 var allocateOn=document.querySelector("#allocateOnId").value;
	 var allocateAmount= document.querySelector("#allocateAmountId").value;

	 var table=document.getElementsByTagName('table')[2];
	 var newAllocateRow=table.insertRow(1);
	 var allocateOnCell=newAllocateRow.insertCell(0);
	 var allocateamountCell=newAllocateRow.insertCell(1);

	 allocateOnCell.innerHTML= allocateOn;
	allocateamountCell.innerHTML= allocateAmount;

	 var allocateArray=[allocateAmount];

	 document.getElementById('allocateOnId').value= '';
	 document.getElementById('allocateAmountId').value= '';


	 for (var i = 0; i<allocateArray.length; i++) {
	 	console.log(`My Current item values are ${allocateArray.toString()}`);

	 	var calcAllocateCell=document.getElementById("allocateTable"), sumAllocateValue=0; minusAllocationValue=CurrentResidue;
	 	console.log(`Saving is ${Saving}`)
	 	console.log(`Initial  minusAllocationValue is ${minusAllocationValue}`)

	 	for (var i = 1; i <calcAllocateCell.rows.length; i++) {


	 		sumAllocateValue=sumAllocateValue+ parseInt(calcAllocateCell.rows[i].cells[1].innerHTML);
	 	
             minusAllocationValue= minusAllocationValue- parseInt(calcAllocateCell.rows[i].cells[1].innerHTML);
	


	 	document.querySelector("#displayAllocationResultId").innerHTML= `Total Allocated Amount: ${ sumAllocateValue}`;
	 
	 	console.log(`Minus Total is ${ minusAllocationValue}`)
	 	Final=  minusAllocationValue;
	 	Allocation=sumAllocateValue
	 	console.log(`Final total is ${minusAllocationValue}`)
	 	}}}

// ==========


// CALCULATE TOTAL SAVINGS 
	 	function CalculateSavings(){
	 		var savings= Income - Cost - Allocation;
	 		console.log(`Total savings is ${savings}`);
	 		document.querySelector('#displaySavings').innerHTML=`Calculated Saving: $${savings}.00`;
	 		Saving=savings;
	 	}
// =======









