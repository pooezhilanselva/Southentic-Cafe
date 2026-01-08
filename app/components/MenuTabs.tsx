"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sunrise, Flame, Coffee, ChefHat } from "lucide-react";
import Image from "next/image";
import { menu } from "@/app/data/menu";
import { MenuSection } from "./MenuSection";
import { Reveal } from "./Reveal";

export default function MenuTabs() {
  return (
    <section id="menu" className="max-w-4xl mx-auto px-6 py-24 bg-cafe-bg">
      <Reveal>
        <div className="mb-12 text-center space-y-2">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-cafe-text flex items-center justify-center gap-3">
            <Coffee className="text-cafe-accent" size={48} />
            Our Menu
          </h2>
          <p className="text-xl text-cafe-text/70">
            Freshly prepared. Authentically South Indian.
          </p>
        </div>
      </Reveal>

      <Tabs defaultValue="breakfast" className="space-y-10">
        <div className="flex justify-center">
          <TabsList className="inline-flex gap-1 bg-white p-1 h-auto w-auto">
          <TabsTrigger
            value="breakfast"
            className="data-[state=active]:bg-cafe-accent data-[state=active]:text-white gap-2"
          >
            <Sunrise size={16} />
            Breakfast
          </TabsTrigger>
          <TabsTrigger
            value="chinese"
            className="data-[state=active]:bg-cafe-accent data-[state=active]:text-white gap-2"
          >
            <Flame size={16} />
            Chinese
          </TabsTrigger>
          <TabsTrigger
            value="momos"
            className="data-[state=active]:bg-cafe-accent data-[state=active]:text-white gap-2"
          >
            <Image src="/momo.png" width={16} height={16} alt="Momos" className="w-4 h-4" />
            Momos
          </TabsTrigger>
          <TabsTrigger
            value="varietyDosa"
            className="data-[state=active]:bg-cafe-accent data-[state=active]:text-white gap-2"
          >
            <ChefHat size={16} />
            99-Variety Dosa
          </TabsTrigger>
        </TabsList>
        </div>

        {/* Breakfast */}
        <TabsContent value="breakfast" className="space-y-6">
          <p className="text-sm text-cafe-text/60 text-center">
            {menu.breakfast.time}
          </p>
          <MenuSection items={menu.breakfast.items} />
        </TabsContent>

        {/* Chinese */}
        <TabsContent value="chinese" className="space-y-10">
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
        <TabsContent value="momos" className="space-y-6">
          <MenuSection items={menu.momos.items} />
          <p className="text-xs text-cafe-text/60 text-center">
            {menu.momos.note}
          </p>
        </TabsContent>

        {/* 99-Variety Dosa */}
        <TabsContent value="varietyDosa" className="space-y-6">
          <MenuSection items={menu.varietyDosa.items} />
          <p className="text-xs text-cafe-text/60 text-center">
            {menu.varietyDosa.note}
          </p>
        </TabsContent>
      </Tabs>
    </section>
  );
}
