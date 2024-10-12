// import { drizzle } from "drizzle-orm/postgres-js";
// import * as schema from "./schema";
// import postgres from "postgres";
// import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";

// declare global {
//   // eslint-disable-next-line no-var -- only var works here
//   var db: PostgresJsDatabase<typeof schema> | undefined;
// }
// let db: PostgresJsDatabase<typeof schema>;

// if (process.env.NODE_ENV === "production") {
//   db = drizzle(postgres(process.env.DATABASE_URL!), { schema });
// } else {
//   if (!global.db) {
//     global.db = drizzle(postgres(process.env.DATABASE_URL!), { schema });
//   }

//   db = global.db;
// }

// export { db };


import { neon } from '@neondatabase/serverless';
import { drizzle, NeonHttpDatabase } from 'drizzle-orm/neon-http';
import * as schema from "./schema";

declare global {
  var db: NeonHttpDatabase<typeof schema> | undefined;
}
let db: NeonHttpDatabase<typeof schema>;

if (process.env.NODE_ENV === "production") {
  db = drizzle(neon("postgresql://devfinderDB_owner:tCXif8dQ6PbV@ep-morning-silence-a5fmjrlo.us-east-2.aws.neon.tech/devfinderDB?sslmode=require"), { schema })
} else {
  if (!global.db) {
    global.db = drizzle(neon("postgresql://devfinderDB_owner:tCXif8dQ6PbV@ep-morning-silence-a5fmjrlo.us-east-2.aws.neon.tech/devfinderDB?sslmode=require"), { schema });
  }
  db = global.db;
}
export { db };