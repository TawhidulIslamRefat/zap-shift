import { BsQuote } from "react-icons/bs";


const ReviewCard = ({ rview }) => {
  const {review,user_photoURL,userName,ratings} = rview;
  return (
    <div>
      <div className="bg-white p-6 rounded-3xl shadow-md max-w-md border border-gray-100">
        <BsQuote className="text-primary mb-3" size={32} />

        <p className=" mb-6">{review}</p>

        <div className="border-t border-dashed border-gray-300 my-4"></div>

        <div className="flex items-center gap-4">
          <img
            src={user_photoURL}
            alt={userName}
            className="w-12 h-12 rounded-full object-cover border"
          />

          <div>
            <h3 className="font-semibold text-gray-800">{userName}</h3>
            <p className="text-sm text-gray-500">Ratings: {ratings} ⭐</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
