import ClientOnly from "@/app/components/clientOnly";

export default function Home() {
  return (
    <ClientOnly>
      <div className="text-2xl text-rose-500">Hello Airbnb</div>;
    </ClientOnly>
  );
}
