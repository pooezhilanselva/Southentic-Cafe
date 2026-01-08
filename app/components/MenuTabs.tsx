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
        <div className="w-full overflow-x-auto scrollbar-hide px-2">
          <div className="flex justify-start sm:justify-center py-2">
            <TabsList className="inline-flex gap-3 bg-transparent p-0 h-auto">
              <TabsTrigger
                value="breakfast"
                className="group relative gap-2 text-sm flex items-center justify-center px-4 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-cafe-text/10 text-cafe-text hover:bg-white/80 data-[state=active]:bg-cafe-accent data-[state=active]:text-white data-[state=active]:scale-105 data-[state=active]:shadow-[0_2px_12px_rgba(139,69,19,0.2)] data-[state=active]:border-cafe-accent transition-all duration-200 ease-out active:scale-100"
              >
                <Sunrise size={16} className="transition-transform duration-150 group-hover:-translate-y-px" />
                <span>Breakfast</span>
              </TabsTrigger>
              <TabsTrigger
                value="chinese"
                className="group relative gap-2 text-sm flex items-center justify-center px-4 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-cafe-text/10 text-cafe-text hover:bg-white/80 data-[state=active]:bg-cafe-accent data-[state=active]:text-white data-[state=active]:scale-105 data-[state=active]:shadow-[0_2px_12px_rgba(139,69,19,0.2)] data-[state=active]:border-cafe-accent transition-all duration-200 ease-out active:scale-100"
              >
                <Flame size={16} className="transition-transform duration-150 group-hover:-translate-y-px" />
                <span>Chinese</span>
              </TabsTrigger>
              <TabsTrigger
                value="momos"
                className="group relative gap-2 text-sm flex items-center justify-center px-4 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-cafe-text/10 text-cafe-text hover:bg-white/80 data-[state=active]:bg-cafe-accent data-[state=active]:text-white data-[state=active]:scale-105 data-[state=active]:shadow-[0_2px_12px_rgba(139,69,19,0.2)] data-[state=active]:border-cafe-accent transition-all duration-200 ease-out active:scale-100"
              >
                <Image src="/momo.png" width={16} height={16} alt="Momos" className="w-4 h-4 transition-transform duration-150 group-hover:-translate-y-px" />
                <span>Momos</span>
              </TabsTrigger>
              <TabsTrigger
                value="varietyDosa"
                className="group relative gap-2 text-sm flex items-center justify-center px-4 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-cafe-text/10 text-cafe-text hover:bg-white/80 data-[state=active]:bg-cafe-accent data-[state=active]:text-white data-[state=active]:scale-105 data-[state=active]:shadow-[0_2px_12px_rgba(139,69,19,0.2)] data-[state=active]:border-cafe-accent transition-all duration-200 ease-out active:scale-100"
              >
                <ChefHat size={16} className="transition-transform duration-150 group-hover:-translate-y-px" />
                <span>99-Variety Dosa</span>
              </TabsTrigger>
            </TabsList>
          </div>
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
