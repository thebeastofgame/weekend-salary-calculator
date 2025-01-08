const employeeForm = document.querySelector('#employeeForm');
const employeeTable = document.querySelector('#employeeTable');
const totalMonthlyElement = document.querySelector('#totalMonthly')
const footer = document.querySelector('#footer');

let totalMonthlyCost = 0;

employeeForm.addEventListener('submit', (e)=>{
    e.preventDefault()
const firstName = document.querySelector('#firstName').value
const lastName = document.querySelector('#lastName').value;
const idNumber = document.querySelector('#idNumber').value;
const jobTitle = document.querySelector('#jobTitle').value
const annualSalary = parseFloat(document.querySelector('#annualSalary').value)
if(isNaN(annualSalary) || annualSalary <= 0){
alert("Please enter a valid annual salary.")
return
}
const row = document.createElement('tr')
row.innerHTML = `
<td>${firstName}</td>
<td>${lastName}</td>
<td>${idNumber}</td>
<td>${jobTitle}</td>
<td>$${annualSalary.toFixed(2)}</td>
<td><button class = "delete-button">Delete</button></td>
`
employeeTable.appendChild(row)
const monthlySalary = annualSalary / 12
totalMonthlyCost += monthlySalary
updateMonthlyCost()
employeeForm.reset()
})

function updateMonthlyCost(){
    totalMonthlyElement.textContent = totalMonthlyCost.toFixed(2)

    if(totalMonthly > 20000){
        footer.classList.add('over-budget')
    }
    else{
        footer.classList.remove('over-budget')
    }
}

employeeTable.addEventListener('click', (e)=>{
if(e.target.classList.container('delete-button')){
    const row = e.target.closest('tr')
    const annualSalary = parseFloat(row.children[4].textContent.replace('$', ''))
    const monthlySalary = annualSalary / 12
}
totalMonthlyCost -= monthlySalary;
updateMonthlyCost()
row.remove();
})

