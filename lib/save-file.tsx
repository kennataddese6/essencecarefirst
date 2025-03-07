import fs from "fs"
import path from "path"

export async function saveImage(formData: FormData, imageName: string) {
  const image: any = formData.get("image")
  const imageDir = path.join("/tmp", "storage/images")
  const imagePath = path.join(imageDir, imageName + ".webp")
  const buffer = Buffer.from(await image.arrayBuffer())

  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true })
  }

  return new Promise((resolve, reject) => {
    fs.writeFile(imagePath, buffer, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(image.name)
      }
    })
  })
}
