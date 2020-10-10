const db = require('../db');
const prefix = require('../config').prefix;
let orm = {
    name: {
        type: db.STRING(20),
        comment: '产品名'
    },
    code: {
        type: db.STRING(20),
        comment: '编码'
    },
    valid: {
        type: db.BOOLEAN,
        comment: '是否有效'
    }
};
let table_name = prefix + 'product';
module.exports = db.defineModel(table_name, orm, {
    comment: '产品表',
});
module.exports.db = db;
module.exports.tb = table_name;
module.exports.keys = function () {
    return Object.keys(orm);
};