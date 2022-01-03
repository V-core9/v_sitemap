const v_sitemap = require('../../');
const dataArray = require('./$_dataArray');

(async () => {
    console.log(await v_sitemap({data: dataArray, index: true, output: "output_sample.base_01.json"}));
})();