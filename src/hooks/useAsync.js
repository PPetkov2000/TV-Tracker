import { useCallback, useEffect, useState } from 'react'

export function useAsync(func, dependencies = []) {
  const { execute, ...state } = useAsyncInternal(func, dependencies, true)

  useEffect(() => {
    let cancelReq = false
    if (cancelReq) return

    execute()

    return () => {
      cancelReq = true
    }
  }, [execute])

  return state
}

export function useAsyncFn(func, dependencies = []) {
  return useAsyncInternal(func, dependencies, false)
}

function useAsyncInternal(func, dependencies, initialLoading = false) {
  const [loading, setLoading] = useState(initialLoading)
  const [error, setError] = useState()
  const [value, setValue] = useState()

  const execute = useCallback((...params) => {
    setLoading(true)
    return func(...params)
      .then((data) => {
        setValue(data)
        setError(undefined)
        return data
      })
      .catch((error) => {
        setError(error.response.data.message || error?.message || error)
        setValue(undefined)
        return Promise.reject(error.response.data.message || error?.message || error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, dependencies)

  return { loading, error, value, execute }
}
