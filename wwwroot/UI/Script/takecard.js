var state = 1;
function takecard(form) {
    if (state) {
      form.getElementsByClassName('back')[0].style.transform = 'rotate3d(0,1,0, 180deg)';   
      form.getElementsByClassName('front')[0].style.transform = 'rotate3d(0,1,0, 0deg)';
        state = 0;
    } else {
      form.getElementsByClassName('front')[0].style.transform = 'rotate3d(0,1,0, 180deg)';
      form.getElementsByClassName('back')[0].style.transform = 'rotate3d(0,1,0, 0deg)';   
        state = 1;
    }        
}