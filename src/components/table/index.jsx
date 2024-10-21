import PropTypes from "prop-types";

const Table = (props) => {
  const { columns } = props;

  return (
    <table>
      <thead>
        { columns && columns.map((item, index) => <tr key={index}>{item}</tr>) }
      </thead>
      <tbody>
        
      </tbody>
    </table>
  )
}

export default Table


Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
}