const express = require("express");
const cors = require("cors");
const app = express();
const { sequelize } = require("./models");
const authRoutes = require("./routes/auth");
const chargerRoutes = require("./routes/chargers");
const authMiddleware = require("./middleware/auth");

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/chargers", authMiddleware, chargerRoutes);

const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
