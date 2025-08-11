/* eslint-disable @next/next/no-img-element */
// components/AboutSection.js
export default function AboutSection() {
  return (
    <div
      className="lg:mt-48 pt-28 flex justify-center items-center h-[90vh] lg:h-auto"
      id="about"
    >
      <div className="w-[70rem] flex flex-col items-center lg:flex-row">
        <img
          src="/images/Steady-Logo-Retro-Round-Bubble.png"
          alt="Logo Retro Bubble"
          className="w-full lg:w-96 mb-16 md:mb-0"
        />
        <div className="text-lg flex flex-col gap-4 justify-center">
          <p className="text-steady-red text-4xl sm:text-5xl font-bold">About Us</p>
          <p>
            Established on 22nd July 2022 Steady is an extracurricular
            activity at 2 Depok Sleman Vocational High School under the
            auspices of the Student Council in the skills and entrepreneurship
            field section.
          </p>
          <p>
            Our slogan{" "}
            <span className="text-steady-red font-bold">
              &quot;Bring the inside out&quot;
            </span>{" "}
            encapsulates our commitment to make everyone inside and outside
            understand more about Stembayo and its features.
          </p>
        </div>
      </div>
    </div>
  )
}