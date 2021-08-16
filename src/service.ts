import { ServerUnaryCall, ServiceError } from 'grpc'
import { UsersReply, UsersRequest } from './protos/service_pb'
import { findUsers } from './repository'

export const getUsers = async (call: ServerUnaryCall<UsersRequest>, callback: (error: ServiceError | null, response: UsersReply) => void) => {
  const request = call.request
  const reply = new UsersReply()
  reply.setUsersList(await findUsers(request.getResultcount()))
  callback(null, reply)
}