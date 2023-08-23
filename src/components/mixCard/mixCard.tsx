import Image from 'next/image'

export const MixCard = () => {
    return (
        <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src="/DailyImage.jpeg" className='w-full' width={250} height={50} alt="Capa Primeiro Album" />
        <strong className='font-semibold'>Daily mix</strong>
        <span className='text-sm text-zinc-400'>Matuê, Orochi, Kayblack, Sidoka and more</span>
        </a>
    )
}