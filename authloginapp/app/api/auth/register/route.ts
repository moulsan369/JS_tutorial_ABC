export default async function POST(request: Request) {
    
    try {
        const {email,password} = await request.json();
        // validate email, password
        console.log({email, password});
    } catch (e) {
        console.log({e});
    }
}