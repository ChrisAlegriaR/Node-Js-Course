import { config } from 'dotenv';
config();

const envs = {
    port: process.env.PORT || 3000,
    mongo_url: process.env.MONGO_URL,
    mongo_db: process.env.MONGO_DB
}

export default envs;