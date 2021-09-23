// 3n+1 (collatz conjecture)
// Odd number ? 3n+1 : n/2
// Regardless of the number you start with => infinate loop 4 - 2 - 1

// 4 => 2 => 1 => 4 => 2 => 1 

// const collatzFunc = (n) => {
//     let stepsToOne = 0
//     while (n !== 1) {
//         n % 2 === 0 ? n = n / 2 : n = 3 * n + 1;
//         stepsToOne++
//     }
//     return stepsToOne
// }

let makeArt = () => {
    const tinyart = document.getElementById('tinyart')
    const context = tinyart.getContext("2d");

    for (let x = 0; x < 255; x++) {
        for ( let y = 0; y < 255; y++) {
            if ((x * y ) % 255) {
                context.fillRect(x*4, y*4, 4, 4);
                context.fillStyle = `rgb(${(x * y % 255)}, ${y}, 255)`
            };
        };
    };

};

makeArt




