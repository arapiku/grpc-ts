import { credentials, ServiceError } from "grpc"
import { UserDomainClient } from "./src/protos/service_grpc_pb"
import { UsersReply, UsersRequest } from "./src/protos/service_pb"

const client = new UserDomainClient(
  'localhost:50051',
  credentials.createInsecure()
)

const request = new UsersRequest()
request.setResultcount(2)

client.getUsers(request, (error: ServiceError | null, response: UsersReply) => {
  if (error) console.log(error)
  else response.getUsersList().forEach(user => console.log(user.toObject()))
})