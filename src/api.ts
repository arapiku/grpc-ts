import * as request from 'request-promise'

export interface IResponse {
  results: [{
    gender: string,
    name: {
      first: string,
      last: string,
    },
    location: {
      state: string,
      city: string,
      street: string,
    },
    email: string,
  }]
}

export const randomUser = async (resultCount: number): Promise<IResponse> => {
  return request(`https://randomuser.me/api/`, {
    qs: {
      results: resultCount,
    },
    json: true,
  })
}