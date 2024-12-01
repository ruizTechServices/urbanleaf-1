import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const AuthButtonContainer = () => {
  return (
    <div className="hidden md:block">
      <SignedOut>
        <div className="relative group">
          {/* Marble texture overlay */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-90 mix-blend-overlay" />
          
          {/* Main button container */}
          <div className="relative rounded-xl border border-gray-200/30 bg-gradient-to-br from-gray-50 via-white to-gray-100 p-3 shadow-lg transition-all duration-300">
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Marble veins */}
            <div className="absolute inset-0 rounded-xl opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)]" style={{ backgroundSize: '16px 16px' }} />
            
            {/* Button content */}
            <div className="relative flex items-center justify-center hover:transform hover:scale-105">
              <SignInButton mode="modal">
                <button className="text-green-600 px-5 py-1 font-semibold text-lg rounded-full hover:text-yellow-200 transition-colors duration-300">
                  Sign in
                </button>
              </SignInButton>
            </div>
          </div>
        </div>
      </SignedOut>
      
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default AuthButtonContainer;