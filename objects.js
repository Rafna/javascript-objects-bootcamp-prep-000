var playlist = {
  Bruno: "24K",
  Elvis: "The Wonder of You",
  Beyonce: "Irreplaceable"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}
