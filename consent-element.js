export class ConsentElement extends HTMLElement {
  static observedAttributes = ['given']

  constructor() {super()}

  #given = false
  get given() {
    return this.#given
  }

  handleClick = event => {
    if (this.getAttribute('given') !== null) return

    const t = event.target
    if (this.contains(t) && event.target.closest('button')) {
      this.setAttribute('given', '')
    }
  }

  consent() {
    const template = this.querySelector('template')
    const button = this.querySelector('button')

    template?.after(template.content.cloneNode(true))
    if (button) button.hidden = true;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'given' && newValue !== null) {
      this.consent()
      this.#given = true
    }
  }
  connectedCallback() {
    this.addEventListener('click', this.handleClick)
  }
  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick)
  }
}
