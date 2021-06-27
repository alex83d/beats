let teamList = document.getElementById('#team__list');
const buttons = document.querySelectorAll('.team__subtitle');
//const buttons2 = document.getElementsByClassName('team__subtitle');

for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    console.log(element)
    element.addEventListener('click', ev => {
        ev.preventDefault(); 
         //open
         const content = ev.target.nextElementSibling;
         console.log(content);
         //content.style.maxHeight = "100vh";
         //content.style.overflow = "visible";

        content.classList.add("team__wrapper--active");
        //close sibling
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
