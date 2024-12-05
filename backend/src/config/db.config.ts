export const config = {
    HOST: "localhost",
    PORT: 3306,
    USER: "root",
    PASSWORD: "root",
    DB: "salaoescola_pi",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};


export const dialect = "mysql";