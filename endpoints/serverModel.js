const db = require("../config");

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

function insert(newname) {
    return db("tableName")
        .insert(newname, "id")
        .then(([id]) => {
            return findById(id);
        });
}

async function update(id, changes) {
    return null;
}

function remove(id) { 
    return db('tableName')
    .where('id', Number(id))
    .del();
}

function getAll() {
    return db("tableName");
}

function findById(id) {
    return db("tableName").where({ id }).first();
}


