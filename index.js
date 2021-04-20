axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
     .then(({data})=> {console.log(data[0]); 
    const quotes= data[0];
    const myHtml= `<article> 
    <h3> ${quotes.character} </h3>
    <img src="${quotes.image}" />
    <p>${quotes.quote}</p>
    </article>`;
    

    const myArticle = document.querySelector("#Simpson");
       myArticle.innerHTML= myHtml;
    }  )
