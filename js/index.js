const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

//---------------------------//NAVIGATION//---------------------------
//nav
const navigation = document.querySelectorAll("a");
navigation[0].textContent = siteContent["nav"]["nav-item-1"];
navigation[1].textContent = siteContent["nav"]["nav-item-2"];
navigation[2].textContent = siteContent["nav"]["nav-item-3"];
navigation[3].textContent = siteContent["nav"]["nav-item-4"];
navigation[4].textContent = siteContent["nav"]["nav-item-5"];
navigation[5].textContent = siteContent["nav"]["nav-item-6"];

//logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//---------------------------HEADER SECTION---------------------------

//titletext
let ctaTexth1 = document.querySelector(".cta-text h1");
ctaTexth1.textContent = siteContent["cta"]["h1"];
//titletextwrap
// let ctaContainer = document.querySelector('.cta');
// ctaContainer.style.flexWrap = "wrap";
// ctaContainer.justifyContent = "center";

//btn
let ctaTextButton = document.querySelector(".cta-text button");
ctaTextButton.textContent = siteContent["cta"]["button"];
//img
let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
ctaImg.style.width = "300px";

//---------------------------BODY TOP---------------------------

//variables for h4 and p
let h4elements = document.getElementsByTagName("h4");
let pElements = document.getElementsByTagName("p");

//features
h4elements[0].textContent = siteContent["main-content"]["features-h4"];
pElements[0].textContent = siteContent["main-content"]["features-content"];
//about
h4elements[1].textContent = siteContent["main-content"]["about-h4"];
pElements[1].textContent = siteContent["main-content"]["about-content"];

//---------------------------BODY BOTTOM---------------------------

const bodyLogo = document.getElementById("middle-img");
bodyLogo.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//otherelements
h4elements[2].textContent = siteContent["main-content"]["services-h4"];
pElements[2].textContent = siteContent["main-content"]["services-content"];
h4elements[3].textContent = siteContent["main-content"]["product-h4"];
pElements[3].textContent = siteContent["main-content"]["product-content"];
h4elements[4].textContent = siteContent["main-content"]["vision-h4"];
pElements[4].textContent = siteContent["main-content"]["vision-content"];
