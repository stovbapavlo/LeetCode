/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let time = 0;
    let kTickets = tickets[k];

    for(let i = 0; i < tickets.length; i++) {
        if(i <= k) time += Math.min(tickets[i], kTickets);
        else time += Math.min(tickets[i], kTickets - 1);
    }

    return time
};