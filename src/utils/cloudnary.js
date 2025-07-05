import {v2 as cloudinary} from "cloudinary"

 // Configuration
 cloudinary.config({
   cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
   api_key: process.env.CLOUDNARY_API_KEY,
   api_secret: process.env.CLOUDNARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
 });


//fs File system

const uploadCloudninary = async(localFilePath)=>{
try{
  if(!localFilePath) return null
    const reponse = await cloudnary.uploader.upload(localFilePath, {
      resource_type: "auto",
    })
  

}
catch(error){
  
}


}
//7:30:54