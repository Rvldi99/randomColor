class Color {
    constructor() {
        this.red = this.getRandom();
        this.green = this.getRandom();
        this.blue = this.getRandom();
    }

    getRandom() {
        return Math.floor((Math.random() * 256) + 1);
    }

    showOuputRGB() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }
}

const buttonGenerate = document.querySelector('#generate');
const buttonCopy = document.querySelector('#copy');
const boxColor = document.querySelector('#box-color');
const boxOutput = document.querySelector('#output');

const color = new Color();

boxColor.style.backgroundColor = color.showOuputRGB();
boxOutput.innerHTML = color.showOuputRGB() + ';';

buttonGenerate.addEventListener('click', function() {
    const color = new Color();

    boxColor.style.backgroundColor = color.showOuputRGB();
    boxOutput.innerHTML = color.showOuputRGB() + ';';
});

buttonCopy.addEventListener('click', function() {
    navigator.clipboard.writeText(boxOutput.textContent);
});



