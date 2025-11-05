document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede envio automático

    // Captura dos campos
    const nome = document.getElementById("nome").value.trim();
    const apelido = document.getElementById("apelido").value.trim();
    const produtos = document.getElementById("produtos").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const foto = document.getElementById("foto").files[0];
    const termos = document.getElementById("termos").checked;

    // Validação básica
    if (!nome || !produtos || !whatsapp || !termos) {
      alert("Por favor, preencha todos os campos obrigatórios e aceite os termos.");
      return;
    }

    // Validação do WhatsApp (formato simples)
    const regexTel = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    if (!regexTel.test(whatsapp)) {
      alert("Digite um número de WhatsApp válido. Ex: (81) 91234-5678");
      return;
    }

    // Simulação de envio
    alert("Cadastro realizado com sucesso!");

    // Exibe os dados no console (para testes)
    console.log("Nome:", nome);
    console.log("Apelido:", apelido);
    console.log("Produtos:", produtos);
    console.log("WhatsApp:", whatsapp);
    console.log("Foto:", foto ? foto.name : "Nenhuma");
  });
});