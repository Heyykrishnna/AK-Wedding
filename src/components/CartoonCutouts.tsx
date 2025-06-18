
import React from 'react';

const CartoonCutouts = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Girl Cutout - Left Side */}
      <div className="absolute left-8 bottom-0 z-10">
        <svg width="180" height="350" viewBox="0 0 180 350" className="drop-shadow-2xl">
          {/* Girl Figure - More realistic proportions */}
          <g transform="translate(40, 30)">
            {/* Hair - More detailed and flowing */}
            <path d="M50 25 C25 15, 15 35, 18 50 C12 70, 20 85, 35 88 C40 90, 45 88, 50 85 C55 88, 60 90, 65 88 C80 85, 88 70, 82 50 C85 35, 75 15, 50 25 Z" 
                  fill="#8B4513" opacity="0.95"/>
            <path d="M20 45 C15 50, 18 58, 25 60 C30 62, 35 58, 32 52 C30 48, 25 45, 20 45 Z" 
                  fill="#8B4513" opacity="0.9"/>
            <path d="M80 45 C85 50, 82 58, 75 60 C70 62, 65 58, 68 52 C70 48, 75 45, 80 45 Z" 
                  fill="#8B4513" opacity="0.9"/>
            
            {/* Face - More realistic shape */}
            <ellipse cx="50" cy="55" rx="18" ry="22" fill="#FDBCB4"/>
            
            {/* Eyebrows */}
            <path d="M40 48 C43 46, 47 46, 50 48" stroke="#654321" strokeWidth="1.5" fill="none"/>
            <path d="M50 48 C53 46, 57 46, 60 48" stroke="#654321" strokeWidth="1.5" fill="none"/>
            
            {/* Eyes - More detailed */}
            <ellipse cx="43" cy="52" rx="4" ry="3" fill="white"/>
            <ellipse cx="57" cy="52" rx="4" ry="3" fill="white"/>
            <circle cx="43" cy="52" r="2.5" fill="#4A4A4A"/>
            <circle cx="57" cy="52" r="2.5" fill="#4A4A4A"/>
            <circle cx="42" cy="51" r="0.8" fill="white"/>
            <circle cx="56" cy="51" r="0.8" fill="white"/>
            
            {/* Eyelashes */}
            <path d="M39 50 L39 48 M41 49 L40 47 M45 49 L45 47 M47 50 L48 48" stroke="#4A4A4A" strokeWidth="0.8"/>
            <path d="M53 50 L52 48 M55 49 L55 47 M59 49 L60 47 M61 50 L61 48" stroke="#4A4A4A" strokeWidth="0.8"/>
            
            {/* Nose - More defined */}
            <path d="M50 58 C49 60, 51 60, 50 58" fill="#E8A798"/>
            <ellipse cx="49" cy="59" rx="0.5" ry="1" fill="#D49B8C" opacity="0.6"/>
            <ellipse cx="51" cy="59" rx="0.5" ry="1" fill="#D49B8C" opacity="0.6"/>
            
            {/* Lips - More realistic */}
            <path d="M46 65 Q50 68, 54 65 Q52 67, 50 67 Q48 67, 46 65" fill="#D2527F"/>
            <path d="M47 65 Q50 66, 53 65" stroke="#B8446B" strokeWidth="0.5" fill="none"/>
            
            {/* Body - Modern fitted dress */}
            <path d="M32 80 C32 78, 34 76, 38 76 L62 76 C66 76, 68 78, 68 80 L70 130 C70 135, 68 140, 65 140 L35 140 C32 140, 30 135, 30 130 Z" 
                  fill="#E91E63"/>
            <path d="M36 80 L64 80 C65 80, 66 81, 66 82 L68 125 C68 128, 66 130, 64 130 L36 130 C34 130, 32 128, 32 125 L34 82 C34 81, 35 80, 36 80 Z" 
                  fill="#F48FB1" opacity="0.7"/>
            
            {/* Arms - More realistic */}
            <ellipse cx="25" cy="95" rx="6" ry="20" fill="#FDBCB4" transform="rotate(-15 25 95)"/>
            <ellipse cx="75" cy="95" rx="6" ry="20" fill="#FDBCB4" transform="rotate(15 75 95)"/>
            
            {/* Sleeves */}
            <ellipse cx="30" cy="85" rx="8" ry="12" fill="#E91E63" transform="rotate(-15 30 85)" opacity="0.9"/>
            <ellipse cx="70" cy="85" rx="8" ry="12" fill="#E91E63" transform="rotate(15 70 85)" opacity="0.9"/>
            
            {/* Hands */}
            <circle cx="18" cy="115" r="5" fill="#FDBCB4"/>
            <circle cx="82" cy="115" r="5" fill="#FDBCB4"/>
            
            {/* Fingers */}
            <ellipse cx="15" cy="113" rx="1" ry="3" fill="#FDBCB4" transform="rotate(-10 15 113)"/>
            <ellipse cx="17" cy="111" rx="1" ry="3" fill="#FDBCB4" transform="rotate(5 17 111)"/>
            <ellipse cx="85" cy="113" rx="1" ry="3" fill="#FDBCB4" transform="rotate(10 85 113)"/>
            <ellipse cx="83" cy="111" rx="1" ry="3" fill="#FDBCB4" transform="rotate(-5 83 111)"/>
            
            {/* Legs */}            
            <rect x="42" y="140" width="6" height="35" fill="#FDBCB4"/>
            <rect x="52" y="140" width="6" height="35" fill="#FDBCB4"/>
            
            {/* Modern heels */}
            <ellipse cx="45" cy="180" rx="7" ry="4" fill="#C2185B"/>
            <ellipse cx="55" cy="180" rx="7" ry="4" fill="#C2185B"/>
            <rect x="43" y="176" width="4" height="8" fill="#C2185B"/>
            <rect x="53" y="176" width="4" height="8" fill="#C2185B"/>
            
            {/* Accessories - Earrings */}
            <circle cx="32" cy="55" r="2" fill="#FFD700"/>
            <circle cx="68" cy="55" r="2" fill="#FFD700"/>
            
            {/* Necklace */}
            <path d="M38 75 Q50 78, 62 75" stroke="#FFD700" strokeWidth="2" fill="none"/>
            <circle cx="50" cy="76" r="2" fill="#FFD700"/>
          </g>
          
          {/* Floating elements */}
          <g className="animate-float">
            <circle cx="150" cy="70" r="2" fill="#E91E63" opacity="0.6"/>
            <circle cx="160" cy="90" r="1.5" fill="#FFD700" opacity="0.6"/>
            <circle cx="145" cy="110" r="3" fill="#F48FB1" opacity="0.6"/>
          </g>
        </svg>
      </div>

      {/* Boy Cutout - Right Side */}
      <div className="absolute right-8 bottom-0 z-10">
        <svg width="180" height="350" viewBox="0 0 180 350" className="drop-shadow-2xl">
          {/* Boy Figure - More realistic proportions */}
          <g transform="translate(40, 30) scale(-1, 1)">
            {/* Hair - Short modern style */}
            <path d="M50 30 C30 20, 25 40, 28 50 C25 60, 32 70, 45 68 C50 70, 55 68, 60 65 C70 62, 75 50, 72 40 C75 30, 65 20, 50 30 Z" 
                  fill="#2C1810" opacity="0.95"/>
            <path d="M35 42 C30 45, 32 52, 38 53 C42 54, 45 50, 43 46 C41 43, 38 42, 35 42 Z" 
                  fill="#2C1810" opacity="0.9"/>
            
            {/* Face - More realistic shape */}
            <ellipse cx="50" cy="55" rx="18" ry="22" fill="#FDBCB4"/>
            
            {/* Eyebrows - Thicker for masculine look */}
            <path d="M40 48 C43 46, 47 46, 50 48" stroke="#2C1810" strokeWidth="2" fill="none"/>
            <path d="M50 48 C53 46, 57 46, 60 48" stroke="#2C1810" strokeWidth="2" fill="none"/>
            
            {/* Eyes - More angular */}
            <ellipse cx="43" cy="52" rx="4" ry="3" fill="white"/>
            <ellipse cx="57" cy="52" rx="4" ry="3" fill="white"/>
            <circle cx="43" cy="52" r="2.5" fill="#4A4A4A"/>
            <circle cx="57" cy="52" r="2.5" fill="#4A4A4A"/>
            <circle cx="42" cy="51" r="0.8" fill="white"/>
            <circle cx="56" cy="51" r="0.8" fill="white"/>
            
            {/* Nose - More defined masculine */}
            <path d="M50 58 C49 60, 51 60, 50 58" fill="#E8A798"/>
            <ellipse cx="49" cy="59" rx="0.5" ry="1" fill="#D49B8C" opacity="0.6"/>
            <ellipse cx="51" cy="59" rx="0.5" ry="1" fill="#D49B8C" opacity="0.6"/>
            
            {/* Lips - Thinner for masculine look */}
            <path d="M47 65 Q50 66, 53 65" stroke="#C2185B" strokeWidth="1.5" fill="none"/>
            
            {/* Body - Modern shirt */}
            <rect x="32" y="76" width="36" height="64" rx="4" fill="#1976D2"/>
            <rect x="34" y="78" width="32" height="60" rx="3" fill="#42A5F5" opacity="0.8"/>
            
            {/* Shirt collar */}
            <path d="M45 76 L50 82 L55 76 L58 78 L50 86 L42 78 Z" fill="#1565C0"/>
            
            {/* Arms - More muscular */}
            <ellipse cx="25" cy="95" rx="7" ry="22" fill="#FDBCB4" transform="rotate(-15 25 95)"/>
            <ellipse cx="75" cy="95" rx="7" ry="22" fill="#FDBCB4" transform="rotate(15 75 95)"/>
            
            {/* Shirt sleeves */}
            <ellipse cx="30" cy="85" rx="9" ry="14" fill="#1976D2" transform="rotate(-15 30 85)" opacity="0.9"/>
            <ellipse cx="70" cy="85" rx="9" ry="14" fill="#1976D2" transform="rotate(15 70 85)" opacity="0.9"/>
            
            {/* Hands */}
            <circle cx="18" cy="117" r="5" fill="#FDBCB4"/>
            <circle cx="82" cy="117" r="5" fill="#FDBCB4"/>
            
            {/* Fingers */}
            <ellipse cx="15" cy="115" rx="1" ry="3" fill="#FDBCB4" transform="rotate(-10 15 115)"/>
            <ellipse cx="17" cy="113" rx="1" ry="3" fill="#FDBCB4" transform="rotate(5 17 113)"/>
            <ellipse cx="85" cy="115" rx="1" ry="3" fill="#FDBCB4" transform="rotate(10 85 115)"/>
            <ellipse cx="83" cy="113" rx="1" ry="3" fill="#FDBCB4" transform="rotate(-5 83 113)"/>
            
            {/* Legs - Jeans */}
            <rect x="42" y="140" width="7" height="35" fill="#1A237E"/>
            <rect x="51" y="140" width="7" height="35" fill="#1A237E"/>
            
            {/* Jeans details */}
            <line x1="45" y1="145" x2="45" y2="170" stroke="#303F9F" strokeWidth="0.5"/>
            <line x1="54" y1="145" x2="54" y2="170" stroke="#303F9F" strokeWidth="0.5"/>
            
            {/* Modern sneakers */}
            <ellipse cx="45" cy="180" rx="8" ry="4" fill="#FF5722"/>
            <ellipse cx="55" cy="180" rx="8" ry="4" fill="#FF5722"/>
            <ellipse cx="45" cy="178" rx="6" ry="2" fill="#FF7043"/>
            <ellipse cx="55" cy="178" rx="6" ry="2" fill="#FF7043"/>
            
            {/* Watch */}
            <rect x="16" y="114" width="4" height="6" rx="2" fill="#424242"/>
            <circle cx="18" cy="117" r="1.5" fill="#FFD700"/>
          </g>
          
          {/* Floating elements */}
          <g className="animate-float" style={{animationDelay: '1s'}}>
            <circle cx="30" cy="70" r="2" fill="#1976D2" opacity="0.6"/>
            <circle cx="20" cy="90" r="1.5" fill="#FF5722" opacity="0.6"/>
            <circle cx="35" cy="110" r="3" fill="#42A5F5" opacity="0.6"/>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CartoonCutouts;
