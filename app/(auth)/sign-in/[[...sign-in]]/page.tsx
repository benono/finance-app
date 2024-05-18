import { SignIn } from "@clerk/nextjs";


const SignInPage = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full lg:glex flex-col items-center justify-center px-4">
                <div className="text-center space-y-4 pt-16">
                    <h1 className="font-bold text-3xl text-[#2E2A47]">
                        Welcome Back!
                    </h1>
                    <p className="text-base text-[#7E8CA0]">
                        Login or Create account to get back to your dashboard
                    </p>
                    <div className="flex items-center justify-center mt-8">
                        <SignIn path="/sign-in" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage