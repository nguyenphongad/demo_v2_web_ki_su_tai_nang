const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const [DOC, COL] = ['row', 'rows'];

const rowSchema = new Schema(
    {
        page: {
            type: Schema.Types.ObjectId,
            ref: 'page'
        },
        table: {
            type: Schema.Types.ObjectId,
            ref: 'page.tables'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        content: [
            {
                type: String
            }
        ]
    },
    {
        collection: COL,
        timestamps: true
    }
);

const Row = model(DOC, rowSchema);

module.exports = Row;
