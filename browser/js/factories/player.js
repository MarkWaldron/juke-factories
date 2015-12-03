app.factory('PlayerFactory', function ($q, $rootScope) {
  // adds audio to the document
  var audio = document.createElement('audio');
  // creates empty playerObj
  var playerObj = {};
  var currentSong;
  var playing = false;

  // adds listener to see if song has ended
  audio.addEventListener('ended', function () {
    playerObj.next();
  });

  //updates time as song plays
  audio.addEventListener('timeupdate', function () {
    playerObj.progress = 100 * audio.currentTime / audio.duration;
    $rootScope.$digest();
  });

  // start the damn song
  playerObj.start = function(song){
    this.setCurrentSong(song);
    audio.src = song.audioUrl;
    audio.load();
    audio.play();
    playing = true;
    return;
  };

  playerObj.pause = function(){
    audio.pause();
    playing = false;
  };

  playerObj.resume = function(){
    audio.play();
    playing = true;
  };

  playerObj.isPlaying = function(){
    return playing;
  };

  playerObj.getCurrentSong = function(){
    return currentSong;
  };

  playerObj.setCurrentSong = function(song){
    currentSong = song;
  };

  playerObj.next = function(){

  };

  playerObj.previous = function(){

  };

  playerObj.getProgress = function(){

  };
  return playerObj;
});
