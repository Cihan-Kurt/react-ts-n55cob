import * as React from 'react';
import './style.css';

const Maintable = () => {
  const students = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  return (
    <div>
      <table>
        {students.map((el) => (
          <a href="">
            <li>{el}</li>
          </a>
        ))}
      </table>
    </div>
  );
};

export default Maintable;
