// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0, 2)
}

const returnLastTwoDrivers = (arr) => {
    let len = arr.length
    let secLen = len - 2
    return arr.slice(secLen, len)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
    return function(fare) {
        return fare * int;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnDrivers) {
    return returnDrivers(drivers);
}