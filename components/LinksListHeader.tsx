import { ListHeader } from '@/lib/types';
import Image from 'next/image';

export default function LinksListHeader({
    avatar,
    name
}: ListHeader) {
    return (
        <div className="flex flex-col items-center">
            {avatar &&
                <div>
                    <Image
                        className="rounded-full"
                        alt={name}
                        src={avatar}
                        width={96}
                        height={96}
                        priority
                    />
                </div>
            }
            <div className="mt-4">
                <h1 className="font-bold text-xl text-white">@{name}</h1>
            </div>
        </div>
    );
};