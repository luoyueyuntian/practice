import { getUnusedMessageId } from '../../service/idleDataId'

export const sendMessage = (state, extraParam) => {
  state.msgs.push({
    id: getUnusedMessageId(),
    auth: extraParam.author,
    message: extraParam.message,
    addressee: parseInt(extraParam.addressee, 10)
  })
}
