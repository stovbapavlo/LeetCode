/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < seats.length; i++) {
        sum += Math.abs(students[i] - seats[i]);
    }
    return sum;
};