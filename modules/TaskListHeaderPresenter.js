import iconArrowsCcw from '../src/icon-arrows-ccw.svg';

class TaskListHeaderPresenter {
  #completedCount;

  #view;

  constructor() {
    this.#view = document.createElement('div');
    this.#view.setAttribute('class', 'list-header');
    const title = document.createElement('h2');
    title.setAttribute('class', 'list-header');
    title.innerText = 'Demo';
    this.#view.appendChild(title);
    const listStats = document.createElement('div');
    listStats.setAttribute('class', 'list-stats');
    this.#view.appendChild(listStats);
    this.#completedCount = document.createElement('span');
    this.#completedCount.setAttribute('class', 'changes-count');
    listStats.appendChild(this.#completedCount);
    const icon = document.createElement('img');
    icon.setAttribute('class', 'icon-arrows-ccw');
    icon.setAttribute('src', iconArrowsCcw);
    listStats.appendChild(icon);
  }

  getView = () => this.#view;

  setCompletedCount = (count) => {
    this.#completedCount.innerText = count;
    if (count === 0) {
      this.#completedCount.classList.add('hidden');
    } else {
      this.#completedCount.classList.remove('hidden');
    }
  }
}
export default TaskListHeaderPresenter;