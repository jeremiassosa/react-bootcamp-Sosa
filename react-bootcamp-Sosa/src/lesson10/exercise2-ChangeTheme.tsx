import { useTheme } from './exercise2-ChangeThemeContext'

export function ThemeWithContext() {
  const { themeDark, changeTheme, dayIcon, nightIcon } = useTheme()

  return (
    <button 
      onClick={changeTheme}
      className={themeDark ? 'night' : 'day'}
    >
      {themeDark ? dayIcon : nightIcon}
    </button>
  )
}
