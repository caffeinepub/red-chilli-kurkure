export default function SpicyAccents() {
  return (
    <>
      {/* Floating chilli decorations */}
      <div className="fixed top-20 left-10 w-24 h-24 opacity-20 pointer-events-none z-0 animate-float hidden lg:block">
        <img
          src="/assets/generated/red-chilli.dim_600x600.png"
          alt="Red chilli decoration"
          className="w-full h-full object-contain"
        />
      </div>

      <div
        className="fixed top-1/3 right-10 w-32 h-32 opacity-15 pointer-events-none z-0 animate-float hidden lg:block"
        style={{ animationDelay: "1s" }}
      >
        <img
          src="/assets/generated/red-chilli.dim_600x600.png"
          alt="Red chilli decoration"
          className="w-full h-full object-contain rotate-45"
        />
      </div>

      <div
        className="fixed bottom-32 left-20 w-28 h-28 opacity-10 pointer-events-none z-0 animate-float hidden lg:block"
        style={{ animationDelay: "2s" }}
      >
        <img
          src="/assets/generated/red-chilli.dim_600x600.png"
          alt="Red chilli decoration"
          className="w-full h-full object-contain -rotate-12"
        />
      </div>

      <div
        className="fixed bottom-1/4 right-1/4 w-20 h-20 opacity-10 pointer-events-none z-0 animate-float hidden xl:block"
        style={{ animationDelay: "1.5s" }}
      >
        <img
          src="/assets/generated/red-chilli.dim_600x600.png"
          alt="Red chilli decoration"
          className="w-full h-full object-contain rotate-90"
        />
      </div>
    </>
  );
}
