import Link from "next/link";
import { useState } from "react";

function Sudoku() {
  const [cells, setCells] = useState([
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ]);

  function create(event: React.ChangeEvent<HTMLInputElement>) {
    const copyOfCells = [...cells];
    copyOfCells[Number(event.target.dataset.row)]!.splice(
      Number(event.target.dataset.column),
      1,
      event.target.value
    );
    console.log(copyOfCells);
    setCells([...copyOfCells]);
  }

  return (
    <div className="container">
      <div>
        <h1>Sudoku</h1>
        <table className="mx-auto">
          <tbody>
            {cells.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {row.map((cell, columnIndex) => {
                    return columnIndex % 3 === 2 ? (
                      <>
                        <td key={columnIndex}>
                          <input
                            className="h-9 w-8 text-center"
                            type="text"
                            name=""
                            id=""
                            onChange={create}
                            data-row={rowIndex}
                            data-column={columnIndex}
                          />
                        </td>
                        <div className="h-9 w-1 bg-gray-300"></div>
                      </>
                    ) : (
                      <>
                        {columnIndex === 0 && (
                          <div className="h-9 w-1 bg-gray-300"></div>
                        )}
                        <td key={columnIndex}>
                          <input
                            className="h-9 w-8 text-center"
                            type="text"
                            name=""
                            id=""
                            onChange={create}
                            data-row={rowIndex}
                            data-column={columnIndex}
                          />
                        </td>
                      </>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link href="/" className="buttonLink2">
          Retour à la page d'accueil
        </Link>
      </div>
    </div>
  );
}
export default Sudoku;
