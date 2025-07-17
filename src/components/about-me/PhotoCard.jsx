function PhotoCard() {
  return (
    <section className="relative h-[285px] w-[220px] duration-500 ease-linear transform-3d hover:rotate-y-180">
      {/* Front of the card */}
      <div className="bg-glass border-accent absolute h-full w-full rounded-lg border p-3 pb-7 backface-hidden">
        <img
          src="/imgs/pfp.png"
          alt="Bianca Santos"
          className="border border-white/15"
        />
      </div>

      {/* Back of the card */}
      <div className="border-accent absolute flex h-full w-full rotate-y-180 items-center justify-center rounded-lg border bg-linear-to-br from-[#9FC4EE]/15 to-transparent p-3 pb-7 backface-hidden">
        <img
          src="/imgs/pfp-back.png"
          alt="Outline"
          className="border border-white/10 blur-xs"
        />
        <img
          src="/imgs/sticker.png"
          alt="Sticker"
          className="absolute w-[120px]"
        />
        <p className="text-accent font-gabarito absolute text-5xl font-bold">
          &lt;/&gt;
        </p>
      </div>
    </section>
  )
}

export default PhotoCard
