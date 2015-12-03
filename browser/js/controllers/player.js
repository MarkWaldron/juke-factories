app.controller('PlayerCtrl', function($scope, $rootScope, PlayerFactory){
  // main toggle

  $scope.toggle = function (song) {
    if (PlayerFactory.isPlaying()){
      $rootScope.$broadcast('pause')
    }
    else {
      $rootScope.$broadcast('play', song)
    }
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
    if(song === PlayerFactory.getCurrentSong()){
      return PlayerFactory.resume();
    }

    console.log(PlayerFactory.getCurrentSong());
    PlayerFactory.setCurrentSong(song);
    PlayerFactory.start(song);
  }

  // outgoing events (to Album)
  $scope.next = function(){ $rootScope.$broadcast('next'); };
  $scope.prev = function(){ $rootScope.$broadcast('prev'); };

});
