// export default function Map1()
// {
//   const arr = [1,2,3,4,5];
//   return(
//     <ul>
//       <li> {arr[0]} </li>
      
//       <li> {arr[1]} </li>
      
//       <li> {arr[2]} </li>
      
//       <li> {arr[3]} </li>
//     </ul>
//   )
// }



export default function Map1(props)
{
  // const arr = [1,2,3,4,5];
  const arr = props.number;
  const arr1= arr.map((item)=>
    {
   return  <li> {item * 5} </li>
    })
  return(
    <ul>
       {arr1}  
        
    </ul>
  )
}