import SmallPrairie from '../public/data/4575.js'

let players = []
let playerKeys = []

// Set up controls
SmallPrairie.forEach(sound => {
    const control = document.querySelector('.controls .control.is-hidden').cloneNode(true)
    control.id = sound.id
    control.querySelector('.button').innerText = sound.id
    control.classList.remove('is-hidden')
    if (!sound.loopable) {
        control.querySelector('.loop').remove()
    }
    players[sound.file] = new Audio(sound.file)
    playerKeys.push(sound.file)
    control.soundData = sound

    let set = document.getElementById(sound.set)
    if (!set) {
        set = document.querySelector('.field.is-hidden').cloneNode(true)
        set.classList.remove('is-hidden')
        set.id = sound.set
        document.querySelector('.controls').appendChild(set)
    }
    set.appendChild(control)
})
playerKeys = Array.from(new Set(playerKeys))

// // Set up sound effects
// SmallPrairie.sounds.forEach(sound => {
//     const control = document.querySelector('.controls .control.is-hidden').cloneNode(true)
//     control.id = sound.id
//     control.querySelector('.button').innerText = sound.id
//     control.classList.remove('is-hidden')
//     audios[sound.file] = new Audio(sound.file)
//     control.soundData = sound
//     if (!sound.loopable) {
//         control.querySelector('.loop').remove()
//     }
//     document.querySelector('.sounds').appendChild(control)
// })

// console.log(audios)

// Play sounds
document.querySelectorAll('.controls .button').forEach(button => {
    button.addEventListener('click', event => {
        console.log(button.innerText)
        if (button.innerText === 'loop') {
            button.classList.toggle('is-info')
            return
        }
        // Turn off all other buttons in this set
        button.closest('.field').querySelectorAll('.button').forEach(child => {
            // Show as not active
            child.classList.remove('is-primary', 'is-info')
            // TODO: Stop sound
            // audios[button.parentElement.soundData.file].stop()
            // button.closest('.control').player.pause()
        })
        // Activate this button
        button.classList.add('is-primary')
        // TODO: Start sound
        let soundData = button.closest('.control').soundData
        players[soundData.file].currentTime = soundData.startTime
        players[soundData.file].play()
        // audios[button.parentElement.soundData.file].currentTime = button.parentElement.soundData.startTime
        // audios[button.parentElement.soundData.file].play()
    })
})

// Listen for current time
setInterval(() => {
    let activeButton = document.querySelector('.controls .button.is-primary')
    if (activeButton) {
        let activeControl = activeButton.closest('.control')
        if (parseInt(players[activeControl.soundData.file].currentTime) === parseInt(activeControl.soundData.endTime)) {
            if (activeControl.querySelector('.loop.is-info')) {
                activeButton.click()
                activeControl.querySelector('.loop').classList.add('is-info')
                return
            }
            document.getElementById(activeControl.soundData.end).querySelector('.button').click()
        }
    }
}, 1000)

document.querySelector('.stop-all').addEventListener('click', () => {
    playerKeys.forEach(player => {
        players[player].pause()
    })
    document.querySelectorAll('.button.is-primary').forEach(button => button.classList.remove('is-primary'))
})