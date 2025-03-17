function swapCase(str) {
    return str.replace(/./g, char => 
        char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase()
    );
}
console.log(swapCase('Hello World'));