import app from "./app";
import dbInit from "./db/mongo";

const PORT = process.env.PORT || 3001;


dbInit().then();
app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
