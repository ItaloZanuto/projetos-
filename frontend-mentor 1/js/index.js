
  const redesSociais = document.querySelectorAll(".listagem .rede-social");

  redesSociais.forEach(rede => {
    rede.addEventListener('click', () => {
      redesSociais.forEach(r => r.classList.remove('ativa')); // Remove a classe ativa de todos
      rede.classList.add('ativa'); // Adiciona a classe ativa ao item clicado
    });
  });
