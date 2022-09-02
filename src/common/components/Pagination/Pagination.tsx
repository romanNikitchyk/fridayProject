import React, { FC } from 'react'
import styles from './Pagination.module.css'
import Select from '../Select/Select'

type PropsType = {
  onPageChanged: (page: number) => void
  totalCount: number
  currentPage: number
  pageSize: number
  changePageSize?: (option: string) => void
  optionsPageSize?: string[]
}

export const Pagination: FC<PropsType> = ({
  onPageChanged,
  totalCount,
  pageSize,
  currentPage,
  changePageSize,

  optionsPageSize,
}) => {
  const pages: number[] = []

  const pageCount = Math.ceil(totalCount / pageSize)

  for (let i = 0; i <= pageCount; i++) {
    pages.push(i)
  }

  const firstPageIdx = currentPage - 3 < 1 ? 1 : currentPage - 2
  const lastPageIdx = currentPage - 3 < 1 ? 5 : currentPage + 2

  const slicedPages = pages.slice(firstPageIdx, lastPageIdx + 1)

  const onPreviousChangedHandler = () => {
    onPageChanged(currentPage - 1)
  }
  const onNextChanged = () => {
    onPageChanged(currentPage + 1)
  }
  const onLastChangedHandler = () => {
    onPageChanged(lastPageIdx - 1)
  }

  const selectOptions = optionsPageSize ? optionsPageSize : ['5', `${pageSize}`, '15', '20']

  return (
    <div className={styles.pagination}>
      <button
        onClick={onPreviousChangedHandler}
        className={styles.previousBtn}
        disabled={currentPage === 1}
      />
      {slicedPages.map((page, i) => {
        const onPageChangedHandler = () => {
          onPageChanged(page)
        }

        return (
          <button
            key={i}
            className={`${styles.defaultPage} ${page === currentPage ? styles.selectedPage : ''}`}
            type={'button'}
            onClick={onPageChangedHandler}
          >
            {page}
          </button>
        )
      })}
      <button disabled className={styles.points}>
        ...
      </button>
      <button onClick={onLastChangedHandler} className={styles.lastPage}>
        {pageCount}
      </button>
      <button
        onClick={onNextChanged}
        className={styles.nextBtn}
        disabled={currentPage === pageCount}
      />
      {changePageSize && (
        <span className={styles.pageCount}>
          Show <Select options={selectOptions} value={pageSize} onChangeOption={changePageSize} />{' '}
          Cards per Page
        </span>
      )}
    </div>
  )
}
