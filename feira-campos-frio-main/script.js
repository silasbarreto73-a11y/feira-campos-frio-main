document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector(".search-btn");
  const searchForm = document.querySelector(".search-toggle");
  const searchInput = document.querySelector(".search-input");

  // Abre ou fecha o campo de busca ao clicar na lupa 
  searchBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Evita conflito com clique fora
    searchForm.classList.taggle("active");
    if (searchForm.classList.contains("active")) {
      searchInput.focus();
    }
  });

  // Fecha o campo de busca se clicar fora 
  document.addEventListener("click", function (e) {
    if (!searchForm.contains(e.target)) {
      searchForm.classList.remove("active");
    }
  });

  // Função para processar a busca
  function processSearch() {
    const query = searchInput.value.trim();
    if (query.length > 0) {
      //Redireciona para página de resultados
      window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    } else {
      alert("Digita algo para buscar.");
    }
  }

  // Executa busca ao pressionar Enter
  searchInput.addEventListener("keypress", function (e) {
    if (e.key ==="Enter") {
      e.preventDefault();
      processSearch();
    }
  });

  // Executa busca ao dar duplo clique na lupa 
  searchBtn.addEventListener("dblclick", function () {
    processSearch();
  });

  // Exemplo: ação ao clicar em "Ver Publicações"
 const verBtn = document.querySelector('.btn-outline-light:nth-of-type(1)');
 if (verBtn) {
  verBtn.addEventListener("click", function () {
    window.location.href = "publicacoes.html";
  });
 }

 // Exemplo: ação ao clicar em "Enviar Publicação"
 const enviarBtn = document.querySelector('.btn-outline-light:nth-of-type(2)');
 if (enviarBtn) {
  enviarBtn.addEventListener("click", function () {
    window.location.href - "enviar.html";
  });
 }
});