const db = require('../db');
const prefix = require('../config').prefix;
let orm = {
    product: {
        type: db.ID,
        comment: '产品ID'
    },
    lastwarehousing: {
        type: db.INTEGER,
        comment: '上月入库'
    },
    warehousing: {
        type: db.INTEGER,
        comment: '入库'
    },
    stock: {
        type: db.INTEGER,
        comment: '库存'
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
let table_name = prefix + 'report';
module.exports = db.defineModel(table_name, orm, {
    comment: '库存表',
});
module.exports.db = db;
module.exports.tb = table_name;
module.exports.keys = function () {
    return Object.keys(orm);
};