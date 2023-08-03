export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '95f057e437msh37056c54f7fe7cfp1c3dfajsn35530fd21052',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'{
        headers: headers,
    });
    const result = await response.json()

    return result
}