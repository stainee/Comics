const tabList = document.querySelectorAll('.tabview');

const tabButtons = document.querySelectorAll('.tab')

tabButtons.forEach(tab => {
    tab.addEventListener('click', (e)=>{
        /*현재 tab on 을 on으로 바꾸고 
        클릭한 tab을 tab on 으로 바꾼다. */
        /* 마찬가지로 tab view display 속성을 변환해준다 */

        /*tab*/
        tabButtons.forEach(btn => { btn.className = "tab"; });
        e.currentTarget.className = "tab on";

        /*tabview */
        const tabIdx = e.currentTarget.dataset.target;
        tabList.forEach(tabview => { tabview.style.display = "none"; });
        document.querySelector(tabIdx).style.display = "block";

    } )
    
})    
