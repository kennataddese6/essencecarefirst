import {
  IconArrowLeft,
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
      href: "/ui",
      icon: (
        <IconDashboard
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui" || pathname === "/ui/3dcard-rotation"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Categories",
      href: "/ui",
      icon: (
        <IconList
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui" || pathname === "/ui/3dcard-rotation"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Products",
      href: "/ui",
      icon: (
        <IconCube
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui" || pathname === "/ui/3dcard-rotation"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Users",
      href: "/ui",
      icon: (
        <IconUser
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui" || pathname === "/ui/3dcard-rotation"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },

    {
      label: "Logout",
      href: "/",
      icon: (
        <IconArrowLeft
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/"
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
