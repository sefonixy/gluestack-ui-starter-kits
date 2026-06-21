import React, { useState } from "react";
import { ScrollView, Alert, Platform } from "react-native";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Pressable } from "@/components/ui/pressable";
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

const showAction = (id: string) => {
  Alert.alert("Menu Action", `You selected: ${id}`);
};

// Card container for previewing different configurations
const DemoCard = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => (
  <VStack className="border border-outline-200 rounded-xl p-6 bg-background-0 items-center gap-4 min-h-[160px] justify-center mb-4">
    <Text className="text-xs font-medium text-typography-400 uppercase tracking-wider">
      {label}
    </Text>
    {children}
  </VStack>
);

// Action configuration definitions
const basicActions: MenuAction[] = [
  { id: "edit", title: "Edit", icon: "pencil", iconComponent: EditIcon },
  { id: "copy", title: "Copy", icon: "doc.on.doc", iconComponent: CopyIcon },
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

const overflowActions: MenuAction[] = [
  { id: "view", title: "View Details", icon: "eye", iconComponent: EyeIcon },
  { id: "edit2", title: "Edit", icon: "pencil", iconComponent: EditIcon },
  {
    id: "dup",
    title: "Duplicate",
    icon: "doc.on.doc",
    iconComponent: CopyIcon,
  },
  { id: "fav", title: "Favourite", icon: "star", iconComponent: StarIcon },
  {
    id: "del",
    title: "Delete",
    icon: "trash",
    iconComponent: TrashIcon,
    destructive: true,
  },
];

// Selection state menu component
const SelectionDemo = () => {
  const [selected, setSelected] = useState("comfortable");

  const densityActions: MenuAction[] = [
    { id: "compact", title: "Compact", selected: selected === "compact" },
    {
      id: "comfortable",
      title: "Comfortable",
      selected: selected === "comfortable",
    },
    { id: "spacious", title: "Spacious", selected: selected === "spacious" },
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
            Density: {densityActions.find((a) => a.selected)?.title}
          </ButtonText>
        </Button>
      </NativeMenu>
    </DemoCard>
  );
};

// Menu POC Screen
export default function MenuPocScreen() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 16, paddingBottom: 60 }}
    >
      <VStack className="mb-6">
        <Text className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-2">
          Proof of Concept
        </Text>
        <Heading size="xl" className="text-typography-950 mb-1">
          Unified NativeMenu
        </Heading>
        <Text className="text-typography-500 text-sm">
          Platform:{" "}
          <Text className="font-mono text-primary-700">
            {Platform.OS} — {Platform.OS === "web" ? "Popover" : "Native"}
          </Text>
        </Text>
      </VStack>

      {/* Demo 1: Basic */}
      <DemoCard label="Basic — Icons + Actions">
        <NativeMenu actions={basicActions} onAction={showAction}>
          <Button variant="outline" action="secondary">
            <ButtonText>Actions</ButtonText>
          </Button>
        </NativeMenu>
      </DemoCard>

      {/* Demo 2: Destructive + Disabled */}
      <DemoCard label="Destructive + Disabled">
        <NativeMenu actions={fileActions} onAction={showAction}>
          <Button variant="outline" action="secondary">
            <ButtonText>File Options</ButtonText>
          </Button>
        </NativeMenu>
      </DemoCard>

      {/* Demo 3: Selection */}
      <SelectionDemo />

      {/* Demo 4: Nested Submenus */}
      <DemoCard label="Nested Submenus">
        <NativeMenu actions={nestedActions} onAction={showAction}>
          <Button variant="outline" action="secondary">
            <ButtonText>More Options</ButtonText>
          </Button>
        </NativeMenu>
      </DemoCard>

      {/* Demo 5: Context / Overflow */}
      <DemoCard label="Context / Overflow Menu">
        <HStack className="border border-outline-200 rounded-lg p-4 items-center w-full">
          <VStack className="flex-1">
            <Text className="font-semibold text-typography-900">
              Project Alpha
            </Text>
            <Text className="text-sm text-typography-500">
              Last updated 2 hours ago
            </Text>
          </VStack>
          <NativeMenu actions={overflowActions} onAction={showAction}>
            <Pressable className="p-2 rounded-full">
              <Icon
                as={ThreeDotsIcon}
                size="lg"
                className="text-typography-500"
              />
            </Pressable>
          </NativeMenu>
        </HStack>
      </DemoCard>
    </ScrollView>
  );
}
