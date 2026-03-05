const db = require("../db/db");

exports.getUsers = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.end(JSON.stringify(rows));
  } catch (error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: error.message }));
  }
};

exports.createUser = async (req, res, body) => {
  try {
    const data = JSON.parse(body);
    await db.query("INSET INTO users(name,email) VALUES (?,?)", [
      data.name,
      data.email,
    ]);

    res.end(JSON.stringify({ message: "User created" }));
  } catch (error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: error.message }));
  }
};

exports.updateUser = async (req, res, id, body) => {
  try {
    const data = JSON.parse(body);

    await db.query("UPDATE users SET name=?,email=? WHERE id=?", [
      data.name,
      data.email,
      id,
    ]);

    res.end(JSON.stringify({ message: "User updated" }));
  } catch (error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: error.message }));
  }
};

exports.deleteUser = async (req, res, id) => {
  try {
    await db.query("DELETE FROM users WHERE id=?", [id]);

    res.end(JSON.stringify({ message: "User deleted" }));
  } catch (error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: error.message }));
  }
};
