import Modal from "react-modal";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";

const PartnerModal = ({ setIsModalOpen, isModalOpen }) => {

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  // let number = "🇳🇵+977";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

  };
  // console.log(formData)

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/v1/findPartner", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded z-50"
        overlayClassName="overlay fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40"
      >
        <div className="md:w-[500px] px-5 overflow-y-scroll md:h-[500px]">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold mb-4">Find Partner</h2>
            <ImCross size={20} className="cursor-pointer text-gray-600"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          {/* <h2>Fill all information</h2> */}
          <form onSubmit={submitHandler} className="flex flex-col w-full">

            <div className="w-full">
              <label htmlFor="username" className="mb-2">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                autocomplete='off'
                required
                placeholder="Enter your first name"
                className="mb-4 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>


            <div className="w-full">
              <label htmlFor="email" className="mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={formData.lname}
                required
                onChange={handleChange}
                autocomplete='off'
                placeholder="Enter Your last name"
                className="mb-4 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>


            <div className="w-full">
              <label htmlFor="phoneNumber" className="mb-2">
                Work/Education
              </label>
              <div className="flex items-center border pl-2 border-gray-300 rounded-md mb-4">
                {/* <span className="mr-2 text-sm">{number}</span> */}
                <input
                  type="text"
                  id="work"
                  name="work"
                  value={formData.work}
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  autocomplete='off'
                  className="p-2 focus:outline-none bg-white w-[420px] md:w-[220px]"
                />
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="phoneNumber" className="mb-2">
                Phone Number
              </label>
              <div className="flex items-center border pl-2 border-gray-300 rounded-md mb-4">
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  autocomplete='off'
                  className="p-2 focus:outline-none bg-white w-[420px] md:w-[220px]"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label>Already have a room?</label>
              <div className="flex space-x-16">
                <div className="flex space-x-2">
                  <input
                    type="radio"
                    name="selection"
                    id="book"
                    value={'yes'}
                    autoComplete="off"
                    required
                    onChange={handleChange}
                    autocomplete='off'
                    className="p-2 focus:outline-none h-5 w-5"
                  />
                  <div>Yes</div>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="radio"
                    name="selection"
                    id="book"
                    value='no'
                    autoComplete="off"
                    required
                    onChange={handleChange}
                    autocomplete='off'
                    className="p-2 focus:outline-none h-5 w-5"
                  />
                  <div>No</div>
                </div>
              </div>
            </div>

            {
              formData.book === 'yes' &&
              <div className="mt-3 transition-all duration-500 ease-in-out">
                <div className=" w-full">
                  <label htmlFor="address" className="mb-2">
                    Room Location
                  </label>
                  <input
                    type="text"
                    id="roomLocation"
                    name="roomLocation"
                    value={formData.roomLocation}
                    required
                    onChange={handleChange}
                    autocomplete='off'
                    placeholder="Enter room location"
                    className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
                <div className=" w-full">
                  <label htmlFor="priceRange" className="mb-2">
                    Room Price
                  </label>
                  <input
                    type="number"
                    id="roomPrice"
                    name="roomPrice"
                    value={formData.roomPrice}
                    required
                    onChange={handleChange}
                    autocomplete='off'
                    placeholder="Enter your price Range"
                    className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
              </div>
            }

            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 hover:bg-green-600 w-full text-white mt-3 py-2 px-4 rounded-md">
              {loading ? "Loading..." : "Register"}
            </button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default PartnerModal
