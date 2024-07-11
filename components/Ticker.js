import React from 'react';

const Ticker = ({ notice }) => {
  return (
    <div className="w-full overflow-hidden bg-[#64B6AC] text-lg font-bold relative py-2">
      <div className="tickerContent">
        {notice}
      </div>
    </div>
  );
};

export default Ticker;
