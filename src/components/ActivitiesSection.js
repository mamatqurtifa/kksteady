/* eslint-disable @next/next/no-img-element */
// components/ActivitiesSection.js
export default function ActivitiesSection() {
  return (
    <div
      className="mt-16 pt-24 md:pt-0 md:mt-0 lg:mt-28 lg:pt-28 flex flex-col justify-center items-center h-[90vh] lg:h-auto"
      id="activities"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-steady-red text-4xl sm:text-5xl font-bold">What We Do?</p>
        <p>Let&apos;s discover our activities</p>
      </div>

      {/* Activity 1 */}
      <div className="flex mt-8 sm:mt-6 lg:mt-0 items-center sm:items-start">
        <div className="w-1/2 text-right flex flex-col justify-center gap-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-steady-grey">
              Weekly Extracurricular
            </h1>
            <p className="text-sm sm:text-base font-extralight">Tuesday 23, January 2024</p>
          </div>
          <div>
            <p className="text-sm sm:text-base">
              Established on 22nd July 2022 Steady is an extracurricular
              activity at 2 Depok Sleman Vocational High School.
            </p>
          </div>
          <div>
            <button className="text-black bg-steady-blue text-lg sm:text-2xl py-2 px-4 sm:py-4 sm:px-8 rounded-full drop-shadow-lg">
              Read More
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img src="/images/steady-activities-1.png" alt="activity-1" />
        </div>
      </div>

      {/* Activity 2 */}
      <div className="flex pt-8 lg:pt-0">
        <div className="w-1/2">
          <img src="/images/steady-activities-2.png" alt="activity-2" />
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-steady-grey">
              Offline Meeting
            </h1>
            <p className="text-sm sm:text-base font-extralight">Tuesday 23, January 2024</p>
          </div>
          <div>
            <p className="text-sm sm:text-base">
              Established on 22nd July 2022 Steady is an extracurricular
              activity at 2 Depok Sleman Vocational High School.
            </p>
          </div>
          <div>
            <button className="text-black bg-steady-yellow text-lg sm:text-2xl py-2 px-4 sm:py-4 sm:px-8 rounded-full drop-shadow-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}