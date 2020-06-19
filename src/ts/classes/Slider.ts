import { el } from "./DOMUtils"

export interface ISlideConfig {
  title: string
  image: string
  price: number
}

function removeClass(el: HTMLElement, className: string) {
  el.className = el.className.replace(new RegExp(`\s*${className}`), '')
}
function addClass(el: HTMLElement, className: string) { 
  el.className = `${el.className} ${className}`
}

export default class Slider{
  private element: HTMLDivElement
  private currentSlideIdx: number = 0
  private stage: HTMLDivElement
  private slides: Array<HTMLDivElement> = []
  private dots: Array<HTMLDivElement> = []
  constructor(selector: string, items: Array<ISlideConfig>){
    this.element = document.querySelector(selector) || el('div') // always return a div even if the target isnt found
    items.forEach((item, idx) => {
      this.slides.push(el('div', {
        attrs: {
          class: `slider__item`,
          style: `width: ${100/items.length}%`
        },
        content: `<h5 class="slider__item-title">${item.title}</h5>
<img src="${item.image}"/>
<h5 class="slider__item-price">$${(item.price/100).toFixed(2)}</h5>`
      }))
      const dot =  el('div', {
        attrs: {
          class: `slider__control slider__dot${(idx == 0 ? ' slider__dot-active' : '')}`
        }
      })
      dot.addEventListener('click', () => this.goToSlide(idx))
      this.dots.push(dot)
    })
    this.stage = el('div', {
      attrs: {
        class: "slider__stage",
        style: `width: ${items.length*100}%`
      },
      children: this.slides
    })
    this.element.appendChild(el('div', {
      attrs: {
        class: "slider__stage-wrapper"
      },
      children: [this.stage]
    }))

    const prev = el('div', {
      attrs: {
        class: "slider__control slider__prev",
      },
      content: '<span>Prev</span>'
    })
    prev.addEventListener('click', () => this.prev())

    const next = el('div', {
      attrs: {
        class: "slider__control slider__next",
      },
      content: '<span>Next</span>'
    })
    next.addEventListener('click', () => this.next())

    const controls = el('div', {
      attrs: {
        class: "slider__controls"
      },
      children: [
        prev,
        el('div', {
          attrs: {
            class: "slider__dots"
          },
          children: this.dots
        }),
        next
      ]
    })
    this.element.appendChild(controls)
  }
  public goToSlide(idx: number){
    if(idx >= this.slides.length){
      idx = 0
    } else if(idx < 0) {
      idx = this.slides.length - 1
    }
    this.stage.style.transform = `translate3D(${idx/this.slides.length * -100}%, 0, 0)`
    removeClass(this.dots[this.currentSlideIdx], "slider__dot-active")
    this.currentSlideIdx = idx
    addClass(this.dots[this.currentSlideIdx], "slider__dot-active")
  }
  public next() {
    this.goToSlide(this.currentSlideIdx + 1)
  }
  public prev() {
    this.goToSlide(this.currentSlideIdx - 1)
  }
}