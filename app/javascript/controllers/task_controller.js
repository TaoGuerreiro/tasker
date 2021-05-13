import { Controller } from "stimulus"
import StimulusReflex from 'stimulus_reflex'

export default class extends Controller {
    connect () {
        console.log("coucou");
        StimulusReflex.register(this)
    }

    delete(event) {
        const confirmation = confirm("Are you sure?")
        if (confirmation) {
           this.stimulate('TaskReflex#delete', event.currentTarget) 
        } else {
    
        }
      }
}


