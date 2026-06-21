"use client";

import React, { useEffect } from "react";
import { useThemeContext } from "../ThemeContext";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge, BadgeText } from "@/components/ui/badge";
import { Alert, AlertText } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckboxGroup,
} from "@/components/ui/checkbox";
import {
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
} from "@/components/ui/radio";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { ScrollView } from "@/components/ui/scroll-view";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import {
  Avatar,
  AvatarFallbackText,
  AvatarBadge,
} from "@/components/ui/avatar";
import { Icon } from "@/components/ui/icon";
import {
  CheckIcon,
  CircleIcon,
  SearchIcon,
  BellIcon,
  SettingsIcon,
  MailIcon,
  StarIcon,
  InfoIcon,
  EditIcon,
  SunIcon,
  MoonIcon,
} from "@/components/ui/icon";

import customTokens from "@/components/ui/gluestack-ui-provider/theme-tokens.json";
import {
  ScenarioIcon,
  DescIcon,
  HintIcon,
  CalcIcon,
  RulerIcon,
  ProtractorIcon,
  MediaIcon,
  ResetIcon,
  ReviewIcon,
} from "./checkpoint-icons";
/* ─────────────────────────────────────────────
   Section wrapper — keeps visual consistency
   ───────────────────────────────────────────── */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="bg-background-0 border border-border-200 p-6 rounded-xl">
      <VStack space="md">
        <Heading size="md" className="text-typography-900 font-bold">
          {title}
        </Heading>
        <Divider className="bg-border-100" />
        {children}
      </VStack>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   Color swatch helper
   ───────────────────────────────────────────── */
function Swatch({
  label,
  bgClass,
}: {
  label: string;
  bgClass: string;
}) {
  return (
    <VStack className="items-center" space="xs">
      <Box
        className={`w-10 h-10 rounded-md border border-border-200 ${bgClass}`}
      />
      <Text size="xs" className="text-typography-500">
        {label}
      </Text>
    </VStack>
  );
}

/* ═════════════════════════════════════════════
   Main Page
   ═════════════════════════════════════════════ */
export default function ThemePlayground() {
  const { mode, toggleMode, customTheme, setCustomTheme } = useThemeContext();

  // Apply custom Figma tokens on mount
  useEffect(() => {
    setCustomTheme(customTokens);
  }, [setCustomTheme]);

  const isCustom = !!customTheme;

  return (
    <ScrollView className="w-full h-full bg-background-0">
      <Box className="p-6">
        <VStack space="xl" className="w-full max-w-5xl mx-auto">
          {/* ══════════════════════════════════════
           Section 1 — Page Header & Controls
           ══════════════════════════════════════ */}
          <Box className="bg-background-50 border border-border-200 p-5 rounded-xl">
            <HStack className="items-center justify-between flex-wrap gap-y-3">
              <VStack>
                <Heading size="xl" className="text-typography-900 font-bold">
                  Design System Showcase
                </Heading>
                <Text size="sm" className="text-typography-500">
                  Gluestack UI components rendered with custom Figma design tokens
                </Text>
              </VStack>
              <HStack space="sm">
                <Button
                  action="secondary"
                  variant="outline"
                  size="sm"
                  onPress={() =>
                    setCustomTheme(isCustom ? undefined : customTokens)
                  }
                >
                  <ButtonText>
                    {isCustom ? "Default Theme" : "Figma Theme"}
                  </ButtonText>
                </Button>
                <Button action="primary" variant="solid" size="sm" onPress={toggleMode}>
                  <ButtonText>
                    {mode === "light" ? "Dark Mode" : "Light Mode"}
                  </ButtonText>
                </Button>
              </HStack>
            </HStack>
          </Box>

          {/* ══════════════════════════════════════
           Section 2 — Color Palette Swatches
           ══════════════════════════════════════ */}
          <Section title="Color Palette">
            <VStack space="lg">
              {/* Primary */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Primary
                </Text>
                <HStack space="sm" className="flex-wrap gap-y-2">
                  <Swatch label="50" bgClass="bg-primary-50" />
                  <Swatch label="100" bgClass="bg-primary-100" />
                  <Swatch label="200" bgClass="bg-primary-200" />
                  <Swatch label="300" bgClass="bg-primary-300" />
                  <Swatch label="400" bgClass="bg-primary-400" />
                  <Swatch label="500" bgClass="bg-primary-500" />
                  <Swatch label="600" bgClass="bg-primary-600" />
                  <Swatch label="700" bgClass="bg-primary-700" />
                  <Swatch label="800" bgClass="bg-primary-800" />
                  <Swatch label="900" bgClass="bg-primary-900" />
                  <Swatch label="950" bgClass="bg-primary-950" />
                </HStack>
              </VStack>

              {/* Secondary */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Secondary
                </Text>
                <HStack space="sm" className="flex-wrap gap-y-2">
                  <Swatch label="50" bgClass="bg-secondary-50" />
                  <Swatch label="100" bgClass="bg-secondary-100" />
                  <Swatch label="200" bgClass="bg-secondary-200" />
                  <Swatch label="300" bgClass="bg-secondary-300" />
                  <Swatch label="400" bgClass="bg-secondary-400" />
                  <Swatch label="500" bgClass="bg-secondary-500" />
                  <Swatch label="600" bgClass="bg-secondary-600" />
                  <Swatch label="700" bgClass="bg-secondary-700" />
                  <Swatch label="800" bgClass="bg-secondary-800" />
                  <Swatch label="900" bgClass="bg-secondary-900" />
                  <Swatch label="950" bgClass="bg-secondary-950" />
                </HStack>
              </VStack>

              {/* Tertiary */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Tertiary
                </Text>
                <HStack space="sm" className="flex-wrap gap-y-2">
                  <Swatch label="50" bgClass="bg-tertiary-50" />
                  <Swatch label="100" bgClass="bg-tertiary-100" />
                  <Swatch label="200" bgClass="bg-tertiary-200" />
                  <Swatch label="300" bgClass="bg-tertiary-300" />
                  <Swatch label="400" bgClass="bg-tertiary-400" />
                  <Swatch label="500" bgClass="bg-tertiary-500" />
                  <Swatch label="600" bgClass="bg-tertiary-600" />
                  <Swatch label="700" bgClass="bg-tertiary-700" />
                  <Swatch label="800" bgClass="bg-tertiary-800" />
                  <Swatch label="900" bgClass="bg-tertiary-900" />
                  <Swatch label="950" bgClass="bg-tertiary-950" />
                </HStack>
              </VStack>

              {/* Semantic */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Semantic (Error · Success · Warning · Info)
                </Text>
                <HStack space="md" className="flex-wrap gap-y-2">
                  <Swatch label="error" bgClass="bg-error-500" />
                  <Swatch label="success" bgClass="bg-success-500" />
                  <Swatch label="warning" bgClass="bg-warning-500" />
                  <Swatch label="info" bgClass="bg-info-500" />
                </HStack>
              </VStack>
            </VStack>
          </Section>

          {/* ══════════════════════════════════════
           Section 3 — Button Variants
           ══════════════════════════════════════ */}
          <Section title="Buttons">
            <VStack space="lg">
              {/* Actions — Solid */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Solid Buttons (action variants)
                </Text>
                <HStack space="sm" className="flex-wrap gap-y-2">
                  <Button action="primary" variant="solid" size="md">
                    <ButtonText>Primary</ButtonText>
                  </Button>
                  <Button action="secondary" variant="solid" size="md">
                    <ButtonText>Secondary</ButtonText>
                  </Button>
                  <Button action="positive" variant="solid" size="md">
                    <ButtonText>Positive</ButtonText>
                  </Button>
                  <Button action="negative" variant="solid" size="md">
                    <ButtonText>Negative</ButtonText>
                  </Button>
                </HStack>
              </VStack>

              {/* Variants */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Variant Types (outline, link)
                </Text>
                <HStack space="sm" className="flex-wrap gap-y-2">
                  <Button action="primary" variant="outline" size="md">
                    <ButtonText>Outline Primary</ButtonText>
                  </Button>
                  <Button action="secondary" variant="outline" size="md">
                    <ButtonText>Outline Secondary</ButtonText>
                  </Button>
                  <Button action="primary" variant="link" size="md">
                    <ButtonText>Link Primary</ButtonText>
                  </Button>
                  <Button action="negative" variant="link" size="md">
                    <ButtonText>Link Negative</ButtonText>
                  </Button>
                </HStack>
              </VStack>

              {/* Sizes */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Size Scale
                </Text>
                <HStack space="sm" className="items-center flex-wrap gap-y-2">
                  <Button action="primary" variant="solid" size="xs">
                    <ButtonText>XS</ButtonText>
                  </Button>
                  <Button action="primary" variant="solid" size="sm">
                    <ButtonText>SM</ButtonText>
                  </Button>
                  <Button action="primary" variant="solid" size="md">
                    <ButtonText>MD</ButtonText>
                  </Button>
                  <Button action="primary" variant="solid" size="lg">
                    <ButtonText>LG</ButtonText>
                  </Button>
                </HStack>
              </VStack>
            </VStack>
          </Section>

          {/* ══════════════════════════════════════
           Section 4 — Form Elements
           ══════════════════════════════════════ */}
          <Section title="Form Elements">
            <VStack space="lg">
              {/* Input variants */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Input — Outline
                </Text>
                <Input variant="outline" size="md">
                  <InputField placeholder="Enter your email" />
                </Input>
              </VStack>

              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Input — Underlined
                </Text>
                <Input variant="underlined" size="md">
                  <InputField placeholder="Underlined input field" />
                </Input>
              </VStack>

              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Input — Rounded
                </Text>
                <Input variant="rounded" size="md">
                  <InputField placeholder="Search..." />
                </Input>
              </VStack>

              {/* Input sizes */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Input Sizes
                </Text>
                <VStack space="xs">
                  <Input variant="outline" size="sm">
                    <InputField placeholder="Small (sm)" />
                  </Input>
                  <Input variant="outline" size="md">
                    <InputField placeholder="Medium (md)" />
                  </Input>
                  <Input variant="outline" size="lg">
                    <InputField placeholder="Large (lg)" />
                  </Input>
                </VStack>
              </VStack>

              {/* Switch */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Switch
                </Text>
                <HStack space="lg" className="items-center">
                  <HStack space="sm" className="items-center">
                    <Switch size="sm" />
                    <Text size="sm" className="text-typography-700">SM</Text>
                  </HStack>
                  <HStack space="sm" className="items-center">
                    <Switch size="md" />
                    <Text size="sm" className="text-typography-700">MD</Text>
                  </HStack>
                  <HStack space="sm" className="items-center">
                    <Switch size="lg" />
                    <Text size="sm" className="text-typography-700">LG</Text>
                  </HStack>
                </HStack>
              </VStack>
            </VStack>
          </Section>

          {/* ══════════════════════════════════════
           Section 5 — Feedback & Status
           ══════════════════════════════════════ */}
          <Section title="Feedback & Status">
            <VStack space="lg">
              {/* Badges */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Badge
                </Text>
                <HStack space="sm" className="flex-wrap gap-y-2">
                  <Badge action="error" variant="solid">
                    <BadgeText>Error</BadgeText>
                  </Badge>
                  <Badge action="warning" variant="solid">
                    <BadgeText>Warning</BadgeText>
                  </Badge>
                  <Badge action="success" variant="solid">
                    <BadgeText>Success</BadgeText>
                  </Badge>
                  <Badge action="info" variant="solid">
                    <BadgeText>Info</BadgeText>
                  </Badge>
                  <Badge action="muted" variant="solid">
                    <BadgeText>Muted</BadgeText>
                  </Badge>
                </HStack>
                <HStack space="sm" className="flex-wrap gap-y-2">
                  <Badge action="error" variant="outline">
                    <BadgeText>Error</BadgeText>
                  </Badge>
                  <Badge action="warning" variant="outline">
                    <BadgeText>Warning</BadgeText>
                  </Badge>
                  <Badge action="success" variant="outline">
                    <BadgeText>Success</BadgeText>
                  </Badge>
                  <Badge action="info" variant="outline">
                    <BadgeText>Info</BadgeText>
                  </Badge>
                  <Badge action="muted" variant="outline">
                    <BadgeText>Muted</BadgeText>
                  </Badge>
                </HStack>
              </VStack>

              {/* Alerts */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Alert
                </Text>
                <VStack space="xs">
                  <Alert action="error">
                    <AlertText>Error: Something went wrong.</AlertText>
                  </Alert>
                  <Alert action="warning">
                    <AlertText>Warning: Please review your input.</AlertText>
                  </Alert>
                  <Alert action="success">
                    <AlertText>Success: Changes saved successfully.</AlertText>
                  </Alert>
                  <Alert action="info">
                    <AlertText>Info: New update available.</AlertText>
                  </Alert>
                  <Alert action="muted">
                    <AlertText>Note: This is a muted message.</AlertText>
                  </Alert>
                </VStack>
              </VStack>
            </VStack>
          </Section>

          {/* ══════════════════════════════════════
           Section 6 — Typography
           ══════════════════════════════════════ */}
          <Section title="Typography">
            <VStack space="md">
              <VStack space="sm">
                <Text size="sm" className="text-typography-500 font-semibold">
                  Heading Sizes
                </Text>
                <Heading size="2xl" className="text-typography-900">
                  Heading 2XL
                </Heading>
                <Heading size="xl" className="text-typography-900">
                  Heading XL
                </Heading>
                <Heading size="lg" className="text-typography-900">
                  Heading LG
                </Heading>
                <Heading size="md" className="text-typography-900">
                  Heading MD
                </Heading>
                <Heading size="sm" className="text-typography-900">
                  Heading SM
                </Heading>
                <Heading size="xs" className="text-typography-900">
                  Heading XS
                </Heading>
              </VStack>

              <Divider className="bg-border-100" />

              <VStack space="sm">
                <Text size="sm" className="text-typography-500 font-semibold">
                  Text Sizes
                </Text>
                <Text size="xl" className="text-typography-900">
                  Text XL — Body text at extra large size
                </Text>
                <Text size="lg" className="text-typography-800">
                  Text LG — Body text at large size
                </Text>
                <Text size="md" className="text-typography-700">
                  Text MD — Body text at medium size (default)
                </Text>
                <Text size="sm" className="text-typography-600">
                  Text SM — Body text at small size
                </Text>
                <Text size="xs" className="text-typography-500">
                  Text XS — Caption or helper text
                </Text>
              </VStack>
            </VStack>
          </Section>

          {/* ══════════════════════════════════════
           Section 7 — Layout & Surfaces
           ══════════════════════════════════════ */}
          <Section title="Layout & Surfaces">
            <VStack space="lg">
              {/* Background levels */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Background Scale
                </Text>
                <HStack space="sm" className="flex-wrap gap-y-2">
                  <Swatch label="0" bgClass="bg-background-0" />
                  <Swatch label="50" bgClass="bg-background-50" />
                  <Swatch label="100" bgClass="bg-background-100" />
                  <Swatch label="200" bgClass="bg-background-200" />
                  <Swatch label="300" bgClass="bg-background-300" />
                  <Swatch label="400" bgClass="bg-background-400" />
                  <Swatch label="500" bgClass="bg-background-500" />
                  <Swatch label="600" bgClass="bg-background-600" />
                  <Swatch label="700" bgClass="bg-background-700" />
                  <Swatch label="800" bgClass="bg-background-800" />
                  <Swatch label="900" bgClass="bg-background-900" />
                  <Swatch label="950" bgClass="bg-background-950" />
                </HStack>
              </VStack>

              {/* Special backgrounds */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Semantic Backgrounds
                </Text>
                <HStack space="sm" className="flex-wrap gap-y-2">
                  <Swatch label="error" bgClass="bg-background-error" />
                  <Swatch label="warning" bgClass="bg-background-warning" />
                  <Swatch label="success" bgClass="bg-background-success" />
                  <Swatch label="info" bgClass="bg-background-info" />
                  <Swatch label="muted" bgClass="bg-background-muted" />
                </HStack>
              </VStack>

              {/* Card example */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Card Component
                </Text>
                <Card className="bg-background-50 border border-border-200 p-4 rounded-lg">
                  <VStack space="sm">
                    <Heading size="sm" className="text-typography-900">
                      Card Title
                    </Heading>
                    <Text size="sm" className="text-typography-600">
                      This card uses bg-background-50 with border-border-200. All
                      colors come from design tokens.
                    </Text>
                    <Divider className="bg-border-100" />
                    <HStack space="sm">
                      <Button action="primary" variant="solid" size="sm">
                        <ButtonText>Action</ButtonText>
                      </Button>
                      <Button action="secondary" variant="outline" size="sm">
                        <ButtonText>Cancel</ButtonText>
                      </Button>
                    </HStack>
                  </VStack>
                </Card>
              </VStack>

              {/* Divider */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Divider
                </Text>
                <Divider className="bg-border-200" />
                <Text size="xs" className="text-typography-500">
                  Divider using bg-border-200
                </Text>
                <Divider className="bg-primary-500" />
                <Text size="xs" className="text-typography-500">
                  Divider using bg-primary-500
                </Text>
              </VStack>
            </VStack>
          </Section>

          {/* ══════════════════════════════════════
           Section 8 — Checkbox & Radio
           ══════════════════════════════════════ */}
          <Section title="Checkbox & Radio">
            <VStack space="lg">
              {/* Checkbox */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Checkbox
                </Text>
                <CheckboxGroup value={["option1"]}>
                  <VStack space="md">
                    <Checkbox value="option1" size="md">
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>Option A (checked)</CheckboxLabel>
                    </Checkbox>
                    <Checkbox value="option2" size="md">
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>Option B</CheckboxLabel>
                    </Checkbox>
                    <Checkbox value="option3" size="sm">
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>Small Checkbox</CheckboxLabel>
                    </Checkbox>
                    <Checkbox value="option4" size="lg">
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>Large Checkbox</CheckboxLabel>
                    </Checkbox>
                  </VStack>
                </CheckboxGroup>
              </VStack>

              <Divider className="bg-border-100" />

              {/* Radio */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Radio
                </Text>
                <RadioGroup value="radio1">
                  <VStack space="md">
                    <Radio value="radio1" size="md">
                      <RadioIndicator>
                        <RadioIcon as={CircleIcon} />
                      </RadioIndicator>
                      <RadioLabel>Radio Option 1 (selected)</RadioLabel>
                    </Radio>
                    <Radio value="radio2" size="md">
                      <RadioIndicator>
                        <RadioIcon as={CircleIcon} />
                      </RadioIndicator>
                      <RadioLabel>Radio Option 2</RadioLabel>
                    </Radio>
                    <Radio value="radio3" size="sm">
                      <RadioIndicator>
                        <RadioIcon as={CircleIcon} />
                      </RadioIndicator>
                      <RadioLabel>Small Radio</RadioLabel>
                    </Radio>
                    <Radio value="radio4" size="lg">
                      <RadioIndicator>
                        <RadioIcon as={CircleIcon} />
                      </RadioIndicator>
                      <RadioLabel>Large Radio</RadioLabel>
                    </Radio>
                  </VStack>
                </RadioGroup>
              </VStack>
            </VStack>
          </Section>

          {/* ══════════════════════════════════════
           Section 9 — Textarea
           ══════════════════════════════════════ */}
          <Section title="Textarea">
            <VStack space="md">
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Default Textarea
                </Text>
                <Textarea size="md">
                  <TextareaInput placeholder="Write your message here..." />
                </Textarea>
              </VStack>
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Large Textarea
                </Text>
                <Textarea size="lg">
                  <TextareaInput placeholder="Larger textarea for longer content" />
                </Textarea>
              </VStack>
            </VStack>
          </Section>

          {/* ══════════════════════════════════════
           Section 10 — Progress & Spinner
           ══════════════════════════════════════ */}
          <Section title="Progress & Spinner">
            <VStack space="lg">
              {/* Progress */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Progress Bar
                </Text>
                <VStack space="md">
                  <VStack space="xs">
                    <Text size="xs" className="text-typography-500">25%</Text>
                    <Progress value={25} size="sm">
                      <ProgressFilledTrack />
                    </Progress>
                  </VStack>
                  <VStack space="xs">
                    <Text size="xs" className="text-typography-500">50%</Text>
                    <Progress value={50} size="md">
                      <ProgressFilledTrack />
                    </Progress>
                  </VStack>
                  <VStack space="xs">
                    <Text size="xs" className="text-typography-500">75%</Text>
                    <Progress value={75} size="lg">
                      <ProgressFilledTrack />
                    </Progress>
                  </VStack>
                </VStack>
              </VStack>

              <Divider className="bg-border-100" />

              {/* Spinner */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Spinner
                </Text>
                <HStack space="lg" className="items-center">
                  <VStack className="items-center" space="xs">
                    <Spinner size="small" />
                    <Text size="xs" className="text-typography-500">Small</Text>
                  </VStack>
                  <VStack className="items-center" space="xs">
                    <Spinner size="large" />
                    <Text size="xs" className="text-typography-500">Large</Text>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
          </Section>

          {/* ══════════════════════════════════════
           Section 11 — Avatar
           ══════════════════════════════════════ */}
          <Section title="Avatar">
            <VStack space="md">
              <Text size="sm" className="text-typography-700 font-semibold">
                Avatar Sizes & Fallback Text
              </Text>
              <HStack space="md" className="items-center">
                <VStack className="items-center" space="xs">
                  <Avatar size="xs">
                    <AvatarFallbackText>JD</AvatarFallbackText>
                  </Avatar>
                  <Text size="xs" className="text-typography-500">XS</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Avatar size="sm">
                    <AvatarFallbackText>AB</AvatarFallbackText>
                  </Avatar>
                  <Text size="xs" className="text-typography-500">SM</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Avatar size="md">
                    <AvatarFallbackText>YA</AvatarFallbackText>
                  </Avatar>
                  <Text size="xs" className="text-typography-500">MD</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Avatar size="lg">
                    <AvatarFallbackText>CD</AvatarFallbackText>
                  </Avatar>
                  <Text size="xs" className="text-typography-500">LG</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Avatar size="xl">
                    <AvatarFallbackText>EF</AvatarFallbackText>
                  </Avatar>
                  <Text size="xs" className="text-typography-500">XL</Text>
                </VStack>
              </HStack>

              <Divider className="bg-border-100" />

              <Text size="sm" className="text-typography-700 font-semibold">
                Avatar with Badge
              </Text>
              <HStack space="md" className="items-center">
                <Avatar size="md">
                  <AvatarFallbackText>ON</AvatarFallbackText>
                  <AvatarBadge />
                </Avatar>
                <Avatar size="lg">
                  <AvatarFallbackText>AW</AvatarFallbackText>
                  <AvatarBadge />
                </Avatar>
              </HStack>
            </VStack>
          </Section>

          {/* ══════════════════════════════════════
           Section 12 — Icons
           ══════════════════════════════════════ */}
          <Section title="Icons">
            <VStack space="md">
              <Text size="sm" className="text-typography-700 font-semibold">
                Icon Sizes
              </Text>
              <HStack space="lg" className="items-center">
                <VStack className="items-center" space="xs">
                  <Icon as={SearchIcon} size="xs" className="text-typography-700" />
                  <Text size="xs" className="text-typography-500">XS</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Icon as={SearchIcon} size="sm" className="text-typography-700" />
                  <Text size="xs" className="text-typography-500">SM</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Icon as={SearchIcon} size="md" className="text-typography-700" />
                  <Text size="xs" className="text-typography-500">MD</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Icon as={SearchIcon} size="lg" className="text-typography-700" />
                  <Text size="xs" className="text-typography-500">LG</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Icon as={SearchIcon} size="xl" className="text-typography-700" />
                  <Text size="xs" className="text-typography-500">XL</Text>
                </VStack>
              </HStack>

              <Divider className="bg-border-100" />

              <Text size="sm" className="text-typography-700 font-semibold">
                Icon Gallery
              </Text>
              <HStack space="md" className="flex-wrap gap-y-3">
                <VStack className="items-center" space="xs">
                  <Icon as={SearchIcon} size="lg" className="text-typography-700" />
                  <Text size="xs" className="text-typography-500">Search</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Icon as={BellIcon} size="lg" className="text-typography-700" />
                  <Text size="xs" className="text-typography-500">Bell</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Icon as={SettingsIcon} size="lg" className="text-typography-700" />
                  <Text size="xs" className="text-typography-500">Settings</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Icon as={MailIcon} size="lg" className="text-typography-700" />
                  <Text size="xs" className="text-typography-500">Mail</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Icon as={StarIcon} size="lg" className="text-typography-700" />
                  <Text size="xs" className="text-typography-500">Star</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Icon as={InfoIcon} size="lg" className="text-typography-700" />
                  <Text size="xs" className="text-typography-500">Info</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Icon as={EditIcon} size="lg" className="text-typography-700" />
                  <Text size="xs" className="text-typography-500">Edit</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Icon as={SunIcon} size="lg" className="text-typography-700" />
                  <Text size="xs" className="text-typography-500">Sun</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Icon as={MoonIcon} size="lg" className="text-typography-700" />
                  <Text size="xs" className="text-typography-500">Moon</Text>
                </VStack>
                <VStack className="items-center" space="xs">
                  <Icon as={CheckIcon} size="lg" className="text-success-600" />
                  <Text size="xs" className="text-typography-500">Check</Text>
                </VStack>
              </HStack>

              <Divider className="bg-border-100" />

              <Text size="sm" className="text-typography-700 font-semibold">
                Themed Icon Colors
              </Text>
              <HStack space="md" className="items-center">
                <Icon as={StarIcon} size="lg" className="text-primary-500" />
                <Icon as={StarIcon} size="lg" className="text-secondary-500" />
                <Icon as={StarIcon} size="lg" className="text-tertiary-500" />
                <Icon as={StarIcon} size="lg" className="text-error-500" />
                <Icon as={StarIcon} size="lg" className="text-success-500" />
                <Icon as={StarIcon} size="lg" className="text-warning-500" />
                <Icon as={StarIcon} size="lg" className="text-info-500" />
              </HStack>
            </VStack>
          </Section>

          {/* ══════════════════════════════════════
           Section 12b — Checkpoint Exam Icon Set
           Matches Figma Design System → Page 6 "Tabler Icons"
           ══════════════════════════════════════ */}
          <Section title="Checkpoint Exam Icon Set">
            <VStack space="lg">
              <Text size="sm" className="text-typography-500">
                Domain-specific icons from the Checkpoint V2.0 Figma design.
                Each icon shown in default, primary, and semantic color states.
              </Text>

              {/* Icon Grid — Default State */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Default (typography-900)
                </Text>
                <HStack space="lg" className="flex-wrap gap-y-3">
                  {[
                    { icon: ScenarioIcon, label: "Scenario" },
                    { icon: DescIcon, label: "Desc" },
                    { icon: HintIcon, label: "Hint" },
                    { icon: CalcIcon, label: "Calc" },
                    { icon: RulerIcon, label: "Ruler" },
                    { icon: ProtractorIcon, label: "Protractor" },
                    { icon: MediaIcon, label: "Media" },
                    { icon: ResetIcon, label: "Reset" },
                    { icon: ReviewIcon, label: "Review" },
                  ].map(({ icon, label }) => (
                    <VStack key={label} className="items-center" space="xs">
                      <Icon as={icon} size="lg" className="text-typography-900" />
                      <Text size="xs" className="text-typography-500">
                        {label}
                      </Text>
                    </VStack>
                  ))}
                </HStack>
              </VStack>

              <Divider className="bg-border-100" />

              {/* Icon Grid — Primary (Active) State */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Active (primary-500)
                </Text>
                <HStack space="lg" className="flex-wrap gap-y-3">
                  {[
                    { icon: ScenarioIcon, label: "Scenario" },
                    { icon: DescIcon, label: "Desc" },
                    { icon: HintIcon, label: "Hint" },
                    { icon: CalcIcon, label: "Calc" },
                    { icon: RulerIcon, label: "Ruler" },
                    { icon: ProtractorIcon, label: "Protractor" },
                    { icon: MediaIcon, label: "Media" },
                    { icon: ResetIcon, label: "Reset" },
                    { icon: ReviewIcon, label: "Review" },
                  ].map(({ icon, label }) => (
                    <VStack key={label} className="items-center" space="xs">
                      <Icon as={icon} size="lg" className="text-primary-500" />
                      <Text size="xs" className="text-primary-500 font-semibold">
                        {label}
                      </Text>
                    </VStack>
                  ))}
                </HStack>
              </VStack>

              <Divider className="bg-border-100" />

              {/* Icon State Matrix — Column Progression */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  State Progression (Figma column pattern)
                </Text>
                <Text size="xs" className="text-typography-500">
                  Shows each icon highlighting progressively, matching the Figma
                  diagonal state matrix.
                </Text>
                <Box className="bg-background-50 border border-border-200 rounded-lg p-4 overflow-x-auto">
                  <HStack space="md" className="flex-wrap gap-y-3">
                    {[
                      { icon: ScenarioIcon, label: "Scenario" },
                      { icon: DescIcon, label: "Desc" },
                      { icon: HintIcon, label: "Hint" },
                      { icon: CalcIcon, label: "Calc" },
                      { icon: RulerIcon, label: "Ruler" },
                      { icon: ProtractorIcon, label: "Protractor" },
                      { icon: MediaIcon, label: "Media" },
                      { icon: ResetIcon, label: "Reset" },
                      { icon: ReviewIcon, label: "Review" },
                    ].map(({ icon, label }, idx) => (
                      <VStack key={label} className="items-center" space="xs">
                        <Box
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${idx % 3 === 0
                              ? "bg-background-error"
                              : idx % 3 === 1
                                ? "bg-background-info"
                                : "bg-background-0 border border-border-200"
                            }`}
                        >
                          <Icon
                            as={icon}
                            size="lg"
                            className={
                              idx % 3 === 0
                                ? "text-primary-500"
                                : idx % 3 === 1
                                  ? "text-info-600"
                                  : "text-typography-700"
                            }
                          />
                        </Box>
                        <Text
                          size="xs"
                          className={
                            idx % 3 === 0
                              ? "text-primary-500 font-semibold"
                              : "text-typography-500"
                          }
                        >
                          {label}
                        </Text>
                      </VStack>
                    ))}
                  </HStack>
                </Box>
              </VStack>
            </VStack>
          </Section>

          {/* ══════════════════════════════════════
           Section 13 — Figma Button Variants
           Matches the Checkpoint V2.0 Figma Design System → 03 · BUTTONS
           ══════════════════════════════════════ */}
          <Section title="Figma Design System — Buttons">
            <VStack space="lg">
              <Text size="sm" className="text-typography-500">
                These button variants map 1:1 to the Checkpoint V2.0 Figma Design
                System &quot;03 · BUTTONS, CHIPS &amp; RADII&quot; section.
              </Text>
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Action Buttons
                </Text>
                <HStack space="sm" className="flex-wrap gap-y-2 items-center">
                  <Button action="primary" variant="solid" size="md">
                    <ButtonText>Primary Action</ButtonText>
                  </Button>
                  <Button action="secondary" variant="outline" size="md">
                    <ButtonText>Secondary</ButtonText>
                  </Button>
                  <Button action="positive" variant="solid" size="md">
                    <ButtonText>Confirm</ButtonText>
                  </Button>
                  <Button action="negative" variant="solid" size="md">
                    <ButtonText>Cancel</ButtonText>
                  </Button>
                  <Button action="primary" variant="solid" size="md" isDisabled>
                    <ButtonText>Disabled</ButtonText>
                  </Button>
                </HStack>
              </VStack>

              <Divider className="bg-border-100" />

              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Size Comparison
                </Text>
                <HStack space="sm" className="items-center flex-wrap gap-y-2">
                  <Button action="primary" variant="solid" size="xs">
                    <ButtonText>XS Submit</ButtonText>
                  </Button>
                  <Button action="primary" variant="solid" size="sm">
                    <ButtonText>SM Submit</ButtonText>
                  </Button>
                  <Button action="primary" variant="solid" size="md">
                    <ButtonText>MD Submit Exam</ButtonText>
                  </Button>
                  <Button action="primary" variant="solid" size="lg">
                    <ButtonText>LG Submit Exam</ButtonText>
                  </Button>
                </HStack>
              </VStack>

              <Divider className="bg-border-100" />

              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Outline &amp; Link Variants
                </Text>
                <HStack space="sm" className="flex-wrap gap-y-2 items-center">
                  <Button action="primary" variant="outline" size="md">
                    <ButtonText>Mark for Review</ButtonText>
                  </Button>
                  <Button action="secondary" variant="outline" size="md">
                    <ButtonText>Previous</ButtonText>
                  </Button>
                  <Button action="primary" variant="link" size="md">
                    <ButtonText>Skip Question</ButtonText>
                  </Button>
                  <Button action="negative" variant="outline" size="md">
                    <ButtonText>Clear Answer</ButtonText>
                  </Button>
                </HStack>
              </VStack>
            </VStack>
          </Section>

          {/* ══════════════════════════════════════
           Section 14 — Figma Chips & Status Badges
           Matches the Checkpoint V2.0 Figma Design System → CHIPS & BADGES
           ══════════════════════════════════════ */}
          <Section title="Figma Design System — Chips & Status Badges">
            <VStack space="lg">
              <Text size="sm" className="text-typography-500">
                Badge patterns from the Figma design system, showing question
                status indicators, timer displays, and section references.
              </Text>

              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Question Status Chips
                </Text>
                <HStack space="sm" className="flex-wrap gap-y-2 items-center">
                  <Badge action="success" variant="solid">
                    <BadgeText>DONE</BadgeText>
                  </Badge>
                  <Badge action="warning" variant="solid">
                    <BadgeText>FLAGGED</BadgeText>
                  </Badge>
                  <Badge action="muted" variant="solid">
                    <BadgeText>42:17</BadgeText>
                  </Badge>
                  <Badge action="info" variant="outline">
                    <BadgeText>§A 08-42</BadgeText>
                  </Badge>
                  <Badge action="error" variant="outline">
                    <BadgeText>LOADING NEXT SECTION</BadgeText>
                  </Badge>
                </HStack>
              </VStack>

              <Divider className="bg-border-100" />

              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Question Panel Status Dots
                </Text>
                <HStack space="lg" className="items-center">
                  <HStack space="xs" className="items-center">
                    <Box className="w-3 h-3 rounded-full bg-success-500" />
                    <Text size="sm" className="text-typography-700">Done</Text>
                  </HStack>
                  <HStack space="xs" className="items-center">
                    <Box className="w-3 h-3 rounded-full bg-warning-500" />
                    <Text size="sm" className="text-typography-700">Flagged</Text>
                  </HStack>
                  <HStack space="xs" className="items-center">
                    <Box className="w-3 h-3 rounded-full bg-background-300" />
                    <Text size="sm" className="text-typography-700">Blank</Text>
                  </HStack>
                  <HStack space="xs" className="items-center">
                    <Box className="w-3 h-3 rounded-full bg-info-500" />
                    <Text size="sm" className="text-typography-700">Active</Text>
                  </HStack>
                </HStack>
              </VStack>

              <Divider className="bg-border-100" />

              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Metadata Bar Pattern (from God Question Card)
                </Text>
                <Box className="bg-background-0 border border-border-200 rounded-lg p-3">
                  <HStack space="md" className="items-center">
                    <Badge action="info" variant="solid">
                      <BadgeText>Q 2.2</BadgeText>
                    </Badge>
                    <Text size="sm" className="text-typography-600">
                      4 marks
                    </Text>
                    <HStack space="xs" className="items-center">
                      <Icon
                        as={InfoIcon}
                        size="xs"
                        className="text-typography-500"
                      />
                      <Text size="sm" className="text-typography-600">
                        02:45
                      </Text>
                    </HStack>
                    <Badge action="muted" variant="outline">
                      <BadgeText>Attempt 1/3</BadgeText>
                    </Badge>
                  </HStack>
                </Box>
              </VStack>
            </VStack>
          </Section>

          {/* ══════════════════════════════════════
           Section 15 — Composite Cards
           Shows how to compose multiple components into realistic layouts
           ══════════════════════════════════════ */}
          <Section title="Composite Cards">
            <VStack space="lg">
              <Text size="sm" className="text-typography-500">
                Demonstrates how to compose base UI elements into realistic
                card layouts. Generic card + exam-specific God Question Card pattern.
              </Text>

              {/* Generic Card */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Generic Content Card
                </Text>
                <Card className="bg-background-0 border border-border-200 rounded-xl overflow-hidden">
                  {/* Card Header */}
                  <Box className="bg-background-950 p-4">
                    <HStack className="items-center justify-between">
                      <HStack space="sm" className="items-center">
                        <Avatar size="sm">
                          <AvatarFallbackText>CP</AvatarFallbackText>
                        </Avatar>
                        <VStack>
                          <Text
                            size="sm"
                            className="text-typography-0 font-semibold"
                          >
                            Checkpoint Platform
                          </Text>
                          <Text size="xs" className="text-typography-400">
                            Assessment Management
                          </Text>
                        </VStack>
                      </HStack>
                      <Badge action="success" variant="solid">
                        <BadgeText>Active</BadgeText>
                      </Badge>
                    </HStack>
                  </Box>
                  {/* Card Body */}
                  <VStack space="md" className="p-4">
                    <Heading size="md" className="text-typography-900">
                      Section Performance Overview
                    </Heading>
                    <Text size="sm" className="text-typography-600">
                      This card demonstrates the composition of Avatar, Badge,
                      Heading, Text, Divider, Progress, and Button components
                      using only semantic design tokens.
                    </Text>
                    <VStack space="xs">
                      <HStack className="justify-between">
                        <Text size="xs" className="text-typography-500">
                          Completion
                        </Text>
                        <Text size="xs" className="text-typography-700 font-semibold">
                          72%
                        </Text>
                      </HStack>
                      <Progress value={72} size="sm">
                        <ProgressFilledTrack />
                      </Progress>
                    </VStack>
                    <Divider className="bg-border-200" />
                    <HStack space="sm" className="justify-end">
                      <Button action="secondary" variant="outline" size="sm">
                        <ButtonText>Details</ButtonText>
                      </Button>
                      <Button action="primary" variant="solid" size="sm">
                        <ButtonText>Continue</ButtonText>
                      </Button>
                    </HStack>
                  </VStack>
                </Card>
              </VStack>

              <Divider className="bg-border-100" />

              {/* Exam-Specific: God Question Card Pattern */}
              <VStack space="sm">
                <Text size="sm" className="text-typography-700 font-semibold">
                  Exam Question Card (God Question Card Pattern)
                </Text>
                <Card className="bg-background-0 border border-border-200 rounded-xl overflow-hidden">
                  {/* Metadata Bar */}
                  <Box className="bg-background-50 border-b border-border-200 px-4 py-3">
                    <HStack className="items-center justify-between flex-wrap gap-y-2">
                      <HStack space="md" className="items-center">
                        <Badge action="info" variant="solid">
                          <BadgeText>Q 2.2</BadgeText>
                        </Badge>
                        <Text
                          size="sm"
                          className="text-primary-600 font-semibold"
                        >
                          4 marks
                        </Text>
                        <HStack space="xs" className="items-center">
                          <Icon
                            as={InfoIcon}
                            size="xs"
                            className="text-typography-500"
                          />
                          <Text size="sm" className="text-typography-600">
                            02:45
                          </Text>
                        </HStack>
                        <Badge action="muted" variant="outline">
                          <BadgeText>Attempt 1/3</BadgeText>
                        </Badge>
                      </HStack>
                      <Button action="secondary" variant="outline" size="xs">
                        <ButtonText>Mark for Review</ButtonText>
                      </Button>
                    </HStack>
                  </Box>

                  {/* Question Body */}
                  <VStack space="md" className="p-5">
                    <Heading size="md" className="text-typography-900">
                      Solubility of Sodium Chloride
                    </Heading>
                    <Box className="bg-background-50 border-l-4 border-primary-500 p-3 rounded-sm">
                      <Text size="sm" className="text-typography-700">
                        A chemistry student measured the solubility of sodium
                        chloride (NaCl) in water at various temperatures. Based on
                        the data table provided, which statement is correct?
                      </Text>
                    </Box>

                    {/* Answer Options — Radio buttons */}
                    <VStack space="xs">
                      <Text
                        size="sm"
                        className="text-typography-700 font-semibold"
                      >
                        Select the correct answer:
                      </Text>
                      <RadioGroup value="optB">
                        <VStack space="sm">
                          <Box className="border border-border-200 rounded-lg p-3">
                            <Radio value="optA" size="md">
                              <RadioIndicator>
                                <RadioIcon as={CircleIcon} />
                              </RadioIndicator>
                              <RadioLabel>
                                NaCl is insoluble at room temperature
                              </RadioLabel>
                            </Radio>
                          </Box>
                          <Box className="border border-primary-300 bg-background-info rounded-lg p-3">
                            <Radio value="optB" size="md">
                              <RadioIndicator>
                                <RadioIcon as={CircleIcon} />
                              </RadioIndicator>
                              <RadioLabel>
                                Solubility increases with temperature
                              </RadioLabel>
                            </Radio>
                          </Box>
                          <Box className="border border-border-200 rounded-lg p-3">
                            <Radio value="optC" size="md">
                              <RadioIndicator>
                                <RadioIcon as={CircleIcon} />
                              </RadioIndicator>
                              <RadioLabel>
                                NaCl reaches saturation at 25°C
                              </RadioLabel>
                            </Radio>
                          </Box>
                          <Box className="border border-border-200 rounded-lg p-3">
                            <Radio value="optD" size="md">
                              <RadioIndicator>
                                <RadioIcon as={CircleIcon} />
                              </RadioIndicator>
                              <RadioLabel>
                                Temperature has no effect on solubility
                              </RadioLabel>
                            </Radio>
                          </Box>
                        </VStack>
                      </RadioGroup>
                    </VStack>
                  </VStack>

                  {/* Card Footer */}
                  <Box className="bg-background-50 border-t border-border-200 px-4 py-3">
                    <HStack className="items-center justify-between">
                      <Button action="secondary" variant="outline" size="sm">
                        <ButtonText>← Previous</ButtonText>
                      </Button>
                      <HStack space="sm">
                        <Button action="negative" variant="outline" size="sm">
                          <ButtonText>Clear</ButtonText>
                        </Button>
                        <Button action="primary" variant="solid" size="sm">
                          <ButtonText>Next →</ButtonText>
                        </Button>
                      </HStack>
                    </HStack>
                  </Box>
                </Card>
              </VStack>
            </VStack>
          </Section>
        </VStack>
      </Box>
    </ScrollView>
  );
}
