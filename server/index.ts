import { app, server } from "./app";
import sequelize from "./database/connection";

const PORT: number = app.get('port');

console.log(PORT);

sequelize.sync()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`the server is running on http://localhost:${PORT}`);
        });
    })
    .catch(() => console.log('error on synchronizing db'));