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
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    })
  

}
catch(error){
  fs.unlink(localFilePath)//this removes local temp files
  return null;
  
}


}
//7:30:54


export {uploadCloudninary}