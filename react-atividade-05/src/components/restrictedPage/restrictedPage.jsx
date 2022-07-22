const RestrictedPage = ({isLoggedIn, user, Login, logout})=>{
    return(
        <>
            <span>Bem vindo {user}</span>
            <button onClick={logout}>Sair</button>
        </>
    )
}

export default RestrictedPage