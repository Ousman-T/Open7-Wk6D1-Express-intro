const app = require('./src/app');
const PORT = 3000;
const {db} = require('./db/connection');


app.listen(PORT, async () => {
    await db.sync();
    console.log('Database is Synced!');
    console.log(`Server is running on https://localhost:${PORT}`);
});
