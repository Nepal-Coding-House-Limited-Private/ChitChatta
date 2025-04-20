import React, { useState } from 'react'

function UserSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Dummy data for demonstration
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com' },
  ]

  const handleSearch = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    setIsLoading(true)

    // Filter users based on search query
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    )

    setSearchResults(query ? filteredUsers : [])
    setIsLoading(false)
  }

  const handleSelectUser = (user) => {
    // TODO: Add logic to start a conversation with selected user
    setSearchQuery('')
    setSearchResults([])
  }

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search users..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {isLoading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>

      {searchResults.length > 0 && (
        <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
          {searchResults.map((user) => (
            <div
              key={user.id}
              onClick={() => handleSelectUser(user)}
              className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
            >
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserSearch