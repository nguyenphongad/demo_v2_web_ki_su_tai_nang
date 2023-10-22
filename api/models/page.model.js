const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const TableSchema = require('./tables.schema');

const [DOC, COL] = ['page', 'pages'];

const PageSchema = new Schema(
    {
        pageName: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true
        },
        tables: [TableSchema]
    },
    {
        collection: COL,
        timestamps: true
    }
);

const Page = model(DOC, PageSchema);

module.exports = Page;
