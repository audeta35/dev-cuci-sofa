import fetch from 'node-fetch';
export default async (req, res) => {

    let url = "http://localhost:3100"
    
    let { email, password } = req.query;
    
    let payload = {
        email: email,
        password: password
    }

    const result = await fetch(`${url}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    const data = await result.json()
    res.json(data)
}
