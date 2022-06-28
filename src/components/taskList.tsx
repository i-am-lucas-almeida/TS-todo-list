import * as React from 'react';

import { ITask } from '../interfaces/task';

import { MdDeleteForever } from 'react-icons/md';
import { GrEdit } from 'react-icons/gr';

export interface Props {

  taskList: ITask[];
  handleDelete(id: number): void
  handleEdit(task: ITask): void
}

export default function TaskList({ taskList, handleDelete, handleEdit }: Props) {

  return (

    <div className='taskList'>

      <h3>Suas tarefas:</h3>

      {taskList.length > 0 ? (

        taskList.map((item) => (

          <div key={item.id} className='task'>

            <div className='task__text'>

              <p>{item.task}</p>
              <small>
                <b>Dificuldade: {item.difficulty}</b>
              </small>

            </div>

            <div className='task__actions'>

              <GrEdit
                title='Editar tarefa'
                onClick={() => { handleEdit(item) }}
              />

              <MdDeleteForever
                className='delete'
                title='Deletar tarefa'
                onClick={() => { handleDelete(item.id) }}
              />

            </div>

          </div>

        ))

      ) : (

        <p>Não há tarefas!</p>

      )}

    </div>

  );

}
