const vFS = require('v_file_system');

const config = {
    host: "https://v-core9.com",
    xml_version: "1.0",
    xml_encoding: "UTF-8"
};


module.exports = async ({dataArray, index = false}) => {
    var resp = '<?xml version="1.0" encoding="UTF-8"?>';

    if (index === true) {
        resp += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        for (let i = 0; i < dataArray.length; i++) {
            resp += `<sitemap>
                        <loc>${config.host}${dataArray[i].path}</loc>
                    </sitemap>`;
        }
        resp += `</sitemapindex>`;
    } else {
        resp += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        for (let i = 0; i < dataArray.length; i++) {
            resp += `<url>
                        <loc>${config.host}${dataArray[i].path}</loc>
                        <lastmod>${dataArray[i].lastmod}</lastmod>
                        <changefreq>${dataArray[i].changefreq}</changefreq>
                        <priority>${dataArray[i].priority}</priority>
                    </url>`;
        }
        resp += `</urlset>`;
    }

    return resp;
};

