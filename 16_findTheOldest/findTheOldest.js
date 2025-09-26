const findTheOldest = function(array) {
    let current=2025;
    let mappedToAge = array.map(item => ({
        name: item.name,
        age: item.yearOfDeath ? (item.yearOfDeath - item.yearOfBirth) : (current - item.yearOfBirth)
    }));
    let maxItem = mappedToAge.reduce( (max, item) => {
        return item.age > max.age ? item : max;
    });
    return maxItem;
};

// Do not edit below this line
module.exports = findTheOldest;
