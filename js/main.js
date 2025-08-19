import hero from "bundle-text:/hero.html"
import header from "bundle-text:/header.html"
import about_us from "bundle-text:/about_us.html"
import program from "bundle-text:/program.html"
import team from "bundle-text:/team.html"
import price from "bundle-text:/price.html"
import reviews from "bundle-text:/reviews.html"
import registration from "bundle-text:/registration.html"
import footer from "bundle-text:/footer.html"

function insertHtmlFragment(targetId, htmlContent) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.innerHTML = htmlContent;
    } else {
        console.warn(`Елемент з ID "${targetId}" не знайдено.`);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    insertHtmlFragment("header", header);
    insertHtmlFragment("hero", hero);
    insertHtmlFragment("about_us", about_us);
    insertHtmlFragment("program", program);
    insertHtmlFragment("team", team);
    insertHtmlFragment("price", price);
    insertHtmlFragment("reviews", reviews);
    insertHtmlFragment("registration", registration);
    insertHtmlFragment("footer", footer);
});
