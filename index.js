const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const METABASE_SITE_URL = "https://adm.telessaude.hc.ufmg.br";
const METABASE_SECRET_KEY = "2a8605056ee1d091911b4c3a21a9df91081092e53889704787584ce649596e2d";

app.get("/", (req, res) => {
  const payload = {
    resource: { dashboard: 144 },
    params: {},
    exp: Math.round(Date.now() / 1000) + 600 // 10 minute expiration
  };

  const token = jwt.sign(payload, METABASE_SECRET_KEY);
  const iframeUrl = METABASE_SITE_URL + "/embed/dashboard/" + token + "#bordered=true&titled=true";

  const html = `
    <html>
      <head>
        <title>Metabase Dashboard</title>
      </head>
      <body>
        <iframe src="${iframeUrl}" frameborder="0" width="800" height="600" allowtransparency></iframe>
      </body>
    </html>
  `;

  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
