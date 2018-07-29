const secrets = require("./src/secrets")
import env from 'node-env-file';
env(__dirname + '/env/.env.local', { overwrite: true });

module.exports = {
    "db": {
        "dialect": secrets.get("DB_DIALECT") || process.env.DB_DIALECT,
        "host": secrets.get("DB_HOST") || process.env.DB_HOST,
        "name": secrets.get("DB_NAME") || process.env.DB_NAME,
        "pass": secrets.get("DB_PASS") || process.env.DB_PASS,
        "user": secrets.get("DB_USER") || process.env.DB_USER,
    },
    "jwtSecret": secrets.get("JWT_SECRET") || process.env.JWT_SECRET,
    "apiPort": secrets.get("API_PORT") || 3000,
    "origin": secrets.get("ORIGIN") || "http://localhost:8080",
};