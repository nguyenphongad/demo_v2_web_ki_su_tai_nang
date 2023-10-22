const mongoose = require('mongoose');
const { Schema } = mongoose;

const TableSchema = new Schema({
    tableName: {
        type: String,
        required: true
    },
    tableDescription: {
        type: String
    },
    rowTitleList: {
        type: Schema.Types.Array,
        default: []
    },
    rowValueList: { type: Schema.Types.ObjectId, ref: 'row' }
});

module.exports = TableSchema;
