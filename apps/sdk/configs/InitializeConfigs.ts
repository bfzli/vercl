import type { InitializeConfigPropTypes } from '@/ts'

import { SDK } from '@/constants'

const InitializeConfigs = (props: InitializeConfigPropTypes) => {
    const {
        token,
        teamId,
        projectId
    } = props

    if (token && SDK.TOKEN === '_') SDK.TOKEN = token
    if (teamId && SDK.TEAM_ID === '_') SDK.TEAM_ID = teamId
    if (projectId && SDK.PROJECT_ID === '_') SDK.PROJECT_ID = projectId
}

export default InitializeConfigs