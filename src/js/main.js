import { getParkData } from "./parkService.mjs";
const parkData = getParkData();
setHeaderInfo(parkData);

const parkInfoLinks = [
    {
        name: "Current Conditions &#x203A;",
        link: "conditions.html",
        image: parkData.images[2].url,
        description: "See what conditions to expect in the park before leaving on your trip!"
    },
    {
        name: "Fees and Passes &#x203A;",
        link: "fees.html",
        image: parkData.images[3].url,
        description: "Learn about the fees and passes that are available."
    },
    {
        name: "Visitor Centers &#x203A;",
        link: "visitor_centers.html",
        image: parkData.images[9].url,
        description: "Learn about the visito centers in the park."
    }
]

function setHeaderInfo(data) {
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = parkData.url;
    disclaimer.innerHTML = parkData.fullName;
    document.querySelector(".hero-banner > img").src = parkData.images[0].url;
    document.querySelector("head > title").textContent = parkData.fullName;
    document.querySelector(".hero-banner_content").innerHTML = parkInfoTemplate(parkData);
}

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner_title">${info.name}</a>
    <p class="hero-banner_subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
    </p>`;
}

function mediaCardTemplate(info) {

}
