import { FormEvent } from "react"

export default async function RegisterPage() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch ('/app/api/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password'),
                }),
        });
    };
    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-10" >
            <input className="border border-black" type ="email" />
            <input className="border border-black" type ="password" /> 

            <button type="submit">
                Register
            </button>
        </form>
    )
}