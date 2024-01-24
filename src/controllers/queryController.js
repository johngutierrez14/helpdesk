const { getPool } = require("../database/database");

module.exports.Querys = {
  getCategory: async (req, res) => {
    try {
      const pool = getPool();
      const connection = await pool.getConnection();
      const query = "SELECT * FROM t_categories WHERE status = 1;";
      const [categories] = await connection.query(query);
      connection.release();
      res.json({ success: true, categories: categories });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({
          success: false,
          message: "Error en la consulta de categorías",
        });
    }
  },
};
