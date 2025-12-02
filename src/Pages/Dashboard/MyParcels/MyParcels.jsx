import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h1>All of my parcels {parcels.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment status</th>
              <th>Received</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                parcels.map((parcel,i) => <tr key={parcel._id}>
              <th>{i + 1}</th>
              <td>{parcel.parcelName}</td>
              <td>{parcel.cost} taka</td>
              <td></td>
              <td>{parcel.receiverName}</td>
              <td></td>
            </tr>)
            }
            {/* row 1 */}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
