export const search = () => {
    try {
        const btns = document.querySelectorAll('.search__btn');
    const pointer = document.querySelector('.search__pointer');
    const form = document.querySelector('.search__form');
    const input = document.querySelector('.search__input');
    const wrapper = document.querySelector('.search__options');
    const inputBtns = document.querySelector('.search__input-btns');
    const resetInput = document.querySelector('.search__remove');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    input.addEventListener('input', (e) => {
        inputBtns.classList.remove('hide');
        if(!e.target.value) {
            inputBtns.classList.add('hide');
        }
    })

    resetInput.addEventListener('click', () => {
        input.value = '';
        inputBtns.classList.add('hide');
    })


    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            // console.log(btn.getBoundingClientRect().left);
            inputBtns.classList.remove('hide');
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
    } catch (error) {
        console.log(error)
    }
    
}