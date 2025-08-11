/* eslint-disable @next/next/no-img-element */
// components/ProductsSection.js
export default function ProductsSection() {
  return (
    <div
      className="mt-28 pt-28 flex flex-col justify-center items-center"
      id="products"
    >
      <div className="flex flex-col justify-center">
        <p className="text-steady-red text-xl sm:text-5xl font-bold">Our Products</p>
        <p>See all our project and exclusive products</p>
      </div>
      
      <div className="pt-10 grid justify-between grid-cols-8 lg:grid-cols-12 grid-rows-8 lg:grid-rows-32 text-white w-full gap-2 md:gap-4">
        {/* Logo Retro */}
        <div className="bg-white py-4 col-span-4 lg:col-span-5 row-span-1 lg:row-span-4 rounded-2xl sm:rounded-3xl drop-shadow-lg relative flex justify-center items-center overflow-hidden order-1 lg:order-1">
          <img
            src="/images/Steady-Logo-Retro.png"
            alt="logo-retro"
            className="w-4/6 lg:w-1/2 hover-scale"
          />
        </div>

        {/* T-Shirt */}
        <div className="bg-steady-yellow col-span-4 lg:col-span-4 row-span-2 lg:row-span-8 rounded-2xl md:rounded-3xl drop-shadow-lg relative overflow-hidden flex items-center lg:items-start order-2 lg:order-2">
          <img
            src="/images/products/steady-tshirt.png"
            alt="tshirt"
            className="absolute hover-scale"
          />
        </div>

        {/* Lanyard */}
        <div className="bg-steady-red col-span-4 lg:col-span-3 row-span-2 lg:row-span-8 rounded-2xl md:rounded-3xl drop-shadow-lg relative overflow-hidden order-3 lg:order-3">
          <img
            src="/images/products/steady-lanyard.png"
            alt="lanyard"
            className="absolute hover-scale"
          />
        </div>

        {/* Evacuation Sign */}
        <div className="bg-steady-blue col-span-8 row-span-5 lg:col-span-5 lg:row-span-20 rounded-3xl drop-shadow-lg flex flex-col justify-between left-0 top-0 overflow-hidden order-6 lg:order-4">
          <h1 className="text-white w-1/2 text-5xl lg:text-6xl drop-shadow-lg font-extrabold m-8">
            EVACUATION SIGN
          </h1>
          <img
            src="/images/products/steady-evacuation-sign.png"
            alt="evacuation sign"
            className="w-1/2 lg:w-full absolute bottom-0 right-0 lg:left-0 hover-scale"
          />
          <button className="text-black text-lg md:text-2xl bg-white py-4 px-8 rounded-full drop-shadow-lg self-start m-8">
            See More
          </button>
        </div>

        {/* Annual Merchandise */}
        <div className="bg-steady-yellow col-span-5 lg:col-span-7 row-span-3 lg:row-span-8 rounded-2xl md:rounded-3xl drop-shadow-lg relative flex flex-col justify-between p-8 overflow-hidden order-7 lg:order-5">
          <h1 className="text-white text-2xl lg:text-6xl drop-shadow-lg font-extrabold">
            OFFICIAL ANNUAL MERCHANDISE
          </h1>
          <button className="text-black text-lg md:text-2xl mt-4 lg:mt-0 bg-white py-4 px-8 rounded-full drop-shadow-lg self-start">
            See More
          </button>
        </div>

        {/* Stickers */}
        <div className="bg-steady-red col-span-4 row-span-1 lg:row-span-8 rounded-2xl md:rounded-3xl drop-shadow-lg relative overflow-hidden order-5 lg:order-6">
          <img
            src="/images/products/steady-stickers-upscaled.png"
            alt="stickers"
            className="w-full absolute hover-scale"
          />
        </div>

        {/* Tote Bag */}
        <div className="bg-steady-blue col-span-4 lg:col-span-3 row-span-2 lg:row-span-8 rounded-2xl lg:rounded-3xl drop-shadow-lg relative overflow-hidden order-4 lg:order-7">
          <img
            src="/images/products/steady-tote-bag.png"
            alt="tote-bag"
            className="absolute hover-scale"
          />
        </div>

        {/* 2024 Calendars */}
        <div className="bg-steady-red col-span-9 row-span-8 rounded-3xl drop-shadow-lg relative overflow-hidden flex flex-col justify-between order-9 lg:order-8">
          <h1 className="text-white text-3xl lg:text-8xl drop-shadow-lg font-extrabold w-1/2 mt-8 mx-8">
            2024 CALENDARS
          </h1>
          <img
            src="/images/products/steady-calendars.png"
            alt="calendars"
            className="h-full absolute right-0 hover-scale"
          />
          <button className="text-black text-lg lg:text-2xl bg-white py-4 px-8 rounded-full drop-shadow-lg self-start mb-8 mx-8 mt-4 lg:mt-0">
            See More
          </button>
        </div>

        {/* What's Next */}
        <div className="bg-white col-span-4 lg:col-span-3 row-span-3 lg:row-span-8 rounded-3xl drop-shadow-lg relative flex flex-col justify-center overflow-hidden order-8 lg:order-9">
          <img
            src="/images/products/empty-box.png"
            alt="empty-box"
            className="bottom-0 absolute hover-scale"
          />
          <h1 className="text-red-500 text-2xl lg:text-6xl drop-shadow-lg font-extrabold m-4 lg:m-8">
            WHAT&apos;S NEXT?
          </h1>
          <button className="hidden lg:block text-black text-2xl bg-white py-4 px-8 rounded-full drop-shadow-lg self-start m-8">
            Discover
          </button>
        </div>
      </div>
    </div>
  )
}