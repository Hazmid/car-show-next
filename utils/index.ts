export async function fetchCars() {
    try {
        const headers = {
            'X-RapidAPI-Key': '38021a013amsh602359c4de04041p18aec5jsnaa47e2e3f314',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }

        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
            headers: headers
        })

        const result = await response.json();

        return result
        
    } catch (error) {
        console.error(error);
    }

}