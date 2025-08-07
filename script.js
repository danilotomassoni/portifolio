const sections = document.querySelector("main").querySelectorAll("section")
const nav = document.querySelector("nav")
const navLinks = document.querySelector("nav").querySelectorAll("a")
const hamburguer = document.querySelector(".hamburguer")

const observe = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            navLinks.forEach(link => {
                link.classList.remove("selected")
                if (link.getAttribute("href").replace("#", "") == entry.target.id) {
                    link.classList.add("selected")
                }
            })
        }
        else {
            entry.target.classList.remove("visible")
        }
    })
}, { threshold: .5 })

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburguer.classList.remove("active")
        nav.classList.remove("open")
    })
})


hamburguer.addEventListener("click", event => {
    event.preventDefault()
    hamburguer.classList.toggle("active")
    nav.classList.toggle("open")
})



sections.forEach(section => observe.observe(section))