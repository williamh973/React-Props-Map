import { useEffect, useState } from "react"


export default function HomePage() {

    const [title, setTitle] = useState<any>('');

    useEffect(() => {
        console.log("Je suis dans le useEffect");
    }, [])

    useEffect(() => {
        console.log("Je suis dans le 2nd useEffect");
        setTitle('coucou')
    }, [title] )


    useEffect(() => {
       const timerId = setInterval(() => {
            console.log('1')
       }, 1000)

       return () => {
        clearInterval(timerId)
       }
    }, [] )


    function submitMessage(){
        setTitle("Mon titre")
    }
    
    return (
        <>
            <h1> Home Page</h1>

            <p> Ceci est la page d'accueil</p>

            <button onClick={submitMessage}> Test du useEffect </button>
        
        </>
    )
}