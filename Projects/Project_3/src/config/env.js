import { config } from 'dotenv';
config();

const envs = {
    port: process.env.PORT || 3000,
}

export {envs};