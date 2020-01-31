import React, { useState, useEffect } from 'react';

const Toolbar = ({ sort, sortReviews }) => {
  // const [site, setSite] = useState('');
  // const [address, setAddy] = useState('');
  // const [newest, setNew] = useState
  // const [highest, setHigh] = useState
  // const [lowest, setLow] = useState

  // const [Technology, setTechnology] = useState('');
  const [rating, setRating] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`${Technology},${rating}`);
  // }

  const handleSelection = (e) => {
    setRating(e.target.value);
    sortReviews(e.target.value);
  };


  return (

    <div className="dropdown">
      <div className="dropbtn" role="button">Sort by</div>
      <div className="dropdown-content">
        <div className= "drop">
          <span className="select-drop">
          <input type="radio" value="Newest" checked={rating === "Newest"} onChange={(e) => handleSelection(e)} /><span className="tool-txt">Newest</span>
          </span>
            <span className="select-drop">
          <input type="radio" value="Highest" checked={rating === "Highest"} onChange={(e) => handleSelection(e)} /><span className="tool-txt">Highest rating</span>
          </span>
          <span className="select-drop">
          <input type="radio" value="Lowest" checked={rating === "Lowest"} onChange={(e) => handleSelection(e)} /><span className="tool-txt">Lowest rating</span>
          </span>

        </div>
      </div>
    </div>

  //   <div>
  //   <div class="row" className="hdr">
  //     <div class="col-sm-12 btn btn-info">
  //      Radio button and Dropdowns in React
  //      </div>
  //       </div>
  //        <form onSubmit={handleSubmit}>
  //         <div className="form-group dropdn">
  //          <select className="form-control" value={Technology} onChange={(e) => setTechnology(e.target.value)} >
  //          <option value="1">
  //             <input type="radio" value="Male" checked={rating == "Male"} onChange={(e) => setRating(e.target.value)} />Male
  //          </option>
  //           <option>
  //             <input type="radio" value="Female" checked={rating == "Female"} onChange={(e) => setRating(e.target.value)} />Female
  //           </option>
  //             </select>
  //            </div>
  //          <div>
  //          </div><br></br>
  //          <button type="submit" className="btn btn-info" >Click</button>
  //          </form>
  //  </div>

    // <div>
    //   Sort by
    //   <tbody>
    //     <tr>
    //       <td>
    //         <input
    //           type="radio"
    //           name="site_name"
    //           value="some name"
    //           checked={site === 'some name'}
    //           onChange={(e) => setSite(e.currentTarget.value)}
    //         />
    //         some name
    //       </td>
    //       <td>
    //         <input
    //           type="radio"
    //           name="address"
    //           value="some address"
    //           checked={address === 'some address'}
    //           onChange={(e) => setAddy(e.currentTarget.value)}
    //         />
    //         some address
    //       </td>
    //     </tr>
    //   </tbody>
    // </div>
  );
};


export default Toolbar;
