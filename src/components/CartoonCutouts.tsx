
import React from 'react';

const CartoonCutouts = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Girl Cutout - Left Side */}
      <div className="absolute left-8 bottom-0 z-10">
        <svg width="200" height="400" viewBox="0 0 200 400" className="drop-shadow-2xl">
          {/* Girl Figure */}
          <g transform="translate(50, 50)">
            {/* Hair */}
            <path d="M50 30 C30 20, 20 40, 25 60 C20 80, 30 90, 50 85 C70 90, 80 80, 75 60 C80 40, 70 20, 50 30 Z" 
                  fill="#8B4513" opacity="0.9"/>
            
            {/* Face */}
            <ellipse cx="50" cy="65" rx="20" ry="25" fill="#FFD4A3"/>
            
            {/* Eyes */}
            <ellipse cx="45" cy="60" rx="3" ry="4" fill="#4A4A4A"/>
            <ellipse cx="55" cy="60" rx="3" ry="4" fill="#4A4A4A"/>
            <ellipse cx="44" cy="58" rx="1" ry="2" fill="white"/>
            <ellipse cx="54" cy="58" rx="1" ry="2" fill="white"/>
            
            {/* Nose */}
            <ellipse cx="50" cy="68" rx="1" ry="2" fill="#FFB366"/>
            
            {/* Mouth */}
            <path d="M47 72 Q50 75, 53 72" stroke="#E91E63" strokeWidth="2" fill="none"/>
            
            {/* Body - Modern Dress */}
            <rect x="35" y="90" width="30" height="60" rx="5" fill="#FF6B9D"/>
            <rect x="32" y="95" width="36" height="50" rx="8" fill="#FFB3D1" opacity="0.8"/>
            
            {/* Arms */}
            <ellipse cx="28" cy="105" rx="8" ry="25" fill="#FFD4A3" transform="rotate(-20 28 105)"/>
            <ellipse cx="72" cy="105" rx="8" ry="25" fill="#FFD4A3" transform="rotate(20 72 105)"/>
            
            {/* Hands */}
            <circle cx="22" cy="125" r="6" fill="#FFD4A3"/>
            <circle cx="78" cy="125" r="6" fill="#FFD4A3"/>
            
            {/* Legs */}
            <rect x="42" y="150" width="8" height="40" fill="#FFD4A3"/>
            <rect x="52" y="150" width="8" height="40" fill="#FFD4A3"/>
            
            {/* Shoes */}
            <ellipse cx="46" cy="195" rx="8" ry="5" fill="#9C27B0"/>
            <ellipse cx="56" cy="195" rx="8" ry="5" fill="#9C27B0"/>
            
            {/* Modern accessories */}
            <rect x="47" y="100" width="6" height="15" rx="3" fill="#E91E63" opacity="0.7"/>
            <circle cx="50" cy="95" r="3" fill="#FFD700"/>
          </g>
          
          {/* Decorative elements */}
          <g className="animate-float">
            <circle cx="160" cy="80" r="3" fill="#FF6B9D" opacity="0.6"/>
            <circle cx="170" cy="100" r="2" fill="#9C27B0" opacity="0.6"/>
            <circle cx="155" cy="120" r="4" fill="#FFD700" opacity="0.6"/>
          </g>
        </svg>
      </div>

      {/* Boy Cutout - Right Side */}
      <div className="absolute right-8 bottom-0 z-10">
        <svg width="200" height="400" viewBox="0 0 200 400" className="drop-shadow-2xl">
          {/* Boy Figure */}
          <g transform="translate(50, 50) scale(-1, 1)">
            {/* Hair */}
            <path d="M50 35 C30 25, 25 45, 30 55 C25 65, 35 75, 50 70 C65 75, 75 65, 70 55 C75 45, 70 25, 50 35 Z" 
                  fill="#4A4A4A" opacity="0.9"/>
            
            {/* Face */}
            <ellipse cx="50" cy="65" rx="20" ry="25" fill="#FFD4A3"/>
            
            {/* Eyes */}
            <ellipse cx="45" cy="60" rx="3" ry="4" fill="#4A4A4A"/>
            <ellipse cx="55" cy="60" rx="3" ry="4" fill="#4A4A4A"/>
            <ellipse cx="44" cy="58" rx="1" ry="2" fill="white"/>
            <ellipse cx="54" cy="58" rx="1" ry="2" fill="white"/>
            
            {/* Nose */}
            <ellipse cx="50" cy="68" rx="1" ry="2" fill="#FFB366"/>
            
            {/* Mouth */}
            <path d="M47 72 Q50 75, 53 72" stroke="#4A90E2" strokeWidth="2" fill="none"/>
            
            {/* Body - Modern Shirt */}
            <rect x="35" y="90" width="30" height="60" rx="5" fill="#4A90E2"/>
            <rect x="32" y="95" width="36" height="50" rx="8" fill="#87CEEB" opacity="0.8"/>
            
            {/* Arms */}
            <ellipse cx="28" cy="105" rx="8" ry="25" fill="#FFD4A3" transform="rotate(-20 28 105)"/>
            <ellipse cx="72" cy="105" rx="8" ry="25" fill="#FFD4A3" transform="rotate(20 72 105)"/>
            
            {/* Hands */}
            <circle cx="22" cy="125" r="6" fill="#FFD4A3"/>
            <circle cx="78" cy="125" r="6" fill="#FFD4A3"/>
            
            {/* Legs - Jeans */}
            <rect x="42" y="150" width="8" height="40" fill="#2E4057"/>
            <rect x="52" y="150" width="8" height="40" fill="#2E4057"/>
            
            {/* Shoes */}
            <ellipse cx="46" cy="195" rx="8" ry="5" fill="#FF6B35"/>
            <ellipse cx="56" cy="195" rx="8" ry="5" fill="#FF6B35"/>
            
            {/* Modern accessories - Watch */}
            <rect x="20" y="122" width="4" height="6" rx="2" fill="#2E4057"/>
            <circle cx="22" cy="125" r="2" fill="#FFD700"/>
          </g>
          
          {/* Decorative elements */}
          <g className="animate-float" style={{animationDelay: '1s'}}>
            <circle cx="40" cy="80" r="3" fill="#4A90E2" opacity="0.6"/>
            <circle cx="30" cy="100" r="2" fill="#FF6B35" opacity="0.6"/>
            <circle cx="45" cy="120" r="4" fill="#87CEEB" opacity="0.6"/>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CartoonCutouts;
