import React from 'react'

const FooterCta = () => {
  return (
    <div className="flex justify-between pt-20 pb-10 border-b-2 border-white/50">
        <div >
          <h2 className="text-left text-5xl text-white font-bold">
          Ready to transform your ideas?<br/> Let’s get started!
          </h2>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-orange h-fit">
            Get Started
          </button>
        </div>
    </div>
  )
}

export default FooterCta