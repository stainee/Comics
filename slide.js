const banner = document.querySelector('.banner');
const slides = document.querySelectorAll('.banner li');

const prev = document.querySelector('.pre_btn');
const next = document.querySelector('.next_btn');

const banner_weight = 840;
const banner_height = 200;

let index = 0;

console.log(banner_height, banner_weight);


/*버튼을 누를때마다 인덱스를 증가 및 감소 시킬수 있도록 */
next.addEventListener('click', function(){
    index = index+1;
    console.log(index);
    
    
});

prev.addEventListener('click', function(){
    index = index -1;
    console.log(index);
    
});

/*
1. 일정 시간이 지나가면(혹은 버튼을 누르면) li를 움직인다.
2. 만약 끝까지 움직였으면 처음 li로 되돌아온다.
*/