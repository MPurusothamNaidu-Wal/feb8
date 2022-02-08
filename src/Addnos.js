import PropTypes from 'prop-types'
function Addnos(prop){
    return(
        <div className='AddnoSt'>
            <h1>Number 1 = {prop.One}</h1>
            <h1>Number 2 = {prop.Two}</h1>
        </div>
    );
}
Addnos.propTypes={
    One: PropTypes.number,
    Two: PropTypes.number,
}
export default Addnos;