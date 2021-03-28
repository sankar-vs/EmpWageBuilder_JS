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
{
    const IS_FULL_TIME = 1;
    const IS_PART_TIME = 2;
    const EMP_RATE_PER_HR = 20;
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
    console.log("UC2:- Employee Wage: " + empWage);
}

