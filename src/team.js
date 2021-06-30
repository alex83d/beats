const teamList = document.getElementById('#team__list');
const buttons = document.querySelectorAll('.team__subtitle');
const teamWrap = document.querySelectorAll('.team__wrapper');
const arrow = document.querySelectorAll('.team-arrow')


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
                contentToHide.classList.remove("team__wrapper--active");
            }

           

        }


    });
    //arrow up down
    element.addEventListener("click",function(a) {
        a.preventDefault();
        if (a.target.firstElementChild.classList.contains("team-arrow--down")) {
            a.target.firstElementChild.classList.remove("team-arrow--down");
        } else {
            a.target.firstElementChild.classList.add("team-arrow--down");
        }      


    });
}

