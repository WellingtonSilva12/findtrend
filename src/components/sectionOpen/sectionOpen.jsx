import React from 'react'
import tab5 from '../../assets/img/tab5.png'
import './style.css'

const Open = () => {
  return (
    <div>
      <section class="open-new">
        <h2>Open new tabs is sh*t </h2>
        <div class="content-findtrend">
          <div class="find-image">
            <img src={tab5} alt="" />
          </div>
        </div>
        <p>
          A solution for your browser tabs and don’t make your device get slower
          over time. <br /> Get ease and faster to discover a trend with just
          one tab.
        </p>
      </section>
    </div>
  )
}

export default Open
