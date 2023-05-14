import ClientOnly from "@/app/components/clientOnly";
import Container from "@/app/components/container";

export default function Home() {
  return (
    <ClientOnly>
      <Container>
        <div className="text-2xl text-rose-500">Hello Airbnb</div>
      </Container>
    </ClientOnly>
  );
}
