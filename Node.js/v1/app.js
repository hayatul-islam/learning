const http = require("http");

let users = [
  {
    id: 1,
    name: "Rahim",
  },
  {
    id: 2,
    name: "Karim",
  },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader("Content-Type", "application/json");

  if (url === "/users" && method === "GET") {
    res.end(JSON.stringify(users));
  } else if (url === "/users" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const newUser = JSON.parse(body);
      newUser.id = users?.length + 1;
      users.push(newUser);

      res.end(
        JSON.stringify({
          message: "User created",
          data: newUser,
        }),
      );
    });
  } else if (url.startsWith("/users/") && method === "PUT") {
    const id = parseInt(url.split("/")[2]);
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const updateData = JSON.parse(body);
      users = users.map((user) =>
        user?.id === id ? { ...user, ...updateData } : user,
      );
    });

    res.end(
      JSON.stringify({
        message: "User updated",
        users,
      }),
    );
  } else if (url.startsWith("/users/") && method === "DELETE") {
    const id = parseInt(url.split("/")[2]);

    users = users.filter((user) => user.id !== id);
    res.end(
      JSON.stringify({
        message: "User deleted",
        users,
      }),
    );
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Not found" }));
  }
});

server.listen(3000, () => {
  console.log("server running port:3000");
});
