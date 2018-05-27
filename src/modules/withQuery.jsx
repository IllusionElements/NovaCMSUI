import React from "react"
/* eslint-disable */
export const withQuery = (queryFunction, options) => (Component) => {
  const { props, ...otherOptions } = options || {}
  return <Component {...queryFunction(props)} {...otherOptions} />
}
