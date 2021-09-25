const DATA = {
    create: `
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
    RETURNING id;
    `,
    select: `SELECT * FROM characters;`
}

export { DATA };