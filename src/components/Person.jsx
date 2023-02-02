//component names must be capital 
const Person = (props) =>{
    //const name = 'Zach'
    const firstName = props.firstName;
    const lastName = props.lastName;
    //or
    //const {firstName , lastName} = props; which is called destructuring 
    // I could also pass destructiring in the argument to the props function
    return <p>
        Hello, {firstName} 
    </p>
}
Person.defaultProps = {
    firstName : 'Ivan'
}
export default Person;