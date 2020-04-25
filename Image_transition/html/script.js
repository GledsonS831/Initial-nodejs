let time = 1000;

index = 0;

images = document.querySelectorAll("#slide img");

max = images.length;

function next(){
    images[index].classList.remove("selected");

    index++;

    if(index >= max) index = 0;
    
    images[index].classList.add("selected");
    
    

}

function start(){
    setInterval(() =>{
        next()       
    }, time);
}

window.addEventListener("load", start);