class PhotoGrid extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.images = []

    this.perPage = 12
    this.endpoint = `https://photo.jordanh.net/ws.php?format=json&method=pwg.categories.getImages&per_page=${this.perPage}`

    this.fetchPhotos()
  }

  fetchPhotos () {
    fetch(this.endpoint)
      .then(d => d.json())
      .then(d => (this.images = d.result.images))
      .then(() => this.render())
  }

  extractImages(data) {
    this.images = data.result.images
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowRoot.innerHTML = `
      <style type="text/css">
        ul.photo-grid {
          max-width: 420px;
          margin: 0;
          padding-left: 0;
        }
      </style>

      <ul class="photo-grid">
        ${this.images.map(i => (
          `<j-photo
              data-name=${i.name}
              data-thumbnail=${i.derivatives.square.url}
              data-link=${i.page_url}
            ></j-photo>`
        )).join('')}
      </ul>
    `
  }
}

class Photo extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render ()  {
    const name = this.getAttribute('data-name')
    const thumbnail = this.getAttribute('data-thumbnail')
    const link = this.getAttribute('data-link')

    this.shadowRoot.innerHTML = `
      <style type="text/css">
        li {
          list-style: none;
          display: inline-block;
        }

        img {
          height: 100px;
          width: 100px;
        }
      </style>

      <li class="photo">
        <a href="${link}" title="${name}">
          <img src="${thumbnail}" alt="${name}">
        </a>
      </li>
    `
  }
}

customElements.define( 'j-photo-grid', PhotoGrid )
customElements.define( 'j-photo', Photo )
