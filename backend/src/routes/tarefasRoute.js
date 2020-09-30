module.exports = (app) => {

    app.route('/tarefas')
        .post(app.api.tarefas.addTask)
        .get(app.api.tarefas.getTasks);

    app.route('/tarefas/:id')
        .delete(app.api.tarefas.deleteTask)
        .put(app.api.tarefas.updateTask);

    app.route('/tarefas/done/:id')
        .put(app.api.tarefas.updateDone)   
        
    app.route('/tarefas/doneAsFalse/:id')
        .put(app.api.tarefas.updateDoneAsFalse);
        
};