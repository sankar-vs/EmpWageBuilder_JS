//UC 1 IF ELSE Condition
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT) {
        console.log("UC1:- Employee is Absent");
    } else {
        console.log("UC1:- Employee is Present");
    }
}

//UC 2 Switch Case
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const EMP_RATE_PER_HR = 20;
{
    let empHrs  = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_FULL_TIME:
            empHrs = 8;
            break;
        case IS_PART_TIME:
            empHrs = 4;
            break;
        default:
            empHrs = 0;
            break;    
    }
    let  empWage = EMP_RATE_PER_HR * empHrs;
    console.log("UC2:- Employee Wage: " + empWage + " WorkingHours: " + empHrs);
}

//UC 3 Functions
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_FULL_TIME:
            return 8;
        case IS_PART_TIME:
            return 4;
        default:
            return 0;    
    }
}
{
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empWage = EMP_RATE_PER_HR * getWorkingHours(empCheck);
    console.log("UC3:- Employee Wage: " + empWage  + " WorkingHours: " + getWorkingHours(empCheck));
}

//UC4 Repitive Statements
{
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    for (let day = 0; day < NUM_OF_WORKING_DAYS ; day++) {
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck); 
    }
    let empWage = EMP_RATE_PER_HR * totalEmpHrs;
    console.log("UC4:- Employee Wage: " + empWage  + " TotalHours: " + totalEmpHrs);
}