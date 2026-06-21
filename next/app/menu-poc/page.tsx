"use client";
import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Pressable } from "@/components/ui/pressable";
import { Divider } from "@/components/ui/divider";
import { Icon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import {
  EditIcon,
  CopyIcon,
  TrashIcon,
  ShareIcon,
  DownloadIcon,
  StarIcon,
  ThreeDotsIcon,
  EyeIcon,
  AddIcon,
} from "@/components/ui/icon";
import { NativeMenu } from "@/components/ui/native-menu";
import type { MenuAction } from "@/components/ui/native-menu/types";

// ─── Demo Card Wrapper ────────────────────────────────────────────────────
const DemoCard = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => (
  <VStack className="border border-outline-200 rounded-xl p-6 bg-background-0 items-center gap-4 min-h-[180px] justify-center">
    <Text className="text-xs font-medium text-typography-400 uppercase tracking-wider">
      {label}
    </Text>
    {children}
  </VStack>
);

// ─── Section Title ────────────────────────────────────────────────────────
const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <VStack className="mb-6">
    <Text className="text-xs font-semibold text-typography-400 uppercase tracking-widest mb-1">
      {subtitle}
    </Text>
    <Heading size="lg" className="font-roboto text-typography-900">
      {title}
    </Heading>
  </VStack>
);

// ═══════════════════════════════════════════════════════════════════════════
// DEMO 1: Basic Icon Menu (unified API)
// ═══════════════════════════════════════════════════════════════════════════
const basicActions: MenuAction[] = [
  { id: "edit", title: "Edit", icon: "pencil", iconComponent: EditIcon },
  {
    id: "copy",
    title: "Copy",
    icon: "doc.on.doc",
    iconComponent: CopyIcon,
  },
  {
    id: "share",
    title: "Share",
    icon: "square.and.arrow.up",
    iconComponent: ShareIcon,
  },
  {
    id: "download",
    title: "Download",
    icon: "arrow.down.circle",
    iconComponent: DownloadIcon,
  },
];

const BasicIconMenu = () => (
  <DemoCard label="Basic — Icons + Actions">
    <NativeMenu
      actions={basicActions}
      onAction={(id) => console.log("Action:", id)}
    >
      <Button variant="outline" action="secondary">
        <ButtonText>Actions</ButtonText>
      </Button>
    </NativeMenu>
  </DemoCard>
);

// ═══════════════════════════════════════════════════════════════════════════
// DEMO 2: Destructive + Disabled Items
// ═══════════════════════════════════════════════════════════════════════════
const fileActions: MenuAction[] = [
  {
    id: "open",
    title: "Open",
    icon: "arrow.up.forward.square",
    iconComponent: EyeIcon,
  },
  { id: "rename", title: "Rename", icon: "pencil", iconComponent: EditIcon },
  {
    id: "duplicate",
    title: "Duplicate",
    icon: "doc.on.doc",
    iconComponent: CopyIcon,
    disabled: true,
  },
  {
    id: "delete",
    title: "Delete",
    icon: "trash",
    iconComponent: TrashIcon,
    destructive: true,
  },
];

const DestructiveMenu = () => (
  <DemoCard label="Destructive + Disabled">
    <NativeMenu
      actions={fileActions}
      onAction={(id) => console.log("File action:", id)}
    >
      <Button variant="outline" action="secondary">
        <ButtonText>File Options</ButtonText>
      </Button>
    </NativeMenu>
  </DemoCard>
);

// ═══════════════════════════════════════════════════════════════════════════
// DEMO 3: Selection State
// ═══════════════════════════════════════════════════════════════════════════
const SelectionMenu = () => {
  const [selected, setSelected] = useState<string>("comfortable");

  const densityActions: MenuAction[] = [
    {
      id: "compact",
      title: "Compact",
      selected: selected === "compact",
    },
    {
      id: "comfortable",
      title: "Comfortable",
      selected: selected === "comfortable",
    },
    {
      id: "spacious",
      title: "Spacious",
      selected: selected === "spacious",
    },
  ];

  return (
    <DemoCard label="Selection State (Checkmarks)">
      <NativeMenu
        title="Display Density"
        actions={densityActions}
        onAction={(id) => setSelected(id)}
      >
        <Button variant="outline" action="secondary">
          <ButtonText>
            Density:{" "}
            {densityActions.find((a) => a.selected)?.title}
          </ButtonText>
        </Button>
      </NativeMenu>
    </DemoCard>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// DEMO 4: Rich Items with Subtitles
// ═══════════════════════════════════════════════════════════════════════════
const shareActions: MenuAction[] = [
  {
    id: "email",
    title: "Email",
    subtitle: "Send via email client",
    icon: "envelope",
    iconComponent: ShareIcon,
  },
  {
    id: "copy-link",
    title: "Copy Link",
    subtitle: "Copy shareable URL",
    icon: "link",
    iconComponent: CopyIcon,
  },
  {
    id: "save",
    title: "Save to Files",
    subtitle: "Download locally",
    icon: "arrow.down.doc",
    iconComponent: DownloadIcon,
  },
];

const RichItemsMenu = () => (
  <DemoCard label="Rich Items — Subtitles">
    <NativeMenu
      title="Share With…"
      actions={shareActions}
      onAction={(id) => console.log("Share:", id)}
    >
      <Button variant="outline" action="secondary">
        <ButtonText>Share With…</ButtonText>
      </Button>
    </NativeMenu>
  </DemoCard>
);

// ═══════════════════════════════════════════════════════════════════════════
// DEMO 5: Nested Submenus
// ═══════════════════════════════════════════════════════════════════════════
const nestedActions: MenuAction[] = [
  { id: "new", title: "New", icon: "plus", iconComponent: AddIcon },
  {
    id: "share-group",
    title: "Share",
    icon: "square.and.arrow.up",
    iconComponent: ShareIcon,
    subactions: [
      { id: "email-sub", title: "Email", icon: "envelope" },
      { id: "message-sub", title: "Message", icon: "message" },
      { id: "airdrop-sub", title: "AirDrop", icon: "airplayaudio" },
    ],
  },
  {
    id: "favourite",
    title: "Favourite",
    icon: "star",
    iconComponent: StarIcon,
  },
];

const NestedMenu = () => (
  <DemoCard label="Nested Submenus">
    <NativeMenu
      actions={nestedActions}
      onAction={(id) => console.log("Nested:", id)}
    >
      <Button variant="outline" action="secondary">
        <ButtonText>More Options</ButtonText>
      </Button>
    </NativeMenu>
  </DemoCard>
);

// ═══════════════════════════════════════════════════════════════════════════
// DEMO 6: Context / Overflow Menu
// ═══════════════════════════════════════════════════════════════════════════
const overflowActions: MenuAction[] = [
  {
    id: "view",
    title: "View Details",
    icon: "eye",
    iconComponent: EyeIcon,
  },
  { id: "edit2", title: "Edit", icon: "pencil", iconComponent: EditIcon },
  {
    id: "dup",
    title: "Duplicate",
    icon: "doc.on.doc",
    iconComponent: CopyIcon,
  },
  {
    id: "fav",
    title: "Favourite",
    icon: "star",
    iconComponent: StarIcon,
  },
  {
    id: "del",
    title: "Delete",
    icon: "trash",
    iconComponent: TrashIcon,
    destructive: true,
  },
];

const ContextMenuDemo = () => (
  <DemoCard label="Context / Overflow Menu">
    <HStack className="border border-outline-200 rounded-lg p-4 items-center w-full max-w-[320px]">
      <VStack className="flex-1">
        <Text className="font-semibold text-typography-900">
          Project Alpha
        </Text>
        <Text className="text-sm text-typography-500">
          Last updated 2 hours ago
        </Text>
      </VStack>
      <NativeMenu
        actions={overflowActions}
        onAction={(id) => console.log("Context:", id)}
      >
        <Pressable className="p-2 rounded-full hover:bg-background-100">
          <Icon
            as={ThreeDotsIcon}
            size="lg"
            className="text-typography-500"
          />
        </Pressable>
      </NativeMenu>
    </HStack>
  </DemoCard>
);

// ═══════════════════════════════════════════════════════════════════════════
// MAIN POC PAGE
// ═══════════════════════════════════════════════════════════════════════════
const MenuPocPage = () => {
  return (
    <Box className="flex-1 bg-background-50 min-h-screen">
      <Box className="max-w-[960px] mx-auto p-6 md:p-10">
        {/* Header */}
        <VStack className="mb-10">
          <Text className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-2">
            Proof of Concept
          </Text>
          <Heading size="2xl" className="font-roboto text-typography-950 mb-2">
            Unified NativeMenu
          </Heading>
          <Text className="text-typography-500 text-base leading-relaxed max-w-[640px]">
            A single declarative API that renders{" "}
            <Text className="font-mono text-sm bg-background-100 px-1.5 py-0.5 rounded text-primary-700">
              UIMenu
            </Text>{" "}
            on iOS,{" "}
            <Text className="font-mono text-sm bg-background-100 px-1.5 py-0.5 rounded text-primary-700">
              PopupMenu
            </Text>{" "}
            on Android, and a gluestack-ui popover on web — all from the same
            action array. No platform-specific code in screens.
          </Text>
        </VStack>

        {/* Features Grid */}
        <VStack className="gap-8">
          <SectionTitle
            title="Icon-Based Actions"
            subtitle="Feature 1 — Platform Icons"
          />
          <HStack className="gap-6 flex-wrap">
            <Box className="flex-1 min-w-[280px]">
              <BasicIconMenu />
            </Box>
            <Box className="flex-1 min-w-[280px]">
              <DestructiveMenu />
            </Box>
          </HStack>

          <Divider className="my-4" />

          <SectionTitle
            title="Selection & Rich Items"
            subtitle="Feature 2 — State Management"
          />
          <HStack className="gap-6 flex-wrap">
            <Box className="flex-1 min-w-[280px]">
              <SelectionMenu />
            </Box>
            <Box className="flex-1 min-w-[280px]">
              <RichItemsMenu />
            </Box>
          </HStack>

          <Divider className="my-4" />

          <SectionTitle
            title="Nested Submenus & Context Menus"
            subtitle="Feature 3 — Advanced Patterns"
          />
          <HStack className="gap-6 flex-wrap">
            <Box className="flex-1 min-w-[280px]">
              <NestedMenu />
            </Box>
            <Box className="flex-1 min-w-[280px]">
              <ContextMenuDemo />
            </Box>
          </HStack>
        </VStack>

        {/* Platform Behaviour Table */}
        <Box className="mt-12 p-6 bg-background-0 border border-outline-200 rounded-xl">
          <Heading size="md" className="font-roboto mb-4 text-typography-800">
            Platform Behaviour
          </Heading>
          <VStack className="gap-3">
            <HStack className="gap-4 items-center">
              <Text className="w-24 font-semibold text-typography-700">
                iOS
              </Text>
              <Text className="text-typography-600 flex-1">
                Native UIMenu — SF Symbol icons, destructive red, submenus,
                checkmark selection. Rendered by the OS.
              </Text>
            </HStack>
            <HStack className="gap-4 items-center">
              <Text className="w-24 font-semibold text-typography-700">
                Android
              </Text>
              <Text className="text-typography-600 flex-1">
                Native PopupMenu — drawable icons, destructive styling,
                disabled states. Rendered by the OS.
              </Text>
            </HStack>
            <HStack className="gap-4 items-center">
              <Text className="w-24 font-semibold text-typography-700">
                Web
              </Text>
              <Text className="text-typography-600 flex-1">
                Gluestack-ui popover Menu — React components with Tailwind
                styling, animated open/close, hover states.
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuPocPage;
