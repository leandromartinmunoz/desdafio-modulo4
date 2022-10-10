
function getPortfolio(){
return fetch("https://cdn.contentful.com/spaces/n2t6lq1d1w3y/environments/master/entries?access_token=weRVrxqwaJc7Y7QLhW1i7FHmwtUg8QPfUBJoTSIbycg&content_type=servicios")
 
    
    .then((res) => {return res.json();
 })
    .then((data) => { return loadPortfolio(data);
})
}

function loadPortfolio(data){
        const portfolioArray = data.items
        const imgUrl = data.includes.Asset[0].fields.file.url
        
        var template = document.querySelector("#portfolio__template");
        var container = document.querySelector(".portfolio__content");
        
        const title = template.content.querySelector(".portfolio__job-title");
        const description = template.content.querySelector(".portfolio__job-description");
        const url = template.content.querySelector(".portfolio__job-link");
        const img = template.content.querySelector(".portfolio__job-image")
        
        for (const p of portfolioArray) {
        img.src = imgUrl
        title.textContent = p.fields.title
        description.textContent = p.fields.description
        url.textContent = p.fields.url

        const clone= document.importNode(template.content, true);
       container.appendChild(clone);
        }
    }              
    
    
function main() {
    const header = document.querySelector(".portfolio-header");
    const footer = document.querySelector(".portfolio-footer");

headerComponent(header);
footerComponent(footer);
headerBurgerMenuFuncionality();

getPortfolio();
}
                          
main();