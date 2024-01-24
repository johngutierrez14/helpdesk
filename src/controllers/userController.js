const bcrypt = require("bcrypt");
const { promisify } = require("util");

const { format } = require("date-fns");
const { Config } = require("../config/config");

const { getPool } = require("../database/database");

module.exports.Users = {
  register: async (req, res) => {
    try {
      const pool = getPool();
      const connection = await pool.getConnection();

      const now = new Date();
      const timeZone = "America/Bogota";
      const password = req.body.password;

      const name = req.body.name;
      const last_name = req.body.last_name;
      const user = req.body.user;
      const passwordHash = await bcrypt.hash(password, 8);
      const rol = req.body.rol;
      const createdAt = format(now, "yyyy-MM-dd HH:mm:ss", { timeZone });
      const updatedAt = format(now, "yyyy-MM-dd HH:mm:ss", { timeZone });

      // Utiliza promesas en lugar de callbacks
      const results = await connection.query("INSERT INTO users SET ?", {
        name,
        last_name,
        user,
        password: passwordHash,
        rol,
        status: 1,
        creationDate: createdAt,
        updateDate: updatedAt,
      });

      // Liberar la conexión después de realizar la consulta
      connection.release();

      // Redirigir después de liberar la conexión
      return res.redirect("/register-user");
    } catch (error) {
      console.error("Error registering user:", error);
      return res
        .status(500)
        .send({ success: false, message: "Error registering user" });
    }
  },
};
