import { Task } from '../Task';
import styles from './tasks.module.css';

export function Tasks({ tasks, onDelete, onComplete }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;
  const completedTaskList = tasks.filter(task => task.isCompleted);
  const pendingTaskList = tasks.filter(task => task.isCompleted === false);

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed tasks</p>
          <span>{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>
      <div className={styles.floatcontainer}>
        <div className={styles.floatchild}>
          <p>Pending List</p>
          <hr/>
            <div className={styles.list}>
              {pendingTaskList.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
              ))}
            </div>
          </div>
        <div className={styles.floatchild}>
          <p>complete List</p>
          <hr/>
            <div className={styles.list}>
              {completedTaskList.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}