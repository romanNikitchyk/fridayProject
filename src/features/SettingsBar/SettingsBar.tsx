import React from 'react'
import SearchInput from './SearchInput/SearchInput'
import MyAllFilterButtons from './MyAllFilterButtons/MyAllFilterButtons'
import styles from './SettingsBar.module.css'
import NumberOfCards from './NumberOfCards/NumberOfCards'

export const SettingsBar = () => {
  return (
    <div className={styles.wrappSettings}>
      <SearchInput />
      <MyAllFilterButtons />
      <NumberOfCards />
    </div>
  )
}
