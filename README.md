## CSS THEME SWITCHER 🎨

Simple theme switcher based on CSS variables.
It may use multiple themes and user preferences are stored in the browser local storage.

### 🚀 How to use it?

####

```
import ThemeSwitcher from './path/to/ThemeSwitcher.js'

const themer = new ThemeSwitcher()
themer.initTheme(initial_theme_name) // default to 'light-theme'

// In order to change theme, use:
themer.changeTheme(theme_name)

// In order to remove current theme, use:
themer.removeTheme()

// In order to destroy theme completely, use:
themer.destroyTheme()
```

### Happy theming all! 👋
