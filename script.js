document.addEventListener("DOMContentLoaded", function () {
    var mainHeading = document.getElementById('main-heading');
    mainHeading.addEventListener('mouseover', toggleArticle);
});

function toggleArticle() {
    // Obtém todos os elementos de artigo
    var articles = document.querySelectorAll('article');

    // Adiciona a classe 'show' ao primeiro artigo
    articles[0].classList.toggle('show');

    // Remove a classe 'show' dos demais artigos
    for (var i = 1; i < articles.length; i++) {
        articles[i].classList.remove('show');
    }
}
