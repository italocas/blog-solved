const apiKey = '076c1ea1120a4fbd83932799ea627b41';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const articles = data.articles;
        const articlesArea = document.querySelector('.articles-area');
        articlesArea.innerHTML = ''; // Limpa o conteúdo existente

        articles.forEach(article => {
            const articleCard = document.createElement('article');
            articleCard.classList.add('article-card');
            articleCard.innerHTML = `
                <div class="article-image">
                    <img src="${article.urlToImage}" alt="${article.title}">
                </div>
                <div class="article-content">
                    <a href="./artigo.html" onclick="saveArticle(${JSON.stringify(article).replace(/"/g, '&quot;')})">
                        <div class="article-topic">Notícias</div>
                        <div class="article-title">${article.title}</div>
                        <div class="article-summary">${article.description}</div>
                        <div class="article-author">${article.author || 'Autor desconhecido'}</div>
                        <div class="article-date">${new Date(article.publishedAt).toLocaleDateString()}</div>
                    </a>
                </div>
            `;
            articlesArea.appendChild(articleCard);
        });
    })
    .catch(error => console.error('Erro ao buscar dados da API:', error));

// Função para salvar o artigo no localStorage
function saveArticle(article) {
    localStorage.setItem('selectedArticle', JSON.stringify(article));
}