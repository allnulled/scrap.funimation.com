(() => {
    const $ = (...args) => document.querySelector(...args);
    const $$ = (...args) => Array.from(document.querySelectorAll(...args));
    const cartas = $$("a.poster-card");
    const datos = [];
    for(let iCarta = 0; iCarta < cartas.length; iCarta++) {
        const carta = cartas[iCarta];
        const link = carta.href;
        const ele = carta.querySelector("[data-test='poster-card__meta']");
        const title = ele.getAttribute("data-title");
        const year = ele.getAttribute("data-year-of-production");
        const channel = ele.getAttribute("data-rating");
        const genres = ele.getAttribute("data-genres");
        const languages = ele.getAttribute("data-language");
        const description = ele.getAttribute("data-desc");
        const image = ele.getAttribute("data-image");
        const versions = ele.getAttribute("data-versions");
        const item = {
            title,
            year,
            channel,
            genres,
            languages,
            description,
            image,
            link,
            versions,
        };
        datos.push(item);
    }
    console.log(JSON.stringify(datos, null, 2));
})();