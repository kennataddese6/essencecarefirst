import fs from "fs"
export async function GET(req: any, { params }: any) {
  const param = await params
  try {
    const imagePath = `https://res.cloudinary.com/dlmxydxdt/image/upload/v1744484803/${param.id}.webp` // Adjust the URL as per your Cloudinary setup

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
