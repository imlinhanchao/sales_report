const db = require('../db');
const prefix = require('../config').prefix;
let orm = {
    product: {
        type: db.ID,
        comment: '产品ID'
    },    
    name: {
        type: db.STRING(20),
        comment: '产品名'
    },
    code: {
        type: db.STRING(20),
        comment: '编码'
    },
    warehousing: {
        type: db.INTEGER,
        comment: '入库'
    },
    sold: {
        type: db.INTEGER,
        comment: '售出'
    },
    price: {
        type: db.INTEGER,
        comment: '单价'
    },
    year: {
        type: db.INTEGER,
        comment: '年份'
    },
    month: {
        type: db.INTEGER,
        comment: '月份'
    }
};
let table_name = prefix + 'stock';
module.exports = db.defineModel(table_name, orm, {
    comment: '库存表',
});
module.exports.db = db;
module.exports.tb = table_name;
module.exports.keys = function () {
    return Object.keys(orm);
};