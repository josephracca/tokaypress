
let designBtn = document.getElementById('designBtn');
designCard = document.getElementById('designCard');
let designBtn2 = document.getElementById('designBtn2');
designCard2 = document.getElementById('designCard2');
let designGate = true;

let productionBtn = document.getElementById('productionBtn')
let productionCard = document.getElementById('productionCard');
let productionBtn2 = document.getElementById('productionBtn2')
let productionCard2 = document.getElementById('productionCard2');
let productionGate = true;

let solutionBtn = document.getElementById('solutionBtn');
let solutionCard = document.getElementById('solutionCard');
let solutionBtn2 = document.getElementById('solutionBtn2');
let solutionCard2 = document.getElementById('solutionCard2');
let solutionGate = true;

let slideInject = document.getElementById('slideInject');



function seeLess(){
    if(designGate == false && slideInject.innerHTML != "")
    {
        designBtn.innerText = "See Less"
        designBtn.className = "btn btn-primary my-3 px-5 seeLess"
        designCard.className = "card design-selected text-center";
        //Mobile
        designBtn2.innerText = "See Less"
        designBtn2.className = "btn btn-primary my-3 px-5 seeLess"
        designCard2.className = "card design-selected text-center mobile-cards";
    } else{
        designBtn.innerText = "More About Design"
        designBtn.className = "btn btn-primary my-3 design-btn px-5";
        designCard.className = "card design-opac text-center";
        //mobile
        designBtn2.innerText = "More About Design"
        designBtn2.className = "btn btn-primary my-3 design-btn px-5";
        designCard2.className = "card design-opac text-center mobile-cards";

    }

    if(productionGate == false && slideInject.innerHTML != "")
    {
        productionBtn.innerText = "See Less";
        productionBtn.className = "btn btn-primary my-3 px-5 seeLess";
        productionCard.className = "card production-selected text-center";
        //mobile
        productionBtn2.innerText = "See Less";
        productionBtn2.className = "btn btn-primary my-3 px-4 seeLess";
        productionCard2.className = "card production-selected text-center mobile-cards";
    } else{
        productionBtn.innerText = "More About Production"
        productionBtn.className = "btn btn-primary my-3 productionBtn px-5";
        productionCard.className = "card production-opac text-center";
        //Mobile
        productionBtn2.innerText = "More About Production"
        productionBtn2.className = "btn btn-primary my-3 productionBtn px-4";
        productionCard2.className = "card production-opac text-center mobile-cards";
        

    }

    if(solutionGate == false && slideInject.innerHTML != "")
    {
        solutionBtn.innerText = "See Less"
        solutionBtn.className = "btn btn-primary my-3 px-5 seeLess";
        solutionCard.className = "card solution-selected text-center";
        //Mobile
        solutionBtn2.innerText = "See Less"
        solutionBtn2.className = "btn btn-primary my-3 px-4 seeLess";
        solutionCard2.className = "card solution-selected text-center mobile-cards";
    } else{
        solutionBtn.innerText = "More About Solutions";
        solutionBtn.className = "btn btn-primary my-3 solution-btn px-5";
        solutionCard.className = "card solution-opac text-center";
        //Mobile
        solutionBtn2.innerText = "More About Solutions";
        solutionBtn2.className = "btn btn-primary my-3 solution-btn px-4";
        solutionCard2.className = "card solution-opac text-center mobile-cards";

    }
    if(slideInject.innerHTML == ""){
        designCard.className = "card design-card text-center";
        productionCard.className = "card production-card text-center";
        solutionCard.className = "card solution-card text-center";
        //Mobile
        designCard2.className = "card design-card text-center mobile-cards";
        productionCard2.className = "card production-card text-center mobile-cards";
        solutionCard2.className = "card solution-card text-center mobile-cards";
        designGate = true;
            productionGate = true;
            solutionGate= true;
    }
    console.log(productionGate);
    console.log(designGate);
    console.log(solutionGate);
}

designBtn.addEventListener('click', function(e){
    console.log("Desgn Slide");
    switch (designGate){
        case true:
            slideInject.innerHTML="";
            designInjection();
            designGate = false;
            productionGate = true;
            solutionGate= true;
        break;
        case false:
            slideInject.innerHTML="";
            
        break;
    }
    seeLess();
    
});

productionBtn.addEventListener('click', function(e){
    console.log("Production Slide");
    switch (productionGate){
        case true:
            slideInject.innerHTML="";
            productionInjection();
            productionGate = false;
            designGate = true;
            solutionGate= true;
            
        break;
        case false:
            slideInject.innerHTML="";
            
            
        break;
        //if slideinject is empty, revert cards to initial state
    }
    seeLess();
    
});

solutionBtn2.addEventListener('click', function(e){
    console.log("Production Slide");
    switch (solutionGate){
        case true:
            slideInject.innerHTML="";
            solutionsInjection();
            solutionGate= false;
            designGate = true;
            productionGate = true;
        break;
        case false:
            slideInject.innerHTML="";
            
        break;
    }
    seeLess();
    
});

//Mobile
designBtn2.addEventListener('click', function(e){
    console.log("Desgn Slide");
    switch (designGate){
        case true:
            slideInject.innerHTML="";
            designInjection();
            designGate = false;
            productionGate = true;
            solutionGate= true;
        break;
        case false:
            slideInject.innerHTML="";
            
        break;
    }
    seeLess();
    
});

productionBtn2.addEventListener('click', function(e){
    console.log("Production Slide");
    switch (productionGate){
        case true:
            slideInject.innerHTML="";
            productionInjection();
            productionGate = false;
            designGate = true;
            solutionGate= true;
            
        break;
        case false:
            slideInject.innerHTML="";
            
            
        break;
        //if slideinject is empty, revert cards to initial state
    }
    seeLess();
    
});

solutionBtn.addEventListener('click', function(e){
    console.log("Production Slide");
    switch (solutionGate){
        case true:
            slideInject.innerHTML="";
            solutionsInjection();
            solutionGate= false;
            designGate = true;
            productionGate = true;
        break;
        case false:
            slideInject.innerHTML="";
            
        break;
    }
    seeLess();
    
});
//End




function solutionsInjection(){
    console.log('Production-injected');
    //Create elements
    //= document.createElement('div')
    let containerFluid = document.createElement('div');
    containerFluid.className = "container-fluid solutions-card-slides pb-5";

    let container = document.createElement('div');
    container.className = "container";

    let mainRow = document.createElement('div');
    mainRow.className = "row pt-5";
    //--------------------------------------------------------------------------------
    let textCol = document.createElement('div');
    textCol.className = "col-12 col-lg-7 slide-format";

    let h1 = document.createElement('h1')
    h1.className = "Yeseva-font";
    h1.innerText = "Solutions";

    let br = document.createElement('br');

    let pTag1 = document.createElement('p')
    pTag1.innerText ="Identity, visibility & brand recognition is something every business needs whether big or small. Frombasic business cards,letterhead, envelopes, catalogs, forms and brochures to tradeshow graphics, wallgraphics and floor graphics and more, we’ll help get you results.";

    let bTag2 = document.createElement('b');
    bTag2.innerText = "Small Business";
    let pTag3 = document.createElement('p');
    pTag3.innerText = "Logo Design, Marketing, Web";

    let bTag4 = document.createElement('b');
    bTag4.innerText = "Hospitality";
    let pTag5 = document.createElement('p');
    pTag5.innerText = "Menus, Event Marketing, Gift Cards & More!";

    let bTag6 = document.createElement('b')
    bTag6.innerText = "Non-Profits";
    let pTag7 = document.createElement('p');
    pTag7.innerText = "Newsletters, invitations, signs, tickets, programs";

    let bTag8 = document.createElement('b');
    bTag8.innerText = "Professional Services";
    let pTag9 = document.createElement('p');
    pTag9.innerText = "Letterhead, invitations, signs, tickets, programs";
    
    let bTag10 = document.createElement('b');
    bTag10.innerText = "School & Teams";
    let pTag11 = document.createElement('p');
    pTag11.innerText = "perfect bound yearbooks and media guides";

    //--------------------------------------------------------------------------------
    let imgCol = document.createElement('div');
    imgCol.className ='col-12 col-lg-5 pb-5';

    let innerRow = document.createElement('div');
    innerRow.className = "row";

    let MainImgCol = document.createElement('div');
    MainImgCol.className = "col-12 d-flex pb-3";

    let mainImg = document.createElement('img');
    mainImg.className = 'img-thumbnail slide-img';
    mainImg.setAttribute("src", './images/solution-img1.png')
    //----------
    let imgCol2 = document.createElement('div');
    imgCol2.className = "col-12 col-lg-6 d-flex justify-content-center";
    
    let imgTag2  = document.createElement('img');
    imgTag2.className = 'img-thumbnail slide-img';
    imgTag2.setAttribute("src", './images/solution-img2.png');
    //----------
    let imgCol3 = document.createElement('div');
    imgCol3.className = "col-12 col-lg-6 d-flex justify-content-center";

    let imgTag3  = document.createElement('img');
    imgTag3.className = 'img-thumbnail slide-img';
    imgTag3.setAttribute("src", './images/solution-img3.png');


    //Append elements
    slideInject.appendChild(containerFluid);
    containerFluid.appendChild(container);
    container.appendChild(mainRow);
    //--------------------------------------------------------------------------------
    mainRow.appendChild(textCol);
    textCol.appendChild(h1);
    textCol.appendChild(br);
    textCol.appendChild(pTag1);
    textCol.appendChild(bTag2);
    textCol.appendChild(pTag3);
    textCol.appendChild(bTag4);
    textCol.appendChild(pTag5);
    textCol.appendChild(bTag6);
    textCol.appendChild(pTag7);
    textCol.appendChild(bTag8);
    textCol.appendChild(pTag9);
    textCol.appendChild(bTag10);
    textCol.appendChild(pTag11);
    //--------------------------------------------------------------------------------
    mainRow.appendChild(imgCol);
    imgCol.appendChild(innerRow);
    innerRow.appendChild(MainImgCol);
    MainImgCol.appendChild(mainImg);
    //----------
    innerRow.appendChild(imgCol2);
    imgCol2.appendChild(imgTag2);
    //----------
    innerRow.appendChild(imgCol3);
    imgCol3.appendChild(imgTag3);
}


function productionInjection(){
    console.log('Production-injected');
    //Create elements
    //= document.createElement('div')
    let containerFluid = document.createElement('div');
    containerFluid.className = "container-fluid  production-card-slides pb-5";

    let container = document.createElement('div');
    container.className = "container";

    let mainRow = document.createElement('div');
    mainRow.className = "row pt-5";
    //--------------------------------------------------------------------------------
    let textCol = document.createElement('div');
    textCol.className = "col-12 col-lg-7 slide-format";

    let h1 = document.createElement('h1')
    h1.className = "Yeseva-font";
    h1.innerText = "Production";

    let br = document.createElement('br');

    let pTag1 = document.createElement('p')
    pTag1.innerText ="We offer the following production capabilities:";

    let pTag2 = document.createElement('p')
    pTag2.innerText = "• Offset Printing";
    let pTag3 = document.createElement('p')
    pTag3.innerText = "• Die Cutting";
    let pTag4 = document.createElement('p')
    pTag4.innerText = "• Foiling";
    let pTag5 = document.createElement('p')
    pTag5.innerText = "• Letterpress";
    let pTag6 = document.createElement('p')
    pTag6.innerText = "• Embossing";
    let pTag7 = document.createElement('p')
    pTag7.innerText = "• Wide Format Printing";
    let pTag8 = document.createElement('p')
    pTag8.innerText = "• 4 Color Digital Printing";
    let pTag9 = document.createElement('p')
    pTag9.innerText = "• Booklet Making";
    let pTag10 = document.createElement('p')
    pTag10.innerText = "• Variable Data and Mailings";
    //--------------------------------------------------------------------------------
    let imgCol = document.createElement('div');
    imgCol.className ='col-12 col-lg-5 pb-5';

    let innerRow = document.createElement('div');
    innerRow.className = "row";

    let MainImgCol = document.createElement('div');
    MainImgCol.className = "col-12 d-flex pb-3";

    let mainImg = document.createElement('img');
    mainImg.className = 'img-thumbnail slide-img';
    mainImg.setAttribute("src", './images/Production-img1.png')
    //----------
    let imgCol2 = document.createElement('div');
    imgCol2.className = "col-12 col-lg-6 d-flex justify-content-center";
    
    let imgTag2  = document.createElement('img');
    imgTag2.className = 'img-thumbnail slide-img';
    imgTag2.setAttribute("src", './images/Production-img-2.png');
    //----------
    let imgCol3 = document.createElement('div');
    imgCol3.className = "col-12 col-lg-6 d-flex justify-content-center";

    let imgTag3  = document.createElement('img');
    imgTag3.className = 'img-thumbnail slide-img';
    imgTag3.setAttribute("src", './images/Production-img3.png');


    //Append elements
    slideInject.appendChild(containerFluid);
    containerFluid.appendChild(container);
    container.appendChild(mainRow);
    //--------------------------------------------------------------------------------
    mainRow.appendChild(textCol);
    textCol.appendChild(h1);
    textCol.appendChild(br);
    textCol.appendChild(pTag1);
    textCol.appendChild(pTag2);
    textCol.appendChild(pTag3);
    textCol.appendChild(pTag4);
    textCol.appendChild(pTag5);
    textCol.appendChild(pTag6);
    textCol.appendChild(pTag7);
    textCol.appendChild(pTag8);
    textCol.appendChild(pTag9);
    textCol.appendChild(pTag10);
    //--------------------------------------------------------------------------------
    mainRow.appendChild(imgCol);
    imgCol.appendChild(innerRow);
    innerRow.appendChild(MainImgCol);
    MainImgCol.appendChild(mainImg);
    //----------
    innerRow.appendChild(imgCol2);
    imgCol2.appendChild(imgTag2);
    //----------
    innerRow.appendChild(imgCol3);
    imgCol3.appendChild(imgTag3);
}




function designInjection(){
    console.log('Design-injected');
    //Create elements
    //= document.createElement('div')
    let containerFluid = document.createElement('div');
    containerFluid.className = "container-fluid  design-card-slides pb-5";

    let container = document.createElement('div');
    container.className = "container";

    let mainRow = document.createElement('div');
    mainRow.className = "row pt-5";
    //--------------------------------------------------------------------------------
    let textCol = document.createElement('div');
    textCol.className = "col-12 col-lg-7 slide-format";

    let h1 = document.createElement('h1')
    h1.className = "Yeseva-font";
    h1.innerText = "Design";

    let br = document.createElement('br');

    let pTag1 = document.createElement('p')
    pTag1.innerText ="When it comes to crafting your image, we know good design is good business.";

    let pTag2 = document.createElement('p')
    pTag2.innerText = "Our team of designers have been providing clients with exceptional creative services since 2005. We develop strategic marketing pieces and branding solutions that reflect your unique identity and successfully communicate your message to your target market.";
    //--------------------------------------------------------------------------------
    let imgCol = document.createElement('div');
    imgCol.className ='col-12 col-lg-5 pb-5';

    let innerRow = document.createElement('div');
    innerRow.className = "row";

    let MainImgCol = document.createElement('div');
    MainImgCol.className = "col-12 d-flex pb-3";

    let mainImg = document.createElement('img');
    mainImg.className = 'img-thumbnail slide-img';
    mainImg.setAttribute("src", './images/Design-Img1.png')
    //----------
    let imgCol2 = document.createElement('div');
    imgCol2.className = "col-12 col-lg-6 d-flex justify-content-center";
    
    let imgTag2  = document.createElement('img');
    imgTag2.className = 'img-thumbnail slide-img';
    imgTag2.setAttribute("src", './images/Design-Img2.png');
    //----------
    let imgCol3 = document.createElement('div');
    imgCol3.className = "col-12 col-lg-6 d-flex justify-content-center";

    let imgTag3  = document.createElement('img');
    imgTag3.className = 'img-thumbnail slide-img';
    imgTag3.setAttribute("src", './images/Design-Img3.png');


    //Append elements
    slideInject.appendChild(containerFluid);
    containerFluid.appendChild(container);
    container.appendChild(mainRow);
    //--------------------------------------------------------------------------------
    mainRow.appendChild(textCol);
    textCol.appendChild(h1);
    textCol.appendChild(br);
    textCol.appendChild(pTag1);
    textCol.appendChild(pTag2);
    //--------------------------------------------------------------------------------
    mainRow.appendChild(imgCol);
    imgCol.appendChild(innerRow);
    innerRow.appendChild(MainImgCol);
    MainImgCol.appendChild(mainImg);
    //----------
    innerRow.appendChild(imgCol2);
    imgCol2.appendChild(imgTag2);
    //----------
    innerRow.appendChild(imgCol3);
    imgCol3.appendChild(imgTag3);
}

// MESSAGE BUTTON
let messageBtn = document.getElementById("messageBtn");

messageBtn.addEventListener("click", function () {
  messageBtn.classList.add('messageSent');
  messageBtn.innerText = "MESSAGE SENT";
  alert("Message Sent!");

  messageBtn.innerHTML = '<b>MESSAGE SENT! </b><i class="far fa-paper-plane pl-1"></i>';
});