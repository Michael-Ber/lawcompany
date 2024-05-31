export const accordion = () => {
    try {
        const banner = document.querySelector('.banner');
        const bannerWrapper = document.querySelector('.banner__wrapper');
        const bannerTitle = document.querySelector('.banner-top__title');
        const showFull = document.querySelector('.banner-top__more');
        const closeFull = document.querySelector('.banner__close');
        const bannerDate = document.querySelector('.banner-top__date');

        if(!banner.classList.contains('banner--full')) {
            banner.style.maxHeight = bannerTitle.scrollHeight + 24 + 'px';
            closeFull.classList.add('hide');
        }

        showFull.addEventListener('click', showFullBanner)

        closeFull.addEventListener('click', hideFullBanner)

        function showFullBanner() {
            banner.classList.add('banner--full');
            closeFull.classList.remove('hide');
            bannerDate.classList.add('hide');
            showFull.classList.add('hide');
            banner.style.maxHeight = bannerWrapper.scrollHeight + 77 + 'px'; //77-padding for .banner
        }
        function hideFullBanner() {
            banner.classList.remove('banner--full');
            showFull.classList.remove('hide');
            bannerDate.classList.remove('hide');
            closeFull.classList.add('hide');
            banner.style.maxHeight = bannerTitle.scrollHeight + 24 + 'px';//24-padding for .banner
        }
        
    } catch (error) {
        console.log(error)
    }
}