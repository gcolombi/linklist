import Image from 'next/image';
import data from '../data.json';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center mt-16">
            <Image
                className="rounded-full"
                alt={data.name}
                src={data.avatar}
                width={96}
                height={96}
                priority
            />
            <h1 className="font-bold mt-4 text-xl">{data.name}</h1>
        </div>
    )
}