class TaskFormPresenter {
  #input;

  #view;

  constructor() {
    this.#view = document.createElement('form');
    this.#input = document.createElement('input');
    this.#input.setAttribute('placeholder', 'Add to your list...');
    this.#input.setAttribute('id', 'new-item');
    this.#input.setAttribute('type', 'text');
    this.#view.appendChild(this.#input);
    const submit = document.createElement('input');
    submit.setAttribute('class', 'icon-return');
    submit.setAttribute('id', 'submit-new-item');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', '');
    submit.setAttribute('title', 'click this or press enter to submit');
    this.#view.appendChild(submit);
    this.#view.addEventListener('submit', this.#submitTask);
  }

  getView = () => this.#view;

  cleanForm = () => {
    this.#input.value = '';
  }

  #submitTask = () => {
    const newTask = new CustomEvent('newTask', {
      detail: this.#input.value,
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    this.#view.dispatchEvent(newTask);
  }
}
export default TaskFormPresenter;