const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
let alimentos = []
exibirAlimentos()

    function exibirAlimentos() {
        console.log(`
        1- Cadastrar alimento;
        2- Listar os cadastrados;
        3- Editar um alimento;
        4- Remover um alimento cadastrado.`)
        rl.question('Escolha uma opção: ', (opcao) => {
            switch(opcao){
                case "1":
                cadastrarAlimento()
                break

                case "2": 
                listarAlimentos()
                break

                case "3":
                editarUmAlimento()
                break

                case "4": 
                removerUmAlimetoCadastrado()
                break

                default:
                    console.log("Opcão inválida.")
                    exibirAlimentos()
                    break                
            }
            })
    }
    function cadastrarAlimento() {
        rl.question("Digite o nome do alimento:" , (nome) => {
            rl.question("Digite o valor do alimento:" , (valor) => {
                alimentos.push({nome: nome, valor: parseFloat(valor)})
                console.log("Alimento cadastrado!")
                exibirAlimentos()
            })
        }) 
    }

    function listarAlimentos() {
        if (alimentos.length == 0){
        console.log("Ainda não há nenhum alimento cadastrado.")
        exibirAlimentos()
        }
        else {
        console.log(alimentos)
        exibirAlimentos()
        }
    }


    function editarUmAlimento() { 
        
        if (alimentos.length == 0) {
            console.log("Ainda não há alimentos cadastrados.")
            exibirAlimentos()
        }else {

            console.log('lista dos alimentos ja cadastrados')
        alimentos.forEach((alimentos, index) => {
            console.log(`${index +1}. ${alimentos.nome}`)
        })
            rl.question ("Digite o numero do alimento que deseja editar.", (numero) => {
                if (numero > 0 && numero <= alimentos.length) {
                    rl.question('Digite o nome:' , (nome) => {
                        rl.question('Digite o valor:', (valor) =>{
                            alimentos[numero - 1] = {
                                nome, 
                                valor
                            }
                            console.log("Alimento editado com sucesso!")
                            exibirAlimentos()
                        })
                    })
                }else {
                    console.log('Alimento inválido, tente novamente.')
                    exibirAlimentos()
                }
        })
    }
    }
    function removerUmAlimetoCadastrado() {
        if (alimentos.length == 0){
            console.log("Não há nenhum alimento cadastrado.")
            exibirAlimentos()
        }else {
            console.log('lista de alimentos')
            
            alimentos.forEach((alimentos, index) => {
                console.log(`${index + 1}. ${alimentos.nome}`)
            })
            rl.question("Digite o numero do alimento que deseja remover", (numero) =>{
                if (numero > 0 && numero <= alimentos.length) {
                    alimentos.splice(numero - 1, 1)
                    console.log('alimento removido com sucesso!')
                    exibirAlimentos()
                }else {
                    console.log("Nome inválido.")
                    exibirAlimentos()
                }
            })
        }
    }