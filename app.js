// array of 5 friends
var friends = ['Steve', 'Shaun', 'Ian', 'Koshin', 'Jenna'];

// array of 20 weapons
var weapons = [
    'knife',
    'gun',
    'bat',
    'chainsaw',
    'rope',
    'sword',
    'pen',
    'boom-a-rang',
    'mallet',
    'nail',
    'car',
    'stapler',
    'plastic bag',
    'poison',
    'teddy bear',
    'Kamehameha Wave',
    'laser beam',
    'hammer',
    'acid',
    'spike'
];

// array of 10 locations
var locations = [
    'copy room',
    'bedroom',
    'bathroom',
    'living room',
    'kitchen',
    'patio',
    'Disneyland',
    'ocean',
    'classroom',
    'library'
];

// function to alert accusation
function alertAccusation(num, friend, weapon, location) {
    return function() {
        alert(
            `Accusation ${num}: I accuse ${friend}, with the ${weapon} in the ${location}`
        );
    };
}

for (var i = 1; i <= 100; i++) {
    // create h3 with text 'Accusation i'
    var newH3 = document.createElement('h3');
    var h3Txt = document.createTextNode(`Accusation ${i}`);
    newH3.appendChild(h3Txt);

    // save numbers and accused friend, weapon, and location to store in function
    var number = i;
    var accusedFriend = friends[i % friends.length];
    var accusedWeapon = weapons[i % weapons.length];
    var accusedLocation = locations[i % locations.length];
    var clickFunc = alertAccusation(
        number,
        accusedFriend,
        accusedWeapon,
        accusedLocation
    );

    // add click listener to h3 element with saved friend, weapon, and location
    newH3.addEventListener('click', clickFunc);

    // add h3 to body
    document.body.appendChild(newH3);
}
