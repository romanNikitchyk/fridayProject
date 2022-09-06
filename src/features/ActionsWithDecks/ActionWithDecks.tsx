import React from 'react'
import Button from '../../common/components/Button/Button'
import { useAppSelector } from '../../common/hook/hook'
import styles from './ActionsWithDecks.module.css'
import { useNavigate } from 'react-router-dom'
type ActionWithDecksPropsType = {
  packUserId: string
}

const ActionWithDecks = (props: ActionWithDecksPropsType) => {
  const userId = useAppSelector((state) => state.packs.user_id) // userID
  const navigate = useNavigate()

  const onStudyNavigateHandler = () => {
    navigate('/stady') // добавить правильный url для перехода
  }
  const onEditNavigateHandler = () => {
    navigate('/edit') // добавить правильный url для перехода
  }
  const onDeleteNavigateHandler = () => {
    navigate('/delete') // добавить правильный url для перехода
  }
  return (
    <div>
      {props.packUserId === userId ? (
        <>
          <Button onClick={onStudyNavigateHandler} className={styles.study}>
            Stady
          </Button>
          <Button onClick={onEditNavigateHandler} className={styles.edit}>
            Edit
          </Button>
          <Button onClick={onDeleteNavigateHandler} className={styles.delete}>
            Delete
          </Button>
        </>
      ) : (
        <Button onClick={onStudyNavigateHandler} className={styles.study}>
          Stady
        </Button>
      )}
    </div>
  )
}

export default ActionWithDecks
