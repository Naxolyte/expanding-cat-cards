//puting all pannels in a NodeList
const panels = document.querySelectorAll('.panel');

//adding an 'active' class
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active');
  });
});

//remove all 'active' classes fuction
function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
