const v_sitemap = require('../../');
const dataArray = require('./$_dataArray');

(async () => {
    console.log(await v_sitemap({data: dataArray}));
})();