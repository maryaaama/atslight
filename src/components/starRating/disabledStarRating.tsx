
import StarRatingComponent from 'react-star-rating-component'

const disabledStarRating = () => {
    return (
        <div className="px-1 mt-[1.5%] ">
            <StarRatingComponent
                name="star"
                starCount={5}
                value={0}
            />
        </div>)
}

export default disabledStarRating
