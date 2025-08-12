function insertHtmlFragment(targetId, htmlContent) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) targetElement.innerHTML = htmlContent;
    else console.warn(`\u{415}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442} \u{437} ID "${targetId}" \u{43D}\u{435} \u{437}\u{43D}\u{430}\u{439}\u{434}\u{435}\u{43D}\u{43E}.`);
}
document.addEventListener('DOMContentLoaded', ()=>{
    insertHtmlFragment('header-placeholder', header);
});

//# sourceMappingURL=main.72be8890.js.map
