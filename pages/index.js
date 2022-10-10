
function getMyService(){
return fetch ("https://cdn.contentful.com/spaces/n2t6lq1d1w3y/environments/master/entries?access_token=weRVrxqwaJc7Y7QLhW1i7FHmwtUg8QPfUBJoTSIbycg&content_type=worck")
        
        .then((res) => {return res.json();
     })
        .then((data) => { return loadMyService(data);
    })
    }
    
    function loadMyService(data){
            const servicesArray = data.items
            const imgUrl = data.includes.Asset[0].fields.file.url
            
            var template = document.querySelector("#my-services__template");
            var container = document.querySelector(".my-services__services");
            
            const title = template.content.querySelector(".my-services__service-title");
            const description = template.content.querySelector(".my-services__service-description");
           
            const img = template.content.querySelector(".my-services__service-image");
            
            for (const s of servicesArray) {
            img.src = imgUrl
            title.textContent = s.fields.title
            description.textContent = s.fields.description
            
    
            const clone= document.importNode(template.content, true);
           container.appendChild(clone);
            }
        }              

function main() {    
    const header = document.querySelector(".main-header");
    const footer = document.querySelector(".main-footer");
    const contactSection = document.querySelector(".main-contact");
    headerComponent(header);
    footerComponent(footer);
    componentContact(contactSection);
    // validateForm();
    headerBurgerMenuFuncionality();
    // myServicesCreateElement();
    getMyService();
   
}

main()