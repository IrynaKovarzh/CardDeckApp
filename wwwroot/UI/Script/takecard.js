var state = 1;
function takecard(form) {
    if (state) {
      form.getElementsByClassName('back')[0].style.transform = 'rotate3d(0,1,0, 180deg)';   
      form.getElementsByClassName('front')[0].style.transform = 'rotate3d(0,1,0, 0deg)';
        state = 0;
    } else {
        //the top card
        //to move
      form.getElementsByClassName('card')[0].style.transform = 'translate(400px,-400px)';

      //to scale
       form.getElementsByClassName('card')[0].style.transform = 'scale(0.4,0.4)';

      /* 
      //to flip the next one, in case it is exist  
      form.getElementsByClassName('front')[0].style.transform = 'rotate3d(0,1,0, 180deg)';
      form.getElementsByClassName('back')[0].style.transform = 'rotate3d(0,1,0, 0deg)';   
     */
        state = 1;
    }        
}