
async function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformado = document.getElementById("senha").value;

    const resposta = await fetch("./bt.json");
    const usuarios = await resposta.json();

    for (let i = 0; i < usuarios.length; i++) {
        if (emailInformado === usuarios[i].email) {
            alert("E-mail informado corretamente");

            if (senhaInformado === usuarios[i].senha) {
                alert("Senha informada corretamente");
                window.location = "home.html";
            } else {
                alert("Senha informada incorretamente");
            }

            return;
        }
    }

    alert("E-mail informado incorretamente");
}
