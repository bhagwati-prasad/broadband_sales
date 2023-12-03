function setupCarousel(elem) {
    if(!elem) {
        return;
    }
    
    let items = document.querySelectorAll(elem);
    items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    });
}

setupCarousel(".logoTicker .carousel .carousel-item")
setupCarousel(".internetProviders .carousel .carousel-item")