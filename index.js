// you will need to install via 'npm install jsonwebtoken' or in your package.json

var jwt = require("jsonwebtoken");

var METABASE_SITE_URL = "https://adm.telessaude.hc.ufmg.br";
var METABASE_SECRET_KEY = "2a8605056ee1d091911b4c3a21a9df91081092e53889704787584ce649596e2d";

var payload = {
  resource: { dashboard: 144 },
  params: {},
  exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
};
var token = jwt.sign(payload, METABASE_SECRET_KEY);

var iframeUrl = METABASE_SITE_URL + "/embed/dashboard/" + token + "#theme=night&bordered=true&titled=true";
