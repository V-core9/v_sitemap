const vFS = require('v_file_system');

const v_sitemap = {
    config : require('./config'),
    index_map : require('./index.map'),
    sitemap : require('./site.map')
};

module.exports = async ({ data, index = false, output = null }) => {
    var resp = '<?xml version="'+v_sitemap.config.xml_version+'" encoding="'+v_sitemap.config.xml_encoding+'"?>';
    if (index === true) {
        resp += await v_sitemap.index_map({data: data, config: v_sitemap.config});
    } else {
        resp += await v_sitemap.sitemap({data: data, config: v_sitemap.config});
    }
    if (output !== null) await vFS.write(output, `${resp}`);
    return resp;
};

