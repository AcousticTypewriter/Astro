export async function get({request}) {
    console.log(request)
    return new Response("hi", {
        status: 302,
        headers: {
             "Set-Cookie": "lol"   
        },
        statusText: "Nope!"
    })
}