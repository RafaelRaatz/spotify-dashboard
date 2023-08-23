import { Play } from "lucide-react";
import Image from "next/image";

export function TrackCard() {
  return (
    <a
      href="#"
      className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
    >
      <Image
        src="/FirstAlbum.jpeg"
        width={108}
        height={108}
        alt="Capa Primeiro Album"
      />
      <strong>Matuê</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-5 invisible group-hover:visible">
        <Play />
      </button>
    </a>
  );
}
