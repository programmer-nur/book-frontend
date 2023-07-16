
import { useAddReviewMutation, useGetReviewsQuery } from "../redux/features/book/bookApi";
import { useState, FormEvent } from 'react';
import toast from 'react-hot-toast'
import Button from "./Button";
import TextArea from "./TextArea";
import { useAppSelector } from "../redux/hook";
interface IProps {
    id:string
}
const Reviews = ({id}:IProps) => {
    const {user}=useAppSelector(state=>state.user)
    const {data} = useGetReviewsQuery(id)
    const [reviewText, setReviewText] = useState<string>('');
    console.log(reviewText)
    const [addReview,{isSuccess,isError}]  =useAddReviewMutation()
  
    if(isSuccess){
        toast('Review add successfully')
    }if(isError){
        toast('Review not added!')
    }
    const handleReviewSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const options = {
        id:id,
        data:{review:reviewText}
      }
      addReview(options)

      setReviewText('');
    };
  return (
<>
<form onSubmit={handleReviewSubmit} className="mt-4">
    <TextArea  placeholder="Write your review..."
      value={reviewText}
      onChange={(e) => setReviewText(e.target.value)}/>
    <Button  disabled={!user.email ? true: false} className={`${!user.email ? ' cursor-not-allowed':''}`} type='submit'> Submit Review</Button>
     
   
  </form>
    <h2 className="text-xl py-4 font-semibold mb-2">Reviews</h2>
        {data?.data?.reviews?.length > 0 ? (
          <ul>
            {data?.data?.reviews?.map((review:string, index:number) => (
              <li key={index} className="mb-2">
                {review}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
</>
  )
}
export default Reviews