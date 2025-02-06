import React from 'react'
import ChatMessages from './ChatMessages';

function ChatInteractions() {
  return (
    <div className="w-full bg-gray-900 min-h-[100vh]">
        <div className=' w-full flex justify-center h-auto overflow-auto'>
          <ChatMessages/>
        </div>
    </div>
  )
}

export default ChatInteractions;
