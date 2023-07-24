// import {RiStarSFill,RiStarSLine} from 'react-icons/ri'
import{AiFillStar,AiOutlineStar} from 'react-icons/ai'
const Rating = ({rating,onClick,style})=>{
    return <>
        {
            [...Array(5)].map((_,i)=>{

                return <span key={i} onClick={()=>onClick(i)} style={style}>
                    {rating>i?(
                        // <RiStarSFill/>
                        <AiFillStar fontSize="15px" />
                    ):(
                        // <RiStarSLine/>
                        <AiOutlineStar fontSize="15px" />
                    )}
                </span>
            })
        }
    
    </>
}

export default Rating;