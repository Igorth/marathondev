// configurando o servidor
const express = require("express")
const server = express()

// configurar o servidor para apresentar arquivos estaticos
server.use(express.static('public'))

// habilitar body do formulario
server.use(express.urlencoded({ extended: true}))

// configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,
})

// Lista de doadores: Array
const donors = [
    {
        name: "Igor Dias",
        blood: "AB+"
    },
    {
        name: "Laisa Dias",
        blood: "A+"
    },
    {
        name: "Igor Dias",
        blood: "B+"
    },
    {
        name: "Igor Dias",
        blood: "O+"
    }
]


//Configurar a apresentação da página
server.get("/", function(req, res){
    return res.render("index.html", { donors })
})

// registrar e guardar dados
server.post("/", function(req, res){
    // pegar dados do formulário
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood


    // colocar valores dentro do array
    donors.push({
        name: name,
        blood: blood,
    })

    return res.redirect("/")

})

// Ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function(){
    console.log("Start server.")
})