class Color {
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    setRandom() {
        this.red = Math.floor((Math.random() * 256) + 1);
        this.green = Math.floor((Math.random() * 256) + 1);
        this.blue = Math.floor((Math.random() * 256) + 1);
    }

    showOuputRGB() {
        boxOutput.innerHTML = `rgb(${this.red}, ${this.green}, ${this.blue});`;
    }

    showOuputColor() {
        boxColor.style.backgroundColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }

    copyText() {
        navigator.clipboard.writeText(boxOutput.textContent);
    }
}

const buttonGenerate = document.querySelector('#generate');
const buttonCopy = document.querySelector('#copy');
const boxColor = document.querySelector('#box-color');
const boxOutput = document.querySelector('#output');

const color = new Color(0, 0, 0);

color.setRandom();
color.showOuputColor();
color.showOuputRGB();

buttonGenerate.addEventListener('click', function() {
    color.setRandom();
    color.showOuputColor();
    color.showOuputRGB();
});

buttonCopy.addEventListener('click', function() {
    color.copyText();
});



