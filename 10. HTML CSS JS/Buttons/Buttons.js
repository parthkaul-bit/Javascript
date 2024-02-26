function toggle(selector) {
    turnOffPreviousButton();
    if(selector.classList.contains('is-toggle')){
        selector.classList.remove('is-toggle');
    }
    else{
        selector.classList.add('is-toggle');
    }
}

function turnOffPreviousButton(){
    // store previous button i.e class == istoggle 
    const previousButton = document.querySelector('.is-toggle'); 
    if(previousButton){
        // remove is toggle
        previousButton.classList.remove('is-toggle');
    }
}