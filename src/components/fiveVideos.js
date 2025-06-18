class FiveVideos extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        .five-videos-container {
          display: flex;
          gap: 20px;
          justify-content: space-between;
          margin: 16px 0;
          flex-wrap: nowrap;
        }
        .five-video {
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.04);
          width: 350px;
          padding: 0 0 16px 0;
          text-align: left;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.2s;
          overflow: hidden;
        }
        .five-video:hover {
          box-shadow: 0 6px 24px rgba(0,0,0,0.5);
        }
        .five-video iframe {
          width: 100%;
          height: 200px;
          border: none;
          display: block;
        }
        .five-video-title {
          font-size: 20px;
          font-weight: 700;
          margin: 16px 16px 4px 16px;
          color: #333;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .five-video-description {
          font-size: 15px;
          color: #333;
          margin: 0 16px 4px 16px;
          text-align: left;
        }
        @media (max-width: 900px) {
          .five-video {
            width: 45%;
            margin-bottom: 12px;
          }
        }
        @media (max-width: 600px) {
          .five-video {
            width: 100%;
          }
        }
      </style>
      <div class="five-videos-container"></div>
    `;
  }

  async connectedCallback() {
    let data = [];
    if (this.hasAttribute('src')) {
      try {
        const res = await fetch(this.getAttribute('src'));
        data = await res.json();
      } catch (e) {
        data = [];
      }
    } else if (this.hasAttribute('data-videos')) {
      try {
        data = JSON.parse(this.getAttribute('data-videos'));
      } catch (e) {
        data = [];
      }
    } else {
      data = this.defaultVideos();
    }
    const container = this.shadowRoot.querySelector('.five-videos-container');
    container.innerHTML = data.slice(0, 5).map(video => `
      <div class="five-video">
        <iframe src="https://www.youtube.com/embed/${this.extractVideoId(video.youtube_url)}" allowfullscreen></iframe>
        <div class="five-video-title">${video.title}</div>
        <div class="five-video-description">${video.description}</div>
      </div>
    `).join('');
  }

  extractVideoId(url) {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  }

  defaultVideos() {
    return [
      { youtube_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', title: 'Video 1', description: 'Description 1' },
      { youtube_url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ', title: 'Video 2', description: 'Description 2' },
      { youtube_url: 'https://www.youtube.com/watch?v=l482T0yNkeo', title: 'Video 3', description: 'Description 3' },
      { youtube_url: 'https://www.youtube.com/watch?v=V-_O7nl0Ii0', title: 'Video 4', description: 'Description 4' },
      { youtube_url: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g', title: 'Video 5', description: 'Description 5' }
    ];
  }
}

customElements.define('five-videos', FiveVideos);