//lol

const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let location = document.getElementById('location').value
    fetch(`/weather?address=${location}`).then((response) => {
        if (!response) {
            console.log('error')
        } else {
            response.json().then((data) => {
                document.querySelector('p').innerHTML = 'okay this should be enough to get used to the workflow' + JSON.stringify(data)
            })
        }

    })
})

const button = document.querySelector('button')