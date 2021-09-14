const webPropose = () =>{
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');
    const innerContainer = document.querySelector('.inner-container');
    const imgOne = document.querySelector('.img-1');
    const leaves = document.querySelector('.leaves');
    const retry = document.querySelector('.retry');
    const retryBtn = document.querySelector('.retry-btn');

    yesBtn.addEventListener('click', () =>{
       innerContainer.classList.toggle('container-active');
       const mySound = new Audio('rs.mp3');
       mySound.play();
    });

    imgOne.addEventListener('click', () =>{
        leaves.classList.toggle('leaves-active');
     });

    noBtn.addEventListener('click', () =>{
        retry.classList.toggle('retry-active');
     });

    retryBtn.addEventListener('click', () =>{
        retry.classList.remove('retry-active');
     });
    
    

}

webPropose();