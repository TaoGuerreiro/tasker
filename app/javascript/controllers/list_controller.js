import { Controller } from "stimulus"
import StimulusReflex from 'stimulus_reflex'
import Sortable from "sortablejs"

export default class extends Controller {
  static targets = [ "input", "button", "tasks" ]
  connect () {
    StimulusReflex.register(this)

    Sortable.create(this.tasksTarget, {
      onEnd: (event) => this.reorder(event)
    })
  }

  reorder(event) {
    this.stimulate('Task#ordering', event.item, event.newIndex)
  }

  beforeCreateTask(element) {
    // console.log("coucouuuuuu")
    element.classList.add("form-disable")
    // element.innerText = 'wait....' => not working ?
    // this.inputTarget.innerText = 'wait....' => not working ?
    // this.buttonTarget.innerHTML = "WAIT"
  }

  createTaskSuccess(event) {
    this.inputTarget.reset()
  }

  createTaskError(element, name, error) {
    alert("Nop, ya une erreur")
  }



}

