import { render,screen} from "@testing-library/react"
import Register from "../Dropdown/Register"

test("REGISTER FORM component Rendering",()=>{
render(<Register/>)
expect(screen.getByText(/Register/i)).toBeInTheDocument();
})
test("Placeholder checking",()=>{
    render(<Register/>)
    expect(screen.findByPlaceholderText("Name")).toHaveValue();
})