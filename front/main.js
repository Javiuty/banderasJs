import flags from './data/flags.json'

// DOM
const $helpModal = document.querySelector('#help-modal')
const $helpBtn = document.querySelector('#help-btn')
const $closeBtn = document.querySelector('#close-btn')

// Event Listeners
$helpBtn.addEventListener('click', () => {
  $helpModal.showModal()
})

$closeBtn.addEventListener('click', () => {
  $helpModal.close()
})

/* 
const img = document.createElement('img')
const p = document.createElement('p')
const btn = document.createElement('button')

btn.textContent = 'Desvelar'

const randomNumber = Math.floor(Math.random() * flags.length)

img.src = flags.at(randomNumber).imgs
p.textContent = flags.at(randomNumber).name
p.classList.add('hidden', 'title')

document.querySelector('body').appendChild(img)
document.querySelector('body').appendChild(p)
document.querySelector('body').appendChild(btn)


btn.addEventListener('click', () => {
  p.classList.remove('hidden')
}) */
