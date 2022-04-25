import axios from "axios"

export default async (req, res) => {
  const { headers, body } = req

  try {
    const { data, headers: returnedHeaders } = await axios.post(
      'http://localhost:3001/api/auth/signin', // Node.js backend path
      body, // Login body (email + password)
      { headers } // Headers from the Next.js Client
    )
    //  Update headers on requester using headers from Node.js server response
    Object.entries(returnedHeaders).forEach((keyArr) =>
      res.setHeader(keyArr[0], keyArr[1] as string)
    )
    res.send(data) // Send data from Node.js server response
  } catch ({ response: { status, data } }) {
    // Send status (probably 401) so the axios interceptor can run.
    res.status(status).json(data)
  }
}