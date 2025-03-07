import fs from "fs"
import path from "path"

export async function saveImage(formData: FormData, imageName: string) {
  const image: any = formData.get("image")
  const imageDir = path.join(process.cwd(), "storage/images")
  const imagePath = path.join(imageDir, imageName + ".webp")
  const buffer: any = Buffer.from(await image.arrayBuffer())

  return new Promise((resolve, reject) => {
    // Ensure the directory exists
    fs.mkdir(imageDir, { recursive: true }, (err) => {
      if (err) {
        reject(err) // Handle directory creation error
        return
      }

      // Write the image file
      fs.writeFile(imagePath, buffer, (err) => {
        if (err) {
          reject(err) // Handle file write error
        } else {
          resolve(image.name) // Successfully saved
        }
      })
    })
  })
}
