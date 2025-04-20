import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '',
    bio: 'Hello, I am using Chat App!',
    location: 'New York, USA',
    joinDate: 'January 2024'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Add actual profile update logic here
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Profile</h2>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md"
            >
              Edit Profile
            </button>
          )}
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-medium">
                {formData.name.charAt(0)}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-medium">
                {formData.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{formData.name}</h3>
                <p className="text-gray-500">{formData.email}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700">Location</h4>
              <p className="mt-1">{formData.location}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700">Bio</h4>
              <p className="mt-1">{formData.bio}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700">Member Since</h4>
              <p className="mt-1">{formData.joinDate}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile