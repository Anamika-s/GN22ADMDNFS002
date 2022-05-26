import './First.css';
function First()
{
  return(
     <h1 className='class1'> This is first component </h1>
  );
}

function Third()
{
  return(
     <h3> This is Third Component</h3>
  );
}

function Fourth()
{
  return(
     <h3> This is Fourth Component</h3>
  );
}

export default First;
export {Third, Fourth};

