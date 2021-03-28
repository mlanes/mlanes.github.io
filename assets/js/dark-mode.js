class DarkMode {
  static init() {
    const darkModeStorage = localStorage.getItem('gmtdarkMode');
    const darkMode = $('#dark-mode');
    const metaThemeColor = $('meta[name=theme-color]');

    if (darkModeStorage) {
      document.documentElement.classList.add('dark');
      $('.clouds > img').attr('src', 'assets/img/dark-cloud.svg');
      metaThemeColor.attr('content', '#2b2b2b');
    }

    darkMode.on('click', () => {
      document.documentElement.classList.toggle('dark');

      if ($('html').hasClass('dark')) {
        $('.clouds > img').attr('src', 'assets/img/dark-cloud.svg');
        localStorage.setItem('gmtdarkMode', true);
        metaThemeColor.attr('content', '#2b2b2b');
        return;
      }

      $('.clouds > img').attr('src', 'assets/img/cloud.svg');
      localStorage.removeItem('gmtdarkMode');
      metaThemeColor.attr('content', '#1f4271');
    });
  }
}