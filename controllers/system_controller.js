exports.home_page = (req, res) => {
    res.render('home', { title: "Webmoblistas | Anuncie seu veículo aqui!" });
}
exports.error_404 = (req, res) => {
    res.render('404', { title: "Oops... Não encontramos a sua requisição!" });
}