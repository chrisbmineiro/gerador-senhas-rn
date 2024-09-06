let randomChars = "Aa@$%abcdefghijkpqBCDEFGHUJKPL"
const passwordLength = 10

export function generatePassword() {
    let password = ''
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * randomChars.length)
        password += randomChars[randomIndex]
    }
    return password
}