const v_sitemap = require('../../');

const dataArray = [
    {
        name: 'Home',
        path: '/',
        lastmod: '2019-01-01',
        changefreq: 'yearly',
        priority: 0.4,
    },
    {
        name: 'About',
        path: '/about', 
        lastmod: '2020-01-01',
        changefreq: 'monthly',
        priority: 0.6,
    },{
        name: 'Contact',
        path: '/contact',
        lastmod: '2021-01-01',
        changefreq: 'daily',
        priority: 0.9,
    } 
];

(async () => {
    console.log(await v_sitemap({dataArray}));
    console.log(await v_sitemap({data: dataArray, index: true}));
    console.log(await v_sitemap({data: dataArray, index: true, output: "output_sample.base_01"}));
})();