
import React from 'react';

const CartoonCutouts = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Girl Cutout - Left Side */}
      <div className="absolute left-8 bottom-0 z-10">
        <svg width="200" height="400" viewBox="0 0 200 400" className="drop-shadow-2xl">
          {/* Girl Figure - Realistic proportions */}
          <g transform="translate(50, 40)">
            {/* Hair - Long flowing hair */}
            <path d="M50 20 C20 10, 10 30, 15 55 C8 80, 18 100, 35 105 C40 108, 45 106, 50 102 C55 106, 60 108, 65 105 C82 100, 92 80, 85 55 C90 30, 80 10, 50 20 Z" 
                  fill="#8B4513" stroke="#654321" strokeWidth="1"/>
            
            {/* Hair highlights and texture */}
            <path d="M25 45 C20 50, 23 65, 30 68 C35 70, 40 65, 37 58 C35 52, 30 45, 25 45 Z" 
                  fill="#A0522D" opacity="0.8"/>
            <path d="M75 45 C80 50, 77 65, 70 68 C65 70, 60 65, 63 58 C65 52, 70 45, 75 45 Z" 
                  fill="#A0522D" opacity="0.8"/>
            
            {/* Face - More realistic skin tone and shape */}
            <ellipse cx="50" cy="65" rx="22" ry="28" fill="#FDBCB4" stroke="#E8A798" strokeWidth="0.5"/>
            
            {/* Face shadows for depth */}
            <ellipse cx="35" cy="70" rx="3" ry="8" fill="#E8A798" opacity="0.3"/>
            <ellipse cx="65" cy="70" rx="3" ry="8" fill="#E8A798" opacity="0.3"/>
            
            {/* Eyebrows - More defined */}
            <path d="M38 55 C42 52, 48 52, 52 55" stroke="#654321" strokeWidth="2" fill="none"/>
            <path d="M48 55 C52 52, 58 52, 62 55" stroke="#654321" strokeWidth="2" fill="none"/>
            
            {/* Eyes - More realistic with details */}
            <ellipse cx="42" cy="62" rx="5" ry="4" fill="white" stroke="#DDD" strokeWidth="0.5"/>
            <ellipse cx="58" cy="62" rx="5" ry="4" fill="white" stroke="#DDD" strokeWidth="0.5"/>
            <circle cx="42" cy="62" r="3" fill="#2E7D32"/>
            <circle cx="58" cy="62" r="3" fill="#2E7D32"/>
            <circle cx="41" cy="61" r="1" fill="white"/>
            <circle cx="57" cy="61" r="1" fill="white"/>
            
            {/* Eyelashes */}
            <path d="M37 59 L36 57 M39 58 L38 56 M44 58 L44 56 M46 59 L47 57" stroke="#2C1810" strokeWidth="1"/>
            <path d="M53 59 L52 57 M55 58 L55 56 M61 58 L62 56 M63 59 L64 57" stroke="#2C1810" strokeWidth="1"/>
            
            {/* Nose - More defined */}
            <path d="M50 70 C48 73, 52 73, 50 70" fill="#E8A798" stroke="#D49B8C" strokeWidth="0.5"/>
            <ellipse cx="48.5" cy="72" rx="0.8" ry="1.5" fill="#D49B8C" opacity="0.7"/>
            <ellipse cx="51.5" cy="72" rx="0.8" ry="1.5" fill="#D49B8C" opacity="0.7"/>
            
            {/* Lips - More realistic */}
            <path d="M44 80 Q50 85, 56 80 Q53 83, 50 83 Q47 83, 44 80" fill="#C2185B" stroke="#9C1458" strokeWidth="0.5"/>
            <path d="M45 80 Q50 82, 55 80" stroke="#E91E63" strokeWidth="0.8" fill="none" opacity="0.6"/>
            
            {/* Neck */}
            <rect x="45" y="93" width="10" height="15" fill="#FDBCB4" rx="3"/>
            
            {/* Body - Elegant dress */}
            <path d="M30 108 C30 105, 33 102, 38 102 L62 102 C67 102, 70 105, 70 108 L75 170 C75 178, 70 185, 65 185 L35 185 C30 185, 25 178, 25 170 Z" 
                  fill="#E91E63" stroke="#C2185B" strokeWidth="1"/>
            
            {/* Dress details and patterns */}
            <path d="M35 110 L65 110 C67 110, 68 112, 68 114 L72 165 C72 170, 68 175, 65 175 L35 175 C32 175, 28 170, 28 165 L32 114 C32 112, 33 110, 35 110 Z" 
                  fill="#F48FB1" opacity="0.6"/>
            
            {/* Dress belt */}
            <rect x="32" y="125" width="36" height="4" fill="#9C1458" rx="2"/>
            <circle cx="50" cy="127" r="3" fill="#FFD700" stroke="#DAA520" strokeWidth="0.5"/>
            
            {/* Arms - More realistic */}
            <ellipse cx="20" cy="125" rx="8" ry="25" fill="#FDBCB4" transform="rotate(-20 20 125)" stroke="#E8A798" strokeWidth="0.5"/>
            <ellipse cx="80" cy="125" rx="8" ry="25" fill="#FDBCB4" transform="rotate(20 80 125)" stroke="#E8A798" strokeWidth="0.5"/>
            
            {/* Dress sleeves */}
            <ellipse cx="28" cy="115" rx="10" ry="15" fill="#E91E63" transform="rotate(-20 28 115)" opacity="0.9"/>
            <ellipse cx="72" cy="115" rx="10" ry="15" fill="#E91E63" transform="rotate(20 72 115)" opacity="0.9"/>
            
            {/* Hands with more detail */}
            <circle cx="10" cy="150" r="6" fill="#FDBCB4" stroke="#E8A798" strokeWidth="0.5"/>
            <circle cx="90" cy="150" r="6" fill="#FDBCB4" stroke="#E8A798" strokeWidth="0.5"/>
            
            {/* Fingers - More detailed */}
            <ellipse cx="6" cy="147" rx="1.5" ry="4" fill="#FDBCB4" transform="rotate(-15 6 147)"/>
            <ellipse cx="8" cy="145" rx="1.5" ry="4" fill="#FDBCB4" transform="rotate(0 8 145)"/>
            <ellipse cx="10" cy="144" rx="1.5" ry="4" fill="#FDBCB4" transform="rotate(10 10 144)"/>
            <ellipse cx="12" cy="146" rx="1.2" ry="3" fill="#FDBCB4" transform="rotate(20 12 146)"/>
            
            <ellipse cx="94" cy="147" rx="1.5" ry="4" fill="#FDBCB4" transform="rotate(15 94 147)"/>
            <ellipse cx="92" cy="145" rx="1.5" ry="4" fill="#FDBCB4" transform="rotate(0 92 145)"/>
            <ellipse cx="90" cy="144" rx="1.5" ry="4" fill="#FDBCB4" transform="rotate(-10 90 144)"/>
            <ellipse cx="88" cy="146" rx="1.2" ry="3" fill="#FDBCB4" transform="rotate(-20 88 146)"/>
            
            {/* Legs */}            
            <rect x="40" y="185" width="8" height="45" fill="#FDBCB4" rx="3" stroke="#E8A798" strokeWidth="0.5"/>
            <rect x="52" y="185" width="8" height="45" fill="#FDBCB4" rx="3" stroke="#E8A798" strokeWidth="0.5"/>
            
            {/* High heels - More detailed */}
            <ellipse cx="44" cy="235" rx="9" ry="5" fill="#C2185B"/>
            <ellipse cx="56" cy="235" rx="9" ry="5" fill="#C2185B"/>
            <rect x="41" y="230" width="6" height="10" fill="#C2185B" rx="1"/>
            <rect x="53" y="230" width="6" height="10" fill="#C2185B" rx="1"/>
            
            {/* Heel details */}
            <rect x="43" y="235" width="2" height="8" fill="#9C1458"/>
            <rect x="55" y="235" width="2" height="8" fill="#9C1458"/>
            
            {/* Accessories */}
            <circle cx="28" cy="65" r="2.5" fill="#FFD700" stroke="#DAA520" strokeWidth="0.5"/>
            <circle cx="72" cy="65" r="2.5" fill="#FFD700" stroke="#DAA520" strokeWidth="0.5"/>
            
            {/* Necklace */}
            <path d="M35 100 Q50 105, 65 100" stroke="#FFD700" strokeWidth="3" fill="none"/>
            <circle cx="50" cy="103" r="3" fill="#FFD700" stroke="#DAA520" strokeWidth="0.5"/>
          </g>
        </svg>
      </div>

      {/* Boy Cutout - Right Side */}
      <div className="absolute right-8 bottom-0 z-10">
        <svg width="200" height="400" viewBox="0 0 200 400" className="drop-shadow-2xl">
          {/* Boy Figure - Realistic proportions */}
          <g transform="translate(50, 40)">
            {/* Hair - Short modern style */}
            <path d="M50 25 C25 15, 20 35, 25 55 C20 70, 28 85, 45 82 C50 85, 55 82, 60 78 C75 75, 80 60, 75 45 C80 25, 70 15, 50 25 Z" 
                  fill="#2C1810" stroke="#1A0E08" strokeWidth="1"/>
            
            {/* Hair texture */}
            <path d="M30 48 C25 52, 28 62, 35 64 C40 66, 45 61, 42 55 C40 50, 35 48, 30 48 Z" 
                  fill="#3E2723" opacity="0.8"/>
            
            {/* Face - More realistic masculine features */}
            <ellipse cx="50" cy="65" rx="23" ry="28" fill="#FDBCB4" stroke="#E8A798" strokeWidth="0.5"/>
            
            {/* Face structure - jawline shadow */}
            <path d="M30 85 Q50 90, 70 85" stroke="#E8A798" strokeWidth="2" fill="none" opacity="0.3"/>
            
            {/* Eyebrows - Thicker masculine */}
            <path d="M37 55 C42 52, 48 52, 52 55" stroke="#2C1810" strokeWidth="3" fill="none"/>
            <path d="M48 55 C52 52, 58 52, 63 55" stroke="#2C1810" strokeWidth="3" fill="none"/>
            
            {/* Eyes - More angular masculine */}
            <ellipse cx="42" cy="62" rx="5" ry="4" fill="white" stroke="#DDD" strokeWidth="0.5"/>
            <ellipse cx="58" cy="62" rx="5" ry="4" fill="white" stroke="#DDD" strokeWidth="0.5"/>
            <circle cx="42" cy="62" r="3" fill="#1565C0"/>
            <circle cx="58" cy="62" r="3" fill="#1565C0"/>
            <circle cx="41" cy="61" r="1" fill="white"/>
            <circle cx="57" cy="61" r="1" fill="white"/>
            
            {/* Nose - More prominent masculine */}
            <path d="M50 70 C47 74, 53 74, 50 70" fill="#E8A798" stroke="#D49B8C" strokeWidth="0.5"/>
            <ellipse cx="48.5" cy="72" rx="1" ry="2" fill="#D49B8C" opacity="0.7"/>
            <ellipse cx="51.5" cy="72" rx="1" ry="2" fill="#D49B8C" opacity="0.7"/>
            
            {/* Lips - Thinner masculine */}
            <path d="M46 80 Q50 82, 54 80" stroke="#9C1458" strokeWidth="2" fill="none"/>
            
            {/* Neck - Broader */}
            <rect x="42" y="93" width="16" height="18" fill="#FDBCB4" rx="4"/>
            
            {/* Body - Modern shirt and vest */}
            <rect x="25" y="111" width="50" height="80" rx="6" fill="#1976D2" stroke="#1565C0" strokeWidth="1"/>
            <rect x="28" y="114" width="44" height="74" rx="4" fill="#42A5F5" opacity="0.7"/>
            
            {/* Vest */}
            <path d="M35 111 L35 140 L40 155 L60 155 L65 140 L65 111 L55 115 L50 120 L45 115 Z" 
                  fill="#263238" stroke="#37474F" strokeWidth="1"/>
            
            {/* Shirt collar and tie */}
            <path d="M42 111 L50 120 L58 111 L60 115 L50 125 L40 115 Z" fill="#FFFFFF"/>
            <path d="M48 120 L50 140 L52 120 Z" fill="#D32F2F"/>
            
            {/* Arms - More muscular */}
            <ellipse cx="15" cy="135" rx="9" ry="28" fill="#FDBCB4" transform="rotate(-15 15 135)" stroke="#E8A798" strokeWidth="0.5"/>
            <ellipse cx="85" cy="135" rx="9" ry="28" fill="#FDBCB4" transform="rotate(15 85 135)" stroke="#E8A798" strokeWidth="0.5"/>
            
            {/* Shirt sleeves */}
            <ellipse cx="25" cy="125" rx="11" ry="18" fill="#1976D2" transform="rotate(-15 25 125)" opacity="0.9"/>
            <ellipse cx="75" cy="125" rx="11" ry="18" fill="#1976D2" transform="rotate(15 75 125)" opacity="0.9"/>
            
            {/* Hands - More detailed */}
            <circle cx="5" cy="163" r="7" fill="#FDBCB4" stroke="#E8A798" strokeWidth="0.5"/>
            <circle cx="95" cy="163" r="7" fill="#FDBCB4" stroke="#E8A798" strokeWidth="0.5"/>
            
            {/* Fingers - More realistic */}
            <ellipse cx="1" cy="160" rx="1.5" ry="4" fill="#FDBCB4" transform="rotate(-20 1 160)"/>
            <ellipse cx="3" cy="158" rx="1.5" ry="4" fill="#FDBCB4" transform="rotate(-5 3 158)"/>
            <ellipse cx="5" cy="157" rx="1.5" ry="4" fill="#FDBCB4" transform="rotate(5 5 157)"/>
            <ellipse cx="7" cy="159" rx="1.2" ry="3" fill="#FDBCB4" transform="rotate(15 7 159)"/>
            
            <ellipse cx="99" cy="160" rx="1.5" ry="4" fill="#FDBCB4" transform="rotate(20 99 160)"/>
            <ellipse cx="97" cy="158" rx="1.5" ry="4" fill="#FDBCB4" transform="rotate(5 97 158)"/>
            <ellipse cx="95" cy="157" rx="1.5" ry="4" fill="#FDBCB4" transform="rotate(-5 95 157)"/>
            <ellipse cx="93" cy="159" rx="1.2" ry="3" fill="#FDBCB4" transform="rotate(-15 93 159)"/>
            
            {/* Legs - Dress pants */}
            <rect x="38" y="191" width="10" height="48" fill="#263238" rx="3" stroke="#37474F" strokeWidth="0.5"/>
            <rect x="52" y="191" width="10" height="48" fill="#263238" rx="3" stroke="#37474F" strokeWidth="0.5"/>
            
            {/* Pants details - creases */}
            <line x1="43" y1="195" x2="43" y2="235" stroke="#37474F" strokeWidth="1"/>
            <line x1="57" y1="195" x2="57" y2="235" stroke="#37474F" strokeWidth="1"/>
            
            {/* Dress shoes */}
            <ellipse cx="43" cy="244" rx="10" ry="5" fill="#1A0E08"/>
            <ellipse cx="57" cy="244" rx="10" ry="5" fill="#1A0E08"/>
            <ellipse cx="43" cy="242" rx="8" ry="3" fill="#2C1810"/>
            <ellipse cx="57" cy="242" rx="8" ry="3" fill="#2C1810"/>
            
            {/* Shoe laces */}
            <ellipse cx="43" cy="241" rx="3" ry="1" fill="#1A0E08"/>
            <ellipse cx="57" cy="241" rx="3" ry="1" fill="#1A0E08"/>
            
            {/* Watch */}
            <rect x="3" y="160" width="6" height="8" rx="3" fill="#424242" stroke="#616161" strokeWidth="0.5"/>
            <circle cx="6" cy="164" r="2" fill="#FFD700" stroke="#DAA520" strokeWidth="0.5"/>
          </g>
          
          {/* Floating romantic elements */}
          <g className="animate-float" style={{animationDelay: '1s'}}>
            <circle cx="30" cy="80" r="2" fill="#FF69B4" opacity="0.6"/>
            <circle cx="20" cy="100" r="1.5" fill="#FFD700" opacity="0.6"/>
            <circle cx="35" cy="120" r="3" fill="#E91E63" opacity="0.6"/>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CartoonCutouts;
