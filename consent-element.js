export class ConsentElement extends HTMLElement {
  static observedAttributes = ['given']
  #given = false

  get given() {
    return this.#given
  }

  constructor() {super()}

  handleClick = event => {
    if (this.getAttribute('given') !== null) return

    const t = event.target
    if (this.contains(t) && event.target.closest('button')) {
      this.setAttribute('given', '')
    }
  }

  consent() {
    const template = this.querySelector('template')
    template.after(template.content.cloneNode(true))
    this.querySelector('button').hidden = true
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'given' && newValue !== null) {
      this.consent()
      this.#given = true
    }
  }
  connectedCallback() {
    this.addEventListener('click', this.handleClick, {once: true})
  }
  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick, {once: true})
  }
}
