import React from 'react';

function Account({
  title,
  growthValue,
  total,
  currency,
}) {
  return (
    <div>
      <div>
        <span>{title}</span>
        <span>{growthValue}%</span>
      </div>
      <div>
        <span>${total}</span>
        <span>{currency}</span>
      </div>
      <a href="#">View transactions</a>
      <br />
      <a href="#">View details account</a>
    </div>
  );
}

export default Account;
