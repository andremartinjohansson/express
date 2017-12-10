/**
 * A module for database with MongoDB
 *
 * @module
 */
"use strict";

const mongo = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectID;

const mongoDB = (dsn, collection) => {
    const connect = async () => {
        const db  = await mongo.connect(dsn);
        const col = await db.collection(collection);

        return col;
    };

    return {
        async get(search = {}) {
            const col = await connect();

            return col.find(search).toArray();
        },
        async insert(item) {
            const col = await connect();

            return col.insert(item);
        },
        async update(id, item) {
            const col = await connect();

            return col.update({_id: ObjectId(id)}, {$set: item });
        },
        async delete(id) {
            const col = await connect();

            return col.remove({_id: ObjectId(id)});
        },
        async reset() {
            const col = await connect();

            await col.deleteMany({});
            await col.insert({
                "make": "Honda",
                "model": "Civic",
                "submodel": "Hatchback",
                "year": "2012"
            });
            await col.insert({
                "make": "Ford",
                "model": "Focus",
                "submodel": "ST-Line",
                "year": "2015"
            });
            await col.insert({
                "make": "Mazda",
                "model": "Mazda3",
                "submodel": "Sedan",
                "year": "2017"
            });

            return col.find({}).toArray();
        },
        async close() {
            const db  = await mongo.connect(dsn);

            await db.close();
        }
    };
};

module.exports = { mongoDB };
