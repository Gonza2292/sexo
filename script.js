const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')
const valentineImage = document.querySelector('#valentineImage');
const valentineImg = document.querySelector('#valentineImg');


let fontSize = 2
let imageIndex = 0;


let messages = [
  "Empecemos de nuevo ",
  ':v, mucha emociónn... vuelve a intentarlo.',
  'Huh? jaja 2 mucha coincidencia',
  'Ey ey ey pequeña no digas toilet ... No digas eso ... Eres perfecta',
  'Di que síí di que síí. ¿Una más?',
  "Trastes ... pero no me voy sin el sí ni sin ti",
  'Mira muñeca, a mi no se me este resistiendo',
  'Jajaja No? Hazlo por Bebote!!',
  'Piensalo bien, sé conciente varon',
  'Altoq :v',
  'No me deje escuchando este música soloo',
]

let sound = new Audio('./assets/ladyfingers.mp3');
sound.play()
playBtn.addEventListener('click', ()=>{
  sound.play();
})
pauseBtn.addEventListener('click', ()=>{
  sound.pause();
})



buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .15
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  valentineImage.innerHTML = '';
  imageIndex = (imageIndex + 1) % 13;
  buttonNo.textContent = messages[imageIndex]
  if(imageIndex==2 || imageIndex==4 || imageIndex==7){
    valentineImage.innerHTML = `<video width="250" height="240" autoplay loop muted><source src="./assets/comoqueno/imagen${imageIndex}.mp4" type="video/mp4"></video>`;
  }
  else if(imageIndex==0){
    valentineImage.innerHTML = `<video width="180"  autoplay loop muted><source src="./assets/comoqueno/imagen${imageIndex}.mp4" type="video/mp4"></video>`;
  }
  else{
    valentineImage.innerHTML = `<img id="valentineImg" src="./assets/comoqueno/imagen${imageIndex}.jpg" width="250" style="margin:4px" alt="Dino Love" style="display: block;">`;
  }
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})