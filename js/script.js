let desdingBtn = document.getElementById('desdingBtn');
let designGate = true;

let productionBtn = document.getElementById('productionBtn')
let productionGate = true;

let solutionBtn = document.getElementById('solutionBtn');
let solutionGate = true;

let slideInject = document.getElementById('slideInject');


desdingBtn.addEventListener('click', function(e){
    console.log("Desgn Slide");
    switch (designGate){
        case true:
            slideInject.innerHTML="";
            designInjection();
            designGate = false;
            productionGate = true;
        break;
        case false:
            slideInject.innerHTML="";
            designGate = true;
            productionGate = false;
        break;
    }
    console.log(designGate);
});

productionBtn.addEventListener('click', function(e){
    console.log("Production Slide");
    switch (productionGate){
        case true:
            slideInject.innerHTML="";
            productionInjection();
            designGate = true;
            productionGate = false;
        break;
        case false:
            slideInject.innerHTML="";
            designGate = false;
            productionGate = true;
        break;
    }
    console.log(productionGate);
});


function productionInjection(){
    console.log('Production-injected');
    //Create elements
    //= document.createElement('div')
    let containerFluid = document.createElement('div');
    containerFluid.className = "container-fluid mt-5 production-card-slides pb-5";

    let container = document.createElement('div');
    container.className = "container";

    let mainRow = document.createElement('div');
    mainRow.className = "row pt-5";
    //--------------------------------------------------------------------------------
    let textCol = document.createElement('div');
    textCol.className = "col-12 col-lg-7 slide-format";

    let h1 = document.createElement('h1')
    h1.className = "AboutUs";
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
    containerFluid.className = "container-fluid mt-5 design-card-slides pb-5";

    let container = document.createElement('div');
    container.className = "container";

    let mainRow = document.createElement('div');
    mainRow.className = "row pt-5";
    //--------------------------------------------------------------------------------
    let textCol = document.createElement('div');
    textCol.className = "col-12 col-lg-7 slide-format";

    let h1 = document.createElement('h1')
    h1.className = "AboutUs";
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