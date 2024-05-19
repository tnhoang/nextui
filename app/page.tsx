"use client"
import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem, Avatar, Badge, BreadcrumbItem, Breadcrumbs, Card, CardBody, CardFooter, CardHeader, Checkbox, Chip, CircularProgress, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Kbd, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Skeleton, Slider, Snippet, Spinner, Switch, Tab, Tabs, User, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { FaCamera, FaHeart, FaImage, FaMoon, FaMusic, FaRegKissWinkHeart, FaSkull, FaUserAlt, FaVideo } from "react-icons/fa";
import { FaVolumeHigh, FaVolumeLow } from "react-icons/fa6";
import { IoHeartCircleOutline, IoShieldCheckmark, IoSunny, IoSunnySharp } from "react-icons/io5";
import { PiPlusCircleDuotone } from "react-icons/pi";

export default function Home() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const colors = ["primary", "secondary"]
  const [isFollowed, setIsFollowed] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex flex-col gap-4 pt-2">
        <Button color="primary" variant="shadow">
          Shadow
        </Button>

        <div>
          <div className="flex gap-4 items-center">
            <Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
            <Avatar isBordered color="warning" src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            <Avatar isBordered color="danger" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Badge content="5" color="default">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
            />
          </Badge>
          <Badge content="5" color="primary">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
          </Badge>
          <Badge content="5" color="secondary">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
            />
          </Badge>
          <Badge content="5" color="success">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
          </Badge>
          <Badge content="5" color="warning">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
          </Badge>
          <Badge content="5" color="danger">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
          </Badge>
        </div>

        <Button color="warning" isLoading>
          Loading
        </Button>

        <div className="flex gap-4 items-center">
          <Button color="success" endContent={<FaCamera />}>
            Take a photo
          </Button>
          <Button color="danger" variant="bordered" startContent={<FaUserAlt />}>
            Delete user
          </Button>
        </div>

        <div className="flex flex-col flex-wrap gap-4">
          <Breadcrumbs key="secondary" color="secondary">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Music</BreadcrumbItem>
            <BreadcrumbItem>Artist</BreadcrumbItem>
            <BreadcrumbItem>Album</BreadcrumbItem>
            <BreadcrumbItem>Song</BreadcrumbItem>
          </Breadcrumbs>

          <div className="flex gap-4">
            <Checkbox defaultSelected color="default">Default</Checkbox>
            <Checkbox defaultSelected color="success">Success</Checkbox>
            <Checkbox defaultSelected color="warning">Warning</Checkbox>
            <Checkbox defaultSelected color="danger">Danger</Checkbox>
          </div>
          <div className="flex gap-4">
            <Checkbox defaultSelected icon={<FaCamera />}>Option</Checkbox>
            <Checkbox defaultSelected icon={<FaHeart />} color="warning">Option</Checkbox>
            <Checkbox defaultSelected icon={<IoShieldCheckmark />} color="primary">Option</Checkbox>
            <Checkbox defaultSelected icon={<FaSkull />} color="danger">Option</Checkbox>
          </div>

          <div className="flex gap-4">
            <Chip color="warning" variant="solid">Solid</Chip>
            <Chip color="warning" variant="bordered">Bordered</Chip>
            <Chip color="warning" variant="light">Light</Chip>
            <Chip color="warning" variant="flat">Flat</Chip>
          </div>
          <div className="flex gap-4">
            <Chip color="warning" variant="faded">Faded</Chip>
            <Chip color="warning" variant="shadow">Shadow</Chip>
            <Chip color="warning" variant="dot">Dot</Chip>
          </div>

          <div className="flex gap-4">
            <CircularProgress color="default" aria-label="Loading..." />
            <CircularProgress color="primary" aria-label="Loading..." />
            <CircularProgress color="secondary" aria-label="Loading..." />
            <CircularProgress color="success" aria-label="Loading..." />
            <CircularProgress color="warning" aria-label="Loading..." />
            <CircularProgress color="danger" aria-label="Loading..." />
          </div>

          <Dropdown>
            <DropdownTrigger>
              <Button
                color="success"
                variant="bordered"
              >
                Drop down
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <div className="flex items-center gap-4">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">
                  My Settings
                </DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">
                  Analytics
                </DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                  }}
                  className="transition-transform"
                  description="@tonyreichert"
                  name="Tony Reichert"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">Signed in as</p>
                  <p className="font-bold">@tonyreichert</p>
                </DropdownItem>
                <DropdownItem key="settings">
                  My Settings
                </DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">
                  Analytics
                </DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div className="flex gap-4">
            <Kbd keys={["command"]}>K</Kbd>
            <Kbd keys={["command", "shift"]}>N</Kbd>
            <Kbd keys={["option", "command"]}>P</Kbd>
          </div>


          <div className="flex gap-2">
            <Link isBlock showAnchorIcon href="#" color="foreground">
              Foregrnd
            </Link>
            <Link isBlock showAnchorIcon href="#" color="primary">
              Primary
            </Link>
            <Link isBlock showAnchorIcon href="#" color="secondary">
              Secondary
            </Link>
          </div>
          <div className="flex gap-2">
            <Link isBlock showAnchorIcon href="#" color="success">
              Success
            </Link>
            <Link isBlock showAnchorIcon href="#" color="warning">
              Warning
            </Link>
            <Link isBlock showAnchorIcon href="#" color="danger">
              Danger
            </Link>
          </div>

          <Button color="secondary" onPress={onOpen}>Open Modal</Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>

          <Snippet color="primary">npm install @nextui-org/react</Snippet>
          <Snippet color="success">npm install @nextui-org/react</Snippet>

          <div className="flex gap-4">
            <Spinner label="Default" color="default" labelColor="foreground" />
            <Spinner label="Primary" color="primary" labelColor="primary" />
            <Spinner label="Secondary" color="secondary" labelColor="secondary" />
            <Spinner label="Success" color="success" labelColor="success" />
            <Spinner label="Warning" color="warning" labelColor="warning" />
            <Spinner label="Danger" color="danger" labelColor="danger" />
          </div>

          <Switch
            defaultSelected
            size="lg"
            color="success"
            startContent={<IoSunny />}
            endContent={<FaMoon />}
          >
            Dark mode
          </Switch>

          <Slider
            aria-label="Volume"
            size="lg"
            color="success"
            startContent={<FaVolumeLow className="text-2xl" />}
            endContent={<FaVolumeHigh className="text-2xl" />}
            className="max-w-md"
            defaultValue={40}
          />

          <Slider
            size="lg"
            step={0.1}
            color="warning"
            label="Temperature"
            showSteps={true}
            maxValue={1}
            minValue={0}
            defaultValue={0.6}
            className="max-w-md"
          />

          <div className="flex w-full flex-col">
            <Tabs aria-label="Options" color="primary" variant="bordered">
              <Tab
                key="photos"
                title={
                  <div className="flex items-center space-x-12">
                    <FaImage />
                    <span className="ml-2">Photos</span>
                  </div>
                }
              />
              <Tab
                key="music"
                title={
                  <div className="flex items-center space-x-2">
                    <FaMusic />
                    <span className="ml-2">Music</span>
                  </div>
                }
              />
              <Tab
                key="videos"
                title={
                  <div className="flex items-center space-x-2">
                    <FaVideo />
                    <span className="ml-2">Videos</span>
                  </div>
                }
              />
            </Tabs>
          </div>


        </div>
      </div>
    </main>
  );
}
