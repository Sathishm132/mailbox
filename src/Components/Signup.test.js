import {render,  screen} from '@testing-library/react'
import Signuppage from './Signup'
test("test signup render",()=>{
    render(<Signuppage/>)
    const content=screen.getByText("SignUp");
    expect(content).toBeInTheDocument();


})