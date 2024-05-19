"use client"
import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem, Avatar, Badge } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex flex-col gap-4">
        <h1>🐶 Việt =))</h1>
        <Button>Click me</Button>

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

        <div>
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex gap-4 items-center">
          <Badge content="5" color="danger" shape="rectangle">
            <Avatar
              isBordered
              radius="md"
              src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
            />
          </Badge>
          <Badge content="5" color="danger" shape="circle">
            <Avatar
              isBordered
              radius="full"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
          </Badge>
        </div>
      </div>
    </main>
  );
}
