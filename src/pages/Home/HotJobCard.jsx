import React from "react";
import { FaDollarSign, FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ Job }) => {
    const {
      _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = Job;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
          <div className="flex gap-2 m-2 t-2"
          >
          <figure>
                  <img
                      className="w-16"
          src={company_logo}
          alt="company"
        />
              </figure>
              <div>
                  <h4 className="text-2xl">{company}</h4>
                  <p className="flex gap-2 items-center"><FaMapMarkedAlt/>  { location}</p>
              </div>
      </div>
      <div className="card-body">
              <h2 className="card-title">{title}
              <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{description}</p>
              <div className="flex gap-2 flex-wrap">
                  {
                      requirements.map(skill => <p className="border rounded-md text-center px-2  hover:bg-slate-400">{skill}</p>)
                  }
              </div>
              <div className="card-actions justify-end items-center mt-4">
                  <p className="flex items-center">Salary:<FaDollarSign/> {salaryRange.min}-{salaryRange.max}{salaryRange.currency }</p>
                  <Link to={`/jobs/${_id}`}>
                  <button className="btn btn-primary">Apply</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
