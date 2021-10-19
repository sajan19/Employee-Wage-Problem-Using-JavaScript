const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const Wage_PER_HOUR = 20;
//Calculate Employee Wage using Function
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;   
        default:
            return 0;
    }    
}
// const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 2;
let empHrs = 0;
// let totalEmpHrs = 0;
// let totalWorkingDays = 0;
for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    let empCheck = Math.floor(Math.random()*10) % 3;
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * Wage_PER_HOUR;
console.log("Total Hrs: " + empHrs + " Emp Wage: "+ empWage);