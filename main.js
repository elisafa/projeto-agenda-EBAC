const form = document.getElementById('form-contato')
const inputNome = document.getElementById('input-name')
const inputFone = document.getElementById('input-fone')
const aviso = document.getElementById("aviso")

let linhas = ""
const nomes = []
const telefones = []

function atualizarTabela() {
  const corpoTabela = document.querySelector('tbody')
  corpoTabela.innerHTML = linhas
  inputNome.focus()
}

function adicionarLinha() {
  
  if (telefones.includes(inputFone.value)) {
    aviso.innerHTML = `O número ${inputFone.value} já foi inserido. Tente outro!`
    aviso.setAttribute('class', 'avisocss')
    aviso.style.display = 'block'
    //alert(`O numero ${inputFone.value} já foi incluido`)
  } else {
    nomes.push(inputNome.value)
    telefones.push(inputFone.value)

    let linha = `<tr>`
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputFone.value}</td>`
    linha += `</tr>`
    linhas += linha
    aviso.style.display = 'none'
  }
  inputNome.value = ""
  inputFone.value = ""

}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  adicionarLinha()
  atualizarTabela()
})