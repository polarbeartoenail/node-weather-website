

const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let location = document.getElementById('location').value
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        if (!response) {
            console.log('error')
        } else {
            response.json().then((data) => {
                document.querySelector('p').innerHTML = 'yeaaaah' + JSON.stringify(data)
            })
        }

    })
})

const button = document.querySelector('button')