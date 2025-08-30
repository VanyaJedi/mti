import React from 'react'
import classNames from 'classnames'
import s from './styles.module.css'

type Props = {
  active?: boolean
  size?: number // px
  color?: string
  className?: string
}

export const Dot = ({ active = false, size = 4, color = '#fff', className }: Props) => {
  return (
    <span
      className={classNames(s.dot, className, { [s.active]: active })}
      style={{
        width: size,
        height: size,
        backgroundColor: active ? color : '#848587',
      }}
    />
  )
}