const vFS = require('v_file_system');

const config = {
    host: "https://v-core9.com",
    xml_version: "1.0",
    xml_encoding: "UTF-8"
};


module.exports = async ({data, index = false, output = null}) => {
    var resp = '<?xml version="1.0" encoding="UTF-8"?>';

    if (index === true) {
        resp += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        for (let i = 0; i < data.length; i++) {
            resp += `<sitemap>
                        <loc>${config.host}${data[i].path}</loc>
                    </sitemap>`;
        }
        resp += `</sitemapindex>`;
    } else {
        resp += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        for (let i = 0; i < data.length; i++) {
            resp += `<url>
                        <loc>${config.host}${data[i].path}</loc>
                        <lastmod>${data[i].lastmod}</lastmod>
                        <changefreq>${data[i].changefreq}</changefreq>
                        <priority>${data[i].priority}</priority>
                    </url>`;
        }
        resp += `</urlset>`;
    }

    if (output !== null) await vFS.write(output, JSON.stringify(resp, true, 2));

    return resp;
};

