import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import { ITask } from '../interfaces/task';

interface Props {

  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  taskToUpdate?: ITask | null
  handleUpdate?(id: number, task: string, difficulty: number): void
}

const TaskForm = ({ btnText, taskList, setTaskList, taskToUpdate, handleUpdate }: Props) => {

  const [id, setId] = useState<number>(0);
  const [task, setTask] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(1);

  useEffect(() => {

    if (taskToUpdate) {

      setId(taskToUpdate.id);
      setTask(taskToUpdate.task);
      setDifficulty(taskToUpdate.difficulty);

    }

  }, [taskToUpdate]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.name === 'title') {

      setTask(e.target.value);

    } else {

      setDifficulty(parseInt(e.target.value));

    }

  }

  const addTask = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (handleUpdate) {

      handleUpdate(id, task, difficulty);

    } else {

      if (task && difficulty && difficulty !== 0) {

        const id = Math.floor(Math.random() * 1000);

        const newTask: ITask = { id, task, difficulty };

        setTaskList!([...taskList, newTask]);

        setTask('');
        setDifficulty(1);

      }

    }

  }

  return (

    <form className='form' onSubmit={addTask}>

      <div>

        <label htmlFor="title">Título da tarefa:</label>

        <input
          type="text"
          name='title'
          value={task}
          placeholder='Digite aqui a tarefa'
          onChange={handleChange}
        />

      </div>

      <div>

        <label htmlFor="difficulty">Dificuldade da tarefa:</label>

        <input
          type="number"
          name='difficulty'
          value={difficulty}
          min='1'
          max='10'
          placeholder='Nível de dificuldade'
          onChange={handleChange}
        />

      </div>

      <input
        type="submit"
        value={btnText}
        className='button'
      />

    </form>

  );

}

export default TaskForm;