import SittingWomanIlustration from "@/components/icons/sitting-woman.tsx";
import SittingManIlustration from "@/components/icons/sitting-man.tsx";

export const VectorBackground = () => {
  return (
    <>
      <div
        className="absolute top-12 w-full pointer-events-none"
        style={{
          background: "url(/vectors/programs.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "contain",
          height: "calc(100vh - 3rem)",
        }}
      ></div>
      <SittingWomanIlustration className="absolute hidden xl:block bottom-14 left-24 mb-1" />
      <SittingManIlustration className="absolute hidden xl:block bottom-12 right-24" />
    </>
  );
};
