import axios from "axios";

export const SendData=async(url)=>{
   await axios.get(url)
    .then(response=>{
        const data=response.data();
        return data;
    })
        .catch(function (error) {
            if (error.response) {
                // Request made and server responded
                return error.response
            } else if (error.request) {
                // The request was made but no response was received
                return error.request
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                return error.message
            }

        });
}
