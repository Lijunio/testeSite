const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const METABASE_SITE_URL = "https://adm.telessaude.hc.ufmg.br";
const METABASE_SECRET_KEY = "2a8605056ee1d091911b4c3a21a9df91081092e53889704787584ce649596e2d";

app.get("/", (req, res) => {
  const payload = {
    resource: { dashboard: 144 },
    params: {},
    exp: Math.round(Date.now() / 1000) + (10 * 60) // 10-minute expiration
  };

  const token = jwt.sign(payload, METABASE_SECRET_KEY);

  res.send(token);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
