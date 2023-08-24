import { connect } from "mongoose";

const DB_URI = `${process.env.DB_URI}`;

const dbInit = async () => {
  try {
    const db = await connect(DB_URI);
    console.log("Database is connected to", db.connection.db.databaseName);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

export default dbInit;
