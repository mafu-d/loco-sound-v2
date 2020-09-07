import SmallPrairie from './4575/banks.js'
import Environment from './env/banks.js'

// let players = []
// let playerKeys = []
let sets = [
  {
    id: 'env',
    name: 'Environment',
    banks: Environment,
  },
  {
    id: '45xx',
    name: '45xx Small Prairie',
    banks: SmallPrairie,
  }
]

const tabs = document.querySelector('.tabs')
const container = document.querySelector('.container')

// Create a tab for each set
sets.forEach(set => {
  const setElement = document.querySelector('.templates .set').cloneNode(true)
  setElement.id = set.id
  setElement.querySelector('h2').innerText = set.name
  container.appendChild(setElement)
  const setTab = document.querySelector('.templates .tab').cloneNode(true)
  setTab.querySelector('a').innerText = set.id
  setTab.querySelector('a').dataset.target = set.id
  tabs.querySelector('ul').appendChild(setTab)

  // Create a field for each sound bank
  set.banks.forEach(bank => {
    const bankElement = document.querySelector('.templates .bank').cloneNode(true)
    bankElement.id = bank.id
    bankElement.player = new Audio(bank.file)
    setElement.appendChild(bankElement)

    // Show/hide speed control
    if (!bank.adjustSpeed) {
      bankElement.querySelector('.speed').closest('div').remove()
    }

    // Create a button for each sound
    bank.sounds.forEach(sound => {
      const soundElement = document.querySelector('.templates .sound').cloneNode(true)
      soundElement.id = sound.id
      soundElement.dataset.startTime = sound.startTime
      soundElement.dataset.endTime = sound.endTime
      if (sound.next) {
        soundElement.dataset.next = sound.next
      }
      soundElement.querySelector('.button').innerText = sound.name
      if (!sound.loopable) {
        soundElement.querySelector('.loop').remove()
      }
      bankElement.querySelector('.is-grouped').appendChild(soundElement)
    })
  })
})

// Activate tabs
tabs.querySelectorAll('a').forEach(tab => {
  tab.addEventListener('click', event => {
    event.preventDefault()
    tabs.querySelector('.is-active').classList.remove('is-active')
    container.querySelectorAll('.set').forEach(panel => panel.classList.add('is-hidden'))
    tab.closest('li').classList.add('is-active')
    document.getElementById(tab.dataset.target).classList.remove('is-hidden')
  })
})

// Play sounds
document.querySelectorAll('.bank .sound .button:first-child').forEach(button => {
  const bank = button.closest('.bank')
  const sound = button.closest('.sound')
  const buttons = bank.querySelectorAll('.button')
  button.addEventListener('click', () => {
    // Turn off other buttons in this bank
    buttons.forEach(otherButton => otherButton.classList.remove('is-primary', 'is-info'))
    // Turn on this button
    button.classList.add('is-primary')
    console.log(sound.id)
    // Play the sound
    bank.player.currentTime = sound.dataset.startTime
    bank.player.play()
  })
})

// Toggle loops
document.querySelectorAll('.bank .sound .loop').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('is-info')
  })
})

// Stop sounds
document.querySelectorAll('.set .stop').forEach(stopButton => {
  stopButton.addEventListener('click', () => {
    stopButton.closest('.set').querySelectorAll('.bank').forEach(bank => {
      bank.player.pause()
      bank.querySelectorAll('.button').forEach(button => button.classList.remove('is-primary', 'is-info'))
    })
  })
})
document.querySelector('.stop-all').addEventListener('click', () => {
  document.querySelectorAll('.set .stop').forEach(stopButton => stopButton.click())
})

// Listen for next sounds
setInterval(() => {
  document.querySelectorAll('.button.is-primary').forEach(button => {
    let player = button.closest('.bank').player
    let sound = button.closest('.sound')
    if (parseFloat(player.currentTime) >= parseFloat(sound.dataset.endTime)) {
      button.classList.remove('is-primary')
      if (sound.querySelector('.loop.is-info')) {
        button.click()
        sound.querySelector('.loop').classList.add('is-info')
        return
      }
      if (typeof sound.dataset.next !== 'undefined') {
        document.getElementById(sound.dataset.next).querySelector('.button:first-child').click()
        return
      }
      player.pause()
    }
  })
}, 100)

// Listen for volume changes
document.querySelectorAll('.volume').forEach(input => {
  input.addEventListener('change', event => {
    input.closest('.bank').player.volume = input.value
  })
})

// Listen for speed changes
document.querySelectorAll('.speed').forEach(input => {
  input.addEventListener('change', event => {
    input.closest('.bank').player.playbackRate = input.value
  })
})
