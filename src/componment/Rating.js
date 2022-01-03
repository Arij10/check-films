import React from 'react'

function Rating({rate}) {
    const ratingArr = [1,2,3,4,5]
    return (
        <div>
            {ratingArr.map((el)=>el<= rate ? <i class="fas fa-star"></i> : <i class="far fa-star"></i> )}
        </div>
    )
}

export default Rating
