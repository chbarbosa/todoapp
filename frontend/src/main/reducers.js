import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'tarefa 1',
            done: true
        }, {
            _id: 2,
            description: 'tarefa 2',
            done: false
        }, {
            _id: 3,
            description: 'tarefa 3',
            done: false
        }]
    })
});

export default rootReducer;