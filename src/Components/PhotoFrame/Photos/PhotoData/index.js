import "./index.css"
const PhotoData = (props) =>
{
   const imageOwner = props?.data?.alt_description ?? "";
    const imageSrc = props?.data?.links?.download ?? "";
    return(
        <div className="container">
            <img src={imageSrc} className="image214"></img>
            <h3>
                {imageOwner}
            </h3>
        </div>
    )
}

export default PhotoData;