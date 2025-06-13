import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Locicon from "../assets/home/location.png"; // Update path if needed

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://stage.medfuture.com.au/medadminapi/public/api/web/jobdetails/filter?division=1&profession=20&state=1&speciality=448"
        );
        if (response.data?.data) {
          setJobs(response.data.data);
        } else {
          setJobs([]);
        }
      } catch (err) {
        console.error("API error:", err);
        setError("Failed to fetch jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const JobCard = ({ job }) => {
    const location =
      job?.suburb?.name && job?.state?.name
        ? `${job.suburb.name}, ${job.state.name}`
        : job?.suburb?.name || job?.state?.name || "Location not specified";

    return (
      <div className="relative bg-white shrink-0 w-[90vw] sm:w-full sm:max-w-3xl p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-50 mx-2 sm:mx-0">
        {/* Job ID */}
        <div className="absolute top-2 right-4 text-xs text-gray-400 font-semibold">
          Job ID: {job.job_id || job.id}
        </div>

        {/* Job Info */}
        <div className="flex flex-col gap-2 text-left pr-24">
          <h3 className="text-lg font-semibold text-gray-800">
            {job.job_title}
          </h3>

          {/* Location */}
          <p className="text-gray-600 flex items-center gap-2 py-2">
            <img src={Locicon} alt="Location" className="w-4 h-4" />
            {location}
          </p>
        </div>

        {/* View Button */}
        <div className="absolute bottom-4 right-4">
          <Link
            to={`/job/${job.job_id}`}
            className="px-4 py-2 text-sm font-medium bg-sky-500 text-white rounded-sm hover:bg-sky-700 transition"
          >
            View
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full px-4 py-6">
      {loading ? (
        <p className="text-gray-500 text-center">Loading jobs...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : jobs.length > 0 ? (
        <div className="flex sm:flex-col sm:items-center gap-4 overflow-x-auto sm:overflow-visible snap-x sm:snap-none scroll-smooth hide-scrollbar">
          {jobs.map((job, index) => (
            <div className="snap-start" key={`${job.job_id}-${index}`}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No jobs available at the moment.</p>
      )}
    </div>
  );
};

export default JobList;
