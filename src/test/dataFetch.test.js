const axios = require('axios')

async function fetchDataFromAPI() {
  try {
    const response = await axios.get('https://swapi.dev/api/people/1/')
    return response.data
  } catch (error) {
    throw error
  }
}

describe('API Test', () => {
  it('should fetch data from the API', async () => {
    const mockResponse = {
      data: {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
      },
    }

    axios.get = jest.fn().mockResolvedValue(mockResponse)

    const result = await fetchDataFromAPI()

    expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/people/1/')

    expect(result).toEqual(mockResponse.data)
    
  })
})