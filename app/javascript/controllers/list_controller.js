import { Controller } from "stimulus"
import StimulusReflex from 'stimulus_reflex'

export default class extends Controller {
  static targets = [ "input", "button" ]
  connect () {
    StimulusReflex.register(this)
    console.log("list controller")
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

