import { triggerStartChallenge } from '../common/triggerStartChallenge'
import IHill, { ChallengeStatusType } from '../common/IHill'
import Repository from 'corewar-repository'
import { DATABASE_NAME, COLLECTION_NAME, CHALLENGE_QUEUE } from '../common/constants'
import { peek } from '../serviceBus/peek'
import { Received, IHillCreatedMessage, IHillUpdatedMessage, IChallengeHillMessage } from 'corewar-message-types'
import { isHillStatusReady } from '../isHillStatusReady.ts'

type IHillChangedMessage = IHillCreatedMessage | IHillUpdatedMessage

export const hillChanged = async (message: IHillChangedMessage): Promise<void> => {
    const hill: IHill = {
        ...message.body,
        status: ChallengeStatusType.Ready
    }

    const repo = new Repository(DATABASE_NAME, COLLECTION_NAME)
    await repo.upsert(hill)

    const challenge = await peek<Received<IChallengeHillMessage>>(CHALLENGE_QUEUE)
    if (!challenge) {
        return
    }

    const { id, redcode } = challenge.body

    if (!isHillStatusReady(id)) {
        challenge.abandon()
    }

    triggerStartChallenge(id, redcode)
    challenge.complete()
}