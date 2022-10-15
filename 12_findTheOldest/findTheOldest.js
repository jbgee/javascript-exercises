const findTheOldest = function() {
    const people = arguments[0];
    return people.reduce((oldest,person) => {
        const personAge = getAge(person.yearOfBirth,person.yearOfDeath);
        const oldestAge = getAge(oldest.yearOfBirth,oldest.yearOfDeath);
        return personAge>oldestAge? person: oldest;
    },
    {
        yearOfBirth: (new Date()).getFullYear(),
        yearOfDeath: (new Date()).getFullYear()})
};

function getAge(birthYear,deathYear){
    if(!deathYear){
        deathYear = (new Date()).getFullYear();
    }
    return age = deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
