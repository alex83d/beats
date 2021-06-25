let overlayButton = document.querySelector('#hamburger');
        let overlayCloseButton = document.querySelector('#closebtn');
        let overlayBar = document.querySelector('#menu-bar');


        overlayButton.addEventListener('click', e => {
            e.preventDefault();
            overlayBar.classList.toggle('menu-bar_active');

        });

        overlayCloseButton.addEventListener('click', e => {
            e.preventDefault();
            overlayBar.classList.remove('menu-bar_active');

        });

        let overlayClickLink = document.querySelectorAll('#overlayList > li > a');
        for (let i = 0; i < overlayClickLink.length; i++) {
            overlayClickLink[i].addEventListener("click", function () {
                overlayBar.classList.remove('menu-bar_active');
            });
        }