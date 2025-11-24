import { addClient } from '../functions/data';
import './CreateClient.css';

export default function CreateClient() {
    const createClient = () => {
        //addClient()
    }

    return <div className='form'>
        <h2>Create client</h2>
        <form action={createClient}>
            <label>Name:</label>
            <input name="name"></input>
            <label>Description (optional): </label>
            <textarea name="description"></textarea>
            <button type="submit">Create</button>
        </form>
    </div>
}