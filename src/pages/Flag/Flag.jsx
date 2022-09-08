import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';

import dataList from '../Country/Data';

import './flag.css';

export default function Flag () {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = dataList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  });

  return (
    <>
      {
        blog ? (
          <div className='flag'>
            <div className='flag_body'>
              <h2>{blog.country}</h2>
              <p>{blog.country_in}</p>
              <p>{blog.language}</p>
              <p>{blog.religion}</p>
              <p>{blog.capital}</p>
              <p>{blog.dialing_code}</p>
              <p>{blog.area}</p>
              <p>{blog.president}</p>
              <p>{blog.currency}</p>
              <p>{blog.desc}</p>
            </div>
            <div className='flag_aside'>
              <img src={blog.img} />
            </div>
          </div>
        ) : (null)
      }
      <Link to='/'>Go Back</Link>
    </>
  );
}