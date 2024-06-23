import type { 
    CreateDNSRecordPropTypes, 
    RequestMethodTypes, 
    ResponseFunctionReturnTypes, 
    VercelBodyCreateDNSRecordTypes 
} from '@/ts'

import { Request } from '@/helpers'

import { 
    HEADERS, 
    REQUEST_METHODS, 
    VERCAL_API_VERSION, 
    VERCEL_ENDPOINT 
} from '@/constants'

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

    const response = await Request({
        url: `${VERCEL_ENDPOINT}/${VERCAL_API_VERSION.V2}/${domain}/records`,
        method: REQUEST_METHODS.POST as RequestMethodTypes,
        headers: HEADERS.CONTENT_TYPE,
        body
    })

    console.log(response)

    // return {
    //     success,
    //     code,
    //     message,
    //     raw
    // }
}

export default CreateDNSRecord