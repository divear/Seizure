

setInterval(Seizure, 100);

function Seizure(){

    let letters = '0123456789ABCDEF';
    let RandomColor = '#';
    for (let i = 0; i < 6; i++) {
      
      RandomColor += letters[Math.floor(Math.random() * 16)];
    }
    
    document.getElementById("All").style.backgroundColor = RandomColor;
 
}