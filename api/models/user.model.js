const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const [DOC, COL] = ['user', 'users'];

const userSchema = new Schema(
    {
        // studentId: {
        //     type: String,
        //     required: true
        // },
        fullName: {
            type: String,
            required: true
        }
        // majors: {
        //     type: String,
        //     required: true
        // },
        // email: {
        //     type: String,
        //     required: true
        // },
        // phone: {
        //     type: String,
        //     required: true
        // },
        // birthday: Schema.Types.Date
    },
    {
        collection: COL,
        timestamps: true
    }
);

const User = model(DOC, userSchema);

module.exports = User;
