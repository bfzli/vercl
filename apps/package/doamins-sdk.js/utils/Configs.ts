import type { InitializeConfigPropTypes } from '@/ts'

import { SDK } from '@/constants'

export const InitializeConfigs = (props: InitializeConfigPropTypes) => {
    const {
        token,
        teamId,
        projectId
    } = props

    if (token) SDK.TOKEN = token
    if (teamId) SDK.TEAM_ID = teamId
    if (projectId) SDK.PROJECT_ID = projectId
}