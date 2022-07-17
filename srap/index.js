const puppeteer = require("puppeteer"); 
const fs = require ('fs'); 

(async () =>{
    //Initialisation
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://www.portaljob-madagascar.com/emploi/liste");

    //Evaluate the page
    const grabData = await page.evaluate(() =>{
         const annonce = document.querySelectorAll(".contenu_annonce");
         let dataArr = [];

         annonce.forEach((articleTag) => {
            const lien = articleTag.querySelectorAll("a");
            const title = lien[0];
            const company = articleTag.querySelector("h4");
            const type = articleTag.querySelector("h5");
            const detail = lien[1];

            dataArr.push({
                Title: title.innerText,
                Company: company.innerText,
                Type: type.innerText,
                Info: detail.innerText
            });
         });
        return dataArr;  
    });

    fs.writeFile(
        "./portaljobscrap.json", 
        JSON.stringify(grabData,null,3),
        (err) => {
            if(err){console.error(err);
            return;
            };
            console.log("Success");
        });

    //Close
    await browser.close(); 
})();