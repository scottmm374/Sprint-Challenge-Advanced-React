import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'


export function useTomatoMode() {
    const [value, setValue] = useLocalStorage("key", false)

    useEffect(() => {
        const mode = document.querySelector('h1')
        if (value) {

            mode.classList.add('tomato')
        } else {
            mode.classList.remove('tomato')
        }


    }, [value])

    return [value, setValue]
}