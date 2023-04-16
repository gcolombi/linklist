import { ListHeader } from '@/lib/types';
import Image from 'next/image';

export default function LinksListHeader({
    avatar,
    name,
    content
}: ListHeader) {
    return (
        <div className="flex flex-col items-center">
            {avatar &&
                <div>
                    <Image
                        className="w-24 h-24 object-contain rounded-full"
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
            {content &&
                <div className="mt-1 px-10 text-sm text-white text-center sm:text-base">
                    <p>{content}</p>
                </div>
            }
        </div>
    );
};