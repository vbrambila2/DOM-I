const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!');

//header
const services = document.querySelector("nav a");
services.textContent = siteContent["nav"]["nav-item-1"];
const product = services.nextElementSibling;
product.textContent = siteContent["nav"]["nav-item-2"];
const vision = product.nextElementSibling;
vision.textContent = siteContent["nav"]["nav-item-3"];
const features = vision.nextElementSibling;
features.textContent = siteContent["nav"]["nav-item-4"];
const about = features.nextElementSibling;
about.textContent = siteContent["nav"]["nav-item-5"];
const contact = about.nextElementSibling;
contact.textContent = siteContent["nav"]["nav-item-6"];

//cta
const title = document.querySelector(".cta h1");
title.textContent = siteContent["cta"]["h1"];
const button = document.querySelector(".cta button");
button.textContent = siteContent["cta"]["button"];

//top-content
const featuresTitle = document.querySelector(".top-content h4");
featuresTitle.textContent = siteContent["main-content"]["features-h4"];
const featuresBody = featuresTitle.nextElementSibling;
featuresBody.textContent = siteContent["main-content"]["features-content"];

const nextTopContent = document.querySelector(".top-content .text-content");
const aboutSection = nextTopContent.nextElementSibling;

const aboutTitle = aboutSection.querySelector("h4");
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
const aboutBody = aboutTitle.nextElementSibling;
aboutBody.textContent = siteContent["main-content"]["about-content"];

//bottom-content
const servicesTitle = document.querySelector(".bottom-content h4");
servicesTitle.textContent = siteContent["main-content"]["services-h4"];
const servicesBody = servicesTitle.nextElementSibling;
servicesBody.textContent = siteContent["main-content"]["services-content"];

const nextBottomContent = document.querySelector(".bottom-content .text-content");
const productSection = nextBottomContent.nextElementSibling;

const productTitle = productSection.querySelector("h4");
productTitle.textContent = siteContent["main-content"]["product-h4"];
const productBody = productTitle.nextElementSibling;
productBody.textContent = siteContent["main-content"]["product-content"];

const visionSection = productSection.nextElementSibling;

const visionTitle = visionSection.querySelector("h4");
visionTitle.textContent = siteContent["main-content"]["vision-h4"];
const visionBody = visionTitle.nextElementSibling;
visionBody.textContent = siteContent["main-content"]["vision-content"];