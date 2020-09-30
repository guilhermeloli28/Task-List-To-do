module.exports = (app) => {
    const addTask = (req, res) => {
        
        if(!req.body.tarefa.trim()) {
            res.status(400).send('Tarefa é um campo obrigatório');
        }

        app.db('tarefas')
            .insert(req.body)
            .then(_ => res.status(204).json('Tarefa adicionada.'))
            .catch(err => res.status(400).json(err))

    }

    const getTasks = (req, res) => {

        app.db('tarefas')   
            .select(
                'id',
                'tarefa',
                'descricao',
                'data',
                'done'
            )
            .then(tasks => res.status(200).json(tasks))
            .catch(err => res.status(400).json(err))
            
    }

    const deleteTask = (req, res) => {
        
        app.db('tarefas')
            .where({ id: req.params.id })
            .del()
            .then(taskDeleted => {
                if(taskDeleted > 0) {
                    res.status(204).send()
                } else {
                    res.status(400).json('Tarefa não encontrada')
                }
            })
            .catch(err => res.status(400).json(err))

    }

    const updateTask = (req, res) => {

        if(!req.params.id) {
            res.status(400).send('Id não encontrado')
        }

        app.db('tarefas')
            .where({id: req.params.id})
            .update({
                tarefa: req.body.tarefa,
                descricao: req.body.descricao,
                data: req.body.data
            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))

    }

    const updateDone = (req, res) => {

        if(!req.params.id) {
            res.status(400).send('Id não encontrado')
        }

        app.db('tarefas')
            .where({ id: req.params.id })
            .update({ done: true })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
        
    }

    const updateDoneAsFalse = (req, res) => {
        if(!req.params.id) {
            res.status(400).send('Id não encontrado')
        }

        app.db('tarefas')
            .where( {id: req.params.id} )
            .update( {done: false} )
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    return { addTask, getTasks, deleteTask, updateTask, updateDone, updateDoneAsFalse };
};