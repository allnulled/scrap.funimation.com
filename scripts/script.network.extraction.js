const fs = require("fs");
const path = require("path");
const fichero_network = path.resolve(__dirname, "..", "network", "network.har");
const datos_network = JSON.parse(fs.readFileSync(fichero_network).toString());
const items_network = datos_network.log.entries;
let all_responses = [];

for(let iItem = 0; iItem < items_network.length; iItem++) {
    const item_network = items_network[iItem];
    const item_response_text = item_network.response.content.text;
    const item_response = JSON.parse(item_response_text);
    const response_hits = item_response.items.hits;
    all_responses = all_responses.concat(response_hits);
}

const ruta_network_all_responses = path.resolve(__dirname, "..", "network", "responses", "responses.all.json");
fs.writeFileSync(ruta_network_all_responses, JSON.stringify(all_responses, null, 2), "utf8");

const extraction = [];
for(let iResponse = 0; iResponse < all_responses.length; iResponse++) {
    const response = all_responses[iResponse];
    const dato = {
        title: null,
        type: null,
        synopsis: null,
        languages: null,
        genres: null,
        studios: null,
        year: {
            production: null,
            release: null
        },
        images: null,
        link: "https://www.funimation.com" + null
    };
    extraction.push(dato);
}

const ruta_network_extraction = path.resolve(__dirname, "..", "network", "responses", "responses.extraction.json");
fs.writeFileSync(ruta_network_extraction, JSON.stringify(extraction, null, 2), "utf8");

