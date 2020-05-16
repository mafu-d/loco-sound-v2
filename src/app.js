import SmallPrairie from '../public/data/4575.js'

// Set up controls
SmallPrairie.movements.forEach(sound => {
    const control = document.querySelector('.controls .control.is-hidden').cloneNode(true)
    control.id = sound.id
    control.querySelector('.button').innerText = sound.id
    control.classList.remove('is-hidden')
    if (!sound.loopable) {
        control.querySelector('.loop').remove()
    }
    document.querySelector('.movements').appendChild(control)
})

// Set up sound effects
SmallPrairie.sounds.forEach(sound => {
    const control = document.querySelector('.controls .control.is-hidden').cloneNode(true)
    control.id = sound.id
    control.querySelector('.button').innerText = sound.id
    control.classList.remove('is-hidden')
    if (!sound.loopable) {
        control.querySelector('.loop').remove()
    }
    document.querySelector('.sounds').appendChild(control)
})

// Play sounds
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', event => {
        // Turn off all other buttons in this set
        button.closest('.field').querySelectorAll('.button').forEach(child => {
            // Show as not active
            child.classList.remove('is-primary')
            // TODO: Stop sound
        })
        // Activate this button
        button.classList.add('is-primary')
        // TODO: Start sound
    })
})
