/**
 * Class for changing theme in your app
 * @param {string} initalTheme, default to 'light-theme'
 * theme names should match to CSS classes
 * You should use CSS or SCSS variables in order to make it work properly
 */
class ThemeSwitcher {
  constructor(initalTheme = 'light-theme') {
    this.currentTheme = initalTheme
  }

  initTheme() {
    const theme = localStorage.getItem('theme')

    if (theme) {
      this.currentTheme = theme
    } else {
      localStorage.setItem('theme', this.currentTheme)
    }

    document.body.classList.add(this.currentTheme)
  }

  changeTheme(theme) {
    document.body.classList.replace(this.currentTheme, theme)
    this.currentTheme = theme
    localStorage.setItem('theme', this.currentTheme)
  }

  removeTheme() {
    document.body.classList.remove(this.currentTheme)
  }

  destroyTheme() {
    document.body.classList.remove(this.currentTheme)
    localStorage.removeItem('theme')
  }
}

// --- EXAMPLE ---
const themer = new ThemeSwitcher()
const toggleBtn = document.getElementById('theme-toggle')
const lightThemeIcon = document.getElementById('light-theme-icon')
const darkThemeIcon = document.getElementById('dark-theme-icon')

themer.initTheme()

toggleBtn.addEventListener('click', () => {
  if (themer.currentTheme === 'light-theme') {
    themer.changeTheme('dark-theme')
    darkThemeIcon.classList.remove('active')
    lightThemeIcon.classList.add('active')
  } else {
    themer.changeTheme('light-theme')
    lightThemeIcon.classList.remove('active')
    darkThemeIcon.classList.add('active')
  }
})
