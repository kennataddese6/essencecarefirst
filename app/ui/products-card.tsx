import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"

interface ProductCardProps {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export default function ProductCard({
  id = "1",
  name = "Premium Headphones",
  description,
  price = 149.99,
  image = "/placeholder.svg?height=300&width=300",
}: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <p className="font-bold text-lg">ETB {price.toFixed(2)}</p>
        <Button size="sm">View</Button>
      </CardFooter>
    </Card>
  )
}
