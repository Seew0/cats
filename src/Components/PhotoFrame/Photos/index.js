import { useEffect, useState } from "react";
import PhotoData from "./PhotoData";

const Photo = (props) =>
{
    const [isLoading,setIsLoading] = useState(false);
    const [dataArrived,setDataArrived] = useState([]);
    const [error,setError] = useState();

    useEffect(()=>
    {
        setIsLoading(true);
        fetch("https://api.unsplash.com/collections/11361665/photos/?client_id=bXwU5QWc0cv1XXyfwnDshU3yy-n1euClVvVQzyC4Zl8")
        .then(response => response.json())
        .then((data)=>{
            setIsLoading(false);
            setDataArrived(data);
        }).catch((e)=>{
            setIsLoading(false);
            setError(e.toString());
        })        
    },[]);

    function showLoading()
    {
        return(
        <>
            <h2> Loading...</h2>
        </>
        );
    }

    function showError()
    {
        return(
            <>
                <h2>Error Occured...</h2>
                <h3>{error}</h3>
            </>
        );
    }

    function showData()
    {
        console.log(dataArrived);
        return(
            <>
            {
                dataArrived.map((data,idx)=>{
                    const key=data?._id ?? "";
                    return <PhotoData data={data} key={key}></PhotoData>
                })
            }
            </>
        );
    }

    if(isLoading)
    {
        return showLoading();
    }
    else if(error)
    {
        return showError();
    }else{
        return showData();
    }
};

export default Photo;