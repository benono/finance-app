import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <SignUp path="/sign-up" />
    )
}
// you can even name it as X, all the matter is doing default export
export default SignUpPage
