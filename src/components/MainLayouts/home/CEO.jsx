import React from "react";

const CEO = () => {
  return (
    <div
      className="bg-white border border-slate-100 hover:border-slate-300 transition-colors rounded-xl p-5"
    >
      <img
        src="https://res.cloudinary.com/dxvacpgrv/image/upload/v1734954321/xujzzif88co2fx6bjuz2.jpg"
        alt="CEO"
        className="h-[clamp(180px,50vw,245px)] w-full object-cover object-top rounded-lg"
      />
      <h3 className="text-base font-medium text-slate-800 mt-4">
        ENGR. MD. Golam Kibriya
      </h3>
      <p className="text-sm text-slate-500 mt-0.5">Chief executive officer(CEO)</p>
      <div className="flex justify-center gap-3 mt-4">
        <a
          href="#"
          className="size-10 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-lg flex items-center justify-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.203 1.875h2.757l-6.023 6.883 7.086 9.367h-5.548l-4.345-5.68-4.972 5.68H1.4l6.442-7.363-6.797-8.887h5.688l3.928 5.193zm-.967 14.6h1.527L5.903 3.438H4.264z"
              fill="#1d293d"
            />
          </svg>
        </a>
        <a
          href="#"
          className="size-10 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-lg flex items-center justify-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.333 6.617c1.326 0 2.598.523 3.536 1.455a4.95 4.95 0 0 1 1.464 3.51v5.794H15v-5.793c0-.44-.176-.86-.488-1.17a1.673 1.673 0 0 0-2.357 0 1.65 1.65 0 0 0-.488 1.17v5.793H8.333v-5.793c0-1.317.527-2.58 1.465-3.511a5.02 5.02 0 0 1 3.535-1.455M5 7.445H1.667v9.932H5zM3.333 4.967C4.253 4.967 5 4.226 5 3.31s-.746-1.655-1.667-1.655A1.66 1.66 0 0 0 1.667 3.31a1.66 1.66 0 0 0 1.666 1.656"
              stroke="#1d293d"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="#"
          className="size-10 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-lg flex items-center justify-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.167 1.656H5.833c-2.3 0-4.166 1.853-4.166 4.138v8.276c0 2.286 1.865 4.138 4.166 4.138h8.334c2.3 0 4.166-1.852 4.166-4.138V5.794c0-2.285-1.865-4.138-4.166-4.138"
              stroke="#1d293d"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.333 9.41a3.3 3.3 0 0 1-.338 2.011 3.32 3.32 0 0 1-1.46 1.432 3.35 3.35 0 0 1-3.856-.616 3.29 3.29 0 0 1-.62-3.83c.315-.62.82-1.128 1.442-1.449a3.35 3.35 0 0 1 3.892.598c.506.502.835 1.152.94 1.855"
              stroke="#1d293d"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.583 5.383h.01"
              stroke="#1d293d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CEO;
