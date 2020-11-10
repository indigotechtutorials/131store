import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["viewItemButton"]
  connect() {
    console.log("hey im here")
  }

  showButton(event) {
    setTimeout(() => {
      this.viewItemButtonTargets.forEach((el, i) => {
        if (el.parentNode.dataset.id == event.srcElement.parentNode.dataset.id) {
          el.classList.toggle("hidden");
        }
      })
    }, 100);
  }
}
