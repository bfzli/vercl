export const HandleCheckDomainMessage = (code: number) => {
    if (code === 200) return 'Domain is available for purchase'
    if (code === 400) return 'Some of the sent data is invalid, make sure the domain is formatted in this way: domain.com'
    if (code === 401) return 'You are not authorized to perform this action'
    if (code === 403) return 'You are forbidden to perform this action'
    if (code === 500) return 'Something went wrong, please try again later'
}