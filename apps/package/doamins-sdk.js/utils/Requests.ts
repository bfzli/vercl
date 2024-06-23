
import type { VercelAPIVerionTypes } from '@/ts'

import { SDK } from '@/constants'

export const BuildVercelUrl = (url: string, version: VercelAPIVerionTypes, queries?: Record<string, string | number | boolean>): string => {
    const queriesString = queries ? Object.keys(queries).map(key => `${key}=${queries[key]}`).join('&') : ''
    return `https://api.vercel.com/${version}/${url}?projectId=${SDK.PROJECT_ID}&teamId=${SDK.TEAM_ID}${queriesString ? `&${queriesString}` : ''}`
}

export const CheckEnvironment = (): boolean => {
    if (typeof window !== 'undefined') return true
    return false
}