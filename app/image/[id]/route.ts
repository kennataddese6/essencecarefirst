import fs from "fs"
import path from "path"
export async function GET(req: any, { params }: any) {
  const param = await params
  try {
    const imagePath = path.join(
      process.cwd(),
      `storage/images/${param.id}.WebP`,
    )
    const imageBuffer = fs.readFileSync(imagePath)
    return new Response(imageBuffer, {
      headers: {
        "Content-Type": "image/webp",
      },
    })
  } catch (error) {
    return new Response("Image not found", {
      status: 404,
    })
  }
}
