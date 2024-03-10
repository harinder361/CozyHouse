const content = document.querySelector('.friend__container');
const pageNum = document.querySelectorAll('.friend__pagination-link')

let activePage = document.querySelector('.friend__pagination-link--active')

for(let page of pageNum){
    page.addEventListener('click', (event) => {
        const thisPage = page.innerText
        const pageContent = document.querySelector(`#page-${thisPage}`)
        const activeContent = document.querySelector(`#page-${activePage.innerText}`)
        activeContent.classList.add('hide')


        activePage.classList.remove('friend__pagination-link--active')
        page.classList.add('friend__pagination-link--active')
        activePage = page

        
        pageContent.classList.remove('hide')
    })
}