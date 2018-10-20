const drumset = document.getElementById('drumset');
const sounds = document.getElementById('sounds');

drumset.addEventListener('click', playSound);
window.document.addEventListener('keypress', playSound);

function playSound(e) {
  let { id } = e.target;
  let { key } = e;
  let tgtSound;
  console.log(e.target);
  let tgtDiv;
  if (key) {
    tgtSound = [...sounds.children].find((e) => e.innerHTML.toLowerCase() == key.toLowerCase())
    tgtDiv = [...drumset.children].find((e) => e.innerHTML.toLowerCase() == key.toLowerCase())
  } else {
    tgtSound = [...sounds.children].find(((e) => e.id === `${id}sound`))
    tgtDiv = [...drumset.children].find((e) => e.id === id)
  }
  tgtSound.play();

  tgtDiv.classList.toggle('strike');
  setTimeout(() => {
    tgtDiv.classList.toggle('strike');
  }, 50)
}
