import fetch from 'node-fetch';
export default async (req, res) => {

    let url = "http://localhost:3100"
    let { token } = req.query

    const payload = {
        token: token
    }

    const result = await fetch(`${url}/users/get-address`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    const data = await result.json();
    res.json(data);
}