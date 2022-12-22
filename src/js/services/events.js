import { baseUrl, maxQuantity } from '../variables.js'

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${maxQuantity}`)
    return await response.json()
}

export { getEvents }