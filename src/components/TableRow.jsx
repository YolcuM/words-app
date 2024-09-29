import Button from "./Button";

const TableRow = ({ id, english, transcription, theme, translation }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{theme}</td>
      <td>{english}</td>
      <td>{transcription}</td>
      <td>{translation}</td>
      
      <td>
        <Button text="Edit" mode="normal" id={id}/>
        <Button text="Delete" mode="secondary" />
      </td>
    </tr>
  );
};

export default TableRow;