const v_sitemap = require('.');
const path = require('path');

// Some Random Array to Use for demonstration purpose.
const DEMO_DATA = [
    {
        name: 'Home',
        path: 'https://v-core9.com/',
        lastmod: '2019-01-01',
        changefreq: 'yearly',
        priority: 0.4,
    },
    {
        name: 'About',
        path: 'https://v-core9.com/about',
        lastmod: '2020-01-01',
        changefreq: 'monthly',
        priority: 0.6,
    }, {
        name: 'Contact',
        path: 'https://v-core9.com/contact',
        lastmod: '2021-01-01',
        changefreq: 'daily',
        priority: 0.9,
    }
];


//? Example index sitemap
const myMap = {
    data: DEMO_DATA,
    index: true,
    output: "sample.INDEX.xml",
    style: "sample.STYLE.xsl"
};
v_sitemap(myMap);


//? Example sitemap
const innerMap = {
    data: DEMO_DATA,
    index: false,
    output: "sample.POSTS.xml",
};
v_sitemap(innerMap);


//? Example styled map
const myStyledMap = {
    data: DEMO_DATA,
    index: true,
    output: "sample.myStyledMap.xml",
    stylesheet:  "v-core9.com/style/XSL/sitemap.xsl"
};
// Guess It has to be online to work with stylesheet cuz it's working once I put it online.
v_sitemap(myStyledMap);
