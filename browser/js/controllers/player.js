app.controller('PlayerCtrl', function($scope, $rootScope, PlayerFactory){
  // main toggle

  $scope.currentSong = PlayerFactory.getCurrentSong();

  $scope.toggle = function (song) {
    if (PlayerFactory.isPlaying()) $rootScope.$broadcast('pause');
    else $rootScope.$broadcast('play', song);
  }

  // incoming events (from Album or toggle)
  $scope.$on('pause', pause);
  $scope.$on('play', play);

  // functionality
  function pause () {
    PlayerFactory.pause()
  }

  function play (event, song){
    PlayerFactory.pause();
    console.log('Play Song', song);
    if(song === $scope.currentSong){
      return PlayerFactory.resume();
    }
    PlayerFactory.start(song);
  }

  // outgoing events (to Album)
  $scope.next = function(){ $rootScope.$broadcast('next'); };
  $scope.prev = function(){ $rootScope.$broadcast('prev'); };

});
