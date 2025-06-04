function filterArticles(category, sectionName) {
    const sectionArticles = document.querySelectorAll(`.article[data-section="${sectionName}"]`);
    sectionArticles.forEach(article => {
        article.style.display = article.classList.contains(category) ? 'block' : 'none';
    });

    const buttons = document.querySelectorAll(`.buttons[data-section="${sectionName}"] button`);
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') === `filterArticles('${category}', '${sectionName}')`) {
            btn.classList.add('active');
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    filterArticles('categorie1', 'infra');
    filterArticles('categorie5', 'combi');
    filterArticles('categorie9', 'ship');

});


