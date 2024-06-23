import type { 
    CreateDNSRecordPropTypes, 
    RequestMethodTypes, 
    ResponseFunctionReturnTypes, 
    VercelAPIVerionTypes, 
    VercelBodyCreateDNSRecordTypes 
} from '@/ts'

import { Request } from '@/helpers'
import { HEADERS, REQUEST_METHODS, VERCAL_API_VERSION } from '@/constants'

const CreateDNSRecord = async (props: CreateDNSRecordPropTypes): Promise<ResponseFunctionReturnTypes> => {
    const {
        domain,
        name,
        type,
        ttl,
        value,
        comment
    } = props

    const body: VercelBodyCreateDNSRecordTypes = {
        name: name,
        type: type,
        value: value,
        comment: comment
    }

    if (ttl) body.ttl = ttl

    const { success, code, message, raw } = await Request({
        url: `domains/${domain}/records`,
        version: VERCAL_API_VERSION.V2 as VercelAPIVerionTypes,
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

export default CreateDNSRecord