'use client'
import React from 'react'

interface ErrorPageProps {
    error: Error,
    reset: () => void
}

const ErrorPage = ({error, reset}: ErrorPageProps) => {

    console.log(error)

  return (
    <>
        <div>An unexpected error has occured. Please try again later.</div>
        <button onClick={reset}>Retry</button>
    </>
  )
}

export default ErrorPage
