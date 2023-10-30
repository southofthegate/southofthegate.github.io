const meButton = document.getElementById('mebut');
const projButton = document.getElementById('projbut');
const contButton = document.getElementById('contbut');
const pewcontainer = document.getElementById('pewcontainer');
const container = document.getElementById('container');
const intcontainer = document.getElementById('indtext-container');

meButton.addEventListener('click',()=>{

    setTimeout(function () {
        container.style.width = 70 + 'vw';
        intcontainer.style.opacity = 0;
        container.style.height = 80 + 'vw';
        
    }, 100);

    setTimeout(() => {
        window.location.href = 'me.html'; // Replace with the desired URL
    }, 1500); // 3000 milliseconds (3 seconds)

});

projButton.addEventListener('click',()=>{
        
    setTimeout(function () {
        
        
        intcontainer.style.opacity = 0;
    }, 10);

        setTimeout(function () {
            container.style.width = 0;
            container.style.height = 0;
            
            
            
        }, 100);

        setTimeout(() => {
            window.location.href = 'projects.html'; // Replace with the desired URL
        }, 1500); // 3000 milliseconds (3 seconds)
    
});

contButton.addEventListener('click',()=>{

    setTimeout(function () {
        container.style.width = 70 + 'vw';
        container.style.height = 40 + 'vw';
        intcontainer.style.opacity = 0;
        
    }, 100);

    setTimeout(() => {
        window.location.href = 'contact.html'; // Replace with the desired URL
    }, 1500); // 3000 milliseconds (3 seconds)

});