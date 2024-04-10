
const BASE_URL = `https://api.github.com/users/{user}/repos`;

export const useFetchUserRepositories = async (user: string) => {

  try {

    const response = await fetch(BASE_URL.replace('{user}', user || 'erivanstdio'), {
      headers: {
        'content-type': 'application/json'
      }
    })

    const parsedResponse = await response.json()

    return parsedResponse
  } catch (err) {

    console.error(err)
  }
}