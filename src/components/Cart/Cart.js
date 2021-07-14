import React from "react";
import "./Cart.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ handleRemoveFromTeam, team }) => {
  const totalCost = team.reduce((total, player) => total + player.salary, 0);
  return (
    <div>
      <h3 className="mb-4"> Selected Players : {team.length}</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {team.map((item, index) => (
            <tr key={item.id}>
              <td>
                {index + 1}. {item.name}
              </td>
              <td>{item.salary}</td>
              <td>
                <FontAwesomeIcon
                  className="text-danger"
                  onClick={() => handleRemoveFromTeam(item)}
                  icon={faTrash}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="mt-4">Total Auction Money: {totalCost}</h3>
    </div>
  );
};

export default Cart;
