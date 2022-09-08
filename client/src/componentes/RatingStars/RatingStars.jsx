import { useState } from "react";
import StarRating from "./StarRating";
import ChangeRating from "./ChangeRating";

export default function RatingStars({ rating }) {
   // Rating
   // const [avgRating, setAvgRating] = useState(rating || 0);

   // const handleRating = (input) => {
   //    setAvgRating(input);
   // };

   return (
      <div>
         <StarRating stars={ rating } />
      </div>
   );
}