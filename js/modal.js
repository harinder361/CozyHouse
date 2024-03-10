const learnMoreButton = document.querySelectorAll('.pets__list-button')
const modalSections = document.querySelectorAll('.modal__section')

const buttonClose = document.querySelectorAll('.modal__button-close');


for(let button of learnMoreButton){
    button.addEventListener('click',(event) => {
        const dataModalNum = button.getAttribute('data-modal');
        for(let modalSection of modalSections){
            if(modalSection.getAttribute('data-modal') === dataModalNum){
                modalSection.classList.add('modal--show')
            }
        }
    })
}

for(let button of buttonClose){
    button.addEventListener('click', () => {
        for(let modalSection of modalSections){
            if(modalSection.classList.contains('modal--show')){
                modalSection.classList.remove('modal--show')
            }
        }
    })
}
