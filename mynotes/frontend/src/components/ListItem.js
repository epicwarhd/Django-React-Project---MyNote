import React from 'react'
import { Link } from 'react-router-dom'

let getTitle = (note) => {
    let title = note.body.split('\n')[0]

    if(title.length > 45)
        return title.slice(0, 45)

    return title
}

let getDate = (note) => {
    let time = note.updated
    time = new Date().toLocaleDateString("en-US")

    return time
}

const ListItem = ({note}) => {
    return (
        <div className="notes-list-item">
            <Link to={`/note/${note.id}`}>
                <h3>{getTitle(note)}</h3>
                <span>{getDate(note)}</span>
            </Link>
        </div>
    )
}

export default ListItem
