function scroll(element) {   
  const node = document.getElementById(element);
  const headerHeight = '150px'

  node.scrollIntoView({
    behavior: 'smooth'
  });

  const scrolledY = window.scrollY;

  if(scrolledY) {
    window.scroll(0, scrolledY - headerHeight);
  }
}

