'use strict';

angular.module('miniMusicPlayerApp')
  .controller('playerCtrl', function ($scope, $interval) {
    $scope.playing = false;

    $scope.song = {writer:'Sujfan Stefens', song:'Chicago'}
    
    

    $scope.volumeShow = false;

    $scope.showVolume = function(){
    	$scope.volumeShow = !$scope.volumeShow;
    }
    $scope.prevSong = function(){
    	document.getElementById('player').next();
    }
    $scope.nextSong = function(){
    	document.getElementById('player').next();
    }
    $scope.updateVolume = function(){
    	document.getElementById('player').volume = $scope.volume;
    }
    $interval(function(){
    	$scope.currentTime = (document.getElementById('player').currentTime / document.getElementById('player').duration * 100);
    }, 1000)

    $scope.pause = function(){
    	$scope.playing = !$scope.playing;
    	if($scope.playing){
    		document.getElementById('player').play();
    	}
    	else{
    		document.getElementById('player').pause();
    	}

    	// $scope.currentTime = (document.getElementById('player').currentTime / document.getElementById('player').duration * 100);
    }
  });
