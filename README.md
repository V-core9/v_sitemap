# v_sitemap

[🔥] WARNING : ALPHA DEVELOPMENT STATE [🔥]

## 00. Output Examples [from same array of items]:

![v_sitemap Output Examples](output.sample)

## 1. Installing:

    npm i v_sitemap --save


## 2. Using:

    const v_sitemap = require('.');

    // Some Random Array to Use for demonstration purpose.
    const DEMO_DATA = [
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

    const myMap = {data: DEMO_DATA, index: true, output: "DEMO_DATA.xml"};

    v_sitemap(myMap);

#
## 2.1. Listing of sitemaps [sitemapindex]
>That code will the produce this XML file:

    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
            <loc>https://v-core9.com/</loc>
        </sitemap>
        <sitemap>
            <loc>https://v-core9.com/about</loc>
        </sitemap>
        <sitemap>
            <loc>https://v-core9.com/contact</loc>
        </sitemap>
    </sitemapindex>

## 2.2. Single Sitemap [urlset]
> By Changing option in "myMap" constant from "index == true" to false...like this: 

    const myMap = {
        data: DEMO_DATA, 
        index: false, 
        output: "DEMO_DATA.SMAP.xml"
    };

    v_sitemap(myMap);

>and instead of sitemapindex it will produce this XML file

    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://v-core9.com/</loc>
            <lastmod>2019-01-01</lastmod>
            <changefreq>yearly</changefreq>
            <priority>0.4</priority>
        </url>
        <url>
            <loc>https://v-core9.com/about</loc>
            <lastmod>2020-01-01</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.6</priority>
        </url>
        <url>
            <loc>https://v-core9.com/contact</loc>
            <lastmod>2021-01-01</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.9</priority>
        </url>
    </urlset>

# 

## Sitemap Generation Options?


>### NOTICE: 
>For now just check \_TEST\_ Directory & "sample.run.js" file for more info 

    const myMap = {
        data: DEMO_DATA,       
        index: false,
        output: "DEMO_DATA.bt03.xml"
    };

    v_sitemap(myMap);