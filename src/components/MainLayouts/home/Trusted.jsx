const Trusted = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-0 py-16 w-full">
      <h3 className="text-lg font-medium text-slate-600 text-center">
        Trusted by world's leading companies
      </h3>
      <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full mt-14">
        <div className="bg-gray-100 p-4 h-15 grid place-content-center rounded-md hover:-translate-y-0.5 transition duration-200">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/clickup.svg"
            alt="Logo"
          />
        </div>
        <div className="bg-gray-100 p-4 h-15 grid place-content-center rounded-md hover:-translate-y-0.5 transition duration-200">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/airtable.svg"
            alt="Logo"
          />
        </div>
        <div className="bg-gray-100 p-4 h-15 grid place-content-center rounded-md hover:-translate-y-0.5 transition duration-200">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/miro.svg"
            alt="Logo"
          />
        </div>
        <div className="bg-gray-100 p-4 h-15 grid place-content-center rounded-md hover:-translate-y-0.5 transition duration-200">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg"
            alt="Logo"
          />
        </div>
        <div className="bg-gray-100 p-4 h-15 grid place-content-center rounded-md hover:-translate-y-0.5 transition duration-200">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/huawei.svg"
            alt="Logo"
          />
        </div>
        <div className="bg-gray-100 p-4 h-15 grid place-content-center rounded-md hover:-translate-y-0.5 transition duration-200">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/asana.svg"
            alt="Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
