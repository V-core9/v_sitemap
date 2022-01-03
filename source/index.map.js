module.exports = async (value) => {
    const {data, config} = value;
    var resp = '\n<sitemapindex xmlns="'+config.xmlns+'">';
    for (let i = 0; i < data.length; i++) {
        resp += `\n    <sitemap>
        <loc>${config.host}${data[i].path}</loc>
    </sitemap>`;
    }
    resp += `\n</sitemapindex>`;
    return resp;
};



//*--------------------------------------------------------------------
//? Yup, it looks bad but it's the fastest way to have it done[for now].
//? But the output sitemapindex result is eye friendly. 

//!  XML Sitemap [sitemapindex] Output: 

//* <?xml version="1.0" encoding="UTF-8"?>
//* <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//*     <sitemap>
//*         <loc>https://v-core9.com/</loc>
//*     </sitemap>
//*     <sitemap>
//*         <loc>https://v-core9.com/about</loc>
//*     </sitemap>
//*     <sitemap>
//*         <loc>https://v-core9.com/contact</loc>
//*     </sitemap>
//* </sitemapindex>

//![ EOF_XML ]>- - - - - -   