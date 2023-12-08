import './search.scss'
import { useParams  } from 'react-router-dom';

export default function Search(){
    const { userName } = useParams()

    return(
        <div className="wrapper-search">
            <p>{userName}</p>
        </div>
    )
}