window.onload = function () {
  const loginBtn = document.getElementById('login-btn');
  const token = localStorage.getItem('access_token');
  if (!token) {
    loginBtn.style.display = 'block';
    loginBtn.onclick = () => {
      const clientId = 'e8487fbac01d4b9b8bdcc833d4a32956';
      const redirectUri = 'https://golboojamshidi.github.io/spotify-top-tracks/callback.html';
      const scopes = 'user-top-read';
      const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes}&redirect_uri=${encodeURIComponent(redirectUri)}`;
      window.location.href = url;
    };
  } else {
    loginBtn.style.display = 'none';
    fetch('https://api.spotify.com/v1/me/top/tracks?limit=10', {
      headers: { Authorization: 'Bearer ' + token }
    })
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('tracks');
      data.items.forEach(track => {
        const div = document.createElement('div');
        div.innerHTML = `
          <img src="${track.album.images[0].url}" width="100">
          <p><strong>${track.name}</strong> by ${track.artists[0].name}</p>
          <audio controls src="${track.preview_url}"></audio>
          <hr>
        `;
        container.appendChild(div);
      });
    });
  }
};
