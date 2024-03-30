export const checkValidate = (email, password) => {
    const isEmailValid =  /^[a-zA-Z\s-]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)



    if (!isEmailValid) return "Name is not vaid"
    if (!isPasswordValid) return "Password is not vaid"
    
    return null
}