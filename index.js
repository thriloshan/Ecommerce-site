let mainSection = document.getElementById("mainSection");


document.addEventListener("DOMContentLoaded",()=>{
   fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
        
        json?.map((el)=>{
           let cardSection  = document.createElement("section");
           cardSection.classList.add("cardItem")
           mainSection.appendChild(cardSection);

           let cardImg = document.createElement("img");
           cardSection.appendChild(cardImg);
           cardImg.classList.add("cardImg");
           cardImg.src=el.image;
         
           let descPara = document.createElement("p");
           cardSection.appendChild(descPara);
           descPara.classList.add("productdesc");
           descPara.innerText=(el.description).slice(0, 30);

        
        let pricecontainer = document.createElement("div");
        let priceheading= document.createElement("h2");
        let smallTag =document.createElement("small");
        
        cardSection.appendChild(pricecontainer);
        cardSection.classList.add("priceDiv");

        pricecontainer.appendChild(priceheading);
        priceheading.innerText = "₹ "+Math.floor(el.price)*25;
        pricecontainer.appendChild(smallTag);
        smallTag.innerText="Onwards";

        
        let deliveryDiv = document.createElement("div");
        deliveryDiv.classList.add("isdelivery");
        deliveryDiv.innerText="Free Delivery";
        cardSection.appendChild(deliveryDiv);

      
      let bottomArticle  = document.createElement("article");
      bottomArticle.classList.add("ratingarticle");
      cardSection.appendChild(bottomArticle);


      let ratingDiv = document.createElement("div");
      ratingDiv.classList.add("ratingDiv");
      ratingDiv.innerText=el.rating.rate+" ⭐";

      let lastSmall = document.createElement("small");
   lastSmall.innerText=Math.floor(Math.random()*50000)+"  reviews";



      bottomArticle.appendChild(ratingDiv);
      bottomArticle.appendChild(lastSmall);

      

      cardSection.addEventListener("click", () => {
         
         localStorage.setItem('selectedProduct', JSON.stringify(el));

        
         window.location.href = "product.html";
     });
 }) 
}
    );
})