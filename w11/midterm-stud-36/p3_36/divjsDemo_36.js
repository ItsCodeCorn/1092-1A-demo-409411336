function changeImage(index) {
  const player = document.querySelector('#player');
  console.log('player', player);
  switch (index) {
    case 1:
      player.innerHTML = `<img src="./images/TKU1.png" style="width:100%; height: auto" />`;
      break;
    case 2:
      player.innerHTML =
        '<img src="./images/TKU2.png" style="width:100%; height: auto" />';
      break;
    case 3:
      player.innerHTML = `<img src="./images/TKU3.png" style="width:100%; height: auto" />`;
      break;
    case 4:
      player.innerHTML = `<img src="./images/TKU4.png" style="width:100%; height: auto"/>`;
      break;
    case 5:
      player.innerHTML = `<img src="./images/TKU5.png" style="width:100%; height: auto"/>`;
      break;
  }
}

function changeColor(index) {
  switch (index) {
    case 1:
      p = document.querySelector('#menu1')
      p.style.backgroundColor = 'yellow'
      break;
    case 2:
      p = document.querySelector('#section')
      p.style.backgroundColor = 'azure'
      break
    case 3:
      p = document.querySelector('#menu2')
      p.style.backgroundColor = 'black'
      break
  }
}

function displayList (index) {
  const p = document.querySelector('#menu2 > #list')

  switch (index) {
    case 1:
      p.innerHTML = ``
      break
    case 2:
      p.innerHTML = `<ul>
      <li onclick="changeImage(1)">
        <a href="#">淡江大戲 1</a>
      </li>
      <li onclick="changeImage(2)">
        <a href="#">淡江大戲 2</a>
      </li>
      <li onclick="changeImage(3)">
        <a href="#">淡江大戲 3</a>
      </li>
      <li onclick="changeImage(4)">
        <a href="#">淡江大戲 4</a>
      </li>
      <li onclick="changeImage(5)">
        <a href="#">淡江大戲 5</a>
      </li>
      </ul>`
      break;
  }
}

function reset() {
  const p1 = document.querySelector('#menu1')
  const p2 = document.querySelector('#section')
  const p3 = document.querySelector('#menu2')

  p1.classList.remove('invisible')
  p1.style.width = '20%'
  p2.classList.remove('invisible')
  p2.style.width = '60%'
  p3.classList.remove('invisible')
  p3.style.width = '20%'
}

function hideMenu1() {
  reset()

  const p1 = document.querySelector('#menu1')
  const p2 = document.querySelector('#section')
  const p3 = document.querySelector('#menu2')

  p1.classList.add('invisible')
  p2.style.width = '80%'
  p3.style.width = '20%'
}

function hideMenu2() {
  reset()

  const p1 = document.querySelector('#menu1')
  const p2 = document.querySelector('#section')
  const p3 = document.querySelector('#menu2')

  p1.style.width = '20%'
  p2.style.width = '80%'
  p3.classList.add('invisible')
}

