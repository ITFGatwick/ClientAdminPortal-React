import { useParams } from "react-router-dom"
import { getClientData } from "../functions/data";
import './Client.css';

export default function Client() {
    const params = useParams();
    const client = getClientData().find((c) => c.id === parseInt(params.clientId))

    return <div className="client">
        <h2>{client.name}</h2>
        <h3>Description</h3>
        <p>{client.description}</p>
        <h3>Related clients</h3>
        <ul>
            {client.relatedClients.map((client) => (
                <li key={client.id}>
                    <a href="">{client.name}</a>
                </li>
            ))
            }
        </ul>
    </div>
}