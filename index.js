const express = require('express');
require('dotenv').config();

const app = express();
const port = 3010;

const isAdmin = process.env.IS_ADMIN === 'true';

if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}

app.get('/', (req, res) => {
  if (isAdmin) {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}.`));