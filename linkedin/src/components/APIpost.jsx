const URL = "https://striveschool.herokuapp.com/api/posts/";


const APIpost = async () => {
    const auth = btoa(usernam + password);
    const headers = new Headers({
        "Content-Type": "application/json",
        "Authorization": "Basic dXNlcjU6OVVWbVFEYVNQZ3hTdUFkcw=="
    });

    try {
        let response = await fetch(URL, {
            method: "POST",
            body: JSON.stringify(text),
            headers
        })
        if (response.ok) {
            return await response.json()
        }
    } catch (error) {
        console.log(error)
    }
}

export default APIpost;
