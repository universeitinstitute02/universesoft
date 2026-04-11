

const AddUser = () => {
    return (
        <div className=" h-fit ">
            <div className="">
                <h2 className="text-3xl  text-center font-bold">Add User</h2>
            </div>

            <form className="mt-12">
               <div className="grid lg:grid-cols-2 gap-5 grid-cols-1 container mx-auto">
              <div className="col-span-1 space-y-3">
                <div className="space-y-2">
                  <label className="lg:text-xl font-medium mb-2" htmlFor="image">
                    User Name:
                  </label>
                  <br />
                  <input
                    className="w-full p-3 rounded-xl outline-none dark:border"
                    
                    required
                  />
                  <br />
                </div>

                <div className="space-y-2">
                  <label className="lg:text-xl font-medium mb-2" htmlFor="image">
                    Image URL:
                  </label>
                  <br />
                  <input
                    className="w-full p-3 rounded-xl outline-none  dark:border"
                   
                    required
                  />
                  <br />
                </div>

                <div className="space-y-2">
                  <label
                    className="lg:text-xl font-medium mb-2"
                    htmlFor="tourist_spot_name"
                  >
                    Tourists Spot Name:
                  </label>
                  <br />
                  <input
                    className="w-full p-3 rounded-xl outline-none dark:border"
                    type="text"
                    name="tourist_spot_name"
                    
                    required
                  />
                  <br />
                </div>

                <div className="space-y-2">
                  <label
                    className="lg:text-xl font-medium mb-2"
                    htmlFor="country_name"
                  >
                    Country Name:
                  </label>
                  <br />
                  <input
                    className="w-full p-3 rounded-xl outline-none dark:border"
                    
                    required
                  />
                  <br />
                </div>

                <div className="space-y-2">
                  <label
                    className="lg:text-xl font-medium mb-2"
                    htmlFor="location"
                  >
                    Location:
                  </label>
                  <br />
                  <input
                    className="w-full p-3 rounded-xl outline-none dark:border"
                    
                    required
                  />
                  <br />
                </div>
              </div>

              

              <div className="col-span-1 space-y-3">
                <div className="space-y-2">
                  <label className="lg:text-xl font-medium mb-2" htmlFor="image">
                    User Email :
                  </label>
                  <br />
                  <input
                    className="w-full p-3 rounded-xl outline-none dark:border"
                   
                   
                  />
                  <br />
                </div>

                <div className="space-y-2">
                  <label
                    className="lg:text-xl font-medium mb-2"
                    htmlFor="average_cost"
                  >
                    Average Cost:
                  </label>
                  <br />
                  <input
                    className="w-full p-3 rounded-xl outline-none dark:border"
                   
                    required
                  />
                  <br />
                </div>

                <div className="space-y-2">
                  <label
                    className="lg:text-xl font-medium mb-2"
                    htmlFor="seasonality"
                  >
                    Seasonality:
                  </label>
                  <br />
                  <input
                    className="w-full p-3 rounded-xl outline-none dark:border"
                   
                    required
                  />
                  <br />
                </div>


               

                <div className="space-y-2">
                  <label
                    className="lg:text-xl font-medium mb-2"
                    htmlFor="total_visitors_per_year"
                  >
                    Total Visitors Per Year:
                  </label>
                  <br />
                  <input
                    className="w-full p-3 rounded-xl outline-none dark:border"
               
                    required
                  />
                  <br />
                </div>


                <div className="space-y-3">
                <label
                  className="lg:text-xl font-medium"
                  htmlFor="short_description"
                >
                  Short Description:
                </label>
                <br />
                <textarea
                  className="w-full rounded-xl outline-none dark:border p-3"
                
                  rows="1"
                  cols="50"
                  required
                ></textarea>
                <br />
              </div>

              </div>
               </div>

            <input
                className="bg-green-400 w-full mx-auto h-[50px] text-2xl mt-10 rounded-lg"
                type="submit"
                value="Add"
              />
          </form>
            
        </div>
    );
};

export default AddUser;