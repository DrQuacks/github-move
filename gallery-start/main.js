const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i<= 5; i++) {
    const newImage = document.createElement('img');
    let filename = 'images/pic'+i+'.jpg';
    newImage.setAttribute('src', filename);
    thumbBar.appendChild(newImage);
    newImage.onclick = function(){
        displayedImage.setAttribute('src',filename);
    }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
    let mode = btn.getAttribute('class');
    if (mode === 'dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else if (mode === 'light'){
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}
