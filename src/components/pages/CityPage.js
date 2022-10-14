import { useParams } from "react-router-dom"

export default function CityPage(){
    let {city} = useParams();

    return (
        <div>
            <h2>citta</h2>
        </div>
    )
}