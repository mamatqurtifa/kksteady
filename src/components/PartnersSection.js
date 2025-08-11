// components/PartnersSection.js
import Image from 'next/image';

export default function PartnersSection() {
  return (
    <div>
      <h1 className="text-center text-3xl sm:text-5xl my-20 sm:my-24">Under the auspices of</h1>
      <div className="flex justify-around">
        <Image
          src="/images/stembayo-logo.png"
          alt="stembayo-logo"
          width={176} // equivalent to lg:w-44 (44*4=176px)
          height={176}
          className="w-24 sm:w-32 lg:w-44"
        />
        <Image 
          src="/images/osis-logo.png" 
          alt="osis-logo" 
          width={176}
          height={176}
          className="w-24 sm:w-32 lg:w-44" 
        />
        <Image 
          src="/images/kk-logo.png" 
          alt="kk-logo" 
          width={176}
          height={176}
          className="w-24 sm:w-32 lg:w-44" 
        />
      </div>
    </div>
  )
}