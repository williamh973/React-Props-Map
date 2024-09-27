import { useParams } from "react-router-dom"


export default function MessageDetailPage(props: any) {

    const { idMessage, idPage } = useParams();
    console.log(idMessage)
    console.log(idPage)
    return (
        <>
        
            <h1> Message Détail Page</h1>

            <p> Ceci est la page des détails de messages</p>

        </>
    )
}