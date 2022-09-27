import { useCallback, useEffect, useState } from 'react'

export const useAsync = (func, dependencies = []) => {
  const { execute, ...state } = useAsyncInternal(func, dependencies, true)

  useEffect(() => {
    execute()
  }, [execute])

  return state
}

export const useAsyncFn = (func, dependencies = []) => {
  return useAsyncInternal(func, dependencies, false)
}

const useAsyncInternal = (func, dependencies, initialLoading = false) => {
  const [loading, setLoading] = useState(initialLoading)
  const [error, setError] = useState()
  const [data, setData] = useState()

  const execute = useCallback((...params) => {
    setLoading(true)
    return func(...params)
      .then(({ data }) => {
        setData(data)
        setError(undefined)
        return data
      })
      .catch((error) => {
        setError(error.response.data.message || error?.message || error)
        setData(undefined)
        return Promise.reject(error.response.data.message || error?.message || error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, dependencies)

  return { loading, error, data, execute }
}
