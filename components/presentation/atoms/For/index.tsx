import React from 'react'

type Props<T, U> = {
  each: readonly T[]
  fallback?: JSX.Element
  children: (item: T, index: number) => U
}

type ForComponent = <T, U extends JSX.Element>(
  props: Props<T, U>
) => JSX.Element

/**
 * Inspired implementation of Solid.js For component
 *
 * @see https://www.solidjs.com/docs/latest/api#%3Cfor%3E
 * @author solidjs.com
 */
const For: ForComponent = ({ each, fallback, children }) => {
  if (!each || !each.length) return <>{fallback}</>
  return <>{each.map(children)}</>
}

export default For
