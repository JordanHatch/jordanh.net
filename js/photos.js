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
        :host {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        li {
          list-style: none;
          flex: 1;
        }

        a {
          display: block;
          line-height: 0;
        }

        img {
          height: 100%;
          width: 100%;
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

function renderPhotoGrid(response) {
  console.dir(response)

  if (typeof(response) !== 'undefined') {
    const limit = 20

    const grid = document.querySelector('[data-module=photos]')
    const items = response.items.slice(0, limit)

    items.forEach((item) => {
      console.dir(item)

      const photo = document.createElement('j-photo')
      const thumbnail = (item.media.m).replace("_m.jpg", "_s.jpg");

      photo.setAttribute('class', 'photo-grid__photo')
      photo.setAttribute('data-name', item.title)
      photo.setAttribute('data-thumbnail', thumbnail)
      photo.setAttribute('data-link', item.link)

      grid.append(photo)
    })
  }
}

(function() {

  const fetchPhotos = function () {
    const callback = 'renderPhotoGrid'
    const url = 'https://www.flickr.com/services/feeds/photos_public.gne?format=json&id=19860395%40N08&per_page=16&jsoncallback=renderPhotoGrid'

    const tag = document.createElement('script')
    tag.setAttribute('src', url)
    tag.setAttribute('type', 'text/javascript')

    document.body.append(tag)
  }

  document.addEventListener('DOMContentLoaded', fetchPhotos)

})()

customElements.define( 'j-photo', Photo )
