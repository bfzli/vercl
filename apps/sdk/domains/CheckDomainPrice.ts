import type { 
    CheckDomainPricePropTypes, 
    ReturnSdkResponse, 
    RequestMethodTypes, 
    VercelBodyCheckDomainPriceTypes, 
    CheckDomainDataUnformattedTypes,
    CheckDomainDataFormattedTypes
} from '@/ts'

import { 
    Request,
    HandleCheckDomainData, 
    HandleCheckDomainMessage
} from '@/helpers'

import { 
    HEADERS, 
    REQUEST_METHODS, 
    VERCAL_API_VERSION, 
    VERCEL_API_ENDPOINTS, 
    VERCEL_ENDPOINT 
} from '@/constants'

const CheckDomainPrice = async (props: CheckDomainPricePropTypes): Promise<ReturnSdkResponse<CheckDomainDataUnformattedTypes, CheckDomainDataFormattedTypes>> => {
    const { domain, type } = props

    const queries: VercelBodyCheckDomainPriceTypes = {
        domain
    }

    if (type) queries.type = type

    const { code, json } = await Request({
        url: `${VERCEL_ENDPOINT}/${VERCAL_API_VERSION.V4}/${VERCEL_API_ENDPOINTS.DOMAINS}/price?name=${domain}&type=new`,
        method: REQUEST_METHODS.GET as RequestMethodTypes,
        headers: HEADERS.CONTENT_TYPE
    })

    return {
        success: code === 200,
        code,
        message: HandleCheckDomainMessage(code),
        data: HandleCheckDomainData(json),
        raw: json
    }
}

export default CheckDomainPrice