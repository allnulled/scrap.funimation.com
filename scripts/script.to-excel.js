const datos_json = require(__dirname + "/../network/responses/responses.all.json");
const get_property = function (tree, selector, default_value) {
    let treeCopy = tree;
    try {
        while (selector.length !== 0) {
            treeCopy = treeCopy[selector.shift()];
        }
    } catch (error) {
        return default_value;
    }
    return treeCopy;
};
const sort_properties = function sortObjectByKeyNameList(object, sortWith) {
    let keys;
    let sortFn;
    if (typeof sortWith === 'function') {
        sortFn = sortWith;
    } else {
        keys = sortWith;
    }
    let objectKeys = Object.keys(object);
    return (keys || []).concat(objectKeys.sort(sortFn)).reduce(function (total, key) {
        if (objectKeys.indexOf(key) !== -1) {
            total[key] = object[key];
        }
        return total;
    }, Object.create(null));
};
const has_array_item = function(arr, item, value_yes = "Sí", value_no = "-") {
    return arr.indexOf(item) !== -1 ? value_yes : value_no;
};
Listar_datos_expandidos: {
    // Comentar para ver campos:
    break Listar_datos_expandidos;
    const valores_de_sinopsis = [];
    const valores_de_sinopsisExt = [];
    const valores_de_maturity = [];
    const valores_de_languages = [];
    for (let index = 0; index < datos_json.length; index++) {
        const dato = datos_json[index];
        Subvalores_de_synopsis: {
            const claves = Object.keys(dato.synopsis);
            for (let index2 = 0; index2 < claves.length; index2++) {
                const clave = claves[index2];
                if (valores_de_sinopsis.indexOf(clave) === -1) {
                    valores_de_sinopsis.push(clave);
                }
            }
        }
        Subvalores_de_synopsis_ext: {
            const claves = Object.keys(dato.synopsisExt);
            for (let index2 = 0; index2 < claves.length; index2++) {
                const clave = claves[index2];
                if (valores_de_sinopsisExt.indexOf(clave) === -1) {
                    valores_de_sinopsisExt.push(clave);
                }
            }
        }
        Subvalores_de_maturity: {
            const claves = Object.keys(dato.maturity);
            for (let index2 = 0; index2 < claves.length; index2++) {
                const clave = claves[index2];
                if (valores_de_maturity.indexOf(clave) === -1) {
                    valores_de_maturity.push(clave);
                }
            }
        }
        Subvalores_de_languages: {
            const claves = dato.languages;
            for (let index2 = 0; index2 < claves.length; index2++) {
                const clave = claves[index2];
                if (valores_de_languages.indexOf(clave) === -1) {
                    valores_de_languages.push(clave);
                }
            }
        }
    }
    console.log(valores_de_sinopsis);
    console.log(valores_de_sinopsisExt);
    console.log(valores_de_maturity);
    console.log(valores_de_languages);
    /* RESULTADO:
    [ 'longSynopsis', 'shortSynopsis', 'mediumSynopsis' ]
    [ 'en', 'es', 'pt', 'ru', 'fr', 'de' ]
    [ 'bra', 'ca',  'irl', 'mex', 'usa', 'chl', 'per', 'col', 'aus', 'nzl' ]
    [ 'English', 'Japanese', 'Portuguese (Brazil)', 'Spanish (Latin Am)', 'Chinese (Mandarin, PRC)' ]
    //*/
    return;
}
const datos_json_expandidos = [];
for (let index = 0; index < datos_json.length; index++) {
    const dato = datos_json[index];
    const dato_expandido = ((item) => {
        const item2 = Object.assign({}, item);
        delete item2.titleExt;
        delete item2.synopsis;
        delete item2.synopsisExt;
        delete item2.maturity;
        delete item2.images;
        delete item2.languages;
        const item_expandido = {
            "titleExt.es": get_property(item, ["titleExt", "es"], "-"),
            "titleExt.pt": get_property(item, ["titleExt", "pt"], "-"),
            "languages.English": has_array_item(item.languages, "English", "true", "-"),
            "languages.Japanese": has_array_item(item.languages, "Japanese", "true", "-"),
            "languages.Portuguese (Brazil)": has_array_item(item.languages, "Portuguese (Brazil)", "true", "-"),
            "languages.Spanish (Latin Am)": has_array_item(item.languages, "Spanish (Latin Am)", "true", "-"),
            "languages.Chinese (Mandarin, PRC)": has_array_item(item.languages, "Chinese (Mandarin, PRC)", "true", "-"),
            "synopsis.long": get_property(item, ["synopsis", "longSynopsis"], false) ? "Sí" : "-",
            "synopsis.short": get_property(item, ["synopsis", "shortSynopsis"], false) ? "Sí" : "-",
            "synopsis.medium": get_property(item, ["synopsis", "mediumSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.en.long": get_property(item, ["synopsisExt", "en", "longSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.en.medium": get_property(item, ["synopsisExt", "en", "mediumSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.en.short": get_property(item, ["synopsisExt", "en", "shortSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.es.long": get_property(item, ["synopsisExt", "es", "longSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.es.medium": get_property(item, ["synopsisExt", "es", "mediumSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.es.short": get_property(item, ["synopsisExt", "es", "shortSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.pt.long": get_property(item, ["synopsisExt", "pt", "longSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.pt.medium": get_property(item, ["synopsisExt", "pt", "mediumSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.pt.short": get_property(item, ["synopsisExt", "pt", "shortSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.ru.long": get_property(item, ["synopsisExt", "ru", "longSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.ru.medium": get_property(item, ["synopsisExt", "ru", "mediumSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.ru.short": get_property(item, ["synopsisExt", "ru", "shortSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.fr.long": get_property(item, ["synopsisExt", "fr", "longSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.fr.medium": get_property(item, ["synopsisExt", "fr", "mediumSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.fr.short": get_property(item, ["synopsisExt", "fr", "shortSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.de.long": get_property(item, ["synopsisExt", "de", "longSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.de.medium": get_property(item, ["synopsisExt", "de", "mediumSynopsis"], false) ? "Sí" : "-",
            "synopsisExt.de.short": get_property(item, ["synopsisExt", "de", "shortSynopsis"], false) ? "Sí" : "-",
            "maturity.bra": get_property(item, ["maturity", "bra"], "-"),
            "maturity.ca": get_property(item, ["maturity", "ca"], "-"),
            "maturity.irl": get_property(item, ["maturity", "irl"], "-"),
            "maturity.mex": get_property(item, ["maturity", "mex"], "-"),
            "maturity.usa": get_property(item, ["maturity", "usa"], "-"),
            "maturity.chl": get_property(item, ["maturity", "chl"], "-"),
            "maturity.per": get_property(item, ["maturity", "per"], "-"),
            "maturity.col": get_property(item, ["maturity", "col"], "-"),
            "maturity.aus": get_property(item, ["maturity", "aus"], "-"),
            "maturity.nzl": get_property(item, ["maturity", "nzl"], "-"),
        };
        return sort_properties(Object.assign(item2, item_expandido), [
            "title",
            "titleExt.es",
            "titleExt.pt",
            "languages.English",
            "languages.Japanese",
            "languages.Portuguese (Brazil)",
            "languages.Spanish (Latin Am)",
            "languages.Chinese (Mandarin, PRC)",
            "synopsis.longSynopsis",
            "synopsis.shortSynopsis",
            "synopsis.mediumSynopsis",
            "synopsisExt.en.longSynopsis",
            "synopsisExt.en.mediumSynopsis",
            "synopsisExt.en.shortSynopsis",
            "synopsisExt.es.longSynopsis",
            "synopsisExt.es.mediumSynopsis",
            "synopsisExt.es.shortSynopsis",
            "synopsisExt.pt.longSynopsis",
            "synopsisExt.pt.mediumSynopsis",
            "synopsisExt.pt.shortSynopsis",
            "synopsisExt.ru.longSynopsis",
            "synopsisExt.ru.mediumSynopsis",
            "synopsisExt.ru.shortSynopsis",
            "synopsisExt.fr.longSynopsis",
            "synopsisExt.fr.mediumSynopsis",
            "synopsisExt.fr.shortSynopsis",
            "synopsisExt.de.longSynopsis",
            "synopsisExt.de.mediumSynopsis",
            "synopsisExt.de.shortSynopsis",
            "maturity.bra",
            "maturity.ca",
            "maturity.irl",
            "maturity.mex",
            "maturity.usa",
            "maturity.chl",
            "maturity.per",
            "maturity.col",
            "maturity.aus",
            "maturity.nzl",
            "genres",
            "studios",
            "showUrl",
            "showSlug",
            "productionYear",
            "releaseYear",
            "quality",
            "ratingUsTvMpaa",
            "ratingPairs",
            "venueId",
            "versions",
            "videoTypes",
            "relevancy",
        ]);
    })(dato);
    datos_json_expandidos.push(dato_expandido);
}
const { Parser } = require("@json2csv/plainjs");
try {
    const parser = new Parser();
    const datos_csv = parser.parse(datos_json_expandidos);
    require("fs").writeFileSync(__dirname + "/../datos/funimation.com.csv", datos_csv, "utf8");
    console.log("OK.");
} catch (err) {
    console.error(err);
}