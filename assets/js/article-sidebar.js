document.querySelectorAll('.article-navigation').forEach(function (navigation) {
  var desktop = window.matchMedia('(min-width: 1200px)');
  function updateNavigation() {
    navigation.open = desktop.matches;
  }
  updateNavigation();
  desktop.addEventListener('change', updateNavigation);
});
