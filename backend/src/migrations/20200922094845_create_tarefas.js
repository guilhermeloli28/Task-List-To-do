exports.up = function(knex) {
    return knex.schema.createTable('tarefas', function(t) {
        t.increments('id').primary();
        t.string('tarefa').notNull();
        t.string('descricao').notNull();
        t.date('data').notNull();
        t.boolean('done').notNull();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tarefas');
};
