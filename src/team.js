const teamList = document.getElementById('#team__list');
const buttons = document.querySelectorAll('.team__subtitle');
const teamWrap = document.querySelectorAll('.team__wrapper');


for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.addEventListener('click', ev => {
        ev.preventDefault();
        if (ev.target.nextElementSibling.classList.contains("team__wrapper--active")) {
            ev.target.nextElementSibling.classList.remove("team__wrapper--active");
        } else {
            ev.target.nextElementSibling.classList.add("team__wrapper--active");
        }

        for (let i = 0; i < buttons.length; i++) {
            const e = buttons[i];

            if (e !== element) {
                const contentToHide = e.nextElementSibling;
                //contentToHide.style.maxHeight = "0";                
                //contentToHide.style.overflow = "hidden";
                contentToHide.classList.remove("team__wrapper--active");
            }

        }

    });
}