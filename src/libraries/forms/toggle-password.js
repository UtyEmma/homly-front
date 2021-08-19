export function toggleConPassword(e){
    e.preventDefault()
    const input = document.getElementById('confirm_password');
    input.type == "password" ? input.type = "text" : input.type = "password"
    return;
}

export function togglePassword(e){
    e.preventDefault()
    const input = document.getElementById('password');
    input.type == "password" ? input.type = "text" : input.type = "password"
    return;
}