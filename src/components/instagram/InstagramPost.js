import React, { useMemo } from 'react';

const InstagramPost = () => {
  const numbers = useMemo(() => {
    const nums = [];
    for (let i = 2; i <= 100; i += 2) {
      nums.push(i);
    }
    return nums;
  }, []);

  return (
    <div>
      <h2>Lista liczb parzystych:</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default InstagramPost;
