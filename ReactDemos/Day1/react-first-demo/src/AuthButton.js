// import React from "react";

// const  AuthButton =props =>
// {
//   let {isLoggedIn} = props;
//   if(isLoggedIn)
//   return <button> Login </button>
//   else 
//   return <button> Logout </button>
// }

// export default AuthButton

import React from "react";

const  AuthButton =props =>
{
  let {isLoggedIn} = props;
  switch(isLoggedIn)
  {
  case true: 
  return <button> Login </button>
  case false :
  return <button> Logout </button>
  default: 
  return null;
}
};
export default AuthButton