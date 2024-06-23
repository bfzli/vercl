import type { 
    CheckDomainPricePropTypes, 
    RequestMethodTypes, 
    ResponseFunctionReturnTypes, 
    VercelAPIVerionTypes, 
    VercelBodyCheckDomainPriceTypes 
} from '@/ts'

import { Request } from '@/helpers'
import { HEADERS, REQUEST_METHODS, VERCAL_API_VERSION } from '@/constants'

const CheckDomainPrice = async (props: CheckDomainPricePropTypes): Promise<ResponseFunctionReturnTypes> => {
    const { domain, type } = props

    const queries: VercelBodyCheckDomainPriceTypes = {
        domain
    }

    if (type) queries.type = type

    const { success, code, message, raw } = await Request({
        url: 'domains/price',
        version: VERCAL_API_VERSION.V4 as VercelAPIVerionTypes,
        method: REQUEST_METHODS.GET as RequestMethodTypes,
        headers: HEADERS.CONTENT_TYPE,
        queries
    })

    return {
        success,
        code,
        message,
        raw
    }
}

export default CheckDomainPrice