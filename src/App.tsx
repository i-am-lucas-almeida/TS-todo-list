import { useState } from 'react';
import { ITask } from './interfaces/task';

import { NavBar, Footer } from './components/home';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import Modal from './components/modal';

const App = () => {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {

    setTaskList(

      taskList.filter(item => {

        return item.id !== id;

      })

    );

  }

  const hideOrShowModal = (display: boolean) => {

    const modal = document.getElementById('modal');

    display ? modal?.classList.remove('hide') :
      modal?.classList.add('hide');

  }

  const editTask = (task: ITask): void => {

    hideOrShowModal(true);
    setTaskToUpdate(task);

  }

  const updateTask = (id: number, task: string, difficulty: number) => {

    const updateTask: ITask = { id, task, difficulty };

    const updatedItens = taskList.map((item) => {

      return item.id === updateTask.id ? updateTask : item;

    })

    setTaskList(updatedItens);

    hideOrShowModal(false);

  }

  return (

    <div className="container">

      <Modal
        children={<TaskForm
          btnText='Editar tarefa'
          taskList={taskList}
          taskToUpdate={taskToUpdate}
          handleUpdate={updateTask}
        />}
      />

      <NavBar />

      <div className="tasks__container">

        <h3>O que você vai fazer?</h3>

        <TaskForm
          btnText='Criar tarefa'
          taskList={taskList}
          setTaskList={setTaskList}
        />

        <TaskList
          taskList={taskList}
          handleDelete={deleteTask}
          handleEdit={editTask}
        />

      </div>

      <Footer />

    </div>

  )

}

export default App;
