import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

const View = ({ complaints, deleteBook }) => {
  return complaints.map((complaint) => (
    <tr key={complaint.id}>
      <td>{complaint.reason}</td>
      <td>{complaint.message1}</td>
      <td>{complaint.message2}</td>
      <td>{complaint.message3}</td>

      {/* <td className="delete-btn" onClick={() => deleteBook(complaint.id)}>
        <Icon icon={trash} />
      </td> */}
    </tr>
  ));
};
export default View;
