import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { router } from "expo-router";
import {
  ChevronRight,
  LogIn,
  UserPlus,
  CreditCard,
} from "lucide-react-native";

const routes = [
  {
    label: "Sign In",
    path: "/auth/signin",
    icon: LogIn,
    color: "#BF2126",
  },
  {
    label: "Sign Up",
    path: "/auth/signup",
    icon: UserPlus,
    color: "#1C2A4A",
  },
  {
    label: "God Card",
    path: "/god-card",
    icon: CreditCard,
    color: "#3B82F6",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background-50">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}
        <VStack
          space="sm"
          className="px-6 pt-10 pb-6 bg-secondary-600"
        >
          <HStack space="md" className="items-center">
            <Box className="bg-primary-500 rounded-md p-1.5 justify-center items-center w-9 h-9">
              <Text className="text-white font-bold text-base tracking-tighter">
                G
              </Text>
            </Box>
            <VStack space="none">
              <Text className="text-white font-bold text-lg tracking-wide">
                GamaLearn UI
              </Text>
              <Text className="text-white text-xs opacity-70">
                Component Starter Kit
              </Text>
            </VStack>
          </HStack>
        </VStack>

        {/* Routes List */}
        <VStack space="sm" className="px-6 pt-6">
          <Text className="text-typography-500 text-xs font-semibold uppercase tracking-wider mb-2">
            Screens
          </Text>

          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <TouchableOpacity
                key={route.path}
                onPress={() => router.push(route.path as any)}
                activeOpacity={0.7}
              >
                <HStack
                  className="bg-background-0 rounded-xl px-4 py-4 items-center border border-border-200 shadow-sm"
                  space="md"
                >
                  <Box
                    className="w-10 h-10 rounded-lg items-center justify-center"
                    style={{ backgroundColor: route.color + "15" }}
                  >
                    <Icon size={20} color={route.color} />
                  </Box>
                  <Text className="text-typography-900 font-semibold text-sm flex-1">
                    {route.label}
                  </Text>
                  <ChevronRight size={16} color="#A0A0A0" />
                </HStack>
              </TouchableOpacity>
            );
          })}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
