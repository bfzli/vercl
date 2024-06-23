import type { 
    PurchaseDomainPropTypes, 
    RequestMethodTypes, 
    ResponseFunctionReturnTypes, 
    VercelBodyPurchaseDomainTypes 
} from '@/ts'

import { Request } from '@/helpers'

import { 
    HEADERS, 
    REQUEST_METHODS, 
    VERCAL_API_VERSION, 
    VERCEL_ENDPOINT 
} from '@/constants'

const PurchaseDomain = async (props: PurchaseDomainPropTypes): Promise<ResponseFunctionReturnTypes> => {
    const {
        domain,
        expectedPrice,
        renew
    } = props

    const body: VercelBodyPurchaseDomainTypes = {
        domain
    }

    if (expectedPrice) body.expectedPrice = expectedPrice
    if (renew) body.renew = renew

    const { success, code, message, raw } = await Request({
        url: `${VERCEL_ENDPOINT}/${VERCAL_API_VERSION.V4}/domains/buy`,
        method: REQUEST_METHODS.POST as RequestMethodTypes,
        headers: HEADERS.CONTENT_TYPE,
        body
    })

    return {
        success,
        code,
        message,
        raw
    }
}

export default PurchaseDomain