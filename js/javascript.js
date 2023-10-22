var pratos = [
    { id: 1, nome: "Bife com Batata", preco: 30.00 },
    { id: 2, nome: "Coxa de Frango Crocante", preco: 25.00 },
    { id: 3, nome: "Carne de Panela", preco: 22.00 },
    { id: 4, nome: "Farofa", preco: 10.00 },
    { id: 5, nome: "Salada", preco: 8.00 },
    { id: 6, nome: "Torresmo", preco: 12.00 },
];

var formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

function calc() {
    var cliente = document.getElementById("nomeCliente").value;
    var pedido = document.getElementById("pedido");
    var quantities = document.getElementsByName("quantity");
    var total = 0;

    pedido.innerHTML = "<br>Caro " + "<strong>" + cliente + "</strong>" + "<br><br><br>" +
        "Seguem os dados do seu pedido." + "<br><br>" +
        "O seu pedido é:" + "<br><br>";

    for (var input of quantities) {
        if (input.value > 0) {
            pedido.innerHTML += "<li>" +
                "Prato: " + pratos[input.id - 1].nome +
                " - Preço unitário: " + formatter.format(pratos[input.id - 1].preco) +
                " - Quantidade: " + input.value +
                " - Total: " + formatter.format(pratos[input.id - 1].preco * input.value) + "." +
                "</li>";

            total += pratos[input.id - 1].preco * input.value;
        }
    }

    pedido.innerHTML += "<br><br><strong style='font-size: larger;'>Preço final " + formatter.format(total) + "</strong>";
}

function validar() {
    var cliente = document.getElementById("nomeCliente").value;
    var email = document.getElementById("emailCliente").value;
    var telefone = document.getElementById("telefoneCliente").value;
    var pedido = document.getElementById("pedido");
    var quantities = document.getElementsByName("quantity");

    if (cliente == "" || email == "" || telefone == "") {
        return pedido.innerHTML = "<h4>Por favor, informe todos os seus dados primeiro</h4>";
    }

    for (var input of quantities) {
        if (input.value > 0) {
            return calc();
        }
    }

    pedido.innerHTML = "<h4>Por favor peça pelo menos um prato</h4>";
}