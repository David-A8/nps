import "../css/style.css";
import "../css/conditions.css";
import { getParkData, getParkAlerts, getVisitorCenterData } from './parkService.mjs';
import { setHeaderFooter } from './setHeaderFooter.mjs';
import { alertTemplate, visitorCenterTemplate, activityListTemplate } from './templates.mjs';

async function init() {
    const parkData = await getParkData();
    const alerts = await getParkAlerts(parkData.parkCode);
    const visitorCenters = await getVisitorCenterData(parkData.parkCode);
    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(visitorCenters);
    setActivities(parkData.activities);
}

function setAlerts(alerts) {
    const alertsContainer = document.querySelector(".alerts > ul");
    alertsContainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function setVisitorCenters(centers) {
    const centersContainer = document.querySelector(".visitor ul");
    const html = centers.map(visitorCenterTemplate);
    centersContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivities(activities) {
    const activitiesContainer = document.querySelector(".activities ul");
    const html = activityListTemplate(activities);
    activitiesContainer.insertAdjacentHTML("afterbegin", html);
}

init();