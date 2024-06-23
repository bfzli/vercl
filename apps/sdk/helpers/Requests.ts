import type { 
    RequestFunctionPropTypes,
    ResponseFunctionReturnTypes, 
    VercelBodyRequestTypes 
} from '@/ts'

import { SDK } from '@/constants'

export const Request = async (props: RequestFunctionPropTypes): Promise<ResponseFunctionReturnTypes> => {
    const {
        url,
        method,
        headers,
        body
    } = props

    const heads = {
        'Authorization': `Bearer ${SDK.TOKEN}`,
        ...headers
    }

    const config: VercelBodyRequestTypes = {
        method,
        headers: heads
    }

    if (body) config.body = JSON.stringify(body)

    const request = await fetch(url, config)
    
    return {
        code: request.status,
        json: await request.json()
    }
}