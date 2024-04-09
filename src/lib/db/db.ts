import postgres from "postgres";

const CONNECTION_URL = "postgresql://user:password@127.0.0.1:5432/DB";

const sql = postgres(CONNECTION_URL);

export default sql;
