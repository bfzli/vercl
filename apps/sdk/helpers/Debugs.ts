export const CheckEnvironment = (): boolean => {
    if (typeof window !== 'undefined') return true
    return false
}