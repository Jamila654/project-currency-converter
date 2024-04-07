"use strict";
function ageGroup(age) {
    if (age <= 12) {
        return "Child";
    }
    else if (age <= 18) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
console.log(ageGroup(10));
console.log(ageGroup(15));
console.log(ageGroup(54));
