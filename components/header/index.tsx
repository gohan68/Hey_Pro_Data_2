"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  X,
  Plus,
  Bell,
  User,
  Settings,
  LogOut,
  Briefcase,
  MessageCircleMore,
  Save,
  Compass,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Logo from "../logo"
const notifications = [
  {
    id: 1,
    title: "New job match",
    description: "Senior Frontend Developer at TechCorp matches your profile",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    title: "Event reminder",
    description: "Tech Networking Meetup starts tomorrow at 6 PM",
    time: "5 hours ago",
    read: false,
  },
  {
    id: 3,
    title: "Application update",
    description: "Your application for Product Manager role is under review",
    time: "1 day ago",
    read: true,
  },
  {
    id: 4,
    title: "New message",
    description: "Sarah from HR team sent you a message",
    time: "2 days ago",
    read: true,
  },
  {
    id: 5,
    title: "Profile view",
    description: "5 recruiters viewed your profile this week",
    time: "3 days ago",
    read: true,
  },
]
const components: { title: string; href: string }[] = [
  { title: "PhotoGraphy", href: "/explore/photography" },
  { title: "Design", href: "/explore/design" },
  { title: "Development", href: "/explore/development" },
  { title: "Marketing", href: "/explore/marketing" },
  { title: "Finance", href: "/explore/finance" },
  { title: "Healthcare", href: "/explore/healthcare" },
  { title: "Education", href: "/explore/education" },
  { title: "Sales", href: "/explore/sales" },
  { title: "Customer Support", href: "/explore/customer-support" },
  { title: "Human Resources", href: "/explore/human-resources" },
  { title: "Operations", href: "/explore/operations" },
  { title: "Legal", href: "/explore/legal" },
  { title: "Manufacturing", href: "/explore/manufacturing" },
  { title: "Retail", href: "/explore/retail" },
  { title: "Transportation", href: "/explore/transportation" },
  { title: "Hospitality", href: "/explore/hospitality" },
  { title: "Construction", href: "/explore/construction" },
  { title: "Energy", href: "/explore/energy" },
  { title: "Agriculture", href: "/explore/agriculture" },
]
interface NavigationMenuItem {
  title: string;
  href: string;
}
const navigationMenuItems: NavigationMenuItem[] = [
  { title: "Gigs", href: "/gigs" },
  { title: "What’s on", href: "/whats-on" },
  { title: "Community", href: "/community" },
]
export default function Header() {
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 max-w-[1080px]">
          <div className="flex h-18 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="w-[55.50847625732422px] h-[50px] flex items-center">
              <Logo />
            </Link>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-md">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search jobs, events..."
                  className="w-full h-[48px] max-w-[270px] rounded-full pr-10 text-base bg-secondary/50 border-border focus-visible:ring-accent"
                />
                <div className="absolute left-[230px] top-1/2 h-[34px] w-[34px] -translate-y-1/2 bg-[#FA6E80] hover:bg-[#f95569] text-white rounded-full flex items-center justify-center">
                  <Search className="h-[18px] w-[18px]" />
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList className="flex-wrap">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid grid-cols-3 gap-2 sm:w-[400px] md:w-[500px] lg:w-[648px]">
                        {Array.from({ length: 3 }).map((_, colIdx) => (
                          <div key={colIdx} className="flex flex-row">
                            <div key={colIdx}>
                              {components
                                .filter((_, idx) => idx % 3 === colIdx)
                                .map((component) => (
                                  <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                  />
                                ))}
                            </div>
                            {colIdx < 2 && (
                              <Separator orientation="vertical" className="mx-2 h-auto" />
                            )}
                          </div>
                        ))}
                      </ul>
                      <div className=" text-sm flex flex-row justify-center items-center mx-auto gap-3.5">
                        <p>Discover on more field, jobs, events, etc,. </p> <Link href={"#"} className="text-[#31A7AC] font-semibold"> Discover</Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <div>
                      {navigationMenuItems.map((item) => (
                        <NavigationMenuLink
                          key={item.title}
                          asChild
                          className={navigationMenuTriggerStyle()}
                        >
                          <Link href={item.href}>{item.title}</Link>
                        </NavigationMenuLink>
                      ))}
                    </div>

                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className="bg-gradient-to-r from-[#FA6E80] via-[#6A89BE] to-[#31A7AC] text-white hover:text-white px-4 py-2 rounded-full"
                    >
                      <Link href="/slate">Slate</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>



            </div>

            <div className="flex items-center gap-4">
              <div
                className="relative"
                onMouseLeave={() => setChatOpen(false)}
              >
                <div
                  onMouseEnter={() => setChatOpen(true)}
                  onClick={() => setChatOpen((prev) => !prev)}
                  className="relative cursor-pointer"
                >
                  <MessageCircleMore className="h-9 w-9" />
                  <Badge className="absolute -top-2 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-accent text-accent-foreground">
                    3
                  </Badge>
                </div>

                {chatOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setChatOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto bg-background border border-border rounded-lg shadow-lg z-50">
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold">Messages</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setChatOpen(false)}
                            aria-label="Close messages"
                          >
                            <X className="h-5 w-5" />
                          </Button>
                        </div>
                        <Separator className="mb-2" />
                        <p className="text-sm text-muted-foreground">No new messages</p>
                        {/* Placeholder for chat items */}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div
                className="relative hidden md:block"
                onMouseLeave={() => setNotificationOpen(false)}
              >
                <div
                  onMouseEnter={() => setNotificationOpen(true)}
                  onClick={() => setNotificationOpen((prev) => !prev)}
                  aria-label="Notifications"
                  className="relative h-9 w-9 cursor-pointer"
                >
                  <Bell className="h-9 w-9" />
                  {unreadCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-accent text-accent-foreground">
                      {unreadCount}
                    </Badge>
                  )}
                </div>

                {notificationOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setNotificationOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto bg-background border border-border rounded-lg shadow-lg z-50">
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold">Notifications</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setNotificationOpen(false)}
                            aria-label="Close notifications"
                          >
                            <X className="h-5 w-5" />
                          </Button>
                        </div>
                        <Separator className="mb-2" />
                        {notifications.length === 0 ? (
                          <p className="text-sm text-muted-foreground">No notifications</p>
                        ) : (
                          notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={`p-3 rounded-lg mb-2 cursor-pointer hover:bg-secondary/50 ${!notification.read ? "bg-accent/10" : ""
                                }`}
                            >
                              <h4 className="font-medium">{notification.title}</h4>
                              <p className="text-sm text-muted-foreground">{notification.description}</p>
                              <span className="text-xs text-muted-foreground">{notification.time}</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div
                className="relative"
                onMouseLeave={() => setUserMenuOpen(false)}
              >
                <div
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                  onMouseEnter={() => setUserMenuOpen(true)}
                  className="cursor-pointer"
                >
                  <Avatar className="h-[50px] w-[50px] rounded-full border-[#000000] border-[2px]">
                    <AvatarImage src="/image (2).png" alt="User" />
                    <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                  </Avatar>
                </div>

                {userMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setUserMenuOpen(false)}
                    />
                    <div className="absolute right-0 mt-1 w-64 bg-background border border-border rounded-lg shadow-lg z-50 p-4">
                      <div className="absolute top-2 right-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setUserMenuOpen(false)}
                          aria-label="Close user menu"
                        >
                          <X className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-center pt-8">
                        <div className="relative mb-4">
                          <Avatar className="h-20 w-20">
                            <AvatarImage src="/image (2).png" alt="User" />
                            <AvatarFallback className="bg-primary text-primary-foreground text-2xl">JD</AvatarFallback>
                          </Avatar>
                          <span className="absolute bottom-1 right-1 block h-4 w-4 rounded-full bg-green-500 ring-2 ring-background" />
                        </div>
                        <p className="font-semibold text-lg">John Doe</p>
                        <p className="text-sm text-muted-foreground">john@example.com</p>
                      </div>
                      {/* <Separator className="my-4" /> */}
                      <div className="-space-y-5">
                        <Button variant="ghost" className="w-full justify-start gap-3 h-12 text-base" asChild>
                          <Link href="/profile" onClick={() => setUserMenuOpen(false)}>
                            <User className="h-5 w-5" />
                            Profile
                          </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start gap-3 h-12 text-base" asChild>
                          <Link href="/friends" onClick={() => setUserMenuOpen(false)}>
                            <Save className="h-5 w-5" />
                            Saved
                          </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start gap-3 h-12 text-base" asChild>
                          <Link href="/settings" onClick={() => setUserMenuOpen(false)}>
                            <Settings className="h-5 w-5" />
                            Settings
                          </Link>
                        </Button>
                        <Separator className="mb-3.5 mt-2" />
                        <Button
                          variant="ghost"
                          className="w-full justify-start gap-3 h-12 text-base mb-2"
                          onClick={() => {
                            setUserMenuOpen(false)
                            // Add logout logic here
                          }}
                        >
                          <LogOut className="h-5 w-5" />
                          Logout
                        </Button>
                        <div className="p-[2px] rounded-[12.5px] bg-gradient-to-r from-[#FA6E80] via-[#6A89BE] to-[#31A7AC]">
                          <Button
                            className="w-full bg-white hover:bg-white rounded-[10px] text-black"
                            style={{
                              borderRadius: "10px",
                            }}
                          >
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#FA6E80] via-[#6A89BE] to-[#31A7AC]">
                              Send Invite
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>


          </div>
        </div>
      </nav>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-around px-6 py-3">
          <Link
            href="/"
            className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            onClick={() => {
              setChatOpen(false)
              setNotificationOpen(false)
              setUserMenuOpen(false)
            }}
          >
            <Compass className="h-6 w-6" />
          </Link>
          <Link
            href="/"
            className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            onClick={() => {
              setChatOpen(false)
              setNotificationOpen(false)
              setUserMenuOpen(false)
            }}
          >
            <Search className="h-6 w-6" />
          </Link>
          <Link
            href="/jobs"
            className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            onClick={() => {
              setChatOpen(false)
              setNotificationOpen(false)
              setUserMenuOpen(false)
            }}
          >
            <Briefcase className="h-6 w-6" />
          </Link>
          <Link
            href="/events"
            className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            onClick={() => {
              setChatOpen(false)
              setNotificationOpen(false)
              setUserMenuOpen(false)
            }}
          >
            <Calendar className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </>
  )
}



function ListItem({
  title,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}