import { useTheme } from './exercise1-UseToggle'

export function ToggleThemeWithContext() {
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
