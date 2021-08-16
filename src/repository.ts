import { User } from './protos/service_pb'
import { randomUser, IResponse } from './api'

const generateUser = (response: IResponse) => {
  return response.results.map(result => {
    const user = new User()
    user.setFirstname(result.name.first)
    user.setLastname(result.name.last)
    user.setSex(result.gender)
    user.setEmail(result.email)
    
    const location = new User.Location()
    location.setState(result.location.state)
    location.setCity(result.location.city)
    location.setStreet(result.location.street)
    user.setLocation(location)

    return user
  })
}

export const findUsers = async (resultCount: number) => {
  return generateUser(await randomUser(resultCount))
}