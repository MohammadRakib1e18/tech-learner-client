import React from 'react';
import './PremiumAccess.css';
import successImg from '../../Images/success.jpg';

const PremiumAccess = () => {
    return (
      <div className="text-center mb-4">
        <img className="" src={successImg} alt="" />
        <h2 className="mt-3">
          🎈 You've successfully unlock the{" "}
          <span className="text-danger ">premium access! 🎈</span>
        </h2>
      </div>
    );
};

export default PremiumAccess;