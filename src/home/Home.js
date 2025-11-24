import { Link } from "react-router-dom"
import { getClientData } from "../functions/data"
import './Home.css';

export default function Home() {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {getClientData().map((client) => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td><Link to={`/client/${client.id}`}>View</Link></td>
                        </tr>
                    ))
                    }
                </tbody >
            </table >
        </div>
    )
}