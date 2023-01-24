import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useNavigate } from 'react-router-dom'

function CreatePost() {
    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState("")

    const PostCollectionRef = collection(db, "posts")   
    let navigate = useNavigate()

    const createPost = async () => {
        await addDoc(PostCollectionRef, {title, postText})
        navigate("/")
    }

  return (
    <div className='createPostPage'> 
        <div className='cpContainer'>
            <h1>Create a Post</h1>
            <div className='inputGp'>
                <label>Title: </label>
                <input placeholder='Title...' onChange={(e) => {
                    setTitle(e.target.value)
                    }}/>
            </div>
            <div className='inputGp'>
                <label>Post: </label>
                <textarea placeholder='Post' onChange={(e) => {
                    setPostText(e.target.value)
                }}/>
            </div>
            <button onClick={createPost}>Submit Post</button>
        </div>
    </div>
  )
}

export default CreatePost