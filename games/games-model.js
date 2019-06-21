const database = require("../data/knexConfig");

module.exports = {
  add,
  // findById,
  find,
  findBy,
  destroy
};

const table = database("games");

function find() {
  return table.select("title", "genre", "releaseYear", "id");
}

function findBy(filter) {
  return table.where(filter);
}

// function findById(id) {
//   return table.where({ id });
// }

function add(game) {
  return table.insert(game).then(titles => {
    const [title] = titles;
    return findBy(title);
  });
}

function destroy(id) {
  return table.where(id).del();
}
