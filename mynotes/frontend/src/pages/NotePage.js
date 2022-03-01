import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import axios from 'axios'

const NotePage = () => {
    
    let { id } = useParams()
    let navigate = useNavigate()

    let [note, setNote] = useState(null)

    useEffect(() =>{
        getNote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    let getNote = async () => {
        if (id === 'new') return

        await axios.get(`/api/note/${id}`)
        .then(res => {
            setNote(res.data);
        })
        .catch(error => console.log(error));
    }

    let createNote = async () => {
        await axios.post('/api/note/create', note)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

        navigate('/')
    }

    let updateNote = async () => {
        if (id === 'new') 
            return navigate('/')
        if (id !== 'new' && note.body === '')
            return deleteNote()

        await axios.put(`/api/note/${id}/update`, note)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

        navigate('/')
    }

    let deleteNote = async () => {
        await axios.delete(`/api/note/${id}/delete`)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        navigate('/')
    }

    return (
        <div>
            <div className='note'>
                <div className="note-header">
                    <h3>< ArrowLeft onClick={updateNote} /></h3>
                    { id !== 'new' ? <button onClick={deleteNote}>Delete</button> : <button onClick={createNote}>Done</button>}
                </div>
                <textarea value={note?.body} onChange={(e) => {setNote({...note,'body': e.target.value})}}></textarea>
            </div>
        </div>
    )
}

export default NotePage
