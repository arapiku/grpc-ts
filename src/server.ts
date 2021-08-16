import { Server, ServerCredentials } from "grpc"
import { UserDomainService } from "./protos/service_grpc_pb"
import { getUsers } from './service'

const grpcServer = new Server()
grpcServer.addService(UserDomainService, { getUsers })
grpcServer.bind('localhost:50051', ServerCredentials.createInsecure())
grpcServer.start()