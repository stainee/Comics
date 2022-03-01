const banner = document.querySelector('.banner ul');
const slides = document.querySelectorAll('.banner li');

const prev = document.querySelector('.pre_btn');
const next = document.querySelector('.next_btn');

let index = 0;

function moveSlide(idx){
    banner.style.transition ='0.2s';
    banner.style.transform="translate3d(-"+840*index+"px, 0px, 0px)";
    /*transition 과 transform -> translate*/
    
}
/*버튼을 누를때마다 인덱스를 증가 및 감소 시킬수 있도록 */
next.addEventListener('click', function(){
    if(index<2) {
        index = index +1;
        moveSlide(index)
    }
    else { 
        index = 0;
        moveSlide(index);
    }

    console.log(index);
    
});

prev.addEventListener('click', function(){
    if(index>0) {
        index = index-1;
        moveSlide(index);
    }
    else { 
        index = 2;
        moveSlide(index);
    }
    
    console.log(index);
    
    
    
});

/*
1. 일정 시간이 지나가면(혹은 버튼을 누르면) ul를 움직인다.
2. 만약 끝까지 움직였으면 처음 ul로 되돌아온다.
*/