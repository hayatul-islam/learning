const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const userRouters = async (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/users" && method === "GET") {
    return getUsers(req, res);
  }

  if (url === "/users" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      createUser(req, res, body);
    });
  }

  if (url.startsWith("/user/") && method === "PUT") {
    const id = url.split("/")[2];
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      updateUser(req, res, id, body);
    });
  }

  if (url.startsWith("/users/") && method === "DELETE") {
    const id = url.split("/")[2];
    deleteUser(req, res, id);
  }
};

module.exports = userRouters;
