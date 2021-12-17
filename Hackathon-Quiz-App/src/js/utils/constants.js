// import dotenv from 'dotenv'
// import path from 'path'

//Le fichier .env que nous utiliserons ici se trouve à la racine de notre mono repo
// const envPath = path.join(__dirname, './../../../');
// dotenv.config({ path: envPath + './.env' })

// console.log(import.meta.env.API_BASE_URL);

export const API_BASE_URL = import.meta.env.API_BASE_URL || "https://api.quizz-game.andriacapai.com/v1/" //'https://api.quizz-game.andriacapai.com/v1/' //"http://localhost:4200/v1/" 
