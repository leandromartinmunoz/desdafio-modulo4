function getService(){
    
    return fetch ("https://cdn.contentful.com/spaces/n2t6lq1d1w3y/environments/master/entries?access_token=weRVrxqwaJc7Y7QLhW1i7FHmwtUg8QPfUBJoTSIbycg&content_type=services")
        
        .then((res) => {return res.json();
     })
        .then((data) => { return loadService(data);
    })
    }
    
    function loadService(data){
            const servicesArray = data.items
            const imgUrl = data.includes.Asset[0].fields.file.url
            
            var template = document.querySelector("#services__template");
            var container = document.querySelector(".services__container");
            
            const title = template.content.querySelector(".services__service-title");
            const description = template.content.querySelector(".services__service-description");
           
            const img = template.content.querySelector(".services__service-image");
            
            for (const s of servicesArray) {
            img.src = imgUrl
            title.textContent = s.fields.title
            description.textContent = s.fields.description
            
    
            const clone= document.importNode(template.content, true);
           container.appendChild(clone);
            }
        }              
        
        
        
    function main() {
        const header = document.querySelector(".services-header");
            const footer = document.querySelector(".services-footer");
            headerComponent(header);
            headerBurgerMenuFuncionality()
           footerComponent(footer);    

           getService();
   
    

    
    }
                              
    main();