
export function fetchCityCount(searchQuery){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return fetch(`/api/cities/getCount/${searchQuery}`, {
        method: 'GET',
        headers: {
            "Content-Type":"application/json"
        }
    })
        .then(response => {
        if (!response.ok) throw response;
        return response.json();
        })
        .catch(e => {
            alert(`Error ${e.status}: ${e.statusText}`)
        });
}
