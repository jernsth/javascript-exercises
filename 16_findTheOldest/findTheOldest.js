const findTheOldest = function(array) {
    // current year
    let current=2025;

    // map the input array to age instead of years
    let mappedToAge = array.map(item => ({
        name: item.name,
        age: item.yearOfDeath ? (item.yearOfDeath - item.yearOfBirth) : (current - item.yearOfBirth)
    }));

    // find the maximum Age
    let maxItem = mappedToAge.reduce( (max, item) => {
        return item.age > max.age ? item : max;
    });
    return maxItem;
};

// Do not edit below this line
module.exports = findTheOldest;
