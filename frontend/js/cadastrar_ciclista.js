let resposta_cad_ciclista = document.getElementById('resposta_cad_ciclista')
let btn_cad = document.getElementById('btn_cad')

btn_cad.addEventListener('click', (e) => {
    e.preventDefault()

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let cpf = document.getElementById('cpf').value
    let endereco = document.getElementById('endereco').value
    let celular = document.getElementById('celular').value

    const valores = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
        endereco: endereco,
        celular: celular
    }

    fetch(`http://localhost:3000/ciclista`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => {
        return res.json()
    })
    .then(dados =>{
        resposta_cad_ciclista.innerHTML = ` `
        resposta_cad_ciclista.innerHTML += `${dados.message}`
    })
    .catch((err)=>{
        console.error(`Erro ao cadastrar o ciclista`,err)
        resposta_cad_ciclista.innerHTML += `Erro ao cadastrar o ciclista`
    })
})