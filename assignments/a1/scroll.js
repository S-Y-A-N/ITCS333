function scroll(element) {  
  const node = document.getElementById(element);
  if (node !== null) {
    setTimeout(function () {
      const headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
      const nodeHeight = node.offsetTop;

      window.scrollTo({
        top: nodeHeight - headerHeight - 15,
        left: 0,
        behavior: "smooth",
      });

    }, 100);
  }
}

const pageLinks = document.querySelectorAll('nav a');
Array.from(pageLinks).forEach((link) => {
  let id = link.href.split('#')[1];
  link.addEventListener('click', (e) => {
    e.preventDefault()
    scroll(id);
  });
});