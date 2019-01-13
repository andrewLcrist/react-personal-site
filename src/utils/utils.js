export const scrollListener = (backgroundProp, currentContainerProp, nextContainerProp, topHeight) => {
  let lastScrollTop = 0

  window.addEventListener("scroll", function(){
    const background = document.getElementById(backgroundProp);
    const currentContainer = document.getElementById(currentContainerProp);
    const nextContainer = document.getElementById(nextContainerProp)

    const aboutMeContainerDistanceToTop = currentContainer.getBoundingClientRect().top;
    const nextContainerDistanceToTop = nextContainer.getBoundingClientRect().top;
    const opacity = (1 - (nextContainerDistanceToTop / window.innerHeight))

    background.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`

    let st = window.pageYOffset || document.documentElement.scrollTop


    if (st > lastScrollTop && nextContainerDistanceToTop <= window.innerHeight){
      currentContainer.style.position = 'fixed'
      currentContainer.style.top = '0'
    } else if ( st < lastScrollTop && nextContainer.getBoundingClientRect().top >= window.innerHeight){
      currentContainer.style.position = 'absolute'
      currentContainer.style.top = topHeight
    }
    lastScrollTop = st <= 0 ? 0 : st
  })
}
