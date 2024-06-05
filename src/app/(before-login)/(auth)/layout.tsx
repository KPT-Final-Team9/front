export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-background">
      <div className="h-[1061px] max-h-screen w-[928px] rounded-base bg-white">{children}</div>
    </section>
  );
}
