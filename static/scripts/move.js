console.log('scripts start');

let letsMove = (e) => {
    let pro = document.getElementById('pro');
    let resumeContent = document.querySelector('.resume-title');

    let pX =e.pageX - pro.offsetLeft,
    pY = e.pageY - pro.offsetTop;
    pro.setAttribute('style','position:absolute;left:'+pX/10+'px;top:'+(100+pY/10)+'px;');

    // let top = 0;
    // if(resumeContent.getAttribute('style') !== 'undefined'){
    //     let timer = setInterval(()=>{
    //         top += 24;
    //         if(top => 100) {
    //             clearInterval(timer);
    //         }
    //         resumeContent.setAttribute('style', 'margin-top:'+ top +'px');
    //         resumeContent.setAttribute('data-top', top);
    //     },1000);
    // }

}

window.onload = () => {
    let pro = document.getElementById('pro');
    window.addEventListener('mousemove',letsMove, false);
    console.log('window loaded');
}
