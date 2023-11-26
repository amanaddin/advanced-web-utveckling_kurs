let songlista = '';
data.forEach(singerData => {
  for (const singerName in singerData) {
    const songs = singerData[singerName];
    songlista += `
    <div class="choose-songs">
      <div class="column-1">
        <p class="singer">${singerName}</p>
        <hr class="line">
      </div>
      <div>
        <form>`;

    songs.forEach(song => {

      songlista += `
      <div class="form-check">
        <input type="checkbox" id="${song.songTitle.split(' ')[0]}" name="${song.songTitle.split(' ')[0]}" class="form-check-input" ${song.songTitle === "Starkare" ? 'disabled="disabled"' : ''}>
        <label for="${song.songTitle.split(' ')[0]}" class="form-check-label">${song.songTitle} ${song.songTitle === "Starkare" ? '(kan ej beställas för tillfället)' : ''}</label>  
      </div>`;
    });

    songlista += `
        </form>
      </div>
      <div class="price">`;

    songs.forEach(song => {
      songlista += `
        <p class="price js-${song.songTitle.split(' ')[0]}-price">${song.price === '' ? '<br>' : song.price}</p>`;
    });

    songlista += `
      </div>
    </div>`;
  }
});

document.querySelector('.js-songs').innerHTML = songlista;






