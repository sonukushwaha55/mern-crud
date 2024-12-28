import React, { useState } from 'react'

const CreatePage = () => {

  const [newProduct, setNewProduct] =useState({
    name:"",
    price:"",
    image:"",
  });

  const handleChange = (e) =>{
    const {name, price, image} = e.target
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("product submitted");
    
  }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white-200 p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Create Product</h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
           
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
           
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product price"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-2" >
            Images:
          </label>
          <input
            type="text"
            id="image"
            name="image"

            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
            required
          />
        </div>


        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </form>
    </div>
      </div>

  )
}

export default CreatePage
