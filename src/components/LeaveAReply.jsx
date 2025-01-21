import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../data/FirebaseConfig'
import styles from '../css/leaveAReply.module.css'


const LeaveAReply = () => {
  const [review, setReview] = useState({ name: "", message: "" })
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, "comments"), review)
      setSuccess(true)
      setReview({ name: "", message: "" })
    } catch (error) {
      console.error("Error saving review:", error)
    }
  }


  return (
    <>
      <div className={styles.formContainer}>
        <h2>Leave A Reply</h2>
        <form onSubmit={handleSubmit}>
          <input type="text"
            name='name'
            placeholder='Your Name'
            value={review.name}
            onChange={handleChange}
            required />

          <textarea placeholder='Your Message'
            name='message'
            value={review.message}
            onChange={handleChange}
            required>
          </textarea>
          <button type="submit">Submit</button>
        </form>
        {success && <p>Your review has been submitted!</p>}
      </div>
    </>
  )
}

export default LeaveAReply
