// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier
  }
}

function fareDoubler(amount) {
  return createFareMultiplier(2)(amount)
}

function fareTripler(amount) {
  return createFareMultiplier(3)(amount)
}

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers)
}
