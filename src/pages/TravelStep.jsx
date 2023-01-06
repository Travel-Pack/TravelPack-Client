import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SwiperCard from "../components/Swiper/SwiperCard"

export default function TravelStep() {
  const [sliderVal, setSliderVal] = useState(0)
  const [topText, setTopText] = useState(false)
  const [showDest, setShowDest] = useState(false)
  const nav = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    nav("/travelItenerary")
  }

  /* budget section di "highlight"
  perlu hightlight untuk destination allocation */
  /* fitur member : bisa menggunakan alokasi destination (jika premium)
  Landing langsung diarahkan ke desired budget(middle)
  tambahin alokasi hotel
  2 slider (kiri buat hotel & kanan buat travelingnya) 
  city & desination perlu dibedakan karena destinasi dapat banyak tambahkan border di city jika sudah dipilih (hide yng lain)
  destination sudah dipiklih terus di kasih ui lagi

  
  generate()
  subtotal didapat dari desi*/
  const cityImg = [
    "https://img.freepik.com/premium-photo/monas-monument-jakarta-indonesia_134785-10762.jpg?w=1800",
    "https://statik.tempo.co/data/2020/04/18/id_931835/931835_720.jpg",
    "https://images.unsplash.com/photo-1615608178738-37d47d27c13d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1615608273520-ce1dda209c29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1615556075244-9dd09e1934fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1627071690191-2a5f5f482eab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80",
    "https://images.unsplash.com/photo-1626710916458-4307c35d48e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1614088459293-5669fadc3448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1525849306000-cc26ceb5c1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1525849306000-cc26ceb5c1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1525849306000-cc26ceb5c1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1624495833746-d7415f9149af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  ]

  function showCity() {
    setTopText(!topText)
  }

  function displayDest() {
    setShowDest(!showDest)
  }

  function selectDest() {
    console.log()
  }
  return (
    <div>
      <div className="flex ease-in-out h-screen">
        <div
          className={`duration-100 ease-in-out relative ${
            topText ? "w-1/4" : "w-full"
          }`}>
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1611918126831-0a8352d6196f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div
            onClick={() => {
              setTopText(false), setShowDest(false)
            }}
            className={`absolute top-24 border-white pb-5 cursor-pointer ${
              topText ? "text-4xl left-10" : "text-6xl inset-1/3 text-center"
            }`}>
            <h1 className="text-white font-semibold">Preparing</h1>
            <div className="border-b-2 pb-5 border-white">
              <h1 className="text-white font-semibold">
                <span className="font-light">the next</span> Travel
              </h1>
            </div>
          </div>
          <div
            className={`flex flex-col gap-5 text-center absolute inset-y-1/3 bg-black h-fit bg-opacity-60 py-16 px-5 ${
              topText ? "inset-x-5" : "inset-x-1/3"
            }`}>
            <label
              htmlFor="inputBudget"
              className="text-2xl background text-white">
              Desired Budget :
            </label>
            <input
              type="text"
              id="inputBudget"
              className="w-3/4 mx-auto shadow-md border-yelloku bg-transparent text-white text-center focus:ring-0 focus:border-yellow-100 font-medium text-4xl placeholder:text-2xl"
              placeholder="2500"
            />

            <label
              htmlFor="numberDestination"
              className="font-medium text-xl text-white mx-auto">
              Number of Destinations
            </label>
            <input
              type="text"
              id="numberDestination"
              className="w-3/4 mx-auto shadow-md border-yelloku bg-transparent text-white text-center focus:ring-0 focus:border-yellow-100 font-medium text-4xl placeholder:text-2xl"
              placeholder="e.g : 5"
            />

            <label
              htmlFor="default-range"
              className="block mb-1 font-medium text-xl text-white mx-auto">
              Destination Allocation : {sliderVal ? sliderVal + "%" : ""}
            </label>
            <input
              id="default-range"
              type="range"
              onChange={(e) => setSliderVal(e.target.value)}
              className="w-1/2 mx-auto h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            {topText ? (
              <div>
                <button className="text-xl bg-yelloku w-full mx-auto text-black py-1.5 active:scale-95 duration-200">
                  new budget
                </button>
              </div>
            ) : (
              <button
                onClick={showCity}
                className="text-xl bg-yelloku w-full mx-auto text-black py-1.5 active:scale-95 duration-200">
                choose city
              </button>
            )}
            {showDest ? (
              <h1 className="text-2xl font-medium text-white">
                Destination in Jakarta
              </h1>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          className={`mx-auto pl-2 pt-2 duration-200 ease-in-out bg-gray-50 ${
            topText ? "block w-3/4 " : "hidden w-0"
          }`}>
          <div
            className={`${
              showDest
                ? "w-0 hidden"
                : "w-full block overflow-y-auto max-h-screen"
            }`}
            id="scrollStyle">
            <div className="flex flex-wrap gap-2 justify-center">
              {cityImg.map((el) => {
                return (
                  <div className="max-w-xs aspect-square" onClick={displayDest}>
                    <img src={el} alt="" className="w-full h-full" />
                  </div>
                )
              })}
            </div>
          </div>
          {showDest ? (
            <form onSubmit={(e) => handleSubmit(e)}>
              <div
                className="w-full block overflow-y-auto max-h-screen"
                id="scrollStyle">
                <div className="flex flex-wrap gap-2 justify-center">
                  {cityImg.map((el) => {
                    return (
                      <div
                        className="max-w-xs aspect-square"
                        onClick={selectDest}>
                        <img src={el} alt="" className="w-full h-full" />
                      </div>
                    )
                  })}
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-black py-3 max-w-6xl mx-auto mt-10 block">
                  Generate
                </button>
              </div>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}
