const button = document.querySelector('#button');
const div = document.querySelector('#canvas');

button.addEventListener('click', function () {    
    const newColor = newRandomColor()
    document.body.style.backgroundColor = newColor;
})

const newRandomColor = () =>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}

