import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import styles from './notification.scss'

const Notification = ({ message, hide }) => {
  const [show, setShow] = useState(false)

  const executeInterval = () => {
    const interval = setInterval(() => {
      setShow(true)
      clearInterval(interval)
    }, 500)
  }

  useEffect(() => executeInterval(), [])

  useEffect(() => executeInterval(), [hide])

  const onClick = () => {
    setShow(false)
  }

  return (
    <div className={`${styles.component} ${show && !hide ? styles.show : ''}`}>
      <label>{message}</label>
      <button type="button" onClick={onClick}>
        X
      </button>
    </div>
  )
}

Notification.defaultProps = {
  hide: true,
  message: 'An error message',
}

Notification.propTypes = {
  hide: PropTypes.bool,
  message: PropTypes.string,
}

export default Notification
