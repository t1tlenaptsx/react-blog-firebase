import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'

function Home() {
    const [postsLists, setPostList] = useState([])
    const PostCollectionRef = collection(db, "posts")

    useEffect(() => {
        const getPost = async () => {
            const data = await getDocs(PostCollectionRef)
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
    getPost()
    })
    return (
        <div className='homePage'>{postsLists.map((post) => {
            return (
            <div className='post'> 
                <div className='postHeader'> 
                    <div className='title'> 
                        <h1> {post.title} </h1>
                    </div> 
                </div>
                <div className='postTextContainer'>
                    {post.postText}
                </div>
            </div> 
            )
        })}</div>
  )
}

export default Home