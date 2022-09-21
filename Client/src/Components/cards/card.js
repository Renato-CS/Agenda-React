import React, { useState } from "react";
import FormDialog from "../dialog/dialog";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import '../../Styles/Card_homeCrud.css'
import Axios from "axios";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickCard = () => {
    setOpen(true);
  };
  
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    cost: props.cost,
  });

  const handleDeleteGame = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
    window.location.reload()
  };

  
  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        name={props.name}
        cost={props.cost}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id} 
      />

      <div className="main">
        <table className="table">
          <thead className="table">
            <tr>
              <th scope="col">ID Agenda</th>
              <th scope="col">Nome Do Contato</th>
              <th scope="col">Telefone / WhatsAPP</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            <tr className='linha-prod'>
              <th scope="row">{props.id}</th>
              <td className='quebra'>{props.name}</td>
              <td>{props.cost}</td>
              <td className="btn-func">
                <button
                  type="button"
                  className="btn btn-primary edit"
                  onClick={() => handleClickCard()}
                >
                  Editar <FaEdit />
                </button>
                <button
                  type="button"
                  onClick={handleDeleteGame}
                  className="btn btn-primary del"
                >
                  Excluir <FaTrashAlt />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
