let str = 'Rabindra Nath Tagore';

function abb(str) {
    
    let parts = str.split(' ');

    // Initialize an empty string for the abbreviation
    let abbreviation = '';

    for (let i = 0; i < parts.length - 1; i++) {
        // Get the first character of the current part and add it to the abbreviation
        abbreviation += parts[i].charAt(0).toUpperCase() + '. ';
    }

    // Adding the last part of the string
    abbreviation += parts[parts.length - 1];
    return abbreviation ;
}

console.log(abb(str));