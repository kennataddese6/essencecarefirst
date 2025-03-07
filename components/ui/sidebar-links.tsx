import {
  IconCube,
  IconDashboard,
  IconList,
  IconUser,
} from "@tabler/icons-react"
import { usePathname } from "next/navigation"
const SidebarLinks = () => {
  const pathname = usePathname()
  const links = [
    {
      label: "Dasboard",
      href: "/dashboard",
      icon: (
        <IconDashboard
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/dashboard"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Categories",
      href: "/dashboard/categories",
      icon: (
        <IconList
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/dashboard/categories" ||
            pathname === "/dashboard/categories/create"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Products",
      href: "/dashboard/products",
      icon: (
        <IconCube
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/dashboard/products" ||
            pathname === "/dashboard/products/create"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Users",
      href: "/dashboard/users",
      icon: (
        <IconUser
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/dashboard/users"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
  ]
  return links
}

export default SidebarLinks
