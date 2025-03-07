import fs from "fs"
import path from "path"

export async function saveImage(formData: FormData, imageName: string) {
  const image: any = formData.get("image")
  const imageDir = path.join(process.cwd(), "tmp/storage/images")
  const imagePath = path.join(imageDir, imageName + ".webp")
  const buffer = Buffer.from(await image.arrayBuffer())

  // Ensure the directory exists synchronously before proceeding
  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true })
  }

  // Save the image file
  return new Promise((resolve, reject) => {
    fs.writeFile(imagePath, buffer, (err) => {
      if (err) {
        reject(err) // Handle file write error
      } else {
        resolve(image.name) // File successfully saved
      }
    })
  })
}
