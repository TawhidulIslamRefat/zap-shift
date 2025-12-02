import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const serviceCenter = useLoaderData();
  const regionsDuplicate = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenter.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("Cost", cost);
    data.cost = cost;
    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be cost ${cost} taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#CAEB66",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes Agreed!",
    }).then((result) => {
      if (result.isConfirmed) {

        // save the data info to the database
        axiosSecure.post('/parcels',data)
        .then(res => {
          console.log('after saving parcel', res.data);
        })

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };
  return (
    <div className="bg-white rounded-3xl py-10 px-25 mt-12">
      <div className="mx-auto px-4 py-10 font-sans text-[#0B2E13]">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-2">Send A Parcel</h1>
        <p className="text-lg font-medium mb-8">Enter your parcel details</p>

        <form onSubmit={handleSubmit(handleSendParcel)}>
          {/* Radios */}
          <div className="flex items-center gap-10 mb-10">
            <label className="label">
              <input
                type="radio"
                {...register("parcelType")}
                value="document"
                className="radio"
                defaultChecked
              />
              Document
            </label>
            <label className="label">
              <input
                type="radio"
                {...register("parcelType")}
                value="non-document"
                className="radio"
              />
              Non-Document
            </label>
          </div>

          {/* Parcel Row */}
          <div className="grid grid-cols-2 gap-10 mb-12">
            <div>
              <label className="block mb-1 font-medium text-[15px]">
                Parcel Name
              </label>
              <input
                type="text"
                {...register("parcelName")}
                placeholder="Parcel Name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-[15px]">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                {...register("parcelWeight")}
                placeholder="Parcel Weight (KG)"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
              />
            </div>
          </div>

          {/* Sender + Receiver */}
          <div className="grid grid-cols-2 gap-14">
            {/* Sender */}
            <div>
              <h2 className="text-[18px] font-semibold mb-4">Sender Details</h2>

              <div className="space-y-5">
                <div>
                  <label className="block mb-1 font-medium text-[15px]">
                    Sender Name
                  </label>
                  <input
                    type="text"
                    {...register("senderName")}
                    defaultValue={user?.displayName}
                    placeholder="Sender Name"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-[15px]">
                    Sender Email
                  </label>
                  <input
                    type="email"
                    {...register("senderEmail")}
                    defaultValue={user?.email}
                    placeholder="Sender Name"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-[15px]">
                    Sender Region
                  </label>

                  <select
                    {...register("senderRegion")}
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
                  >
                    <option value="">Select Region</option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-[15px]">
                    Sender District
                  </label>

                  <select
                    {...register("senderDistrict")}
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
                  >
                    <option value="">Select District</option>
                    {districtsByRegion(senderRegion).map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-1 font-medium text-[15px]">
                    Address
                  </label>
                  <input
                    type="text"
                    {...register("senderAddress")}
                    placeholder="Address"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium text-[15px]">
                    Sender Phone No
                  </label>
                  <input
                    type="text"
                    {...register("senderPhoneNo")}
                    placeholder="Sender Phone No"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium text-[15px]">
                    Pickup Instruction
                  </label>
                  <textarea
                    placeholder="Pickup Instruction"
                    {...register("senderPickup")}
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Receiver */}
            <div>
              <h2 className="text-[18px] font-semibold mb-4">
                Receiver Details
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block mb-1 font-medium text-[15px]">
                    Receiver Name
                  </label>
                  <input
                    type="text"
                    {...register("receiverName")}
                    placeholder="Sender Name"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-[15px]">
                    Receiver Email
                  </label>
                  <input
                    type="email"
                    {...register("receiverEmail")}
                    placeholder="Receiver Email"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-[15px]">
                    Receiver Region
                  </label>

                  <select
                    {...register("receiverRegion")}
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
                  >
                    <option value="">Select Region</option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-[15px]">
                    Receiver District
                  </label>

                  <select
                    {...register("receiverDistrict")}
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
                  >
                    <option value="">Select District</option>
                    {districtsByRegion(receiverRegion).map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-1 font-medium text-[15px]">
                    Receiver Address
                  </label>
                  <input
                    type="text"
                    {...register("receiverAddress")}
                    placeholder="Address"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium text-[15px]">
                    Receiver Contact No
                  </label>
                  <input
                    type="text"
                    {...register("receiverPhoneNo")}
                    placeholder="Receiver Contact No"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium text-[15px]">
                    Delivery Instruction
                  </label>
                  <textarea
                    placeholder="Delivery Instruction"
                    {...register("deliveryInstruction")}
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none text-[15px]"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Pickup time */}
          <p className="text-gray-700 text-sm mt-6">
            * PickUp Time 4pm-7pm Approx.
          </p>

          {/* Button */}
          <button
            type="submit"
            className="mt-8 px-6 py-3 bg-[#8BC34A] rounded-md text-white font-semibold text-[15px] shadow hover:bg-[#7ab03e] transition"
          >
            Proceed to Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
