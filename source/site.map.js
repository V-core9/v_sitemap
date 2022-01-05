module.exports = async (value) => {
    const {data, config} = value;
    var resp = '\n<urlset xmlns="'+config.xmlns+'">';
    for (let i = 0; i < data.length; i++) {
        resp += `
    <url>
        <loc>${data[i].path}</loc>
        <lastmod>${data[i].lastmod}</lastmod>
        <changefreq>${data[i].changefreq}</changefreq>
        <priority>${data[i].priority}</priority>
    </url>`;
    }
    resp += `\n</urlset>`;
    return resp;
};



//*--------------------------------------------------------------------
//? Yup, it looks bad but it's the fastest way to have it done[for now].
//? But the output sitemapindex result is eye friendly. 

//! XML Sitemap [urlset] Output: 

//* <?xml version="1.0" encoding="UTF-8"?>
//* <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//*     <url>
//*         <loc>https://v-core9.com/demo-post</loc>
//*         <lastmod>2019-01-01</lastmod>
//*         <changefreq>yearly</changefreq>
//*         <priority>0.4</priority>
//*     </url>
//*     <url>
//*         <loc>https://v-core9.com/post-name</loc>
//*         <lastmod>2020-01-01</lastmod>
//*         <changefreq>monthly</changefreq>
//*         <priority>0.6</priority>
//*     </url>
//* </urlset>

//![ EOF_XML ]>- - - - - -   