export type RequestMethodTypes = 'GET' | 'POST'
export type VercelAPIVerionTypes = 'v2' | 'v4'
export type DomainPriceCheckTypes = 'new' | 'renewal'
export type RecordDNSTypes = 'A' | 'AAAA' | 'ALIAS' | 'CAA' | 'CNAME' | 'HTTPS' | 'MX' | 'SRV' | 'TXT' | 'NS'


export type RequestFunctionPropTypes = {
    url: string
    method: RequestMethodTypes
    headers: Record<string, string>
    body?: Record<string, string | number | boolean>
}

export type ResponseFunctionReturnTypes = {
    code: number
    json: object
}

export type ReturnSdkResponse<UnformattedType, FormattedType> = {
    success: boolean
    code: number
    raw: UnformattedType
    data: FormattedType
    message: string
}

export type VercelBodyRequestTypes = {
    method: RequestMethodTypes
    headers: Record<string, string>
    body?: string
}

export type InitializeConfigPropTypes = {
    token: string
    teamId: string
    projectId: string
}

export type PurchaseDomainPropTypes = {
    domain: string
    expectedPrice?: number
    renew?: boolean
}

export type VercelBodyPurchaseDomainTypes = {
    domain: string
    expectedPrice?: number
    renew?: boolean
}

export type CheckDomainPricePropTypes = {
    domain: string
    type?: DomainPriceCheckTypes
}

export type VercelBodyCheckDomainPriceTypes = {
    domain: string
    type?: DomainPriceCheckTypes
}

export type CreateDNSRecordPropTypes = {
    domain: string
    name: string
    type: RecordDNSTypes
    ttl?: number
    value: string
    comment: string
}

export type VercelBodyCreateDNSRecordTypes = {
    name: string
    type: RecordDNSTypes
    ttl?: number
    value: string
    comment: string
}


export type CheckDomainDataUnformattedTypes = {
    price: number,
    period: number
}

export type CheckDomainDataFormattedTypes = {
    domainPrice: number,
    maxRentTime: number
}