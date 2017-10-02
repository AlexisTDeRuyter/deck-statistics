var app = angular.module('deck-directives', [])

app.directive('statistics', function() {
  return {
    restrict: 'E',
    templateUrl: 'statistics.html'
  }
})

app.directive('decklist', function() {
  return {
    restrict: 'E',
    templateUrl: 'decklist.html'
  }
})

app.directive('comments', function() {
  return {
    restrict: 'E',
    templateUrl: 'comments.html'
  }
})
