import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { router } from "expo-router";
import { 
  Clock, 
  Lightbulb, 
  Calculator, 
  Image as ImageIcon, 
  RotateCcw, 
  FileText, 
  Bookmark, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Globe, 
  Languages, 
  Ruler, 
  Headphones, 
  HelpCircle,
  Sparkles
} from "lucide-react-native";

export default function GodCardShowcase() {
  const [selectedOption, setSelectedOption] = useState<string>("B");
  const [isReviewMarked, setIsReviewMarked] = useState<boolean>(true);
  const [eliminatedOptions, setEliminatedOptions] = useState<string[]>([]);
  const [activeTools, setActiveTools] = useState<string[]>(["scenario", "hint"]);

  const toggleTool = (tool: string) => {
    if (activeTools.includes(tool)) {
      setActiveTools(activeTools.filter((t) => t !== tool));
    } else {
      setActiveTools([...activeTools, tool]);
    }
  };

  const toggleEliminate = (option: string) => {
    if (eliminatedOptions.includes(option)) {
      setEliminatedOptions(eliminatedOptions.filter((o) => o !== option));
    } else {
      setEliminatedOptions([...eliminatedOptions, option]);
    }
  };

  const mcqOptions = [
    { key: "A", text: "SELECT category, SUM(price) FROM sales GROUP BY category HAVING SUM(price) > 10000;" },
    { key: "B", text: "SELECT category, SUM(amount) FROM sales GROUP BY category HAVING SUM(amount) > 10000;" },
    { key: "C", text: "SELECT category, SUM(amount) FROM sales WHERE SUM(amount) > 10000 GROUP BY category;" },
    { key: "D", text: "SELECT category, SUM(price) FROM sales WHERE price > 10000 GROUP BY category;" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background-50">
      {/* 1. Exam Header Bar (Post Phase 1 Specs) */}
      <HStack className="bg-secondary-600 px-4 py-3 justify-between items-center border-b border-border-300">
        <HStack space="md" className="items-center">
          <Box className="bg-primary-500 rounded p-1">
            <Text className="text-white font-bold text-xs">CP</Text>
          </Box>
          <VStack space="none">
            <Text className="text-white font-bold text-sm tracking-wide">Checkpoint</Text>
            <Text className="text-white text-[10px] opacity-70">SwiftAssess</Text>
          </VStack>
        </HStack>

        {/* Global Toolbar Cluster */}
        <HStack space="md" className="items-center hidden md:flex">
          <TouchableOpacity className="p-1.5 rounded bg-secondary-700/50">
            <Globe size={18} color="#C8CCD4" />
          </TouchableOpacity>
          <TouchableOpacity className="p-1.5 rounded bg-secondary-700/50">
            <Languages size={18} color="#C8CCD4" />
          </TouchableOpacity>
          <TouchableOpacity className="p-1.5 rounded bg-secondary-700/50">
            <Ruler size={18} color="#C8CCD4" />
          </TouchableOpacity>
          <TouchableOpacity className="p-1.5 rounded bg-secondary-700/50">
            <Headphones size={18} color="#C8CCD4" />
          </TouchableOpacity>
          <TouchableOpacity 
            className="p-1.5 rounded bg-secondary-700/50"
            onPress={() => setIsReviewMarked(!isReviewMarked)}
          >
            <Bookmark size={18} color={isReviewMarked ? "#BF2126" : "#C8CCD4"} fill={isReviewMarked ? "#BF2126" : "transparent"} />
          </TouchableOpacity>
        </HStack>

        {/* Header Right Stats */}
        <HStack space="lg" className="items-center">
          <HStack space="xs" className="bg-secondary-700/50 px-2 py-1 rounded items-center">
            <Clock size={14} color="#C8CCD4" />
            <Text className="text-white text-xs font-semibold">42:17</Text>
          </HStack>
          <Text className="text-white text-xs font-semibold">14 of 30</Text>
          <HStack space="xs" className="items-center">
            <TouchableOpacity className="p-1 rounded bg-secondary-700/50">
              <ChevronLeft size={16} color="#C8CCD4" />
            </TouchableOpacity>
            <TouchableOpacity className="p-1 rounded bg-secondary-700/50">
              <ChevronRight size={16} color="#C8CCD4" />
            </TouchableOpacity>
          </HStack>
          <Button className="bg-primary-500 py-1.5 px-3 rounded hover:bg-primary-600">
            <ButtonText className="text-white text-xs font-bold">Submit Exam</ButtonText>
          </Button>
        </HStack>
      </HStack>

      <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>
        {/* Back navigation */}
        <TouchableOpacity className="mb-4 flex-row items-center" onPress={() => router.replace("/")}>
          <ChevronLeft size={18} color="#BF2126" />
          <Text className="text-primary-500 font-semibold text-sm">Back to Showcase Menu</Text>
        </TouchableOpacity>

        {/* Main Content Layout (Responsive grid) */}
        <View className="flex-1 flex-col lg:flex-row gap-4">
          
          {/* A. Left Side: God Question Card */}
          <View className="flex-1 bg-background-0 rounded-lg border border-border-200 shadow-sm overflow-hidden">
            
            {/* Meta Header block */}
            <HStack className="justify-between items-center p-4 border-b border-border-200 bg-background-50/50">
              <HStack space="sm" className="items-center">
                <Text className="text-typography-900 font-bold text-lg">Question 14</Text>
                <Box className="bg-background-200 px-2 py-0.5 rounded">
                  <Text className="text-typography-600 text-xs font-semibold">3 marks</Text>
                </Box>
                <Text className="text-typography-500 text-sm">Multiple Choice</Text>
              </HStack>

              <HStack space="md" className="items-center">
                <HStack space="xs" className="items-center bg-primary-50 px-2.5 py-1 rounded-full">
                  <Clock size={12} color="#BF2126" />
                  <Text className="text-primary-600 text-xs font-semibold">02:45</Text>
                </HStack>
                <Text className="text-typography-500 text-xs">Attempts: <Text className="font-semibold text-typography-700">2 of 3</Text></Text>
              </HStack>
            </HStack>

            <VStack space="lg" className="p-4">
              
              {/* Media Block (Scenario Image) - Visible if tool active */}
              {activeTools.includes("media") && (
                <VStack space="xs" className="border border-border-200 rounded-lg overflow-hidden bg-background-50">
                  <Box className="h-44 justify-center items-center">
                    <ImageIcon size={36} color="#767670" />
                    <Text className="text-typography-600 text-xs mt-2 font-medium">Database Schema Diagram (sales_db)</Text>
                  </Box>
                  <HStack className="bg-background-100 p-2 justify-between items-center border-t border-border-200">
                    <Text className="text-typography-600 text-[10px]">Figure 1.2: Database relational layout schema</Text>
                    <HStack space="xs" className="items-center">
                      <Sparkles size={12} color="#767670" />
                      <Text className="text-typography-600 text-[10px] font-semibold">Click to Zoom</Text>
                    </HStack>
                  </HStack>
                </VStack>
              )}

              {/* Equation Block */}
              <Box className="bg-background-50 border border-border-200 p-3 rounded-lg items-center">
                <Text className="text-typography-900 font-mono text-sm tracking-wider">
                  SUM(amount) &gt; 10000  &nbsp;&rArr;&nbsp;  (price &times; quantity) &gt; 10000
                </Text>
              </Box>

              {/* Question Text */}
              <Text className="text-typography-900 text-sm leading-relaxed font-medium">
                Based on the database schema provided in the scenario image, which SQL query retrieves the total sales for each product category where the total sales exceed $10,000?
              </Text>

              {/* MCQ Options List */}
              <VStack space="md">
                {mcqOptions.map((opt) => {
                  const isSelected = selectedOption === opt.key;
                  const isEliminated = eliminatedOptions.includes(opt.key);
                  
                  return (
                    <HStack 
                      key={opt.key}
                      className={`border rounded-lg p-3 items-start justify-between ${
                        isSelected 
                          ? "bg-primary-50 border-primary-500" 
                          : isEliminated
                            ? "bg-background-50 border-border-200 opacity-40 border-dashed"
                            : "bg-background-0 border-border-200 hover:bg-background-50"
                      }`}
                    >
                      <TouchableOpacity 
                        className="flex-1 flex-row items-start"
                        disabled={isEliminated}
                        onPress={() => setSelectedOption(opt.key)}
                      >
                        {/* Circle Label */}
                        <Box className={`w-6 h-6 rounded-full justify-center items-center mr-3 ${
                          isSelected 
                            ? "bg-primary-500" 
                            : "bg-background-200"
                        }`}>
                          <Text className={`text-xs font-bold ${
                            isSelected ? "text-white" : "text-typography-700"
                          }`}>{opt.key}</Text>
                        </Box>
                        
                        {/* Option Text */}
                        <Text className={`flex-1 text-xs font-mono leading-relaxed ${
                          isSelected 
                            ? "text-primary-900 font-bold" 
                            : isEliminated
                              ? "text-typography-500 line-through"
                              : "text-typography-800"
                        }`}>
                          {opt.text}
                        </Text>
                      </TouchableOpacity>

                      {/* Right Action Icons (Eliminate and Selection mark) */}
                      <HStack space="sm" className="items-center ml-2">
                        <TouchableOpacity 
                          onPress={() => toggleEliminate(opt.key)}
                          className="p-1 rounded hover:bg-background-200"
                        >
                          <Text className="text-typography-500 font-bold text-xs">
                            {isEliminated ? "Restore" : "✕"}
                          </Text>
                        </TouchableOpacity>
                        
                        {isSelected && (
                          <Box className="bg-primary-500 rounded-full p-0.5">
                            <Check size={10} color="#FFFFFF" />
                          </Box>
                        )}
                      </HStack>
                    </HStack>
                  );
                })}
              </VStack>

            </VStack>

            {/* Footer row (Post Phase 1) */}
            <HStack className="border-t border-border-200 p-4 justify-between items-center bg-background-50/20">
              <HStack space="xs" className="items-center">
                <Box className="w-2 h-2 rounded-full bg-success-500" />
                <Text className="text-success-600 text-xs font-bold">Saved</Text>
              </HStack>

              <HStack space="md" className="items-center">
                <Button className="bg-background-200 px-4 py-2 rounded">
                  <ButtonText className="text-typography-700 text-xs font-bold">&larr; Prev</ButtonText>
                </Button>
                <Button className="bg-primary-500 px-4 py-2 rounded">
                  <ButtonText className="text-white text-xs font-bold">Next &rarr;</ButtonText>
                </Button>
              </HStack>
            </HStack>
          </View>

          {/* B. Right Side: Utility Tool Bar */}
          <VStack space="sm" className="w-full lg:w-16 bg-background-200 border border-border-200 rounded-lg p-2 justify-between items-center">
            <VStack space="sm" className="w-full items-center">
              
              <TouchableOpacity 
                className={`w-12 h-12 rounded-lg justify-center items-center ${
                  activeTools.includes("scenario") ? "bg-primary-500" : "bg-background-0 border border-border-200"
                }`}
                onPress={() => toggleTool("scenario")}
              >
                <FileText size={18} color={activeTools.includes("scenario") ? "#FFFFFF" : "#5A5A56"} />
              </TouchableOpacity>
              
              <TouchableOpacity 
                className={`w-12 h-12 rounded-lg justify-center items-center ${
                  activeTools.includes("hint") ? "bg-primary-500" : "bg-background-0 border border-border-200"
                }`}
                onPress={() => toggleTool("hint")}
              >
                <Lightbulb size={18} color={activeTools.includes("hint") ? "#FFFFFF" : "#5A5A56"} />
              </TouchableOpacity>
              
              <TouchableOpacity 
                className={`w-12 h-12 rounded-lg justify-center items-center ${
                  activeTools.includes("calc") ? "bg-primary-500" : "bg-background-0 border border-border-200"
                }`}
                onPress={() => toggleTool("calc")}
              >
                <Calculator size={18} color={activeTools.includes("calc") ? "#FFFFFF" : "#5A5A56"} />
              </TouchableOpacity>
              
              <TouchableOpacity 
                className={`w-12 h-12 rounded-lg justify-center items-center ${
                  activeTools.includes("media") ? "bg-primary-500" : "bg-background-0 border border-border-200"
                }`}
                onPress={() => toggleTool("media")}
              >
                <ImageIcon size={18} color={activeTools.includes("media") ? "#FFFFFF" : "#5A5A56"} />
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="w-12 h-12 rounded-lg justify-center items-center bg-background-0 border border-border-200"
                onPress={() => {
                  setSelectedOption("");
                  setEliminatedOptions([]);
                }}
              >
                <RotateCcw size={18} color="#5A5A56" />
              </TouchableOpacity>

            </VStack>

            <Divider className="my-2 bg-border-300 w-8 hidden lg:flex" />

            {/* Bottom Review Action */}
            <TouchableOpacity 
              className={`w-12 h-12 rounded-lg justify-center items-center ${
                isReviewMarked ? "bg-primary-500" : "bg-background-0 border border-border-200"
              }`}
              onPress={() => setIsReviewMarked(!isReviewMarked)}
            >
              <Bookmark size={18} color={isReviewMarked ? "#FFFFFF" : "#5A5A56"} fill={isReviewMarked ? "#FFFFFF" : "transparent"} />
            </TouchableOpacity>

          </VStack>

        </View>

        {/* C. Expandable Panel Descriptions (Demonstration of Tool Panel Contents) */}
        <VStack space="md" className="mt-4">
          {activeTools.includes("scenario") && (
            <Box className="bg-background-0 border border-border-200 rounded-lg p-4 shadow-sm">
              <Text className="text-typography-900 font-bold text-sm mb-2">Scenario Description</Text>
              <Text className="text-typography-600 text-xs leading-relaxed">
                You are tasked with querying a transactional database named `sales_db`. The database keeps records of sales orders in the `sales` table. The primary columns are `category` (representing product category), `amount` (total amount paid for the order), and `price` (unit price of the product).
              </Text>
            </Box>
          )}

          {activeTools.includes("hint") && (
            <Box className="bg-background-0 border border-border-200 rounded-lg p-4 shadow-sm">
              <Text className="text-primary-600 font-bold text-sm mb-2">Available Hint</Text>
              <Text className="text-typography-600 text-xs leading-relaxed">
                Remember that conditions based on aggregate values (like `SUM()`) must be filtered using the `HAVING` clause, not the `WHERE` clause. The `WHERE` clause filters individual records before aggregation takes place.
              </Text>
            </Box>
          )}

          {activeTools.includes("calc") && (
            <Box className="bg-background-0 border border-border-200 rounded-lg p-4 shadow-sm items-center">
              <Text className="text-typography-900 font-bold text-sm mb-2">On-Screen Calculator</Text>
              <Text className="text-typography-500 text-xs mb-3">Simple arithmetic calculator</Text>
              {/* Display mock calculator keypad */}
              <VStack space="sm" className="w-48 bg-background-50 p-2 rounded">
                <Box className="bg-background-0 border border-border-200 p-2 items-end mb-2 rounded">
                  <Text className="font-mono text-sm">10000 / 5 = 2000</Text>
                </Box>
                <HStack space="sm" className="justify-center">
                  {["7", "8", "9", "/"].map((char) => <Box key={char} className="w-8 h-8 bg-background-0 border border-border-200 rounded justify-center items-center"><Text className="text-xs font-bold">{char}</Text></Box>)}
                </HStack>
                <HStack space="sm" className="justify-center">
                  {["4", "5", "6", "*"].map((char) => <Box key={char} className="w-8 h-8 bg-background-0 border border-border-200 rounded justify-center items-center"><Text className="text-xs font-bold">{char}</Text></Box>)}
                </HStack>
                <HStack space="sm" className="justify-center">
                  {["1", "2", "3", "-"].map((char) => <Box key={char} className="w-8 h-8 bg-background-0 border border-border-200 rounded justify-center items-center"><Text className="text-xs font-bold">{char}</Text></Box>)}
                </HStack>
                <HStack space="sm" className="justify-center">
                  {["C", "0", "=", "+"].map((char) => <Box key={char} className="w-8 h-8 bg-background-0 border border-border-200 rounded justify-center items-center"><Text className="text-xs font-bold">{char}</Text></Box>)}
                </HStack>
              </VStack>
            </Box>
          )}
        </VStack>

      </ScrollView>
    </SafeAreaView>
  );
}
