import { useThemeLocal } from "./exercise3-UseLocalStorage"


export function LocalThemeWithContext() {
  const { themeDark, changeTheme, dayIcon, nightIcon } = useThemeLocal()

  return (
    <button 
      onClick={changeTheme}
      className={themeDark ? 'night' : 'day'}
    >
      {themeDark ? dayIcon : nightIcon}
    </button>
  )
}
