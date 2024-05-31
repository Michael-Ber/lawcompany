export const search = () => {
    const btns = document.querySelectorAll('.search__btn');
    const pointer = document.querySelector('.search__pointer');
    const form = document.querySelector('.search__form');
    const input = document.querySelector('.search__input');
    const wrapper = document.querySelector('.search__options');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            // console.log(btn.getBoundingClientRect().left);
            resetActiveBtn();
            btn.parentNode.classList.add('search__item--active');
            pointer.style.left = btn.getBoundingClientRect().left - wrapper.getBoundingClientRect().left - pointer.getBoundingClientRect().width + btn.getBoundingClientRect().width / 2 + 10 + 'px';
            input.value = btn.textContent;
        })
    })
    function resetActiveBtn() {
        btns.forEach(btn => {
            btn.parentNode.classList.remove('search__item--active');
        })
    }

    // window.addEventListener('resize', () => {
    //     console.log(wrapper.getBoundingClientRect().left);
    // })

    // console.log(pointer.getBoundingClientRect().left)
}