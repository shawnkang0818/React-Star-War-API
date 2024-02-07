const BASE_URL = 'https://swapi.dev/api/starships'

export async function getStarships(){
  try{
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (err) {
    console.log(err)
  }

}