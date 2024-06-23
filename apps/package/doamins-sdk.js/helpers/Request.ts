import type { 
    RequestFunctionPropTypes,
    ResponseFunctionReturnTypes, 
    VercelBodyRequestTypes 
} from '@/ts'

import { BuildVercelUrl } from '@/utils'
import { SDK } from '@/constants'

const Request = async (props: RequestFunctionPropTypes): Promise<ResponseFunctionReturnTypes> => {
    const {
        url,
        method,
        headers,
        version,
        body,
        queries
    } = props

    const endpoint = BuildVercelUrl(url, version, queries)

    const heads = {
        'Authorization ': `Bearer ${SDK.TOKEN}`,
        ...headers
    }

    const config: VercelBodyRequestTypes = {
        method,
        headers: heads,
        body: JSON.stringify(body)
    }

    const request = await fetch(endpoint, config)
    const response = await request.json()

    return response
}

export default Request