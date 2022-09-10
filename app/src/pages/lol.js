export async function get() {
    return new Response("hi", {
        status: 200,
        statusText: "Nope!"
    })
}