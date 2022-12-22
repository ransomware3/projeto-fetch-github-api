import { baseUrl } from '/src/js/variables.js'

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=10`)
    return await response.json()
}

export { getEvents }