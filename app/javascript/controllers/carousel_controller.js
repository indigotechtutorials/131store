import { Controller } from "stimulus"

let totalImages

export default class extends Controller {
  static targets = ["image"]

    initialize() {
      totalImages = this.imageTargets.length;
      console.log(totalImages);
      this.showImage(0);
    }

    nextImage(event) {
      this.hideImage(event);
      let nextI = this.index + 1
      if (document.getElementById(`image-${nextI}`) !== null) {
        this.showImage(nextI)
      } else {
        this.initialize();
      }
    }

    previousImage() {
      this.hideImage(event);
      let prevI = this.index - 1
      if (document.getElementById(`image-${prevI}`) !== null) {
        this.showImage(prevI)
      } else {
        console.log(totalImages);
        this.showImage(totalImages)
      }
    }

    showImage(index) {
      console.log(index);
      this.index = index;
      this.imageTargets.forEach((el, i) => {
        if (index == i) {
          el.classList.toggle("hidden");
        }
      })
    }

    hideImage(event) {
      event.srcElement.parentNode.parentNode.classList.toggle("hidden");
    }
}
