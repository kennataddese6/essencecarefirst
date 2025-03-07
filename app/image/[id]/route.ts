import fs from "fs"
import path from "path"
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  try {
    const imageDir = path.join("/tmp", "storage/images")
    const imagePath = path.join(imageDir, `/${id}.WebP`)
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
