const formu = () => {
    const form = document.querySelector('.form')
    const result = document.querySelector('.result')
    const person = [];

    const saveForm = (evento) => {
        evento.preventDefault()

        const name = form.querySelector('.name')
        const lastName = form.querySelector('.lastName')
        const weight = form.querySelector('.weight')
        const heigth = form.querySelector('.height')

        person.push({
            name: name.value, 
            lastName: lastName.value, 
            weight: weight.value, 
            heigth: heigth.value
        })

        result.innerHTML += `<p>nome:${name.value}, sobrenome:${lastName.value}, peso:${weight.value}, altura:${heigth.value}}</p>`
    }
    form.addEventListener('submit', saveForm)
}
formu()