export async function fetchAPIData (endpoint: string): Promise<any>{
    const ROOT_URL = "https://stadafint-server-production.up.railway.app"
    const url = `${ROOT_URL}/${endpoint}`;

    const response = await fetch(url)
    const data = await response.json()
    
    return data

}