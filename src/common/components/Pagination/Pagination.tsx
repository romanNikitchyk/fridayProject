import React, { FC } from 'react'
import styles from './Pagination.module.css'
import Select from '../Select/Select'

type PropsType = {
  onPageChanged: (page: number) => void
  totalCount: number
  currentPage: number
  pageSize: number
  changePageSize?: (pageCount: string) => void
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
  let isEnd = false
  const pages: number[] = []

  const pageCount = Math.ceil(totalCount / pageSize)

  for (let i = 0; i <= pageCount; i++) {
    pages.push(i)
  }

  let firstPageIdx = currentPage - 3 < 1 ? 1 : currentPage - 2
  const lastPageIdx = currentPage - 3 < 1 ? 5 : currentPage + 2

  if (currentPage + 3 > pageCount) {
    firstPageIdx = pageCount - 4
    isEnd = true
  }

  const slicedPages = pages.slice(firstPageIdx, lastPageIdx + 1)

  const onPreviousChangedHandler = () => {
    onPageChanged(currentPage - 1)
  }
  const onNextChanged = () => {
    onPageChanged(currentPage + 1)
  }
  const onLastChangedHandler = () => {
    onPageChanged(pageCount)
  }

  const selectOptions = optionsPageSize ? optionsPageSize : [`${pageSize}`, '10', '15', '20']

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
        const isSelectedPage = page === currentPage
        return (
          <button
            key={i}
            className={`${styles.defaultPage} ${isSelectedPage ? styles.selectedPage : ''}`}
            type={'button'}
            disabled={isSelectedPage}
            onClick={onPageChangedHandler}
          >
            {page}
          </button>
        )
      })}
      <button disabled className={styles.points} hidden={isEnd}>
        ...
      </button>
      <button onClick={onLastChangedHandler} className={styles.lastPage} hidden={isEnd}>
        {pageCount ? pageCount : ''}
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
