import React from 'react'
import facebook from "../assets/images/facebookW.png"
import linkedIn from "../assets/images/linkedInW.png"
import tiktok from "../assets/images/tiktokW.png"
import blogShareStyle from '../css/share.module.css'


const Share = () => {
  return (
    <>
      <div className={blogShareStyle.shareStory}>
        <hr className={blogShareStyle.shareStoryLine} />
        <h3>Share this story</h3>
        <div>
          <img src={facebook} alt="" />
          <img src={linkedIn} alt="" />
          <img src={tiktok} alt="" />
        </div>
      </div>
    </>
  )
}

export default Share
