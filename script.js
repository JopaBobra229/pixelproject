let cv = document.querySelector('.smencv')
let cv2 = document.querySelector('.smencv2')
let bd = document.querySelector('body')
let nm = document.querySelector('.NM')

cv.addEventListener('click', function(){
    bd.style.backgroundColor = 'gray';
    nm.style.backgroundColor = ' rgba(76, 184, 184, 0.253)';

})

cv2.addEventListener('click', function(){
    bd.style.backgroundColor = 'dodgerblue';
    nm.style.backgroundColor = 'rgb(76, 184, 184)';
})
