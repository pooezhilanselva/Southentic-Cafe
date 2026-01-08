import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-cafe-bg">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-cafe-text mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-cafe-text mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-cafe-text/70 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Button
          size="lg"
          asChild
          className="bg-cafe-accent hover:bg-cafe-accent-dark text-white"
        >
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
