import { v2 as cloudinaryV2 } from "cloudinary"

// Configure Cloudinary with your credentials
cloudinaryV2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})

export async function saveImage(formData: FormData, imageName: string) {
  const image: any = formData.get("image")
  const buffer: any = Buffer.from(await image.arrayBuffer())

  return new Promise((resolve, reject) => {
    cloudinaryV2.uploader
      .upload_stream(
        {
          public_id: imageName, // Optional: You can customize the image name
          format: "webp", // Store in webp format
        },
        (error, result) => {
          if (error) {
            console.error("Error uploading image:", error)
            reject(error)
          } else {
            if (result) resolve(result.secure_url) // Return the Cloudinary URL of the uploaded image
          }
        },
      )
      .end(buffer)
  })
}
