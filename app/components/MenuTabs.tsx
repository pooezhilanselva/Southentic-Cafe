"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sunrise, Flame, Coffee, ChefHat } from "lucide-react";
import Image from "next/image";
import { menu } from "@/app/data/menu";
import { MenuSection } from "./MenuSection";
import { Reveal } from "./Reveal";

export default function MenuTabs() {
  return (
    <section id="menu" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-24 bg-cafe-bg overflow-hidden">
      <Reveal>
        <div className="mb-12 text-center space-y-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cafe-text flex items-center justify-center gap-2 sm:gap-3">
            <Coffee className="text-cafe-accent" size={40} />
            Our Menu
          </h2>
          <p className="text-base sm:text-xl text-cafe-text/70 px-4">
            Freshly prepared. Authentically South Indian.
          </p>
        </div>
      </Reveal>

      <Tabs defaultValue="breakfast" className="space-y-10">
        <div className="flex justify-center overflow-x-auto pb-2">
          <TabsList className="inline-flex gap-1 bg-white p-1 h-auto w-auto min-w-min">
          <TabsTrigger
            value="breakfast"
            className="data-[state=active]:bg-cafe-accent data-[state=active]:text-white gap-1 sm:gap-2 text-xs sm:text-sm whitespace-nowrap px-3 sm:px-4"
          >
            <Sunrise size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Breakfast</span>
            <span className="sm:hidden">Break.</span>
          </TabsTrigger>
          <TabsTrigger
            value="chinese"
            className="data-[state=active]:bg-cafe-accent data-[state=active]:text-white gap-1 sm:gap-2 text-xs sm:text-sm whitespace-nowrap px-3 sm:px-4"
          >
            <Flame size={14} className="sm:w-4 sm:h-4" />
            Chinese
          </TabsTrigger>
          <TabsTrigger
            value="momos"
            className="data-[state=active]:bg-cafe-accent data-[state=active]:text-white gap-1 sm:gap-2 text-xs sm:text-sm whitespace-nowrap px-3 sm:px-4"
          >
            <Image src="/momo.png" width={14} height={14} alt="Momos" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Momos
          </TabsTrigger>
          <TabsTrigger
            value="varietyDosa"
            className="data-[state=active]:bg-cafe-accent data-[state=active]:text-white gap-1 sm:gap-2 text-xs sm:text-sm whitespace-nowrap px-3 sm:px-4"
          >
            <ChefHat size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">99-Variety Dosa</span>
            <span className="sm:hidden">Dosa</span>
          </TabsTrigger>
        </TabsList>
        </div>

        {/* Breakfast */}
        <TabsContent value="breakfast" className="space-y-6 px-2 sm:px-0">
          <p className="text-sm text-cafe-text/60 text-center">
            {menu.breakfast.time}
          </p>
          <MenuSection items={menu.breakfast.items} />
        </TabsContent>

        {/* Chinese */}
        <TabsContent value="chinese" className="space-y-10 px-2 sm:px-0">
          <p className="text-sm text-cafe-text/60 text-center">
            {menu.chinese.time}
          </p>

          {Object.entries(menu.chinese.sections).map(
            ([sectionTitle, items]) => (
              <MenuSection
                key={sectionTitle}
                title={sectionTitle}
                items={items}
              />
            )
          )}
        </TabsContent>

        {/* Momos */}
        <TabsContent value="momos" className="space-y-6 px-2 sm:px-0">
          <MenuSection items={menu.momos.items} />
          <p className="text-xs text-cafe-text/60 text-center">
            {menu.momos.note}
          </p>
        </TabsContent>

        {/* 99-Variety Dosa */}
        <TabsContent value="varietyDosa" className="space-y-6 px-2 sm:px-0">
          <MenuSection items={menu.varietyDosa.items} />
          <p className="text-xs text-cafe-text/60 text-center">
            {menu.varietyDosa.note}
          </p>
        </TabsContent>
      </Tabs>
    </section>
  );
}
