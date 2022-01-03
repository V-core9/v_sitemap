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

    const myMap = {
        data: DEMO_DATA, 
        index: true, 
        output: "sample.INDEX.xml"
    };

    v_sitemap(myMap);

    const innerMap = {
        data: DEMO_DATA, 
        index: false, 
        output: "sample.POSTS.xml"
    };

    v_sitemap(innerMap);