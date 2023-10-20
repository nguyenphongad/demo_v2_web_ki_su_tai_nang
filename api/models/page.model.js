const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const tableSchema = require('./tables.schema');

const [DOC, COL] = ['page', 'pages'];

const pageSchema = new Schema(
    {
        pageName: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true
        },
        tables: [tableSchema]
    },
    {
        collection: COL,
        timestamps: true
    }
);

const Page = model(DOC, pageSchema);

module.exports = Page;
