import { Separator } from "@/components/ui/separator";
import { Reveal } from "./Reveal";

interface Item {
  name: string;
  price: number;
}

export function MenuSection({
  title,
  items,
}: {
  title?: string;
  items: Item[];
}) {
  return (
    <Reveal>
      <div className="space-y-4">
      {title && (
        <>
          <h3 className="text-xl font-semibold tracking-tight text-cafe-text mb-4">
            {title}
          </h3>
          <div className="h-px bg-cafe-text/8 mb-6" />
        </>
      )}

      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between text-base py-2">
              <span className="text-cafe-text font-semibold">{item.name}</span>
              <span className="text-cafe-text/40 ml-4">₹{item.price}</span>
            </div>
            {index < items.length - 1 && (
              <Separator className="opacity-40" />
            )}
          </div>
        ))}
      </div>
    </div>
    </Reveal>
  );
}
