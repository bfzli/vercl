import type { 
    CheckDomainDataFormattedTypes, 
    CheckDomainDataUnformattedTypes 
} from '@/ts'

export const HandleCheckDomainData = (data: CheckDomainDataUnformattedTypes): CheckDomainDataFormattedTypes => {
    const {  price, period } = data

    return {
        domainPrice: price,
        maxRentTime: period
    }
}