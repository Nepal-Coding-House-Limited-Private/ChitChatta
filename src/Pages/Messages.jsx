import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserSearch from '../components/UserSearch'
import '../styles/custom.css'

function Messages() {
  const navigate = useNavigate()
  const [selectedChat, setSelectedChat] = useState(null)
  const [message, setMessage] = useState('')

  // Dummy data for demonstration
  const conversations = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey there!', unread: 2 },
    { id: 2, name: 'Jane Smith', lastMessage: 'How are you?', unread: 0 },
  ]

  const handleLogout = () => {
    // TODO: Add actual logout logic here
    navigate('/login')
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim()) {
      // TODO: Add actual message sending logic here
      setMessage('')
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r border-gray-200 shadow-lg">
        <div className="p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div 
                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium cursor-pointer"
                onClick={() => navigate('/profile')}
                title="View Profile"
              >
                JD
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => navigate('/profile')}
                  className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100"
                  title="Profile"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                <button
                  onClick={() => navigate('/settings')}
                  className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100"
                  title="Settings"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <UserSearch />
          <button
            onClick={handleLogout}
            className="mt-4 w-full py-2 px-4 text-sm text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Logout
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-80px)] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50">
          {conversations.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-blue-50 transition-colors duration-200 ${selectedChat?.id === chat.id ? 'bg-blue-50' : ''}`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                  {chat.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-900">{chat.name}</h3>
                    {chat.unread > 0 && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 truncate mt-1">{chat.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {selectedChat ? (
          <>
            <div className="p-4 border-b border-gray-200 bg-white sticky top-0 z-10 flex items-center space-x-3 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                {selectedChat.name.charAt(0)}
              </div>
              <div>
                <h2 className="font-medium text-gray-900">{selectedChat.name}</h2>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {/* Messages will be displayed here */}
            </div>
            <div className="p-4 border-t border-gray-200 bg-white sticky bottom-0 z-10">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-lg border-gray-200 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 focus:ring-1 transition-shadow duration-200 py-2 px-4"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 flex items-center gap-2"
                >
                  <span>Send</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500 bg-gray-50">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              <p>Select a conversation to start chatting</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Messages