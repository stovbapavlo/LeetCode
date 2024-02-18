/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    const roomCounter = new Array(n).fill(0)
    let availRooms = new Array(n).fill(-1);
    meetings.sort((a,b) =>  a[0]-b[0])

    meetings.map((meeting)=>{
        const [start,end] = meeting

        let earliestRoomIdx = 0;
        let earliestEndTime = Infinity

        let availRoomExists = false

        for (let i = 0; i<n; i++) {
            if (availRooms[i] <= start) {
                roomCounter[i]++
                availRooms[i] = end
                availRoomExists = true
                break
            }
            if (availRooms[i] < earliestEndTime) {
                earliestEndTime = availRooms[i]
                earliestRoomIdx = i;
            }
        }
        if (!availRoomExists) {
            roomCounter[earliestRoomIdx]++
            availRooms[earliestRoomIdx] += end-start
        }
    })

    return roomCounter.indexOf(Math.max(...roomCounter))
};