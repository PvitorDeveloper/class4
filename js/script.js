const posts = [
    {
        title: "google",
        description: "Google LLC é uma empresa de tecnologia multinacional americana com foco em publicidade on-line, tecnologia de mecanismo de pesquisa, computação em nuvem, software de computador, computação quântica, comércio eletrônico, inteligência artificial e eletrônicos de consumo."
        
        
    },
    {
        title: "Opera",
       description: "O Opera é um navegador da Web multiplataforma desenvolvido pela empresa homônima Opera. O navegador é baseado no Chromium, mas se distingue de outros navegadores baseados no Chromium por meio de sua interface de usuário e outros recursos"
    },
    {
        title: "Microsoft Edge",
        description: "O  Microsoft Edge é um navegador da Web proprietário e multiplataforma criado pela Microsoft. Foi lançado pela primeira vez em 2015 como parte do Windows 10 e Xbox One e posteriormente portado para outras plataformas como um fork do projeto de código aberto Chromium do Google: Android e iOS, macOS, versões mais antigas do Windows e, mais recentemente, Linux"
    }
]

const wrapper = document.getElementById("post");

for (var i=0; i < posts.length; i++){
    const postData = posts[i];

    console.log(postData) // Testar funcionamento do for em percorrer array de objetos

    const article = document.createElement('article');
    article.classList.add('article');

    const h2 = document.createElement('h2');
    h2.classList.add('article-title');
    const h2Text = document.createTextNode(postData.title);
    h2.appendChild(h2Text);
    article.appendChild(h2);

    const p = document.createElement('p');
    p.classList.add('content');
    const pText = document.createTextNode(postData.description);
    p.appendChild(pText);
    article.appendChild(p);

    wrapper.appendChild(article)
}

