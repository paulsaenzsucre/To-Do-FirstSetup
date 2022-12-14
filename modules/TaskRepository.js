import Task from './Task.js';
import TaskStorage from './TaskStorage.js';
import User from './User.js';

class TaskRepository {
  #tasks;

  #storage;

  #user;

  constructor(user = null, storageName = null) {
    this.#user = user === null
      ? new User('Guess', 'guess')
      : user;
    this.#storage = storageName === null
      ? new TaskStorage(this.#user, 'default')
      : new TaskStorage(this.#user, storageName);
    this.#tasks = this.#storage.load();
    this.#user = user;
  }

  updateStorage = () => this.#storage.save(this.#tasks);

  addTask = (description) => {
    const task = new Task(this.#newIndex(), description);
    this.#tasks.push(task);
    this.#storage.save(this.#tasks);
    return task;
  }

  removeTask = (task) => {
    const newArray = this.#tasks.filter((element) => task !== element);
    this.#updateTask(newArray);
  }

  allTasks = () => this.#tasks;

  getCompletedCount = () => this.#tasks.filter((task) => task.completed === true).length;

  removeAllCompleted = () => {
    const newArray = this.#tasks.filter((element) => element.completed !== true);
    this.#updateTask(newArray);
  }

  #orderIndexs = () => {
    this.#tasks.sort((a, b) => a.index - b.index);
    for (let i = 0; i < this.#tasks.length; i += 1) {
      this.#tasks[i].index = i;
    }
  }

  #newIndex = () => this.#tasks.length;

  #updateTask = (newArray) => {
    this.#tasks = newArray;
    this.#orderIndexs();
    this.#storage.save(this.#tasks);
  }
}

export default TaskRepository;