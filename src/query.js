const DATA = {
    create: `
    DROP TABLE IF EXISTS characters;
    CREATE TABLE characters(
        id serial primary key,
        name varchar(150) not null,
        data jsonb not null
    );
    `,
    insert: `
    INSERT INTO characters (
        name,
        data
    ) VALUES ( $1, $2 )
    RETURNING *;
    `,
    select: `SELECT * FROM characters;`
}

export { DATA };