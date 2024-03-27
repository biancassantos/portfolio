import projects from './projects.js'

const cards = document.querySelector('.cards')
let cardHTML = '';

projects.forEach((project) => {
    cardHTML = `
        <div class="card-container">
            <a href="${project.imgLink}" target="_blank">
                <div class="card-img ${project.className}">
                    
                </div>
            </a>
            <div class="card-text">
                <h3>${project.name}</h3>
                <p><a href="${project.projectLink}" target="_blank">View project's info</a></p>
            </div>
        </div>
    `
    cards.innerHTML += cardHTML
    let bgClass = document.querySelector(`.${project.className}`)
    bgClass.style.backgroundImage = `url(${project.img})`
})